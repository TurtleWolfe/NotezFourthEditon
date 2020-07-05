# Notez

## Chapter 05

### V section 04

chapter 05  
section 04  
**_`models views routes & partials`_**

```bash Ch-05 section 4

# curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
# curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
# curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
# sudo apt purge nodejs
# sudo apt remove nodejs
# sudo apt-get install -y nodejs
npx express-generator --view=hbs --git notez
# npx express-generator@4.x --view=hbs --git notez
cd notez && npm install
npm audit fix
git init
git add .
# npm i hbs@4.1.1
mkdir models
mkdir partials
touch models/Note.js
touch models/notes-memory.js
touch partials/header.hbs
touch routes/notes.js
touch views/noteedit.hbs
touch views/noteview.hbs
touch views/notedestroy.hbs
# DEBUG=notez:* npm start
git remote add origin https://github.com/TurtleWolf/Notez.git
git push -u origin master
git status

```

---

### V section 05

chapter 05  
section 05  
**_`styles.css`_**

---

### V section 06

chapter 05  
section 06
**_`package.json`_**

---

## Chapter 06

---

### VI section 04

chapter 06  
section 04  
**_`jQuery Poppers BootStrap & assets`_**

```bash Ch-06 section 4

npm i bootstrap jquery popper.js@1.16.x
mkdir public/assets
mv public/images/ public/javascripts/ public/stylesheets/ public/assets/
npm start
npm run server1
npm run server2
```

---

### VI section 06

chapter 06  
section 06  
**_`Mobile-first with feather-icons`_**

```bash Ch-06 section 6

npm i feather-icons
npm start

```

---

### VI section 07

chapter 06  
section 07  
**_`slate theme`_**

<!--
```bash Ch-06 section 7
mkdir theme
touch theme/package.json
touch theme/_custom.scss
cd theme
npm init -y
``` -->

```bash Ch-06 section 7

npm run dl-slate
```

---

## Chapter 07

---

### VII section 03

chapter 07  
section 03  
**_`debug logging`_**

```bash section 3

REQUEST_LOG_FORMAT=common npm start
npm i rotating-file-stream
npm i fs-extra
# npm i util
DEBUG=express:* npm start

```

---

### VII section 04

chapter 07  
section 04  
**_`mjs modules`_**

```bash section 4

mv app.js app.mjs
mv bin/www bin/www.mjs
# cd models
mv models/Note.js models/Note.mjs
mv models/notes-memory.js models/notes-memory.mjs
# cd routes
mv routes/index.js routes/index.mjs
mv routes/notes.js routes/notes.mjs
# npm i esm
# npm -r esm start
# npm uninstall esm

```

<!-- # MAY NOT NEED..
mv app.mjs app.js
mv bin/www bin/www.js
# cd models
mv models/Note.mjs models/Note.js
mv models/notes-memory.mjs models/notes-memory.js
# cd routes
mv routes/index.mjs routes/index.js
mv routes/notes.mjs routes/notes.js -->

---

### VII section 05

chapter 07  
section 05  
**_`storage file_system`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 5
npm run start-fs
npm run server1
npm run server2
```

---

### VII section 06

chapter 07  
section 06  
**_`storage LevelUP`_**

```bash section 6
 npm i level
 touch models/notes-level.mjs
 npm run start-level
