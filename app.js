import express from "express";
import usersRouter from "./function/routes/usersR.js"
import eventsRouter from "./function/routes/eventsR.js"
import receipstRouter from "./function/routes/receipstR.js"
import utilsRouter from "./function/routes/utilsR.js"




const app = express();
const port = 3008;

app.use(express.json());

app.use("/user/register",usersRouter)
app.use("/creator/events",eventsRouter)
app.use("/users/tickets/buy",receipstRouter)
app.use("/users",utilsRouter)








app.listen(port, () => {
    console.log(`server runing on http://localhost:${port}`);
})