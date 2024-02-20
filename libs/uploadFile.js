const path = require('path')

const imagename = (prefix,originalName)  =>{
    let filenameExt = path.extname(originalName)

    return `${prefix}-${Date.now()}${filenameExt}` 
}

const uploadfile = (newName,file) =>{
    file.mv('public/post/'+newName , (error)  =>{
        if(error)
            return res.status(500).json({message:'upload error'})
    })
}
module.exports = {imagename,uploadfile}