const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (requisicao, resposta) => {
    var nome = 'laura'
    resposta.render('index', {nome: nome})
})

app.get('/boasvindas', (requisicao, resposta) => {
    var nome = 'laura'
    var idade = '19 anos'
    resposta.render('bem_vindo', {nome: nome, idade: idade})
})

app.get('/despedida', (requisicao, resposta) => {
    var nome = 'laura'
    resposta.render('tchau', {nome: nome})
})

app.listen(3000, ()=>{console.log('Servidor rodando na porta 3000')})