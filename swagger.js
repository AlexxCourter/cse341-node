const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description:
      'This API allows the user to create contacts, find them later, update them, and delete them if necessary.'
  },
  host: 'https://alex-courter-cse341.onrender.com',
  schemes: ['http']
};

const outputFile = './api-docs/swagger.json';
const endpointsFiles = ['./routes/index.js'];

/* NOTE: if you use the express Router, you must pass in the 
     'endpointsFiles' only the root file where the route starts,
     such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);
