let express = require('express');
let app = express();

app.use(express.static('lets travel'));
app.listen(3000, () => console.log('listening 3000...'));