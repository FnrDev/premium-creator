const { default: axios } = require("axios");
const config = require("./config.json");

async function generateBot(token, name) {
  const req = await axios({
    url: "https://discord.com/api/applications",
    method: "POST",
    headers: {
      Authorization: token,
    },
    "content-type": "application/json",
    data: {
      name,
    },
  }).catch(console.error);
    
  const data = req.data;
  console.log(data);
    
  await axios({
    url: `https://discord.com/api/applications/${data.id}/bot`,
    method: "POST",
    headers: {
      Authorization: token,
    },
    "content-type": "applicaction/json",
  }).catch(console.error);

  const getToken = await axios({
    url: `https://discord.com/api/applications/${data.id}/bot/reset`,
    method: "POST",
    headers: {
      Authorization: token,
    },
    "content-type": "applicaction/json",
  }).catch(console.error);

  console.log(getToken.data);
}

generateBot(config.token, "botname"); // first parameter (account's token), second parameter (bot's name)
