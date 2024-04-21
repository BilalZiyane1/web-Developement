const express = require("express")
const fs = require('fs')
const app = express()
const PORT = 3000
app.use(express.static("./static"))
app.use(express.json())

app.get('/posts',(req,res)=>{
  fs.readFile("./bd/posts.json",(err,data)=>{
    if(err)
      return res.status(500).send("server Error")
    const posts = JSON.parse(data.toString()).posts
    res.status(200).json(posts)
  })
})

app.post('/posts',(req,res)=>{
  let {postcontent} = req.body
  fs.readFile("./bd/posts.json",(err,data)=>{
    if(err)
      return res.status(500).send("server Error")
    let posts = JSON.parse(data.toString())
    const newPost ={
      id:posts.lastid,
      postcontent
    }
    posts.posts.push(newPost)
    posts.lastid ++
    fs.writeFile("./bd/posts.json",JSON.stringify(posts,null,4),(err)=>{
      if(err)
          return res.status(500).send("error on the server")
      res.status(201).json(newPost)
  })

  }
  )
  
})


app.listen(PORT,()=>console.log("server started at ", PORT))