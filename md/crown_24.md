#0

>我覺得這次學的速度算是蠻快的，也許是因為之前有學過一點的關係，能夠很快
>吸收老師所教的。
---

#1

![](https://i.imgur.com/SdbjQcy.png)

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

![](https://i.imgur.com/n4zrE3C.jpg)

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

![](https://i.imgur.com/PUdsusI.png)

---

#4

**Chrome 截圖**
![](https://i.imgur.com/TPFlsFJ.jpg)

[github repo url](https://github.com/zhps30149/1101-db-crown-405410324)

**Heroku 畫面**
![](https://i.imgur.com/FLtA4re.png)

---

#5

**DATABASE_URL:postgres://cushyzyimhdqpj:ff63412187b5ca992c6f6123a4bb69892f1e58cb649344af9d8c82dbe39c0ced@ec2-52-87-123-108.compute-1.amazonaws.com:5432/d5t0v8oincumq6**
![](https://i.imgur.com/wnq2u2b.png)

**Heroku 畫面**
![](https://i.imgur.com/r8kJzrz.png)

**DATABASE_URL**

```
host: ec2-52-87-123-108.compute-1.amazonaws.com
port: 5432
database: d5t0v8oincumq6
username: cushyzyimhdqpj
password: ff63412187b5ca992c6f6123a4bb69892f1e58cb649344af9d8c82dbe39c0ced
```

---

#6

**Chrome 截圖**
![](https://i.imgur.com/fX8eDIb.jpg)

**app.js**
![](https://i.imgur.com/u7IbV2F.png)

**routes/crown2_24.js**
![](https://i.imgur.com/5NTRbxV.png)

**views/crown2_24.ejs**
![](https://i.imgur.com/Ef71eJt.png)

---

#7

**Chrome 截圖**
![](https://i.imgur.com/5M3ORPq.jpg)

[github repo url](https://github.com/zhps30149/1101-db-crown-405410324)

---

#8

**Chrome 截圖**
![](https://i.imgur.com/W4qSDg4.png)

**app.js**
![](https://i.imgur.com/9IUKwCx.png)

**api_24.js**
![](https://i.imgur.com/ZfAzCbC.png)

**apiCrownController_24.js**
![](https://i.imgur.com/8XMmzn6.png)

---

#9

**Chrome 截圖**
![](https://i.imgur.com/2G4OVK2.png)

[github repo url](https://github.com/zhps30149/1101-db-crown-405410324)
