const {Users} =require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = async(req,res) => {
    const {fullname, email,confirmation ,password} = req.body

    const user = await Users.findOne({where:{email}})

    if(user)
        return res.status(200).json({message:'adresse email deja utilise'})

    if(confirmation != password)
        return res.status(200).json({message:'confirmation incorrecte'})

    const hashedPass = bcrypt.hashSync(password,12)

    const newUser = Users.build({
        fullname,
        email,
        password:hashedPass
    })

    const data = await newUser.save()


    const jwToken = jwt.sign(
        {
        id:data.id,
        email:data.email
        },
        "secret"
    )


    return res.status(201).json({message:'registered' , token:jwToken, users:data})

}
const login = async(req,res)=>{
    //login verification email sy mdp
    //password error
    //generer token
    //return token
    const {email,password} = req.body

    const user = await Users.findOne({where:{email}})
    
    if(!user){
        return res.status(200).json({message:'email invalide'})
    }
    
    const isValid = bcrypt.compareSync(password , user.password)


    if(!isValid){
        return res.status(200).json({message:'mot de passe incorrecte'})
    }

    const jwToken = jwt.sign(
        {
        id:user.id,
        email:user.email
        },
        "secret"
    )


    return res.status(201).json({message:'Connecté' , token:jwToken, user})
    
    }
module.exports = {register,login}

//info user
//json web token (zavatra makasika ilay user,payload =id na email,secret,de atao anatylocalstorage na cookies)