module.exports = ( sequelize,datatype) =>{
    return sequelize.define('Posts',{
        id:{
            // type:datatype.UUID,
            // defaultValue:datatype.UUIDV4,
            type:datatype.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        title:{
            type:datatype.STRING,
            allowNull:false
        },
        content:{
            type:datatype.TEXT,
            allowNull:false
        },
        slugg:{
            type:datatype.STRING,
            allowNull:false
        },
        image:{
            type:datatype.STRING,
            allowNull:false
        },
        
    })
}