import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()

const port = 5000


app.use(cors())
app.get('/', (req: Request, res: Response) => {
  res.send('The sedulous hyena ate the antelope!');
})
app.get('/shum', (req: Request, res: Response) => {
  res.send({testRes: 'shumtestres'})
})

app.listen(port, () => {
  console.log(`server is listening to me on ${port}`);
})