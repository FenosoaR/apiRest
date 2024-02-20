const slugger = require('../libs/slugger')
const { imagename, uploadfile } = require('../libs/uploadFile')
const {Posts, Categories} = require('../models')

Categories.hasOne(Posts)
Posts.belongsTo(Categories)

const add = async(req,res) =>{

    const {title,content,category} = req.body
    const {image} = req.files

    const newImageName = imagename('BLOG',image.name)

    uploadfile(newImageName,image)

    const newPost = Posts.build({
        title,
        content,
        image:newImageName,
        slugg:slugger(title),
        CategoryId:category
    })
    // console.log(slugger(title))
    try {

        const data = await newPost.save()
        return res.status(200).json({post:data})
        
    } catch (error) {
        // console.log(error)
        return res.status(500).json({error:error.message})
        
    }


}

const getAll = async(req,res) =>{

    try {
        
        const data = await Posts.findAll({include : Categories})
        return res.status(200).json({posts:data})


    } catch (error) {
        return res.status(500).json({error:error.message})
        
    }
}

const getOne = async(req,res) =>{

    try {
        
        const data = await Posts.findOne({include : Categories} , {where:{id:req.params.id}})
        return res.status(200).json({posts:data})


    } catch (error) {
        return res.status(500).json({error:error.message})
        
    }
}


const remove = async(req,res)=>{

    try {
        await Posts.destroy({where:{id:req.params.id}})
        return res.status(200).json({message:'deleted'})


    } catch (error) {
        return res.status(500).json({error:error.message})
        
    }
}

const update = async(req,res)=>{
    const fs = require('fs')
    const {image} = req.files


    let data = {}

    if(image){

        data.title = req.body.title
        data.content = req.body.content
        data.category = req.body.category
        fs.unlinkSync('public/post'+newImageName)
        let imageName = imagename('BLOG',image.name)
        data.image = imageName
        uploadfile(imageName,image)

    }else{

        data.title = req.body.title
        data.content = req.body.content
        data.category = req.body.category
    }
    await Posts.update(data ,{where:{id:req.params.id}})
    
}

module.exports = {getOne,getAll,remove,update,add}


