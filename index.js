const express = require('express');
const app = express();
const path = require('path');

// Sử dụng thư mục "public" để chứa file HTML, CSS, JS
app.use(express.static(path.join(__dirname, 'public')));

// Lắng nghe tại cổng 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
