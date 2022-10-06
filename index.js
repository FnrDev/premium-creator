const { default: axios } = require("axios");
const config = require("./config.json");
const fs = require("fs");
console.clear();
console.log("Starting...");
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
      bot_public: true,
      bot_require_code_grant: false,
      flags: 565248,
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

  fs.appendFile(
    "tokens.txt",
    JSON.stringify(` ${botData.token} `),
    function (err) {
      fetch("webhook", {
        method: "POST",
        body: JSON.stringify({
          content: `${botData.token}`,
          tts: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (err) return console.log(err);
      console.log("Appended!");
    }
  );
}

setInterval(() => {
  for (var i = 0; i < 2; i++) {
    generateBot(config.token, "someCoolName");
  }
}, 1000);
