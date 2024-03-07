import { Router } from "express";
const router = Router();

let users = [
    {
        id:"1",
        name:"Ingrid",
        address:"334",
        age:19
    }
]

//POST
router.post('/users/create', (req,res)=> {
    //BODY
    users.push(req.body)
    res.send("Hola")
})

//GET
router.get('/users', (req,res)=> {
    res.status(200).json(users)
})

//PUT
router.put('/user/update/:id', (req,res)=>{
    const user = users.find(u => u.id === req.params.id);
    if(!user){
        res.status(404).send("NO EXISTE TU USUARIO")
        return;
    }

    const updateUser = {...user,...req.body}

    users = users.map (u=>u.id === req.params.id ? updateUser : u);
    res.status(200).send("SI EXISTE Y YA FUE ACTUALIZADO ")
})

export default router;