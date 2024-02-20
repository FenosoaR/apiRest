const slugger = (string)  =>{

    while(string.includes(' ')){
         string.replace(' ','-')
    }
    // return string.replaceAll(' ' ,'-')
    return string
  
}
module.exports = slugger