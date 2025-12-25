import fs from 'fs/promises'

const addEvent = async(req,res) =>{
    try{
        const new_event={"eventname":req.body.eventname,
        "ticketsForSale":Number(req.body.ticketsForSale),
        "username":req.body.username,
        "password":req.body.password}
        const data =await fs.readFile("./data/events.json", "utf8");
            const events=await JSON.parse(data)
            events.push({
                "eventName":req.body.eventName,
                "ticketsAvailable":req.body.ticketsForSale,
                "createdBy":req.body.username
            })  
        await fs.writeFile("./data/events.json",JSON.stringify(events));
        res.json(new_event)
    }catch(err) {
      console.error('Error  writing file:', err);
    }
}

export{
    addEvent
}