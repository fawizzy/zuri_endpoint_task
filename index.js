const express = require("express");

const app = express();
const port = 5000;

app.get("/api", (req, res)=>{
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
    let utc_time = JSON.stringify(date)
    const status_code = "200"
    const github_file_url = "https://github.com/fawizzy/zuri_endpoint_task/blob/main/index.js"
    const github_repo_url = "https://github.com/fawizzy/zuri_endpoint_task.git"
    const utc_millis = utc_time.substring(20,24)
    utc_time = utc_time.replace(utc_millis,"")
    res.json({
        slack_name,
        current_day,
        utc_time,
        track,
        github_file_url,
        github_repo_url,
        status_code
    })

})


app.listen(port, ()=>{
    console.log("listening at PORT ", port)
})