module.exports = ( sequelize,datatype) =>{
    return sequelize.define('Todo',{
        id:{
            primaryKey:true,
            autoIncrement:true,
            type:datatype.INTEGER
        },
        title:{
            type:datatype.STRING,
            allowNull:false
        },
        content:{
            type:datatype.TEXT,
            allowNull:false
        }
    })
}