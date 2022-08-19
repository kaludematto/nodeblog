const express = require('express')
const path = require('path');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

const router = require('./routes')

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

const connection = require('./config/connection');


app.use(router);

connection.sync().then(result => {
    console.log(result);
}).catch(error => {
    console.log(error)
});

app.listen(3333)

//TODO CONCEITO MVC 
//! Model - Modelo/Recurso
//*Exemplos: Posts, Comentários, Categorias, Tags, Usuários, Administradores
//! View - Vista/Tela/Rota
//*Exemplos: Página Home, Página de Post, Página de Login
//! Controller - Controle/Regra de Negocio
//*Exemplos: PostsController