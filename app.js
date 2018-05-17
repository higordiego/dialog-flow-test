import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())


app.post('/echo', (req, res, next) => {
    console.log(req.body)
    var speech = req.body.result && req.body.result.parameters && req.body.result.parameters.echoText ? req.body.result.parameters.echoText : "Não Entendi, por favor repita!"
    res.json({ speech: speech, displayText: speech, source: "webhook-echo-sample" })
})


app.listen(8000, () => console.log('fly witch on http://localhost:8000'))
