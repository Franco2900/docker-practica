// Metodos importados de 'util.js'
const { logURL } = require('./utilController.js');

async function getContacto(req, res)
{ 
    logURL(`GET`, `/contacto`);

    const body = 'contactoView';

    res.render('layout', {body} ); 
}

module.exports = { getContacto };