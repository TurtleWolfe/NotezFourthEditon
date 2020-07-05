const app = express();
// Workaround for lack of __dirname in ES6 modules
const __dirname = dirname(new URL(import.meta.url).pathname);
// const error = require('debug')('notez:error');
import DBG from 'debug';
const debug = DBG('notez:debug');
const error = DBG('notez:error');
const { ensureDir } = fse;
import cookieParser from 'cookie-parser';
import createError from 'http-errors';
import express from 'express';
// import { ensureDir } from 'fs-extra';
import fse from 'fs-extra';
import logger from 'morgan';
import rfs from 'rotating-file-stream';
import { dirname, join } from 'path';
import util from 'util';
import { router as indexRouter } from './routes/index.mjs';
import { router as notesRouter } from './routes/notes.mjs';
// var usersRouter = require('./routes/users');
var logStream;
// Log to a file if requested
if (process.env.REQUEST_LOG_FILE) {
  (async () => {
    let logDirectory = dirname(process.env.REQUEST_LOG_FILE);
    await ensureDir(logDirectory);
    logStream = rfs(process.env.REQUEST_LOG_FILE, {
      size: '10M',     // rotate every 10 MegaBytes written
      interval: '1d',  // rotate daily
      compress: 'gzip' // compress rotated files
    });
  })().catch(err => { console.error(err); });
}
// view engine setup
import hnd_bars from 'hbs';
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'hbs');
hnd_bars.registerPartials(join(__dirname, 'partials'));

app.use(logger(process.env.REQUEST_LOG_FORMAT || 'dev', {
  stream: logStream ? logStream : process.stdout
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, 'public')));
app.use(express.static(join(__dirname, 'public')));
// app.use('/assets/vendor/bootstrap', express.static(
// path.join(__dirname, 'theme', 'bootstrap-4.5.0', 'dist')));
// path.join(__dirname, 'node_modules', 'bootstrap', 'dist')));
app.use('/assets/vendor/bootstrap/js', express.static(
  join(__dirname, 'node_modules', 'bootstrap', 'dist', 'js')));
app.use('/assets/vendor/bootstrap/css', express.static(
  join(__dirname, 'slate')));
app.use('/assets/vendor/jquery', express.static(
  join(__dirname, 'node_modules', 'jquery', 'dist')));
app.use('/assets/vendor/popper.js', express.static(
  join(__dirname, 'node_modules', 'popper.js', 'dist')));
app.use('/assets/vendor/feather-icons', express.static(
  join(__dirname, 'node_modules', 'feather-icons', 'dist')));

app.use('/', indexRouter);
app.use('/notes', notesRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

process.on('uncaughtException', function (err) {
  error("I've crashed!!! - " + (err.stack || err));
});

process.on('unhandledRejection', (reason, p) => {
  error(`Unhandled Rejection at: ${util.inspect(p)} reason: ${reason}`);
});

if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    // util.log(err.message); 
    res.status(err.status || 500);
    error((err.status || 500) + ' ' + error.message);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
