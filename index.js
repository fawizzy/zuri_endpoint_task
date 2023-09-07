const express = require("express");

const app = express();
const port = 5000;

app.get("/", (req, res)=>{
    const days = {
        0: "Sunday", 
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",       
    }
    const query = req.query;
    const date = new Date(Date.now())
    
    const slack_name = query.slack_name
    const track = query.track
    const current_day = days[date.getDay()]
    const dateString = "YYYY-MM-DDTHH:mm:ssZ"
    const utc_time = date
    const status_code = "200"
    const github_file_url = "https://github.com/fawizzy/zuri_endpoint_task.git"
    console.log(utc_time)
    res.json({
        slack_name,
        track,
        current_day,
        utc_time,
        status_code
    })

})


app.listen(port, ()=>{
    console.log("listening at PORT ", port)
})