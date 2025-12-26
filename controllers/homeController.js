// Metodos importados de 'util.js'
const { logURL } = require('./utilController.js');

async function getHome(req, res)
{
    logURL(`GET`, `/`); 

    const body = 'homeView';

    res.render('layout', {body} );  
}

module.exports = { getHome };