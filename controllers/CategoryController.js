const {Categories} = require('../models')

const add = async(req,res) =>{
    const {name} = req.body

    try {

        const data = await Categories.create({name})
        return res.status(200).json({category:data})
        
    } catch (error) {

        return res.status(500).json({error:error.message})
    }
}

const getAll = async(req,res)=>{
    
    try {
        const data = await Categories.findAll()
        return res.status(200).json({categories:data})

        
    } catch (error) {
        return res.status(500).json({error:error.message})
        
    }
}

const getOne = async(req,res) =>{
    try {
        const data = await Categories.findOne({where:{id:req.params.id}})
        return res.status(200).json({category:data})

    } catch (error) {
        return res.status(500).json({error:error.message})
        
    }
}

const update = async(req,res) =>{
    try {
        await Categories.update({name:req.body.name} , {
            where:{id:req.params.id}
        })

        return res.status(200).json({message:'updated'})

    } catch (error) {
        return res.status(500).json({error:error.message})
        
    }
}

const remove = async(req,res)=>{

    try {
        await Categories.destroy({where:{id:req.params.id}})
        return res.status(200).json({message:'deleted'})


    } catch (error) {
        return res.status(500).json({error:error.message})
        
    }
}

module.exports = {add,getAll,getOne,remove,update}