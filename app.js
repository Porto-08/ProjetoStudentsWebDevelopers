const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const path = require('path')


// Configurações
    // Handlebars
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    // Public
        app.use(express.static(path.join(__dirname,'public')))

// Rotas
    app.get('/', (req, res) => {
        res.render('index')
    })

    app.get('/index', (req, res) => {
        res.render('index')
    })

// Enviando Email


// Servidor
const port = 2012
app.listen(port, () => {
    console.log('Servidor Rodando na http://localhost:2012/')
})