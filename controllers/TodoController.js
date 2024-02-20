const {Todo} =require('../models')

const insert = async(req,res) =>{
    
    const {title,content} = req.body

    const newTodo = Todo.build({
        title,
        content
    })

    try {

        const data = await newTodo.save()

        return res.status(201).json({message:"created" , todo:data})

    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"error"})

    }
}

const modify = async(req,res) =>{
    const {title,content} = req.body
    const {id} = req.params

    try{

        await Todo.update({title,content} , {where:{id}})

        return res.status(200).json({message:"updated"})

    }catch(error){

        return res.status(500).json({message:"error"})

    }

}

const getAll = async(req,res) => {

    try {

        const data = await Todo.findAll()
        return res.status(200).json({todos:data})

    } catch (error) {
        
        return res.status(500).json({message:"error"})
        
    }
}
const getOne = async(req,res)=>{

    const {id} = req.params
    try {
        
        const data = await Todo.findOne({where:{id}})
        return res.status(200).json({todos:data})

    } catch (error) {

        return res.status(500).json({message:"error"})

    }
}

const remove = async(req,res)=>{
    const {id} = req.params

    try {

        await Todo.destroy({where:{id}})
        return res.status(200).json({message:"deleted"})
        
    } catch (error) {
        return res.status(500).json({message:"error"})
        
    }
}

module.exports = {insert,modify,getAll,getOne,remove}