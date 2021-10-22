const express = require('express');
const cors = require('cors');
const res = require('express/lib/response');
const app=express();
app.use(cors());
app.use(express.json())
const port=  4000;
app.get('/',(req,res)=>{
    res.send('I am exited')
})
const users =[
    {id:0,name:'sabana',email:'dd@jknh.com',phone:'012233'},
    {id:1,name:'sabnur',email:'dd@jknh.com',phone:'012233'},
    {id:2,name:'suchoti',email:'dd@jknh.com',phone:'012233'},
]
app.get('/users',(req,res)=>{
    const search= req.query.search
    if(search) {
const searchResult= users.filter(user=>user.name.toLocaleLowerCase().includes(search));
res.send(searchResult)
    }
    else {
        res.send(users)
    }
    

})

///app method
app.post('/users', (req,res) => {
    const newUser=req.body
    newUser.id=users.length
    users.push(newUser)
    console.log('heating the post',req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

app.get('/users/:id',(req,res)=>{
    const id=req.params.id;
    const user =users[id];
   res.send(user);
})
app.get('/fruits',(req,res)=>{
    res.send('mangos apple orange')
})
app.get('/fruits/mangoes/fozli',(req,res)=>{
res.send('yammy')
})
app.listen(port,()=>{
    console.log('this is port area',port);
})