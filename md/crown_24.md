#1

![](https://i.imgur.com/QB3gi4e.png)

**index.ejs**

```html
<body>
  <h1><%= title %></h1>
  <p>Welcome to <%= title %></p>
  <p></p>
  <h3>My name is <%= name %></h3>
  <h3>My student id is <%= id %></h3>
</body>
```

**index.js**

```js
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express',
    name: '呂丞凱',
    id: '405410324',
  });
});
```

---

#2

![](https://i.imgur.com/arhhbyT.jpg)

**crown_24.ejs**

```html
<div class="homepage">
  <h3><%= name %></h3>
  <h3><%= id %></h3>
  <div class="directory-menu">
    <div class="menu-item">
      <img
        class="background-image"
        src="https://i.ibb.co/cvpntL1/hats.png"
        alt=""
      />
      <a href="./hats.html" class="content">
        <h1 class="title">HATS</h1>
        <span class="subtitle">SHOP NOW</span>
      </a>
    </div>
    <div class="menu-item">
      <img
        class="background-image"
        src="https://i.ibb.co/px2tCc3/jackets.png"
        alt=""
      />
      <a href="./jackets.html" class="content">
        <h1 class="title">JACKETS</h1>
        <span class="subtitle">SHOP NOW</span>
      </a>
    </div>
    <div class="menu-item">
      <img
        class="background-image"
        src="https://i.ibb.co/0jqHpnp/sneakers.png"
        alt=""
      />
      <a href="./sneakers.html" class="content">
        <h1 class="title">SNEAKERS</h1>
        <span class="subtitle">SHOP NOW</span>
      </a>
    </div>
    <div class="large menu-item">
      <img
        class="background-image"
        src="https://i.ibb.co/GCCdy8t/womens.png"
        alt=""
      />
      <a href="./womens.html" class="content">
        <h1 class="title">WOMENS</h1>
        <span class="subtitle">SHOP NOW</span>
      </a>
    </div>
    <div class="large menu-item">
      <img
        class="background-image"
        src="https://i.ibb.co/R70vBrQ/men.png"
        alt=""
      />
      <a href="./mens.html" class="content">
        <h1 class="title">MENS</h1>
        <span class="subtitle">SHOP NOW</span>
      </a>
    </div>
  </div>
</div>
```

**crown_24.js**

```js
router.get('/', function (req, res, next) {
  res.render('crown_24', {
    title: 'Express',
    name: '呂丞凱',
    id: '405410324',
  });
});
```

**app.js**

```js
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const crown_24_Router = require('./routes/crown_24');

app.use('/', indexRouter);
app.use('/crown_24', crown_24_Router);
app.use('/users', usersRouter);
```

---

#3

![](https://i.imgur.com/NUfjw8X.png)

---

#4

![](https://i.imgur.com/YGJ8wud.png)

---

#5

![](https://i.imgur.com/qL3Xa52.png)

**database.js**

```js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'crown_24',
  password: '0000',
  port: '5432',
});

pool.query('SELECT * FROM category_24', (err, res) => {
  console.log(JSON.stringify(res.rows));
  pool.end();
});

module.exports = pool;
```
