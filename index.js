const { default: axios } = require("axios");
const config = require('./config.json')

async function getData() {
    const req = await axios({
        url: "https://discord.com/api/v9/applications",
        method: "POST",
        headers: {
            Authorization: config.token
        },
        "content-type": "application/json",
        data: {
            name: 'fnrtest' // bot name you want to create
        },
    })
    const data = req.data
    console.log(data)
    const createBot = await axios({
        url: `https://discord.com/api/v9/applications/${data.id}/bot`,
        method: "POST",
        headers: {
            Authorization: config.token
        },
        "content-type": "applicaction/json",
    })
    const botData = createBot.data;
    console.log(botData)
}

getData()