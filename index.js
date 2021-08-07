
const fetch = require("node-fetch");
const config = require('./config.json')

async function getData() {
    const req = await fetch("https://discord.com/api/v9/applications", {
        method: "POST",
        headers: {
            "Authorization": config.token,
            body: JSON.stringify({
                name: 'fnrtest' // bot name you want to create
            })
        },
        "content-type": "application/json",
    })
    const data = req.data
    const createBot = await fetch(`https://discord.com/api/v9/applications/${data.id}/bot`, {
        method: "POST",
        headers: {
            "Authorization": config.token
        },
        "content-type": "applicaction/json",
    })
    console.log(createBot.data)
}

getData()
