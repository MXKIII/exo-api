import { Router } from "express"
import users from "../data/users.js"

const userRouter = Router()

userRouter.get('/users/:id', (req,res)=>{
    const userID = req.params.id
    const userByID= users.find(user => user.id == parseInt(userID))
    if(!userByID){
        return res.status(404).json ({message: 'user not found'})
    }
    return res.json(userByID)
})

userRouter.post('/users', (req,res)=>{
    const {firstName, lastName, telephone, address, hobbies} = req.body
    const newuser ={
        id : users.length + 1,
        firstName, 
        lastName, 
        telephone, 
        address, 
        hobbies
    }
    users.push(newuser)
    return res.status(201).json(newuser)
})

userRouter.put('/users/:id', (req,res)=>{
    const {id} = req.params
    const {firstName, lastName, telephone, address, hobbies} = req.body
    let userByID= users.find(user => user.id == parseInt(id))
    if(!userByID){
        return res.status(404).json ({message: 'user not found'})
    }
    userByID ={
        id : userByID.id,
        firstName: firstName || userByID.firstName,
        lastName: lastName|| userByID.lastName,
        telephone: telephone|| userByID.telephone,
        address: address|| userByID.address,
        hobbies: hobbies || userByID.hobbies,
    }
    return res.status(201).json(userByID)
})

userRouter.delete('/users/:id', (req,res)=>{
    const {id}= req.params
   try{
    let userByID= users.find(user => user.id == parseInt(id))
    if(!userByID){
        return response.status(404).json ({message: 'user not found'})
    }
    const userIndex = users.indexOf(userByID)
    users.splice(userIndex, 1)
    return res.status(202).json('user has been deleted')
   }
   catch(err){
        console.log(err)
   }
})

export default userRouter