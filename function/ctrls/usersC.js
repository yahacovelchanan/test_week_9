import fs from 'fs/promises'

const addUser = async(req,res) =>{
    try{
        const new_User={"username":req.body.username,
        "password":req.body.password}
        const data =await fs.readFile("./data/users.json", "utf8");
            const users=await JSON.parse(data)
            var serch_if_in=true
            for(let i=0;i<users.length;i++){
                if(users[i].username===req.body.username||
                    users[i].password===req.body.password){
                        serch_if_in=false
                    }}
            if(serch_if_in===true){
            users.push(new_User)  
        await fs.writeFile("./data/users.json",JSON.stringify(users));
        res.json(new_User)}
        if(serch_if_in===false){
            res.json({msg:"The user already exists in the system."})
        }
    }catch(err) {
      console.error('Error  writing file:', err);
    }
}


export{
    addUser
}