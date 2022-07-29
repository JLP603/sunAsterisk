const mongoose=require('mongoose');
const ArticleSchema=mongoose.Schema({
    title:{
        type:String,
        required:true

    },

    content:{
        type:String,
        required:true

    },
    date:{
        type:String,
        required:true

    },
    /*
    month:{
        type:String,
        required:true

    },
    year:{
        type:String,
        required:true

    },
    */ 
});
const Article=module.exports=mongoose.model('Article',ArticleSchema);