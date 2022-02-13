const aoijs =  require("aoi.js");

const bot = new aoijs.Bot({

  token: "ODI4NDUwMDgzMDc0MzQyOTEy.YGpwQw.vY9MZCxgEVf3O7M3eu4n1xmt00w",

  prefix: "~",

    intents: "all"

});
require('./dashboard.js')(bot,8080, "./commands/", "kek", "09771082211S") 

bot.onMessage();

const fs = require("fs");

const folders = fs.readdirSync("./commands/");

for (const files of folders) {

  const folder = fs

    .readdirSync(`./commands/${files}/`)

    .filter(file => file.endsWith(".js"));

  for (const commands of folder) {

    const command = require(`./commands/${files}/${commands}`);

    bot.command({

      name: command.name,

      aliases: command.aliases,

      description: command.description,

      usage: command.usage,

      code: command.code

    });

  }

}


bot.status({

  text: "Discord Network.",

  type: "COMPETING",

  time: 12

});

bot.readyCommand({

    channel: "", //You can use this or not.

    code: `$log[Ready on client $userTag[$clientID]]` //Enter the code / message.

});

bot.variables({

  prefix: "!",

  userRev: '',

 botName: '',

 botPrefix: '',

 messageIDB: '',

 ownerIDB: '',

  botID: '',

	user_ID: 'undefinied',

	user_message: 'undefinied',

	snipechannel: 'undefined',

	warn: '0',

		ID: '0',

	status: 'fg!help',

	messages: '0',

	joinmessage: '',

	joinchannel: '',

	leavemessage: '',

	leavechannel: '',

	rch: '',

	rmsg: 'Congrats {user.tag}, you leveled up to level {level}!:tada:',

	lvl: '1',

	exp: '0',

  	time: '',

	rexp: '30',

	rsystem: '0',

	warnr: '',

	rwr: '',

	msg: '',

	bjmoney: '0',

	bjus: '0',

	bjbot: '0',

	bjtotaluser: '0',

	bjtotalbot: '0',

  bugs: '0',

  warn: '0',

  mute: '',

      invite: "0",

        bugs: '0',

  message: '0',

msg3: '',

  ticketTitle: '',

user: '',

ticketchannel: '904190747224461373',

messageID: '',

ticketlimit: '',

categorything: '904645355939966976',

ticketC: '',

closed: '',

sent: 'true',

MSGID: '',

TSTID: '',

ticketid: "",
  ticketcat: "",
  ticketmessage: "",
  ticketafteropenmessage: "",
  ticketsystem1: "x",
  ticketchannelname: "",
  host: "",
  win: "",
  date: "",
  time: "",
  prize: ""

});


 const aoijs =  require("aoi.js");

const bot = new aoijs.Bot({

  token: "ODI4NDUwMDgzMDc0MzQyOTEy.YGpwQw.vY9MZCxgEVf3O7M3eu4n1xmt00w",

  prefix: "~",

    intents: "all"

});
require('./dashboard.js')(bot,8080, "./commands/", "kek", "09771082211S") 

bot.onMessage();

const fs = require("fs");

const folders = fs.readdirSync("./commands/");

for (const files of folders) {

  const folder = fs

    .readdirSync(`./commands/${files}/`)

    .filter(file => file.endsWith(".js"));

  for (const commands of folder) {

    const command = require(`./commands/${files}/${commands}`);

    bot.command({

      name: command.name,

      aliases: command.aliases,

      description: command.description,

      usage: command.usage,

      code: command.code

    });

  }

}


bot.status({

  text: "Discord Network.",

  type: "COMPETING",

  time: 12

});

bot.readyCommand({

    channel: "", //You can use this or not.

    code: `$log[Ready on client $userTag[$clientID]]` //Enter the code / message.

});

bot.variables({

  prefix: "!",

  userRev: '',

 botName: '',

 botPrefix: '',

 messageIDB: '',

 ownerIDB: '',

  botID: '',

	user_ID: 'undefinied',

	user_message: 'undefinied',

	snipechannel: 'undefined',

	warn: '0',

		ID: '0',

	status: 'fg!help',

	messages: '0',

	joinmessage: '',

	joinchannel: '',

	leavemessage: '',

	leavechannel: '',

	rch: '',

	rmsg: 'Congrats {user.tag}, you leveled up to level {level}!:tada:',

	lvl: '1',

	exp: '0',

  	time: '',

	rexp: '30',

	rsystem: '0',

	warnr: '',

	rwr: '',

	msg: '',

	bjmoney: '0',

	bjus: '0',

	bjbot: '0',

	bjtotaluser: '0',

	bjtotalbot: '0',

  bugs: '0',

  warn: '0',

  mute: '',

      invite: "0",

        bugs: '0',

  message: '0',

msg3: '',

  ticketTitle: '',

user: '',

ticketchannel: '904190747224461373',

messageID: '',

ticketlimit: '',

categorything: '904645355939966976',

ticketC: '',

closed: '',

sent: 'true',

MSGID: '',

TSTID: '',

ticketid: "",
  ticketcat: "",
  ticketmessage: "",
  ticketafteropenmessage: "",
  ticketsystem1: "x",
  ticketchannelname: "",
  host: "",
  win: "",
  date: "",
  time: "",
  prize: ""

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
