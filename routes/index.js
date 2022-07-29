const express=require('express')
const router=express.Router()
articles=[/*{
    "title":"test",
    "content":"content",
    "date":Date.now()
    
}*/]
router.get('/',(req,res)=>{
    res.render('main',{


    });
});

router.get('/createArticle',(req,res)=>{
    res.render('createArticle',{
        
    });
});

router.post('/createArticle',async (req,res)=>{
    //const{articletitle,articlecontent}=req.body;
    try{
        const date=Date.now();
        articles.push({
            date:Date.now().toString(),
            title:req.body.articletitle,
            content:req.body.articlecontent,
        })
        console.log(articles[0].articletitle+" "+articles[0].articlecontent+" "+articles[0].date)
        res.redirect('/')
    }catch{
        res.redirect('/createArticle')
    }
    
    /*
    let uploadArticle new article({title:req.body.articletitle,content:req.body.articlecontent,date:date})
    });
    */
});

router.get('/articleDetail',(req,res)=>{
    res.render('articleDetail',{
        
    });
});

router.get('/editArticle',(req,res)=>{
    res.render('editArticle',{
        
    });
});

module.exports=router