const aoijs =  require("aoi.js");

const bot = new aoijs.Bot({

  token: "your bot token",

  prefix: "!",

    intents: "all"

});

bot.command({
	name: 'status',
	code: `
  $onlyForIDs[your id;]
  $thumbnail[1;$serverIcon[$guildID]
  $author[1;Moderator status;$serverIcon]
  $description[1;
**$userTag[user id]** is now $replaceText[$replaceText[$replaceText[$replaceText[$status[user id];offline;:black_circle: Offline];online;:green_circle: Online];dnd;:red_circle: Do not disturb];idle;:yellow_circle: Idle]

**$userTag[user id]** is now $replaceText[$replaceText[$replaceText[$replaceText[$status[user id];offline;:black_circle: Offline];online;:green_circle: Online];dnd;:red_circle: Do not disturb];idle;:yellow_circle: Idle]

**$userTag[user id]** is now $replaceText[$replaceText[$replaceText[$replaceText[$status[user id];offline;:black_circle: Offline];online;:green_circle: Online];dnd;:red_circle: Do not disturb];idle;:yellow_circle: Idle]

**$userTag[user id]** is now $replaceText[$replaceText[$replaceText[$replaceText[$status[user id];offline;:black_circle: Offline];online;:green_circle: Online];dnd;:red_circle: Do not disturb];idle;:yellow_circle: Idle]

**$userTag[user id]** is now $replaceText[$replaceText[$replaceText[$replaceText[$status[user id];offline;:black_circle: Offline];online;:green_circle: Online];dnd;:red_circle: Do not disturb];idle;:yellow_circle: Idle]

**$userTag[user id]** is now $replaceText[$replaceText[$replaceText[$replaceText[$status[user id];offline;:black_circle: Offline];online;:green_circle: Online];dnd;:red_circle: Do not disturb];idle;:yellow_circle: Idle]

**$userTag[user id]** is now $replaceText[$replaceText[$replaceText[$replaceText[$status[user id];offline;:black_circle: Offline];online;:green_circle: Online];dnd;:red_circle: Do not disturb];idle;:yellow_circle: Idle]
  $color[1;BLUE]
  $footer[1;Updates every 10 seconds]
  $addTimestamp[1]`
});

bot.loopCommand({
	code: `$editMessage[message id;{newEmbed:{title:Moderator status}{description: 
**$userTag[user id]** is now $replaceText[$replaceText[$replaceText[$replaceText[$status[user id];offline;:black_circle: Offline];online;:green_circle: Online];dnd;:red_circle: Do not disturb];idle;:yellow_circle: Idle]

**$userTag[user id]** is now $replaceText[$replaceText[$replaceText[$replaceText[$status[user id];offline;:black_circle: Offline];online;:green_circle: Online];dnd;:red_circle: Do not disturb];idle;:yellow_circle: Idle]

**$userTag[user id]** is now $replaceText[$replaceText[$replaceText[$replaceText[$status[user id];offline;:black_circle: Offline];online;:green_circle: Online];dnd;:red_circle: Do not disturb];idle;:yellow_circle: Idle]

**$userTag[user id]** is now $replaceText[$replaceText[$replaceText[$replaceText[$status[user id];offline;:black_circle: Offline];online;:green_circle: Online];dnd;:red_circle: Do not disturb];idle;:yellow_circle: Idle]

**$userTag[user id]** is now $replaceText[$replaceText[$replaceText[$replaceText[$status[user id];offline;:black_circle: Offline];online;:green_circle: Online];dnd;:red_circle: Do not disturb];idle;:yellow_circle: Idle]

**$userTag[user id]** is now $replaceText[$replaceText[$replaceText[$replaceText[$status[user id];offline;:black_circle: Offline];online;:green_circle: Online];dnd;:red_circle: Do not disturb];idle;:yellow_circle: Idle]

**$userTag[user id]** is now $replaceText[$replaceText[$replaceText[$replaceText[$status[user id];offline;:black_circle: Offline];online;:green_circle: Online];dnd;:red_circle: Do not disturb];idle;:yellow_circle: Idle]
 }{thumbnail:$serverIcon[$guildID]}{footer:Updates every 10 seconds}{color:BLUE}{timestamp}}]

`,

	channel: 'channel id',

	executeOnStartup: true,

	every: 11000
});
// You can add more **$userTag[user id]** is now $replaceText[$replaceText[$replaceText[$replaceText[$status[user id];offline;:black_circle: Offline];online;:green_circle: Online];dnd;:red_circle: Do not disturb];idle;:yellow_circle: Idle]
