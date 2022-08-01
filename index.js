const { default: axios } = require("axios");
const config = require("./config.json");

/**
 * @param {string} token - The account token 
 * @param {string} name - The bot name to create
 */

async function generateBot(token, name) {
  const req = await axios({
    url: "https://discord.com/api/applications",
    method: "POST",
    headers: {
      Authorization: token,
    },
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
  }).catch(console.error);

  const getToken = await axios({
    url: `https://discord.com/api/applications/${data.id}/bot/reset`,
    method: "POST",
    headers: {
      Authorization: token,
    },
  }).catch(console.error);

  console.log(getToken.data);

  return getToken.data;
}

generateBot(config.token, "someCoolName");
