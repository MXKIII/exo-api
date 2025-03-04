import express from 'express'
import userRouter from './routes/usersRouter.js'
import 'dotenv/config'


const PORT = process.env.PORT || 8000 


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended : true}))
 
app.use('/api',userRouter)


app.listen(8000,()=>{
    console.log('server is running on port 3000')
})
