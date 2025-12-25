import fs from 'fs/promises'

const buyTickets  = async(req,res) =>{
    try{
        const buy={"username":req.body.username,
        "password":req.body.password,
        "eventName":req.body.eventName,
        "quantity":Number(req.body.quantity)}
            const data_for_events =await fs.readFile("./data/events.json", "utf8");
            const events=await JSON.parse(data_for_events)
            for(let i=0;i<events.length;i++){
                if(events[i].eventName===req.body.eventName){
                    if(events[i].ticketsAvailable!==0){
                    events[i].ticketsAvailable-=req.body.quantity
                }else{
                    res.json({msg:"Tickets for this event are sold out."})
                }}}
            const data_for_receipts =await fs.readFile("./data/receipst.json", "utf8");
            const receipts=await JSON.parse(data_for_receipts)
            receipts.push({
                "username":buy.username,
                "eventName":buy.eventName,
                "ticketsBought":buy.quantity})
        await fs.writeFile("./data/events.json",JSON.stringify(events));
        await fs.writeFile("./data/receipst.json",JSON.stringify(receipts));
        res.json({msg:"Tickets purchased successfully"})
    }catch(err) {
      console.error('Error  writing file:', err);
    }
}

export{
    buyTickets
}