```

---

### VII section 07

chapter 07  
section 07  
**_`SQL with SQLite3`_**

```bash section 7
npm i sqlite3
touch models/schema-sqlite3.sql
npm run sqlite3-setup
touch models/notes-sqlite3.mjs
npm run start-sqlite3
DEBUG=notez:* npm run start-sqlite3
npm run start-sqlite3
sqlite3 chap07.sqlite3
```

**_`SQL with SQLite3`_**

```sql
select * from notes;
```

---

### VII section 08

chapter 07  
section 08  
**_`ORM way with Sequelize`_**

```bash section 8
npm i sequelize
npm i js-yaml
touch models/notes-sequelize.mjs
touch models/sequelize-sqlite.yaml
```

---

### VII - section 09

chapter 07  
section 09  
**_`MongoDB`_**

````bash section 9
 1916  wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -
 1917  echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list
 1919  sudo apt-get install -y mongodb-org
 1920  which mongo
 1921  mongo
 1922  echo "mongodb-org hold" | sudo dpkg --set-selections
 1923  echo "mongodb-org-server hold" | sudo dpkg --set-selections
 1924  echo "mongodb-org-shell hold" | sudo dpkg --set-selections
 1925  echo "mongodb-org-mongos hold" | sudo dpkg --set-selections
 1926  echo "mongodb-org-tools hold" | sudo dpkg --set-selections
 1927  sudo systemctl start mongod
 1928  sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
 1929  echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
 1930  sudo apt-get update
 1931  sudo apt-get install -y mongodb-org
 1932  sudo apt-get purge mongodb-org*
 1933  Remove MongoDB
 1934  mongo db
 1935  sudo apt install mongodb-clients
 1936  mongo db
 1937  sudo apt-get purge mongodb mongodb-clients mongodb-server mongodb-dev
 1938  sudo apt-get purge mongodb-10gen
 1939  sudo apt-get autoremove
 1940  sudo apt-key adv --keyserver keyserver.ubuntu.com --recv 7F0CEB10
 1941  nano /etc/apt/sources.lists
 1942  sudo nano /etc/apt/sources.lists
 1943  nano /etc/apt/sources.lists
 1945  sudo apt-get install mongodb-10gen
 1946  sudo rm /var/lib/mongodb/mongod.lock
 1947  mongod --repair
 1948  sudo apt install mongodb-server-core
 1949  sudo service mongodb start
 1950  mongo
 1951  mongodb
 1952  mongod
 1953  sudo service mongodb start
 1954  mongo
 1955  mongod
 1956  mongod --repair
 1957  which mongod
 1960  sudo apt remove mongod
 1961  mongodb
 1962  sudo rm /var/lib/mongodb/mongod.lock
 1963  sudo apt-get purge mongodb-org*
 1964  sudo rm -r /var/log/mongodb /var/lib/mongodb
 1965  sudo apt-get purge mongod*
 1966  mongodb
 1967  which mongod
 1968  nano /etc/apt/sources.lists
 1969  sudo nano /etc/apt/sources.lists
 1970  nano /etc/apt/sources.lists
 1975  which mongo
 1976  mongo
 1977  sudo apt install mongodb-clients
 1978  mongo
 1979  mongodb
 1980  sudo apt uninstall mongodb-clients
 1981  sudo apt remove mongodb-clients
 1982  sudo apt purge mongodb-clients
 1984  mongo
 1985  which mongo
 1986  mongodb
 1987  mongod
 1988  sudo apt install mongodb-server-core
 1989  mongod
 1990  sudo apt install mongodb-clients
 1991  mongod
 1992  which mongo
 1993  mongodb
 1994  mongod
 1999  npm i mongodb
 2000  npm audit
 2002  touch models/notes-mongodb.mjs
---

## Chapter 08

---

### 8 - III

```bash section 3
section 3
````

### 8 - IV

```bash section 4
section 4
```

### 8 - V

```8 - bash section 5
section 5
```

### 8 - VI

```bash section 6
section 6
```

### 8 - VII

```bash section 7
section 7
```

### 8 - VIII

```bash section 8
section 8
```

### 8 - IX

```bash section 9
section 9
```

1. [![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 1')David Herron:](https://www.google.com "Google's Homepage")

1. [![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 1')Andy Harris:](https://www.google.com "Google's Homepage")

1. [![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 1')Dylan Isreal:](https://www.google.com "Google's Homepage")

1. [![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 1')Snow:](https://www.google.com "Google's Homepage")

1. [![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 1')Stephen Meyuex:](https://www.google.com "Google's Homepage")

1. [![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 1')Brad Traversy:](https://www.google.com "Google's Homepage")

1. [![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 1')Maximillian Schwartz:](https://www.google.com "Google's Homepage")

1. [![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 1')Brett Fischer:](https://www.google.com "Google's Homepage")

1. [![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 1')Inline-style:](https://www.google.com "Google's Homepage")

1. [![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 1')Inline-style:](https://www.google.com "Google's Homepage")

chapter 07
section 04
es6 modules
