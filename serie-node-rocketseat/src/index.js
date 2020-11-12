const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

require('./controllers/authController')(app)

app.listen(3000)



                // Anotaçãoess

// O app é um objeto que é definido uma vez, mas precisamos referenciar o app do express em todos os outros arquivos

// const express = require('express')
// const bodyParser = require('body-parser')

// const app = express() // cria a aplicação

// app.use(bodyParser.json()) // para entender quando enviar uma requisição para a api com informaçoes em json
// app.use(bodyParser.urlencoded({ extended: false })) // quando passar parametros url

// app.get('/', (req, res) => {
//   res.send('massa')
// })

// app.listen(3000)



// app.get('/') -> rota raiz
// req -> dados da requisição (parametros, tolquem)
// res -> enviar alguma resposta pro usuario quando a rota for acessada 