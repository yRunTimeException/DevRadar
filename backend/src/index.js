const express = require('express'); //Importando a biblioteca express
const mongoose = require('mongoose') //Importando o Mongoose
const cors = require('cors');
const routes = require('../src/routes') //Importando as rotas

const app = express(); //Inicia a aplicação

//Conecta ao servidor DB na nuvem
mongoose.connect('mongodb+srv://tonybsilva:Antonio45seis@devmaps-17arf.mongodb.net/devmaps?retryWrites=true&w=majority',{
  useNewUrlParser: true, useUnifiedTopology: true
});

app.use(cors());
app.use(express.json()); //Agora a aplicação entende requisições JSON
app.use(routes); // Agora as rotas estão cadastradas novamente

app.listen(3333); //Diz a porta de acesso