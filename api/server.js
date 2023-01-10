const express = require('express');
const bodyParser = require('body-parser');

const swaggerUi = require('swagger-ui-express');

const config = require('../config/config');
const users = require('./users');
const auth = require('./auth/network');
const errors = require('../network/errors');

const app = express();
const fileUpload = require('express-fileupload');
const cors = require('cors');

app.use(bodyParser.json());
app.use(fileUpload());
app.use(cors());
app.use(express.json());

app.post('/upload', (req, res) => {
    console.log(req.files.file);
    res.send(`Archivo ${req.files.file.name} subido correctamente al servidor`);
    fileUpload.mv(req.files.file.tempFilePath, './images/');
});

const swaggerDoc = require('./swagger.json');
const err = require('../utils/error');

app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(errors);

app.listen(config.api.port, () => {
    console.log('Api corriendo en el puerto ', config.api.port);
});