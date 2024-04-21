function some(a,b,callback)
{
     let s = a +b;
     callback(s);
}
some(5,6,function(x){    
     console.log(x)
})

// call back : c est de faire passer une fct comme parametre a une auttre fct
// save (file, data ,success , fail #this last 2 might be call backs# )