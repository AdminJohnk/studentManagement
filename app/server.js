const express = require('express');
const router = require('./routers/root.router');
const app = express();
const port = 7000;

// Chuyển tất cả các req, res sang dạng JSON
app.use(express.json());

app.use(router);

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

// setup sequelize
const { sequelize } = require('./model/index');
sequelize.sync({alter: true}); // chỉ sửa bảng chứ ko xóa bảng



