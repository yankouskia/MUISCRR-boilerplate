const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('combined'));
app.use(express.static('dist'));
app.use('/statics', express.static('statics'));

app.post('/send-feedback', (req, res) => res.send({ status: 'ok' }));
app.get('*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`));
app.listen(port, () =>
  console.log(`App started successfully on port ${port} ...`),
);
