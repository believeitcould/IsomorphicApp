# Isomorphic App

react + server-side-render 一个纯妹子图SPA，工作之余，提神醒脑。点击即可切换下一张。适配移动端。

在线预览 http://chuuup.applinzi.com/ooxx



## Screen Shot

![](./screenShot/1.jpg)   ![](./screenShot/2.jpg)



## Api

> http://i.jandan.net/?oxwlxojflwblxbsapi=jandan.get_ooxx_comments&page=1	煎蛋网
>
> https://www.douban.com/group/haixiuzu/discussion?start=0	豆瓣害羞组



## Run

```shell
git clone https://github.com/believeitcould/IsomorphicApp
cd IsomorphicApp
npm install
npm start
```

open browser http://localhost:3000/



## Structure

common

├─actions
│      
├─components
│      
├─containers
│      
├─reducers
│      
└─routes

server

│  client.js
│  controller.js
│  index.js
│  isomorphic.js
│  render.js
│  rest.js
│  
├─controllers
│      
└─public

client

│  index.js
            