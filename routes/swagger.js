const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../docs/swagger.json');

// var options = {
//     customCss: '.swagger-ui .topbar { display: none }'
//   };

router.use('/api-docs/*', swaggerUi.serve);
router.get('/api-docs/*', swaggerUi.setup(swaggerDocument));

module.exports = router;