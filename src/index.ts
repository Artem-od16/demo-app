import express, {Request, Response} from 'express'
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req: Request, res: Response) => {
  let helloMessage = 'Hello Incubator.EU!!'
  res.send(helloMessage)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
