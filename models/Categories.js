module.exports = ( sequelize,datatype) =>{
    return sequelize.define('Categories',{
        id:{
            type:datatype.UUID,
            defaultValue:datatype.UUIDV4,
            primaryKey:true,
            //UUID chaine de caractere
        },
        name:{
            type:datatype.STRING,
            allowNull:false
        }
    })
}