import fs from 'fs/promises'

const getPurchaseSummary = async (req, res) => {
    try {
        const data =await fs.readFile("./data/receipst.json", "utf8");
        const receipst=await JSON.parse(data)
        let totalTicketsBought=0
        const events=[]
        for(let i=0;i<receipst.length;i++){
            if(receipst[i].username===req.params.username){
                totalTicketsBought+=receipst[i].ticketsBought
                events.push(receipst[i].eventName)
            }
        }
        res.json({"totalTicketsBought":Number(totalTicketsBought),
            "events":events,
            "averageTicketsPerEvent":Number(totalTicketsBought/events.length)
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err });
    }
}

export{
    getPurchaseSummary
}