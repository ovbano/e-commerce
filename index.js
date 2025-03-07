const express = require('express'); // Importar express
const cors = require('cors'); //importación de cors
const helmet = require('helmet'); // importación de helmet


const app = express(); // Asignar express a mi aplicación
app.use(cors()); // añadir el modulo cors
app.use(helmet()); // añadir el modulo helmet

const routerApi = require('./routes'); // Importar las rutas
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');
const port = 3000; // Asignación puerto donde se ejecutará el proy
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola servidor de express');
});
app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi puerto' + port);
});
