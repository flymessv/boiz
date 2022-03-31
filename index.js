setTimeout(() => {
console.log('Loading...');
}, 300);
setTimeout(() => {
console.log('Processing...');
}, 900);
setTimeout(() =>{
console.log('[Владимир] - bot activated!');
}, 1200);
const { VK } = require('vk-io');
const vk = new VK();
const commands = [];
const request = require('prequest');
let user = new VK();
const requests = require('request');
const fs = require("fs");
const rq = require("prequest");
const bot_owner = 181184435;
const {Keyboard} = require('vk-io');
let giving = false;
var wall_to_send = '';
//--------------КАСТЕТЫ--------------------//
const kastets = [ 
{
name: "Кастет 1lvl", 
id: 1, 
cost: 35
}, 
{
name: "Кастет 2lvl", 
id: 2, 
cost: 50
}, 
{
name: "Кастет 3lvl", 
id: 3, 
cost: 80
} 
];
const kastetsups = [ 
{
name: "Кастет 2lvl", 
id: 2, 
cost: 15
}, 
{
name: "Кастет 3lvl", 
id: 3, 
cost: 45
}
];
const kastetssups = [
{
name: "Кастет 3lvl",
id: 3,
cost: 30
}
];

//----------------МЕЧИ--------------------//
const mechs = [ 
{
name: "Меч 1lvl", 
id: 1, 
cost: 50
}, 
{
name: "Меч 2lvl", 
id: 2, 
cost: 80
}, 
{
name: "Меч 3lvl", 
id: 3, 
cost: 110
} 
];
const mechsups = [ 
{
name: "Меч 2lvl", 
id: 2, 
cost: 30
}, 
{
name: "Меч 3lvl", 
id: 3, 
cost: 60
}
];
const mechssups = [
{
name: "Меч 3lvl",
id: 3,
cost: 30
}
];
//----------------САБЛИ--------------------//
const sablyas = [ 
{
name: "Сабля 1lvl", 
id: 1, 
cost: 80
}, 
{
name: "Сабля 2lvl", 
id: 2, 
cost: 110
}, 
{
name: "Сабля 3lvl", 
id: 3, 
cost: 150
} 
];
const sablyasups = [ 
{
name: "Сабля 2lvl", 
id: 2, 
cost: 30
}, 
{
name: "Сабля 3lvl", 
id: 3, 
cost: 70
}
];
const sablyassups = [
{
name: "Сабля 3lvl",
id: 3,
cost: 40
}
];

const utils = {
sp: (int) => {
int = int.toString();
return int.split('').reverse().join('').match(/[0-9]{1,3}/g).join('.').split('').reverse().join('');
},
rn: (int, fixed) => {
if (int === null) return null;
if (int === 0) return '0';
fixed = (!fixed || fixed < 0) ? 0 : fixed;
let b = (int).toPrecision(2).split('e'),
k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3),
c = k < 1 ? int.toFixed(0 + fixed) : (int / Math.pow(10, k * 3) ).toFixed(1 + fixed),
d = c < 0 ? c : Math.abs(c),
e = d + ['', 'тыс', 'млн', 'млрд', 'трлн'][k];

e = e.replace(/e/g, '');
e = e.replace(/\+/g, '');
e = e.replace(/Infinity/g, 'ДОХЕРА');

return e;
},
gi: (int) => {
int = int.toString();

let text = ``;
for (let i = 0; i < int.length; i++)
{
text += `${int[i]}&#8419;`;
}

return text;
},
decl: (n, titles) => { return titles[(n % 10 === 1 && n % 100 !== 11) ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2] },
random: (x, y) => {
return y ? Math.round(Math.random() * (y - x)) + x : Math.round(Math.random() * x);
},
pick: (array) => {
return array[utils.random(array.length - 1)];
},
time: () => {
return parseInt(new Date().getTime()/1000)
}
}

let btc = 6000;

let users = require('./users.json');
let buttons = [];

setTimeout(async () => {
const rq = await request('https://api.cryptonator.com/api/ticker/btc-usd');

if(!rq.ticker) return;
if(!rq.ticker.price) return;

btc = Math.floor(Number(rq.ticker.price));
}, 5);

setInterval(async () => {
const rq = await request('https://api.cryptonator.com/api/ticker/btc-usd');

if(!rq.ticker) return;
if(!rq.ticker.price) return;

btc = Math.floor(Number(rq.ticker.price));
}, 60000);

setInterval(async () => {
await saveUsers();
console.log('saved');
}, 30000);

async function saveUsers()
{

require('fs').writeFileSync('./users.json', JSON.stringify(users, null, '\t'));
return true;
}


vk.setOptions({ token: process.env.SECRET_TOKEN, pollingGroupId: 181184435 });
const { updates, snippets } = vk;
updates.startPolling();
updates.on('message', async (message) => {
if(Number(message.senderId) <= 0) return;
if(/\[club181184435\|(.*)\]/i.test(message.text)) message.text = message.text.replace(/\[club181184435\|(.*)\]/ig, '').trim();

if(!users.find(x=> x.id === message.senderId))
{
const [user_info] = await vk.api.users.get({ user_id: message.senderId });
const date = new Date();

users.push({
id: message.senderId,
idtwo: message.Id,
uid: users.length,
admin: false,
balance: 0,
backto: 1,
xod: 0,
xodLOCK: 0,
heal: 6500,
biz: 0,
exp: 0,
lvl: 0,
start: 0,
gold: 0,
biz: 0,
regDate: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`,
ban: false,
tag: user_info.first_name,
notifications: true,
damageNima: 0,
areoReturn: 0,
CanSearch: 0,
SearchBan: false,
helpTrue: false,
Decency: 5000,
DecencyBan: false,
DecencyCounter: 1,
Deistvie: false,
Coins: 0,
misc: {
changenickname: 0,
kastet: 0,
mech: 0,
sablya: 0, b11dcff15f12a55b42178ebcf420e2de9fac9a20c809ac88e5592de0c8d521b8a9d7fc10eb3322a29ec65
ready: 0,
vizov: 0,
chest: 0,
whereiscrit: 0,
firstnameS: user_info.first_name,
oskolki: 0,
OPENCHEST: 0,
CHESTOPEN: 0,
change: 0,
nasmeshka: 0,
nasmeshkaLOCK: 0,
nasmeshkaNotice: false,
weapon: 'кулак',
bannick: false,
yvedomFORshop: 0,
shield: 0,
magicTime: 0,
magicBlood: 0,
goMaticTime: 0,
goMagicBlood: 0,
goMagicTimeTwo: 0,
goMagicBloodTwo: 0,
goDamageMagicTime: 0,
goDamageMagicTBlood: 0,
meta: 0,
vamp: 0,
areo: 0,
nima: 0,
block: 0,
metaRest: 0,
metaUse: 0,
nimaUse: 0,
nimaSCREAM: 0,
blockUse: 0,
nimaRest: 0,
areoReady: 0,
createAreo: 0,
areoAttackReadyForShield: 0,
areoShield: 0,
ability: 0,
Dark: 0,
nimaSCREAMrest: 0,
DarkRest: 0,
nimaCanBeUsed: 0,
nimaHaunt: 0,
nimaHauntRest: 0,
areoRest: 0,
nimaUseHaunt: 0,
nimaOneTime: 1,
areoOneTime: 1,
areoOneTime2: 1,
Dark2: 0,
bloodTime: false,
AreoChanse: 0,
areoXod: 0,
},
perki: {
OnePerk: 0,
TwoPerk: 0,
ThreePerk: 0,
FourPerk: 0,
OnePerkLvl: 0,
TwoPerkLvl: 0,
ThreePerkLvl: 0,
FourPerkLvl: 0,

},
level: {
level2: 100,
level3: 170,
level4: 240,
level5: 310,
level6: 390,
level7: 470,
level8: 530,
level9: 640,
level10: 740,
},
friendsList:{
friend: 0,
friendName: ``,
friendID: ``,
},
pve: {
completeOFpve: false,
FIRSTtime: true,
ofcourseinformation: false,
VisitWitch: false,
FirstLocationOfWitch: false,
winOfBOSS1: 0,
winOfBOSS2: 0,
winOfBOSS3: 0,
winOfBOSS4: 0,
winofBOSS5: 0,
winofBOSS56: 0,
winofBOSS57: 0,
winofBOSS58: 0,
winofBOSS59: 0,
helpWitch: 0,
vstrecha: 0,
witchfly: false,
twodemons: 1,
twodemonsattack: 1,
training: 1,
heal: 0,
WINdem1: 0,
WINdem2: 0,
lock: false,
whereiam: 0,
hpDEMON1: 0,
hpDEMON2: 0,
first: true,
twodemswerewon: false,
twodemswerewonnotice: false
}
});
}
message.user = users.find(x=> x.id === message.senderId);
const bot = (text, params) => {
return message.send(`${message.user.mention ? `@id${message.user.id} (${message.user.tag})` : `${message.user.tag}`}, ${text}`, params);
}

if(message.user.ban)return message.send(`Вы забанены.`)

const command = commands.find(x=> x[0].test(message.text));
if(!command) return;
message.args = message.text.match(command[0]);
await command[1](message, bot);
console.log(`Executed: ${message.user.tag}, ${message.user.uid}: ${message.text}`)

});
const cmd = {
hear: (p, f) => {
commands.push([p, f]);
}
}






//-------------------------------------------[Помощь]-------------------------------------------------------//
cmd.hear(/^(?:помощь|🆕Помощь|команды|меню|help|commands|menu|как играть|помоги|играть|начать)$/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true;
if (message.user.misc.bloodTime == true){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вашей кровью завладели, недоступно.`)}
if (message.user.xodLOCK == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}время остановлено.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if ((message.user.xod !== 1)&&(message.user.biz !== 0)){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}], ждите своего хода.`)}
if (message.user.pve.completeOFpve) {return bot(`в PVE эта команда недоступна.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
let user = users.find(x=> x.uid === Number(message.user.biz));
message.user.backto = 1;
if 	 (message.user.misc.vizov == 1){ 
message.user.helpTrue = true;
await bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑К`: `К`}оманды:
🆕[Помощь] - помощь по игре. +УЗНАТЬ СВОЙ ID❗
👥[Профиль] - информация по профилю.
🔎[Поиск] - поиск игрока.
🗣[Вызов] [ID] - бросить вызов игроку. 
✅[Принять] - принять вызов игрока.
🤜🏻[Удар] - сделать ход.
🛒[Магазин] - магазин, в котором можно приобрести: 
&#4448; &#9642; 🔪кастет, 
&#4448; &#9642; ⚔меч, 
&#4448; &#9642; 🗡саблю, 
&#4448; &#9642; 🛡броню.
⛑[Сверхспособности] - магазин сверхспособностей: 
&#4448; &#9642; 🦍метаморфизм, 
&#4448; &#9642; ❣вампиризм, 
&#4448; &#9642; 🌀ареометизм, 
&#4448; &#9642; 🐶анимализм, 
&#4448; &#9642; 📛блокировка способностей.
🔮[Магия] - магазин магии: 
&#4448; &#9642; ⏳магия времени,
&#4448; &#9642; 💉магия крови.
✳[Перки] - в разработке.
📈[Прокачать] [Оружие] - прокачать оружие на 2 или 3 уровень.
🎯[Продать] [Название оружия] - продать оружие.
🏆[Топ] - посмотреть список лучших.
👼[Френды ID] - добавить игрока в друзья.
🧳[Открыть сундук]/🧳[Сундук]/✨[Осколки] - открытие сундука.`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
], 
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});
} else {
message.user.helpTrue = true;
await bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑К`: `К`}оманды:
🆕[Помощь] - помощь по игре. +УЗНАТЬ СВОЙ ID❗
👥[Профиль] - информация по профилю.
🔎[Поиск] - поиск игрока.
🗣[Вызов] [ID] - бросить вызов игроку. 
✅[Принять] - принять вызов игрока.
🤜🏻[Удар] - сделать ход.
🛒[Магазин] - магазин, в котором можно приобрести: 
&#4448; &#9642; 🔪кастет, 
&#4448; &#9642; ⚔меч, 
&#4448; &#9642; 🗡саблю, 
&#4448; &#9642; 🛡броню.
⛑[Сверхспособности] - магазин сверхспособностей: 
&#4448; &#9642; 🦍метаморфизм, 
&#4448; &#9642; ❣вампиризм, 
&#4448; &#9642; 🌀ареометизм, 
&#4448; &#9642; 🐶анимализм, 
&#4448; &#9642; 📛блокировка способностей.
🔮[Магия] - магазин магии: 
&#4448; &#9642; ⏳магия времени,
&#4448; &#9642; 💉магия крови.
✳[Перки] - в разработке.
📈[Прокачать] [Оружие] - прокачать оружие на 2 или 3 уровень.
🎯[Продать] [Название оружия] - продать оружие.
🏆[Топ] - посмотреть список лучших.
👼[Френды ID] - добавить игрока в друзья.
🧳[Открыть сундук]/🧳[Сундук]/✨[Осколки] - открытие сундука.`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
}
});
//-------------------------------------------[Профиль]-------------------------------------------------------//
cmd.hear(/^(?:профиль|👥 Профиль|👥Профиль)$/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true;
if (message.user.misc.bloodTime == true){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вашей кровью завладели, недоступно.`)}
if (message.user.xodLOCK == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}время остановлено.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if ((message.user.xod !== 1)&&(message.user.biz !== 0)){return bot(`${((message.user.misc.Dark == 1) || 
(message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}], ждите своего хода.`)}
if (message.user.pve.completeOFpve) {return bot(`в PVE эта команда недоступна.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || 
(message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
message.user.backto = 1;
let user = users.find(x=> x.uid === Number(message.user.biz));
let lvlUser = message.user.exp >= 100 ? 2 : message.user.exp >= 170 ? 3 : message.user.exp >= 240 ? 4 :
message.user.exp >= 310 ? 5 : message.user.exp >= 390 ? 6 : message.user.exp >= 470 ? 7 :
message.user.exp >= 530 ? 8 : message.user.exp >= 640 ? 9 : message.user.exp >= 740 ? 10 : 1;
let NewLvl = lvlUser == 1 ? message.user.level.level2-message.user.exp : lvlUser == 2 ? message.user.level.level3-message.user.exp : lvlUser == 3 ? message.user.level.level4-message.user.exp :
lvlUser == 5 ? message.user.level.level6-message.user.exp : lvlUser == 6 ? message.user.level.level7-message.user.exp : lvlUser == 8 ? message.user.level.level9-message.user.exp : 
lvlUser == 9 ? message.user.level.level10-message.user.exp : 'Максимальный уровень.';
if (message.user.misc.vizov == 1){ 
await bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑(`: `(`}Информация по игре - помощь)
🔎 ID: ${message.user.uid}
🧳 Ваши сундуки: ${message.user.misc.chest}
✨ Ваши осколки: ${message.user.misc.oskolki}
🤡 Доступ к насмешкам: ${!message.user.misc.nasmeshka ? "Нет" : "Да"}
📝 Доступ к смене никнейма: ${!message.user.misc.changenickname ? "Нет" : "Да"}
🧩 Ваш опыт - ${message.user.exp}
🔰 Ваш уровень - ${message.user.lvl} (${message.user.lvl == 10 ? 'Максимальый уровень' : `До нового уровня - ${NewLvl} опыта`})
❇ Ваша порядочность - ${message.user.Decency} ${message.user.Decency == 5000 ? `😃` : message.user.Decency > 4000 ? `😉` : message.user.Decency > 3000 ? `🙁` : message.user.Decency > 2000  ? `☹` : `😡`}
💲 Ваши коины - ${message.user.Coins}
✳ Ваши перки -
🎖 Ваши победы - ${utils.sp(message.user.balance)} штук(и).
📄Ваши друзья: ${message.user.friendsList.friend == 0 ? `У вас нет друзей :(` : `${message.user.friendsList.friendName}`}`);
} else {
await bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑(`: `(`}Информация по игре - помощь)
🔎 ID: ${message.user.uid}
🧳 Ваши сундуки: ${message.user.misc.chest}
✨ Ваши осколки: ${message.user.misc.oskolki}
🤡 Доступ к насмешкам: ${!message.user.misc.nasmeshka ? "Нет" : "Да"}
📝 Доступ к смене никнейма: ${!message.user.misc.changenickname ? "Нет" : "Да"}
🧩 Ваш опыт - ${message.user.exp}
🔰 Ваш уровень - ${message.user.lvl} (${message.user.lvl == 10 ? 'Максимальый уровень' : `До нового уровня - ${NewLvl} опыта`})
❇ Ваша порядочность -  ${message.user.Decency} ${message.user.Decency == 5000 ? `😃` : message.user.Decency > 4000 ? `😉` : message.user.Decency > 3000 ? `🙁` : message.user.Decency > 2000  ? `☹` : `😡`}
💲 Ваши коины - ${message.user.Coins}
✳ Ваши перки -
🎖 Ваши победы - ${utils.sp(message.user.balance)} штук(и).
📄Ваши друзья: ${message.user.friendsList.friend == 0 ? `У вас нет друзей :(` : `${message.user.friendsList.friendName}`}`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],
})
})
}
});
//-------------------------------------------[Вызов]-------------------------------------------------------//
cmd.hear(/^(?:Вызов)\s([0-9]+)$/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true;
if (message.user.misc.bloodTime == true){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вашей кровью завладели, недоступно.`)}
if (message.user.xodLOCK == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}время остановлено.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if ((message.user.xod !== 1)&&(message.user.biz !== 0)){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}], ждите своего хода.`)}
if (message.user.pve.completeOFpve) {return bot(`в PVE эта команда недоступна.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
let user = users.find(x=> x.uid === Number(message.args[1]));
if(!user) return bot(`🚫неверный ID игрока`);
if (user.LockPvPforPvE == true){return bot(`игрок, в данный момент, находится в PvE.`)}
if (user.biz !== 0){return bot(`Игрок, в данный момент, уже сражается.`)}
if (message.user.biz !== 0){return bot(`у Вас уже и так есть противник - [id${user.id}|${user.tag}],`)}
if(user.uid === message.user.uid) return bot(`неверный ID`);
if ((user.uid == 0) || (user.uid == 1) || (user.uid == 2)) return bot(`такого игрока не существует. Введите существующий ID`)
if((user.uid !== message.user.uid)){
user.misc.vizov = 1;
user.misc.ready = 1;
user.misc.greenbut = true;
user.biz = message.user.uid;
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}${`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${user.id}|${user.tag}], Вам вызов от [id${message.user.id}|${message.user.tag}].`}`, 
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✅ Принять"
},
"color": "positive"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "❌ Отклонить"
},
"color": "negative"
}
],			
]

})
})
return bot(`📣имя соперника - ${user.tag}.`)}
});
//---------------------------------------[Поиск]----------------------------------------//
cmd.hear(/^(?:🔎Поиск|Поиск|🔎 Поиск)/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true; message.user.Poisk = false;
if (message.user.uid !== 3) {await bot(`Введите ID. Правда, тут еще никого нет... Кроме создателя 😔`);}
if (message.user.uid == 3) {
await bot(`Введите ID.`);
}
message.user.CanSearch = true;
message.user.SearchBan = false;  
// рандомное число от 0 до ~. если юзера нет - свободно, есть - выводим его. / пока оставляем так.
let userNumb = message.user.uid; //utils.random(4,userNumb) if юзер в бою или пвп, роллим заново. если не был найден - так и пишем.
userNumb -= 1; 
//let userChoose = message.user.uid == 3 ? utils.random(4,4) : utils.random(3,3);
let user = users.find(x=> x.uid === Number(3));
//жРmessage.user.Deistvie = false; message.user.friends = user.uid;
message.send(`Введите, например, ▶ ${user.uid}.
👤Имя игрока: [id${user.id}|${user.tag}]
🔎 ID игрока: ${user.uid}
❇ Порядочность игрока: ${user.Decency} ${user.Decency == 5000 ? `😃` : user.Decency > 4000 ? `😉` : user.Decency > 3000 ? `🙁` : user.Decency > 2000  ? `☹` : `😡`}
🎖 Победы игрока: ${utils.sp(user.balance)}`,
{
keyboard:JSON.stringify(
{
"inline": true,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `Вызов ${user.uid}`
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Добавить в друзья"
},
"color": "primary"
}
],			
]

})
})
cmd.hear(/^([0-9]+)$/i, async (message, bot) => {
message.user.LeaveBan = true;
if (message.user.SearchBan == true) {return}
if (message.user.CanSearch == true){
let user = users.find(x=> x.uid === Number(message.args[0]));
if(!user) return bot(`🚫неверный ID игрока`); if ((user.uid == 0) || (user.uid == 1) || (user.uid == 2)) return bot(`такого игрока не существует.`)
if(user.uid === message.user.uid) return bot(`Это Вы. Ваша статистика будет отображаться в профиле.`)
var abc = false; message.user.friends = user.uid; message.user.CanSearch = false; message.user.SearchBan = true;
if (user.uid == 3){abc = true}
message.send(`${abc == false ? `👤Имя игрока: [id${user.id}|${user.tag}]` : `🤡Создатель: [id${user.id}|${user.tag}]`}
🔎 ID игрока: ${user.uid}
❇ Порядочность игрока: ${user.Decency} ${user.Decency == 5000 ? `😃` : user.Decency > 4000 ? `😉` : user.Decency > 3000 ? `🙁` : user.Decency > 2000  ? `☹` : `😡`}
🎖 Победы игрока: ${utils.sp(user.balance)}`,
{
keyboard:JSON.stringify(
{
"inline": true,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `Вызов ${user.uid}`
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Добавить в друзья"
},
"color": "primary"
}
],			
]

})
}) 
message.user.SearchBan = true;
} else {return message.user.SearchBan = true}
});
cmd.hear(/^(.*)?$/i, async (message, bot) => {
message.user.LeaveBan = true;

if (message.user.SearchBan == true) {return}
message.user.SearchBan = true;
return bot(`используйте цифру - ID пользователя.`)
})
});
//------------------------------[Добавить в друзья]-----------------------------//
cmd.hear(/^(?:Добавить)\s(в)\s(друзья)/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true;
if (!message.user.friends) return bot(`Вам некого добавлять в друзья.`)
let user = users.find(x=> x.uid === Number(message.user.friends)); 
let userFind = message.user.friendsList.friendID; 
user.friends = message.user.uid;
let userFound = `${user.uid}`; if (userFind.indexOf(userFound) !== -1){
return bot(`данный игрок есть в списке Ваших друзей.`)
};
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}${`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${user.id}|${user.tag}], Вам заявка в друзья от [id${message.user.id}|${message.user.tag}].`}`, 
keyboard:JSON.stringify(
{
"inline": true,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✅Принять заявку"
},
"color": "positive"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "❌Отказаться"
},
"color": "negative"
}
],			
]

})
})
return bot(`Ваша заявка в друзья была отправлена.`);
});


cmd.hear(/^(?:Френды)\s([0-9]+)/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true; message.user.friends = message.args[1];
if (!message.user.friends) return bot(`Вам некого добавлять в друзья.`)
let user = users.find(x=> x.uid === Number(message.user.friends)); let userFind = message.user.friendsList.friendID; 
user.friends = message.user.uid;
let userFound = `${user.uid}`; if (userFind.indexOf(userFound) > -1){
return bot(`данный игрок есть в списке Ваших друзей.`)
};
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}${`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${user.id}|${user.tag}], Вам заявка в друзья от [id${message.user.id}|${message.user.tag}].`}`, 
keyboard:JSON.stringify(
{
"inline": true,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✅Принять заявку"
},
"color": "positive"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "❌Отказаться"
},
"color": "negative"
}
],			
]

})
})
return bot(`Ваша заявка в друзья была отправлена.`)
});

cmd.hear(/^(?:✅Принять|Принять)\s(заявку)/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true;
let user = users.find(x=> x.uid === Number(message.user.friends));
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}${`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${user.id}|${user.tag}], Ваша заявка в друзья была ✅принята игроком [id${message.user.id}|${message.user.tag}].`}`, 
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
user.friends = 0; user.friendsList.friendName += `🔹[id${message.user.id}|${message.user.tag}] `;
user.friendsList.friendID += `${message.user.uid} `; user.friendsList.friend = 1; message.user.friendsList.friend = 1;
message.user.friends = 0; message.user.friendsList.friendName += `🔹[id${user.id}|${user.tag}] `; message.user.friendsList.friendID += `${user.uid} `;
message.user.GoFriendsPvE = 0; message.user.GoFriendsPvETag = 0;
return bot(`Вы успешно ✅приняли заявку в друзья.`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
});
cmd.hear(/^(?:❌Отказаться|Отказаться)/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true;
let user = users.find(x=> x.uid === Number(message.user.friends));
message.user.friends = 0; user.friends = 0; message.user.GoFriendsPvE = 0; message.user.GoFriendsPvETag = 0;
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}${`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${user.id}|${user.tag}], Ваша заявка в друзья была ❌отклонена игроком [id${message.user.id}|${message.user.tag}].`}`, 
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
return bot(`Вы ❌отклонили заявку в друзья.`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})

});
//-------------------------------------------[Отклонить]-------------------------------------------------------//
cmd.hear(/^(?:❌ Отклонить|❌Отклонить|Отклонить)$/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true;
let user = users.find(x=> x.uid === Number(message.user.biz));
vk.api.messages.send({ user_id: user.id, message: `[id${user.id}|${user.tag}] ❌Отклонил(а) Ваш вызов.`});
message.user.misc.vizov = 0; let name = user.tag; let idName = user.id;
message.user.misc.ready = 0; 
message.user.misc.greenbut = true;
message.user.biz = 0;
return bot(`Вы отклонили Вызов игрока [id${idName}|${name}].`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})	
})

//-------------------------------------------[Принять]-------------------------------------------------------//
cmd.hear(/^(?:Принять|✅ Принять)$/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true;
if (message.user.misc.bloodTime == true){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вашей кровью завладели, недоступно.`)}
if (message.user.xodLOCK == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}время остановлено.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if (message.user.pve.completeOFpve) {return bot(`в PVE эта команда недоступна`);}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if (message.user.misc.vizov !== 1) return bot(`🔕Вам никто не бросал вызов.`);
if ((message.user.misc.vizov == 1) && (message.user.misc.ready == 1)) {
let user = users.find(x=> x.uid === Number(message.user.biz));
user.misc.vizov = 1;
message.user.backto = 1;
message.user.biz = user.uid;
user.biz = message.user.uid;
if (message.user.misc.unquereplic !== 1){
await bot(`Вы приняли вызов от [id${user.id}|${user.tag}]. Завершить игру по принуждению - Покинуть.`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],  
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}${`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${user.id}|${user.tag}], Ваш вызов был принят! Завершить игру по принуждению - Покинуть.`}`,
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});
if ((user.misc.vizov == 1) && (message.user.misc.vizov == 1)){
message.user.misc.startgame = 1;
user.misc.startgame = 1;
}
const int = utils.pick([1,2]);
if (int == 1) {
message.user.xod = 1;
user.xod = 0;
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}🛡Вы уступаете свой ход [id${message.user.id}|${message.user.tag}]. (Чтобы ходить - "Удар".)`});
return bot(`🔥Вы наносите удар первым(ой). Команда - "Удар".  
`)
}
if (int == 2) {
message.user.xod = 0;
user.xod = 1;
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}🔥Первый ход - за Вами. Команда - "Удар"`});
return bot(`🛡Вы уступаете свой ход игроку [id${user.id}|${user.tag}]. Чтобы ходить - "Удар".`)

}
}

} 
});

//-----------------------[Перки]-------------------------------------------//
cmd.hear(/^(?:Перки|✳Перки|✳ Перки)$/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true;
return bot(`*Перки:
${message.user.perki.OnePerk == 0 ? '🔹Увеличение здоровья на 1%' : message.user.perki.OnePerk == 1 ? '🔹Увеличение здоровья на 1%' : message.user.perki.OnePerk == 2 ? 
'🔹Увеличение здоровья на 1%' : message.user.perki.OnePerk == 3 ? '🔹Увеличение здоровья на 1%' : message.user.perkiOnePerk == 4 ? '🔹Увеличение здоровья на 1%' : 'max'}
&#4448; &#9642; Ваш уровень перка: ${message.user.perki.OnePerkLvl} 
&#4448; &#9642; Цена: ${message.user.perki.OnePerkLvl == 5 ? 'max' : 
message.user.OnePerkLvl == 1 ? '220' : message.user.OnePerkLvl == 2 ? '340' :
message.user.OnePerkLvl == 3 ? '460' : message.user.OnePerkLvl == 4 ? '560' : '100'}
${message.user.perki.TwoPerk == 0 ? '🔹+3 Золота в начале игры.' : message.user.perki.TwoPerk == 1 ? '🔹+2 Золота в начале игры.' : message.user.perki.TwoPerk == 2 ? 
'🔹+2 Золота в начале игры.' : message.user.perki.TwoPerk == 3 ? '🔹+2 Золота в начале игры.' : messsage.user.perki.TwoPerk == 4 ? '🔹+2 Золота в начале игры.' : 'max'}
&#4448; &#9642; Ваш уровень перка: ${message.user.perki.TwoPerkLvl}
&#4448; &#9642; Цена: ${message.user.perki.OnePerkLvl == 5 ? 'max' : 
message.user.OnePerkLvl == 1 ? '210' : message.user.OnePerkLvl == 2 ? '300' :
message.user.OnePerkLvl == 3 ? '450' : message.user.OnePerkLvl == 4 ? '520' : '130'}
${message.user.perki.ThreePerk == 0 ? '🔹+3% увеличение шанса на выпад сундука.' : message.user.perki.ThreePerk == 1 ? '🔹+3% увеличение шанса на выпад сундука.' : 
message.user.perki.ThreePerk == 2 ? '🔹+3% увеличение шанса на выпад сундука.' : message.user.perki.ThreePerk == 3 ? '🔹+3% увеличение шанса на выпад сундука.' :
message.user.perki.ThreePerk == 4 ? '🔹+3% увеличение шанса на выпад сундука.' : 'max'}
&#4448; &#9642; Ваш уровень перка: ${message.user.perki.ThreePerkLvl}
&#4448; &#9642; Цена: ${message.user.perki.ThreePerk == 5 ? 'max' : 
message.user.ThreePerk == 1 ? '220' : message.user.ThreePerk == 2 ? '340' :
message.user.ThreePerk == 3 ? '460' : message.user.ThreePerk == 4 ? '560' : '100'}
${message.user.perki.FourPerk == 1 ? '🔹' : '🔸'} 
&#4448; &#9642; Ваш уровень перка: ${message.user.perki.FourPerkLvl}
&#4448; &#9642; Цена:`,
{
keyboard:JSON.stringify(
{
"inline": true,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перк #1"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перк #2"
},
"color": "secondary"
},
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перк #3"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перк #4"
},
"color": "secondary"
},
],
]
})
});
})
cmd.hear(/^(?:Перк|✳Перк)\s(#1|№1|1)$/i, async (message, bot) => {
return bot(`в разработке...`)
}) // цена: 100; 220; 340; 460; 500;
// уровни: 1, 2, 6, 8, 10
cmd.hear(/^(?:Перк|✳Перк)\s(#2|№2|2)$/i, async (message, bot) => {
return bot(`в разработке...`)
})// цена: 130; 210; 300; 450; 520;
// уровни: 2, 4, 5, 7, 10
cmd.hear(/^(?:Перк|✳Перк)\s(#3|№3|3)$/i, async (message, bot) => {
return bot(`в разработке...`)
})// цена: 100; 220; 340; 460; 500;
// уровни: 1, 2, 3, 4, 5
cmd.hear(/^(?:Перк|✳Перк)\s(#4|№4|4)$/i, async (message, bot) => {
return bot(`в разработке...`)
})// цена: 
// уровни: 
//-------------------------------------------[магазин]-------------------------------------------------------//
cmd.hear(/^(?:магазин|🛒Магазин|👣Вернуться)$/i, async (message, bot) => {
message.user.LeaveBan = true;

message.user.SearchBan = true;
if (message.user.misc.bloodTime == true){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вашей кровью завладели, недоступно.`)}
if (message.user.xodLOCK == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}время остановлено.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if ((message.user.xod !== 1)&&(message.user.biz !== 0)){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}], ждите своего хода.`)}
if (message.user.pve.completeOFpve) {return bot(`в PVE эта команда недоступна.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
let user = users.find(x=> x.uid === Number(message.user.biz));
message.user.backto = 2;
if (message.user.misc.startgame !== 1){
return bot(`Вам никто не бросал вызов.🔕`)
}
if(!message.args[1]) 
return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑💰`: `💰`}Ваше золото - ${message.user.gold}. ${message.user.misc.kastet == 1 ? `${kastets[message.user.misc.kastet - 1].name}` : ``} ${message.user.misc.kastet == 2 ? `${kastets[message.user.misc.kastet - 1].name}` : ``} ${message.user.misc.kastet == 3 ? `${kastets[message.user.misc.kastet - 1].name}` : ``} ${message.user.misc.mech == 1 ? `${mechs[message.user.misc.mech - 1].name}` : ``} ${message.user.misc.mech == 2 ? `${mechs[message.user.misc.mech - 1].name}` : ``} ${message.user.misc.mech == 3 ? `${mechs[message.user.misc.mech - 1].name}` : ``} ${message.user.misc.sablya == 1 ? `${sablyas[message.user.misc.sablya - 1].name}` : ``} ${message.user.misc.sablya == 2 ? `${sablyas[message.user.misc.sablya - 1].name}` : ``} ${message.user.misc.sablya == 3 ? `${sablyas[message.user.misc.sablya - 1].name}` : ``}
Магазин: 
${(message.user.misc.kastet === 1) || (message.user.misc.kastet === 2) || (message.user.misc.kastet === 3) ? `🔹` : ''} 1. 🔪Кастет [Увеличение шанса крита] [35-80💵]
${(message.user.misc.mech === 1) || (message.user.misc.mech === 2) || (message.user.misc.mech === 3) ? `🔹` : ''} 2. ⚔Меч [Понижение крита врагу, no-miss] [50-110💵]
${(message.user.misc.sablya === 1) || (message.user.misc.sablya === 2) || (message.user.misc.sablya === 3) ? `🔹` : ''} 3. 🗡Сабля [Контратака, no-miss] [80-150💵]
${message.user.misc.shiel == 1 ? `&#128313;` :``} 4. 🛡Броня [Снижение урона ОТ УДАРА на 30%] [50💵]
5. Магия [140-180💵]
6. Способности [60-180💵]
🔎 Для покупки используйте "[оружие]".
Например: "${utils.pick(['Кастет', 'Меч', 'Сабля', 'Броня'])}"`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🔪Кастет"
},
"color": `${((message.user.misc.kastet >= 1)||(message.user.misc.mech >= 1)||(message.user.misc.sablya >= 1))? 'secondary' : message.user.gold>35 ? 'primary' : 'secondary'}`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚔Меч"
},
"color": `${((message.user.misc.kastet >= 1)||(message.user.misc.mech >= 1)||(message.user.misc.sablya >= 1))? 'secondary' : message.user.gold>50 ? 'primary' : 'secondary'}`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🗡Сабля"
},
"color": `${((message.user.misc.kastet >= 1)||(message.user.misc.mech >= 1)||(message.user.misc.sablya >= 1))? 'secondary' : message.user.gold>80 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛡Броня"
},
"color": `${message.user.misc.shield == 1 ? 'secondary' : message.user.gold >= 50 ? 'primary' : 'secondary' }`
},						
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🎯Продать`
},
"color": `${message.user.misc.kastet ? "primary": message.user.misc.mech ? "primary" : message.user.misc.sablya ? "primary" : "secondary"}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}` }
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⛔Выйти из магазина" 
},
"color": "negative"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
],
],

})
})

});
//-------------------------------------------[Выйти из магазина]-------------------------------------------------------//
cmd.hear(/^(?:ВЫйти|⛔Выйти|⛔ Выйти)\s(Из)\s(Магазина)?$/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true;
if (message.user.misc.bloodTime == true){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вашей кровью завладели, недоступно.`)}
if (message.user.xodLOCK == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}время остановлено.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
message.user.backto = 1;
if ((message.user.xod !== 1)&&(message.user.biz !== 0)){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}], ждите своего хода.`)}
if (message.user.pve.completeOFpve) {return bot(`в PVE эта команда недоступна.`)}
if (message.user.misc.startgame !== 1){
return bot(`Вам никто не бросал вызов.🔕`)
}
return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑В`: `В`}ы покинули магазин.`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});
});




//-------------------------------------------[Продать]-------------------------------------------------------//
cmd.hear(/^(?:продать|🎯продать)\s(.*)\s?(.*)?$/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true;
if (message.user.misc.bloodTime == true){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вашей кровью завладели, недоступно.`)}
if (message.user.xodLOCK == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}время остановлено.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if ((message.user.xod !== 1)&&(message.user.biz !== 0)){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}], ждите своего хода.`)}
if (message.user.pve.completeOFpve) {return bot(`в PVE эта команда недоступна.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if (message.user.misc.startgame !== 1){
return bot(`Вам никто не бросал вызов.🔕`)
}
let options = {
count: null
}
message.args[2] = message.args[1].split(' ')[1];
let user = users.find(x=> x.uid === Number(message.user.biz));
if(!message.args[2]) options.count = 1;
if(message.args[2])
{
message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
message.args[2] = Math.floor(Number(message.args[2]));
if(message.args[2] <= 0) return;
if(!message.args[2]) options.count = 1;
else if(message.args[2]) options.count = message.args[2];}
if(/кастет|🔪кастет|🔪 кастет/i.test(message.args[1].toLowerCase())){
if(!message.user.misc.kastet) return bot(`у вас нет кастета`);
let a = Math.floor(kastets[message.user.misc.kastet - 1].cost * 0.85);
message.user.gold += Math.floor(kastets[message.user.misc.kastet - 1].cost	 * 0.85);
message.user.misc.kastet = 0;
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}📢[id${message.user.id}|${message.user.tag}] продал(а) кастет!`});
((message.user.misc.kastet == 1) && (message.user.gold >= 15)) ? message.user.misc.upgrade = true :
((message.user.misc.kastet == 2) && (message.user.gold >= 30)) ? message.user.misc.upgrade = true :
((message.user.misc.mech == 1) && (message.user.gold >= 30)) ? message.user.misc.upgrade = true :
((message.user.misc.mech == 2) && (message.user.gold >= 30)) ? message.user.misc.upgrade = true :
((message.user.misc.sablya == 1) && (message.user.gold >= 30))? message.user.misc.upgrade = true :
((message.user.misc.sablya == 2) && (message.user.gold >= 40))? message.user.misc.upgrade = true : message.user.misc.upgrade = false;
return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑В`: `В`}ы продали свой кастет гоблинам за ${utils.sp(a)} золотых`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});}
if(/меч|⚔меч|⚔ меч/i.test(message.args[1].toLowerCase())){
if(!message.user.misc.mech) return bot(`у вас нет меча`);
let a = Math.floor(mechs[message.user.misc.mech - 1].cost * 0.85);
message.user.gold += Math.floor(mechs[message.user.misc.mech - 1].cost	 * 0.85);
message.user.misc.mech = 0;
((message.user.misc.kastet == 1) && (message.user.gold >= 15)) ? message.user.misc.upgrade = true :
((message.user.misc.kastet == 2) && (message.user.gold >= 30)) ? message.user.misc.upgrade = true :
((message.user.misc.mech == 1) && (message.user.gold >= 30)) ? message.user.misc.upgrade = true :
((message.user.misc.mech == 2) && (message.user.gold >= 30)) ? message.user.misc.upgrade = true :
((message.user.misc.sablya == 1) && (message.user.gold >= 30))? message.user.misc.upgrade = true :
((message.user.misc.sablya == 2) && (message.user.gold >= 40))? message.user.misc.upgrade = true : message.user.misc.upgrade = false;
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}📢[id${message.user.id}|${message.user.tag}] продал(а) меч!`});
return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑В`: `В`}ы продали свой меч гоблинам за ${utils.sp(a)} золотых`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});}
if(/сабля|🗡сабля|🗡 сабля|саблю|🗡саблю|🗡 сабля/i.test(message.args[1].toLowerCase())){
if(!message.user.misc.sablya) return bot(`у вас нет сабли`);
let a = Math.floor(sablyas[message.user.misc.sablya - 1].cost * 0.85);
message.user.gold += Math.floor(sablyas[message.user.misc.sablya - 1].cost	 * 0.85);
message.user.misc.sablya = 0;
((message.user.misc.kastet == 1) && (message.user.gold >= 15)) ? message.user.misc.upgrade = true :
((message.user.misc.kastet == 2) && (message.user.gold >= 30)) ? message.user.misc.upgrade = true :
((message.user.misc.mech == 1) && (message.user.gold >= 30)) ? message.user.misc.upgrade = true :
((message.user.misc.mech == 2) && (message.user.gold >= 30)) ? message.user.misc.upgrade = true :
((message.user.misc.sablya == 1) && (message.user.gold >= 30))? message.user.misc.upgrade = true :
((message.user.misc.sablya == 2) && (message.user.gold >= 40))? message.user.misc.upgrade = true : message.user.misc.upgrade = false;
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}📢[id${message.user.id}|${message.user.tag}] продал(а) саблю!`});
return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑В`: `В`}ы продали свою саблю гоблинам за ${utils.sp(a)} золотых`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});}

if(/броня|🛡броня|🛡 броня|🛡 броню|🛡броню|броню/i.test(message.args[1].toLowerCase())){
if(!message.user.misc.shield) return bot(`у вас нет брони`);
let a = Math.floor(sablyas[message.user.misc.sablya - 1].cost * 0.85);
message.user.gold += Math.floor(30	 * 0.85);
message.user.misc.shiled = 0;
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}📢[id${message.user.id}|${message.user.tag}] продал(а) броню!`});
return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑В`: `В`}ы продали свою броню гоблинам за ${utils.sp(a)} золотых`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],
})
});}








});










//-------------------------------------------[Продать]-------------------------------------------------------//
cmd.hear(/^(?:продать|🎯продать|)$/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true;
if (message.user.misc.bloodTime == true){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вашей кровью завладели, недоступно.`)}
if (message.user.xodLOCK == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}время остановлено.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if ((message.user.xod !== 1)&&(message.user.biz !== 0)){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}], ждите своего хода.`)}
if (message.user.pve.completeOFpve) {return bot(`в PVE эта команда недоступна.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
let user = users.find(x=> x.uid === Number(message.user.biz));
if ((!message.user.misc.kastet) && (!message.user.misc.mech) && (!message.user.misc.sablya)) {
return bot(`Вам нечего продавать.`)
}
return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑В`: `В`}ыберите, что хотите продать.`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать 🔪Кастет"
},
"color": `${message.user.misc.kastet ? "primary" : "secondary"}`
},
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать ⚔Меч"
},
"color": `${message.user.misc.mech ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать 🗡Саблю"
},
"color": `${message.user.misc.sablya ? "primary" : "secondary"}`
},
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать 🛡броню"
},
"color": `${message.user.misc.shield ? "primary" : "secondary"}`
},			
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.backto	== 1 ? '🚷Назад' : `👣Вернуться`}`
},
"color": `positive`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
],
]
})
})



});




//-------------------------------------------[Прокачать]-------------------------------------------------------//
cmd.hear(/^(?:📈Прокачать|Прокачать|)$/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true;
if (message.user.misc.bloodTime == true){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вашей кровью завладели, недоступно.`)}
if (message.user.xodLOCK == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}время остановлено.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if ((message.user.xod !== 1)&&(message.user.biz !== 0)){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}], ждите своего хода.`)}
if (message.user.pve.completeOFpve) {return bot(`в PVE эта команда недоступна.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
let user = users.find(x=> x.uid === Number(message.user.biz));
if((!message.user.misc.kastet)&&(!message.user.misc.mech)&&(!message.user.misc.sablya))return bot(`Вам нечего прокачивать.`)
return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑В`: `В`}ыберите, что хотите прокачать.`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать 🔪Кастет"
},
"color": `${((message.user.misc.kastet == 1) && (message.user.gold >=15))? "primary" : ((message.user.misc.kastet == 2) && (message.user.gold >= 30)) ? 'primary' : 'secondary'}`
},
],			
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать ⚔Меч"
},
"color": `${((message.user.misc.mech == 1) && (message.user.gold >=30))? "primary" : ((message.user.misc.mech == 2) && (message.user.gold >=30)) ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать 🗡Саблю"
},
"color": `${((message.user.misc.sablya == 1) && (message.user.gold >=30))? "primary"  :  ((message.user.misc.sablya == 2) && (message.user.gold >=40)) ? 'primary' : 'secondary'}`
},
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.backto	== 1 ? '🚷Назад' : `👣Вернуться`}` 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
],
]
})
})



});


//-------------------------------------------[Назад]-------------------------------------------------------//
cmd.hear(/^(?:🚷Назад|Назад|🚷 Назад)$/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true;
if (message.user.misc.bloodTime == true){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вашей кровью завладели, недоступно.`)}
if (message.user.xodLOCK == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}время остановлено.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if ((message.user.xod !== 1)&&(message.user.biz !== 0)){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}], ждите своего хода.`)}
if (message.user.pve.completeOFpve) {return bot(`в PVE эта команда недоступна.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑В`: `В`}ы были возвращены`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});

});




//-----------------------------------------------------------ОРУЖИЕ---------------------------------------------------------//




//-------------------------------------------[Броня]-------------------------------------------------------//
cmd.hear(/^(?:🛡Броня|🛡 Броня|Броня)$/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true;
if (message.user.misc.bloodTime == true){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вашей кровью завладели, недоступно.`)}
if (message.user.xodLOCK == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}время остановлено.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if ((message.user.xod !== 1)&&(message.user.biz !== 0)){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}], ждите своего хода.`)}
if (message.user.pve.completeOFpve) {return bot(`в PVE эта команда недоступна.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if (message.user.misc.startgame !== 1){
return bot(`Вам никто не бросал вызов.🔕`)
}
let user = users.find(x=> x.uid === Number(message.user.biz));
if (message.user.misc.shield){
return bot(`у Вас уже есть броня.`);
} else {
if (message.user.gold < 50){return bot(`у Вас недостаточно денег.`)} else
{
message.user.gold -= 50;
message.user.misc.shield = 1;
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}📢[id${message.user.id}|${message.user.tag}] купил(а) броню! Теперь Вы будете наность на 30% меньше урона!`});
return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑В`: `В`}ы успешно приобрели броню.`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});
}
}
});
//-------------------------------------------[Сверхспособности]-------------------------------------------------------//
cmd.hear(/^(?:⛑Сверхспособности|⛑ Сверхспособности|Сверхспособности)?$/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true;
if (message.user.misc.bloodTime == true){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вашей кровью завладели, недоступно.`)}
if (message.user.xodLOCK == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}время остановлено.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if ((message.user.xod !== 1)&&(message.user.biz !== 0)){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}], ждите своего хода.`)}
if (message.user.pve.completeOFpve) {return bot(`в PVE эта команда недоступна.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if (message.user.misc.startgame !== 1){
return bot(`Вам никто не бросал вызов.🔕`) 
}
let user = users.find(x=> x.uid === Number(message.user.biz));
if(!message.args[1]) return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑💰`: `💰`}💰Ваше золото - ${message.user.gold}. Сверхспособности:я 
1. 🦍Метаморфизм - способность превращаться с шансом в 30% в мутанта, который нанесет 20-50 урона, - невосприимчив к броне. Возможность сбивать щит 🌀ареометизма no-sell [60💵] 
2. ❣Вампиризм - 50% регенирация с удара. no-sell [90💵]
3. 🌀Ареометизм - 
&#4448; &#9642; 1) Активное: создание защитного поля (40%), атака полем (50-150 урона). 
&#4448; &#9642; 2) Пассивное: раз в три хода блокирует блокирует атаку врагу (контратаки тоже) no-sell [125💵]
4. 🐶Анимализм - частичное оборотничество: звериные инстинкты. 
&#4448; &#9642; 1) Свести с ума: враг не может использовать ничего в течение 3 ходов. С врага капает кровь 10-40 урона, а по окончанию наносится урон 2*потерянная кровь.
&#4448; &#9642; 2) Полнолуние -> охота: в течение 5 ходов есть шанс в 25% атаковать врага, нанеся 180 урона. no-sell[160💵]
5. 📛Блокировка сбособности: 
&#4448; &#9642; 1) Пассивные: вампиризм становится 25% (вместо 50%), метаморфизм наносит на 50% меньше урона, блокировка защитного поля, с шансом в 25% может пережить Анимализм врага. 
&#4448; &#9642; 2) Активная: шанс 10% лишить врага его последней использованной способности. (Возможность открывается во время боя с шансом 15%) no-sell [205💵]`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🦍Метаморфизм"
},
"color": `${message.user.misc.meta == 1 ? 'secondary' : message.user.gold >= 60 ? 'primary' : 'secondary'}`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "❣Вампиризм"
},
"color": `${message.user.misc.vamp == 1 ? 'secondary' : message.user.gold >= 90 ? 'primary' : 'secondary'}`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🌀Ареометизм"
},
"color": `${message.user.misc.areo == 1 ? 'secondary' : message.user.gold >= 125 ? 'primary' : 'secondary'}`
},
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🐶Анимализм"
},
"color": `${message.user.misc.nima == 1 ? 'secondary' : message.user.gold >= 160 ? 'primary' : 'secondary'}`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📛Блокировка"
},
"color": `${message.user.misc.block == 1 ? 'secondary' : message.user.gold >= 205 ? 'primary' : 'secondary'}`
},			
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.backto == 1 ? `🚷Назад` : `👣Вернуться` }`
},
"color": `positive`
}
]
]
})
});
});
//-------------------------------------------[Метаморфизм]-------------------------------------------------------//
cmd.hear(/^(?:🦍Метаморфизм|🦍 Метаморфизм|Метаморфизм)?$/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true;
if (message.user.misc.bloodTime == true){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вашей кровью завладели, недоступно.`)}
if (message.user.xodLOCK == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}время остановлено.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if ((message.user.xod !== 1)&&(message.user.biz !== 0)){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}], ждите своего хода.`)}
if (message.user.pve.completeOFpve) {return bot(`в PVE эта команда недоступна.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if (message.user.misc.startgame !== 1){
return bot(`Вам никто не бросал вызов.🔕`)
} if (message.user.misc.meta == 1){return bot(`у Вас уже есть данная способность`)}
if (message.user.gold < 60){return bot(`Недостаточно денег.`)} else{
let user = users.find(x=> x.uid === Number(message.user.biz));
message.user.misc.meta = 1;
message.user.gold -= 60;
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}‼[id${message.user.id}|${message.user.tag}] стал 🦍Метаморфом!`});
if (message.user.backto == 1){
return bot(`🦍что же это происходит...`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});	
} else {
return bot(`🦍что же это происходит...`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🔪Кастет"
},
"color": `${((message.user.misc.kastet >= 1)||(message.user.misc.mech >= 1)||(message.user.misc.sablya >= 1))? 'secondary' : message.user.gold>35 ? 'primary' : 'secondary'}`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚔Меч"
},
"color": `${((message.user.misc.kastet >= 1)||(message.user.misc.mech >= 1)||(message.user.misc.sablya >= 1))? 'secondary' : message.user.gold>50 ? 'primary' : 'secondary'}`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🗡Сабля"
},
"color": `${((message.user.misc.kastet >= 1)||(message.user.misc.mech >= 1)||(message.user.misc.sablya >= 1))? 'secondary' : message.user.gold>80 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛡Броня"
},
"color": `${message.user.misc.shield == 1 ? 'secondary' : message.user.gold >= 50 ? 'primary' : 'secondary' }`
},						
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🎯Продать`
},
"color": `${message.user.misc.kastet ? "primary": message.user.misc.mech ? "primary" : message.user.misc.sablya ? "primary" : "secondary"}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}` }
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⛔Выйти из магазина" 
},
"color": "negative"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
],
],

})
})
}
}
});
//-------------------------------------------[Вампиризм]-------------------------------------------------------//
cmd.hear(/^(?:❣Вампиризм|❣ Вампиризм|Вампиризм)?$/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true;
if (message.user.misc.bloodTime == true){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вашей кровью завладели, недоступно.`)}
if (message.user.xodLOCK == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}время остановлено.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if (message.user.xodLOCK == 1){return bot(`время остановлено.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if ((message.user.xod !== 1)&&(message.user.biz !== 0)){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}], ждите своего хода.`)}
if (message.user.pve.completeOFpve) {return bot(`в PVE эта команда недоступна.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if (message.user.misc.startgame !== 1){
return bot(`Вам никто не бросал вызов.🔕`)
} if (message.user.misc.vamp == 1){return bot(`у Вас уже есть данная способность`)}
if (message.user.gold < 90){return bot(`Недостаточно денег.`)} else{
let user = users.find(x=> x.uid === Number(message.user.biz));
message.user.misc.vamp = 1;
message.user.gold -= 90;
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}‼[id${message.user.id}|${message.user.tag}] стал ❣Вампиром!`});
if (message.user.backto == 1){
return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑❣В`: `❣В`}ы стали Вампиром.`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});	
} else {
return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑❣В`: `❣В`}ы стали Вампиром.`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🔪Кастет"
},
"color": `${((message.user.misc.kastet >= 1)||(message.user.misc.mech >= 1)||(message.user.misc.sablya >= 1))? 'secondary' : message.user.gold>35 ? 'primary' : 'secondary'}`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚔Меч"
},
"color": `${((message.user.misc.kastet >= 1)||(message.user.misc.mech >= 1)||(message.user.misc.sablya >= 1))? 'secondary' : message.user.gold>50 ? 'primary' : 'secondary'}`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🗡Сабля"
},
"color": `${((message.user.misc.kastet >= 1)||(message.user.misc.mech >= 1)||(message.user.misc.sablya >= 1))? 'secondary' : message.user.gold>80 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛡Броня"
},
"color": `${message.user.misc.shield == 1 ? 'secondary' : message.user.gold >= 50 ? 'primary' : 'secondary' }`
},						
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🎯Продать`
},
"color": `${message.user.misc.kastet ? "primary": message.user.misc.mech ? "primary" : message.user.misc.sablya ? "primary" : "secondary"}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}` }
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⛔Выйти из магазина" 
},
"color": "negative"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
],
],

})
})
}
}
});
//-------------------------------------------[Ареометизм]-------------------------------------------------------//
cmd.hear(/^(?:🌀Ареометизм|🌀 Ареометизм|Ареометизм)?$/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true;
if (message.user.misc.bloodTime == true){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вашей кровью завладели, недоступно.`)}
if (message.user.xodLOCK == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}время остановлено.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if ((message.user.xod !== 1)&&(message.user.biz !== 0)){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}], ждите своего хода.`)}
if (message.user.pve.completeOFpve) {return bot(`в PVE эта команда недоступна.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if (message.user.misc.startgame !== 1){
return bot(`Вам никто не бросал вызов.🔕`)
} if (message.user.misc.areo == 1){return bot(`у Вас уже есть данная способность`)}
if (message.user.gold < 125){return bot(`Недостаточно денег.`)} else{
let user = users.find(x=> x.uid === Number(message.user.biz));
message.user.misc.areo = 1;
message.user.gold -=125;
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}‼[id${message.user.id}|${message.user.tag}] может создавать 🌀защитные поля.`});
if (message.user.backto == 1){
return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑🌀т`: `🌀т`}еперь вы сможете создавать защитные поля.`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});	
} else {
return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑🌀т`: `🌀т`}еперь вы сможете создавать защитные поля.`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🔪Кастет"
},
"color": `${((message.user.misc.kastet >= 1)||(message.user.misc.mech >= 1)||(message.user.misc.sablya >= 1))? 'secondary' : message.user.gold>35 ? 'primary' : 'secondary'}`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚔Меч"
},
"color": `${((message.user.misc.kastet >= 1)||(message.user.misc.mech >= 1)||(message.user.misc.sablya >= 1))? 'secondary' : message.user.gold>50 ? 'primary' : 'secondary'}`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🗡Сабля"
},
"color": `${((message.user.misc.kastet >= 1)||(message.user.misc.mech >= 1)||(message.user.misc.sablya >= 1))? 'secondary' : message.user.gold>80 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛡Броня"
},
"color": `${message.user.misc.shield == 1 ? 'secondary' : message.user.gold >= 50 ? 'primary' : 'secondary' }`
},						
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🎯Продать`
},
"color": `${message.user.misc.kastet ? "primary": message.user.misc.mech ? "primary" : message.user.misc.sablya ? "primary" : "secondary"}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}` }
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⛔Выйти из магазина" 
},
"color": "negative"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
],
],

})
})
}
}
});
//-------------------------------------------[Анимализм]-------------------------------------------------------//
cmd.hear(/^(?:🐶Анимализм|🐶 Анимализм|Анимализм)?$/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true;
if (message.user.misc.bloodTime == true){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вашей кровью завладели, недоступно.`)}
if (message.user.xodLOCK == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}время остановлено.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if ((message.user.xod !== 1)&&(message.user.biz !== 0)){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}], ждите своего хода.`)}
if (message.user.pve.completeOFpve) {return bot(`в PVE эта команда недоступна.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if (message.user.misc.startgame !== 1){
return bot(`Вам никто не бросал вызов.🔕`)
}if (message.user.misc.nima == 1){return bot(`у Вас уже есть данная способность`)}
if (message.user.gold < 140){return bot(`Недостаточно денег.`)} else{
let user = users.find(x=> x.uid === Number(message.user.biz));
message.user.misc.nima = 1;
message.user.gold -= 140;
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}‼[id${message.user.id}|${message.user.tag}] имеет доступ к 🐶анимализму`});
if (message.user.backto == 1){
return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑🐶я`: `🐶я`} его чую...`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});	
} else {
return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑🐶я`: `🐶я`} его чую...`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🔪Кастет"
},
"color": `${((message.user.misc.kastet >= 1)||(message.user.misc.mech >= 1)||(message.user.misc.sablya >= 1))? 'secondary' : message.user.gold>35 ? 'primary' : 'secondary'}`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚔Меч"
},
"color": `${((message.user.misc.kastet >= 1)||(message.user.misc.mech >= 1)||(message.user.misc.sablya >= 1))? 'secondary' : message.user.gold>50 ? 'primary' : 'secondary'}`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🗡Сабля"
},
"color": `${((message.user.misc.kastet >= 1)||(message.user.misc.mech >= 1)||(message.user.misc.sablya >= 1))? 'secondary' : message.user.gold>80 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛡Броня"
},
"color": `${message.user.misc.shield == 1 ? 'secondary' : message.user.gold >= 50 ? 'primary' : 'secondary' }`
},						
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🎯Продать`
},
"color": `${message.user.misc.kastet ? "primary": message.user.misc.mech ? "primary" : message.user.misc.sablya ? "primary" : "secondary"}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}` }
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⛔Выйти из магазина" 
},
"color": "negative"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
],
],

})
})
}
}
});
//-------------------------------------------[Блокировка]-------------------------------------------------------//
cmd.hear(/^(?:📛Блокировка|📛 Блокировка|Блокировка)?$/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true;
if (message.user.misc.bloodTime == true){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вашей кровью завладели, недоступно.`)}
if (message.user.xodLOCK == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}время остановлено.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if ((message.user.xod !== 1)&&(message.user.biz !== 0)){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}], ждите своего хода.`)}
if (message.user.pve.completeOFpve) {return bot(`в PVE эта команда недоступна.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if (message.user.misc.startgame !== 1){
return bot(`Вам никто не бросал вызов.🔕`)
} if (message.user.misc.block == 1){return bot(`у Вас уже есть данная способность`)}
if (message.user.gold < 205){return bot(`Недостаточно денег.`)} else{
let user = users.find(x=> x.uid === Number(message.user.biz));
message.user.misc.block = 1;
message.user.gold -= 205;
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}‼[id${message.user.id}|${message.user.tag}] имеет возможность 📛блокировать ваши способности!`});
if (message.user.backto == 1){
return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑📛Т`: `📛т`}еперь Вы владеете способность блокировки.`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});	
} else {
return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑📛Т`: `📛т`}еперь Вы владеете способность блокировки.`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🔪Кастет"
},
"color": `${((message.user.misc.kastet >= 1)||(message.user.misc.mech >= 1)||(message.user.misc.sablya >= 1))? 'secondary' : message.user.gold>35 ? 'primary' : 'secondary'}`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚔Меч"
},
"color": `${((message.user.misc.kastet >= 1)||(message.user.misc.mech >= 1)||(message.user.misc.sablya >= 1))? 'secondary' : message.user.gold>50 ? 'primary' : 'secondary'}`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🗡Сабля"
},
"color": `${((message.user.misc.kastet >= 1)||(message.user.misc.mech >= 1)||(message.user.misc.sablya >= 1))? 'secondary' : message.user.gold>80 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛡Броня"
},
"color": `${message.user.misc.shield == 1 ? 'secondary' : message.user.gold >= 50 ? 'primary' : 'secondary' }`
},						
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🎯Продать`
},
"color": `${message.user.misc.kastet ? "primary": message.user.misc.mech ? "primary" : message.user.misc.sablya ? "primary" : "secondary"}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}` }
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⛔Выйти из магазина" 
},
"color": "negative"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
],
],

})
})
}
}
});


//-------------------------------------------[Магия]-------------------------------------------------------//
cmd.hear(/^(?:🔮Магия|🔮 Магия|Магия)?$/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true;
if (message.user.misc.bloodTime == true){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вашей кровью завладели, недоступно.`)}
if (message.user.xodLOCK == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}время остановлено.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if ((message.user.xod !== 1)&&(message.user.biz !== 0)){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}], ждите своего хода.`)}
if (message.user.pve.completeOFpve) {return bot(`в PVE эта команда недоступна.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if (message.user.misc.startgame !== 1){
return bot(`Вам никто не бросал вызов.🔕`)
}
let user = users.find(x=> x.uid === Number(message.user.biz));
if(!message.args[1]) return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑💰`: `💰`}Ваше золото - ${message.user.gold}. Магия: 
${message.user.misc.magicTime === 1 ? '🔹' : '🔸'} 1. ⏳Магия времени: [155💵] [Позволяет управлять временем, no-sell]
[С шансом возможность нанести 3 удара]
[С шансом возможность украсть 50% золота врага]
[С шансом возможность сломать врагу оружие]
${message.user.misc.magicBlood === 1 ? '🔹' : '🔸'} 2. 💉Магия крови: [180💵] [Позволяет управлять кровью, no-sell]
[Выбрать: Высосать у врага 20% здоровья]
[Выбрать: Нанести урон в размере 20% от своего здоровья]`,	
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⏳Магия времени"
},
"color": `${((message.user.misc.magicTime) || (message.user.misc.magicBlood)) ? "secondary" : message.user.gold >= 155 ? "primary" : "secondary"}`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "💉Магия крови"
},
"color": `${((message.user.misc.magicBlood) || (message.user.misc.magicTime)) ? "secondary" : message.user.gold >= 180 ? "primary" : "secondary"}`
},
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.backto == 1 ? `🚷Назад` : `👣Вернуться` }`
},
"color": `positive`
}
]
]
})
});
});

//-------------------------------------------[Магия Времени]-------------------------------------------------------//
cmd.hear(/^(?:⏳Магия|⏳ Магия|Магия)\s(Времени)?$/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true;
if (message.user.misc.bloodTime == true){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вашей кровью завладели, недоступно.`)}
if (message.user.xodLOCK == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}время остановлено.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if ((message.user.xod !== 1)&&(message.user.biz !== 0)){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}], ждите своего хода.`)}
if (message.user.pve.completeOFpve) {return bot(`в PVE эта команда недоступна.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if (message.user.misc.startgame !== 1){
return bot(`Вам никто не бросал вызов.🔕`)
}
if (message.user.misc.magicBlood == 1){return bot(`Вы уже владеете магией крови.`)}
if (message.user.misc.magicTime == 1){return bot(`у Вас уже есть магия времени.`)}
let user = users.find(x=> x.uid === Number(message.user.biz));
if (message.user.gold >= 155){
message.user.gold -= 155;
message.user.misc.magicTime = 1;
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}‼[id${message.user.id}|${message.user.tag}] имеет доступ к магии времени!`});
return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑В`: `В`}ы стали ⏳магом Времени.`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});	
} else {return bot(`недостаточно денег.`)}
});
//-------------------------------------------[Магия Крови]-------------------------------------------------------//
cmd.hear(/^(?:💉Магия|💉 Магия|Магия)\s(Крови)?$/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true;
if (message.user.misc.bloodTime == true){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вашей кровью завладели, недоступно.`)}
if (message.user.xodLOCK == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}время остановлено.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if ((message.user.xod !== 1)&&(message.user.biz !== 0)){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}], ждите своего хода.`)}
if (message.user.pve.completeOFpve) {return bot(`в PVE эта команда недоступна.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if (message.user.misc.startgame !== 1){
return bot(`Вам никто не бросал вызов.🔕`)
}
if (message.user.misc.magicBlood == 1){return bot(`у Вас уже есть магия крови.`)}
if (message.user.misc.magicTime == 1){return bot(`Вы уже владеете магией времени. `)}
let user = users.find(x=> x.uid === Number(message.user.biz));
if (message.user.gold >= 180){
message.user.gold -= 180;
message.user.misc.magicBlood = 1;
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}‼[id${message.user.id}|${message.user.tag}] стал 💉магом крови!`});
return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑В`: `В`}ы стали магом крови.`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});	
} else {return bot(`недостаточно денег.`)}
});






//-------------------------------------------[Кастет]-------------------------------------------------------//
cmd.hear(/^(?:Кастет|🔪 Кастет|🔪Кастет)\s?([1-3]+)?$/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true;
if (message.user.misc.bloodTime == true){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вашей кровью завладели, недоступно.`)}
if (message.user.xodLOCK == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}время остановлено.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if ((message.user.xod !== 1)&&(message.user.biz !== 0)){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}], ждите своего хода.`)}
if (message.user.pve.completeOFpve) {return bot(`в PVE эта команда недоступна.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if (message.user.misc.startgame !== 1){
return bot(`Вам никто не бросал вызов.🔕`)
}
let user = users.find(x=> x.uid === Number(message.user.biz));
if(!message.args[1]) return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑💰`: `💰`}Ваше золото - ${message.user.gold}. Кастеты: 
${message.user.misc.kastet === 1 ? '🔹' : '🔸'} 1. 🔪Кастет 1lvl: (35 золотых)  [4 урона] [Шанс крита к сумме +10% [:40%]] 
${message.user.misc.kastet === 2 ? '🔹' : '🔸'} 2. 🔪Кастет 2lvl: (50 золотых)  [7 урона] [Шанс крита к сумме +15% [:55%]]
${message.user.misc.kastet === 3 ? '🔹' : '🔸'} 3. 🔪Кастет 3lvl: (80 золотых)  [10 урона] [Шанс крита к сумме +20%[:75%]]

Для покупки введите "[Кастет] [номер]"`,		
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🔪 Кастет 1"
},
"color": `${((message.user.misc.kastet >= 1)||(message.user.misc.mech >= 1)||(message.user.misc.sablya >= 1)) ? "secondary" : message.user.gold >= 35 ? "primary" : "secondary"}`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🔪 Кастет 2"
},
"color": `${((message.user.misc.kastet >= 1)||(message.user.misc.mech >= 1)||(message.user.misc.sablya >= 1)) ? "secondary" : message.user.gold >= 50 ? "primary" : "secondary"}`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🔪 Кастет 3"
},
"color": `${((message.user.misc.kastet >= 1)||(message.user.misc.mech >= 1)||(message.user.misc.sablya >= 1)) ? "secondary" : message.user.gold >= 80 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.backto == 1 ? `🚷Назад` : `👣Вернуться` }`
},
"color": `positive`
}
]
]
})
});
const sell = kastets.find(x=> x.id === Number(message.args[1]));
if(!sell) return;
if(message.user.misc.mech) return bot(`у Вас уже есть ${mechs[message.user.misc.mech - 1].name}. Используйте "Продать ${message.user.misc.weapon}"`)
if(message.user.misc.sablya) return bot(`у Вас уже есть ${sablyas[message.user.misc.sablya - 1].name}. Используйте "Продать ${message.user.misc.weapon}"`)
if (message.user.misc.kastet < 3){
if(message.user.misc.kastet) return bot(`у Вас уже есть ${kastets[message.user.misc.kastet - 1].name}. Используйте [Прокачать] [Кастет] [Уровень]`);}
else {return bot(`это максимальный уровень оружия.`)}
if(message.user.gold < sell.cost) return bot(`недостаточно золота`);
if(message.user.gold >= sell.cost)
{
message.user.gold -= sell.cost;
message.user.misc.kastet = sell.id;
if (message.user.misc.kastet == 1) {message.user.misc.weapon = `🔪Кастет 1lvl`;}
if (message.user.misc.kastet == 2) {message.user.misc.weapon = `🔪Кастет 2lvl`;}
if (message.user.misc.kastet == 3) {message.user.misc.weapon = `🔪Кастет 3lvl`;}
((message.user.misc.kastet == 1) && (message.user.gold >= 15)) ? message.user.misc.upgrade = true :
((message.user.misc.kastet == 2) && (message.user.gold >= 30)) ? message.user.misc.upgrade = true :
((message.user.misc.mech == 1) && (message.user.gold >= 30)) ? message.user.misc.upgrade = true :
((message.user.misc.mech == 2) && (message.user.gold >= 30)) ? message.user.misc.upgrade = true :
((message.user.misc.sablya == 1) && (message.user.gold >= 30))? message.user.misc.upgrade = true :
((message.user.misc.sablya == 2) && (message.user.gold >= 40))? message.user.misc.upgrade = true : message.user.misc.upgrade = false;
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}📢[id${message.user.id}|${message.user.tag}] купил(а) ${message.user.misc.weapon}!`});
return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)} золотых. 
Улучшить: [Прокачать] [Кастет]
Продать: [Продать] [Кастет]`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});







} 
});

//-------------------------------------------[Меч]-------------------------------------------------------//
cmd.hear(/^(?:Меч|⚔Меч)\s?([1-3]+)?$/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true;
if (message.user.misc.bloodTime == true){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вашей кровью завладели, недоступно.`)}
if (message.user.xodLOCK == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}время остановлено.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if ((message.user.xod !== 1)&&(message.user.biz !== 0)){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}], ждите своего хода.`)}
if (message.user.pve.completeOFpve) {return bot(`в PVE эта команда недоступна.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if (message.user.misc.startgame !== 1){
return bot(`Вам никто не бросал вызов.🔕`)
}
let user = users.find(x=> x.uid === Number(message.user.biz));
if(!message.args[1]) return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑💰`: `💰`}Ваше золото - ${message.user.gold}. Мечи: 
${message.user.misc.mech === 1 ? '🔹' : '🔸'} 1. ⚔Меч 1lvl: (50 золотых)  [6 урона] [Понижение шанса критической атаки врагу на 10%] 
${message.user.misc.mech === 2 ? '🔹' : '🔸'} 2. ⚔Меч 2lvl: (80 золотых)  [9 урона] [Понижение шанса критической атаки врагу на 20%]
${message.user.misc.mech === 3 ? '🔹' : '🔸'} 3. ⚔меч 3lvl: (110 золотых)  [14 урона] [Понижение шанса критической атаки врагу на 25%]
Для покупки введите "[Меч] [номер]"`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚔Меч 1"
},
"color": `${((message.user.misc.kastet >= 1)||(message.user.misc.mech >= 1)||(message.user.misc.sablya >= 1)) ? "secondary" : message.user.gold >= 50 ? "primary" : "secondary"}`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚔Меч 2"
},
"color": `${((message.user.misc.kastet >= 1)||(message.user.misc.mech >= 1)||(message.user.misc.sablya >= 1)) ? "secondary" : message.user.gold >= 80 ? "primary" : "secondary"}`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚔Меч 3"
},
"color": `${((message.user.misc.kastet >= 1)||(message.user.misc.mech >= 1)||(message.user.misc.sablya >= 1)) ? "secondary" : message.user.gold >= 110 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.backto == 1 ? `🚷Назад` : `👣Вернуться` }`
},
"color": `positive`
}
]
]
})
});
const sell = mechs.find(x=> x.id === Number(message.args[1]));
if(!sell) return;
if(message.user.misc.sablya)return bot(`у Вас уже есть ${sablyas[message.user.misc.sablya - 1].name}. Используйте "Продать ${message.user.misc.weapon}"`)
if(message.user.misc.kastet)return bot(`у Вас уже есть ${kastets[message.user.misc.kastet - 1].name}. Используйте "Продать ${message.user.misc.weapon}"`)
if(message.user.misc.mech) return bot(`у Вас уже есть ${mechs[message.user.misc.mech - 1].name}. Используйте [Прокачать] [Меч] [Уровень]`);
if(message.user.gold < sell.cost) return bot(`недостаточно золота`);
if(message.user.gold >= sell.cost)
{
message.user.gold -= sell.cost;
message.user.misc.mech = sell.id;
if (message.user.misc.mech == 1) {message.user.misc.weapon = `⚔Меч 1lvl`;}
if (message.user.misc.mech == 2) {message.user.misc.weapon = `⚔Меч 2lvl`;}
if (message.user.misc.mech == 3) {message.user.misc.weapon = `⚔Меч 3lvl`;}
((message.user.misc.kastet == 1) && (message.user.gold >= 15)) ? message.user.misc.upgrade = true :
((message.user.misc.kastet == 2) && (message.user.gold >= 30)) ? message.user.misc.upgrade = true :
((message.user.misc.mech == 1) && (message.user.gold >= 30)) ? message.user.misc.upgrade = true :
((message.user.misc.mech == 2) && (message.user.gold >= 30)) ? message.user.misc.upgrade = true :
((message.user.misc.sablya == 1) && (message.user.gold >= 30))? message.user.misc.upgrade = true :
((message.user.misc.sablya == 2) && (message.user.gold >= 40))? message.user.misc.upgrade = true : message.user.misc.upgrade = false;
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}📢[id${message.user.id}|${message.user.tag}] купил(а) ${message.user.misc.weapon}!`});
return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑В`: `В`}ы купили "${sell.name}" за ${utils.sp(sell.cost)} золотых. 
Улучшить: [Прокачать] [Меч]
Продать: [Продать] [Меч]`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});
}
});

//-------------------------------------------[Сабля]-------------------------------------------------------//
cmd.hear(/^(?:Сабля|🗡Сабля)\s?([1-3]+)?$/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true;
if (message.user.misc.bloodTime == true){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вашей кровью завладели, недоступно.`)}
if (message.user.xodLOCK == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}время остановлено.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if ((message.user.xod !== 1)&&(message.user.biz !== 0)){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}], ждите своего хода.`)}
if (message.user.pve.completeOFpve) {return bot(`в PVE эта команда недоступна.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if (message.user.misc.startgame !== 1){
return bot(`Вам никто не бросал вызов.🔕`)
}
let user = users.find(x=> x.uid === Number(message.user.biz));

if(!message.args[1]) return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑💰`: `💰`}Ваше золото - ${message.user.gold}. Сабли: 
${message.user.misc.sablya === 1 ? '🔹' : '🔸'} 1. 🗡Сабля 1lvl: (80 золотых)  [11 урона] [Шанс контратаки: 20%, в размере 2,5*урон] 
${message.user.misc.sablya === 2 ? '🔹' : '🔸'} 2. 🗡Сабля 2lvl: (110 золотых)  [15 урона] [Шанс контратаки: 35%, в размере 2,5*урон]
${message.user.misc.sablya === 3 ? '🔹' : '🔸'} 3. 🗡Сабля 3lvl: (150 золотых)  [21 урона] [Шанс контратаки: 50%, в размере 2,5*урон]

Для покупки введите "[Сабля] [номер]"`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🗡Сабля 1"
},
"color": `${((message.user.misc.kastet >= 1)||(message.user.misc.mech >= 1)||(message.user.misc.sablya >= 1)) ? "secondary" : message.user.gold >= 80 ? "primary" : "secondary"}`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🗡Сабля 2"
},
"color": `${((message.user.misc.kastet >= 1)||(message.user.misc.mech >= 1)||(message.user.misc.sablya >= 1)) ? "secondary" : message.user.gold >= 110 ? "primary" : "secondary"}`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🗡Сабля 3"
},
"color": `${((message.user.misc.kastet >= 1)||(message.user.misc.mech >= 1)||(message.user.misc.sablya >= 1)) ? "secondary" : message.user.gold >= 150 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.backto == 1 ? `🚷Назад` : `👣Вернуться` }`
},
"color": `positive`
}
]
]
})
});
const sell = sablyas.find(x=> x.id === Number(message.args[1]));
if(!sell) return;
if (message.user.misc.mech) return bot(`у Вас уже есть ${mechs[message.user.misc.mech - 1].name}. Используйте "Продать ${message.user.misc.weapon}`)
if (message.user.misc.kastet) return bot(`у Вас уже есть ${kastets[message.user.misc.kastet - 1].name}. Используйте "Продать ${message.user.misc.weapon}"`);
if(message.user.misc.sablya) return bot(`у Вас уже есть ${sablyas[message.user.misc.sablya - 1].name}. Используйте [Прокачать] [Сабля] [Уровень]`);
if(message.user.gold < sell.cost) return bot(`недостаточно золота`);
if(message.user.gold >= sell.cost)
{
message.user.gold -= sell.cost;
message.user.misc.sablya = sell.id;
if (message.user.misc.sablya == 1) {message.user.misc.weapon = `🗡Сабля 1lvl`;}
if (message.user.misc.sablya == 2) {message.user.misc.weapon = `🗡Сабля 2lvl`;}
if (message.user.misc.sablya == 3) {message.user.misc.weapon = `🗡Сабля 3lvl`;}	
((message.user.misc.kastet == 1) && (message.user.gold >= 15)) ? message.user.misc.upgrade = true :
((message.user.misc.kastet == 2) && (message.user.gold >= 30)) ? message.user.misc.upgrade = true :
((message.user.misc.mech == 1) && (message.user.gold >= 30)) ? message.user.misc.upgrade = true :
((message.user.misc.mech == 2) && (message.user.gold >= 30)) ? message.user.misc.upgrade = true :
((message.user.misc.sablya == 1) && (message.user.gold >= 30))? message.user.misc.upgrade = true :
((message.user.misc.sablya == 2) && (message.user.gold >= 40))? message.user.misc.upgrade = true : message.user.misc.upgrade = false;
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}📢[id${message.user.id}|${message.user.tag}] купил(а) ${message.user.misc.weapon}!`});
return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑В`: `В`}ы купили "${sell.name}" за ${utils.sp(sell.cost)} золотых. 
Улучшить: [Прокачать] [Саблю]
Продать: [Продать] [Саблю]`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});

}
});



//-----------------------------------------------------------ОРУЖИЕ---------------------------------------------------------//














//--------------------------------------------------------------ПРОКАЧКА-----------------------------------------------------------//

//-------------------------------------------[Прокачать Кастет]-------------------------------------------------------//
cmd.hear(/^(?:📈Прокачать|Прокачать)\s(?:Кастет|🔪Кастет)\s?([1-3+])?$/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true;
if (message.user.misc.bloodTime == true){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вашей кровью завладели, недоступно.`)}
if (message.user.xodLOCK == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}время остановлено.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if ((message.user.xod !== 1)&&(message.user.biz !== 0)){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}], ждите своего хода.`)}
if (message.user.pve.completeOFpve) {return bot(`в PVE эта команда недоступна.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if (message.user.misc.startgame !== 1){
return bot(`Вам никто не бросал вызов.🔕`)
}
if (!message.user.misc.kastet) return bot(`у Вас нет кастета.`);
if (message.user.misc.kastet == 3) return bot(`у Вас уже максимальный уровень 🔪кастета.`)
let user = users.find(x=> x.uid === Number(message.user.biz));
if ((message.args[2] == 1) && (message.user.misc.kastet == 1)){await bot('у Вас уже есть кастет 1 уровня.')};
if ((message.args[2] == 2) && (message.user.misc.kastet == 2)){await bot('у Вас уже есть кастет 2 уровня.')};
if ((message.args[2] == 3) && (message.user.misc.kastet == 3)){await bot('у Вас уже есть кастет 3 уровня.')};
if ((message.user.misc.kastet == 1) && ((message.args[2] !== '2') || (message.args[2] !== '3')) && (!message.args[1])) {await bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑💰`: `💰`}Ваше золото - ${message.user.gold}. Прокачка кастетов: 
${message.user.misc.kastetup === 2 ? '🔹' : '🔸'} 2. 🔪Кастет 2lvl: (15 золотых) [+3 урона] [Шанс крита +5% к сумме]
${message.user.misc.kastetsup === 3 ? '🔹' : '🔸'} 3. 🔪Кастет 3lvl: (45 золотых) [+7 урона] [Шанс крита +10% к сумме]
Для покупки введите "[Прокачать] [кастет] [уровень]"`,

{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать 🔪Кастет 2"
},
"color": `${message.user.gold >= 15 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать 🔪Кастет 3"
},
"color": `${message.user.gold >= 45 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.backto == 1 ? `🚷Назад` : `👣Вернуться` }`
},
"color": `positive`
}
]
]
})
});
}
if ((message.user.misc.kastet == 1) && (message.args[1])){
const sell = kastetsups.find(x=> x.id === Number(message.args[1]));
if(!sell) return;
if ((message.args[1]) == (message.user.misc.kastet)) return bot(`у Вас уже есть такой кастет. Просмотреть свое оружие - [Инвентарь]`);
if(message.user.gold < sell.cost) return bot(`недостаточно золота`);
else if(message.user.gold >= sell.cost)
{
message.user.gold -= sell.cost;
message.user.misc.kastet = sell.id;
if (message.user.misc.kastet == 1) {message.user.misc.weapon = `🔪Кастет 1lvl`;}
if (message.user.misc.kastet == 2) {message.user.misc.weapon = `🔪Кастет 2lvl`;}
if (message.user.misc.kastet == 3) {message.user.misc.weapon = `🔪Кастет 3lvl`;}
((message.user.misc.kastet == 1) && (message.user.gold >= 15)) ? message.user.misc.upgrade = true :
((message.user.misc.kastet == 2) && (message.user.gold >= 30)) ? message.user.misc.upgrade = true :
((message.user.misc.mech == 1) && (message.user.gold >= 30)) ? message.user.misc.upgrade = true :
((message.user.misc.mech == 2) && (message.user.gold >= 30)) ? message.user.misc.upgrade = true :
((message.user.misc.sablya == 1) && (message.user.gold >= 30))? message.user.misc.upgrade = true :
((message.user.misc.sablya == 2) && (message.user.gold >= 40))? message.user.misc.upgrade = true : message.user.misc.upgrade = false;
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}📢[id${message.user.id}|${message.user.tag}] прокачал(а) кастет. Текущее оружие - ${message.user.misc.weapon}`});

return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑В`: `В`}ы купили "${sell.name}" за ${utils.sp(sell.cost)} золотых`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});

}
}

if ((message.user.misc.kastet == 2) && (message.args[2] !== '3') && (!message.args[1])){await bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑💰`: `💰`}Ваше золото - ${message.user.gold}. Прокачка кастетов: 
${message.user.misc.kastetssup === 3 ? '🔹' : '🔸'} 3. 🔪Кастет 3lvl: (30 золотых) [+7 урона] [Шанс крита +10% к сумме]
Для покупки введите "[Прокачать] [кастет] [уровень]"`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать 🔪Кастет 3"
},
"color": `${message.user.gold >= 30 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.backto == 1 ? `🚷Назад` : `👣Вернуться` }`
},
"color": `positive`
}
]
]
})
});

}
if ((message.user.misc.kastet == 2) && (message.args[1])){
const sell = kastetssups.find(x=> x.id === Number(message.args[1]));
if(!sell) return;
if(message.user.gold < sell.cost) return bot(`недостаточно золота`);
else if(message.user.gold >= sell.cost)
{
message.user.gold -= sell.cost;
message.user.misc.kastet = sell.id;
if (message.user.misc.kastet == 1) {message.user.misc.weapon = `🔪Кастет 1lvl`;}
if (message.user.misc.kastet == 2) {message.user.misc.weapon = `🔪Кастет 2lvl`;}
if (message.user.misc.kastet == 3) {message.user.misc.weapon = `🔪Кастет 3lvl`;}
((message.user.misc.kastet == 1) && (message.user.gold >= 15)) ? message.user.misc.upgrade = true :
((message.user.misc.kastet == 2) && (message.user.gold >= 30)) ? message.user.misc.upgrade = true :
((message.user.misc.mech == 1) && (message.user.gold >= 30)) ? message.user.misc.upgrade = true :
((message.user.misc.mech == 2) && (message.user.gold >= 30)) ? message.user.misc.upgrade = true :
((message.user.misc.sablya == 1) && (message.user.gold >= 30))? message.user.misc.upgrade = true :
((message.user.misc.sablya == 2) && (message.user.gold >= 40))? message.user.misc.upgrade = true : message.user.misc.upgrade = false;
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}📢[id${message.user.id}|${message.user.tag}] прокачал(а) кастет. Текущее оружие - ${message.user.misc.weapon}`});
return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑В`: `В`}ы купили "${sell.name}" за ${utils.sp(sell.cost)} золотых`,			{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});




}}

});
//-------------------------------------------[Прокачать Меч]-------------------------------------------------------//
cmd.hear(/^(?:📈Прокачать|Прокачать)\s(?:Меч|⚔Меч)\s?([1-3+])?$/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true;
if (message.user.misc.bloodTime == true){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вашей кровью завладели, недоступно.`)}
if (message.user.xodLOCK == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}время остановлено.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if ((message.user.xod !== 1)&&(message.user.biz !== 0)){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}], ждите своего хода.`)}
if (message.user.pve.completeOFpve) {return bot(`в PVE эта команда недоступна.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if (message.user.misc.startgame !== 1){
return bot(`Вам никто не бросал вызов.🔕`)
}
let user = users.find(x=> x.uid === Number(message.user.biz));
if (!message.user.misc.mech) return bot(`у Вас нет меча.`);
if (message.user.misc.mech == 3) return bot(`у Вас уже максимальный уровень ⚔меча.`)
if ((message.args[2] == 1) && (message.user.misc.mech == 1)){await bot('у Вас уже есть меч 1 уровня.')};
if ((message.args[2] == 2) && (message.user.misc.mech == 2)){await bot('у Вас уже есть меч 2 уровня.')};
if ((message.args[2] == 3) && (message.user.misc.mech == 3)){await bot('у Вас уже есть меч 3 уровня.')};	
if ((message.user.misc.mech == 1) && ((message.args[2] !== '2') || (message.args[2] !== '3')) && (!message.args[1])) {await bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑💰`: `💰`}Ваше золото - ${message.user.gold}. Прокачка мечей: 
${message.user.misc.mechup === 2 ? '🔹' : '🔸'} 2. ⚔Меч 2lvl: (30 золотых) [+3 урона] [Понижение шанса критической атаки на 10%]
${message.user.misc.mechsup === 3 ? '🔹' : '🔸'} 3. ⚔Меч 3lvl: (60 золотых) [+8 урона] [Понижение шанса критической атаки на 45%]
Для покупки введите "[Прокачать] [меч] [уровень]"`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать ⚔Меч 2"
},
"color": `${message.user.gold >= 30 ? 'primary' : 'secondary'}`
},
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать ⚔Меч 3"
},
"color": `${message.user.gold >= 60 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.backto == 1 ? `🚷Назад` : `👣Вернуться` }`
},
"color": `positive`
}
]
]
})
})
}
if ((message.user.misc.mech == 1) && (message.args[1])){
const sell = mechsups.find(x=> x.id === Number(message.args[1]));
if(!sell) return;
if ((message.args[1]) == (message.user.misc.mech)) return bot(`у Вас уже есть такой меч. Просмотреть свое оружие - [Инвентарь]`);
if(message.user.gold < sell.cost) return bot(`недостаточно золота`);
else if(message.user.gold >= sell.cost)
{
message.user.gold -= sell.cost;
message.user.misc.mech = sell.id;
if (message.user.misc.mech == 1) {message.user.misc.weapon = `⚔Меч 1lvl`;}
if (message.user.misc.mech == 2) {message.user.misc.weapon = `⚔Меч 2lvl`;}
if (message.user.misc.mech == 3) {message.user.misc.weapon = `⚔Меч 3lvl`;}
((message.user.misc.kastet == 1) && (message.user.gold >= 15)) ? message.user.misc.upgrade = true :
((message.user.misc.kastet == 2) && (message.user.gold >= 30)) ? message.user.misc.upgrade = true :
((message.user.misc.mech == 1) && (message.user.gold >= 30)) ? message.user.misc.upgrade = true :
((message.user.misc.mech == 2) && (message.user.gold >= 30)) ? message.user.misc.upgrade = true :
((message.user.misc.sablya == 1) && (message.user.gold >= 30))? message.user.misc.upgrade = true :
((message.user.misc.sablya == 2) && (message.user.gold >= 40))? message.user.misc.upgrade = true : message.user.misc.upgrade = false;
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}📢[id${message.user.id}|${message.user.tag}] прокачал(а) меч! Текущее оружие - ${message.user.misc.weapon}`});
return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `В`: `В`}ы купили "${sell.name}" за ${utils.sp(sell.cost)} золотых`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});


}}

if ((message.user.misc.mech == 2) && (message.args[2] !== '3') && (!message.args[1])){await bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑💰`: `💰`}Ваше золото - ${message.user.gold}. Прокачка мечей: 
${message.user.misc.mechssup === 3 ? '🔹' : '🔸'} 3. ⚔Меч 3lvl: (30 золотых) [+5 урона] [Понижение шанса критической атаки на 25%]
Для покупки введите "[Прокачать] [меч] [уровень]"`,{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать ⚔Меч 3"
},
"color": `${message.user.gold >= 30 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.backto == 1 ? `🚷Назад` : `👣Вернуться` }`
},
"color": `positive`
}
]
]
})
});



}
if ((message.user.misc.mech == 2) && (message.args[1])){
const sell = mechssups.find(x=> x.id === Number(message.args[1]));
if(!sell) return;
if(message.user.gold < sell.cost) return bot(`недостаточно золота`);
else if(message.user.gold >= sell.cost)
{
message.user.gold -= sell.cost;
message.user.misc.mech = sell.id;
if (message.user.misc.mech == 1) {message.user.misc.weapon = `⚔Меч 1lvl`;}
if (message.user.misc.mech == 2) {message.user.misc.weapon = `⚔Меч 2lvl`;}
if (message.user.misc.mech == 3) {message.user.misc.weapon = `⚔Меч 3lvl`;}
((message.user.misc.kastet == 1) && (message.user.gold >= 15)) ? message.user.misc.upgrade = true :
((message.user.misc.kastet == 2) && (message.user.gold >= 30)) ? message.user.misc.upgrade = true :
((message.user.misc.mech == 1) && (message.user.gold >= 30)) ? message.user.misc.upgrade = true :
((message.user.misc.mech == 2) && (message.user.gold >= 30)) ? message.user.misc.upgrade = true :
((message.user.misc.sablya == 1) && (message.user.gold >= 30))? message.user.misc.upgrade = true :
((message.user.misc.sablya == 2) && (message.user.gold >= 40))? message.user.misc.upgrade = true : message.user.misc.upgrade = false;
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}📢[id${message.user.id}|${message.user.tag}]прокачал(а) меч! Текущее оружие - ${message.user.misc.weapon}`});
return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑в`: `В`}ы купили "${sell.name}" за ${utils.sp(sell.cost)} золотых`,		{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});




}}
});

//-------------------------------------------[Прокачать Саблю]-------------------------------------------------------//
cmd.hear(/^(?:📈Прокачать|Прокачать)\s(?:Саблю|Сабля|🗡Саблю)\s?([1-3+])?$/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true;
if (message.user.misc.bloodTime == true){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вашей кровью завладели, недоступно.`)}
if (message.user.xodLOCK == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}время остановлено.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if ((message.user.xod !== 1)&&(message.user.biz !== 0)){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}], ждите своего хода.`)}
if (message.user.pve.completeOFpve) {return bot(`в PVE эта команда недоступна.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if (message.user.misc.startgame !== 1){
return bot(`Вам никто не бросал вызов.🔕`)
}
if (message.user.misc.sablya == 3){return bot(`у Вас уже максимальынй уровень 🗡Сабли.`)}
let user = users.find(x=> x.uid === Number(message.user.biz));
if (!message.user.misc.sablya) return bot(`у Вас нет сабли.`);
if ((message.args[2] == 1) && (message.user.misc.sablya == 1)){await bot('у Вас уже есть сабля 1 уровня.')};
if ((message.args[2] == 2) && (message.user.misc.sablya == 2)){await bot('у Вас уже есть сабля 2 уровня.')};
if ((message.args[2] == 3) && (message.user.misc.sablya == 3)){await bot('у Вас уже есть сабля 3 уровня.')};
if ((message.user.misc.sablya == 1) && ((message.args[2] !== '2') || (message.args[2] !== '3')) && (!message.args[1])) {await bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑💰`: `💰`}Ваше золото - ${message.user.gold}. Прокачка сабли: 
${message.user.misc.sablyaup === 2 ? '🔹' : '🔸'} 2. 🗡Сабля 2lvl: (30 золотых) [+6 урона] [Шанс контратаки: 35%]
${message.user.misc.sablyasup === 3 ? '🔹' : '🔸'} 3. 🗡Сабля 3lvl: (70 золотых) [+17 урона] [Шанс контратаки: 50%]
Для покупки введите "[Прокачать] [сабля] [уровень]"`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать 🗡Саблю 2"
},
"color": `${message.user.gold >= 30 ? 'primary' : 'secondary'}`
},
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать 🗡Саблю 3"
},
"color": `${message.user.gold >= 70 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.backto == 1 ? `🚷Назад` : `👣Вернуться` }`
},
"color": `positive`
}
]
]
})
})
}
if ((message.user.misc.sablya == 1) && (message.args[1])){
const sell = sablyasups.find(x=> x.id === Number(message.args[1]));
if(!sell) return;
if ((message.args[1]) == (message.user.misc.sablya)) return bot(`у Вас уже есть такая сабля. Просмотреть свое оружие - [Инвентарь]`);
if(message.user.gold < sell.cost) return bot(`недостаточно золота`);
else if(message.user.gold >= sell.cost)
{
message.user.gold -= sell.cost;
message.user.misc.sablya = sell.id;
if (message.user.misc.sablya == 1) {message.user.misc.weapon = `🗡Сабля 1lvl`;}
if (message.user.misc.sablya == 2) {message.user.misc.weapon = `🗡Сабля 2lvl`;}
if (message.user.misc.sablya == 3) {message.user.misc.weapon = `🗡Сабля 3lvl`;}
((message.user.misc.kastet == 1) && (message.user.gold >= 15)) ? message.user.misc.upgrade = true :
((message.user.misc.kastet == 2) && (message.user.gold >= 30)) ? message.user.misc.upgrade = true :
((message.user.misc.mech == 1) && (message.user.gold >= 30)) ? message.user.misc.upgrade = true :
((message.user.misc.mech == 2) && (message.user.gold >= 30)) ? message.user.misc.upgrade = true :
((message.user.misc.sablya == 1) && (message.user.gold >= 30))? message.user.misc.upgrade = true :
((message.user.misc.sablya == 2) && (message.user.gold >= 40))? message.user.misc.upgrade = true : message.user.misc.upgrade = false;
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}📢[id${message.user.id}|${message.user.tag}] прокачал(а) саблю! Текущее оружие - ${message.user.misc.weapon}`});

return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑В`: `В`}ы купили "${sell.name}" за ${utils.sp(sell.cost)} золотых`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});


}}

if ((message.user.misc.sablya == 2) && (message.args[2] !== '3') && (!message.args[1])){await bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑💰`: `💰`}Ваше золото - ${message.user.gold}. Прокачка сабли: 
${message.user.misc.sablyassup === 3 ? '🔹' : '🔸'} 3. 🗡Сабля 3lvl: (40 золотых) [+11 урона] [Шанс контратаки: 50%]
Для покупки введите "[Прокачать] [сабля] [уровень]"`,
{ 
keyboard:JSON.stringify( 
{ 
"one_time": false, 
"buttons": [ 
[ 
{ 
"action": { 
"type": "text", 
"payload": "{\"button\": \"6\"}", 
"label": "📈Прокачать 🗡Саблю 3" 
}, 
"color": `${message.user.gold >= 40 ? 'primary' : 'secondary'}` 
} 
], 
[ 
{ 
"action": { 
"type": "text", 
"payload": "{\"button\": \"6\"}", 
"label": `${message.user.backto == 1 ? `🚷Назад` : `👣Вернуться` }` 
}, 
"color": `positive` 
} 
] 
] 
}) 
})
}
if ((message.user.misc.sablya == 2) && (message.args[1])){
const sell = sablyassups.find(x=> x.id === Number(message.args[1]));
if(!sell) return;
if(message.user.gold < sell.cost) return bot(`недостаточно золота`);
else if(message.user.gold >= sell.cost)
{
message.user.gold -= sell.cost;
message.user.misc.sablya = sell.id;
if (message.user.misc.sablya == 1) {message.user.misc.weapon = `🗡Сабля 1lvl`;}
if (message.user.misc.sablya == 2) {message.user.misc.weapon = `🗡Сабля 2lvl`;}
if (message.user.misc.sablya == 3) {message.user.misc.weapon = `🗡Сабля 3lvl`;}
((message.user.misc.kastet == 1) && (message.user.gold >= 15)) ? message.user.misc.upgrade = true :
((message.user.misc.kastet == 2) && (message.user.gold >= 30)) ? message.user.misc.upgrade = true :
((message.user.misc.mech == 1) && (message.user.gold >= 30)) ? message.user.misc.upgrade = true :
((message.user.misc.mech == 2) && (message.user.gold >= 30)) ? message.user.misc.upgrade = true :
((message.user.misc.sablya == 1) && (message.user.gold >= 30))? message.user.misc.upgrade = true :
((message.user.misc.sablya == 2) && (message.user.gold >= 40))? message.user.misc.upgrade = true : message.user.misc.upgrade = false;
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}📢[id${message.user.id}|${message.user.tag}] прокачал(а) саблю! Текущее оружие - ${message.user.misc.weapon}`});
return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑В`: `В`}ы купили "${sell.name}" за ${utils.sp(sell.cost)} золотых`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});
}}
});














//-------------------------------------------[Кровь]-------------------------------------------------------//
cmd.hear(/^(?:💉Кровь|💉 Кровь|кровь)$/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true;
if (message.user.pve.completeOFpve) {return bot(`в PVE эта команда недоступна.`)}
if (message.user.misc.startgame !== 1){
return bot(`Вам никто не бросал вызов.🔕`)
} 	
if (message.user.misc.goMagicBlood !== 1){return bot(`пока недоступно.`)}
message.user.misc.goMagicBloodTwo = 1; message.user.misc.goMagicBlood = 0;
let user = users.find(x=> x.uid === Number(message.user.biz)); 
user.misc.bloodTime = true;
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}‼[id${message.user.id}|${message.user.tag}] завладел Вами с помощью магии крови!`})
await bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑В`: `В`}ыберите, что хотите сделать:
1. Высосать 20% здоровья врага себе. (${Math.round(user.heal/100*20)}) 
2. Нанести урон в размере 20% от СВОЕГО запаса здоровья. (${Math.round(message.user.heal/100*20)})
💔Жизней у соперника: ${user.heal}`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🔺Высосать"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🔻Урон"
},
"color": "positive"
},
],
],
})
});
});
//-------------------------------------------[Высосать]-------------------------------------------------------//
cmd.hear(/^(?:🔺Высосать|🔺 Высосать|Высосать)$/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true;
if (message.user.pve.completeOFpve) {return bot(`в PVE эта команда недоступна.`)}
if (message.user.misc.startgame !== 1){
return bot(`Вам никто не бросал вызов.🔕`)
} 
if (message.user.misc.goMagicBloodTwo !== 1){return bot(`пока недоступно.`)}	
let user = users.find(x=> x.uid === Number(message.user.biz)); 
let howheal = Math.round(user.heal/100*20);
user.heal -= howheal; user.misc.bloodTime = false;
message.user.heal += howheal;
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}] высосал у вас ${howheal} здоровья.
❤Ваши жизни: ${user.heal}	
💔Жизней у соперника: ${message.user.heal}`})
message.user.misc.goMagicBloodTwo = 0;
return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑В`: `В`}ы высосали у [id${user.id}|${user.tag}] ${howheal} здоровья.
❤Ваши жизни: ${message.user.heal}	
💔Жизней у соперника: ${user.heal}`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});		
});
//-------------------------------------------[Урон]-------------------------------------------------------//
cmd.hear(/^(?:🔻Урон|🔻 Урон|Урон)$/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true;
if (message.user.pve.completeOFpve) {return bot(`в PVE эта команда недоступна.`)}
if (message.user.misc.startgame !== 1){
return bot(`Вам никто не бросал вызов.🔕`)
} 
if (message.user.misc.goMagicBloodTwo !== 1){return bot(`пока недоступно.`)}
let user = users.find(x=> x.uid === Number(message.user.biz)); 
let howdmg = Math.round(message.user.heal/100*20)
user.heal -= howdmg; user.misc.bloodTime = 0;
if (user.heal >0){
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}] с помощью магии крови нанёс Вам ${howdmg} урона.
❤Ваши жизни: ${message.user.heal}	
💔Жизней у соперника: ${user.heal}`})}
else {
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}] с помощью магии крови нанёс Вам ${howdmg} урона.
❤Ваши жизни: 0	
💔Жизней у соперника: ${message.user.heal}`})
}
if (user.heal <= 0) {
message.user.Coins += 45; message.send(`+45 коинов. Ваши коины - ${message.user.Coins}`);
user.Coins += 20; vk.api.messages.send({user_id: user.id, message: `+20 коинов. Ваши коины - ${message.user.Coins}`})
if ((message.user.Decency < 5000) && (message.user.DecencyCounter == 3)){
if (mesage.user.Decency > 5000){message.user.Decency = 5000}
message.send(`Ваша порядочность была увеличена на 750. Ваша порядочность - ${message.user.Decency == 5000 ? `😃` : message.user.Decency > 4000 ? `😉` : message.user.Decency > 3000 ? `🙁` : message.user.Decency > 2000  ? `☹` : `😡`} ${message.user.Decency}`)
message.user.Decency += 750; message.user.DecencyCounter = 0;}
if ((user.Decency < 5000) && (user.DecencyCounter == 3)){
if (user.Decency > 5000) {user.Decency = 5000}
vk.api.messages.send({ user_id: user.id, message: `Ваша порядочность была увеличена на 750. Ваша порядочность - ${message.user.Decency == 5000 ? `😃` : message.user.Decency > 4000 ? `😉` : message.user.Decency > 3000 ? `🙁` : message.user.Decency > 2000  ? `☹` : `😡`} ${user.Decency}`});
user.Decency += 750; user.DecencyCounter = 0;}
if (user.DecencyCounter < 3){user.DecencyCounter++}; if (message.user.DecencyCounter <3 ) {message.user.DecencyCounter++}	
message.user.exp += 40; user.exp += 20; let lvlUser = message.user.exp >= 100 ? 2 : message.user.exp >= 170 ? 3 : message.user.exp >= 240 ? 4 :
message.user.exp >= 310 ? 5 : message.user.exp >= 390 ? 6 : message.user.exp >= 470 ? 7 :
message.user.exp >= 530 ? 8 : message.user.exp >= 640 ? 9 : message.user.exp >= 740 ? 10 : 1;
let NewLvl = lvlUser == 1 ? message.user.level.level2-message.user.exp : lvlUser == 2 ? message.user.level.level3-message.user.exp : lvlUser == 3 ? message.user.level.level4-message.user.exp :
lvlUser == 5 ? message.user.level.level6-message.user.exp : lvlUser == 6 ? message.user.level.level7-message.user.exp : lvlUser == 8 ? message.user.level.level9-message.user.exp : 
lvlUser == 9 ? message.user.level.level10-message.user.exp : 'Максимальный уровень.';
message.send(`+40 опыта. Ваш опыт - ${message.user.exp}. Ваш уровень - ${message.user.lvl}. До нового уровня - ${NewLvl} опыта.`)
let lvlUser2 = user.exp >= 100 ? 2 : user.exp >= 170 ? 3 : user.exp >= 240 ? 4 :
user.exp >= 310 ? 5 : user.exp >= 390 ? 6 : user.exp >= 470 ? 7 :
user.exp >= 530 ? 8 : user.exp >= 640 ? 9 : user.exp >= 740 ? 10 : 1;
let NewLvl2 = lvlUser2 == 1 ? user.level.level2-user.exp : lvlUser2 == 2 ? user.level.level3-user.exp : lvlUser2 == 3 ? user.level.level4-user.exp :
lvlUser2 == 5 ? user.level.level6-user.exp : lvlUser2 == 6 ? user.level.level7-user.exp : lvlUser2 == 8 ? user.level.level9-user.exp : 
lvlUser2 == 9 ? user.level.level10-user.exp : 'Максимальный уровень.';
vk.api.messages.send({user_id: user.id, message:`+20 опыта. Ваш опыт - ${user.exp}. Ваш уровень - ${user.lvl}. До нового уровня - ${NewLvl2} опыта.`})
if ((message.user.lvl == 1) && (message.user.exp >= 100)){
message.user.lvl = 2; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 2) && (message.user.exp >=170)){
message.user.lvl = 3; message.send(``)
} if ((message.user.lvl == 3) && (message.user.exp >=240)){
message.user.lvl = 4; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 4) && (messsage.user.exp >=310)){
message.user.lvl = 5; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 5) && (message.user.exp >= 390)){
message.user.lvl = 6; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 6) && (message.user.exp >= 470)){
message.user.lvl = 7; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 7) && (message.user.exp >= 530)){
message.user.lvl = 8; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 8) && (message.user.exp >= 640)){
message.user.lvl = 9; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 9) && (message.user.exp >=740)){
message.user.lvl = 10; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((user.lvl == 1) && (user.exp >= 100)){
user.lvl = 2; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 2) && (user.exp >=170)){
user.lvl = 3; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 3) && (user.exp >=240)){
user.lvl = 4; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 4) && (user.exp >=310)){
user.lvl = 5; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 5) && (user.exp >= 390)){
user.lvl = 6; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 6) && (user.exp >= 470)){
user.lvl = 7; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 7) && (user.exp >= 530)){
user.lvl = 8; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 8) && (user.exp >= 640)){
user.lvl = 9; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 9) && (user.exp >=740)){
user.lvl = 10; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} 
await bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑В`: `В`}ы Нанесли [id${user.id}|${user.tag}] ${howdmg} урона.
❤Ваши жизни: ${message.user.heal}	
💔Жизней у соперника: 0`);
message.user.balance += 1;
message.user.gold = 0; user.gold = 0;
message.user.heal = 4500; user.heal = 4500; 
message.user.misc.areoReturn = 0; user.misc.areoReturn = 0;
message.user.areoReturn = 0; user.areoReturn = 0;
message.user.biz = 0; user.biz = 0;
user.misc.kastet = 0; message.user.misc.kastet = 0; 
user.misc.mech = 0; message.user.misc.mech = 0;
user.misc.sablya = 0; message.user.misc.sablya = 0;
message.user.misc.vizov = 0; user.misc.vizov = 0; 
message.user.xod = 0; user.xod = 0;
message.user.misc.startgame = 0; user.misc.startgame = 0;
message.user.misc.ready = 0; user.misc.ready = 0;
message.user.misc.whereiscrit = 0; user.misc.whereiscrit = 0;
message.user.misc.nasmeshkaLOCK = 0; user.misc.nasmeshkaLOCK = 0;
message.user.misc.weapon = 'Кулак'; user.misc.weapon = 'Кулак';
message.user.misc.yvedomFORshop = 0; user.misc.yvedomFORshop = 0;
message.user.misc.magicTime = 0; user.misc.magicTime = 0;
message.user.misc.magicBlood = 0; user.misc.magicBlood = 0;
message.user.misc.shield = 0; user.misc.shield = 0;
message.user.misc.goMagicBlood = 0; user.misc.goMagicBlood = 0;
message.user.misc.goMagicTime = 0; user.misc.goMagicTime = 0;
message.user.xodLOCK = 0; user.xodLOCK = 0;
message.user.misc.meta = 0; user.misc.meta = 0;
message.user.misc.vamp = 0; user.misc.vamp = 0;
message.user.misc.areo = 0; user.misc.areo = 0;
message.user.misc.nima = 0; user.misc.nima = 0;
message.user.misc.block = 0; user.misc.block = 0;
message.user.misc.metaRest = 0; user.misc.metaRest = 0;
message.user.misc.metaUse = 0; user.misc.metaUse = 0;
message.user.misc.nimaUse = 0; user.misc.nimaUse = 0;
message.user.misc.nimaRest = 0; user.misc.nimaRest = 0;
message.user.misc.nimaSCREAM = 0; user.misc.nimaSCREAM = 0;
message.user.misc.blockUse = 0; user.misc.blockUse = 0;
message.user.misc.areoReady = 0; user.misc.areoReady = 0;
message.user.misc.createAreo = 0; user.misc.createAreo = 0;
message.user.misc.areoAttackReadyForShield = 0; user.misc.areoAttackReadyForShield = 0;
message.user.misc.areoShield = 0; user.misc.areoShield = 0;
message.user.misc.ability = 0; user.misc.ability = 0;
message.user.misc.nasmeshkaNotice = false; user.misc.nasmeshkaNotice = false;
message.user.misc.Dark = 0; user.misc.Dark = 0;
message.user.misc.nimaSCREAMrest = 0; user.misc.nimaSCREAMrest = 0;
message.user.misc.DarkRest = 0; user.misc.DarkRest = 0;
message.user.misc.nimaHaunt = 0; user.misc.nimaHaunt = 0;
message.user.misc.nimaHauntRest = 0; user.misc.nimaHauntRest = 0;
message.user.misc.areoRest = 0; user.misc.areoRest = 0;
message.user.misc.nimaUseHaunt = 0; user.misc.nimaUseHaunt = 0;
message.user.misc.nimaOneTime = 1; user.misc.nimaOneTime = 1;
message.user.misc.areoOneTime = 1; user.misc.areoOneTime = 1;
message.user.misc.areoOneTime2 = 1; user.misc.areoOneTime2 = 1;
message.user.misc.Dark2 = 0; user.misc.Dark2 = 0;
message.user.misc.bloodTime = 0; user.misc.BloodTime = 0;
message.user.misc.nimaCanBeUsed = 0; user.misc.nimaCanBeUsed = 0;
message.user.misc.areoXod = 0; user.misc.areoReturn = 0;
message.user.misc.areoReturn = 0; user.misc.AreoXod = 0;
message.user.misc.goMagicTimeTwo = 0; user.misc.goMagicTimeTwo = 0;
message.user.misc.goMagicBlood = 0; user.misc.goMagicBlood = 0;
message.user.misc.goMagicBloodTwo = 0; user.misc.goMagicBloodTwo = 0;
const chestrandom = utils.random(1, 100);
if (chestrandom <= 20){
message.user.misc.chest++;
vk.api.messages.send({ user_id: message.user.id, message: `[id${message.user.id}|${message.user.tag}], Вам выпал сундук. 🧳 Для того, чтобы открыть его, - [Открыть Сундук].`});
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Игроку [id${message.ser.id}|${message.user.tag}] вместе с победой выпал сундук.🧳`})
}		        
vk.api.messages.send({user_id: user.id, message: `${`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Победил [id${message.user.id}|${message.user.tag}]!🎉💥💥 И это ${message.user.balance} победа игрока! Посмотреть топ по победам - "Топ".`}`,
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${user.misc.chest >= 1 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})

return message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вы победили!🎉💥💥 И это Ваша ${message.user.balance} победа! Посмотреть топ по победам - "Топ".`,{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
}

message.user.misc.goMagicBloodTwo = 0;
return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑В`: `В`}ы Нанесли [id${user.id}|${user.tag}] ${howdmg} урона.
❤Ваши жизни: ${message.user.heal}	
💔Жизней у соперника: ${user.heal}`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});		
});










// МАГИЯ ВРЕМЕНИ-----------------------------------------------------------------------------------------------------------------------

//-------------------------------------------[Время]-------------------------------------------------------//
cmd.hear(/^(?:⏳Время|⏳ Время|время)$/i, async (message, bot) => {message.user.LeaveBan = true; message.user.SearchBan = true; if (message.user.pve.completeOFpve) {return bot(`в PVE эта команда недоступна.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if (message.user.misc.startgame !== 1){
return bot(`Вам никто не бросал вызов.🔕`)
} 
if (message.user.misc.goMagicTime !== 1){return bot(`пока недоступно.`)}
message.user.backto = 1; let user = users.find(x=> x.uid === Number(message.user.biz)); 
user.xodLOCK = 1;
message.user.misc.goMagicTime = 0;
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}${`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}] остановил время!`}`, 
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": []

})
})
message.user.misc.goMagicTimeTwo = 1;
let whattime = utils.random(1, 100)
if ((whattime <=100) && (whattime >30)){
return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑В`: `В`}ы остановили время. Вы можете связать врага.`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⛓Связать"
},
"color": "positive"
},
],
],

})
});
} else if ((whattime <= 30) && (whattime >15)){
return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑В`: `В`}ы остановили время. Вы можете сломать оружие врагу.`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✖Сломать"
},
"color": "positive"
},
],
],

})
});
} else if (whattime <= 15){
return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑В`: `В`}ы остановили время. Вы можете украсть 50% золота врага.`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "◻Своровать"
},
"color": "positive"
},
],
],

})
});
}
});

//-------------------------------------------[Свзять]-------------------------------------------------------//
cmd.hear(/^(?:⛓Связать|⛓ Связать|связать)$/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true;
if (message.user.pve.completeOFpve) {return bot(`в PVE эта команда недоступна.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if (message.user.misc.goMagicTimeTwo !== 1){return bot(`пока недоступно.`)}
if (message.user.misc.startgame !== 1){
return bot(`Вам никто не бросал вызов.🔕`)
} 
let user = users.find(x=> x.uid === Number(message.user.biz));
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}] ⛓связал Вас!`})
message.user.misc.goDamageMagicTime = 3;
message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${user.id}|${user.tag}] был(а) связан(а)`)
return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑И`: `И`}спользуйте команду 🤜🏻Атаковать`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Атаковать" 
},
"color": "positive"
}
],
],

})
})
});
//-------------------------------------------[Атаковать]-------------------------------------------------------//
cmd.hear(/^(?:🤜🏻Атаковать|🤜🏻 Атаковать|атаковать)$/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true;
if (message.user.pve.completeOFpve) {return bot(`в PVE эта команда недоступна.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if (message.user.misc.goMagicTimeTwo !== 1){return bot(`пока недоступно.`)}
if (message.user.misc.startgame !== 1){
return bot(`Вам никто не бросал вызов.🔕`)
} 
let user = users.find(x=> x.uid === Number(message.user.biz));
let dMg = utils.random(50, 150);
user.heal -= dMg;
if (user.heal <= 0) {
message.user.Coins += 45; message.send(`+45 коинов. Ваши коины - ${message.user.Coins}`);
user.Coins += 20; vk.api.messages.send({user_id: user.id, message: `+20 коинов. Ваши коины - ${message.user.Coins}`})
if ((message.user.Decency < 5000) && (message.user.DecencyCounter == 3)){
if (mesage.user.Decency > 5000){message.user.Decency = 5000}
message.send(`Ваша порядочность была увеличена на 750. Ваша порядочность - ${message.user.Decency == 5000 ? `😃` : message.user.Decency > 4000 ? `😉` : message.user.Decency > 3000 ? `🙁` : message.user.Decency > 2000  ? `☹` : `😡`} ${message.user.Decency}`)
message.user.Decency += 750; message.user.DecencyCounter = 0;}
if ((user.Decency < 5000) && (user.DecencyCounter == 3)){
if (user.Decency > 5000) {user.Decency = 5000}
vk.api.messages.send({ user_id: user.id, message: `Ваша порядочность была увеличена на 750. Ваша порядочность - ${message.user.Decency == 5000 ? `😃` : message.user.Decency > 4000 ? `😉` : message.user.Decency > 3000 ? `🙁` : message.user.Decency > 2000  ? `☹` : `😡`} ${user.Decency}`});
user.Decency += 750; user.DecencyCounter = 0;}
if (user.DecencyCounter < 3){user.DecencyCounter++}; if (message.user.DecencyCounter <3 ) {message.user.DecencyCounter++}	
message.user.exp += 40; user.exp += 20; let lvlUser = message.user.exp >= 100 ? 2 : message.user.exp >= 170 ? 3 : message.user.exp >= 240 ? 4 :
message.user.exp >= 310 ? 5 : message.user.exp >= 390 ? 6 : message.user.exp >= 470 ? 7 :
message.user.exp >= 530 ? 8 : message.user.exp >= 640 ? 9 : message.user.exp >= 740 ? 10 : 1;
let NewLvl = lvlUser == 1 ? message.user.level.level2-message.user.exp : lvlUser == 2 ? message.user.level.level3-message.user.exp : lvlUser == 3 ? message.user.level.level4-message.user.exp :
lvlUser == 5 ? message.user.level.level6-message.user.exp : lvlUser == 6 ? message.user.level.level7-message.user.exp : lvlUser == 8 ? message.user.level.level9-message.user.exp : 
lvlUser == 9 ? message.user.level.level10-message.user.exp : 'Максимальный уровень.';
message.send(`+40 опыта. Ваш опыт - ${message.user.exp}. Ваш уровень - ${message.user.lvl}. До нового уровня - ${NewLvl} опыта.`)
let lvlUser2 = user.exp >= 100 ? 2 : user.exp >= 170 ? 3 : user.exp >= 240 ? 4 :
user.exp >= 310 ? 5 : user.exp >= 390 ? 6 : user.exp >= 470 ? 7 :
user.exp >= 530 ? 8 : user.exp >= 640 ? 9 : user.exp >= 740 ? 10 : 1;
let NewLvl2 = lvlUser2 == 1 ? user.level.level2-user.exp : lvlUser2 == 2 ? user.level.level3-user.exp : lvlUser2 == 3 ? user.level.level4-user.exp :
lvlUser2 == 5 ? user.level.level6-user.exp : lvlUser2 == 6 ? user.level.level7-user.exp : lvlUser2 == 8 ? user.level.level9-user.exp : 
lvlUser2 == 9 ? user.level.level10-user.exp : 'Максимальный уровень.';
vk.api.messages.send({user_id: user.id, message:`+20 опыта. Ваш опыт - ${user.exp}. Ваш уровень - ${user.lvl}. До нового уровня - ${NewLvl2} опыта.`})
if ((message.user.lvl == 1) && (message.user.exp >= 100)){
message.user.lvl = 2; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 2) && (message.user.exp >=170)){
message.user.lvl = 3; message.send(``)
} if ((message.user.lvl == 3) && (message.user.exp >=240)){
message.user.lvl = 4; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 4) && (messsage.user.exp >=310)){
message.user.lvl = 5; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 5) && (message.user.exp >= 390)){
message.user.lvl = 6; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 6) && (message.user.exp >= 470)){
message.user.lvl = 7; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 7) && (message.user.exp >= 530)){
message.user.lvl = 8; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 8) && (message.user.exp >= 640)){
message.user.lvl = 9; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 9) && (message.user.exp >=740)){
message.user.lvl = 10; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((user.lvl == 1) && (user.exp >= 100)){
user.lvl = 2; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 2) && (user.exp >=170)){
user.lvl = 3; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 3) && (user.exp >=240)){
user.lvl = 4; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 4) && (user.exp >=310)){
user.lvl = 5; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 5) && (user.exp >= 390)){
user.lvl = 6; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 6) && (user.exp >= 470)){
user.lvl = 7; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 7) && (user.exp >= 530)){
user.lvl = 8; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 8) && (user.exp >= 640)){
user.lvl = 9; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 9) && (user.exp >=740)){
user.lvl = 10; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} 
message.user.balance += 1;
message.user.gold = 0; user.gold = 0;
message.user.heal = 4500; user.heal = 4500; 
message.user.misc.areoReturn = 0; user.misc.areoReturn = 0;
message.user.areoReturn = 0; user.areoReturn = 0;
message.user.biz = 0; user.biz = 0;
user.misc.kastet = 0; message.user.misc.kastet = 0; 
user.misc.mech = 0; message.user.misc.mech = 0;
user.misc.sablya = 0; message.user.misc.sablya = 0;
message.user.misc.vizov = 0; user.misc.vizov = 0; 
message.user.xod = 0; user.xod = 0;
message.user.misc.startgame = 0; user.misc.startgame = 0;
message.user.misc.ready = 0; user.misc.ready = 0;
message.user.misc.whereiscrit = 0; user.misc.whereiscrit = 0;
message.user.misc.nasmeshkaLOCK = 0; user.misc.nasmeshkaLOCK = 0;
message.user.misc.weapon = 'Кулак'; user.misc.weapon = 'Кулак';
message.user.misc.yvedomFORshop = 0; user.misc.yvedomFORshop = 0;
message.user.misc.magicTime = 0; user.misc.magicTime = 0;
message.user.misc.magicBlood = 0; user.misc.magicBlood = 0;
message.user.misc.shield = 0; user.misc.shield = 0;
message.user.misc.goMagicBlood = 0; user.misc.goMagicBlood = 0;
message.user.misc.goMagicTime = 0; user.misc.goMagicTime = 0;
message.user.xodLOCK = 0; user.xodLOCK = 0;
message.user.misc.meta = 0; user.misc.meta = 0;
message.user.misc.vamp = 0; user.misc.vamp = 0;
message.user.misc.areo = 0; user.misc.areo = 0;
message.user.misc.nima = 0; user.misc.nima = 0;
message.user.misc.block = 0; user.misc.block = 0;
message.user.misc.metaRest = 0; user.misc.metaRest = 0;
message.user.misc.metaUse = 0; user.misc.metaUse = 0;
message.user.misc.nimaUse = 0; user.misc.nimaUse = 0;
message.user.misc.nimaRest = 0; user.misc.nimaRest = 0;
message.user.misc.nimaSCREAM = 0; user.misc.nimaSCREAM = 0;
message.user.misc.blockUse = 0; user.misc.blockUse = 0;
message.user.misc.areoReady = 0; user.misc.areoReady = 0;
message.user.misc.createAreo = 0; user.misc.createAreo = 0;
message.user.misc.areoAttackReadyForShield = 0; user.misc.areoAttackReadyForShield = 0;
message.user.misc.areoShield = 0; user.misc.areoShield = 0;
message.user.misc.ability = 0; user.misc.ability = 0;
message.user.misc.nasmeshkaNotice = false; user.misc.nasmeshkaNotice = false;
message.user.misc.Dark = 0; user.misc.Dark = 0;
message.user.misc.nimaSCREAMrest = 0; user.misc.nimaSCREAMrest = 0;
message.user.misc.DarkRest = 0; user.misc.DarkRest = 0;
message.user.misc.nimaHaunt = 0; user.misc.nimaHaunt = 0;
message.user.misc.nimaHauntRest = 0; user.misc.nimaHauntRest = 0;
message.user.misc.areoRest = 0; user.misc.areoRest = 0;
message.user.misc.nimaUseHaunt = 0; user.misc.nimaUseHaunt = 0;
message.user.misc.nimaOneTime = 1; user.misc.nimaOneTime = 1;
message.user.misc.areoOneTime = 1; user.misc.areoOneTime = 1;
message.user.misc.areoOneTime2 = 1; user.misc.areoOneTime2 = 1;
message.user.misc.Dark2 = 0; user.misc.Dark2 = 0;
message.user.misc.bloodTime = 0; user.misc.BloodTime = 0;
message.user.misc.nimaCanBeUsed = 0; user.misc.nimaCanBeUsed = 0;
message.user.misc.areoXod = 0; user.misc.areoReturn = 0;
message.user.misc.areoReturn = 0; user.misc.AreoXod = 0;
message.user.misc.goMagicTimeTwo = 0; user.misc.goMagicTimeTwo = 0;
message.user.misc.goMagicBlood = 0; user.misc.goMagicBlood = 0;
message.user.misc.goMagicBloodTwo = 0; user.misc.goMagicBloodTwo = 0;
const chestrandom = utils.random(1, 100);
if (chestrandom <= 20){
message.user.misc.chest++;
vk.api.messages.send({ user_id: message.user.id, message: `[id${message.user.id}|${message.user.tag}], Вам выпал сундук. 🧳 Для того, чтобы открыть его, - [Открыть Сундук].`});
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Игроку [id${message.ser.id}|${message.user.tag}] вместе с победой выпал сундук.🧳`})
}

vk.api.messages.send({user_id: user.id, message: `${`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Победил [id${message.user.id}|${message.user.tag}]!🎉💥💥 И это ${message.user.balance} победа игрока! Посмотреть топ по победам - "Топ".`}`,
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${user.misc.chest >= 1 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})

return message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑В`: `В`}ы победили!🎉💥💥 И это Ваша ${message.user.balance} победа! Посмотреть топ по победам - "Топ".`,{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})


}
message.user.misc.goDamageMagicTime--; 
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}] нанёс Вам ${dMg} урона!
❤Ваши жизни: ${user.heal}`})
await bot(`Вы нанесли ${dMg} урона игроку [id${user.id}|${user.tag}].
Возможности атаковать - ${message.user.misc.goDamageMagicTime}
💔Жизней у соперника: ${user.heal}`);

if (message.user.misc.goDamageMagicTime == 0){
user.xodLOCK = 0;
vk.api.messages.send({ user_id: user.id, message: `${((user.misc.Dark == 1) || (user.misc.Dark2 == 1))? `🌑`: ``}${`${((user.misc.Dark == 1) || (user.misc.Dark2 == 1))? `🌑`: ``}Время снова возобновилось!`}`,
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((user.misc.magicTime == 0) && (user.misc.magicBlood == 0)) ? "🔮Магия" : user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((user.gold >= 155) && (user.misc.magicTime == 0) && (user.misc.magicBlood == 0)) ? 'primary' : ( ((user.misc.magicBlood == 1) || (user.misc.magicTime == 1)) && ((user.misc.goMagicTime == 1) || (user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((user.misc.meta == 0) && (user.gold>= 60)) ? 'primary' : ((user.misc.vamp == 0) && (user.gold >= 90)) ? 'primary' : ((user.misc.areo == 0) && (user.gold >=125)) ? 'primary' : ((user.misc.nima == 0) && (user.gold >=160)) ? 'primary' : ((user.misc.block == 0) && (user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((user.misc.meta == 1) && (user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((user.misc.areo == 1) && (user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((user.misc.nima == 1) && (user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});	
return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑В`: `В`}ремя снова возобновилось!`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});			
}

});
//-------------------------------------------[Сломать]-------------------------------------------------------//
cmd.hear(/^(?:✖Сломать|✖ Сломать|сломать)$/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true;
if (message.user.pve.completeOFpve) {return bot(`в PVE эта команда недоступна.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if (message.user.misc.goMagicTimeTwo !== 1){return bot(`пока недоступно.`)}
if (message.user.misc.startgame !== 1){
return bot(`Вам никто не бросал вызов.🔕`)
} 
let user = users.find(x=> x.uid === Number(message.user.biz));
let whatisweapon = user.misc.weapon; let damaG = `✖сломал Ваше оружие - ` + user.misc.weapon; user.misc.weapon = 'Кулак👊';
if (damaG == `✖сломал Ваше оружие - Кулак👊`){damag = 'Попытался сломать Ваше оружие, но не вышло, так как у вас Кулак👊'}
if (whatisweapon == 'Кулак👊'){whatisweapon = 'Ничего, так как у врага Кулак👊'}
if (user.misc.kastet == 1) {user.misc.kastet = 0}
if (user.misc.kastet == 2){user.misc.kastet = 0}
if (user.misc.kastet == 3){user.misc.kastet = 0}
if (user.misc.mech == 1){user.misc.mech = 0}
if (user.misc.mech == 2) {user.misc.mech = 0}
if (user.misc.mech == 3) {user.misc.mech = 0}
if (user.misc.sablya == 1) {user.misc.sablya = 0}
if (user.misc.sablya == 2) {user.misc.sablya = 0}
if (user.misc.sablya == 3) {user.misc.sablya = 0}
user.xodLOCK = 0;
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}${`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}] ${damaG}! Ваше оружие - ${user.misc.weapon}. Время снова возобновилось!`}`,
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});		

return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑В`: `В`}ы сломали у [id${user.id}|${user.tag}] ${whatisweapon}.`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});	

});
//-------------------------------------------[Своровать]-------------------------------------------------------//
cmd.hear(/^(?:◻Своровать|◻ Своровать|Своровать)$/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true;
if (message.user.pve.completeOFpve) {return bot(`в PVE эта команда недоступна.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if (message.user.misc.goMagicTimeTwo !== 1){return bot(`пока недоступно.`)}
if (message.user.misc.startgame !== 1){
return bot(`Вам никто не бросал вызов.🔕`)
} 
let user = users.find(x=> x.uid === Number(message.user.biz));
let howgold = Math.round(user.gold/2); message.user.gold += howgold;
user.gold -= howgold; user.xodLOCK = 0;
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}${`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}] ◻Своровал у Вас ${howgold} золота. Ваше золото - ${user.gold}. Время снова возобновилось!`}`,
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((user.misc.magicTime == 0) && (user.misc.magicBlood == 0)) ? "🔮Магия" : user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((user.gold >= 140) && (user.misc.magicTime == 0) && (user.misc.magicBlood == 0)) ? 'primary' : ((user.misc.magicBlood == 1) || (user.misc.magicTime == 1) && ((user.misc.goMagicTime == 1) || (user.misc.goMagicBlood == 1))) ? 'primary' : 'secondary' }`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});		
return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑В`: `В`}ы украли у [id${user.id}|${user.tag}] ${howgold} золота. Ваше золото - ${message.user.gold}`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});	
});
// МАГИЯ ВРЕМЕНИ-----------------------------------------------------------------------------------------------------------------------








// Способности-----------------------------------------------------------------------------------------------------------------------
//-------------------------------------------[Метаморф]-------------------------------------------------------//
cmd.hear(/^(?:🦍Метаморф|🦍 Метаморф|Метаморф)$/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true;
if (message.user.misc.bloodTime == true){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вашей кровью завладели, недоступно.`)}
if (message.user.xodLOCK == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}время остановлено.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if ((message.user.xod !== 1)&&(message.user.biz !== 0)){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}], ждите своего хода.`)}
if (message.user.pve.completeOFpve) {return bot(`в PVE эта команда недоступна.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if (message.user.misc.meta !== 1){return bot(`Вы не владеете такой способностью.`)}
if (message.user.misc.startgame !== 1){
return bot(`Вам никто не бросал вызов.🔕`)
} if (message.user.misc.metaUse !== 1) return bot(`пока недоступно.`);
let user = users.find(x=> x.uid === Number(message.user.biz));
var whatwewillbedoing = true;
let dmgpouser = utils.random(20,50);
user.heal -= dmgpouser;
message.user.misc.ability = 'meta';
if (user.misc.areoShield == 1){
let chanse = utils.random(1,100)
vk.api.messages.send({ user_id: user.id, message: `${`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}] попытался Вас атаковать с помощью 🦍метаморфизма, но у него ничего не вышло: Выш щит заблокировал его атаку. Щит был сбит.`}`,
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((user.misc.magicTime == 0) && (user.misc.magicBlood == 0)) ? "🔮Магия" : user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((user.gold >= 140) && (user.misc.magicTime == 0) && (user.misc.magicBlood == 0)) ? 'primary' : ( ((user.misc.magicBlood == 1) || (user.misc.magicTime == 1)) && ((user.misc.goMagicTime == 1) || (user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((user.misc.meta == 0) && (user.gold>= 60)) ? 'primary' : ((user.misc.vamp == 0) && (user.gold >= 90)) ? 'primary' : ((user.misc.areo == 0) && (user.gold >=110)) ? 'primary' : ((user.misc.nima == 0) && (user.gold >=140)) ? 'primary' : ((user.misc.block == 0) && (user.gold >= 180)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((user.misc.meta == 1) && (user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((user.misc.areo == 1) && (user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((user.misc.nima == 1) && (user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});			
user.misc.areoRest = 0; user.misc.areoShield = 0; user.misc.areoAttackReadyForShield = 0;
user.misc.AreoChanse = 0; user.misc.areoOneTime = 1; user.misc.areoOneTime2 = 1; 
user.misc.createAreo = 0;
return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑у`: `у`} игрока [id${user.id}|${user.tag}] есть готовая способность 🌀Ареометизм, и он(а) заготовила щит. Вы нанесли 0 урона. Щит был сбит.`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});	
} if (user.misc.block == 1){
let dmgpouser = utils.random(20,50);
let dmgpouser2 = Math.round(dmgpouser/2);
user.heal -= dmgpouser2;
message.user.misc.ability = 'meta';
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Метаморф [id${message.user.id}|${message.user.tag}] смог нанести Вам ${Math.round(dmgpouser2*2)} урона. Вы 📛заблокировали ${dmgpouser2} урона.
❤Ваши жизни: ${user.heal}
💔Жизней у соперника: ${message.user.heal}	`});
message.user.misc.metaUse = 0;
return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑В`: `В`}ы нанесли [id${user.id}|${user.tag}] ${Math.round(dmgpouser2*2)} урона. [id${user.id}|${user.tag}] 📛заблокировал(а) ${dmgpouser2} урона.
❤Ваши жизни: ${message.user.heal}
💔Жизней у соперника: ${user.heal}`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});		
}
user.heal -= dmgpouser;
message.user.misc.ability = 'meta';
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Метаморф [id${message.user.id}|${message.user.tag}] нанёс Вам ${dmgpouser} урона. 
❤Ваши жизни: ${user.heal}
💔Жизней у соперника: ${message.user.heal}	`});
message.user.misc.metaUse = 0;
return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑В`: `В`}ы нанесли [id${user.id}|${user.tag}] ${dmgpouser} урона.
❤Ваши жизни: ${message.user.heal}
💔Жизней у соперника: ${user.heal}`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});		








});



//арео


//-------------------------------------------[Защитное поле]-------------------------------------------------------//
cmd.hear(/^(?:🌀Защитное|🌀 Защитное|Защитное|🌀Атаковать|🌀 Атаковать|Атаковать)\s(поле|полем)?$/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true;
if (message.user.misc.bloodTime == true){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вашей кровью завладели, недоступно.`)}
if (message.user.xodLOCK == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}время остановлено.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if ((message.user.xod !== 1)&&(message.user.biz !== 0)){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}], ждите своего хода.`)}
if (message.user.pve.completeOFpve) {return bot(`в PVE эта команда недоступна.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if (message.user.misc.areo !== 1){return bot(`Вы не владеете такой способностью.`)}
if (message.user.misc.startgame !== 1){
return bot(`Вам никто не бросал вызов.🔕`)
} if (message.user.misc.createAreo !== 1){return bot(`пока недоступно.`)} 
if ((message.user.misc.createAreo == 1) && (message.user.misc.areoShield !== 1)){
let user = users.find(x=> x.uid === Number(message.user.biz));
message.user.misc.createAreo = 0; message.user.misc.areoShield = 1;
message.user.misc.areoRest = 0;
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}] создал 🌀защитное поле. При следующей возможности создания он сможет Вас атаковать. Вам нужно его сбить способностью 🦍метаморф.`})
message.user.misc.areoAttackReadyForShield = 1; message.user.misc.ability = 'areo';
return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑В`: `В`}ы создали 🌀защитное поле. Если Вам его не собьют другой способностью, то Вы сможете атаковать при следующей возможности создания поля.`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});
}  
if ((message.user.misc.areoAttackReadyForShield == 1) && (message.user.misc.areoShield == 1)){
let user = users.find(x => x.uid === Number(message.user.biz))
if (user.misc.block == 1){
let chanse = utils.random(1,100);
if (chanse<=50){ 
message.user.misc.areoRest = 0; message.user.misc.areoShield = 0; message.user.misc.areoAttackReadyForShield = 0;
message.user.misc.AreoChanse = 0; message.user.misc.areoOneTime = 1; message.user.misc.areoOneTime2 = 1; 
message.user.misc.createAreo = 0;
vk.api.messages.send({user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вы 📛заблокировали способность 🌀Ареометизм игроку [id${message.user.id}|${message.user.tag}]`})
return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}у [id${user.id}|${user.tag}] есть способность 📛блокировки и он(а) не позволил(а) Вам атаковать.`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});	
}
}








let dmgAreo = utils.random(40,100);
user.heal -= dmgAreo; 
message.user.misc.areoRest = 0; message.user.misc.areoShield = 0; message.user.misc.areoAttackReadyForShield = 0;
message.user.misc.AreoChanse = 0; message.user.misc.areoOneTime = 1; message.user.misc.areoOneTime2 = 1; 
message.user.misc.createAreo = 0;
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑🌀`: `🌀`}[id${message.user.id}|${message.user.tag}] атаковал(а) Вас защитным полем и нанес(ла) Вам ${dmgAreo} урона.
❤Ваши жизни: ${user.heal}
💔Жизней у соперника: ${message.user.heal}	`});	
user.misc.ability = 'areo'; user.misc.createAreo = 0;
user.misc.areoOneTime = 1; user.misc.areoOneTime2 = 1;
return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑В`: `В`}аш щит спал. Игроку [id${user.id}|${user.tag}] Вы нанесли ${dmgAreo} урона.
❤Ваши жизни: ${message.user.heal}
💔Жизней у соперника: ${user.heal}`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});
}
});

//-------------------------------------------[Превращение4]-------------------------------------------------------//
cmd.hear(/^(?:🐶Превращение|🐶 Превращение|Превращение)\s(в)\s(оборотня)?$/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true;
if (message.user.misc.bloodTime == true){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вашей кровью завладели, недоступно.`)}
if (message.user.xodLOCK == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}время остановлено.`)}
if (message.user.misc.nimaHaunt == 1){return bot(`невозможно охотиться или вводить врага в страх, пока на Вас объявлена охота.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if ((message.user.xod !== 1)&&(message.user.biz !== 0)){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}], ждите своего хода.`)}
if (message.user.pve.completeOFpve) {return bot(`в PVE эта команда недоступна.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if (message.user.misc.nima !== 1){return bot(`Вы не владеете такой способностью.`)}
if (message.user.misc.startgame !== 1){
return bot(`Вам никто не бросал вызов.🔕`)
} if (message.user.misc.nimaUse !== 1) return bot(`пока недоступно.`);
let user = users.find(x=> x.uid === Number(message.user.biz));
message.user.misc.nimaCanBeUsed = 1;
return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑В`: `В`}ыберите, что хотите сделать с противником:
1. 🕳Вы сводите его(ее) своего противника с ума (5 ходов), из-за того, что [id${user.id}|${user.tag}] находится в страхе и не сможет ничего делать, лишь атаковать Вас, с шансом в 25% можно нанести 80 урона.
2. 🌑Полнолуние: погружение во тьму. 👣Охота (доступно при полнолунии): 3 хода, за которые с врага будет капать от 10 до 40 здоровья в течение трёх ходов. (Теряется здоровье), а по окончании снимается вся накапанная за три хода сумма здоровья умноженная на два.
${user.misc.block == 1 ? `Помните, у [id${user.id}|${user.tag}] есть блокировка, он(а) может заблокировать любую из способностей с шансом в 25%.`: ``}`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"inline": true,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🕳Свести с ума"
},
"color": "negative"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🌑Полнолуние"
},
"color": "negative"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👣Охота"
},
"color": "negative"
},
]
],

})
}); 
}); 
//-------------------------------------------[Свести с ума]-------------------------------------------------------//
cmd.hear(/^(?:🕳Свести)\s(с)\s(ума)$/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true;
if (message.user.misc.bloodTime == true){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вашей кровью завладели, недоступно.`)}
if (message.user.xodLOCK == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}время остановлено.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if ((message.user.xod !== 1)&&(message.user.biz !== 0)){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}], ждите своего хода.`)}
if (message.user.pve.completeOFpve) {return bot(`в PVE эта команда недоступна.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if (message.user.misc.nima !== 1){return bot(`Вы не владеете такой способностью.`)}
if (message.user.misc.startgame !== 1){
return bot(`Вам никто не бросал вызов.🔕`)}
if (message.user.misc.nimaCanBeUsed !== 1){return bot(`пока недоступно.`)}	
let user = users.find(x=> x.uid === Number(message.user.biz));
let blockornot = utils.random(1,100);
if ((blockornot <=25) && (user.misc.block == 1)){
message.user.misc.nimaUse = 0; message.user.misc.nimaCanBeUsed = 0;
message.user.misc.nimaOneTime = 1;  message.user.misc.nimaRest = 0;
vk.api.messages.send({user_id: user.id, message: `Вы заблокировали способность игрока [id${message.user.id}|${message.user.tag}]. Он хотел 🕳свести Вас с ума.`})
return bot(`Способность была заблокирована игроком [id${user.id}|${user.tag}]`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});
}
message.user.misc.ability = `nima`;
user.misc.nimaSCREAM = 1; user.misc.nimaSCREAMrest = 5; message.user.misc.nimaUse = 0;
message.user.misc.nimaCanBeUsed = 0;
vk.api.messages.send({user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}] - 🐶Анималист. Он свёл Вас с ума и держит в страхе в течение 5 ходов, Вам ничего недоступно, кроме ударов.`});
return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вы свели с ума [id${user.id}|${user.tag}]. Он(а) не сможет ничего использовать кроме удара на протяжении 5 ударов.`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});
}); 
//-------------------------------------------[Полнолуние]-------------------------------------------------------//
cmd.hear(/^(?:🌑Полнолуние)$/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true;
if (message.user.misc.bloodTime == true){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вашей кровью завладели, недоступно.`)}
if (message.user.xodLOCK == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}время остановлено.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if ((message.user.xod !== 1)&&(message.user.biz !== 0)){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}], ждите своего хода.`)}
if (message.user.pve.completeOFpve) {return bot(`в PVE эта команда недоступна.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if (message.user.misc.nima !== 1){return bot(`Вы не владеете такой способностью.`)}
if (message.user.misc.startgame !== 1){
return bot(`Вам никто не бросал вызов.🔕`)}
if (message.user.misc.nimaCanBeUsed !== 1){return bot(`пока недоступно.`)}	
let user = users.find(x => x.uid === Number(message.user.biz));
let blockornot = utils.random(1,100);
if ((blockornot <=25) && (user.misc.block == 1)){
message.user.misc.nimaUse = 0; message.user.misc.nimaCanBeUsed = 0;
message.user.misc.nimaOneTime = 1; message.user.misc.nimaRest = 0; 
vk.api.messages.send({user_id: user.id, message: `Вы заблокировали способность игрока [id${message.user.id}|${message.user.tag}]. Он хотел открыть на Вас 👣охоту.`})
return bot(`Способность была заблокирована игроком [id${user.id}|${user.tag}]`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});
}
message.user.misc.Dark2 = 1; user.misc.Dark = 1; user.misc.DarkRest = 3;
message.user.misc.ability = 'nima'; message.user.misc.nimaUse = 0;
message.user.misc.nimaCanBeUsed = 0;  message.user.misc.nimaUseHaunt = 1;
vk.api.messages.send({user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}] призвал полнолуние.`})
return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вы сменили время суток на полнолуние. Вам доступна охота.`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"inline": true,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👣Охота"
},
"color": "negative"
},
]
],

})
}); 
}); 
//-------------------------------------------[Охота]-------------------------------------------------------//
cmd.hear(/^(?:👣Охота)$/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true;
if (message.user.misc.nimaUseHaunt !== 1){return bot(`Невозможно без полнолуния.`)}
let user = users.find(x => x.uid === Number(message.user.biz));
user.misc.nimaHaunt = 1; user.misc.nimaHauntRest = 3;
vk.api.messages.send({user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}] объявил на Вас охоту. Теперь с каждым ударом, в течение 3 шагов, с Вас будет капать кровь в размере 10-40 хп. После трёх шагов Вас будет нанесен урон в размере потерянная кровь*2.`})
return bot(`Охота успешна объявлена.`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});
}); 






//-------------------------------------------[Блокировка]-------------------------------------------------------//
cmd.hear(/^(?:🔒Блокировка:|🔒 Блокировка:|блокировка:)\s(лишить)\s(способности)?$/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true;
if (message.user.misc.bloodTime == true){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вашей кровью завладели, недоступно.`)}
if (message.user.xodLOCK == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}время остановлено.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if ((message.user.xod !== 1)&&(message.user.biz !== 0)){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}], ждите своего хода.`)}
if (message.user.pve.completeOFpve) {return bot(`в PVE эта команда недоступна.`)}
if (message.user.misc.block !== 1){return bot(`Вы не владеете такой способностью.`)}
if (message.user.misc.startgame !== 1){
return bot(`Вам никто не бросал вызов.🔕`)
} if (message.user.misc.blockUse !== 1){return bot(`пока недоступно.`)}
let user = users.find(x=> x.uid === Number(message.user.biz));
let lishenie = utils.random(1,100);
message.user.misc.blockUse = 0;	 
if ((user.misc.areo !== 1) && (user.misc.meta !== 1) && (user.misc.vamp !== 1) && (user.misc.nima !== 1)){
await bot(`У врага нет способностей`)
}
if (lishenie <= 25) {
if (user.misc.ability == 'meta'){
user.misc.ability = 0; user.misc.meta = 0; user.misc.metaRest = 0; user.misc.metaUse = 0;
vk.api.messages.send({user_id: user.id, message: `${`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}❗❗❗❗❗[id${message.user.id}|${message.user.tag}] лишил(а) Вас способности  🦍метаморфизма.❗❗❗❗❗`}`,
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});
return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑❗❗❗❗❗В`: `❗❗❗❗❗В`}ы успешно лишили [id${user.id}|${user.tag}] способности 🦍метаморфизм.❗❗❗❗❗`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});	
}
if (user.misc.ability == 'vamp'){
user.misc.ability = 0; user.misc.vamp = 0;
vk.api.messages.send({user_id: user.id, message: `${`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}❗❗❗❗❗[id${message.user.id}|${message.user.tag}] лишил(а) Вас способности  ❣вампиризм.❗❗❗❗❗`}`,
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});	    	
return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑❗❗❗❗❗В`: `❗❗❗❗❗В`}ы успешно лишили [id${user.id}|${user.tag}] способности ❣вампиризм.❗❗❗❗❗`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});	
}
if (user.misc.ability == 'areo'){
user.misc.ability = 0; user.misc.areo = 0; user.misc.areoReady = 0; user.misc.createAreo = 0;
user.misc.areoAttackReadyForShield = 0; user.misc.areoShield = 0;
vk.api.messages.send({user_id: user.id, message: `${`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}❗❗❗❗❗[id${message.user.id}|${message.user.tag}] лишил(а) Вас способности 🌀ареометизм.❗❗❗❗❗`}`,
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});	    	
return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑❗❗❗❗❗В`: `❗❗❗❗❗В`}ы успешно лишили [id${user.id}|${user.tag}] способности 🌀ареометизм.❗❗❗❗❗`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});	
}
if (user.misc.ability == 'nima'){
user.misc.ability = 0; user.misc.nima = 0; user.misc.nimaRest = 0; user.misc.nimaUse = 0;
message.user.misc.nimaSCREAMrest = 0; message.user.misc.nimaHaunt = 0; message.user.misc.nimaHauntRest = 0;
if (message.user.misc.nimaSCREAM == 1){
message.user.misc.nimaSCREAM = 0; message.user.misc.nimaSCREAMrest = 0; 
vk.api.messages.send({user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``} игроку [id${message.user.id}|${message.user.tag}] больше не страшно`});
message.send(`Вам больше не страшно.`)
} if (message.user.misc.Dark == 1){
message.user.misc.Dark = 0; user.misc.Dark = 0; 
message.user.misc.nimaSCREAMrest = 0; user.misc.nimaSCREAMrest = 0;
message.user.misc.DarkRest = 0; user.misc.DarkRest = 0;
message.user.misc.nimaHaunt = 0; user.misc.nimaHaunt = 0;
message.user.misc.nimaHauntRest = 0; user.misc.nimaHauntRest = 0;
message.user.misc.areoRest = 0; user.misc.areoRest = 0;
message.user.misc.nimaUseHaunt = 0; user.misc.nimaUseHaunt = 0;
message.user.misc.nimaOneTime = 1; user.misc.nimaOneTime = 1;
message.user.misc.areoOneTime = 1; user.misc.areoOneTime = 1;
message.user.misc.areoOneTime2 = 1; user.misc.areoOneTime2 = 1;
message.user.misc.Dark2 = 0; user.misc.Dark2 = 0;
message.user.misc.bloodTime = 0; user.misc.BloodTime = 0;
message.user.misc.nimaCanBeUsed = 0; user.misc.nimaCanBeUsed = 0;
message.user.misc.areoXod = 0; user.misc.areoReturn = 0;
message.user.misc.areoReturn = 0; user.misc.AreoXod = 0;
message.user.misc.DarkRest = 0;  user.misc.nimaRest = 0;
vk.api.messages.send({user_id: user.id, message: `Тьмы больше нет.`})
message.send(`Тьмы больше нет.`)
}
vk.api.messages.send({user_id: user.id, message: `${`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}❗❗❗❗❗[id${umessage.ser.id}|${message.user.tag}] лишил(а) Вас способности 🐶Анимализм.❗❗❗❗❗`}`,
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});	    	
return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑❗❗❗❗❗В`: `❗❗❗❗❗В`}ы успешно лишили [id${user.id}|${user.tag}] способности 🐶Анимализм.❗❗❗❗❗`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});	
}
} else {
vk.api.messages.send({user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}] попытался лишить Вас способности, но не вышло.`})
return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}лишить способности игрока [id${user.id}|${user.tag}] не удалось: шанс был слишком низок.`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});	
}

});















































































































//--------------------------------------------------------------УДАР-----------------------------------------------------------//
//-------------------------------------------[Удар]-------------------------------------------------------//
cmd.hear(/^(?:удар|🤜🏻Удар)$/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true;
if (message.user.misc.bloodTime == true){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вашей кровью завладели, недоступно.`)}
if (message.user.xodLOCK == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}время остановлено.`)}
if (message.user.pve.completeOFpve) {return bot(`в PVE эта команда недоступна.`)}
if (message.user.misc.startgame !== 1){
return bot(`Вам никто не бросал вызов.🔕`)
}
if (message.user.xod !== 1) return bot(`ждите своего хода!`);
message.user.backto = 1;
if ((message.user.gold >= 35) && (!message.user.misc.yvedomFORshop) && (!message.user.misc.kastet)
&& (!message.user.misc.mech) && (!message.user.misc.sablya)){
message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Напоминание: [id${message.user.id}|${message.user.tag}], у Вас есть 35 золота. 
Вы можете купить свое первое оружие в магазине. 
Команда - 🛒[Магазин]. Это объявление больше не появится.`);
message.user.misc.yvedomFORshop = 1;
}
((message.user.misc.kastet == 1) && (message.user.gold >= 15)) ? message.user.misc.upgrade = true :
((message.user.misc.kastet == 2) && (message.user.gold >= 30)) ? message.user.misc.upgrade = true :
((message.user.misc.mech == 1) && (message.user.gold >= 30)) ? message.user.misc.upgrade = true :
((message.user.misc.mech == 2) && (message.user.gold >= 30)) ? message.user.misc.upgrade = true :
((message.user.misc.sablya == 1) && (message.user.gold >= 30))? message.user.misc.upgrade = true :
((message.user.misc.sablya == 2) && (message.user.gold >= 40))? message.user.misc.upgrade = true : message.user.misc.upgrade = false;
message.user.misc.nasmeshkaLOCK = 0;
let user = users.find(x=> x.uid === Number(message.user.biz)); 
if (user.misc.mech == 0){message.user.misc.whereiscrit = 0};
if (user.misc.mech == 1){message.user.misc.whereiscrit = 1};
if (user.misc.mech == 1){message.user.misc.whereiscrit = 2};
if (user.misc.mech == 1){message.user.misc.whereiscrit = 3};
message.user.misc.weapon = 'Кулак👊';
if (message.user.misc.kastet == 1) {message.user.misc.weapon = `🔪Кастет 1lvl`;}
if (message.user.misc.kastet == 2) {message.user.misc.weapon = `🔪Кастет 2lvl`;}
if (message.user.misc.kastet == 3) {message.user.misc.weapon = `🔪Кастет 3lvl`;}
if (message.user.misc.mech == 1) {message.user.misc.weapon = `⚔Меч 1lvl`;}
if (message.user.misc.mech == 2) {message.user.misc.weapon = `⚔Меч 2lvl`;}
if (message.user.misc.mech == 3) {message.user.misc.weapon = `⚔Меч 3lvl`;}
if (message.user.misc.sablya == 1) {message.user.misc.weapon = `🗡Сабля 1lvl`;}
if (message.user.misc.sablya == 2) {message.user.misc.weapon = `🗡Сабля 2lvl`;}
if (message.user.misc.sablya == 3) {message.user.misc.weapon = `🗡Сабля 3lvl`;}
let event = utils.random(1, 200);
message.user.areoReturn = 0;
if (user.misc.areo == 1){message.user.misc.areoXod++}
//message.send('---------------------------------------------------------------- ');
//vk.api.messages.send({user_id: user.id, message: '---------------------------------------------------------------- '});
if ((user.misc.areo == 1) && (message.user.misc.areoXod == 4)){
message.user.misc.areoXod = 0; message.user.xod = 0; user.xod = 1;

vk.api.messages.send({user_id: user.id, message: `Вы заблокировали атаку [id${message.user.id}|${message.user.tag}] благодаря 🌀защитному полю
👤Ваш ход!`})
return bot(`Вы не нанесли никакого урона, у игрока [id${user.id}|${user.tag}] есть 🌀защитное поле`); 
}






if (message.user.misc.nimaSCREAM == 1){
message.user.misc.nimaSCREAMrest--;
let chanseaonattack = utils.random(1,100);
if (chanseaonattack <= 35){
message.user.heal -= 180;
message.send(`👣[id${user.id}|${user.tag}] напал(а) на Вас, нанеся 180 урона.
❤Ваши жизни: ${message.user.heal}
💔Жизней у соперника: ${user.heal}`)
vk.api.messages.send({user_id: user.id, message: `[id${message.user.id}|${message.user.tag}] потерял(а) 180 здоровья в ходе Вашей охоты.
❤Ваши жизни: ${user.heal}
💔Жизней у соперника: ${message.user.heal}`});
user.misc.nimaRest = 0;
if (message.user.misc.DarkRest == 1){user.misc.nimaOneTime = 1};
if (user.heal <=0){
message.user.balance += 1;
message.user.gold = 0; user.gold = 0;
message.user.heal = 4500; user.heal = 4500; 
message.user.misc.areoReturn = 0; user.misc.areoReturn = 0;
message.user.areoReturn = 0; user.areoReturn = 0;
message.user.biz = 0; user.biz = 0;
user.misc.kastet = 0; message.user.misc.kastet = 0; 
user.misc.mech = 0; message.user.misc.mech = 0;
user.misc.sablya = 0; message.user.misc.sablya = 0;
message.user.misc.vizov = 0; user.misc.vizov = 0; 
message.user.xod = 0; user.xod = 0;
message.user.misc.startgame = 0; user.misc.startgame = 0;
message.user.misc.ready = 0; user.misc.ready = 0;
message.user.misc.whereiscrit = 0; user.misc.whereiscrit = 0;
message.user.misc.nasmeshkaLOCK = 0; user.misc.nasmeshkaLOCK = 0;
message.user.misc.weapon = 'Кулак'; user.misc.weapon = 'Кулак';
message.user.misc.yvedomFORshop = 0; user.misc.yvedomFORshop = 0;
message.user.misc.magicTime = 0; user.misc.magicTime = 0;
message.user.misc.magicBlood = 0; user.misc.magicBlood = 0;
message.user.misc.shield = 0; user.misc.shield = 0;
message.user.misc.goMagicBlood = 0; user.misc.goMagicBlood = 0;
message.user.misc.goMagicTime = 0; user.misc.goMagicTime = 0;
message.user.xodLOCK = 0; user.xodLOCK = 0;
message.user.misc.meta = 0; user.misc.meta = 0;
message.user.misc.vamp = 0; user.misc.vamp = 0;
message.user.misc.areo = 0; user.misc.areo = 0;
message.user.misc.nima = 0; user.misc.nima = 0;
message.user.misc.block = 0; user.misc.block = 0;
message.user.misc.metaRest = 0; user.misc.metaRest = 0;
message.user.misc.metaUse = 0; user.misc.metaUse = 0;
message.user.misc.nimaUse = 0; user.misc.nimaUse = 0;
message.user.misc.nimaRest = 0; user.misc.nimaRest = 0;
message.user.misc.nimaSCREAM = 0; user.misc.nimaSCREAM = 0;
message.user.misc.blockUse = 0; user.misc.blockUse = 0;
message.user.misc.areoReady = 0; user.misc.areoReady = 0;
message.user.misc.createAreo = 0; user.misc.createAreo = 0;
message.user.misc.areoAttackReadyForShield = 0; user.misc.areoAttackReadyForShield = 0;
message.user.misc.areoShield = 0; user.misc.areoShield = 0;
message.user.misc.ability = 0; user.misc.ability = 0;
message.user.misc.nasmeshkaNotice = false; user.misc.nasmeshkaNotice = false;
message.user.misc.Dark = 0; user.misc.Dark = 0;
message.user.misc.nimaSCREAMrest = 0; user.misc.nimaSCREAMrest = 0;
message.user.misc.DarkRest = 0; user.misc.DarkRest = 0;
message.user.misc.nimaHaunt = 0; user.misc.nimaHaunt = 0;
message.user.misc.nimaHauntRest = 0; user.misc.nimaHauntRest = 0;
message.user.misc.areoRest = 0; user.misc.areoRest = 0;
message.user.misc.nimaUseHaunt = 0; user.misc.nimaUseHaunt = 0;
message.user.misc.nimaOneTime = 1; user.misc.nimaOneTime = 1;
message.user.misc.areoOneTime = 1; user.misc.areoOneTime = 1;
message.user.misc.areoOneTime2 = 1; user.misc.areoOneTime2 = 1;
message.user.misc.Dark2 = 0; user.misc.Dark2 = 0;
message.user.misc.bloodTime = 0; user.misc.BloodTime = 0;
message.user.misc.nimaCanBeUsed = 0; user.misc.nimaCanBeUsed = 0;
message.user.misc.areoXod = 0; user.misc.areoReturn = 0;
message.user.misc.areoReturn = 0; user.misc.AreoXod = 0;

message.user.misc.goMagicTimeTwo = 0; user.misc.goMagicTimeTwo = 0;
message.user.misc.goMagicBlood = 0; user.misc.goMagicBlood = 0;
message.user.misc.goMagicBloodTwo = 0; user.misc.goMagicBloodTwo = 0; 
message.user.misc.goDamageMagicTime = 0; user.misc.goDamageMagicTime = 0;
message.user.misc.nimaSCREAMrest = 0; user.misc.nimaSCREAMrest = 0;
message.user.misc.DarkRest = 0; user.misc.DarkRest = 0;
message.user.misc.nimaHaunt = 0; user.misc.nimaHaunt = 0;
message.user.misc.nimaHauntRest = 0; user.misc.nimaHauntRest = 0;
message.user.misc.areoRest = 0; user.misc.areoRest = 0;
message.user.misc.nimaUseHaunt = 0; user.misc.nimaUseHaunt = 0;
message.user.misc.nimaOneTime = 1; user.misc.nimaOneTime = 1;
message.user.misc.areoOneTime = 1; user.misc.areoOneTime = 1;
message.user.misc.areoOneTime2 = 1; user.misc.areoOneTime2 = 1;
message.user.misc.Dark2 = 0; user.misc.Dark2 = 0;
message.user.misc.bloodTime = 0; user.misc.BloodTime = 0;
message.user.misc.nimaCanBeUsed = 0; user.misc.nimaCanBeUsed = 0;
message.user.misc.nimaHaunt = 0; user.misc.nimaHaunt = 0;
message.user.misc.nimaHauntRest = 0; user.misc.nimaHauntRest = 0;
message.user.damageNima = 0; user.damageNima = 0;

message.user.misc.meta = 0; user.misc.meta = 0;
message.user.misc.vamp = 0; user.misc.vamp = 0;
message.user.misc.areo = 0; user.misc.areo = 0;
message.user.misc.nima = 0; user.misc.nima = 0;
message.user.misc.block = 0; user.misc.block = 0;
message.user.misc.metaRest = 0; user.misc.metaRest = 0;
message.user.misc.metaUse = 0; user.misc.metaUse = 0;
message.user.misc.nimaUse = 0; user.misc.nimaUse = 0;
message.user.misc.nimaRest = 0; user.misc.nimaRest = 0;
message.user.misc.nimaSCREAM = 0; user.misc.nimaSCREAM = 0;
message.user.misc.blockUse = 0; user.misc.blockUse = 0;
message.user.misc.areoReady = 0; user.misc.areoReady = 0;
message.user.misc.createAreo = 0; user.misc.createAreo = 0;
message.user.misc.areoAttackReadyForShield = 0; user.misc.areoAttackReadyForShield = 0;
message.user.misc.areoShield = 0; user.misc.areoShield = 0;
message.user.misc.ability = 0; user.misc.ability = 0;
message.user.misc.nasmeshkaNotice = false; user.misc.nasmeshkaNotice = false;
message.user.misc.Dark = 0; user.misc.Dark = 0;
message.user.misc.nimaSCREAMrest = 0; user.misc.nimaSCREAMrest = 0;
message.user.misc.DarkRest = 0; user.misc.DarkRest = 0;
message.user.misc.nimaHaunt = 0; user.misc.nimaHaunt = 0;
message.user.misc.nimaHauntRest = 0; user.misc.nimaHauntRest = 0;
message.user.misc.areoRest = 0; user.misc.areoRest = 0;
message.user.misc.nimaUseHaunt = 0; user.misc.nimaUseHaunt = 0;
message.user.misc.nimaOneTime = 1; user.misc.nimaOneTime = 1;
message.user.misc.areoOneTime = 1; user.misc.areoOneTime = 1;
message.user.misc.areoOneTime2 = 1; user.misc.areoOneTime2 = 1;
message.user.misc.Dark2 = 0; user.misc.Dark2 = 0;
message.user.misc.bloodTime = 0; user.misc.BloodTime = 0;
message.user.misc.nimaCanBeUsed = 0; user.misc.nimaCanBeUsed = 0;
message.user.misc.areoXod = 0; user.misc.areoReturn = 0;
message.user.misc.areoReturn = 0; user.misc.AreoXod = 0;

const chestrandom = utils.random(1, 100);
if (chestrandom <= 20){
message.user.misc.chest++;                           
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Игроку [id${message.user.id}|${message.user.tag}] вместе с победой выпал сундук.🧳`});
message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}], Вам выпал сундук. 🧳 Для того, чтобы открыть его, - [Открыть Сундук].`)
}  

vk.api.messages.send({user_id: user.id, message: `${`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Победил [id${message.user.id}|${message.user.tag}]!🎉💥💥 И это ${message.user.balance} победа игрока! Посмотреть топ по победам - "Топ".`}`,
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})

return message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вы победили!🎉💥💥 И это Ваша ${message.user.balance} победа! Посмотреть топ по победам - "Топ".`,{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})


}

}
message.send(`[id${user.id}|${user.tag}] Вас держит в страхе еще ${message.user.misc.nimaSCREAMrest} ходов.`);
if (message.user.misc.nimaSCREAMrest == 0){
message.user.misc.nimaSCREAM = 0; user.misc.nimaRest = 0; user.misc.nimaOneTime = 1;
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}] перестал бояться.`});
await bot(`вы перестали бояться.`)
}
}
if (message.user.misc.magicTime == 1){
let goMagic = utils.random(1, 100);
if (goMagic <= 10){
message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}&#128160; Мудрейший(ая)...
Вам доступна магия!`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});
message.user.misc.goMagicTime = 1;
}
}
if (message.user.misc.magicBlood == 1){
let goMagic = utils.random(1, 100);
if (goMagic <= 15){
message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}&#128160; Мудрейший(ая)...
Вам доступна магия!`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});
message.user.misc.goMagicBlood = 1;
}  	
}
let chanseonmeta = utils.random(1,100);
if (chanseonmeta <= 30){
if((message.user.misc.meta == 1) && (message.user.misc.metaRest == 0)) {
message.user.misc.metaRest = 3; 
if (message.user.misc.metaUse !== 1){
await bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑🦍м`: `🦍м`}етаморфизм: появилась возможность превращения.`)
}
message.user.misc.metaUse = 1;
}
}
if (message.user.misc.areo == 1){
let chs = utils.random(1,100);
if (chs <=40){message.user.misc.AreoChanse = 1};
}

if (((message.user.misc.areo == 1) && (message.user.misc.areoRest !== 1) && (message.user.misc.AreoChanse == 1)) || (message.user.misc.areoShield == 1)){
message.user.misc.createAreo = 1; 
if ((message.user.misc.areoAttackReadyForShield !== 1) && (message.user.misc.areoShield !== 1) && (message.user.misc.areoOneTime == 1)){
message.user.misc.areoOneTime = 0;
await bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑🌀а`: `🌀а`}реометизм: появилась возможность создать щит`)
} if ((message.user.misc.areoAttackReadyForShield == 1) && (message.user.misc.areoShield == 1) && (message.user.misc.areoOneTime2 == 1)){
message.user.misc.areoOneTime2 = 0
await bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Ваш 🌀щит не был сбит, в следующем ходу Вы можете атаковать.`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});
}
}
if ((message.user.misc.nima == 1) && (message.user.misc.nimaRest !== 1)){
let nimaGO = utils.random(1,100)
if ((nimaGO <= 15) && (message.user.misc.nimaOneTime == 1)){
message.user.misc.nimaUse = 1;
message.user.misc.nimaOneTime = 0;
await bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑🐾Б`: `🐾б`}лагодаря звериному инстинкту вы чувствуете врага... Вы сможете теперь использовать свою способность.`)
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}🐾Вас чувствует кто-то со звериным инстиктом...`});
message.user.misc.nimaRest = 1;
}
}

if ((message.user.misc.block == 1) && (message.user.misc.blockUse !== 1)){
let chanse = utils.random(1, 100);
if (chanse <= 15){
message.user.misc.blockUse = 1;
await bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑В`: `В`}ы в силах попытаться лишить [id${user.id}|${user.tag}] способности.`)
}
}

if (message.user.misc.metaRest !== 0){
message.user.misc.metaRest--;
}
if (message.user.misc.vamp == 1){
message.user.misc.ability = 'vamp';
}

if ((message.user.misc.nimaHaunt == 1) && (message.user.misc.nimaHauntRest !== 0)){
let blood = utils.random(10, 40);
message.user.damageNima += blood; message.user.misc.nimaHauntRest--; 
message.user.heal -= blood; message.user.damageNima += blood;
if (message.user.misc.nimaHauntRest !== 0){
message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вы потеряли ${blood} здоровья. [id${user.id}|${user.tag}] чувствует Вашу кровь.
❤Ваши жизни: ${message.user.heal}
💔Жизней у соперника: ${user.heal}`);
vk.api.messages.send({user_id: user.id, message: `[id${message.user.id}|${message.user.tag}] потерял ${blood} здоровья.
❤Ваши жизни: ${user.heal}
💔Жизней у соперника: ${message.user.heal}`});

} else if (message.user.misc.nimaHauntRest == 0) {
let whatdmg = message.user.damageNima*2;
message.user.heal -= whatdmg; 
message.user.misc.nimaHaunt = 0; message.user.damageNima = 0;
message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вы потеряли ${blood} здоровья. [id${user.id}|${user.tag}] чувствует Вашу кровь. Охота была закончена, Вам было нанесено ${whatdmg} урона.
❤Ваши жизни: ${message.user.heal}
💔Жизней у соперника: ${user.heal}`);
vk.api.messages.send({user_id: user.id, message: `[id${message.user.id}|${message.user.tag}] потерял ${blood} здоровья. Охота окончена. Было нанесено ${whatdmg} урона.
❤Ваши жизни: ${user.heal}
💔Жизней у соперника: ${message.user.heal}`});
user.misc.nimaRest = 0;
user.misc.nimaOneTime = 1;
}
}
if (message.user.misc.Dark == 1){
message.user.misc.DarkRest--;
if (message.user.misc.DarkRest == 0){
message.user.misc.Dark = 0;
user.misc.Dark2 = 0; user.misc.nimaRest = 0;
vk.api.messages.send({user_id: user.id, message: `🌕Наступил рассвет.`})
user.misc.nimaRest = 0;
user.misc.nimaOneTime = 1;
message.send(`🌕Наступил рассвет.`)
} else { 
message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}До окончания тьмы ${message.user.misc.DarkRest} ходов.`)}
}




//if (message.user.misc.nasmeshkaLOCK > 0) {message.user.misc.nasmeshkaLOCK--;}
//if ((message.user.misc.nasmeshka == 0) && (message.user.misc.nasmeshkaNotice == false)){
//message.user.misc.nasmeshkaNotice = true; message.send(`🤡Доступ к насмешкам открыт🤡`,
//	{
//	keyboard:JSON.stringify(
//	{
//		"one_time": false,
//		"buttons": [
//		[
//		{
//			"action":{
//				"type": "text",
//				"payload": "{\"button\": \"6\"}",
//				"label": `🤡Насмешка`,
//			},
//			"color": `positive`
//	},
//		],
//		]
//	})
//	})
//}





























if (event<= 15){
let UDAR = utils.random(0, 100);
if (UDAR <= 50){
const DAMAGE = utils.random(1, 100);
vk.api.messages.send({ user_id: message.user.id, message:`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}🌩ЗЕВС СПУСТИЛСЯ С НЕБЕС И ОЗАРИЛ СВОИМИ МОЛНИЯМИ НЕВЕРНЫХ!🌩
🆘ПОД УДАР ПОПАЛ [id${user.id}|${user.tag}]! Этому игроку было нанесено ${DAMAGE} урона!🆘`});

vk.api.messages.send({ user_id: user.id, message:`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}🌩ЗЕВС СПУСТИЛСЯ С НЕБЕС И ОЗАРИЛ СВОИМИ МОЛНИЯМИ НЕВЕРНЫХ!🌩
🆘Вы попали под удар! Вам было нанесено ${DAMAGE} урона!🆘`});

user.heal = user.heal - DAMAGE;
if (user.heal <=0){
message.user.balance += 1;
message.user.gold = 0; user.gold = 0;
message.user.heal = 4500; user.heal = 4500; 
message.user.misc.areoReturn = 0; user.misc.areoReturn = 0;
message.user.areoReturn = 0; user.areoReturn = 0;
message.user.biz = 0; user.biz = 0;
user.misc.kastet = 0; message.user.misc.kastet = 0; 
user.misc.mech = 0; message.user.misc.mech = 0;
user.misc.sablya = 0; message.user.misc.sablya = 0;
message.user.misc.vizov = 0; user.misc.vizov = 0; 
message.user.xod = 0; user.xod = 0;
message.user.misc.startgame = 0; user.misc.startgame = 0;
message.user.misc.ready = 0; user.misc.ready = 0;
message.user.misc.whereiscrit = 0; user.misc.whereiscrit = 0;
message.user.misc.nasmeshkaLOCK = 0; user.misc.nasmeshkaLOCK = 0;
message.user.misc.weapon = 'Кулак'; user.misc.weapon = 'Кулак';
message.user.misc.yvedomFORshop = 0; user.misc.yvedomFORshop = 0;
message.user.misc.magicTime = 0; user.misc.magicTime = 0;
message.user.misc.magicBlood = 0; user.misc.magicBlood = 0;
message.user.misc.shield = 0; user.misc.shield = 0;
message.user.misc.goMagicBlood = 0; user.misc.goMagicBlood = 0;
message.user.misc.goMagicTime = 0; user.misc.goMagicTime = 0;
message.user.xodLOCK = 0; user.xodLOCK = 0;
message.user.misc.meta = 0; user.misc.meta = 0;
message.user.misc.vamp = 0; user.misc.vamp = 0;
message.user.misc.areo = 0; user.misc.areo = 0;
message.user.misc.nima = 0; user.misc.nima = 0;
message.user.misc.block = 0; user.misc.block = 0;
message.user.misc.metaRest = 0; user.misc.metaRest = 0;
message.user.misc.metaUse = 0; user.misc.metaUse = 0;
message.user.misc.nimaUse = 0; user.misc.nimaUse = 0;
message.user.misc.nimaRest = 0; user.misc.nimaRest = 0;
message.user.misc.nimaSCREAM = 0; user.misc.nimaSCREAM = 0;
message.user.misc.blockUse = 0; user.misc.blockUse = 0;
message.user.misc.areoReady = 0; user.misc.areoReady = 0;
message.user.misc.createAreo = 0; user.misc.createAreo = 0;
message.user.misc.areoAttackReadyForShield = 0; user.misc.areoAttackReadyForShield = 0;
message.user.misc.areoShield = 0; user.misc.areoShield = 0;
message.user.misc.ability = 0; user.misc.ability = 0;
message.user.misc.nasmeshkaNotice = false; user.misc.nasmeshkaNotice = false;
message.user.misc.Dark = 0; user.misc.Dark = 0;
message.user.misc.nimaSCREAMrest = 0; user.misc.nimaSCREAMrest = 0;
message.user.misc.DarkRest = 0; user.misc.DarkRest = 0;
message.user.misc.nimaHaunt = 0; user.misc.nimaHaunt = 0;
message.user.misc.nimaHauntRest = 0; user.misc.nimaHauntRest = 0;
message.user.misc.areoRest = 0; user.misc.areoRest = 0;
message.user.misc.nimaUseHaunt = 0; user.misc.nimaUseHaunt = 0;
message.user.misc.nimaOneTime = 1; user.misc.nimaOneTime = 1;
message.user.misc.areoOneTime = 1; user.misc.areoOneTime = 1;
message.user.misc.areoOneTime2 = 1; user.misc.areoOneTime2 = 1;
message.user.misc.Dark2 = 0; user.misc.Dark2 = 0;
message.user.misc.bloodTime = 0; user.misc.BloodTime = 0;
message.user.misc.nimaCanBeUsed = 0; user.misc.nimaCanBeUsed = 0;
message.user.misc.areoXod = 0; user.misc.areoReturn = 0;
message.user.misc.areoReturn = 0; user.misc.AreoXod = 0;

message.user.misc.goMagicTimeTwo = 0; user.misc.goMagicTimeTwo = 0;
message.user.misc.goMagicBlood = 0; user.misc.goMagicBlood = 0;
message.user.misc.goMagicBloodTwo = 0; user.misc.goMagicBloodTwo = 0; 
message.user.misc.goDamageMagicTime = 0; user.misc.goDamageMagicTime = 0;
message.user.misc.nimaSCREAMrest = 0; user.misc.nimaSCREAMrest = 0;
message.user.misc.DarkRest = 0; user.misc.DarkRest = 0;
message.user.misc.nimaHaunt = 0; user.misc.nimaHaunt = 0;
message.user.misc.nimaHauntRest = 0; user.misc.nimaHauntRest = 0;
message.user.misc.areoRest = 0; user.misc.areoRest = 0;
message.user.misc.nimaUseHaunt = 0; user.misc.nimaUseHaunt = 0;
message.user.misc.nimaOneTime = 1; user.misc.nimaOneTime = 1;
message.user.misc.areoOneTime = 1; user.misc.areoOneTime = 1;
message.user.misc.areoOneTime2 = 1; user.misc.areoOneTime2 = 1;
message.user.misc.Dark2 = 0; user.misc.Dark2 = 0;
message.user.misc.bloodTime = 0; user.misc.BloodTime = 0;
message.user.misc.nimaCanBeUsed = 0; user.misc.nimaCanBeUsed = 0;
message.user.misc.nimaHaunt = 0; user.misc.nimaHaunt = 0;
message.user.misc.nimaHauntRest = 0; user.misc.nimaHauntRest = 0;
message.user.damageNima = 0; user.damageNima = 0;

message.user.misc.meta = 0; user.misc.meta = 0;
message.user.misc.vamp = 0; user.misc.vamp = 0;
message.user.misc.areo = 0; user.misc.areo = 0;
message.user.misc.nima = 0; user.misc.nima = 0;
message.user.misc.block = 0; user.misc.block = 0;
message.user.misc.metaRest = 0; user.misc.metaRest = 0;
message.user.misc.metaUse = 0; user.misc.metaUse = 0;
message.user.misc.nimaUse = 0; user.misc.nimaUse = 0;
message.user.misc.nimaRest = 0; user.misc.nimaRest = 0;
message.user.misc.nimaSCREAM = 0; user.misc.nimaSCREAM = 0;
message.user.misc.blockUse = 0; user.misc.blockUse = 0;
message.user.misc.areoReady = 0; user.misc.areoReady = 0;
message.user.misc.createAreo = 0; user.misc.createAreo = 0;
message.user.misc.areoAttackReadyForShield = 0; user.misc.areoAttackReadyForShield = 0;
message.user.misc.areoShield = 0; user.misc.areoShield = 0;
message.user.misc.ability = 0; user.misc.ability = 0;
message.user.misc.nasmeshkaNotice = false; user.misc.nasmeshkaNotice = false;
message.user.misc.Dark = 0; user.misc.Dark = 0;
message.user.misc.nimaSCREAMrest = 0; user.misc.nimaSCREAMrest = 0;
message.user.misc.DarkRest = 0; user.misc.DarkRest = 0;
message.user.misc.nimaHaunt = 0; user.misc.nimaHaunt = 0;
message.user.misc.nimaHauntRest = 0; user.misc.nimaHauntRest = 0;
message.user.misc.areoRest = 0; user.misc.areoRest = 0;
message.user.misc.nimaUseHaunt = 0; user.misc.nimaUseHaunt = 0;
message.user.misc.nimaOneTime = 1; user.misc.nimaOneTime = 1;
message.user.misc.areoOneTime = 1; user.misc.areoOneTime = 1;
message.user.misc.areoOneTime2 = 1; user.misc.areoOneTime2 = 1;
message.user.misc.Dark2 = 0; user.misc.Dark2 = 0;
message.user.misc.bloodTime = 0; user.misc.BloodTime = 0;
message.user.misc.nimaCanBeUsed = 0; user.misc.nimaCanBeUsed = 0;
message.user.misc.areoXod = 0; user.misc.areoReturn = 0;
message.user.misc.areoReturn = 0; user.misc.AreoXod = 0;

const chestrandom = utils.random(1, 100);
if (chestrandom <= 20){
message.user.misc.chest++;                           
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Игроку [id${message.user.id}|${message.user.tag}] вместе с победой выпал сундук.🧳`});
message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}], Вам выпал сундук. 🧳 Для того, чтобы открыть его, - [Открыть Сундук].`)
}  

vk.api.messages.send({user_id: user.id, message: `${`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Победил [id${message.user.id}|${message.user.tag}]!🎉💥💥 И это ${message.user.balance} победа игрока! Посмотреть топ по победам - "Топ".`}`,
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})

return message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вы победили!🎉💥💥 И это Ваша ${message.user.balance} победа! Посмотреть топ по победам - "Топ".`,{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})


}
}
if (UDAR > 50){
const DAMAGE = utils.random(1, 100);
vk.api.messages.send({ user_id: user.id, message:`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}🌩ЗЕВС СПУСТИЛСЯ С НЕБЕС И ОЗАРИЛ СВОИМИ МОЛНИЯМИ НЕВЕРНЫХ!🌩
🆘ПОД УДАР ПОПАЛ [id${message.user.id}|${message.user.tag}]! Этому игроку было нанесено ${DAMAGE} урона!🆘`});
vk.api.messages.send({ user_id: message.user.id, message:`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}🌩ЗЕВС СПУСТИЛСЯ С НЕБЕС И ОЗАРИЛ СВОИМИ МОЛНИЯМИ НЕВЕРНЫХ!🌩
🆘Вы попали под удар! Вам было нанесено ${DAMAGE} урона!🆘`});
message.user.heal = message.user.heal - DAMAGE;
if (message.user.вheal <=0){
user.balance += 1;
message.user.gold = 0; user.gold = 0;
message.user.heal = 4500; user.heal = 4500; 
message.user.misc.areoReturn = 0; user.misc.areoReturn = 0;
message.user.areoReturn = 0; user.areoReturn = 0;
message.user.biz = 0; user.biz = 0;
user.misc.kastet = 0; message.user.misc.kastet = 0; 
user.misc.mech = 0; message.user.misc.mech = 0;
user.misc.sablya = 0; message.user.misc.sablya = 0;
message.user.misc.vizov = 0; user.misc.vizov = 0; 
message.user.xod = 0; user.xod = 0;
message.user.misc.startgame = 0; user.misc.startgame = 0;
message.user.misc.ready = 0; user.misc.ready = 0;
message.user.misc.whereiscrit = 0; user.misc.whereiscrit = 0;
message.user.misc.nasmeshkaLOCK = 0; user.misc.nasmeshkaLOCK = 0;
message.user.misc.weapon = 'Кулак'; user.misc.weapon = 'Кулак';
message.user.misc.yvedomFORshop = 0; user.misc.yvedomFORshop = 0;
message.user.misc.magicTime = 0; user.misc.magicTime = 0;
message.user.misc.magicBlood = 0; user.misc.magicBlood = 0;
message.user.misc.shield = 0; user.misc.shield = 0;
message.user.misc.goMagicBlood = 0; user.misc.goMagicBlood = 0;
message.user.misc.goMagicTime = 0; user.misc.goMagicTime = 0;
message.user.xodLOCK = 0; user.xodLOCK = 0;
message.user.misc.meta = 0; user.misc.meta = 0;
message.user.misc.vamp = 0; user.misc.vamp = 0;
message.user.misc.areo = 0; user.misc.areo = 0;
message.user.misc.nima = 0; user.misc.nima = 0;
message.user.misc.block = 0; user.misc.block = 0;
message.user.misc.metaRest = 0; user.misc.metaRest = 0;
message.user.misc.metaUse = 0; user.misc.metaUse = 0;
message.user.misc.nimaUse = 0; user.misc.nimaUse = 0;
message.user.misc.nimaRest = 0; user.misc.nimaRest = 0;
message.user.misc.nimaSCREAM = 0; user.misc.nimaSCREAM = 0;
message.user.misc.blockUse = 0; user.misc.blockUse = 0;
message.user.misc.areoReady = 0; user.misc.areoReady = 0;
message.user.misc.createAreo = 0; user.misc.createAreo = 0;
message.user.misc.areoAttackReadyForShield = 0; user.misc.areoAttackReadyForShield = 0;
message.user.misc.areoShield = 0; user.misc.areoShield = 0;
message.user.misc.ability = 0; user.misc.ability = 0;
message.user.misc.nasmeshkaNotice = false; user.misc.nasmeshkaNotice = false;
message.user.misc.Dark = 0; user.misc.Dark = 0;
message.user.misc.nimaSCREAMrest = 0; user.misc.nimaSCREAMrest = 0;
message.user.misc.DarkRest = 0; user.misc.DarkRest = 0;
message.user.misc.nimaHaunt = 0; user.misc.nimaHaunt = 0;
message.user.misc.nimaHauntRest = 0; user.misc.nimaHauntRest = 0;
message.user.misc.areoRest = 0; user.misc.areoRest = 0;
message.user.misc.nimaUseHaunt = 0; user.misc.nimaUseHaunt = 0;
message.user.misc.nimaOneTime = 1; user.misc.nimaOneTime = 1;
message.user.misc.areoOneTime = 1; user.misc.areoOneTime = 1;
message.user.misc.areoOneTime2 = 1; user.misc.areoOneTime2 = 1;
message.user.misc.Dark2 = 0; user.misc.Dark2 = 0;
message.user.misc.bloodTime = 0; user.misc.BloodTime = 0;
message.user.misc.nimaCanBeUsed = 0; user.misc.nimaCanBeUsed = 0;
message.user.misc.areoXod = 0; user.misc.areoReturn = 0;
message.user.misc.areoReturn = 0; user.misc.AreoXod = 0;

message.user.misc.goMagicTimeTwo = 0; user.misc.goMagicTimeTwo = 0;
message.user.misc.goMagicBlood = 0; user.misc.goMagicBlood = 0;
message.user.misc.goMagicBloodTwo = 0; user.misc.goMagicBloodTwo = 0; 
message.user.misc.goDamageMagicTime = 0; user.misc.goDamageMagicTime = 0;
message.user.misc.nimaSCREAMrest = 0; user.misc.nimaSCREAMrest = 0;
message.user.misc.DarkRest = 0; user.misc.DarkRest = 0;
message.user.misc.nimaHaunt = 0; user.misc.nimaHaunt = 0;
message.user.misc.nimaHauntRest = 0; user.misc.nimaHauntRest = 0;
message.user.misc.areoRest = 0; user.misc.areoRest = 0;
message.user.misc.nimaUseHaunt = 0; user.misc.nimaUseHaunt = 0;
message.user.misc.nimaOneTime = 1; user.misc.nimaOneTime = 1;
message.user.misc.areoOneTime = 1; user.misc.areoOneTime = 1;
message.user.misc.areoOneTime2 = 1; user.misc.areoOneTime2 = 1;
message.user.misc.Dark2 = 0; user.misc.Dark2 = 0;
message.user.misc.bloodTime = 0; user.misc.BloodTime = 0;
message.user.misc.nimaCanBeUsed = 0; user.misc.nimaCanBeUsed = 0;
message.user.misc.nimaHaunt = 0; user.misc.nimaHaunt = 0;
message.user.misc.nimaHauntRest = 0; user.misc.nimaHauntRest = 0;
message.user.damageNima = 90

message.user.misc.meta = 0; user.misc.meta = 0;
message.user.misc.vamp = 0; user.misc.vamp = 0;
message.user.misc.areo = 0; user.misc.areo = 0;
message.user.misc.nima = 0; user.misc.nima = 0;
message.user.misc.block = 0; user.misc.block = 0;
message.user.misc.metaRest = 0; user.misc.metaRest = 0;
message.user.misc.metaUse = 0; user.misc.metaUse = 0;
message.user.misc.nimaUse = 0; user.misc.nimaUse = 0;
message.user.misc.nimaRest = 0; user.misc.nimaRest = 0;
message.user.misc.nimaSCREAM = 0; user.misc.nimaSCREAM = 0;
message.user.misc.blockUse = 0; user.misc.blockUse = 0;
message.user.misc.areoReady = 0; user.misc.areoReady = 0;
message.user.misc.createAreo = 0; user.misc.createAreo = 0;
message.user.misc.areoAttackReadyForShield = 0; user.misc.areoAttackReadyForShield = 0;
message.user.misc.areoShield = 0; user.misc.areoShield = 0;
message.user.misc.ability = 0; user.misc.ability = 0;
message.user.misc.nasmeshkaNotice = false; user.misc.nasmeshkaNotice = false;
message.user.misc.Dark = 0; user.misc.Dark = 0;
message.user.misc.nimaSCREAMrest = 0; user.misc.nimaSCREAMrest = 0;
message.user.misc.DarkRest = 0; user.misc.DarkRest = 0;
message.user.misc.nimaHaunt = 0; user.misc.nimaHaunt = 0;
message.user.misc.nimaHauntRest = 0; user.misc.nimaHauntRest = 0;
message.user.misc.areoRest = 0; user.misc.areoRest = 0;
message.user.misc.nimaUseHaunt = 0; user.misc.nimaUseHaunt = 0;
message.user.misc.nimaOneTime = 1; user.misc.nimaOneTime = 1;
message.user.misc.areoOneTime = 1; user.misc.areoOneTime = 1;
message.user.misc.areoOneTime2 = 1; user.misc.areoOneTime2 = 1;
message.user.misc.Dark2 = 0; user.misc.Dark2 = 0;
message.user.misc.bloodTime = 0; user.misc.BloodTime = 0;
message.user.misc.nimaCanBeUsed = 0; user.misc.nimaCanBeUsed = 0;
message.user.misc.areoXod = 0; user.misc.areoReturn = 0;
message.user.misc.areoReturn = 0; user.misc.AreoXod = 0;

const chestrandom = utils.random(1, 100);
if (chestrandom <= 20){
user.misc.chest++;
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${user.id}|${user.tag}], Вам выпал сундук. 🧳 Для того, чтобы открыть его, - [Открыть Сундук].`});
message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Игроку [id${user.id}|${user.tag}] вместе с победой выпал сундук.🧳`)
}
vk.api.messages.send({user_id: user.id, message: `${`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вы победили!🎉💥💥 И это Ваша ${user.balance} победа! Посмотреть топ по победам - "Топ".`}`,
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})

return message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Победил [id${user.id}|${user.tag}]!🎉💥💥 И это ${user.balance} победа игрока! Посмотреть топ по победам - "Топ".`,{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
],

})
})
}
}
}


if (user.misc.sablya == 1){
const chansecounterattack = utils.random(1,100);
if (chansecounterattack <= 20){
let ur = 11*2.5;
ur = Math.round(ur); let per = true;
vk.api.messages.send({ user_id: message.user.id, message:`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``} контратака от [id${user.id}|${user.tag}]! Вам было нанесено ${ur} урона!👀`});
vk.api.messages.send({ user_id: user.id, message:  `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Благодаря сабле вы контратаковали [id${message.user.id}|${message.user.tag}] и нанесли ${ur} урона!`})
message.user.heal= message.user.heal - ur;
if (message.user.heal <= 0){
user.Coins += 45; message.send(`+20 коинов. Ваши коины - ${message.user.Coins}`);
message.user.Coins += 20; vk.api.messages.send({user_id: user.id, message: `+45 коинов. Ваши коины - ${user.Coins}`})
if ((message.user.Decency < 5000) && (message.user.DecencyCounter == 3)){
if (mesage.user.Decency > 5000){message.user.Decency = 5000}
message.send(`Ваша порядочность была увеличена на 750. Ваша порядочность - ${message.user.Decency == 5000 ? `😃` : message.user.Decency > 4000 ? `😉` : message.user.Decency > 3000 ? `🙁` : message.user.Decency > 2000  ? `☹` : `😡`} ${message.user.Decency}`)
message.user.Decency += 750; message.user.DecencyCounter = 0;}
if ((user.Decency < 5000) && (user.DecencyCounter == 3)){
if (user.Decency > 5000) {user.Decency = 5000}
vk.api.messages.send({ user_id: user.id, message: `Ваша порядочность была увеличена на 750. Ваша порядочность - ${message.user.Decency == 5000 ? `😃` : message.user.Decency > 4000 ? `😉` : message.user.Decency > 3000 ? `🙁` : message.user.Decency > 2000  ? `☹` : `😡`} ${user.Decency}`});
user.Decency += 750; user.DecencyCounter = 0;}
if (user.DecencyCounter < 3){user.DecencyCounter++}; if (message.user.DecencyCounter <3 ) {message.user.DecencyCounter++}	
user.balance += 1;
message.user.gold = 0; user.gold = 0;
message.user.heal = 4500; user.heal = 4500; 
message.user.misc.areoReturn = 0; user.misc.areoReturn = 0;
message.user.areoReturn = 0; user.areoReturn = 0;
message.user.biz = 0; user.biz = 0;
user.misc.kastet = 0; message.user.misc.kastet = 0; 
user.misc.mech = 0; message.user.misc.mech = 0;
user.misc.sablya = 0; message.user.misc.sablya = 0;
message.user.misc.vizov = 0; user.misc.vizov = 0; 
message.user.xod = 0; user.xod = 0;
message.user.misc.startgame = 0; user.misc.startgame = 0;
message.user.misc.ready = 0; user.misc.ready = 0;
message.user.misc.whereiscrit = 0; user.misc.whereiscrit = 0;
message.user.misc.nasmeshkaLOCK = 0; user.misc.nasmeshkaLOCK = 0;
message.user.misc.weapon = 'Кулак'; user.misc.weapon = 'Кулак';
message.user.misc.yvedomFORshop = 0; user.misc.yvedomFORshop = 0;
message.user.misc.magicTime = 0; user.misc.magicTime = 0;
message.user.misc.magicBlood = 0; user.misc.magicBlood = 0;
message.user.misc.shield = 0; user.misc.shield = 0;
message.user.misc.goMagicBlood = 0; user.misc.goMagicBlood = 0;
message.user.misc.goMagicTime = 0; user.misc.goMagicTime = 0;
message.user.xodLOCK = 0; user.xodLOCK = 0;
message.user.misc.meta = 0; user.misc.meta = 0;
message.user.misc.vamp = 0; user.misc.vamp = 0;
message.user.misc.areo = 0; user.misc.areo = 0;
message.user.misc.nima = 0; user.misc.nima = 0;
message.user.misc.block = 0; user.misc.block = 0;
message.user.misc.metaRest = 0; user.misc.metaRest = 0;
message.user.misc.metaUse = 0; user.misc.metaUse = 0;
message.user.misc.nimaUse = 0; user.misc.nimaUse = 0;
message.user.misc.nimaRest = 0; user.misc.nimaRest = 0;
message.user.misc.nimaSCREAM = 0; user.misc.nimaSCREAM = 0;
message.user.misc.blockUse = 0; user.misc.blockUse = 0;
message.user.misc.areoReady = 0; user.misc.areoReady = 0;
message.user.misc.createAreo = 0; user.misc.createAreo = 0;
message.user.misc.areoAttackReadyForShield = 0; user.misc.areoAttackReadyForShield = 0;
message.user.misc.areoShield = 0; user.misc.areoShield = 0;
message.user.misc.ability = 0; user.misc.ability = 0;
message.user.misc.nasmeshkaNotice = false; user.misc.nasmeshkaNotice = false;
message.user.misc.Dark = 0; user.misc.Dark = 0;
message.user.misc.nimaSCREAMrest = 0; user.misc.nimaSCREAMrest = 0;
message.user.misc.DarkRest = 0; user.misc.DarkRest = 0;
message.user.misc.nimaHaunt = 0; user.misc.nimaHaunt = 0;
message.user.misc.nimaHauntRest = 0; user.misc.nimaHauntRest = 0;
message.user.misc.areoRest = 0; user.misc.areoRest = 0;
message.user.misc.nimaUseHaunt = 0; user.misc.nimaUseHaunt = 0;
message.user.misc.nimaOneTime = 1; user.misc.nimaOneTime = 1;
message.user.misc.areoOneTime = 1; user.misc.areoOneTime = 1;
message.user.misc.areoOneTime2 = 1; user.misc.areoOneTime2 = 1;
message.user.misc.Dark2 = 0; user.misc.Dark2 = 0;
message.user.misc.bloodTime = 0; user.misc.BloodTime = 0;
message.user.misc.nimaCanBeUsed = 0; user.misc.nimaCanBeUsed = 0;
message.user.misc.areoXod = 0; user.misc.areoReturn = 0;
message.user.misc.areoReturn = 0; user.misc.AreoXod = 0;
message.user.misc.goMagicTimeTwo = 0; user.misc.goMagicTimeTwo = 0;
message.user.misc.goMagicBlood = 0; user.misc.goMagicBlood = 0;
message.user.misc.goMagicBloodTwo = 0; user.misc.goMagicBloodTwo = 0; 
message.user.misc.goDamageMagicTime = 0; user.misc.goDamageMagicTime = 0;
message.user.misc.nimaSCREAMrest = 0; user.misc.nimaSCREAMrest = 0;
message.user.misc.DarkRest = 0; user.misc.DarkRest = 0;
message.user.misc.nimaHaunt = 0; user.misc.nimaHaunt = 0;
message.user.misc.nimaHauntRest = 0; user.misc.nimaHauntRest = 0;
message.user.misc.areoRest = 0; user.misc.areoRest = 0;
message.user.misc.nimaUseHaunt = 0; user.misc.nimaUseHaunt = 0;
message.user.misc.nimaOneTime = 1; user.misc.nimaOneTime = 1;
message.user.misc.areoOneTime = 1; user.misc.areoOneTime = 1;
message.user.misc.areoOneTime2 = 1; user.misc.areoOneTime2 = 1;
message.user.misc.Dark2 = 0; user.misc.Dark2 = 0;
message.user.misc.bloodTime = 0; user.misc.BloodTime = 0;
message.user.misc.nimaCanBeUsed = 0; user.misc.nimaCanBeUsed = 0;
message.user.misc.nimaHaunt = 0; user.misc.nimaHaunt = 0;
message.user.misc.nimaHauntRest = 0; user.misc.nimaHauntRest = 0;
message.user.damageNima = 90
const chestrandom = utils.random(1, 100);
if (chestrandom <= 20){
user.misc.chest++;
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${user.id}|${user.tag}], Вам выпал сундук. 🧳 Для того, чтобы открыть его, - [Открыть Сундук].`});
vk.api.messages.send({ user_id: message.user.id, message: `Игроку [id${user.id}|${user.tag}] вместе с победой выпал сундук.🧳`})
}
vk.api.messages.send({user_id: user.id, message: `${`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вы победили!🎉💥💥 И это Ваша ${user.balance} победа! Посмотреть топ по победам - "Топ".`}`,
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${user.misc.chest >= 1 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})

return message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Победил [id${user.id}|${user.tag}]!🎉💥💥 И это ${user.balance} победа игрока! Посмотреть топ по победам - "Топ".`,{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})

}
}
}
if (user.misc.sablya == 2){
const chansecounterattack = utils.random(1,100);
if (chansecounterattack <= 35){
let ur = 15*2.5;
ur = Math.round(ur);
vk.api.messages.send({ user_id: message.user.id, message:`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``} контратака от [id${user.id}|${user.tag}]! Вам было нанесено ${ur} урона!👀`});
vk.api.messages.send({ user_id: user.id, message:  `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Благодаря сабле вы контратаковали [id${message.user.id}|${message.user.tag}] и нанесли ${ur} урона!`})
message.user.heal= message.user.heal - ur;
if (message.user.heal <=0){
user.Coins += 45; message.send(`+20 коинов. Ваши коины - ${message.user.Coins}`);
message.user.Coins += 20; vk.api.messages.send({user_id: user.id, message: `+45 коинов. Ваши коины - ${user.Coins}`})
if ((message.user.Decency < 5000) && (message.user.DecencyCounter == 3)){
if (mesage.user.Decency > 5000){message.user.Decency = 5000}
message.send(`Ваша порядочность была увеличена на 750. Ваша порядочность - ${message.user.Decency == 5000 ? `😃` : message.user.Decency > 4000 ? `😉` : message.user.Decency > 3000 ? `🙁` : message.user.Decency > 2000  ? `☹` : `😡`} ${message.user.Decency}`)
message.user.Decency += 750; message.user.DecencyCounter = 0;}
if ((user.Decency < 5000) && (user.DecencyCounter == 3)){
if (user.Decency > 5000) {user.Decency = 5000}
vk.api.messages.send({ user_id: user.id, message: `Ваша порядочность была увеличена на 750. Ваша порядочность - ${message.user.Decency == 5000 ? `😃` : message.user.Decency > 4000 ? `😉` : message.user.Decency > 3000 ? `🙁` : message.user.Decency > 2000  ? `☹` : `😡`} ${user.Decency}`});
user.Decency += 750; user.DecencyCounter = 0;}
if (user.DecencyCounter < 3){user.DecencyCounter++}; if (message.user.DecencyCounter <3 ) {message.user.DecencyCounter++}				
user.balance += 1;								
message.user.gold = 0; gold = 0;
message.user.heal = 4500; user.heal = 4500; 
message.user.misc.areoReturn = 0; user.misc.areoReturn = 0;
message.user.areoReturn = 0; user.areoReturn = 0;
message.user.biz = 0; user.biz = 0;
user.misc.kastet = 0; message.user.misc.kastet = 0; 
user.misc.mech = 0; message.user.misc.mech = 0;
user.misc.sablya = 0; message.user.misc.sablya = 0;
message.user.misc.vizov = 0; user.misc.vizov = 0; 
message.user.xod = 0; user.xod = 0;
message.user.misc.startgame = 0; user.misc.startgame = 0;
message.user.misc.ready = 0; user.misc.ready = 0;
message.user.misc.whereiscrit = 0; user.misc.whereiscrit = 0;
message.user.misc.nasmeshkaLOCK = 0; user.misc.nasmeshkaLOCK = 0;
message.user.misc.weapon = 'Кулак'; user.misc.weapon = 'Кулак';
message.user.misc.yvedomFORshop = 0; user.misc.yvedomFORshop = 0;
message.user.misc.magicTime = 0; user.misc.magicTime = 0;
message.user.misc.magicBlood = 0; user.misc.magicBlood = 0;
message.user.misc.shield = 0; user.misc.shield = 0;
message.user.misc.goMagicBlood = 0; user.misc.goMagicBlood = 0;
message.user.misc.goMagicTime = 0; user.misc.goMagicTime = 0;
message.user.xodLOCK = 0; user.xodLOCK = 0;
message.user.misc.meta = 0; user.misc.meta = 0;
message.user.misc.vamp = 0; user.misc.vamp = 0;
message.user.misc.areo = 0; user.misc.areo = 0;
message.user.misc.nima = 0; user.misc.nima = 0;
message.user.misc.block = 0; user.misc.block = 0;
message.user.misc.metaRest = 0; user.misc.metaRest = 0;
message.user.misc.metaUse = 0; user.misc.metaUse = 0;
message.user.misc.nimaUse = 0; user.misc.nimaUse = 0;
message.user.misc.nimaRest = 0; user.misc.nimaRest = 0;
message.user.misc.nimaSCREAM = 0; user.misc.nimaSCREAM = 0;
message.user.misc.blockUse = 0; user.misc.blockUse = 0;
message.user.misc.areoReady = 0; user.misc.areoReady = 0;
message.user.misc.createAreo = 0; user.misc.createAreo = 0;
message.user.misc.areoAttackReadyForShield = 0; user.misc.areoAttackReadyForShield = 0;
message.user.misc.areoShield = 0; user.misc.areoShield = 0;
message.user.misc.ability = 0; user.misc.ability = 0;
message.user.misc.nasmeshkaNotice = false; user.misc.nasmeshkaNotice = false;
message.user.misc.Dark = 0; user.misc.Dark = 0;
message.user.misc.nimaSCREAMrest = 0; user.misc.nimaSCREAMrest = 0;
message.user.misc.DarkRest = 0; user.misc.DarkRest = 0;
message.user.misc.nimaHaunt = 0; user.misc.nimaHaunt = 0;
message.user.misc.nimaHauntRest = 0; user.misc.nimaHauntRest = 0;
message.user.misc.areoRest = 0; user.misc.areoRest = 0;
message.user.misc.nimaUseHaunt = 0; user.misc.nimaUseHaunt = 0;
message.user.misc.nimaOneTime = 1; user.misc.nimaOneTime = 1;
message.user.misc.areoOneTime = 1; user.misc.areoOneTime = 1;
message.user.misc.areoOneTime2 = 1; user.misc.areoOneTime2 = 1;
message.user.misc.Dark2 = 0; user.misc.Dark2 = 0;
message.user.misc.bloodTime = 0; user.misc.BloodTime = 0;
message.user.misc.nimaCanBeUsed = 0; user.misc.nimaCanBeUsed = 0;
message.user.misc.areoXod = 0; user.misc.areoReturn = 0;
message.user.misc.areoReturn = 0; user.misc.AreoXod = 0;

message.user.misc.goMagicTimeTwo = 0; user.misc.goMagicTimeTwo = 0;
message.user.misc.goMagicBlood = 0; user.misc.goMagicBlood = 0;
message.user.misc.goMagicBloodTwo = 0; user.misc.goMagicBloodTwo = 0;			
const chestrandom = utils.random(1, 100);
if (chestrandom <= 20){
user.misc.chest++;
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${user.id}|${user.tag}], Вам выпал сундук. 🧳 Для того, чтобы открыть его, - [Открыть Сундук].`});
vk.api.messages.send({ user_id: message.user.id, message: `Игроку [id${user.id}|${user.tag}] вместе с победой выпал сундук.🧳`})
}
vk.api.messages.send({user_id: user.id, message: `${`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вы победили!🎉💥💥 И это Ваша ${user.balance} победа! Посмотреть топ по победам - "Топ".`}`,
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${user.misc.chest >= 1 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})

return message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Победил [id${user.id}|${user.tag}]!🎉💥💥 И это ${user.balance} победа игрока! Посмотреть топ по победам - "Топ".`,{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})

}
}
}
if (user.misc.sablya == 3){
const chansecounterattack = utils.random(1,100);
if (chansecounterattack <=50){
let ur = 21*2.5;
ur = Math.round(ur);
message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Контратака от [id${user.id}|${user.tag}]! Вам было нанесено ${ur} урона!👀`);
vk.api.messages.send({ user_id: user.id, message:  `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Благодаря сабле вы контратаковали [id${message.user.id}|${message.user.tag}] и нанесли ${ur} урона!`})
message.user.heal = message.user.heal - ur;
if (message.user.heal <= 0){
user.Coins += 45; message.send(`+20 коинов. Ваши коины - ${message.user.Coins}`);
message.user.Coins += 20; vk.api.messages.send({user_id: user.id, message: `+45 коинов. Ваши коины - ${user.Coins}`})
if ((message.user.Decency < 5000) && (message.user.DecencyCounter == 3)){
if (mesage.user.Decency > 5000){message.user.Decency = 5000}
message.send(`Ваша порядочность была увеличена на 750. Ваша порядочность - ${message.user.Decency == 5000 ? `😃` : message.user.Decency > 4000 ? `😉` : message.user.Decency > 3000 ? `🙁` : message.user.Decency > 2000  ? `☹` : `😡`} ${message.user.Decency}`)
message.user.Decency += 750; message.user.DecencyCounter = 0;}
if ((user.Decency < 5000) && (user.DecencyCounter == 3)){
if (user.Decency > 5000) {user.Decency = 5000}
vk.api.messages.send({ user_id: user.id, message: `Ваша порядочность была увеличена на 750. Ваша порядочность - ${message.user.Decency == 5000 ? `😃` : message.user.Decency > 4000 ? `😉` : message.user.Decency > 3000 ? `🙁` : message.user.Decency > 2000  ? `☹` : `😡`} ${user.Decency}`});
user.Decency += 750; user.DecencyCounter = 0;}
if (user.DecencyCounter < 3){user.DecencyCounter++}; if (message.user.DecencyCounter <3){message.user.DecencyCounter++};	
message.user.exp += 20; user.exp += 40; let lvlUser = message.user.exp >= 100 ? 2 : message.user.exp >= 170 ? 3 : message.user.exp >= 240 ? 4 :
message.user.exp >= 310 ? 5 : message.user.exp >= 390 ? 6 : message.user.exp >= 470 ? 7 :
message.user.exp >= 530 ? 8 : message.user.exp >= 640 ? 9 : message.user.exp >= 740 ? 10 : 1;
let NewLvl = lvlUser == 1 ? message.user.level.level2-message.user.exp : lvlUser == 2 ? message.user.level.level3-message.user.exp : lvlUser == 3 ? message.user.level.level4-message.user.exp :
lvlUser == 5 ? message.user.level.level6-message.user.exp : lvlUser == 6 ? message.user.level.level7-message.user.exp : lvlUser == 8 ? message.user.level.level9-message.user.exp : 
lvlUser == 9 ? message.user.level.level10-message.user.exp : 'Максимальный уровень.';
message.send(`+20 опыта. Ваш опыт - ${message.user.exp}. Ваш уровень - ${message.user.lvl}. До нового уровня - ${NewLvl} опыта.`)
let lvlUser2 = user.exp >= 100 ? 2 : user.exp >= 170 ? 3 : user.exp >= 240 ? 4 :
user.exp >= 310 ? 5 : user.exp >= 390 ? 6 : user.exp >= 470 ? 7 :
user.exp >= 530 ? 8 : user.exp >= 640 ? 9 : user.exp >= 740 ? 10 : 1;
let NewLvl2 = lvlUser2 == 1 ? user.level.level2-user.exp : lvlUser2 == 2 ? user.level.level3-user.exp : lvlUser2 == 3 ? user.level.level4-user.exp :
lvlUser2 == 5 ? user.level.level6-user.exp : lvlUser2 == 6 ? user.level.level7-user.exp : lvlUser2 == 8 ? user.level.level9-user.exp : 
lvlUser2 == 9 ? user.level.level10-user.exp : 'Максимальный уровень.';
vk.api.messages.send({user_id: user.id, message:`+40 опыта. Ваш опыт - ${user.exp}. Ваш уровень - ${user.lvl}. До нового уровня - ${NewLvl2} опыта.`})
if ((message.user.lvl == 1) && (message.user.exp >= 100)){
message.user.lvl = 2; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 2) && (message.user.exp >=170)){
message.user.lvl = 3; message.send(``)
} if ((message.user.lvl == 3) && (message.user.exp >=240)){
message.user.lvl = 4; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 4) && (messsage.user.exp >=310)){
message.user.lvl = 5; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 5) && (message.user.exp >= 390)){
message.user.lvl = 6; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 6) && (message.user.exp >= 470)){
message.user.lvl = 7; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 7) && (message.user.exp >= 530)){
message.user.lvl = 8; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 8) && (message.user.exp >= 640)){
message.user.lvl = 9; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 9) && (message.user.exp >=740)){
message.user.lvl = 10; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((user.lvl == 1) && (user.exp >= 100)){
user.lvl = 2; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 2) && (user.exp >=170)){
user.lvl = 3; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 3) && (user.exp >=240)){
user.lvl = 4; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 4) && (user.exp >=310)){
user.lvl = 5; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 5) && (user.exp >= 390)){
user.lvl = 6; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 6) && (user.exp >= 470)){
user.lvl = 7; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 7) && (user.exp >= 530)){
user.lvl = 8; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 8) && (user.exp >= 640)){
user.lvl = 9; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 9) && (user.exp >=740)){
user.lvl = 10; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} 
user.balance += 1; 
message.user.gold = 0; gold = 0;
message.user.heal = 4500; user.heal = 4500; 
message.user.misc.areoReturn = 0; user.misc.areoReturn = 0;
message.user.areoReturn = 0; user.areoReturn = 0;
message.user.biz = 0; user.biz = 0;
user.misc.kastet = 0; message.user.misc.kastet = 0; 
user.misc.mech = 0; message.user.misc.mech = 0;
user.misc.sablya = 0; message.user.misc.sablya = 0;
message.user.misc.vizov = 0; user.misc.vizov = 0; 
message.user.xod = 0; user.xod = 0;
message.user.misc.startgame = 0; user.misc.startgame = 0;
message.user.misc.ready = 0; user.misc.ready = 0;
message.user.misc.whereiscrit = 0; user.misc.whereiscrit = 0;
message.user.misc.nasmeshkaLOCK = 0; user.misc.nasmeshkaLOCK = 0;
message.user.misc.weapon = 'Кулак'; user.misc.weapon = 'Кулак';
message.user.misc.yvedomFORshop = 0; user.misc.yvedomFORshop = 0;
message.user.misc.magicTime = 0; user.misc.magicTime = 0;
message.user.misc.magicBlood = 0; user.misc.magicBlood = 0;
message.user.misc.shield = 0; user.misc.shield = 0;
message.user.misc.goMagicBlood = 0; user.misc.goMagicBlood = 0;
message.user.misc.goMagicTime = 0; user.misc.goMagicTime = 0;
message.user.xodLOCK = 0; user.xodLOCK = 0;
message.user.misc.meta = 0; user.misc.meta = 0;
message.user.misc.vamp = 0; user.misc.vamp = 0;
message.user.misc.areo = 0; user.misc.areo = 0;
message.user.misc.nima = 0; user.misc.nima = 0;
message.user.misc.block = 0; user.misc.block = 0;
message.user.misc.metaRest = 0; user.misc.metaRest = 0;
message.user.misc.metaUse = 0; user.misc.metaUse = 0;
message.user.misc.nimaUse = 0; user.misc.nimaUse = 0;
message.user.misc.nimaRest = 0; user.misc.nimaRest = 0;
message.user.misc.nimaSCREAM = 0; user.misc.nimaSCREAM = 0;
message.user.misc.blockUse = 0; user.misc.blockUse = 0;
message.user.misc.areoReady = 0; user.misc.areoReady = 0;
message.user.misc.createAreo = 0; user.misc.createAreo = 0;
message.user.misc.areoAttackReadyForShield = 0; user.misc.areoAttackReadyForShield = 0;
message.user.misc.areoShield = 0; user.misc.areoShield = 0;
message.user.misc.ability = 0; user.misc.ability = 0;
message.user.misc.nasmeshkaNotice = false; user.misc.nasmeshkaNotice = false;
message.user.misc.Dark = 0; user.misc.Dark = 0;
message.user.misc.nimaSCREAMrest = 0; user.misc.nimaSCREAMrest = 0;
message.user.misc.DarkRest = 0; user.misc.DarkRest = 0;
message.user.misc.nimaHaunt = 0; user.misc.nimaHaunt = 0;
message.user.misc.nimaHauntRest = 0; user.misc.nimaHauntRest = 0;
message.user.misc.areoRest = 0; user.misc.areoRest = 0;
message.user.misc.nimaUseHaunt = 0; user.misc.nimaUseHaunt = 0;
message.user.misc.nimaOneTime = 1; user.misc.nimaOneTime = 1;
message.user.misc.areoOneTime = 1; user.misc.areoOneTime = 1;
message.user.misc.areoOneTime2 = 1; user.misc.areoOneTime2 = 1;
message.user.misc.Dark2 = 0; user.misc.Dark2 = 0;
message.user.misc.bloodTime = 0; user.misc.BloodTime = 0;
message.user.misc.nimaCanBeUsed = 0; user.misc.nimaCanBeUsed = 0;
message.user.misc.areoXod = 0; user.misc.areoReturn = 0;
message.user.misc.areoReturn = 0; user.misc.AreoXod = 0;
message.user.misc.goMagicTimeTwo = 0; user.misc.goMagicTimeTwo = 0;
message.user.misc.goMagicBlood = 0; user.misc.goMagicBlood = 0;
message.user.misc.goMagicBloodTwo = 0; user.misc.goMagicBloodTwo = 0;
const chestrandom = utils.random(1, 100);
if (chestrandom <= 20){
user.misc.chest++;
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${user.id}|${user.tag}], Вам выпал сундук. 🧳 Для того, чтобы открыть его, - [Открыть Сундук].`});
message.send( `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Игроку [id${user.id}|${user.tag}] вместе с победой выпал сундук.🧳`)
}
vk.api.messages.send({user_id: user.id, message: `${`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вы победили!🎉💥💥 И это Ваша ${user.balance} победа! Посмотреть топ по победам - "Топ".`}`,
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${user.misc.chest >= 1 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})

return message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Победил [id${user.id}|${user.tag}]!🎉💥💥 И это ${user.balance} победа игрока! Посмотреть топ по победам - "Топ".`,{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})

}
}
}
//--------------------------------------- Условие на отсутствие оружия ----------------------------------//
if ((message.user.misc.kastet == 0) && (message.user.misc.mech == 0) && (message.user.misc.sablya == 0)){

//--------------------------------------- Условие на отсутствие оружия ----------------------------------//                                               
var check = utils.random(1, 1);
var damageDealer = 0; var regen = 0;
if (message.user.misc.whereiscrit == 0){check = utils.random(1, 102);};
if (message.user.misc.whereiscrit == 1){check = utils.random(1, 112);};
if (message.user.misc.whereiscrit == 2){check = utils.random(1, 132);};
if (message.user.misc.whereiscrit == 3){check = utils.random(1, 157);};
if ((check > 32) && (check <= 157)){
damageDealer = damageDealer + 1;
if (message.user.misc.vamp == 1){regen = Math.round(damageDealer/2)}
if (user.misc.block == 1){regen = Math.round(damageDealer/4)}
message.user.heal += regen;
if (user.misc.shield == 1){
damageDealer = Math.round((damageDealer/100)*30)
}
user.heal -= damageDealer;
message.user.gold += 2;
message.user.xod = 0;
user.xod = 1;
}
if ((check > 2) && (check <= 32)){
damageDealer = damageDealer + 2;
if (message.user.misc.vamp == 1){regen = Math.round(damageDealer/2)}
if (user.misc.block == 1){regen = Math.round(damageDealer/4)}
message.user.heal += regen;
if (user.misc.shield == 1){
damageDealer = Math.round((damageDealer/100)*30)
}
user.heal -= damageDealer;
message.user.gold += 4;
message.user.xod = 0;
user.xod = 1;
}
if ((check == 1) || (check == 2)){
if (message.user.misc.vamp == 1){regen = Math.round(damageDealer/2)}
if (user.misc.block == 1){regen = Math.round(damageDealer/4)}
message.user.heal += regen;
user.heal -= damageDealer;
message.user.gold += 0;
message.user.xod = 0;
user.xod = 1;
}

// ------------------------------------------- УСЛОВИЕ ПОБЕДЫ ------------------------------------------ //
if (user.heal <= 0) {
message.user.Coins += 45; message.send(`+45 коинов. Ваши коины - ${message.user.Coins}`);
user.Coins += 20; vk.api.messages.send({user_id: user.id, message: `+20 коинов. Ваши коины - ${message.user.Coins}`})
if ((message.user.Decency < 5000) && (message.user.DecencyCounter == 3)){
if (mesage.user.Decency > 5000){message.user.Decency = 5000}
message.send(`Ваша порядочность была увеличена на 750. Ваша порядочность - ${message.user.Decency == 5000 ? `😃` : message.user.Decency > 4000 ? `😉` : message.user.Decency > 3000 ? `🙁` : message.user.Decency > 2000  ? `☹` : `😡`} ${message.user.Decency}`)
message.user.Decency += 750; message.user.DecencyCounter = 0;}
if ((user.Decency < 5000) && (user.DecencyCounter == 3)){
if (user.Decency > 5000) {user.Decency = 5000}
vk.api.messages.send({ user_id: user.id, message: `Ваша порядочность была увеличена на 750. Ваша порядочность - ${message.user.Decency == 5000 ? `😃` : message.user.Decency > 4000 ? `😉` : message.user.Decency > 3000 ? `🙁` : message.user.Decency > 2000  ? `☹` : `😡`} ${user.Decency}`});
user.Decency += 750; user.DecencyCounter = 0;}
if (user.DecencyCounter < 3){user.DecencyCounter++}; if (message.user.DecencyCounter <3 ) {message.user.DecencyCounter++}	
message.user.exp += 40; user.exp += 20; let lvlUser = message.user.exp >= 100 ? 2 : message.user.exp >= 170 ? 3 : message.user.exp >= 240 ? 4 :
message.user.exp >= 310 ? 5 : message.user.exp >= 390 ? 6 : message.user.exp >= 470 ? 7 :
message.user.exp >= 530 ? 8 : message.user.exp >= 640 ? 9 : message.user.exp >= 740 ? 10 : 1;
let NewLvl = lvlUser == 1 ? message.user.level.level2-message.user.exp : lvlUser == 2 ? message.user.level.level3-message.user.exp : lvlUser == 3 ? message.user.level.level4-message.user.exp :
lvlUser == 5 ? message.user.level.level6-message.user.exp : lvlUser == 6 ? message.user.level.level7-message.user.exp : lvlUser == 8 ? message.user.level.level9-message.user.exp : 
lvlUser == 9 ? message.user.level.level10-message.user.exp : 'Максимальный уровень.';
message.send(`+40 опыта. Ваш опыт - ${message.user.exp}. Ваш уровень - ${message.user.lvl}. До нового уровня - ${NewLvl} опыта.`)
let lvlUser2 = user.exp >= 100 ? 2 : user.exp >= 170 ? 3 : user.exp >= 240 ? 4 :
user.exp >= 310 ? 5 : user.exp >= 390 ? 6 : user.exp >= 470 ? 7 :
user.exp >= 530 ? 8 : user.exp >= 640 ? 9 : user.exp >= 740 ? 10 : 1;
let NewLvl2 = lvlUser2 == 1 ? user.level.level2-user.exp : lvlUser2 == 2 ? user.level.level3-user.exp : lvlUser2 == 3 ? user.level.level4-user.exp :
lvlUser2 == 5 ? user.level.level6-user.exp : lvlUser2 == 6 ? user.level.level7-user.exp : lvlUser2 == 8 ? user.level.level9-user.exp : 
lvlUser2 == 9 ? user.level.level10-user.exp : 'Максимальный уровень.';
vk.api.messages.send({user_id: user.id, message:`+20 опыта. Ваш опыт - ${user.exp}. Ваш уровень - ${user.lvl}. До нового уровня - ${NewLvl2} опыта.`})
if ((message.user.lvl == 1) && (message.user.exp >= 100)){
message.user.lvl = 2; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 2) && (message.user.exp >=170)){
message.user.lvl = 3; message.send(``)
} if ((message.user.lvl == 3) && (message.user.exp >=240)){
message.user.lvl = 4; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 4) && (messsage.user.exp >=310)){
message.user.lvl = 5; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 5) && (message.user.exp >= 390)){
message.user.lvl = 6; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 6) && (message.user.exp >= 470)){
message.user.lvl = 7; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 7) && (message.user.exp >= 530)){
message.user.lvl = 8; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 8) && (message.user.exp >= 640)){
message.user.lvl = 9; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 9) && (message.user.exp >=740)){
message.user.lvl = 10; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((user.lvl == 1) && (user.exp >= 100)){
user.lvl = 2; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 2) && (user.exp >=170)){
user.lvl = 3; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 3) && (user.exp >=240)){
user.lvl = 4; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 4) && (user.exp >=310)){
user.lvl = 5; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 5) && (user.exp >= 390)){
user.lvl = 6; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 6) && (user.exp >= 470)){
user.lvl = 7; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 7) && (user.exp >= 530)){
user.lvl = 8; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 8) && (user.exp >= 640)){
user.lvl = 9; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 9) && (user.exp >=740)){
user.lvl = 10; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} 
message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вы нанесли ${damageDealer} урона.
❤Ваши жизни: ${message.user.heal}
💔Жизней у соперника: ${user.heal}
${message.user.misc.vamp ? `❣Регенерация: ${regen}` : ``}`)
vk.api.messages.send({ user_id: user.id, message: `Вам было нанесено ${damageDealer} урона.
❤Ваши жизни: ${user.heal}
💔Жизней у соперника: ${message.user.heal}`});
message.user.balance += 1;
message.user.gold = 0; user.gold = 0;
message.user.heal = 4500; user.heal = 4500; 
message.user.misc.areoReturn = 0; user.misc.areoReturn = 0;
message.user.areoReturn = 0; user.areoReturn = 0;
message.user.biz = 0; user.biz = 0;
user.misc.kastet = 0; message.user.misc.kastet = 0; 
user.misc.mech = 0; message.user.misc.mech = 0;
user.misc.sablya = 0; message.user.misc.sablya = 0;  
message.user.misc.vizov = 0; user.misc.vizov = 0; 
message.user.xod = 0; user.xod = 0;
message.user.misc.startgame = 0; user.misc.startgame = 0;
message.user.misc.ready = 0; user.misc.ready = 0;
message.user.misc.whereiscrit = 0; user.misc.whereiscrit = 0;
message.user.misc.nasmeshkaLOCK = 0; user.misc.nasmeshkaLOCK = 0;
message.user.misc.weapon = 'Кулак'; user.misc.weapon = 'Кулак';
message.user.misc.yvedomFORshop = 0; user.misc.yvedomFORshop = 0;
message.user.misc.magicTime = 0; user.misc.magicTime = 0;
message.user.misc.magicBlood = 0; user.misc.magicBlood = 0;
message.user.misc.shield = 0; user.misc.shield = 0;
message.user.misc.goMagicBlood = 0; user.misc.goMagicBlood = 0;
message.user.misc.goMagicTime = 0; user.misc.goMagicTime = 0;
message.user.xodLOCK = 0; user.xodLOCK = 0;
message.user.misc.meta = 0; user.misc.meta = 0;
message.user.misc.vamp = 0; user.misc.vamp = 0;
message.user.misc.areo = 0; user.misc.areo = 0;
message.user.misc.nima = 0; user.misc.nima = 0;
message.user.misc.block = 0; user.misc.block = 0;
message.user.misc.metaRest = 0; user.misc.metaRest = 0;
message.user.misc.metaUse = 0; user.misc.metaUse = 0;
message.user.misc.nimaUse = 0; user.misc.nimaUse = 0;
message.user.misc.nimaRest = 0; user.misc.nimaRest = 0;
message.user.misc.nimaSCREAM = 0; user.misc.nimaSCREAM = 0;
message.user.misc.blockUse = 0; user.misc.blockUse = 0;
message.user.misc.areoReady = 0; user.misc.areoReady = 0;
message.user.misc.createAreo = 0; user.misc.createAreo = 0;
message.user.misc.areoAttackReadyForShield = 0; user.misc.areoAttackReadyForShield = 0;
message.user.misc.areoShield = 0; user.misc.areoShield = 0;
message.user.misc.ability = 0; user.misc.ability = 0;
message.user.misc.nasmeshkaNotice = false; user.misc.nasmeshkaNotice = false;
message.user.misc.Dark = 0; user.misc.Dark = 0;
message.user.misc.nimaSCREAMrest = 0; user.misc.nimaSCREAMrest = 0;
message.user.misc.DarkRest = 0; user.misc.DarkRest = 0;
message.user.misc.nimaHaunt = 0; user.misc.nimaHaunt = 0;
message.user.misc.nimaHauntRest = 0; user.misc.nimaHauntRest = 0;
message.user.misc.areoRest = 0; user.misc.areoRest = 0;
message.user.misc.nimaUseHaunt = 0; user.misc.nimaUseHaunt = 0;
message.user.misc.nimaOneTime = 1; user.misc.nimaOneTime = 1;
message.user.misc.areoOneTime = 1; user.misc.areoOneTime = 1;
message.user.misc.areoOneTime2 = 1; user.misc.areoOneTime2 = 1;
message.user.misc.Dark2 = 0; user.misc.Dark2 = 0;
message.user.misc.bloodTime = 0; user.misc.BloodTime = 0;
message.user.misc.nimaCanBeUsed = 0; user.misc.nimaCanBeUsed = 0;
message.user.misc.areoXod = 0; user.misc.areoReturn = 0;
message.user.misc.areoReturn = 0; user.misc.AreoXod = 0;
message.user.misc.goMagicTimeTwo = 0; user.misc.goMagicTimeTwo = 0;
message.user.misc.goMagicBlood = 0; user.misc.goMagicBlood = 0;
message.user.misc.goMagicBloodTwo = 0; user.misc.goMagicBloodTwo = 0;
const chestrandom = utils.random(1, 100);
if (chestrandom <= 20){
message.user.misc.chest++;
vk.api.messages.send({ user_id: message.user.id, message: `[id${message.user.id}|${message.user.tag}], Вам выпал сундук. 🧳 Для того, чтобы открыть его, - [Открыть Сундук].`});
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Игроку [id${message.user.id}|${message.user.tag}] вместе с победой выпал сундук.🧳`})
}  

vk.api.messages.send({user_id: user.id, message: `${`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Победил [id${message.user.id}|${message.user.tag}]!🎉💥💥 И это ${message.user.balance} победа игрока! Посмотреть топ по победам - "Топ".`}`,
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${user.misc.chest >= 1 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})

return message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вы победили!🎉💥💥 И это Ваша ${message.user.balance} победа! Посмотреть топ по победам - "Топ".`,{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})


}
// ------------------------------------------- УСЛОВИЕ ПОБЕДЫ ------------------------------------------ //


if ((check > 32) && (check <= 157)){
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}📢 Вам было нанесено ${damageDealer} HP! Враг получил 2 золота!
${message.user.misc.vamp ? `❣Враг отрегенерировал: ${regen} здоровья` : `👤Ваш ход!`}
${message.user.misc.vamp ? `👤Ваш ход!` : ``}`});
return message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вы нанесли урон: ${damageDealer} HP! Золото + 2 
✏Следующий ход делает [id${user.id}|${user.tag}]
💰Ваше золото: ${message.user.gold}
❤Ваши жизни: ${message.user.heal}
🏹Ваше оружие: ${message.user.misc.weapon}
💔Жизней у соперника: ${user.heal}
${message.user.misc.vamp ? `❣Регенерация: ${regen}` : ``}`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});
}
if ((check > 2) && (check <= 32)){
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}📢 Критический урон! Вам было нанесено ${damageDealer} HP! Враг получил 4 золота!
${message.user.misc.vamp ? `❣Враг отрегенерировал: ${regen} здоровья` : `👤Ваш ход!`}
${message.user.misc.vamp ? `👤Ваш ход!` : ``}`});
return message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}❗Критический урон! Удар составил ${damageDealer} HP! Золото + 4
✏Следующий ход делает [id${user.id}|${user.tag}]
💰Ваше золото: ${message.user.gold}
❤Ваши жизни: ${message.user.heal}
🏹Ваше оружие: ${message.user.misc.weapon}
💔Жизней у соперника: ${user.heal}
${message.user.misc.vamp ? `❣Регенерация: ${regen}` : ``}`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});
}
if ((check == 1) || (check == 2)){
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}📢 Враг промахнулся! 
${message.user.misc.vamp ? `❣Враг отрегенерировал: ${regen} здоровья` : `👤Ваш ход!`}
${message.user.misc.vamp ? `👤Ваш ход!` : ``}`});
return message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Miss!🤡 Удар составил ${damageDealer} HP! Золото + 0
✏Следующий ход делает [id${user.id}|${user.tag}]
💰Ваше золото: ${message.user.gold}
❤Ваши жизни: ${message.user.heal}
🏹Ваше оружие: ${message.user.misc.weapon}
💔Жизней у соперника: ${user.heal}
${message.user.misc.vamp ? `❣Регенерация: ${regen}` : ``}`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});
}
}




//--------------------------------------------------КАСТЕТ-----------------------------------------------//

if (message.user.misc.kastet == 1){              
let user = users.find(x=> x.uid === Number(message.user.biz));                               
var check = utils.random(1, 1);
var damageDealer = 0;
if (message.user.misc.whereiscrit == 0){check = utils.random(1, 102);};
if (message.user.misc.whereiscrit == 1){check = utils.random(1, 112);};
if (message.user.misc.whereiscrit == 2){check = utils.random(1, 132);};
if (message.user.misc.whereiscrit == 3){check = utils.random(1, 157);};

if ((check > 41) && (check <= 157)){
damageDealer = damageDealer + 4;
if (message.user.misc.vamp == 1){regen = Math.round(damageDealer/2)}
if (user.misc.block == 1){regen = Math.round(damageDealer/4)}
if (user.misc.shield == 1){
damageDealer = Math.round((damageDealer/100)*30)
}
user.heal -= damageDealer;
message.user.gold += 4;
message.user.xod = 0;
user.xod = 1;
}
if ((check > 2) && (check <= 40)){
damageDealer += 8;
if (message.user.misc.vamp == 1){regen = Math.round(damageDealer/2)}
if (user.misc.block == 1){regen = Math.round(damageDealer/4)}
user.heal -= damageDealer;
if (user.misc.shield == 1){
damageDealer = Math.round((damageDealer/100)*30)
}
message.user.gold += 6;
message.user.xod = 0;
user.xod = 1;
}
if ((check == 1) || (check == 2)){
if (message.user.misc.vamp == 1){regen = Math.round(damageDealer/2)}
if (user.misc.block == 1){regen = Math.round(damageDealer/4)}
user.heal -= damageDealer;
message.user.gold += 0;
message.user.xod = 0;
user.xod = 1;
}

// ------------------------------------------- УСЛОВИЕ ПОБЕДЫ ------------------------------------------ //
if (user.heal <= 0) {
message.user.Coins += 45; message.send(`+45 коинов. Ваши коины - ${message.user.Coins}`);
user.Coins += 20; vk.api.messages.send({user_id: user.id, message: `+20 коинов. Ваши коины - ${message.user.Coins}`})
if ((message.user.Decency < 5000) && (message.user.DecencyCounter == 3)){
if (mesage.user.Decency > 5000){message.user.Decency = 5000}
message.send(`Ваша порядочность была увеличена на 750. Ваша порядочность - ${message.user.Decency == 5000 ? `😃` : message.user.Decency > 4000 ? `😉` : message.user.Decency > 3000 ? `🙁` : message.user.Decency > 2000  ? `☹` : `😡`} ${message.user.Decency}`)
message.user.Decency += 750; message.user.DecencyCounter = 0;}
if ((user.Decency < 5000) && (user.DecencyCounter == 3)){
if (user.Decency > 5000) {user.Decency = 5000}
vk.api.messages.send({ user_id: user.id, message: `Ваша порядочность была увеличена на 750. Ваша порядочность - ${message.user.Decency == 5000 ? `😃` : message.user.Decency > 4000 ? `😉` : message.user.Decency > 3000 ? `🙁` : message.user.Decency > 2000  ? `☹` : `😡`} ${user.Decency}`});
user.Decency += 750; user.DecencyCounter = 0;}
if (user.DecencyCounter < 3){user.DecencyCounter++}; if (message.user.DecencyCounter <3 ) {message.user.DecencyCounter++}	
message.user.exp += 40; user.exp += 20; let lvlUser = message.user.exp >= 100 ? 2 : message.user.exp >= 170 ? 3 : message.user.exp >= 240 ? 4 :
message.user.exp >= 310 ? 5 : message.user.exp >= 390 ? 6 : message.user.exp >= 470 ? 7 :
message.user.exp >= 530 ? 8 : message.user.exp >= 640 ? 9 : message.user.exp >= 740 ? 10 : 1;
let NewLvl = lvlUser == 1 ? message.user.level.level2-message.user.exp : lvlUser == 2 ? message.user.level.level3-message.user.exp : lvlUser == 3 ? message.user.level.level4-message.user.exp :
lvlUser == 5 ? message.user.level.level6-message.user.exp : lvlUser == 6 ? message.user.level.level7-message.user.exp : lvlUser == 8 ? message.user.level.level9-message.user.exp : 
lvlUser == 9 ? message.user.level.level10-message.user.exp : 'Максимальный уровень.';
message.send(`+40 опыта. Ваш опыт - ${message.user.exp}. Ваш уровень - ${message.user.lvl}. До нового уровня - ${NewLvl} опыта.`)
let lvlUser2 = user.exp >= 100 ? 2 : user.exp >= 170 ? 3 : user.exp >= 240 ? 4 :
user.exp >= 310 ? 5 : user.exp >= 390 ? 6 : user.exp >= 470 ? 7 :
user.exp >= 530 ? 8 : user.exp >= 640 ? 9 : user.exp >= 740 ? 10 : 1;
let NewLvl2 = lvlUser2 == 1 ? user.level.level2-user.exp : lvlUser2 == 2 ? user.level.level3-user.exp : lvlUser2 == 3 ? user.level.level4-user.exp :
lvlUser2 == 5 ? user.level.level6-user.exp : lvlUser2 == 6 ? user.level.level7-user.exp : lvlUser2 == 8 ? user.level.level9-user.exp : 
lvlUser2 == 9 ? user.level.level10-user.exp : 'Максимальный уровень.';
vk.api.messages.send({user_id: user.id, message:`+20 опыта. Ваш опыт - ${user.exp}. Ваш уровень - ${user.lvl}. До нового уровня - ${NewLvl2} опыта.`})
if ((message.user.lvl == 1) && (message.user.exp >= 100)){
message.user.lvl = 2; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 2) && (message.user.exp >=170)){
message.user.lvl = 3; message.send(``)
} if ((message.user.lvl == 3) && (message.user.exp >=240)){
message.user.lvl = 4; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 4) && (messsage.user.exp >=310)){
message.user.lvl = 5; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 5) && (message.user.exp >= 390)){
message.user.lvl = 6; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 6) && (message.user.exp >= 470)){
message.user.lvl = 7; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 7) && (message.user.exp >= 530)){
message.user.lvl = 8; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 8) && (message.user.exp >= 640)){
message.user.lvl = 9; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 9) && (message.user.exp >=740)){
message.user.lvl = 10; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((user.lvl == 1) && (user.exp >= 100)){
user.lvl = 2; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 2) && (user.exp >=170)){
user.lvl = 3; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 3) && (user.exp >=240)){
user.lvl = 4; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 4) && (user.exp >=310)){
user.lvl = 5; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 5) && (user.exp >= 390)){
user.lvl = 6; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 6) && (user.exp >= 470)){
user.lvl = 7; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 7) && (user.exp >= 530)){
user.lvl = 8; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 8) && (user.exp >= 640)){
user.lvl = 9; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 9) && (user.exp >=740)){
user.lvl = 10; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} 
message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вы нанесли ${damageDealer} урона.
❤Ваши жизни: ${message.user.heal}
💔Жизней у соперника: ${user.heal} `)
vk.api.messages.send({ user_id: user.id, message: `Вам было нанесено ${damageDealer} урона.
❤Ваши жизни: ${user.heal}
💔Жизней у соперника: ${message.user.heal}`});
message.user.balance += 1;
message.user.gold = 0; user.gold = 0;
message.user.heal = 4500; user.heal = 4500; 
message.user.misc.areoReturn = 0; user.misc.areoReturn = 0;
message.user.areoReturn = 0; user.areoReturn = 0;
message.user.biz = 0; user.biz = 0;
user.misc.kastet = 0; message.user.misc.kastet = 0; 
user.misc.mech = 0; message.user.misc.mech = 0;
user.misc.sablya = 0; message.user.misc.sablya = 0;
message.user.misc.vizov = 0; user.misc.vizov = 0; 
message.user.xod = 0; user.xod = 0;
message.user.misc.startgame = 0; user.misc.startgame = 0;
message.user.misc.ready = 0; user.misc.ready = 0;
message.user.misc.whereiscrit = 0; user.misc.whereiscrit = 0;
message.user.misc.nasmeshkaLOCK = 0; user.misc.nasmeshkaLOCK = 0;
message.user.misc.weapon = 'Кулак'; user.misc.weapon = 'Кулак';
message.user.misc.yvedomFORshop = 0; user.misc.yvedomFORshop = 0;
message.user.misc.magicTime = 0; user.misc.magicTime = 0;
message.user.misc.magicBlood = 0; user.misc.magicBlood = 0;
message.user.misc.shield = 0; user.misc.shield = 0;
message.user.misc.goMagicBlood = 0; user.misc.goMagicBlood = 0;
message.user.misc.goMagicTime = 0; user.misc.goMagicTime = 0;
message.user.xodLOCK = 0; user.xodLOCK = 0;
message.user.misc.meta = 0; user.misc.meta = 0;
message.user.misc.vamp = 0; user.misc.vamp = 0;
message.user.misc.areo = 0; user.misc.areo = 0;
message.user.misc.nima = 0; user.misc.nima = 0;
message.user.misc.block = 0; user.misc.block = 0;
message.user.misc.metaRest = 0; user.misc.metaRest = 0;
message.user.misc.metaUse = 0; user.misc.metaUse = 0;
message.user.misc.nimaUse = 0; user.misc.nimaUse = 0;
message.user.misc.nimaRest = 0; user.misc.nimaRest = 0;
message.user.misc.nimaSCREAM = 0; user.misc.nimaSCREAM = 0;
message.user.misc.blockUse = 0; user.misc.blockUse = 0;
message.user.misc.areoReady = 0; user.misc.areoReady = 0;
message.user.misc.createAreo = 0; user.misc.createAreo = 0;
message.user.misc.areoAttackReadyForShield = 0; user.misc.areoAttackReadyForShield = 0;
message.user.misc.areoShield = 0; user.misc.areoShield = 0;
message.user.misc.ability = 0; user.misc.ability = 0;
message.user.misc.nasmeshkaNotice = false; user.misc.nasmeshkaNotice = false;
message.user.misc.Dark = 0; user.misc.Dark = 0;
message.user.misc.nimaSCREAMrest = 0; user.misc.nimaSCREAMrest = 0;
message.user.misc.DarkRest = 0; user.misc.DarkRest = 0;
message.user.misc.nimaHaunt = 0; user.misc.nimaHaunt = 0;
message.user.misc.nimaHauntRest = 0; user.misc.nimaHauntRest = 0;
message.user.misc.areoRest = 0; user.misc.areoRest = 0;
message.user.misc.nimaUseHaunt = 0; user.misc.nimaUseHaunt = 0;
message.user.misc.nimaOneTime = 1; user.misc.nimaOneTime = 1;
message.user.misc.areoOneTime = 1; user.misc.areoOneTime = 1;
message.user.misc.areoOneTime2 = 1; user.misc.areoOneTime2 = 1;
message.user.misc.Dark2 = 0; user.misc.Dark2 = 0;
message.user.misc.bloodTime = 0; user.misc.BloodTime = 0;
message.user.misc.nimaCanBeUsed = 0; user.misc.nimaCanBeUsed = 0;
message.user.misc.areoXod = 0; user.misc.areoReturn = 0;
message.user.misc.areoReturn = 0; user.misc.AreoXod = 0;
message.user.misc.goMagicTimeTwo = 0; user.misc.goMagicTimeTwo = 0;
message.user.misc.goMagicBlood = 0; user.misc.goMagicBlood = 0;
message.user.misc.goMagicBloodTwo = 0; user.misc.goMagicBloodTwo = 0;
const chestrandom = utils.random(1, 100);
if (chestrandom <= 20){
message.user.misc.chest++;
vk.api.messages.send({ user_id: message.user.id, message: `[id${message.user.id}|${message.user.tag}], Вам выпал сундук. 🧳 Для того, чтобы открыть его, - [Открыть Сундук].`});
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Игроку [id${message.user.id}|${message.user.tag}] вместе с победой выпал сундук.🧳`})
}

vk.api.messages.send({user_id: user.id, message: `${`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Победил [id${message.user.id}|${message.user.tag}]!🎉💥💥 И это ${message.user.balance} победа игрока! Посмотреть топ по победам - "Топ".`}`,
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${user.misc.chest >= 1 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})

return message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вы победили!🎉💥💥 И это Ваша ${message.user.balance} победа! Посмотреть топ по победам - "Топ".`,{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})

}
// ------------------------------------------- УСЛОВИЕ ПОБЕДЫ ------------------------------------------ //


if ((check > 41) && (check <= 157)){
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}📢 Вам было нанесено ${damageDealer} HP! Враг получил 4 золота!
${message.user.misc.vamp ? `❣Враг отрегенерировал: ${regen} здоровья` : `👤Ваш ход!`}
${message.user.misc.vamp ? `👤Ваш ход!` : ``}`});
return message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вы нанесли урон: ${damageDealer} HP! Золото + 4 
✏Следующий ход делает [id${user.id}|${user.tag}]
💰Ваше золото: ${message.user.gold}
❤Ваши жизни: ${message.user.heal}
🏹Ваше оружие: ${message.user.misc.weapon}
💔Жизней у соперника: ${user.heal}
${message.user.misc.vamp ? `❣Регенерация: ${regen}` : ``}`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});
}
if ((check > 2) && (check <= 40)){
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}📢 Критический урон! Вам было нанесено ${damageDealer} HP! Враг получил 6 золота!
${message.user.misc.vamp ? `❣Враг отрегенерировал: ${regen} здоровья` : `👤Ваш ход!`}
${message.user.misc.vamp ? `👤Ваш ход!` : ``}`});
return message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}❗Критический урон! Удар составил ${damageDealer} HP! Золото + 6
✏Следующий ход делает [id${user.id}|${user.tag}]
💰Ваше золото: ${message.user.gold}
❤Ваши жизни: ${message.user.heal}
🏹Ваше оружие: ${message.user.misc.weapon}
💔Жизней у соперника: ${user.heal}
${message.user.misc.vamp ? `❣Регенерация: ${regen}` : ``}`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});
}
if ((check == 1) || (check == 2)){
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}📢 Враг промахнулся! 
${message.user.misc.vamp ? `❣Враг отрегенерировал: ${regen} здоровья` : `👤Ваш ход!`}
${message.user.misc.vamp ? `👤Ваш ход!` : ``}`});
return message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Miss!🤡 Удар составил ${damageDealer} HP! Золото + 0
✏Следующий ход делает [id${user.id}|${user.tag}]
💰Ваше золото: ${message.user.gold}
❤Ваши жизни: ${message.user.heal}
🏹Ваше оружие: ${message.user.misc.weapon}
💔Жизней у соперника: ${user.heal}
${message.user.misc.vamp ? `❣Регенерация: ${regen}` : ``}`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});
}}




if (message.user.misc.kastet == 2){              
let user = users.find(x=> x.uid === Number(message.user.biz));                               
var check = utils.random(1, 1);
var damageDealer = 0;
if (message.user.misc.whereiscrit == 0){check = utils.random(1, 102);};
if (message.user.misc.whereiscrit == 1){check = utils.random(1, 112);};
if (message.user.misc.whereiscrit == 2){check = utils.random(1, 132);};
if (message.user.misc.whereiscrit == 3){check = utils.random(1, 157);};
if ((check > 55) && (check <= 157)){
damageDealer += 7;
if (message.user.misc.vamp == 1){regen = Math.round(damageDealer/2)}
if (user.misc.block == 1){regen = Math.round(damageDealer/4)}
if (user.misc.shield == 1){
damageDealer = Math.round((damageDealer/100)*30)
}
user.heal -= damageDealer;
message.user.gold += 6;
message.user.xod = 0;
user.xod = 1;
}
if ((check > 2) && (check <=55)){
damageDealer +=14;
if (message.user.misc.vamp == 1){regen = Math.round(damageDealer/2)}
if (user.misc.block == 1){regen = Math.round(damageDealer/4)}
if (user.misc.shield == 1){
damageDealer = Math.round((damageDealer/100)*30)
}
user.heal -= damageDealer;
message.user.gold += 8;
message.user.xod = 0;
user.xod = 1;
}
if ((check == 1) || (check == 2)){
if (message.user.misc.vamp == 1){regen = Math.round(damageDealer/2)}
if (user.misc.block == 1){regen = Math.round(damageDealer/4)}
user.heal -= 0;
message.user.gold += 0;
message.user.xod = 0;
user.xod = 1;
}

// ------------------------------------------- УСЛОВИЕ ПОБЕДЫ ------------------------------------------ //
if (user.heal <= 0) {
message.user.Coins += 45; message.send(`+45 коинов. Ваши коины - ${message.user.Coins}`);
user.Coins += 20; vk.api.messages.send({user_id: user.id, message: `+20 коинов. Ваши коины - ${message.user.Coins}`})
if ((message.user.Decency < 5000) && (message.user.DecencyCounter == 3)){
if (mesage.user.Decency > 5000){message.user.Decency = 5000}
message.send(`Ваша порядочность была увеличена на 750. Ваша порядочность - ${message.user.Decency == 5000 ? `😃` : message.user.Decency > 4000 ? `😉` : message.user.Decency > 3000 ? `🙁` : message.user.Decency > 2000  ? `☹` : `😡`} ${message.user.Decency}`)
message.user.Decency += 750; message.user.DecencyCounter = 0;}
if ((user.Decency < 5000) && (user.DecencyCounter == 3)){
if (user.Decency > 5000) {user.Decency = 5000}
vk.api.messages.send({ user_id: user.id, message: `Ваша порядочность была увеличена на 750. Ваша порядочность - ${message.user.Decency == 5000 ? `😃` : message.user.Decency > 4000 ? `😉` : message.user.Decency > 3000 ? `🙁` : message.user.Decency > 2000  ? `☹` : `😡`} ${user.Decency}`});
user.Decency += 750; user.DecencyCounter = 0;}
if (user.DecencyCounter < 3){user.DecencyCounter++}; if (message.user.DecencyCounter <3 ) {message.user.DecencyCounter++}	
message.user.exp += 40; user.exp += 20; let lvlUser = message.user.exp >= 100 ? 2 : message.user.exp >= 170 ? 3 : message.user.exp >= 240 ? 4 :
message.user.exp >= 310 ? 5 : message.user.exp >= 390 ? 6 : message.user.exp >= 470 ? 7 :
message.user.exp >= 530 ? 8 : message.user.exp >= 640 ? 9 : message.user.exp >= 740 ? 10 : 1;
let NewLvl = lvlUser == 1 ? message.user.level.level2-message.user.exp : lvlUser == 2 ? message.user.level.level3-message.user.exp : lvlUser == 3 ? message.user.level.level4-message.user.exp :
lvlUser == 5 ? message.user.level.level6-message.user.exp : lvlUser == 6 ? message.user.level.level7-message.user.exp : lvlUser == 8 ? message.user.level.level9-message.user.exp : 
lvlUser == 9 ? message.user.level.level10-message.user.exp : 'Максимальный уровень.';
message.send(`+40 опыта. Ваш опыт - ${message.user.exp}. Ваш уровень - ${message.user.lvl}. До нового уровня - ${NewLvl} опыта.`)
let lvlUser2 = user.exp >= 100 ? 2 : user.exp >= 170 ? 3 : user.exp >= 240 ? 4 :
user.exp >= 310 ? 5 : user.exp >= 390 ? 6 : user.exp >= 470 ? 7 :
user.exp >= 530 ? 8 : user.exp >= 640 ? 9 : user.exp >= 740 ? 10 : 1;
let NewLvl2 = lvlUser2 == 1 ? user.level.level2-user.exp : lvlUser2 == 2 ? user.level.level3-user.exp : lvlUser2 == 3 ? user.level.level4-user.exp :
lvlUser2 == 5 ? user.level.level6-user.exp : lvlUser2 == 6 ? user.level.level7-user.exp : lvlUser2 == 8 ? user.level.level9-user.exp : 
lvlUser2 == 9 ? user.level.level10-user.exp : 'Максимальный уровень.';
vk.api.messages.send({user_id: user.id, message:`+20 опыта. Ваш опыт - ${user.exp}. Ваш уровень - ${user.lvl}. До нового уровня - ${NewLvl2} опыта.`})
if ((message.user.lvl == 1) && (message.user.exp >= 100)){
message.user.lvl = 2; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 2) && (message.user.exp >=170)){
message.user.lvl = 3; message.send(``)
} if ((message.user.lvl == 3) && (message.user.exp >=240)){
message.user.lvl = 4; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 4) && (messsage.user.exp >=310)){
message.user.lvl = 5; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 5) && (message.user.exp >= 390)){
message.user.lvl = 6; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 6) && (message.user.exp >= 470)){
message.user.lvl = 7; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 7) && (message.user.exp >= 530)){
message.user.lvl = 8; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 8) && (message.user.exp >= 640)){
message.user.lvl = 9; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 9) && (message.user.exp >=740)){
message.user.lvl = 10; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((user.lvl == 1) && (user.exp >= 100)){
user.lvl = 2; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 2) && (user.exp >=170)){
user.lvl = 3; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 3) && (user.exp >=240)){
user.lvl = 4; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 4) && (user.exp >=310)){
user.lvl = 5; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 5) && (user.exp >= 390)){
user.lvl = 6; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 6) && (user.exp >= 470)){
user.lvl = 7; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 7) && (user.exp >= 530)){
user.lvl = 8; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 8) && (user.exp >= 640)){
user.lvl = 9; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 9) && (user.exp >=740)){
user.lvl = 10; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} 
message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вы нанесли ${damageDealer} урона.
❤Ваши жизни: ${message.user.heal}
💔Жизней у соперника: ${user.heal} `)
vk.api.messages.send({ user_id: user.id, message: `Вам было нанесено ${damageDealer} урона.
❤Ваши жизни: ${user.heal}
💔Жизней у соперника: ${message.user.heal}`});
message.user.balance += 1;
message.user.gold = 0; user.gold = 0;
message.user.heal = 4500; user.heal = 4500; 
message.user.misc.areoReturn = 0; user.misc.areoReturn = 0;
message.user.areoReturn = 0; user.areoReturn = 0;
message.user.biz = 0; user.biz = 0;
user.misc.kastet = 0; message.user.misc.kastet = 0; 
user.misc.mech = 0; message.user.misc.mech = 0;
user.misc.sablya = 0; message.user.misc.sablya = 0;
message.user.misc.vizov = 0; user.misc.vizov = 0; 
message.user.xod = 0; user.xod = 0;
message.user.misc.startgame = 0; user.misc.startgame = 0;
message.user.misc.ready = 0; user.misc.ready = 0;
message.user.misc.whereiscrit = 0; user.misc.whereiscrit = 0;
message.user.misc.nasmeshkaLOCK = 0; user.misc.nasmeshkaLOCK = 0;
message.user.misc.weapon = 'Кулак'; user.misc.weapon = 'Кулак';
message.user.misc.yvedomFORshop = 0; user.misc.yvedomFORshop = 0;
message.user.misc.magicTime = 0; user.misc.magicTime = 0;
message.user.misc.magicBlood = 0; user.misc.magicBlood = 0;
message.user.misc.shield = 0; user.misc.shield = 0;
message.user.misc.goMagicBlood = 0; user.misc.goMagicBlood = 0;
message.user.misc.goMagicTime = 0; user.misc.goMagicTime = 0;
message.user.xodLOCK = 0; user.xodLOCK = 0;
message.user.misc.meta = 0; user.misc.meta = 0;
message.user.misc.vamp = 0; user.misc.vamp = 0;
message.user.misc.areo = 0; user.misc.areo = 0;
message.user.misc.nima = 0; user.misc.nima = 0;
message.user.misc.block = 0; user.misc.block = 0;
message.user.misc.metaRest = 0; user.misc.metaRest = 0;
message.user.misc.metaUse = 0; user.misc.metaUse = 0;
message.user.misc.nimaUse = 0; user.misc.nimaUse = 0;
message.user.misc.nimaRest = 0; user.misc.nimaRest = 0;
message.user.misc.nimaSCREAM = 0; user.misc.nimaSCREAM = 0;
message.user.misc.blockUse = 0; user.misc.blockUse = 0;
message.user.misc.areoReady = 0; user.misc.areoReady = 0;
message.user.misc.createAreo = 0; user.misc.createAreo = 0;
message.user.misc.areoAttackReadyForShield = 0; user.misc.areoAttackReadyForShield = 0;
message.user.misc.areoShield = 0; user.misc.areoShield = 0;
message.user.misc.ability = 0; user.misc.ability = 0;
message.user.misc.nasmeshkaNotice = false; user.misc.nasmeshkaNotice = false;
message.user.misc.Dark = 0; user.misc.Dark = 0;
message.user.misc.nimaSCREAMrest = 0; user.misc.nimaSCREAMrest = 0;
message.user.misc.DarkRest = 0; user.misc.DarkRest = 0;
message.user.misc.nimaHaunt = 0; user.misc.nimaHaunt = 0;
message.user.misc.nimaHauntRest = 0; user.misc.nimaHauntRest = 0;
message.user.misc.areoRest = 0; user.misc.areoRest = 0;
message.user.misc.nimaUseHaunt = 0; user.misc.nimaUseHaunt = 0;
message.user.misc.nimaOneTime = 1; user.misc.nimaOneTime = 1;
message.user.misc.areoOneTime = 1; user.misc.areoOneTime = 1;
message.user.misc.areoOneTime2 = 1; user.misc.areoOneTime2 = 1;
message.user.misc.Dark2 = 0; user.misc.Dark2 = 0;
message.user.misc.bloodTime = 0; user.misc.BloodTime = 0;
message.user.misc.nimaCanBeUsed = 0; user.misc.nimaCanBeUsed = 0;
message.user.misc.areoXod = 0; user.misc.areoReturn = 0;
message.user.misc.areoReturn = 0; user.misc.AreoXod = 0;
message.user.misc.goMagicTimeTwo = 0; user.misc.goMagicTimeTwo = 0;
message.user.misc.goMagicBlood = 0; user.misc.goMagicBlood = 0;
message.user.misc.goMagicBloodTwo = 0; user.misc.goMagicBloodTwo = 0;
const chestrandom = utils.random(1, 100);
if (chestrandom <= 20){
message.user.misc.chest++;
vk.api.messages.send({ user_id: message.user.id, message: `[id${message.user.id}|${message.user.tag}], Вам выпал сундук. 🧳 Для того, чтобы открыть его, - [Открыть Сундук].`});
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Игроку [id${message.user.id}|${message.user.tag}] вместе с победой выпал сундук.🧳`})
}

vk.api.messages.send({user_id: user.id, message: `${`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Победил [id${message.user.id}|${message.user.tag}]!🎉💥💥 И это ${message.user.balance} победа игрока! Посмотреть топ по победам - "Топ".`}`,
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${user.misc.chest >= 1 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
return message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вы победили!🎉💥💥 И это Ваша ${message.user.balance} победа! Посмотреть топ по победам - "Топ".`,{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})

}
// ------------------------------------------- УСЛОВИЕ ПОБЕДЫ ------------------------------------------ //

if ((check > 55) && (check <= 157)){
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}📢 Вам было нанесено ${damageDealer} HP! Враг получил 6 золота!
${message.user.misc.vamp ? `❣Враг отрегенерировал: ${regen} здоровья` : `👤Ваш ход!`}
${message.user.misc.vamp ? `👤Ваш ход!` : ``}`});
return message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вы нанесли урон: ${damageDealer} HP! Золото + 6 
✏Следующий ход делает [id${user.id}|${user.tag}]
💰Ваше золото: ${message.user.gold}
❤Ваши жизни: ${message.user.heal}
🏹Ваше оружие: ${message.user.misc.weapon}
💔Жизней у соперника: ${user.heal}
${message.user.misc.vamp ? `❣Регенерация: ${regen}` : ``}`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});
}
if ((check > 2) && (check <= 55)){
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}📢 Критический урон! Вам было нанесено ${damageDealer} HP! Враг получил 8 золота!
${message.user.misc.vamp ? `❣Враг отрегенерировал: ${regen} здоровья` : `👤Ваш ход!`}
${message.user.misc.vamp ? `👤Ваш ход!` : ``}`});
return message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}❗Критический урон! Удар составил ${damageDealer} HP! Золото + 8
✏Следующий ход делает [id${user.id}|${user.tag}]
💰Ваше золото: ${message.user.gold}
❤Ваши жизни: ${message.user.heal}
🏹Ваше оружие: ${message.user.misc.weapon}
💔Жизней у соперника: ${user.heal}
${message.user.misc.vamp ? `❣Регенерация: ${regen}` : ``}`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});
}
if ((check == 1) || (check == 2)){
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}📢 Враг промахнулся! 
${message.user.misc.vamp ? `❣Враг отрегенерировал: ${regen} здоровья` : `👤Ваш ход!`}
${message.user.misc.vamp ? `👤Ваш ход!` : ``}`});
return message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Miss!🤡 Удар составил ${damageDealer} HP! Золото + 0
✏Следующий ход делает [id${user.id}|${user.tag}]
💰Ваше золото: ${message.user.gold}
❤Ваши жизни: ${message.user.heal}
🏹Ваше оружие: ${message.user.misc.weapon}
💔Жизней у соперника: ${user.heal}
${message.user.misc.vamp ? `❣Регенерация: ${regen}` : ``}`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});
}}




if (message.user.misc.kastet == 3){              
let user = users.find(x=> x.uid === Number(message.user.biz));                               
var check = utils.random(1, 1);
var damageDealer = 0;
if (message.user.misc.whereiscrit == 0){check = utils.random(1, 102);};
if (message.user.misc.whereiscrit == 1){check = utils.random(1, 112);};
if (message.user.misc.whereiscrit == 2){check = utils.random(1, 132);};
if (message.user.misc.whereiscrit == 3){check = utils.random(1, 157);};

if ((check > 75) && (check <= 157)){
damageDealer += 10;
if (message.user.misc.vamp == 1){regen = Math.round(damageDealer/2)}
if (user.misc.block == 1){regen = Math.round(damageDealer/4)}
if (user.misc.shield == 1){
damageDealer = Math.round((damageDealer/100)*30)
}
user.heal -= damageDealer;
message.user.gold += 8;
message.user.xod = 0;
user.xod = 1;
}
if ((check > 2) && (check <=75)){
damageDealer += 20;
if (message.user.misc.vamp == 1){regen = Math.round(damageDealer/2)}
if (user.misc.block == 1){regen = Math.round(damageDealer/4)}
if (user.misc.shield == 1){
damageDealer = Math.round((damageDealer/100)*30)
}
user.heal -= damageDealer;
message.user.gold += 10;
message.user.xod = 0;
user.xod = 1;
}
if ((check == 1) || (check == 2)){
if (message.user.misc.vamp == 1){regen = Math.round(damageDealer/2)}
if (user.misc.block == 1){regen = Math.round(damageDealer/4)}
user.heal -= 0;
message.user.gold += 0;
message.user.xod = 0;
user.xod = 1;
}

// ------------------------------------------- УСЛОВИЕ ПОБЕДЫ ------------------------------------------ //
if (user.heal <= 0) {
message.user.Coins += 45; message.send(`+45 коинов. Ваши коины - ${message.user.Coins}`);
user.Coins += 20; vk.api.messages.send({user_id: user.id, message: `+20 коинов. Ваши коины - ${message.user.Coins}`})
if ((message.user.Decency < 5000) && (message.user.DecencyCounter == 3)){
if (mesage.user.Decency > 5000){message.user.Decency = 5000}
message.send(`Ваша порядочность была увеличена на 750. Ваша порядочность - ${message.user.Decency == 5000 ? `😃` : message.user.Decency > 4000 ? `😉` : message.user.Decency > 3000 ? `🙁` : message.user.Decency > 2000  ? `☹` : `😡`} ${message.user.Decency}`)
message.user.Decency += 750; message.user.DecencyCounter = 0;}
if ((user.Decency < 5000) && (user.DecencyCounter == 3)){
if (user.Decency > 5000) {user.Decency = 5000}
vk.api.messages.send({ user_id: user.id, message: `Ваша порядочность была увеличена на 750. Ваша порядочность - ${message.user.Decency == 5000 ? `😃` : message.user.Decency > 4000 ? `😉` : message.user.Decency > 3000 ? `🙁` : message.user.Decency > 2000  ? `☹` : `😡`} ${user.Decency}`});
user.Decency += 750; user.DecencyCounter = 0;}
if (user.DecencyCounter < 3){user.DecencyCounter++}; if (message.user.DecencyCounter <3 ) {message.user.DecencyCounter++}	
message.user.exp += 40; user.exp += 20; let lvlUser = message.user.exp >= 100 ? 2 : message.user.exp >= 170 ? 3 : message.user.exp >= 240 ? 4 :
message.user.exp >= 310 ? 5 : message.user.exp >= 390 ? 6 : message.user.exp >= 470 ? 7 :
message.user.exp >= 530 ? 8 : message.user.exp >= 640 ? 9 : message.user.exp >= 740 ? 10 : 1;
let NewLvl = lvlUser == 1 ? message.user.level.level2-message.user.exp : lvlUser == 2 ? message.user.level.level3-message.user.exp : lvlUser == 3 ? message.user.level.level4-message.user.exp :
lvlUser == 5 ? message.user.level.level6-message.user.exp : lvlUser == 6 ? message.user.level.level7-message.user.exp : lvlUser == 8 ? message.user.level.level9-message.user.exp : 
lvlUser == 9 ? message.user.level.level10-message.user.exp : 'Максимальный уровень.';
message.send(`+40 опыта. Ваш опыт - ${message.user.exp}. Ваш уровень - ${message.user.lvl}. До нового уровня - ${NewLvl} опыта.`)
let lvlUser2 = user.exp >= 100 ? 2 : user.exp >= 170 ? 3 : user.exp >= 240 ? 4 :
user.exp >= 310 ? 5 : user.exp >= 390 ? 6 : user.exp >= 470 ? 7 :
user.exp >= 530 ? 8 : user.exp >= 640 ? 9 : user.exp >= 740 ? 10 : 1;
let NewLvl2 = lvlUser2 == 1 ? user.level.level2-user.exp : lvlUser2 == 2 ? user.level.level3-user.exp : lvlUser2 == 3 ? user.level.level4-user.exp :
lvlUser2 == 5 ? user.level.level6-user.exp : lvlUser2 == 6 ? user.level.level7-user.exp : lvlUser2 == 8 ? user.level.level9-user.exp : 
lvlUser2 == 9 ? user.level.level10-user.exp : 'Максимальный уровень.';
vk.api.messages.send({user_id: user.id, message:`+20 опыта. Ваш опыт - ${user.exp}. Ваш уровень - ${user.lvl}. До нового уровня - ${NewLvl2} опыта.`})
if ((message.user.lvl == 1) && (message.user.exp >= 100)){
message.user.lvl = 2; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 2) && (message.user.exp >=170)){
message.user.lvl = 3; message.send(``)
} if ((message.user.lvl == 3) && (message.user.exp >=240)){
message.user.lvl = 4; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 4) && (messsage.user.exp >=310)){
message.user.lvl = 5; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 5) && (message.user.exp >= 390)){
message.user.lvl = 6; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 6) && (message.user.exp >= 470)){
message.user.lvl = 7; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 7) && (message.user.exp >= 530)){
message.user.lvl = 8; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 8) && (message.user.exp >= 640)){
message.user.lvl = 9; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 9) && (message.user.exp >=740)){
message.user.lvl = 10; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((user.lvl == 1) && (user.exp >= 100)){
user.lvl = 2; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 2) && (user.exp >=170)){
user.lvl = 3; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 3) && (user.exp >=240)){
user.lvl = 4; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 4) && (user.exp >=310)){
user.lvl = 5; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 5) && (user.exp >= 390)){
user.lvl = 6; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 6) && (user.exp >= 470)){
user.lvl = 7; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 7) && (user.exp >= 530)){
user.lvl = 8; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 8) && (user.exp >= 640)){
user.lvl = 9; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 9) && (user.exp >=740)){
user.lvl = 10; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} 
message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вы нанесли ${damageDealer} урона.
❤Ваши жизни: ${message.user.heal}
💔Жизней у соперника: ${user.heal} `)
vk.api.messages.send({ user_id: user.id, message: `Вам было нанесено ${damageDealer} урона.
❤Ваши жизни: ${user.heal}
💔Жизней у соперника: ${message.user.heal}`});
message.user.balance += 1;
message.user.gold = 0; user.gold = 0;
message.user.heal = 4500; user.heal = 4500; 
message.user.misc.areoReturn = 0; user.misc.areoReturn = 0;
message.user.areoReturn = 0; user.areoReturn = 0;
message.user.biz = 0; user.biz = 0;
user.misc.kastet = 0; message.user.misc.kastet = 0; 
user.misc.mech = 0; message.user.misc.mech = 0;
user.misc.sablya = 0; message.user.misc.sablya = 0;
message.user.misc.vizov = 0; user.misc.vizov = 0; 
message.user.xod = 0; user.xod = 0;
message.user.misc.startgame = 0; user.misc.startgame = 0;
message.user.misc.ready = 0; user.misc.ready = 0;
message.user.misc.whereiscrit = 0; user.misc.whereiscrit = 0;
message.user.misc.nasmeshkaLOCK = 0; user.misc.nasmeshkaLOCK = 0;
message.user.misc.weapon = 'Кулак'; user.misc.weapon = 'Кулак';
message.user.misc.yvedomFORshop = 0; user.misc.yvedomFORshop = 0;
message.user.misc.magicTime = 0; user.misc.magicTime = 0;
message.user.misc.magicBlood = 0; user.misc.magicBlood = 0;
message.user.misc.shield = 0; user.misc.shield = 0;
message.user.misc.goMagicBlood = 0; user.misc.goMagicBlood = 0;
message.user.misc.goMagicTime = 0; user.misc.goMagicTime = 0;
message.user.xodLOCK = 0; user.xodLOCK = 0;
message.user.misc.meta = 0; user.misc.meta = 0;
message.user.misc.vamp = 0; user.misc.vamp = 0;
message.user.misc.areo = 0; user.misc.areo = 0;
message.user.misc.nima = 0; user.misc.nima = 0;
message.user.misc.block = 0; user.misc.block = 0;
message.user.misc.metaRest = 0; user.misc.metaRest = 0;
message.user.misc.metaUse = 0; user.misc.metaUse = 0;
message.user.misc.nimaUse = 0; user.misc.nimaUse = 0;
message.user.misc.nimaRest = 0; user.misc.nimaRest = 0;
message.user.misc.nimaSCREAM = 0; user.misc.nimaSCREAM = 0;
message.user.misc.blockUse = 0; user.misc.blockUse = 0;
message.user.misc.areoReady = 0; user.misc.areoReady = 0;
message.user.misc.createAreo = 0; user.misc.createAreo = 0;
message.user.misc.areoAttackReadyForShield = 0; user.misc.areoAttackReadyForShield = 0;
message.user.misc.areoShield = 0; user.misc.areoShield = 0;
message.user.misc.ability = 0; user.misc.ability = 0;
message.user.misc.nasmeshkaNotice = false; user.misc.nasmeshkaNotice = false;
message.user.misc.Dark = 0; user.misc.Dark = 0;
message.user.misc.nimaSCREAMrest = 0; user.misc.nimaSCREAMrest = 0;
message.user.misc.DarkRest = 0; user.misc.DarkRest = 0;
message.user.misc.nimaHaunt = 0; user.misc.nimaHaunt = 0;
message.user.misc.nimaHauntRest = 0; user.misc.nimaHauntRest = 0;
message.user.misc.areoRest = 0; user.misc.areoRest = 0;
message.user.misc.nimaUseHaunt = 0; user.misc.nimaUseHaunt = 0;
message.user.misc.nimaOneTime = 1; user.misc.nimaOneTime = 1;
message.user.misc.areoOneTime = 1; user.misc.areoOneTime = 1;
message.user.misc.areoOneTime2 = 1; user.misc.areoOneTime2 = 1;
message.user.misc.Dark2 = 0; user.misc.Dark2 = 0;
message.user.misc.bloodTime = 0; user.misc.BloodTime = 0;
message.user.misc.nimaCanBeUsed = 0; user.misc.nimaCanBeUsed = 0;
message.user.misc.areoXod = 0; user.misc.areoReturn = 0;
message.user.misc.areoReturn = 0; user.misc.AreoXod = 0;
message.user.misc.goMagicTimeTwo = 0; user.misc.goMagicTimeTwo = 0;
message.user.misc.goMagicBlood = 0; user.misc.goMagicBlood = 0;
message.user.misc.goMagicBloodTwo = 0; user.misc.goMagicBloodTwo = 0;
const chestrandom = utils.random(1, 100);
if (chestrandom <= 20){
message.user.misc.chest++;
vk.api.messages.send({ user_id: message.user.id, message: `[id${message.user.id}|${message.user.tag}], Вам выпал сундук. 🧳 Для того, чтобы открыть его, - [Открыть Сундук].`});
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Игроку [id${message.user.id}|${message.user.tag}] вместе с победой выпал сундук.🧳`})
}

vk.api.messages.send({user_id: user.id, message: `${`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Победил [id${message.user.id}|${message.user.tag}]!🎉💥💥 И это ${message.user.balance} победа игрока! Посмотреть топ по победам - "Топ".`}`,
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${user.misc.chest >= 1 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
return message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вы победили!🎉💥💥 И это Ваша ${message.user.balance} победа! Посмотреть топ по победам - "Топ".`,{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})

}
// ------------------------------------------- УСЛОВИЕ ПОБЕДЫ ------------------------------------------ //


if ((check > 75) && (check <= 157)){
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}📢 Вам было нанесено ${damageDealer} HP! Враг получил 8 золота!
${message.user.misc.vamp ? `❣Враг отрегенерировал: ${regen} здоровья` : `👤Ваш ход!`}
${message.user.misc.vamp ? `👤Ваш ход!` : ``}`});
return message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вы нанесли урон: ${damageDealer} HP! Золото + 8
✏Следующий ход делает [id${user.id}|${user.tag}]
💰Ваше золото: ${message.user.gold}
❤Ваши жизни: ${message.user.heal}
🏹Ваше оружие: ${message.user.misc.weapon}
💔Жизней у соперника: ${user.heal}
${message.user.misc.vamp ? `❣Регенерация: ${regen}` : ``}`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});
}
if ((check > 2) && (check <= 75)){
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}📢 Критический урон! Вам было нанесено ${damageDealer} HP! Враг получил 10 золота!
${message.user.misc.vamp ? `❣Враг отрегенерировал: ${regen} здоровья` : `👤Ваш ход!`}
${message.user.misc.vamp ? `👤Ваш ход!` : ``}`});
return message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}❗Критический урон! Удар составил ${damageDealer} HP! Золото + 10
✏Следующий ход делает [id${user.id}|${user.tag}]
💰Ваше золото: ${message.user.gold}
❤Ваши жизни: ${message.user.heal}
🏹Ваше оружие: ${message.user.misc.weapon}
💔Жизней у соперника: ${user.heal}
${message.user.misc.vamp ? `❣Регенерация: ${regen}` : ``}`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});
}
if ((check == 1) || (check == 2)){
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}📢 Враг промахнулся! 
${message.user.misc.vamp ? `❣Враг отрегенерировал: ${regen} здоровья` : `👤Ваш ход!`}
${message.user.misc.vamp ? `👤Ваш ход!` : ``}`});
return message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Miss!🤡 Удар составил ${damageDealer} HP! Золото + 0
✏Следующий ход делает [id${user.id}|${user.tag}]
💰Ваше золото: ${message.user.gold}
❤Ваши жизни: ${message.user.heal}
🏹Ваше оружие: ${message.user.misc.weapon}
💔Жизней у соперника: ${user.heal}
${message.user.misc.vamp ? `❣Регенерация: ${regen}` : ``}`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});
}}
//--------------------------------------------------КАСТЕТ-----------------------------------------------//








//--------------------------------------------------МЕЧ-----------------------------------------------//
if (message.user.misc.mech == 1){              
let user = users.find(x=> x.uid === Number(message.user.biz));                               
var check = utils.random(1, 1);
var damageDealer = 0
if (message.user.misc.whereiscrit == 0){check = utils.random(1, 102);};
if (message.user.misc.whereiscrit == 1){check = utils.random(1, 112);};
if (message.user.misc.whereiscrit == 2){check = utils.random(1, 132);};
if (message.user.misc.whereiscrit == 3){check = utils.random(1, 157);};
if ((check > 30) && (check <= 157)){
damageDealer += 6;
if (message.user.misc.vamp == 1){regen = Math.round(damageDealer/2)}
if (user.misc.block == 1){regen = Math.round(damageDealer/4)}
if (user.misc.shield == 1){
damageDealer = Math.round((damageDealer/100)*30)
}
user.heal -= damageDealer;
message.user.gold += 6;
message.user.xod = 0;
user.xod = 1;
}
if ((check >= 1) && (check <=30)){
damageDealer += 12;
if (message.user.misc.vamp == 1){regen = Math.round(damageDealer/2)}
if (user.misc.block == 1){regen = Math.round(damageDealer/4)}
if (user.misc.shield == 1){
damageDealer = Math.round((damageDealer/100)*30)
}
user.heal -= damageDealer;
message.user.gold += 8;
message.user.xod = 0;
user.xod = 1;
}

// ------------------------------------------- УСЛОВИЕ ПОБЕДЫ ------------------------------------------ //
if (user.heal <= 0) {
message.user.Coins += 45; message.send(`+45 коинов. Ваши коины - ${message.user.Coins}`);
user.Coins += 20; vk.api.messages.send({user_id: user.id, message: `+20 коинов. Ваши коины - ${message.user.Coins}`})
if ((message.user.Decency < 5000) && (message.user.DecencyCounter == 3)){
if (mesage.user.Decency > 5000){message.user.Decency = 5000}
message.send(`Ваша порядочность была увеличена на 750. Ваша порядочность - ${message.user.Decency == 5000 ? `😃` : message.user.Decency > 4000 ? `😉` : message.user.Decency > 3000 ? `🙁` : message.user.Decency > 2000  ? `☹` : `😡`} ${message.user.Decency}`)
message.user.Decency += 750; message.user.DecencyCounter = 0;}
if ((user.Decency < 5000) && (user.DecencyCounter == 3)){
if (user.Decency > 5000) {user.Decency = 5000}
vk.api.messages.send({ user_id: user.id, message: `Ваша порядочность была увеличена на 750. Ваша порядочность - ${message.user.Decency == 5000 ? `😃` : message.user.Decency > 4000 ? `😉` : message.user.Decency > 3000 ? `🙁` : message.user.Decency > 2000  ? `☹` : `😡`} ${user.Decency}`});
user.Decency += 750; user.DecencyCounter = 0;}
if (user.DecencyCounter < 3){user.DecencyCounter++}; if (message.user.DecencyCounter <3 ) {message.user.DecencyCounter++}	
message.user.exp += 40; user.exp += 20; let lvlUser = message.user.exp >= 100 ? 2 : message.user.exp >= 170 ? 3 : message.user.exp >= 240 ? 4 :
message.user.exp >= 310 ? 5 : message.user.exp >= 390 ? 6 : message.user.exp >= 470 ? 7 :
message.user.exp >= 530 ? 8 : message.user.exp >= 640 ? 9 : message.user.exp >= 740 ? 10 : 1;
let NewLvl = lvlUser == 1 ? message.user.level.level2-message.user.exp : lvlUser == 2 ? message.user.level.level3-message.user.exp : lvlUser == 3 ? message.user.level.level4-message.user.exp :
lvlUser == 5 ? message.user.level.level6-message.user.exp : lvlUser == 6 ? message.user.level.level7-message.user.exp : lvlUser == 8 ? message.user.level.level9-message.user.exp : 
lvlUser == 9 ? message.user.level.level10-message.user.exp : 'Максимальный уровень.';
message.send(`+40 опыта. Ваш опыт - ${message.user.exp}. Ваш уровень - ${message.user.lvl}. До нового уровня - ${NewLvl} опыта.`)
let lvlUser2 = user.exp >= 100 ? 2 : user.exp >= 170 ? 3 : user.exp >= 240 ? 4 :
user.exp >= 310 ? 5 : user.exp >= 390 ? 6 : user.exp >= 470 ? 7 :
user.exp >= 530 ? 8 : user.exp >= 640 ? 9 : user.exp >= 740 ? 10 : 1;
let NewLvl2 = lvlUser2 == 1 ? user.level.level2-user.exp : lvlUser2 == 2 ? user.level.level3-user.exp : lvlUser2 == 3 ? user.level.level4-user.exp :
lvlUser2 == 5 ? user.level.level6-user.exp : lvlUser2 == 6 ? user.level.level7-user.exp : lvlUser2 == 8 ? user.level.level9-user.exp : 
lvlUser2 == 9 ? user.level.level10-user.exp : 'Максимальный уровень.';
vk.api.messages.send({user_id: user.id, message:`+20 опыта. Ваш опыт - ${user.exp}. Ваш уровень - ${user.lvl}. До нового уровня - ${NewLvl2} опыта.`})
if ((message.user.lvl == 1) && (message.user.exp >= 100)){
message.user.lvl = 2; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 2) && (message.user.exp >=170)){
message.user.lvl = 3; message.send(``)
} if ((message.user.lvl == 3) && (message.user.exp >=240)){
message.user.lvl = 4; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 4) && (messsage.user.exp >=310)){
message.user.lvl = 5; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 5) && (message.user.exp >= 390)){
message.user.lvl = 6; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 6) && (message.user.exp >= 470)){
message.user.lvl = 7; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 7) && (message.user.exp >= 530)){
message.user.lvl = 8; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 8) && (message.user.exp >= 640)){
message.user.lvl = 9; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 9) && (message.user.exp >=740)){
message.user.lvl = 10; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((user.lvl == 1) && (user.exp >= 100)){
user.lvl = 2; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 2) && (user.exp >=170)){
user.lvl = 3; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 3) && (user.exp >=240)){
user.lvl = 4; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 4) && (user.exp >=310)){
user.lvl = 5; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 5) && (user.exp >= 390)){
user.lvl = 6; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 6) && (user.exp >= 470)){
user.lvl = 7; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 7) && (user.exp >= 530)){
user.lvl = 8; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 8) && (user.exp >= 640)){
user.lvl = 9; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 9) && (user.exp >=740)){
user.lvl = 10; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} 
message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вы нанесли ${damageDealer} урона.
❤Ваши жизни: ${message.user.heal}
💔Жизней у соперника: ${user.heal} `)
vk.api.messages.send({ user_id: user.id, message: `Вам было нанесено ${damageDealer} урона.
❤Ваши жизни: ${user.heal}
💔Жизней у соперника: ${message.user.heal}`});
message.user.balance += 1;
message.user.gold = 0; user.gold = 0;
message.user.heal = 4500; user.heal = 4500; 
message.user.misc.areoReturn = 0; user.misc.areoReturn = 0;
message.user.areoReturn = 0; user.areoReturn = 0;
message.user.biz = 0; user.biz = 0;
user.misc.kastet = 0; message.user.misc.kastet = 0; 
user.misc.mech = 0; message.user.misc.mech = 0;
user.misc.sablya = 0; message.user.misc.sablya = 0;
message.user.misc.vizov = 0; user.misc.vizov = 0; 
message.user.xod = 0; user.xod = 0;
message.user.misc.startgame = 0; user.misc.startgame = 0;
message.user.misc.ready = 0; user.misc.ready = 0;
message.user.misc.whereiscrit = 0; user.misc.whereiscrit = 0;
message.user.misc.nasmeshkaLOCK = 0; user.misc.nasmeshkaLOCK = 0;
message.user.misc.weapon = 'Кулак'; user.misc.weapon = 'Кулак';
message.user.misc.yvedomFORshop = 0; user.misc.yvedomFORshop = 0;
message.user.misc.magicTime = 0; user.misc.magicTime = 0;
message.user.misc.magicBlood = 0; user.misc.magicBlood = 0;
message.user.misc.shield = 0; user.misc.shield = 0;
message.user.misc.goMagicBlood = 0; user.misc.goMagicBlood = 0;
message.user.misc.goMagicTime = 0; user.misc.goMagicTime = 0;
message.user.xodLOCK = 0; user.xodLOCK = 0;
message.user.misc.meta = 0; user.misc.meta = 0;
message.user.misc.vamp = 0; user.misc.vamp = 0;
message.user.misc.areo = 0; user.misc.areo = 0;
message.user.misc.nima = 0; user.misc.nima = 0;
message.user.misc.block = 0; user.misc.block = 0;
message.user.misc.metaRest = 0; user.misc.metaRest = 0;
message.user.misc.metaUse = 0; user.misc.metaUse = 0;
message.user.misc.nimaUse = 0; user.misc.nimaUse = 0;
message.user.misc.nimaRest = 0; user.misc.nimaRest = 0;
message.user.misc.nimaSCREAM = 0; user.misc.nimaSCREAM = 0;
message.user.misc.blockUse = 0; user.misc.blockUse = 0;
message.user.misc.areoReady = 0; user.misc.areoReady = 0;
message.user.misc.createAreo = 0; user.misc.createAreo = 0;
message.user.misc.areoAttackReadyForShield = 0; user.misc.areoAttackReadyForShield = 0;
message.user.misc.areoShield = 0; user.misc.areoShield = 0;
message.user.misc.ability = 0; user.misc.ability = 0;
message.user.misc.nasmeshkaNotice = false; user.misc.nasmeshkaNotice = false;
message.user.misc.Dark = 0; user.misc.Dark = 0;
message.user.misc.nimaSCREAMrest = 0; user.misc.nimaSCREAMrest = 0;
message.user.misc.DarkRest = 0; user.misc.DarkRest = 0;
message.user.misc.nimaHaunt = 0; user.misc.nimaHaunt = 0;
message.user.misc.nimaHauntRest = 0; user.misc.nimaHauntRest = 0;
message.user.misc.areoRest = 0; user.misc.areoRest = 0;
message.user.misc.nimaUseHaunt = 0; user.misc.nimaUseHaunt = 0;
message.user.misc.nimaOneTime = 1; user.misc.nimaOneTime = 1;
message.user.misc.areoOneTime = 1; user.misc.areoOneTime = 1;
message.user.misc.areoOneTime2 = 1; user.misc.areoOneTime2 = 1;
message.user.misc.Dark2 = 0; user.misc.Dark2 = 0;
message.user.misc.bloodTime = 0; user.misc.BloodTime = 0;
message.user.misc.nimaCanBeUsed = 0; user.misc.nimaCanBeUsed = 0;
message.user.misc.areoXod = 0; user.misc.areoReturn = 0;
message.user.misc.areoReturn = 0; user.misc.AreoXod = 0;
message.user.misc.goMagicTimeTwo = 0; user.misc.goMagicTimeTwo = 0;
message.user.misc.goMagicBlood = 0; user.misc.goMagicBlood = 0;
message.user.misc.goMagicBloodTwo = 0; user.misc.goMagicBloodTwo = 0;
const chestrandom = utils.random(1, 100);
if (chestrandom <= 20){
vk.api.messages.send({ user_id: message.user.id, message: `[id${message.user.id}|${message.user.tag}], Вам выпал сундук. 🧳 Для того, чтобы открыть его, - [Открыть Сундук].`});
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Игроку [id${message.user.id}|${message.user.tag}] вместе с победой выпал сундук.🧳`})
}

vk.api.messages.send({user_id: user.id, message: `${`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Победил [id${message.user.id}|${message.user.tag}]!🎉💥💥 И это ${message.user.balance} победа игрока! Посмотреть топ по победам - "Топ".`}`,
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${user.misc.chest >= 1 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
return message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вы победили!🎉💥💥 И это Ваша ${message.user.balance} победа! Посмотреть топ по победам - "Топ".`,{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})

}
// ------------------------------------------- УСЛОВИЕ ПОБЕДЫ ------------------------------------------ //

if ((check > 30) && (check <= 157)){
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}📢 Вам было нанесено ${damageDealer} HP! Враг получил 6 золота!
${message.user.misc.vamp ? `❣Враг отрегенерировал: ${regen} здоровья` : `👤Ваш ход!`}
${message.user.misc.vamp ? `👤Ваш ход!` : ``}`});
return message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вы нанесли урон: ${damageDealer} HP! Золото + 6
✏Следующий ход делает [id${user.id}|${user.tag}]
💰Ваше золото: ${message.user.gold}
❤Ваши жизни: ${message.user.heal}
🏹Ваше оружие: ${message.user.misc.weapon}
💔Жизней у соперника: ${user.heal}
${message.user.misc.vamp ? `❣Регенерация: ${regen}` : ``}`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});
}
if ((check > 1) && (check <= 30)){
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}📢 Критический урон! Вам было нанесено ${damageDealer} HP! Враг получил 8 золота!
${message.user.misc.vamp ? `❣Враг отрегенерировал: ${regen} здоровья` : `👤Ваш ход!`}
${message.user.misc.vamp ? `👤Ваш ход!` : ``}`});
return message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}❗Критический урон! Удар составил ${damageDealer} HP! Золото + 8
✏Следующий ход делает [id${user.id}|${user.tag}]
💰Ваше золото: ${message.user.gold}
❤Ваши жизни: ${message.user.heal}
🏹Ваше оружие: ${message.user.misc.weapon}
💔Жизней у соперника: ${user.heal}
${message.user.misc.vamp ? `❣Регенерация: ${regen}` : ``}`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});
}
}


if (message.user.misc.mech == 2){              
let user = users.find(x=> x.uid === Number(message.user.biz));                               
var check = utils.random(1, 1);
var damageDealer = 0;
if (message.user.misc.whereiscrit == 0){check = utils.random(1, 102);};
if (message.user.misc.whereiscrit == 1){check = utils.random(1, 112);};
if (message.user.misc.whereiscrit == 2){check = utils.random(1, 132);};
if (message.user.misc.whereiscrit == 3){check = utils.random(1, 157);};
if ((check > 30) && (check <= 157)){
damageDealer += 9;
if (message.user.misc.vamp == 1){regen = Math.round(damageDealer/2)}
if (user.misc.block == 1){regen = Math.round(damageDealer/4)}
if (user.misc.shield == 1){
damageDealer = Math.round((damageDealer/100)*30)
}
user.heal -= damageDealer;
message.user.gold += 8;
message.user.xod = 0;
user.xod = 1;
}
if ((check >= 1) && (check <= 30)){
damageDealer += 18;
if (message.user.misc.vamp == 1){regen = Math.round(damageDealer/2)}
if (user.misc.block == 1){regen = Math.round(damageDealer/4)}
if (user.misc.shield == 1){
damageDealer = Math.round((damageDealer/100)*30)
}
user.heal -= damageDealer;
message.user.gold += 10;
message.user.xod = 0;
user.xod = 1;
}

// ------------------------------------------- УСЛОВИЕ ПОБЕДЫ ------------------------------------------ //
if (user.heal <= 0) {
message.user.Coins += 45; message.send(`+45 коинов. Ваши коины - ${message.user.Coins}`);
user.Coins += 20; vk.api.messages.send({user_id: user.id, message: `+20 коинов. Ваши коины - ${message.user.Coins}`})
if ((message.user.Decency < 5000) && (message.user.DecencyCounter == 3)){
if (mesage.user.Decency > 5000){message.user.Decency = 5000}
message.send(`Ваша порядочность была увеличена на 750. Ваша порядочность - ${message.user.Decency == 5000 ? `😃` : message.user.Decency > 4000 ? `😉` : message.user.Decency > 3000 ? `🙁` : message.user.Decency > 2000  ? `☹` : `😡`} ${message.user.Decency}`)
message.user.Decency += 750; message.user.DecencyCounter = 0;}
if ((user.Decency < 5000) && (user.DecencyCounter == 3)){
if (user.Decency > 5000) {user.Decency = 5000}
vk.api.messages.send({ user_id: user.id, message: `Ваша порядочность была увеличена на 750. Ваша порядочность - ${message.user.Decency == 5000 ? `😃` : message.user.Decency > 4000 ? `😉` : message.user.Decency > 3000 ? `🙁` : message.user.Decency > 2000  ? `☹` : `😡`} ${user.Decency}`});
user.Decency += 750; user.DecencyCounter = 0;}
if (user.DecencyCounter < 3){user.DecencyCounter++}; if (message.user.DecencyCounter <3 ) {message.user.DecencyCounter++}	
message.user.exp += 40; user.exp += 20; let lvlUser = message.user.exp >= 100 ? 2 : message.user.exp >= 170 ? 3 : message.user.exp >= 240 ? 4 :
message.user.exp >= 310 ? 5 : message.user.exp >= 390 ? 6 : message.user.exp >= 470 ? 7 :
message.user.exp >= 530 ? 8 : message.user.exp >= 640 ? 9 : message.user.exp >= 740 ? 10 : 1;
let NewLvl = lvlUser == 1 ? message.user.level.level2-message.user.exp : lvlUser == 2 ? message.user.level.level3-message.user.exp : lvlUser == 3 ? message.user.level.level4-message.user.exp :
lvlUser == 5 ? message.user.level.level6-message.user.exp : lvlUser == 6 ? message.user.level.level7-message.user.exp : lvlUser == 8 ? message.user.level.level9-message.user.exp : 
lvlUser == 9 ? message.user.level.level10-message.user.exp : 'Максимальный уровень.';
message.send(`+40 опыта. Ваш опыт - ${message.user.exp}. Ваш уровень - ${message.user.lvl}. До нового уровня - ${NewLvl} опыта.`)
let lvlUser2 = user.exp >= 100 ? 2 : user.exp >= 170 ? 3 : user.exp >= 240 ? 4 :
user.exp >= 310 ? 5 : user.exp >= 390 ? 6 : user.exp >= 470 ? 7 :
user.exp >= 530 ? 8 : user.exp >= 640 ? 9 : user.exp >= 740 ? 10 : 1;
let NewLvl2 = lvlUser2 == 1 ? user.level.level2-user.exp : lvlUser2 == 2 ? user.level.level3-user.exp : lvlUser2 == 3 ? user.level.level4-user.exp :
lvlUser2 == 5 ? user.level.level6-user.exp : lvlUser2 == 6 ? user.level.level7-user.exp : lvlUser2 == 8 ? user.level.level9-user.exp : 
lvlUser2 == 9 ? user.level.level10-user.exp : 'Максимальный уровень.';
vk.api.messages.send({user_id: user.id, message:`+20 опыта. Ваш опыт - ${user.exp}. Ваш уровень - ${user.lvl}. До нового уровня - ${NewLvl2} опыта.`})
if ((message.user.lvl == 1) && (message.user.exp >= 100)){
message.user.lvl = 2; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 2) && (message.user.exp >=170)){
message.user.lvl = 3; message.send(``)
} if ((message.user.lvl == 3) && (message.user.exp >=240)){
message.user.lvl = 4; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 4) && (messsage.user.exp >=310)){
message.user.lvl = 5; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 5) && (message.user.exp >= 390)){
message.user.lvl = 6; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 6) && (message.user.exp >= 470)){
message.user.lvl = 7; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 7) && (message.user.exp >= 530)){
message.user.lvl = 8; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 8) && (message.user.exp >= 640)){
message.user.lvl = 9; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 9) && (message.user.exp >=740)){
message.user.lvl = 10; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((user.lvl == 1) && (user.exp >= 100)){
user.lvl = 2; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 2) && (user.exp >=170)){
user.lvl = 3; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 3) && (user.exp >=240)){
user.lvl = 4; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 4) && (user.exp >=310)){
user.lvl = 5; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 5) && (user.exp >= 390)){
user.lvl = 6; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 6) && (user.exp >= 470)){
user.lvl = 7; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 7) && (user.exp >= 530)){
user.lvl = 8; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 8) && (user.exp >= 640)){
user.lvl = 9; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 9) && (user.exp >=740)){
user.lvl = 10; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} 
message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вы нанесли ${damageDealer} урона.
❤Ваши жизни: ${message.user.heal}
💔Жизней у соперника: ${user.heal} `)
vk.api.messages.send({ user_id: user.id, message: `Вам было нанесено ${damageDealer} урона.
❤Ваши жизни: ${user.heal}
💔Жизней у соперника: ${message.user.heal}`});
message.user.balance += 1;
message.user.gold = 0; user.gold = 0;
message.user.heal = 4500; user.heal = 4500; 
message.user.misc.areoReturn = 0; user.misc.areoReturn = 0;
message.user.areoReturn = 0; user.areoReturn = 0;
message.user.biz = 0; user.biz = 0;
user.misc.kastet = 0; message.user.misc.kastet = 0; 
user.misc.mech = 0; message.user.misc.mech = 0;
user.misc.sablya = 0; message.user.misc.sablya = 0;
message.user.misc.vizov = 0; user.misc.vizov = 0; 
message.user.xod = 0; user.xod = 0;
message.user.misc.startgame = 0; user.misc.startgame = 0;
message.user.misc.ready = 0; user.misc.ready = 0;
message.user.misc.whereiscrit = 0; user.misc.whereiscrit = 0;
message.user.misc.nasmeshkaLOCK = 0; user.misc.nasmeshkaLOCK = 0;
message.user.misc.weapon = 'Кулак'; user.misc.weapon = 'Кулак';
message.user.misc.yvedomFORshop = 0; user.misc.yvedomFORshop = 0;
message.user.misc.magicTime = 0; user.misc.magicTime = 0;
message.user.misc.magicBlood = 0; user.misc.magicBlood = 0;
message.user.misc.shield = 0; user.misc.shield = 0;
message.user.misc.goMagicBlood = 0; user.misc.goMagicBlood = 0;
message.user.misc.goMagicTime = 0; user.misc.goMagicTime = 0;
message.user.xodLOCK = 0; user.xodLOCK = 0;
message.user.misc.meta = 0; user.misc.meta = 0;
message.user.misc.vamp = 0; user.misc.vamp = 0;
message.user.misc.areo = 0; user.misc.areo = 0;
message.user.misc.nima = 0; user.misc.nima = 0;
message.user.misc.block = 0; user.misc.block = 0;
message.user.misc.metaRest = 0; user.misc.metaRest = 0;
message.user.misc.metaUse = 0; user.misc.metaUse = 0;
message.user.misc.nimaUse = 0; user.misc.nimaUse = 0;
message.user.misc.nimaRest = 0; user.misc.nimaRest = 0;
message.user.misc.nimaSCREAM = 0; user.misc.nimaSCREAM = 0;
message.user.misc.blockUse = 0; user.misc.blockUse = 0;
message.user.misc.areoReady = 0; user.misc.areoReady = 0;
message.user.misc.createAreo = 0; user.misc.createAreo = 0;
message.user.misc.areoAttackReadyForShield = 0; user.misc.areoAttackReadyForShield = 0;
message.user.misc.areoShield = 0; user.misc.areoShield = 0;
message.user.misc.ability = 0; user.misc.ability = 0;
message.user.misc.nasmeshkaNotice = false; user.misc.nasmeshkaNotice = false;
message.user.misc.Dark = 0; user.misc.Dark = 0;
message.user.misc.nimaSCREAMrest = 0; user.misc.nimaSCREAMrest = 0;
message.user.misc.DarkRest = 0; user.misc.DarkRest = 0;
message.user.misc.nimaHaunt = 0; user.misc.nimaHaunt = 0;
message.user.misc.nimaHauntRest = 0; user.misc.nimaHauntRest = 0;
message.user.misc.areoRest = 0; user.misc.areoRest = 0;
message.user.misc.nimaUseHaunt = 0; user.misc.nimaUseHaunt = 0;
message.user.misc.nimaOneTime = 1; user.misc.nimaOneTime = 1;
message.user.misc.areoOneTime = 1; user.misc.areoOneTime = 1;
message.user.misc.areoOneTime2 = 1; user.misc.areoOneTime2 = 1;
message.user.misc.Dark2 = 0; user.misc.Dark2 = 0;
message.user.misc.bloodTime = 0; user.misc.BloodTime = 0;
message.user.misc.nimaCanBeUsed = 0; user.misc.nimaCanBeUsed = 0;
message.user.misc.areoXod = 0; user.misc.areoReturn = 0;
message.user.misc.areoReturn = 0; user.misc.AreoXod = 0;
message.user.misc.goMagicTimeTwo = 0; user.misc.goMagicTimeTwo = 0;
message.user.misc.goMagicBlood = 0; user.misc.goMagicBlood = 0;
message.user.misc.goMagicBloodTwo = 0; user.misc.goMagicBloodTwo = 0;
const chestrandom = utils.random(1, 100);
if (chestrandom <= 20){
message.user.misc.chest++;
vk.api.messages.send({ user_id: message.user.id, message: `[id${message.user.id}|${message.user.tag}], Вам выпал сундук. 🧳 Для того, чтобы открыть его, - [Открыть Сундук].`});
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Игроку [id${message.user.id}|${message.user.tag}] вместе с победой выпал сундук.🧳`})
}

vk.api.messages.send({user_id: user.id, message: `${`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Победил [id${message.user.id}|${message.user.tag}]!🎉💥💥 И это ${message.user.balance} победа игрока! Посмотреть топ по победам - "Топ".`}`,
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${user.misc.chest >= 1 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
return message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вы победили!🎉💥💥 И это Ваша ${message.user.balance} победа! Посмотреть топ по победам - "Топ".`,{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})

}
// ------------------------------------------- УСЛОВИЕ ПОБЕДЫ ------------------------------------------ //
if ((check > 30) && (check <= 157)){
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}📢 Вам было нанесено ${damageDealer} HP! Враг получил 8 золота!
${message.user.misc.vamp ? `❣Враг отрегенерировал: ${regen} здоровья` : `👤Ваш ход!`}
${message.user.misc.vamp ? `👤Ваш ход!` : ``}`});
return message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вы нанесли урон: ${damageDealer} HP! Золото + 8
✏Следующий ход делает [id${user.id}|${user.tag}]
💰Ваше золото: ${message.user.gold}
❤Ваши жизни: ${message.user.heal}
🏹Ваше оружие: ${message.user.misc.weapon}
💔Жизней у соперника: ${user.heal}
${message.user.misc.vamp ? `❣Регенерация: ${regen}` : ``}`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});
}
if ((check > 1) && (check <= 30)){
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}📢 Критический урон! Вам было нанесено ${damageDealer} HP! Враг получил 10 золота!
${message.user.misc.vamp ? `❣Враг отрегенерировал: ${regen} здоровья` : `👤Ваш ход!`}
${message.user.misc.vamp ? `👤Ваш ход!` : ``}`});
return message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}❗Критический урон! Удар составил ${damageDealer} HP! Золото + 10
✏Следующий ход делает [id${user.id}|${user.tag}]
💰Ваше золото: ${message.user.gold}
❤Ваши жизни: ${message.user.heal}
🏹Ваше оружие: ${message.user.misc.weapon}
💔Жизней у соперника: ${user.heal}
${message.user.misc.vamp ? `❣Регенерация: ${regen}` : ``}`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});
}}


if (message.user.misc.mech == 3){              
let user = users.find(x=> x.uid === Number(message.user.biz));                               
var check = utils.random(1, 1);
var damageDealer = 0;
if (message.user.misc.whereiscrit == 0){check = utils.random(1, 102);};
if (message.user.misc.whereiscrit == 1){check = utils.random(1, 112);};
if (message.user.misc.whereiscrit == 2){check = utils.random(1, 132);};
if (message.user.misc.whereiscrit == 3){check = utils.random(1, 157);};
if ((check > 30) && (check <= 157)){
damageDealer += 14;
if (message.user.misc.vamp == 1){regen = Math.round(damageDealer/2)}
if (user.misc.block == 1){regen = Math.round(damageDealer/4)}
if (user.misc.shield == 1){
damageDealer = Math.round((damageDealer/100)*30)
}
user.heal -= damageDealer;
message.user.gold += 10;
message.user.xod = 0;
user.xod = 1;
}
if ((check >= 1) && (check <= 30)){
damageDealer += 28;
if (message.user.misc.vamp == 1){regen = Math.round(damageDealer/2)}
if (user.misc.block == 1){regen = Math.round(damageDealer/4)}
if (user.misc.shield == 1){
damageDealer = Math.round((damageDealer/100)*30)
}
user.heal -= damageDealer;
message.user.gold += 12;
message.user.xod = 0;
user.xod = 1;
}

// ------------------------------------------- УСЛОВИЕ ПОБЕДЫ ------------------------------------------ //
if (user.heal <= 0) {
message.user.Coins += 45; message.send(`+45 коинов. Ваши коины - ${message.user.Coins}`);
user.Coins += 20; vk.api.messages.send({user_id: user.id, message: `+20 коинов. Ваши коины - ${message.user.Coins}`})
if ((message.user.Decency < 5000) && (message.user.DecencyCounter == 3)){
if (mesage.user.Decency > 5000){message.user.Decency = 5000}
message.send(`Ваша порядочность была увеличена на 750. Ваша порядочность - ${message.user.Decency == 5000 ? `😃` : message.user.Decency > 4000 ? `😉` : message.user.Decency > 3000 ? `🙁` : message.user.Decency > 2000  ? `☹` : `😡`} ${message.user.Decency}`)
message.user.Decency += 750; message.user.DecencyCounter = 0;}
if ((user.Decency < 5000) && (user.DecencyCounter == 3)){
if (user.Decency > 5000) {user.Decency = 5000}
vk.api.messages.send({ user_id: user.id, message: `Ваша порядочность была увеличена на 750. Ваша порядочность - ${message.user.Decency == 5000 ? `😃` : message.user.Decency > 4000 ? `😉` : message.user.Decency > 3000 ? `🙁` : message.user.Decency > 2000  ? `☹` : `😡`} ${user.Decency}`});
user.Decency += 750; user.DecencyCounter = 0;}
if (user.DecencyCounter < 3){user.DecencyCounter++}; if (message.user.DecencyCounter <3 ) {message.user.DecencyCounter++}	
message.user.exp += 40; user.exp += 20; let lvlUser = message.user.exp >= 100 ? 2 : message.user.exp >= 170 ? 3 : message.user.exp >= 240 ? 4 :
message.user.exp >= 310 ? 5 : message.user.exp >= 390 ? 6 : message.user.exp >= 470 ? 7 :
message.user.exp >= 530 ? 8 : message.user.exp >= 640 ? 9 : message.user.exp >= 740 ? 10 : 1;
let NewLvl = lvlUser == 1 ? message.user.level.level2-message.user.exp : lvlUser == 2 ? message.user.level.level3-message.user.exp : lvlUser == 3 ? message.user.level.level4-message.user.exp :
lvlUser == 5 ? message.user.level.level6-message.user.exp : lvlUser == 6 ? message.user.level.level7-message.user.exp : lvlUser == 8 ? message.user.level.level9-message.user.exp : 
lvlUser == 9 ? message.user.level.level10-message.user.exp : 'Максимальный уровень.';
message.send(`+40 опыта. Ваш опыт - ${message.user.exp}. Ваш уровень - ${message.user.lvl}. До нового уровня - ${NewLvl} опыта.`)
let lvlUser2 = user.exp >= 100 ? 2 : user.exp >= 170 ? 3 : user.exp >= 240 ? 4 :
user.exp >= 310 ? 5 : user.exp >= 390 ? 6 : user.exp >= 470 ? 7 :
user.exp >= 530 ? 8 : user.exp >= 640 ? 9 : user.exp >= 740 ? 10 : 1;
let NewLvl2 = lvlUser2 == 1 ? user.level.level2-user.exp : lvlUser2 == 2 ? user.level.level3-user.exp : lvlUser2 == 3 ? user.level.level4-user.exp :
lvlUser2 == 5 ? user.level.level6-user.exp : lvlUser2 == 6 ? user.level.level7-user.exp : lvlUser2 == 8 ? user.level.level9-user.exp : 
lvlUser2 == 9 ? user.level.level10-user.exp : 'Максимальный уровень.';
vk.api.messages.send({user_id: user.id, message:`+20 опыта. Ваш опыт - ${user.exp}. Ваш уровень - ${user.lvl}. До нового уровня - ${NewLvl2} опыта.`})
if ((message.user.lvl == 1) && (message.user.exp >= 100)){
message.user.lvl = 2; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 2) && (message.user.exp >=170)){
message.user.lvl = 3; message.send(``)
} if ((message.user.lvl == 3) && (message.user.exp >=240)){
message.user.lvl = 4; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 4) && (messsage.user.exp >=310)){
message.user.lvl = 5; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 5) && (message.user.exp >= 390)){
message.user.lvl = 6; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 6) && (message.user.exp >= 470)){
message.user.lvl = 7; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 7) && (message.user.exp >= 530)){
message.user.lvl = 8; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 8) && (message.user.exp >= 640)){
message.user.lvl = 9; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 9) && (message.user.exp >=740)){
message.user.lvl = 10; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((user.lvl == 1) && (user.exp >= 100)){
user.lvl = 2; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 2) && (user.exp >=170)){
user.lvl = 3; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 3) && (user.exp >=240)){
user.lvl = 4; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 4) && (user.exp >=310)){
user.lvl = 5; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 5) && (user.exp >= 390)){
user.lvl = 6; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 6) && (user.exp >= 470)){
user.lvl = 7; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 7) && (user.exp >= 530)){
user.lvl = 8; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 8) && (user.exp >= 640)){
user.lvl = 9; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 9) && (user.exp >=740)){
user.lvl = 10; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} 
message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вы нанесли ${damageDealer} урона.
❤Ваши жизни: ${message.user.heal}
💔Жизней у соперника: ${user.heal} `)
vk.api.messages.send({ user_id: user.id, message: `Вам было нанесено ${damageDealer} урона.
❤Ваши жизни: ${user.heal}
💔Жизней у соперника: ${message.user.heal}`});
message.user.balance += 1;
message.user.gold = 0; user.gold = 0;
message.user.heal = 4500; user.heal = 4500; 
message.user.misc.areoReturn = 0; user.misc.areoReturn = 0;
message.user.areoReturn = 0; user.areoReturn = 0;
message.user.biz = 0; user.biz = 0;
user.misc.kastet = 0; message.user.misc.kastet = 0; 
user.misc.mech = 0; message.user.misc.mech = 0;
user.misc.sablya = 0; message.user.misc.sablya = 0;
message.user.misc.vizov = 0; user.misc.vizov = 0; 
message.user.xod = 0; user.xod = 0;
message.user.misc.startgame = 0; user.misc.startgame = 0;
message.user.misc.ready = 0; user.misc.ready = 0;
message.user.misc.whereiscrit = 0; user.misc.whereiscrit = 0;
message.user.misc.nasmeshkaLOCK = 0; user.misc.nasmeshkaLOCK = 0;
message.user.misc.weapon = 'Кулак'; user.misc.weapon = 'Кулак';
message.user.misc.yvedomFORshop = 0; user.misc.yvedomFORshop = 0;
message.user.misc.magicTime = 0; user.misc.magicTime = 0;
message.user.misc.magicBlood = 0; user.misc.magicBlood = 0;
message.user.misc.shield = 0; user.misc.shield = 0;
message.user.misc.goMagicBlood = 0; user.misc.goMagicBlood = 0;
message.user.misc.goMagicTime = 0; user.misc.goMagicTime = 0;
message.user.xodLOCK = 0; user.xodLOCK = 0;
message.user.misc.meta = 0; user.misc.meta = 0;
message.user.misc.vamp = 0; user.misc.vamp = 0;
message.user.misc.areo = 0; user.misc.areo = 0;
message.user.misc.nima = 0; user.misc.nima = 0;
message.user.misc.block = 0; user.misc.block = 0;
message.user.misc.metaRest = 0; user.misc.metaRest = 0;
message.user.misc.metaUse = 0; user.misc.metaUse = 0;
message.user.misc.nimaUse = 0; user.misc.nimaUse = 0;
message.user.misc.nimaRest = 0; user.misc.nimaRest = 0;
message.user.misc.nimaSCREAM = 0; user.misc.nimaSCREAM = 0;
message.user.misc.blockUse = 0; user.misc.blockUse = 0;
message.user.misc.areoReady = 0; user.misc.areoReady = 0;
message.user.misc.createAreo = 0; user.misc.createAreo = 0;
message.user.misc.areoAttackReadyForShield = 0; user.misc.areoAttackReadyForShield = 0;
message.user.misc.areoShield = 0; user.misc.areoShield = 0;
message.user.misc.ability = 0; user.misc.ability = 0;
message.user.misc.nasmeshkaNotice = false; user.misc.nasmeshkaNotice = false;
message.user.misc.Dark = 0; user.misc.Dark = 0;
message.user.misc.nimaSCREAMrest = 0; user.misc.nimaSCREAMrest = 0;
message.user.misc.DarkRest = 0; user.misc.DarkRest = 0;
message.user.misc.nimaHaunt = 0; user.misc.nimaHaunt = 0;
message.user.misc.nimaHauntRest = 0; user.misc.nimaHauntRest = 0;
message.user.misc.areoRest = 0; user.misc.areoRest = 0;
message.user.misc.nimaUseHaunt = 0; user.misc.nimaUseHaunt = 0;
message.user.misc.nimaOneTime = 1; user.misc.nimaOneTime = 1;
message.user.misc.areoOneTime = 1; user.misc.areoOneTime = 1;
message.user.misc.areoOneTime2 = 1; user.misc.areoOneTime2 = 1;
message.user.misc.Dark2 = 0; user.misc.Dark2 = 0;
message.user.misc.bloodTime = 0; user.misc.BloodTime = 0;
message.user.misc.nimaCanBeUsed = 0; user.misc.nimaCanBeUsed = 0;
message.user.misc.areoXod = 0; user.misc.areoReturn = 0;
message.user.misc.areoReturn = 0; user.misc.AreoXod = 0;
message.user.misc.goMagicTimeTwo = 0; user.misc.goMagicTimeTwo = 0;
message.user.misc.goMagicBlood = 0; user.misc.goMagicBlood = 0;
message.user.misc.goMagicBloodTwo = 0; user.misc.goMagicBloodTwo = 0;
const chestrandom = utils.random(1, 100);
if (chestrandom <= 20){
message.user.misc.chest++;
vk.api.messages.send({ user_id: message.user.id, message: `[id${message.user.id}|${message.user.tag}], Вам выпал сундук. 🧳 Для того, чтобы открыть его, - [Открыть Сундук].`});
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Игроку [id${message.user.id}|${message.user.tag}] вместе с победой выпал сундук.🧳`})
}

vk.api.messages.send({user_id: user.id, message: `${`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Победил [id${message.user.id}|${message.user.tag}]!🎉💥💥 И это ${message.user.balance} победа игрока! Посмотреть топ по победам - "Топ".`}`,
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${user.misc.chest >= 1 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
return message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вы победили!🎉💥💥 И это Ваша ${message.user.balance} победа! Посмотреть топ по победам - "Топ".`,{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})                }
// ------------------------------------------- УСЛОВИЕ ПОБЕДЫ ------------------------------------------ //

if ((check > 30) && (check <= 157)){
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}📢 Вам было нанесено ${damageDealer} HP! Враг получил 10 золота!
${message.user.misc.vamp ? `❣Враг отрегенерировал: ${regen} здоровья` : `👤Ваш ход!`}
${message.user.misc.vamp ? `👤Ваш ход!` : ``}`});
return message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вы нанесли урон: ${damageDealer} HP! Золото + 10
✏Следующий ход делает [id${user.id}|${user.tag}]
💰Ваше золото: ${message.user.gold}
❤Ваши жизни: ${message.user.heal}
🏹Ваше оружие: ${message.user.misc.weapon}
💔Жизней у соперника: ${user.heal}
${message.user.misc.vamp ? `❣Регенерация: ${regen}` : ``}`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});
}
if ((check > 1) && (check <= 30)){
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}📢 Критический урон! Вам было нанесено ${damageDealer} HP! Враг получил 12 золота!
${message.user.misc.vamp ? `❣Враг отрегенерировал: ${regen} здоровья` : `👤Ваш ход!`}
${message.user.misc.vamp ? `👤Ваш ход!` : ``}`});
return message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}❗Критический урон! Удар составил ${damageDealer} HP! Золото + 12
✏Следующий ход делает [id${user.id}|${user.tag}]
💰Ваше золото: ${message.user.gold}
❤Ваши жизни: ${message.user.heal}
🏹Ваше оружие: ${message.user.misc.weapon}
💔Жизней у соперника: ${user.heal}
${message.user.misc.vamp ? `❣Регенерация: ${regen}` : ``}`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});
}}
//--------------------------------------------------МЕЧ-----------------------------------------------//






//--------------------------------------------------САБЛЯ-----------------------------------------------//
if (message.user.misc.sablya == 1){              
let user = users.find(x=> x.uid === Number(message.user.biz));                               
var check = utils.random(1, 1);
var damageDealer = 0;
if (message.user.misc.whereiscrit == 0){check = utils.random(1, 102);};
if (message.user.misc.whereiscrit == 1){check = utils.random(1, 112);};
if (message.user.misc.whereiscrit == 2){check = utils.random(1, 132);};
if (message.user.misc.whereiscrit == 3){check = utils.random(1, 157);};
if ((check > 30) && (check <= 157)){
damageDealer += 11;
if (message.user.misc.vamp == 1){regen = Math.round(damageDealer/2)}
if (user.misc.block == 1){regen = Math.round(damageDealer/4)}
if (user.misc.shield == 1){
damageDealer = Math.round((damageDealer/100)*30)
}
user.heal -= damageDealer;
message.user.gold += 8;
message.user.xod = 0;
user.xod = 1;
}
if ((check >= 1) && (check <= 30)){
damageDealer += 22;
if (message.user.misc.vamp == 1){regen = Math.round(damageDealer/2)}
if (user.misc.block == 1){regen = Math.round(damageDealer/4)}
if (user.misc.shield == 1){
damageDealer = Math.round((damageDealer/100)*30)
}              		              	
user.heal -= damageDealer;
message.user.gold += 10;
message.user.xod = 0;
user.xod = 1;
}

// ------------------------------------------- УСЛОВИЕ ПОБЕДЫ ------------------------------------------ //
if (user.heal <= 0) {
message.user.Coins += 45; message.send(`+45 коинов. Ваши коины - ${message.user.Coins}`);
user.Coins += 20; vk.api.messages.send({user_id: user.id, message: `+20 коинов. Ваши коины - ${message.user.Coins}`})
if ((message.user.Decency < 5000) && (message.user.DecencyCounter == 3)){
if (mesage.user.Decency > 5000){message.user.Decency = 5000}
message.send(`Ваша порядочность была увеличена на 750. Ваша порядочность - ${message.user.Decency == 5000 ? `😃` : message.user.Decency > 4000 ? `😉` : message.user.Decency > 3000 ? `🙁` : message.user.Decency > 2000  ? `☹` : `😡`} ${message.user.Decency}`)
message.user.Decency += 750; message.user.DecencyCounter = 0;}
if ((user.Decency < 5000) && (user.DecencyCounter == 3)){
if (user.Decency > 5000) {user.Decency = 5000}
vk.api.messages.send({ user_id: user.id, message: `Ваша порядочность была увеличена на 750. Ваша порядочность - ${message.user.Decency == 5000 ? `😃` : message.user.Decency > 4000 ? `😉` : message.user.Decency > 3000 ? `🙁` : message.user.Decency > 2000  ? `☹` : `😡`} ${user.Decency}`});
user.Decency += 750; user.DecencyCounter = 0;}
if (user.DecencyCounter < 3){user.DecencyCounter++}; if (message.user.DecencyCounter <3 ) {message.user.DecencyCounter++}	
message.user.exp += 40; user.exp += 20; let lvlUser = message.user.exp >= 100 ? 2 : message.user.exp >= 170 ? 3 : message.user.exp >= 240 ? 4 :
message.user.exp >= 310 ? 5 : message.user.exp >= 390 ? 6 : message.user.exp >= 470 ? 7 :
message.user.exp >= 530 ? 8 : message.user.exp >= 640 ? 9 : message.user.exp >= 740 ? 10 : 1;
let NewLvl = lvlUser == 1 ? message.user.level.level2-message.user.exp : lvlUser == 2 ? message.user.level.level3-message.user.exp : lvlUser == 3 ? message.user.level.level4-message.user.exp :
lvlUser == 5 ? message.user.level.level6-message.user.exp : lvlUser == 6 ? message.user.level.level7-message.user.exp : lvlUser == 8 ? message.user.level.level9-message.user.exp : 
lvlUser == 9 ? message.user.level.level10-message.user.exp : 'Максимальный уровень.';
message.send(`+40 опыта. Ваш опыт - ${message.user.exp}. Ваш уровень - ${message.user.lvl}. До нового уровня - ${NewLvl} опыта.`)
let lvlUser2 = user.exp >= 100 ? 2 : user.exp >= 170 ? 3 : user.exp >= 240 ? 4 :
user.exp >= 310 ? 5 : user.exp >= 390 ? 6 : user.exp >= 470 ? 7 :
user.exp >= 530 ? 8 : user.exp >= 640 ? 9 : user.exp >= 740 ? 10 : 1;
let NewLvl2 = lvlUser2 == 1 ? user.level.level2-user.exp : lvlUser2 == 2 ? user.level.level3-user.exp : lvlUser2 == 3 ? user.level.level4-user.exp :
lvlUser2 == 5 ? user.level.level6-user.exp : lvlUser2 == 6 ? user.level.level7-user.exp : lvlUser2 == 8 ? user.level.level9-user.exp : 
lvlUser2 == 9 ? user.level.level10-user.exp : 'Максимальный уровень.';
vk.api.messages.send({user_id: user.id, message:`+20 опыта. Ваш опыт - ${user.exp}. Ваш уровень - ${user.lvl}. До нового уровня - ${NewLvl2} опыта.`})
if ((message.user.lvl == 1) && (message.user.exp >= 100)){
message.user.lvl = 2; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 2) && (message.user.exp >=170)){
message.user.lvl = 3; message.send(``)
} if ((message.user.lvl == 3) && (message.user.exp >=240)){
message.user.lvl = 4; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 4) && (messsage.user.exp >=310)){
message.user.lvl = 5; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 5) && (message.user.exp >= 390)){
message.user.lvl = 6; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 6) && (message.user.exp >= 470)){
message.user.lvl = 7; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 7) && (message.user.exp >= 530)){
message.user.lvl = 8; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 8) && (message.user.exp >= 640)){
message.user.lvl = 9; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 9) && (message.user.exp >=740)){
message.user.lvl = 10; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((user.lvl == 1) && (user.exp >= 100)){
user.lvl = 2; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 2) && (user.exp >=170)){
user.lvl = 3; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 3) && (user.exp >=240)){
user.lvl = 4; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 4) && (user.exp >=310)){
user.lvl = 5; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 5) && (user.exp >= 390)){
user.lvl = 6; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 6) && (user.exp >= 470)){
user.lvl = 7; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 7) && (user.exp >= 530)){
user.lvl = 8; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 8) && (user.exp >= 640)){
user.lvl = 9; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 9) && (user.exp >=740)){
user.lvl = 10; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} 
message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вы нанесли ${damageDealer} урона.
❤Ваши жизни: ${message.user.heal}
💔Жизней у соперника: ${user.heal} `)
vk.api.messages.send({ user_id: user.id, message: `Вам было нанесено ${damageDealer} урона.
❤Ваши жизни: ${user.heal}
💔Жизней у соперника: ${message.user.heal}`});
message.user.balance += 1;
message.user.gold = 0; user.gold = 0;
message.user.heal = 4500; user.heal = 4500; 
message.user.misc.areoReturn = 0; user.misc.areoReturn = 0;
message.user.areoReturn = 0; user.areoReturn = 0;
message.user.biz = 0; user.biz = 0;
user.misc.kastet = 0; message.user.misc.kastet = 0; 
user.misc.mech = 0; message.user.misc.mech = 0;
user.misc.sablya = 0; message.user.misc.sablya = 0;
message.user.misc.vizov = 0; user.misc.vizov = 0; 
message.user.xod = 0; user.xod = 0;
message.user.misc.startgame = 0; user.misc.startgame = 0;
message.user.misc.ready = 0; user.misc.ready = 0;
message.user.misc.whereiscrit = 0; user.misc.whereiscrit = 0;
message.user.misc.nasmeshkaLOCK = 0; user.misc.nasmeshkaLOCK = 0;
message.user.misc.weapon = 'Кулак'; user.misc.weapon = 'Кулак';
message.user.misc.yvedomFORshop = 0; user.misc.yvedomFORshop = 0;
message.user.misc.magicTime = 0; user.misc.magicTime = 0;
message.user.misc.magicBlood = 0; user.misc.magicBlood = 0;
message.user.misc.shield = 0; user.misc.shield = 0;
message.user.misc.goMagicBlood = 0; user.misc.goMagicBlood = 0;
message.user.misc.goMagicTime = 0; user.misc.goMagicTime = 0;
message.user.xodLOCK = 0; user.xodLOCK = 0;
message.user.misc.meta = 0; user.misc.meta = 0;
message.user.misc.vamp = 0; user.misc.vamp = 0;
message.user.misc.areo = 0; user.misc.areo = 0;
message.user.misc.nima = 0; user.misc.nima = 0;
message.user.misc.block = 0; user.misc.block = 0;
message.user.misc.metaRest = 0; user.misc.metaRest = 0;
message.user.misc.metaUse = 0; user.misc.metaUse = 0;
message.user.misc.nimaUse = 0; user.misc.nimaUse = 0;
message.user.misc.nimaRest = 0; user.misc.nimaRest = 0;
message.user.misc.nimaSCREAM = 0; user.misc.nimaSCREAM = 0;
message.user.misc.blockUse = 0; user.misc.blockUse = 0;
message.user.misc.areoReady = 0; user.misc.areoReady = 0;
message.user.misc.createAreo = 0; user.misc.createAreo = 0;
message.user.misc.areoAttackReadyForShield = 0; user.misc.areoAttackReadyForShield = 0;
message.user.misc.areoShield = 0; user.misc.areoShield = 0;
message.user.misc.ability = 0; user.misc.ability = 0;
message.user.misc.nasmeshkaNotice = false; user.misc.nasmeshkaNotice = false;
message.user.misc.Dark = 0; user.misc.Dark = 0;
message.user.misc.nimaSCREAMrest = 0; user.misc.nimaSCREAMrest = 0;
message.user.misc.DarkRest = 0; user.misc.DarkRest = 0;
message.user.misc.nimaHaunt = 0; user.misc.nimaHaunt = 0;
message.user.misc.nimaHauntRest = 0; user.misc.nimaHauntRest = 0;
message.user.misc.areoRest = 0; user.misc.areoRest = 0;
message.user.misc.nimaUseHaunt = 0; user.misc.nimaUseHaunt = 0;
message.user.misc.nimaOneTime = 1; user.misc.nimaOneTime = 1;
message.user.misc.areoOneTime = 1; user.misc.areoOneTime = 1;
message.user.misc.areoOneTime2 = 1; user.misc.areoOneTime2 = 1;
message.user.misc.Dark2 = 0; user.misc.Dark2 = 0;
message.user.misc.bloodTime = 0; user.misc.BloodTime = 0;
message.user.misc.nimaCanBeUsed = 0; user.misc.nimaCanBeUsed = 0;
message.user.misc.areoXod = 0; user.misc.areoReturn = 0;
message.user.misc.areoReturn = 0; user.misc.AreoXod = 0;
message.user.misc.goMagicTimeTwo = 0; user.misc.goMagicTimeTwo = 0;
message.user.misc.goMagicBlood = 0; user.misc.goMagicBlood = 0;
message.user.misc.goMagicBloodTwo = 0; user.misc.goMagicBloodTwo = 0;
const chestrandom = utils.random(1, 100);
if (chestrandom <= 20){
message.user.misc.chest++;
vk.api.messages.send({ user_id: message.user.id, message: `[id${message.user.id}|${message.user.tag}], Вам выпал сундук. 🧳 Для того, чтобы открыть его, - [Открыть Сундук].`});
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Игроку [id${message.user.id}|${message.user.tag}] вместе с победой выпал сундук.🧳`})
}

vk.api.messages.send({user_id: user.id, message: `${`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Победил [id${message.user.id}|${message.user.tag}]!🎉💥💥 И это ${message.user.balance} победа игрока! Посмотреть топ по победам - "Топ".`}`,
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${user.misc.chest >= 1 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
return message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вы победили!🎉💥💥 И это Ваша ${message.user.balance} победа! Посмотреть топ по победам - "Топ".`,{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})

}
// ------------------------------------------- УСЛОВИЕ ПОБЕДЫ ------------------------------------------ //

if ((check > 30) && (check <= 157)){
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}📢 Вам было нанесено ${damageDealer} HP! Враг получил 8 золота!
${message.user.misc.vamp ? `❣Враг отрегенерировал: ${regen} здоровья` : `👤Ваш ход!`}
${message.user.misc.vamp ? `👤Ваш ход!` : ``}`});
return message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вы нанесли урон: ${damageDealer} HP! Золото + 8
✏Следующий ход делает [id${user.id}|${user.tag}]
💰Ваше золото: ${message.user.gold}
❤Ваши жизни: ${message.user.heal}
🏹Ваше оружие: ${message.user.misc.weapon}
💔Жизней у соперника: ${user.heal}
${message.user.misc.vamp ? `❣Регенерация: ${regen}` : ``}`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});
}
if ((check > 1) && (check <= 30)){
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}📢 Критический урон! Вам было нанесено ${damageDealer} HP! Враг получил 10 золота!
${message.user.misc.vamp ? `❣Враг отрегенерировал: ${regen} здоровья` : `👤Ваш ход!`}
${message.user.misc.vamp ? `👤Ваш ход!` : ``}`});
return message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}❗Критический урон! Удар составил ${damageDealer} HP! Золото + 10
✏Следующий ход делает [id${user.id}|${user.tag}]
💰Ваше золото: ${message.user.gold}
❤Ваши жизни: ${message.user.heal}
🏹Ваше оружие: ${message.user.misc.weapon}
💔Жизней у соперника: ${user.heal}
${message.user.misc.vamp ? `❣Регенерация: ${regen}` : ``}`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});
}}


if (message.user.misc.sablya == 2){              
let user = users.find(x=> x.uid === Number(message.user.biz));                               
var check = utils.random(1, 1);
var damageDealer = 0;
if (message.user.misc.whereiscrit == 0){check = utils.random(1, 102);};
if (message.user.misc.whereiscrit == 1){check = utils.random(1, 112);};
if (message.user.misc.whereiscrit == 2){check = utils.random(1, 132);};
if (message.user.misc.whereiscrit == 3){check = utils.random(1, 157);};
if ((check > 30) && (check <= 157)){
damageDealer += 15;
if (message.user.misc.vamp == 1){regen = Math.round(damageDealer/2)}
if (user.misc.block == 1){regen = Math.round(damageDealer/4)}
if (user.misc.shield == 1){
damageDealer = Math.round((damageDealer/100)*30)
}
user.heal -= damageDealer;
message.user.gold += 12;
message.user.xod = 0;
user.xod = 1;
}
if ((check >= 1) && (check <= 30)){
damageDealer += 30;
if (message.user.misc.vamp == 1){regen = Math.round(damageDealer/2)}
if (user.misc.block == 1){regen = Math.round(damageDealer/4)}
if (user.misc.shield == 1){
damageDealer = Math.round((damageDealer/100)*30)
}
user.heal -= damageDealer;
message.user.gold += 14;
message.user.xod = 0;
user.xod = 1;
}

// ------------------------------------------- УСЛОВИЕ ПОБЕДЫ ------------------------------------------ //
if (user.heal <= 0) {
message.user.Coins += 45; message.send(`+45 коинов. Ваши коины - ${message.user.Coins}`);
user.Coins += 20; vk.api.messages.send({user_id: user.id, message: `+20 коинов. Ваши коины - ${message.user.Coins}`})
if ((message.user.Decency < 5000) && (message.user.DecencyCounter == 3)){
if (mesage.user.Decency > 5000){message.user.Decency = 5000}
message.send(`Ваша порядочность была увеличена на 750. Ваша порядочность - ${message.user.Decency == 5000 ? `😃` : message.user.Decency > 4000 ? `😉` : message.user.Decency > 3000 ? `🙁` : message.user.Decency > 2000  ? `☹` : `😡`} ${message.user.Decency}`)
message.user.Decency += 750; message.user.DecencyCounter = 0;}
if ((user.Decency < 5000) && (user.DecencyCounter == 3)){
if (user.Decency > 5000) {user.Decency = 5000}
vk.api.messages.send({ user_id: user.id, message: `Ваша порядочность была увеличена на 750. Ваша порядочность - ${message.user.Decency == 5000 ? `😃` : message.user.Decency > 4000 ? `😉` : message.user.Decency > 3000 ? `🙁` : message.user.Decency > 2000  ? `☹` : `😡`} ${user.Decency}`});
user.Decency += 750; user.DecencyCounter = 0;}
if (user.DecencyCounter < 3){user.DecencyCounter++}; if (message.user.DecencyCounter <3 ) {message.user.DecencyCounter++}	
message.user.exp += 40; user.exp += 20; let lvlUser = message.user.exp >= 100 ? 2 : message.user.exp >= 170 ? 3 : message.user.exp >= 240 ? 4 :
message.user.exp >= 310 ? 5 : message.user.exp >= 390 ? 6 : message.user.exp >= 470 ? 7 :
message.user.exp >= 530 ? 8 : message.user.exp >= 640 ? 9 : message.user.exp >= 740 ? 10 : 1;
let NewLvl = lvlUser == 1 ? message.user.level.level2-message.user.exp : lvlUser == 2 ? message.user.level.level3-message.user.exp : lvlUser == 3 ? message.user.level.level4-message.user.exp :
lvlUser == 5 ? message.user.level.level6-message.user.exp : lvlUser == 6 ? message.user.level.level7-message.user.exp : lvlUser == 8 ? message.user.level.level9-message.user.exp : 
lvlUser == 9 ? message.user.level.level10-message.user.exp : 'Максимальный уровень.';
message.send(`+40 опыта. Ваш опыт - ${message.user.exp}. Ваш уровень - ${message.user.lvl}. До нового уровня - ${NewLvl} опыта.`)
let lvlUser2 = user.exp >= 100 ? 2 : user.exp >= 170 ? 3 : user.exp >= 240 ? 4 :
user.exp >= 310 ? 5 : user.exp >= 390 ? 6 : user.exp >= 470 ? 7 :
user.exp >= 530 ? 8 : user.exp >= 640 ? 9 : user.exp >= 740 ? 10 : 1;
let NewLvl2 = lvlUser2 == 1 ? user.level.level2-user.exp : lvlUser2 == 2 ? user.level.level3-user.exp : lvlUser2 == 3 ? user.level.level4-user.exp :
lvlUser2 == 5 ? user.level.level6-user.exp : lvlUser2 == 6 ? user.level.level7-user.exp : lvlUser2 == 8 ? user.level.level9-user.exp : 
lvlUser2 == 9 ? user.level.level10-user.exp : 'Максимальный уровень.';
vk.api.messages.send({user_id: user.id, message:`+20 опыта. Ваш опыт - ${user.exp}. Ваш уровень - ${user.lvl}. До нового уровня - ${NewLvl2} опыта.`})
if ((message.user.lvl == 1) && (message.user.exp >= 100)){
message.user.lvl = 2; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 2) && (message.user.exp >=170)){
message.user.lvl = 3; message.send(``)
} if ((message.user.lvl == 3) && (message.user.exp >=240)){
message.user.lvl = 4; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 4) && (messsage.user.exp >=310)){
message.user.lvl = 5; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 5) && (message.user.exp >= 390)){
message.user.lvl = 6; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 6) && (message.user.exp >= 470)){
message.user.lvl = 7; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 7) && (message.user.exp >= 530)){
message.user.lvl = 8; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 8) && (message.user.exp >= 640)){
message.user.lvl = 9; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 9) && (message.user.exp >=740)){
message.user.lvl = 10; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((user.lvl == 1) && (user.exp >= 100)){
user.lvl = 2; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 2) && (user.exp >=170)){
user.lvl = 3; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 3) && (user.exp >=240)){
user.lvl = 4; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 4) && (user.exp >=310)){
user.lvl = 5; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 5) && (user.exp >= 390)){
user.lvl = 6; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 6) && (user.exp >= 470)){
user.lvl = 7; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 7) && (user.exp >= 530)){
user.lvl = 8; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 8) && (user.exp >= 640)){
user.lvl = 9; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 9) && (user.exp >=740)){
user.lvl = 10; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} 
message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вы нанесли ${damageDealer} урона.
❤Ваши жизни: ${message.user.heal}
💔Жизней у соперника: ${user.heal} `)
vk.api.messages.send({ user_id: user.id, message: `Вам было нанесено ${damageDealer} урона.
❤Ваши жизни: ${user.heal}
💔Жизней у соперника: ${message.user.heal}`});
message.user.balance += 1;
message.user.gold = 0; user.gold = 0;
message.user.heal = 4500; user.heal = 4500; 
message.user.misc.areoReturn = 0; user.misc.areoReturn = 0;
message.user.areoReturn = 0; user.areoReturn = 0;
message.user.biz = 0; user.biz = 0;
user.misc.kastet = 0; message.user.misc.kastet = 0; 
user.misc.mech = 0; message.user.misc.mech = 0;
user.misc.sablya = 0; message.user.misc.sablya = 0;
message.user.misc.vizov = 0; user.misc.vizov = 0; 
message.user.xod = 0; user.xod = 0;
message.user.misc.startgame = 0; user.misc.startgame = 0;
message.user.misc.ready = 0; user.misc.ready = 0;
message.user.misc.whereiscrit = 0; user.misc.whereiscrit = 0;
message.user.misc.nasmeshkaLOCK = 0; user.misc.nasmeshkaLOCK = 0;
message.user.misc.weapon = 'Кулак'; user.misc.weapon = 'Кулак';
message.user.misc.yvedomFORshop = 0; user.misc.yvedomFORshop = 0;
message.user.misc.magicTime = 0; user.misc.magicTime = 0;
message.user.misc.magicBlood = 0; user.misc.magicBlood = 0;
message.user.misc.shield = 0; user.misc.shield = 0;
message.user.misc.goMagicBlood = 0; user.misc.goMagicBlood = 0;
message.user.misc.goMagicTime = 0; user.misc.goMagicTime = 0;
message.user.xodLOCK = 0; user.xodLOCK = 0;
message.user.misc.meta = 0; user.misc.meta = 0;
message.user.misc.vamp = 0; user.misc.vamp = 0;
message.user.misc.areo = 0; user.misc.areo = 0;
message.user.misc.nima = 0; user.misc.nima = 0;
message.user.misc.block = 0; user.misc.block = 0;
message.user.misc.metaRest = 0; user.misc.metaRest = 0;
message.user.misc.metaUse = 0; user.misc.metaUse = 0;
message.user.misc.nimaUse = 0; user.misc.nimaUse = 0;
message.user.misc.nimaRest = 0; user.misc.nimaRest = 0;
message.user.misc.nimaSCREAM = 0; user.misc.nimaSCREAM = 0;
message.user.misc.blockUse = 0; user.misc.blockUse = 0;
message.user.misc.areoReady = 0; user.misc.areoReady = 0;
message.user.misc.createAreo = 0; user.misc.createAreo = 0;
message.user.misc.areoAttackReadyForShield = 0; user.misc.areoAttackReadyForShield = 0;
message.user.misc.areoShield = 0; user.misc.areoShield = 0;
message.user.misc.ability = 0; user.misc.ability = 0;
message.user.misc.nasmeshkaNotice = false; user.misc.nasmeshkaNotice = false;
message.user.misc.Dark = 0; user.misc.Dark = 0;
message.user.misc.nimaSCREAMrest = 0; user.misc.nimaSCREAMrest = 0;
message.user.misc.DarkRest = 0; user.misc.DarkRest = 0;
message.user.misc.nimaHaunt = 0; user.misc.nimaHaunt = 0;
message.user.misc.nimaHauntRest = 0; user.misc.nimaHauntRest = 0;
message.user.misc.areoRest = 0; user.misc.areoRest = 0;
message.user.misc.nimaUseHaunt = 0; user.misc.nimaUseHaunt = 0;
message.user.misc.nimaOneTime = 1; user.misc.nimaOneTime = 1;
message.user.misc.areoOneTime = 1; user.misc.areoOneTime = 1;
message.user.misc.areoOneTime2 = 1; user.misc.areoOneTime2 = 1;
message.user.misc.Dark2 = 0; user.misc.Dark2 = 0;
message.user.misc.bloodTime = 0; user.misc.BloodTime = 0;
message.user.misc.nimaCanBeUsed = 0; user.misc.nimaCanBeUsed = 0;
message.user.misc.areoXod = 0; user.misc.areoReturn = 0;
message.user.misc.areoReturn = 0; user.misc.AreoXod = 0;
message.user.misc.goMagicTimeTwo = 0; user.misc.goMagicTimeTwo = 0;
message.user.misc.goMagicBlood = 0; user.misc.goMagicBlood = 0;
message.user.misc.goMagicBloodTwo = 0; user.misc.goMagicBloodTwo = 0;
const chestrandom = utils.random(1, 100);
if (chestrandom <= 20){
message.user.misc.chest++;
vk.api.messages.send({ user_id: message.user.id, message: `[id${message.user.id}|${message.user.tag}], Вам выпал сундук. 🧳 Для того, чтобы открыть его, - [Открыть Сундук].`});
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Игроку [id${message.ser.id}|${message.user.tag}] вместе с победой выпал сундук.🧳`})
}

vk.api.messages.send({user_id: user.id, message: `${`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Победил [id${message.user.id}|${message.user.tag}]!🎉💥💥 И это ${message.user.balance} победа игрока! Посмотреть топ по победам - "Топ".`}`,
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${user.misc.chest >= 1 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
return message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вы победили!🎉💥💥 И это Ваша ${message.user.balance} победа! Посмотреть топ по победам - "Топ".`,{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})

}
// ------------------------------------------- УСЛОВИЕ ПОБЕДЫ ------------------------------------------ //

if ((check > 30) && (check <= 157)){
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}📢 Вам было нанесено ${damageDealer} HP! Враг получил 12 золота!
${message.user.misc.vamp ? `❣Враг отрегенерировал: ${regen} здоровья` : `👤Ваш ход!`}
${message.user.misc.vamp ? `👤Ваш ход!` : ``}`});
return message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вы нанесли урон: ${damageDealer} HP! Золото + 12
✏Следующий ход делает [id${user.id}|${user.tag}]
💰Ваше золото: ${message.user.gold}
❤Ваши жизни: ${message.user.heal}
🏹Ваше оружие: ${message.user.misc.weapon}
💔Жизней у соперника: ${user.heal}
${message.user.misc.vamp ? `❣Регенерация: ${regen}` : ``}`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});
}
if ((check > 1) && (check <= 30)){
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}📢 Критический урон! Вам было нанесено ${damageDealer} HP! Враг получил 14 золота!
${message.user.misc.vamp ? `❣Враг отрегенерировал: ${regen} здоровья` : `👤Ваш ход!`}
${message.user.misc.vamp ? `👤Ваш ход!` : ``}`});
return message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}❗Критический урон! Удар составил ${damageDealer} HP! Золото + 14
✏Следующий ход делает [id${user.id}|${user.tag}]
💰Ваше золото: ${message.user.gold}
❤Ваши жизни: ${message.user.heal}
🏹Ваше оружие: ${message.user.misc.weapon}
💔Жизней у соперника: ${user.heal}
${message.user.misc.vamp ? `❣Регенерация: ${regen}` : ``}`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});
}}


if (message.user.misc.sablya == 3){              
let user = users.find(x=> x.uid === Number(message.user.biz));                               
var check = utils.random(1, 1);
var damageDealer = 0;
if (message.user.misc.whereiscrit == 0){check = utils.random(1, 102);};
if (message.user.misc.whereiscrit == 1){check = utils.random(1, 112);};
if (message.user.misc.whereiscrit == 2){check = utils.random(1, 132);};
if (message.user.misc.whereiscrit == 3){check = utils.random(1, 157);};
if ((check > 30) && (check <= 157)){
damageDealer = damageDealer + 21;
if (message.user.misc.vamp == 1){regen = Math.round(damageDealer/2)}
if (user.misc.block == 1){regen = Math.round(damageDealer/4)}
if (user.misc.shield == 1){
damageDealer = Math.round((damageDealer/100)*30)
}
user.heal -= damageDealer;
message.user.gold += 12;
message.user.xod = 0;
user.xod = 1;
}
if ((check >= 1) && (check <= 30)){
damageDealer += 42;
if (message.user.misc.vamp == 1){regen = Math.round(damageDealer/2)}
if (user.misc.block == 1){regen = Math.round(damageDealer/4)}
if (user.misc.shield == 1){
damageDealer = Math.round((damageDealer/100)*30)
}
user.heal -= damageDealer;
message.user.gold += 14;
message.user.xod = 0;
user.xod = 1;
}

// ------------------------------------------- УСЛОВИЕ ПОБЕДЫ ------------------------------------------ //
if (user.heal <= 0) {
message.user.Coins += 45; message.send(`+45 коинов. Ваши коины - ${message.user.Coins}`);
user.Coins += 20; vk.api.messages.send({user_id: user.id, message: `+20 коинов. Ваши коины - ${message.user.Coins}`})
if ((message.user.Decency < 5000) && (message.user.DecencyCounter == 3)){
if (mesage.user.Decency > 5000){message.user.Decency = 5000}
message.send(`Ваша порядочность была увеличена на 750. Ваша порядочность - ${message.user.Decency == 5000 ? `😃` : message.user.Decency > 4000 ? `😉` : message.user.Decency > 3000 ? `🙁` : message.user.Decency > 2000  ? `☹` : `😡`} ${message.user.Decency}`)
message.user.Decency += 750; message.user.DecencyCounter = 0;}
if ((user.Decency < 5000) && (user.DecencyCounter == 3)){
if (user.Decency > 5000) {user.Decency = 5000}
vk.api.messages.send({ user_id: user.id, message: `Ваша порядочность была увеличена на 750. Ваша порядочность - ${message.user.Decency == 5000 ? `😃` : message.user.Decency > 4000 ? `😉` : message.user.Decency > 3000 ? `🙁` : message.user.Decency > 2000  ? `☹` : `😡`} ${user.Decency}`});
user.Decency += 750; user.DecencyCounter = 0;}
if (user.DecencyCounter < 3){user.DecencyCounter++}; if (message.user.DecencyCounter <3 ) {message.user.DecencyCounter++}	
message.user.exp += 40; user.exp += 20; let lvlUser = message.user.exp >= 100 ? 2 : message.user.exp >= 170 ? 3 : message.user.exp >= 240 ? 4 :
message.user.exp >= 310 ? 5 : message.user.exp >= 390 ? 6 : message.user.exp >= 470 ? 7 :
message.user.exp >= 530 ? 8 : message.user.exp >= 640 ? 9 : message.user.exp >= 740 ? 10 : 1;
let NewLvl = lvlUser == 1 ? message.user.level.level2-message.user.exp : lvlUser == 2 ? message.user.level.level3-message.user.exp : lvlUser == 3 ? message.user.level.level4-message.user.exp :
lvlUser == 5 ? message.user.level.level6-message.user.exp : lvlUser == 6 ? message.user.level.level7-message.user.exp : lvlUser == 8 ? message.user.level.level9-message.user.exp : 
lvlUser == 9 ? message.user.level.level10-message.user.exp : 'Максимальный уровень.';
message.send(`+40 опыта. Ваш опыт - ${message.user.exp}. Ваш уровень - ${message.user.lvl}. До нового уровня - ${NewLvl} опыта.`)
let lvlUser2 = user.exp >= 100 ? 2 : user.exp >= 170 ? 3 : user.exp >= 240 ? 4 :
user.exp >= 310 ? 5 : user.exp >= 390 ? 6 : user.exp >= 470 ? 7 :
user.exp >= 530 ? 8 : user.exp >= 640 ? 9 : user.exp >= 740 ? 10 : 1;
let NewLvl2 = lvlUser2 == 1 ? user.level.level2-user.exp : lvlUser2 == 2 ? user.level.level3-user.exp : lvlUser2 == 3 ? user.level.level4-user.exp :
lvlUser2 == 5 ? user.level.level6-user.exp : lvlUser2 == 6 ? user.level.level7-user.exp : lvlUser2 == 8 ? user.level.level9-user.exp : 
lvlUser2 == 9 ? user.level.level10-user.exp : 'Максимальный уровень.';
vk.api.messages.send({user_id: user.id, message:`+20 опыта. Ваш опыт - ${user.exp}. Ваш уровень - ${user.lvl}. До нового уровня - ${NewLvl2} опыта.`})
if ((message.user.lvl == 1) && (message.user.exp >= 100)){
message.user.lvl = 2; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 2) && (message.user.exp >=170)){
message.user.lvl = 3; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 3) && (message.user.exp >=240)){
message.user.lvl = 4; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 4) && (messsage.user.exp >=310)){
message.user.lvl = 5; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 5) && (message.user.exp >= 390)){
message.user.lvl = 6; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 6) && (message.user.exp >= 470)){
message.user.lvl = 7; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 7) && (message.user.exp >= 530)){
message.user.lvl = 8; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 8) && (message.user.exp >= 640)){
message.user.lvl = 9; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((message.user.lvl == 9) && (message.user.exp >=740)){
message.user.lvl = 10; message.send(`🆙Ваш уровень был повышен! Теперь у вас ${message.user.lvl} уровень!`)
} if ((user.lvl == 1) && (user.exp >= 100)){
user.lvl = 2; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 2) && (user.exp >=170)){
user.lvl = 3; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 3) && (user.exp >=240)){
user.lvl = 4; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 4) && (user.exp >=310)){
user.lvl = 5; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 5) && (user.exp >= 390)){
user.lvl = 6; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 6) && (user.exp >= 470)){
user.lvl = 7; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 7) && (user.exp >= 530)){
user.lvl = 8; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 8) && (user.exp >= 640)){
user.lvl = 9; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} if ((user.lvl == 9) && (user.exp >=740)){
user.lvl = 10; vk.api.messages.send({user_id: user.id, message: `🆙Ваш уровень был повышен! Теперь у вас ${user.lvl} уровень!`})
} 
message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вы нанесли ${damageDealer} урона.
❤Ваши жизни: ${message.user.heal}
💔Жизней у соперника: ${user.heal} `)
vk.api.messages.send({ user_id: user.id, message: `Вам было нанесено ${damageDealer} урона.
❤Ваши жизни: ${user.heal}
💔Жизней у соперника: ${message.user.heal}`});
message.user.balance += 1;
message.user.gold = 0; user.gold = 0;
message.user.heal = 4500; user.heal = 4500; 
message.user.misc.areoReturn = 0; user.misc.areoReturn = 0;
message.user.areoReturn = 0; user.areoReturn = 0;
message.user.biz = 0; user.biz = 0;
user.misc.kastet = 0; message.user.misc.kastet = 0; 
user.misc.mech = 0; message.user.misc.mech = 0;
user.misc.sablya = 0; message.user.misc.sablya = 0;
message.user.misc.vizov = 0; user.misc.vizov = 0; 
message.user.xod = 0; user.xod = 0;
message.user.misc.startgame = 0; user.misc.startgame = 0;
message.user.misc.ready = 0; user.misc.ready = 0;
message.user.misc.whereiscrit = 0; user.misc.whereiscrit = 0;
message.user.misc.nasmeshkaLOCK = 0; user.misc.nasmeshkaLOCK = 0;
message.user.misc.weapon = 'Кулак'; user.misc.weapon = 'Кулак';
message.user.misc.yvedomFORshop = 0; user.misc.yvedomFORshop = 0;
message.user.misc.magicTime = 0; user.misc.magicTime = 0;
message.user.misc.magicBlood = 0; user.misc.magicBlood = 0;
message.user.misc.shield = 0; user.misc.shield = 0;
message.user.misc.goMagicBlood = 0; user.misc.goMagicBlood = 0;
message.user.misc.goMagicTime = 0; user.misc.goMagicTime = 0;
message.user.xodLOCK = 0; user.xodLOCK = 0;
message.user.misc.meta = 0; user.misc.meta = 0;
message.user.misc.vamp = 0; user.misc.vamp = 0;
message.user.misc.areo = 0; user.misc.areo = 0;
message.user.misc.nima = 0; user.misc.nima = 0;
message.user.misc.block = 0; user.misc.block = 0;
message.user.misc.metaRest = 0; user.misc.metaRest = 0;
message.user.misc.metaUse = 0; user.misc.metaUse = 0;
message.user.misc.nimaUse = 0; user.misc.nimaUse = 0;
message.user.misc.nimaRest = 0; user.misc.nimaRest = 0;
message.user.misc.nimaSCREAM = 0; user.misc.nimaSCREAM = 0;
message.user.misc.blockUse = 0; user.misc.blockUse = 0;
message.user.misc.areoReady = 0; user.misc.areoReady = 0;
message.user.misc.createAreo = 0; user.misc.createAreo = 0;
message.user.misc.areoAttackReadyForShield = 0; user.misc.areoAttackReadyForShield = 0;
message.user.misc.areoShield = 0; user.misc.areoShield = 0;
message.user.misc.ability = 0; user.misc.ability = 0;
message.user.misc.nasmeshkaNotice = false; user.misc.nasmeshkaNotice = false;
message.user.misc.Dark = 0; user.misc.Dark = 0;
message.user.misc.nimaSCREAMrest = 0; user.misc.nimaSCREAMrest = 0;
message.user.misc.DarkRest = 0; user.misc.DarkRest = 0;
message.user.misc.nimaHaunt = 0; user.misc.nimaHaunt = 0;
message.user.misc.nimaHauntRest = 0; user.misc.nimaHauntRest = 0;
message.user.misc.areoRest = 0; user.misc.areoRest = 0;
message.user.misc.nimaUseHaunt = 0; user.misc.nimaUseHaunt = 0;
message.user.misc.nimaOneTime = 1; user.misc.nimaOneTime = 1;
message.user.misc.areoOneTime = 1; user.misc.areoOneTime = 1;
message.user.misc.areoOneTime2 = 1; user.misc.areoOneTime2 = 1;
message.user.misc.Dark2 = 0; user.misc.Dark2 = 0;
message.user.misc.bloodTime = 0; user.misc.BloodTime = 0;
message.user.misc.nimaCanBeUsed = 0; user.misc.nimaCanBeUsed = 0;
message.user.misc.areoXod = 0; user.misc.areoReturn = 0;
message.user.misc.areoReturn = 0; user.misc.AreoXod = 0;
message.user.misc.goMagicTimeTwo = 0; user.misc.goMagicTimeTwo = 0;
message.user.misc.goMagicBlood = 0; user.misc.goMagicBlood = 0;
message.user.misc.goMagicBloodTwo = 0; user.misc.goMagicBloodTwo = 0;
const chestrandom = utils.random(1, 100);
if (chestrandom <= 20){
message.user.misc.chest++;
vk.api.messages.send({ user_id: message.user.id, message: `[id${message.user.id}|${message.user.tag}], Вам выпал сундук. 🧳 Для того, чтобы открыть его, - [Открыть Сундук].`});
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Игроку [id${message.user.id}|${message.user.tag}] вместе с победой выпал сундук.🧳`})
}

vk.api.messages.send({user_id: user.id, message: `${`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Победил [id${message.user.id}|${message.user.tag}]!🎉💥💥 И это ${message.user.balance} победа игрока! Посмотреть топ по победам - "Топ".`}`,
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${user.misc.chest >= 1 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
return message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вы победили!🎉💥💥 И это Ваша ${message.user.balance} победа! Посмотреть топ по победам - "Топ".`,{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})

}
// ------------------------------------------- УСЛОВИЕ ПОБЕДЫ ------------------------------------------ //

if ((check > 30) && (check <= 157)){
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}📢 Вам было нанесено ${damageDealer} HP! Враг получил 12 золота!
${message.user.misc.vamp ? `❣Враг отрегенерировал: ${regen} здоровья` : `👤Ваш ход!`}
${message.user.misc.vamp ? `👤Ваш ход!` : ``}`});
return message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вы нанесли урон: ${damageDealer} HP! Золото + 12
✏Следующий ход делает [id${user.id}|${user.tag}]
💰Ваше золото: ${message.user.gold}
❤Ваши жизни: ${message.user.heal}
🏹Ваше оружие: ${message.user.misc.weapon}
💔Жизней у соперника: ${user.heal}
${message.user.misc.vamp ? `❣Регенерация: ${regen}` : ``}`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});
}
if ((check > 1) && (check <= 30)){
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}📢 Критический урон! Вам было нанесено ${damageDealer} HP! Враг получил 14 золота!
${message.user.misc.vamp ? `❣Враг отрегенерировал: ${regen} здоровья` : `👤Ваш ход!`}
${message.user.misc.vamp ? `👤Ваш ход!` : ``}`});
return message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}❗Критический урон! Удар составил ${damageDealer} HP! Золото + 14
✏Следующий ход делает [id${user.id}|${user.tag}]
💰Ваше золото: ${message.user.gold}
❤Ваши жизни: ${message.user.heal}
🏹Ваше оружие: ${message.user.misc.weapon}
💔Жизней у соперника: ${user.heal}
${message.user.misc.vamp ? `❣Регенерация: ${regen}` : ``}`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});
}}
//--------------------------------------------------САБЛЯ-----------------------------------------------//







});
//-------------------------------------------[Открыть сундук]-------------------------------------------------------//
cmd.hear(/^(?:Открыть)\s(?:🧳Сундук|сундук)$/i, async (message, bot) => {
if (message.user.biz !== 0){return bot(`во время PvP открыть сундук нет возможности.`)}
if (message.user.LockPvPforPvE == true){return bot(`во время PvE открыть сундук Невозможно`)}
message.user.LeaveBan = true; message.user.SearchBan = true;
if (message.user.misc.bloodTime == true){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вашей кровью завладели, недоступно.`)}
if (message.user.xodLOCK == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}время остановлено.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if ((message.user.xod !== 1)&&(message.user.biz !== 0)){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}], ждите своего хода.`)}
if (message.user.pve.completeOFpve) {return bot(`в PVE эта команда недоступна.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if ((message.user.misc.chest <= 0) && (message.user.misc.oskolki <100)){
await bot(`из сундука может выпасть следующее:
1. Эксклюзивный значок перед именем - 🔱
2. Два сундука 🧳
3. Смена никнейма 📝
4. Доступ к насмешкам 🤡
5. Осколки на открытие сундука✨`) 
await bot(`Ваши осколки: ${message.user.misc.oskolki}. Для открытия требуется 100 осколков✨. 🚫`);
return bot(`у Вас нет сундуков. 🚫`)
}
if ((message.user.misc.chest > 0) && (message.user.misc.oskolki >= 100)){
return bot(`Выберите, за что вы хотите открыть сундук одной из команд: [✨Осколки] [🧳Сундук]. ♻`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🧳Сундук"
},
"color": 'positive'
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✨Осколки"
},
"color": "positive"
},
]
],

})
});
}
if (message.user.misc.chest > 0){message.user.misc.OPENCHEST = 1; message.user.misc.chest--;};
if (message.user.misc.oskolki >= 100){
await bot(`Было потрачено 100 осколков✨`);
message.user.misc.CHESTOPEN = 1; 
message.user.misc.oskolki = message.user.misc.oskolki - 100;};

if ((message.user.misc.OPENCHEST == 1) || (message.user.misc.CHESTOPEN == 1)){
message.user.misc.OPENCHEST = 0;
message.user.misc.CHESTOPEN = 0;
await bot(`из сундука может выпасть следующее:
1. Эксклюзивный значок перед именем - 🔱
2. Два сундука 🧳
3. Смена никнейма 📝
4. Доступ к насмешкам 🤡
5. Осколки на открытие сундука✨`) 
await bot(`Идёт открытие сундука...`);        
var i = 5;
while (i>0){
message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Открытие сундука! ${i} секунд(ы)!`);
i--;
}
if (i <= 0){
let whatwaswon = utils.random(1, 100);
if (whatwaswon <= 5){
if (message.user.tag == '🔱' + message.user.misc.firstnameS){
message.user.misc.oskolki = message.user.misc.oskolki + 50;
await bot(`у Вас уже есть эксклюзивный значок перед именем. Вам было выдано 50 осколков. `);
return bot(`Ваши осколки: ${message.user.misc.oskolki}✨`,{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
}   
message.user.misc.firstnameS = message.user.tag;                               
message.user.tag = '🔱' + message.user.tag;
return bot(`Вы выиграли значок перед именем! Теперь Вы уникальны!`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
}
if ((whatwaswon > 5) && (whatwaswon <= 7)){                                     
message.user.misc.chest += 2;
return bot(`Вы выиграли 2 сундука. Ваши сундуки: ${message.user.misc.chest}`,{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
}
if ((whatwaswon > 7) && (whatwaswon <= 15)){
if (message.user.misc.changenickname == 1){
message.user.misc.oskolki = message.user.misc.oskolki + 50;
await bot(`у Вас уже есть дополнительная смена ника. Вам было выдано 50 осколков.`);
return bot(`Ваши осколки: ${message.user.misc.oskolki}`,{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
}                                       
message.user.misc.changenickname = 1;
return bot(`Вы выиграли смену ника! Используйте [Сменить] [Ник/имя]`,{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
}
if ((whatwaswon > 15) && (whatwaswon <= 20)){
if (message.user.misc.nasmeshka){
message.user.misc.oskolki = message.user.misc.oskolki + 50;
await bot(`у Вас уже есть Доступ к насмешкам. Вам было выдано 50 осколков.`);
return bot(`Ваши осколки: ${message.user.misc.oskolki}`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
}                                       
message.user.misc.nasmeshka = 1;
return bot(`Вы выиграли доступ к насмешкам. Используйте [Насмешка] в бою.`,{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
} 
if ((whatwaswon > 20) && (whatwaswon <= 100)){
let whatwon = utils.random(1, 100)
if ((whatwon >= 1) && (whatwon <= 5)){
message.user.misc.oskolki= message.user.misc.oskolki + 100;
return bot(`Вы выиграли 100 осколков! Ваши осколки - ${message.user.misc.oskolki}✨`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
};
if ((whatwon > 5) && (whatwon <= 20)){
message.user.misc.oskolki= message.user.misc.oskolki + 40;
return bot(`Вы выиграли 40 осколков! Ваши осколки - ${message.user.misc.oskolki}✨`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
};
if ((whatwon > 20) && (whatwon <= 100)){
message.user.misc.oskolki= message.user.misc.oskolki + 20;
return bot(`Вы выиграли 20 осколков! Ваши осколки - ${message.user.misc.oskolki}✨`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
};


}
}
}

});
//-------------------------------------------[Осколки]-------------------------------------------------------//
cmd.hear(/^(?:Осколки|✨осколки)$/i, async (message, bot) => {
if (message.user.biz !== 0){return bot(`во время PvP открыть сундук нет возможности.`)}
if (message.user.LockPvPforPvE == true){return bot(`во время PvE открыть сундук Невозможно`)}
message.user.LeaveBan = true; message.user.SearchBan = true;
if (message.user.misc.bloodTime == true){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вашей кровью завладели, недоступно.`)}
if (message.user.xodLOCK == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}время остановлено.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if ((message.user.xod !== 1)&&(message.user.biz !== 0)){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}], ждите своего хода.`)}
if (message.user.pve.completeOFpve) {return bot(`в PVE эта команда недоступна.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if (message.user.misc.chest>=1){
message.send('У вас имеется как минимум 1 сундук. Можете открыть открыть его, потратив один, - [Сундук]')
}
if  (message.user.misc.oskolki <100){
await bot(`из сундука может выпасть следующее:
1. Эксклюзивный значок перед именем - 🔱
2. Два сундука 🧳
3. Смена никнейма 📝
4. Доступ к насмешкам 🤡
5. Осколки на открытие сундука✨`,{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
}) 
return bot(`Ваши осколки: ${message.user.misc.oskolki}. Для открытия требуется 100 осколков✨. 🚫`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
}
if (message.user.misc.oskolki >=100){
message.user.misc.oskolki = message.user.misc.oskolki - 100;
await bot(`из сундука может выпасть следующее:
1. Эксклюзивный значок перед именем - 🔱
2. Два сундука 🧳
3. Смена никнейма 📝
4. Доступ к насмешкам 🤡
5. Осколки на открытие сундука✨`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
await bot(`Идёт открытие сундука...`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})        
var i = 5;
while (i>0){
message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Открытие сундука! ${i} секунд(ы)!`);
i--;
}
if (i <= 0){
let whatwaswon = utils.random(1, 100);
if (whatwaswon <= 5){
if (message.user.tag == '🔱' + message.user.misc.firstnameS){
message.user.misc.oskolki = message.user.misc.oskolki + 50;
await bot(`у Вас уже есть эксклюзивный значок перед именем. Вам было выдано 50 осколков. `);
return bot(`Ваши осколки: ${message.user.misc.oskolki}✨`,
{												keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
}   
message.user.misc.firstnameS = message.user.tag;                               
message.user.tag = '🔱' + message.user.tag;
return bot(`Вы выиграли значок перед именем! Теперь Вы уникальны!`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
}
if ((whatwaswon > 5) && (whatwaswon <= 7)){                                     
message.user.misc.chest += 2;
return bot(`Вы выиграли 2 сундука. Ваши сундуки: ${message.user.misc.chest}`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
}
if ((whatwaswon > 7) && (whatwaswon <= 15)){
if (message.user.misc.changenickname == 1){
message.user.misc.oskolki = message.user.misc.oskolki + 50;
await bot(`у Вас уже есть дополнительная смена ника. Вам было выдано 50 осколков.`);
return bot(`Ваши осколки: ${message.user.misc.oskolki}`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
}                                       
message.user.misc.changenickname = 1;
return bot(`Вы выиграли смену ника! Используйте [Сменить] [Ник/имя]`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
}
if ((whatwaswon > 15) && (whatwaswon <= 20)){
if (message.user.misc.nasmeshka){
message.user.misc.oskolki = message.user.misc.oskolki + 50;
await bot(`у Вас уже есть Доступ к насмешкам. Вам было выдано 50 осколков.`);
return bot(`Ваши осколки: ${message.user.misc.oskolki}`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
}                                       
message.user.misc.nasmeshka = 1;
return bot(`Вы выиграли доступ к насмешкам. Используйте [Насмешка] в бою.`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
} 
if ((whatwaswon > 20) && (whatwaswon <= 100)){
let whatwon = utils.random(1, 100)
if ((whatwon >= 1) && (whatwon <= 5)){
message.user.misc.oskolki= message.user.misc.oskolki + 100;
return bot(`Вы выиграли 100 осколков! Ваши осколки - ${message.user.misc.oskolki}✨`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
};
if ((whatwon > 5) && (whatwon <= 20)){
message.user.misc.oskolki= message.user.misc.oskolki + 40;
return bot(`Вы выиграли 40 осколков! Ваши осколки - ${message.user.misc.oskolki}✨`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
};
if ((whatwon > 20) && (whatwon <= 100)){
message.user.misc.oskolki= message.user.misc.oskolki + 20;
return bot(`Вы выиграли 20 осколков! Ваши осколки - ${message.user.misc.oskolki}✨`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
};


}
}
}

});


//-------------------------------------------[Сундук]-------------------------------------------------------//
cmd.hear(/^(?:Сундук|🧳сундук)$/i, async (message, bot) => {
if (message.user.biz !== 0){return bot(`во время PvP открыть сундук нет возможности.`)}
if (message.user.LockPvPforPvE == true){return bot(`во время PvE открыть сундук Невозможно`)}
message.user.LeaveBan = true;message.user.SearchBan = true;
if (message.user.misc.bloodTime == true){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вашей кровью завладели, недоступно.`)}
if (message.user.xodLOCK == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}время остановлено.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if ((message.user.xod !== 1)&&(message.user.biz !== 0)){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}], ждите своего хода.`)}
if (message.user.pve.completeOFpve) {return bot(`в PVE эта команда недоступна.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if (message.user.misc.oskolki>=100){
message.send('У вас имеется как минимум 100 осколков. Можете открыть сундук за осколки - [Осколки]')
}
if (message.user.misc.chest <= 0){
await bot(`из сундука может выпасть следующее:
1. Эксклюзивный значок перед именем - 🔱
2. Два сундука 🧳
3. Смена никнейма 📝
4. Доступ к насмешкам 🤡
5. Осколки на открытие сундука✨`,{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
}) 
return bot(`у Вас нет сундуков. 🚫`)
}
else if (message.user.misc.chest > 0){
message.user.misc.chest-=1; let LOCK = false;
await bot(`из сундука может выпасть следующее:
1. Эксклюзивный значок перед именем - 🔱
2. Два сундука 🧳
3. Смена никнейма 📝
4. Доступ к насмешкам 🤡
5. Осколки на открытие сундука✨`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
await bot(`Идёт открытие сундука...`);        
var i = 5;
while (i>0){
message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Открытие сундука! ${i} секунд(ы)!`);
i--;
}
if (i <= 0){
let whatwaswon = utils.random(1, 100);
if (whatwaswon <= 5){
if (message.user.tag == '🔱' + message.user.misc.firstnameS){
message.user.misc.oskolki = message.user.misc.oskolki + 50;
await bot(`у Вас уже есть эксклюзивный значок перед именем. Вам было выдано 50 осколков. `);
return bot(`Ваши осколки: ${message.user.misc.oskolki}✨`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
}   
message.user.misc.firstnameS = message.user.tag;                               
message.user.tag = '🔱' + message.user.tag;
return bot(`Вы выиграли значок перед именем! Теперь Вы уникальны!`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
}
if ((whatwaswon > 5) && (whatwaswon <= 7)){                                     
message.user.misc.chest += 2;
return bot(`Вы выиграли 2 сундука. Ваши сундуки: ${message.user.misc.chest}`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
}
if ((whatwaswon > 7) && (whatwaswon <= 15)){
if (message.user.misc.changenickname == 1){
message.user.misc.oskolki = message.user.misc.oskolki + 50;
await bot(`у Вас уже есть дополнительная смена ника. Вам было выдано 50 осколков.`);
return bot(`Ваши осколки: ${message.user.misc.oskolki}`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
}                                       
message.user.misc.changenickname = 1;
return bot(`Вы выиграли смену ника! Используйте [Сменить] [Ник/имя]`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
}
if ((whatwaswon > 15) && (whatwaswon <= 20)){
if (message.user.misc.nasmeshka){
message.user.misc.oskolki = message.user.misc.oskolki + 50;
await bot(`у Вас уже есть Доступ к насмешкам. Вам было выдано 50 осколков.`);
return bot(`Ваши осколки: ${message.user.misc.oskolki}`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
}                                       
message.user.misc.nasmeshka = 1;
return bot(`Вы выиграли доступ к насмешкам. Используйте [Насмешка] в бою.`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
} 
if ((whatwaswon > 20) && (whatwaswon <= 100)){
let whatwon = utils.random(1, 100)
if ((whatwon >= 1) && (whatwon <= 5)){
message.user.misc.oskolki= message.user.misc.oskolki + 100;
return bot(`Вы выиграли 100 осколков! Ваши осколки - ${message.user.misc.oskolki}✨`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
};
if ((whatwon > 5) && (whatwon <= 20)){
message.user.misc.oskolki= message.user.misc.oskolki + 40;
return bot(`Вы выиграли 40 осколков! Ваши осколки - ${message.user.misc.oskolki}✨`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
};
if ((whatwon > 20) && (whatwon <= 100)){
message.user.misc.oskolki= message.user.misc.oskolki + 20;
return bot(`Вы выиграли 20 осколков! Ваши осколки - ${message.user.misc.oskolki}✨`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
});
};
}
}
}


});

//-------------------------------------------[Сменить ник]-------------------------------------------------------//
cmd.hear(/^(?:Сменить|смена)\s(Ник|имя|никнейм|ника)?$/i, async (message, bot) => { 
message.user.LeaveBan = true;message.user.SearchBan = true;
if (message.user.misc.bloodTime == true){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вашей кровью завладели, недоступно.`)}
if (message.user.xodLOCK == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}время остановлено.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if ((message.user.xod !== 1)&&(message.user.biz !== 0)){return bot(`${((message.user.misc.Dark == 1) || 
(message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}], ждите своего хода.`)}
if (message.user.pve.completeOFpve) {return bot(`в PVE эта команда недоступна.`)}; if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) 
|| (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам cлишком страшно.`)}
if (message.user.misc.changenickname <= 0) return bot('у Вас нет возможности сменить имя.'); let txt = (message.user.misc.changenickname <= 0) ? 'nope' : 'Введите желаемое имя.';
if (txt == 'nope'){return bot(`у Вас нет возможности сменить имя. Ее можно получить из сундука - [Открыть] [Сундук].`)}; message.send(txt+
`${message.user.tag == '🔱' + message.user.misc.firstnameS ? ' Не переживайте, значок останится с Вами.' : '' }`);
message.user.misc.bannick = false; cmd.hear(/^([a-zа-яё\d]+|\d+)?$/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true; if (message.user.misc.bannick){return}
let nickName = message.args[0]; let nameFirst = message.args[0]; nickName = nickName.length; nickName = Number.parseInt(nickName); if (nickName >10){message.user.misc.bannick = true; 
return bot('Это слишком длинный никнейм!')}; if ((nameFirst[0] == "с") && (nameFirst[1] == "в") && (nameFirst[2] == "о") && (nameFirst[3] == "е") 
&& ((nameFirst[4] == "й") || ((nameFirst[4] == "м")&&(nameFirst[5] == "у")))){return bot('Недопустимое имя.')}
message.args[0] = message.args[0].replace(/(пизда|хуй|член|ебал|мамке|сестре|бате|отчиму|маме|матери|сестренке|блять|нахуй|ебать)/ig, ' Запрещено!');
if (message.args[0] == ' Запрещено!') return bot(message.args[0]); if (((nameFirst[nickName-1] == "6") && (nameFirst[nickName-2] == "6") && (nameFirst[nickName-3] == "6"))  || 
((nameFirst[nickName-nickName] == "6") && (nameFirst[nickName-nickName+1] == "6") && (nameFirst[nickName-nickName+2] == "6"))) return bot('Такие цифры запрещены.');
if (message.user.tag == '🔱' + message.user.misc.firstnameS){ message.user.tag = message.args[0]; message.user.misc.firstnameS = message.user.tag; 
message.user.tag = '🔱' + message.user.tag; } 
else { message.user.misc.firstnameS = message.user.tag; message.user.tag = message.args[0];} message.user.misc.change = 1; message.user.misc.changenickname -= 1; 
message.user.misc.bannick = true; message.user.misc.yvedombannick = true; return bot(`Вы сменили имя на ${message.user.tag}`); }); 
cmd.hear(/^([a-zа-яё]+|\d)\s([a-zа-яё]+|\d)+/i, async (message, bot) => { message.user.LeaveBan = true; if (message.user.misc.bannick){return}; 
message.user.SearchBan = true; message.user.misc.bannick = true; return bot('используйте никнейм длиною в 1 слово.')});
cmd.hear(/^(.*)?$/i, async (message, bot) => {
message.user.LeaveBan = true; if (message.user.misc.bannick){return}; message.user.SearchBan = true;
message.user.misc.bannick = true; return bot('Имя может содержать только цифры и буквы.')});
});

//-------------------------------------------[Насмешка]-------------------------------------------------------//
cmd.hear(/^(?:Насмешка|🤡Насмешка|🤡 Насмешка)?$/i, async (message, bot) => { 
message.user.LeaveBan = true; message.user.SearchBan = true;
if (message.user.misc.bloodTime == true){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вашей кровью завладели, недоступно.`)}
if (message.user.xodLOCK == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}время остановлено.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if ((message.user.xod !== 1)&&(message.user.biz !== 0)){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}], ждите своего хода.`)}
if (message.user.pve.completeOFpve) {return bot(`в PVE эта команда недоступна.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if (message.user.misc.startgame !== 1){
return bot(`Вам никто не бросал вызов.🔕`)}
if(!message.user.misc.nasmeshka){return bot(`Насмешку можно получить из сундука - "Открыть сундук".`)};
if (message.user.misc.nasmeshkaLOCK !== 0){return bot(`спам запрещен.`)};
let user = users.find(x=> x.uid === Number(message.user.biz));
let rand = utils.random(1, 11); var osk = '';
message.user.misc.nasmeshkaNotice = false;
if (rand == 1) {osk = "Ливай🤡"};
if (rand == 2) {osk = "Это ты🤡"};
if (rand == 3) {osk = "Выходи🤡"};
if (rand == 4) {osk = "rLy cloWN ?№;?🤡"};
if (rand == 5) {osk = "Клавн🤡"};
if (rand == 6) {osk = "🤡nwolC"};
if (rand == 7) {osk = "🤡"};
if (rand == 8) {osk = "ты 🤡 или 🤡 ой они же одинаковы🤡"};
if (rand == 9) {osk = "случайно сказал что ты🤡"};
if (rand == 10) {osk = "clown клоун клавн или 🤡"};
if (rand == 11) {osk = "клОуН🤡"};
vk.api.messages.send({ user_id: user.id, message:`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}] испозовал насмешку:\n ${osk}`});
return message.user.misc.nasmeshkaLOCK = 3;
});
//-------------------------------------------[Покинуть]-------------------------------------------------------//
cmd.hear(/^(?:Покинуть|🚫 Покинуть|🚫Покинуть)$/i, async (message, bot) => {
message.user.SearchBan = true; 
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if (message.user.misc.vizov !== 1) return bot(`Нечего покидать.`)
let user = users.find(x=> x.uid === Number(message.user.biz));
if ((message.user.heal <= 3500) || (user.heal <= 3500)){return bot(`Невозможно покинуть игру.`)} 
message.user.LeaveBan = true;
message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вы точно хотите покинуть игру? Ваша порядочность составляет ${message.user.Decency}. Если Вы покинете игру, она уменьшится на 1000.`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✅Да"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⛔Нет"
},
"color": "negative"
}
]
],

})
});
//-------------------------------------------[Да]-------------------------------------------------------//
cmd.hear(/^(?:✅Да|Да)$/i, async (message, bot) => {
if (message.user.LeaveBan){return}
message.user.SearchBan = true;
message.user.LeaveBan = true;
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
vk.api.messages.send({ user_id: user.id, message: `${`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Игрок [id${message.user.id}|${message.user.tag}] покинул игру.`}`,
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
message.user.gold = 0; user.gold = 0;
message.user.heal = 4500; user.heal = 4500; 
message.user.misc.areoReturn = 0; user.misc.areoReturn = 0;
message.user.areoReturn = 0; user.areoReturn = 0;
message.user.biz = 0; user.biz = 0;
user.misc.kastet = 0; message.user.misc.kastet = 0; 
user.misc.mech = 0; message.user.misc.mech = 0;
user.misc.sablya = 0; message.user.misc.sablya = 0;
message.user.misc.vizov = 0; user.misc.vizov = 0; 
message.user.xod = 0; user.xod = 0;
message.user.misc.startgame = 0; user.misc.startgame = 0;
message.user.misc.ready = 0; user.misc.ready = 0;
message.user.misc.whereiscrit = 0; user.misc.whereiscrit = 0;
message.user.misc.nasmeshkaLOCK = 0; user.misc.nasmeshkaLOCK = 0;
message.user.misc.weapon = 'Кулак'; user.misc.weapon = 'Кулак';
message.user.misc.yvedomFORshop = 0; user.misc.yvedomFORshop = 0;
message.user.misc.magicTime = 0; user.misc.magicTime = 0;
message.user.misc.magicBlood = 0; user.misc.magicBlood = 0;
message.user.misc.shield = 0; user.misc.shield = 0;
message.user.misc.goMagicBlood = 0; user.misc.goMagicBlood = 0;
message.user.misc.goMagicTime = 0; user.misc.goMagicTime = 0;
message.user.xodLOCK = 0; user.xodLOCK = 0;
message.user.misc.meta = 0; user.misc.meta = 0;
message.user.misc.vamp = 0; user.misc.vamp = 0;
message.user.misc.areo = 0; user.misc.areo = 0;
message.user.misc.nima = 0; user.misc.nima = 0;
message.user.misc.block = 0; user.misc.block = 0;
message.user.misc.metaRest = 0; user.misc.metaRest = 0;
message.user.misc.metaUse = 0; user.misc.metaUse = 0;
message.user.misc.nimaUse = 0; user.misc.nimaUse = 0;
message.user.misc.nimaRest = 0; user.misc.nimaRest = 0;
message.user.misc.nimaSCREAM = 0; user.misc.nimaSCREAM = 0;
message.user.misc.blockUse = 0; user.misc.blockUse = 0;
message.user.misc.areoReady = 0; user.misc.areoReady = 0;
message.user.misc.createAreo = 0; user.misc.createAreo = 0;
message.user.misc.areoAttackReadyForShield = 0; user.misc.areoAttackReadyForShield = 0;
message.user.misc.areoShield = 0; user.misc.areoShield = 0;
message.user.misc.ability = 0; user.misc.ability = 0;
message.user.misc.nasmeshkaNotice = false; user.misc.nasmeshkaNotice = false;
message.user.misc.Dark = 0; user.misc.Dark = 0;
message.user.misc.nimaSCREAMrest = 0; user.misc.nimaSCREAMrest = 0;
message.user.misc.DarkRest = 0; user.misc.DarkRest = 0;
message.user.misc.nimaHaunt = 0; user.misc.nimaHaunt = 0;
message.user.misc.nimaHauntRest = 0; user.misc.nimaHauntRest = 0;
message.user.misc.areoRest = 0; user.misc.areoRest = 0;
message.user.misc.nimaUseHaunt = 0; user.misc.nimaUseHaunt = 0;
message.user.misc.nimaOneTime = 1; user.misc.nimaOneTime = 1;
message.user.misc.areoOneTime = 1; user.misc.areoOneTime = 1;
message.user.misc.areoOneTime2 = 1; user.misc.areoOneTime2 = 1;
message.user.misc.Dark2 = 0; user.misc.Dark2 = 0;
message.user.misc.bloodTime = 0; user.misc.BloodTime = 0;
message.user.misc.nimaCanBeUsed = 0; user.misc.nimaCanBeUsed = 0;
message.user.misc.areoXod = 0; user.misc.areoReturn = 0;
message.user.misc.areoReturn = 0; user.misc.AreoXod = 0;

message.user.misc.goMagicTimeTwo = 0; user.misc.goMagicTimeTwo = 0;
message.user.misc.goMagicBlood = 0; user.misc.goMagicBlood = 0;
message.user.misc.goMagicBloodTwo = 0; user.misc.goMagicBloodTwo = 0;
message.user.Decency -= 1000; message.user.DecencyCounter = 1;
if (message.user.Decency <= 0) {
message.user.DecencyBan = true; message.user.ban = true;
message.send(`У вас 0 порядочности: Вы слишком часто покидаете игры. 
🎰Вы были забанены на 6 часов.`)
setTimeout(async () => {
message.user.DecencyBan = false;
message.user.Decency = 250;
message.user.ban = false;
console.log('razban')
}, 21600000);       
}      	
return bot(`Вы покинули игру.`,				
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
});
//-------------------------------------------[Нет]-------------------------------------------------------//
cmd.hear(/^(?:⛔Нет|Нет)$/i, async (message, bot) => {
if (message.user.LeaveBan){return}
message.user.SearchBan = true;

if (message.user.pve.completeOFpve) {return bot(`в PVE эта команда недоступна.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
return bot(`Игра не будет покинута`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥 Профиль"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🤜🏻Удар"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🛒Магазин"
},
"color": "primary"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🎯Продать"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📈Прокачать"
},
"color": `${message.user.misc.upgrade == true ? 'primary' : 'secondary'}`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${((message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? "🔮Магия" : message.user.misc.magicBlood == 1 ? '💉Кровь' : '⏳Время'}`
},
"color": `${((message.user.gold >= 155) && (message.user.misc.magicTime == 0) && (message.user.misc.magicBlood == 0)) ? 'primary' : ( ((message.user.misc.magicBlood == 1) || (message.user.misc.magicTime == 1)) && ((message.user.misc.goMagicTime == 1) || (message.user.misc.goMagicBlood == 1)) ) ? 'primary' : 'secondary' }`
}
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": '⛑Сверхспособности'
},
"color": `${((message.user.misc.meta == 0) && (message.user.gold>= 60)) ? 'primary' : ((message.user.misc.vamp == 0) && (message.user.gold >= 90)) ? 'primary' : ((message.user.misc.areo == 0) && (message.user.gold >=125)) ? 'primary' : ((message.user.misc.nima == 0) && (message.user.gold >=160)) ? 'primary' : ((message.user.misc.block == 0) && (message.user.gold >= 205)) ? 'primary' : 'secondary'}`
}
],  
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.meta == 1 ? `🦍Метаморф` : `Недоступно.`}`
},
"color": `${((message.user.misc.meta == 1) && (message.user.misc.metaUse == 1))? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.areoAttackReadyForShield == 1 ? '🌀Атаковать полем' : message.user.misc.areo == 1 ? `🌀Защитное поле` : `Недоступно.`}`
},
"color": `${((message.user.misc.areo == 1) && (message.user.misc.createAreo == 1)) ? 'primary' : 'secondary'}`
},
],
[
{			
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.nima == 1 ? `🐶Превращение в оборотня` : `Недоступно.`}`
},
"color": `${((message.user.misc.nima == 1) && (message.user.misc.nimaUse == 1)) ? 'primary' : 'secondary'}`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `${message.user.misc.block == 1 ? '🔒Блокировка: лишить способности' : 'Недоступно.'}`
},
"color": `${message.user.misc.blockUse == 1 ? 'primary' : 'secondary'}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🚫 Покинуть" 
},
"color": `${((message.user.heal >=3500)||(user.heal >= 3500)) ? "negative" : "secondary"}`
}
]
],

})
});
});

});

//-------------------------------------------[Топ]-------------------------------------------------------//
cmd.hear(/^(?:топ|🏆Топ)$/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true;
if (message.user.misc.bloodTime == true){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вашей кровью завладели, недоступно.`)}
if (message.user.xodLOCK == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}время остановлено.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
if ((message.user.xod !== 1)&&(message.user.biz !== 0)){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}], ждите своего хода.`)}
if (message.user.pve.completeOFpve) {return bot(`в PVE эта команда недоступна.`)}
if (message.user.misc.nimaSCREAM == 1){return bot(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑н`: `н`}евозможно... Вам слишком страшно.`)}
message.user.misc.chest = 1;
let top = [];
users.map(x=> {
top.push({ balance: x.balance, rating: x.rating, tag: x.tag, id: x.id, mention: x.mention });});
top.sort((a, b) => {return b.balance - a.balance;});
let text = ``;
const find = () => {let pos = 1000;for (let i = 0; i < top.length; i++)
{if(top[i].id === message.senderId) return pos = i;}
return pos;}
for (let i = 0; i < 3; i++){
if(!top[i]) return;
const user = top[i];
text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} @id${user.id} (${user.tag}) — Победы - ${utils.rn(user.balance)}
`;
}
return bot(`топ игроков по победам:
${text}
—————————————————
${utils.gi(find() + 1)} ${message.user.tag} — 👑${utils.sp(message.user.balance)}`);
});





//-------------------------------------------[Недоступно]-------------------------------------------------------//
cmd.hear(/^(?:Недоступно.)$/i, async (message, bot) => {
message.user.LeaveBan = true; message.user.SearchBan = true;
return
});






//-------------------------------------------[Рестарт]-------------------------------------------------------//
cmd.hear(/^(?:restart)$/i, async (message, bot) => {
if (message.user.uid !== 3){return bot('недоступно')}
await bot(`бот уходит в перезагрузку.`);
await saveUsers();
process.exit(-1);
});
//-------------------------------------------[save]-------------------------------------------------------//
cmd.hear(/^(?:save)$/i, async (message, bot) => {
if (message.user.uid !== 3){return bot('недоступно')}
await bot(`saved.`);
await saveUsers();
console.log('saved')
});
//-------------------------------------------[Бан]-------------------------------------------------------//
cmd.hear(/^(?:бан)\s([0-9]+)$/i, async (message, bot) => {
if (message.user.uid !== 3)return; 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`неверный ID игрока`); 
await bot(`вы забанили игрока "${user.tag}"`); 
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[❗Внимание] 
Администратор ${message.user.tag} выдал вам бан!` }); 
return user.ban = true; 
});
//-------------------------------------------[Разбанй]-------------------------------------------------------//
cmd.hear(/^(?:разбан|разбанить)\s([0-9]+)$/i, async (message, bot) => {
if (message.user.uid !== 3) return;  
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`неверный ID игрока`);  
await bot(`вы разбанили игрока "${user.tag}"`); 
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[❗Внимание] 
Администратор [id${message.user.id}|${message.user.tag}] вас разбанил!` }); 
return user.ban = false;
});
//-------------------------------------------[Выдать смену]-------------------------------------------------------//
cmd.hear(/^(?:хилка)\s([0-9]+)$/i, async (message, bot) => {
if (message.user.uid !== 3) return;  
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`неверный ID игрока`);  
message.user.heal = 15000;
user.heal = 15000;
await bot(`успешно!`); 
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[❗Внимание] 
Администратор [id${message.user.id}|${message.user.tag}] выдал нам 15к хп!` }); 
});
//-------------------------------------------[Выдать смену]-------------------------------------------------------//
cmd.hear(/^(?:дать|выдать|give)\s(смену)\s([0-9]+)\s([0-9]+)?$/i, async (message, bot) => {
if (message.user.uid !== 3){return bot('недоступно')}
let user = users.find(x=> x.uid === Number(message.args[2]));
if(!user) return; 
let colvo = message.args[3];
user.misc.changenickname += colvo;
vk.api.messages.send({ user_id: user.id, message:`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Вам был выдан(о) ${colvo} доступ(ов) к смене никнейма.`});
return message.send('успешно.');
});
cmd.hear(/^(?:сменить)\s([0-9]+)\s(.*)?$/i, async (message, bot) => {
if (message.user.uid !== 3){return bot('недоступно')}
let user = users.find(x=> x.uid === Number(message.args[1]));
if(!user) return; 
user.misc.firstnameS = user.tag; user.tag = message.args[2];
vk.api.messages.send({ user_id: user.id, message:`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}
Администратор [id${message.user.id}|${message.user.tag}] сменил ваше прошлое имя - "${user.misc.firstnameS}" на "${user.tag}"`});
return message.send('успешно.');
});
//-------------------------------------------[Выдать сундук]-------------------------------------------------------//
cmd.hear(/^(?:дать|выдать|give)\s(сундук|chest)\s([0-9]+)\s([0-9]+)?$/i, async (message, bot) => { //id -> quanity
if (message.user.uid !== 3){return bot('недоступно')}
let user = users.find(x=> x.uid === Number(message.args[2]));
if(!user) return; let colvo = message.args[3];
colvo = Number.parseInt(colvo);
let cst = Number.parseInt(user.misc.chest);
let ss = cst+colvo;
user.misc.chest = ss;
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}${`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${user.id}|${user.tag}], Вам был выдано ${colvo} сундук(ов). Ваши сундуки - ${user.misc.chest}`}`, 
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${user.misc.chest >= 1 || user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
return message.send('успешно.');
});
/-------------------------------------------[Выдать осколки]-------------------------------------------------------//
cmd.hear(/^(?:дать|выдать|give)\s(осколки)\s([0-9]+)\s([0-9]+)?$/i, async (message, bot) => { //id -> quanity
if (message.user.uid !== 3){return bot('недоступно')}
let user = users.find(x=> x.uid === Number(message.args[2]));
if(!user) return; let colvo = message.args[3];
colvo = Number.parseInt(colvo);
let cst = Number.parseInt(user.misc.oskolki);
let ss = cst+colvo;
user.misc.oskolki = ss;
vk.api.messages.send({ user_id: user.id, message: `${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}${`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${user.id}|${user.tag}], Вам был выдано ${colvo} осколок(ов). Ваши осколки - ${user.misc.oskolki}`}`, 
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${user.misc.chest >= 1 || user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
return message.send('успешно.');
});
//-------------------------------------------[Обнулить]-------------------------------------------------------//
cmd.hear(/^(?:обнулить)\s([0-9]+)$/i, async (message, bot) => {
if (message.user.uid !== 3){return bot('недоступно')}
let user = users.find(x=> x.uid === Number(message.args[1]));
vk.api.messages.send({ user_id: user.id, message: `${`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}игра была завершена администратором.`}`,
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${user.misc.chest >= 1 || user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
message.user.gold = 0; user.gold = 0;
message.user.heal = 4500; user.heal = 4500; 
message.user.misc.areoReturn = 0; user.misc.areoReturn = 0;
message.user.areoReturn = 0; user.areoReturn = 0;
message.user.biz = 0; user.biz = 0;
user.misc.kastet = 0; message.user.misc.kastet = 0; 
user.misc.mech = 0; message.user.misc.mech = 0;
user.misc.sablya = 0; message.user.misc.sablya = 0;
message.user.misc.vizov = 0; user.misc.vizov = 0; 
message.user.xod = 0; user.xod = 0;
message.user.misc.startgame = 0; user.misc.startgame = 0;
message.user.misc.ready = 0; user.misc.ready = 0;
message.user.misc.whereiscrit = 0; user.misc.whereiscrit = 0;
message.user.misc.nasmeshkaLOCK = 0; user.misc.nasmeshkaLOCK = 0;
message.user.misc.weapon = 'Кулак'; user.misc.weapon = 'Кулак';
message.user.misc.yvedomFORshop = 0; user.misc.yvedomFORshop = 0;
message.user.misc.magicTime = 0; user.misc.magicTime = 0;
message.user.misc.magicBlood = 0; user.misc.magicBlood = 0;
message.user.misc.shield = 0; user.misc.shield = 0;
message.user.misc.goMagicBlood = 0; user.misc.goMagicBlood = 0;
message.user.misc.goMagicTime = 0; user.misc.goMagicTime = 0;
message.user.xodLOCK = 0; user.xodLOCK = 0;
message.user.misc.meta = 0; user.misc.meta = 0;
message.user.misc.vamp = 0; user.misc.vamp = 0;
message.user.misc.areo = 0; user.misc.areo = 0;
message.user.misc.nima = 0; user.misc.nima = 0;
message.user.misc.block = 0; user.misc.block = 0;
message.user.misc.metaRest = 0; user.misc.metaRest = 0;
message.user.misc.metaUse = 0; user.misc.metaUse = 0;
message.user.misc.nimaUse = 0; user.misc.nimaUse = 0;
message.user.misc.nimaRest = 0; user.misc.nimaRest = 0;
message.user.misc.nimaSCREAM = 0; user.misc.nimaSCREAM = 0;
message.user.misc.blockUse = 0; user.misc.blockUse = 0;
message.user.misc.areoReady = 0; user.misc.areoReady = 0;
message.user.misc.createAreo = 0; user.misc.createAreo = 0;
message.user.misc.areoAttackReadyForShield = 0; user.misc.areoAttackReadyForShield = 0;
message.user.misc.areoShield = 0; user.misc.areoShield = 0;
message.user.misc.ability = 0; user.misc.ability = 0;
message.user.misc.nasmeshkaNotice = false; user.misc.nasmeshkaNotice = false;
message.user.misc.Dark = 0; user.misc.Dark = 0;
message.user.misc.nimaSCREAMrest = 0; user.misc.nimaSCREAMrest = 0;
message.user.misc.DarkRest = 0; user.misc.DarkRest = 0;
message.user.misc.nimaHaunt = 0; user.misc.nimaHaunt = 0;
message.user.misc.nimaHauntRest = 0; user.misc.nimaHauntRest = 0;
message.user.misc.areoRest = 0; user.misc.areoRest = 0;
message.user.misc.nimaUseHaunt = 0; user.misc.nimaUseHaunt = 0;
message.user.misc.nimaOneTime = 1; user.misc.nimaOneTime = 1;
message.user.misc.areoOneTime = 1; user.misc.areoOneTime = 1;
message.user.misc.areoOneTime2 = 1; user.misc.areoOneTime2 = 1;
message.user.misc.Dark2 = 0; user.misc.Dark2 = 0;
message.user.misc.bloodTime = 0; user.misc.BloodTime = 0;
message.user.misc.nimaCanBeUsed = 0; user.misc.nimaCanBeUsed = 0;
message.user.misc.areoXod = 0; user.misc.areoReturn = 0;
message.user.misc.areoReturn = 0; user.misc.AreoXod = 0;

message.user.misc.goMagicTimeTwo = 0; user.misc.goMagicTimeTwo = 0;
message.user.misc.goMagicBlood = 0; user.misc.goMagicBlood = 0;
message.user.misc.goMagicBloodTwo = 0; user.misc.goMagicBloodTwo = 0;
return message.send('успешно.',
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],
})
})
});


















//-------------------------------------------[Выйди с pve]-------------------------------------------------------//
cmd.hear(/^(Выйти)\s(из|с)\s(?:PVE|⚕PVE)|(Выйти из PvE⚕)$/i, async (message, bot) => {
message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}], Вы точно хотите покинуть ⚕PVE? Прогресс будет утерян.`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"inline": true,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✅Подтвердить"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⛔Отклонить"
},
"color": "negative"
}
]
],

})
});
cmd.hear(/^(Подтвердить|✅Подтвердить)$/i, async (message, bot) => {
message.user.LockPvPforPvE = false;
message.user.pve.completeOFpve = false;
message.user.pve.completeOFpve = false;
message.user.pve.vstrecha = false;
message.user.pve.helpWitch = 2300;
message.user.pve.witchfly = false;
message.user.pve.lock = false;
message.user.misc.taraining = 1;
message.user.pve.twodemons = 1;
message.user.pve.twodemonsattack = 1;
message.user.pve.heal = 0;
message.user.pve.WINdem1 = 0;
message.user.pve.WINdem2 = 0;
message.user.pve.lock = false;
message.user.pve.whereiam = 0;
message.user.pve.hpDEMON1 = 0;
message.user.pve.hpDEMON2 = 0;
message.user.pve.first = true;
message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[id${message.user.id}|${message.user.tag}], Вы вышли с ⚕PVE`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
return;
});

//-------------------------------------------[Отклонить]-------------------------------------------------------//
cmd.hear(/^(Отклонить|⛔Отклонить)$/i, async (message, bot) => {
message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}Отклонено. `);
return;
});
});


























































/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
//----------------------------------------------------[PVE]---------------------------------//
cmd.hear(/^(?:PVE|⚕PVE)$/i, async (message, bot) => {
message.user.LockPvPforPvE = true;
message.user.pve.whereiam = 'pve';
message.user.pve.completeOFpve = true;
if (message.user.pve.FIRSTtime == true){
message.user.pve.FIRSTtime = false;
message.send(`[id${message.user.id}|${message.user.tag}], добро пожаловать в PVE.`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🌳Локации"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📗Информация"
},
"color": `${message.user.pve.ofcourseinformation == true ? 'secondary' : 'primary'}`
},
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `Навестить 👾Ведьму`
},
"color": `${message.user.pve.ofcourseinformation == true ? 'positive' : 'secondary'}`
},
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Выйти из ⚕PVE"
},
"color": "negative"
},
]
]
})
});
} else {
message.send(`[id${message.user.id}|${message.user.tag}], по вам скучали!`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🌳Локации"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📗Информация"
},
"color": `${message.user.pve.ofcourseinformation == true ? 'secondary' : 'primary'}`
},
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Навестить 👾Ведьму"
},
"color": `${message.user.pve.ofcourseinformation == true ? 'positive' : 'secondary'}`
},
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Выйти из ⚕PVE"
},
"color": "negative"
},
]
]
})
});
}

cmd.hear(/^(Выйти)\s(из|с)\s(?:PVE|⚕PVE)\s(Выйти из PvE⚕)$/i, async (message, bot) => {
message.send(`[id${message.user.id}|${message.user.tag}], Вы точно хотите покинуть ⚕PVE? Прогресс будет утерян.`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"inline": true,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✅Подтвердить"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⛔Отклонить"
},
"color": "negative"
}
]
],

})
});

cmd.hear(/^(Подтвердить|✅Подтвердить)$/i, async (message, bot) => {
message.user.LockPvPforPvE = false;
message.user.pve.completeOFpve = false;
message.user.pve.completeOFpve = false;
message.user.pve.vstrecha = false;
message.user.pve.helpWitch = 2300;
message.user.pve.witchfly = false;
message.user.pve.lock = false;
message.user.misc.taraining = 1;
message.user.pve.twodemons = 1;
message.user.pve.twodemonsattack = 1;
message.user.pve.heal = 0;
message.user.pve.WINdem1 = 0;
message.user.pve.WINdem2 = 0;
message.user.pve.lock = false;
message.user.pve.whereiam = 0;
message.user.pve.hpDEMON1 = 0;
message.user.pve.hpDEMON2 = 0;
message.user.pve.first = true;
message.send(`[id${message.user.id}|${message.user.tag}], Вы вышли с ⚕PVE`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `🔎Поиск`,
},
"color": `negative`
},
],
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👥Профиль",
},
"color": `primary`,
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "⚕PVE",
},
"color": `primary`,
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏆Топ" 
},
"color": `positive`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✳Перки" 
},
"color": `positive`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Открыть 🧳сундук" 
},
"color": `${message.user.misc.chest >= 1 || message.user.misc.oskolki >= 100 ? "primary" : "secondary"}`
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🆕Помощь" 
},
"color": `${message.user.helpTrue == true ? 'secondary' : 'positive'}`
}
],			
],

})
})
return;

});


cmd.hear(/^(Отклонить|⛔Отклонить)$/i, async (message, bot) => {
message.send(`Отклонено. `);
return;

});
});

cmd.hear(/^(Локации|🌳Локации)$/i, async (message, bot) => {
return bot(`в разработке...`)
});


cmd.hear(/^(Информация|📗Информация)$/i, async (message, bot) => {
message.user.pve.ofcourseinformation = true;
if (message.user.pve.VisitWitch !== true){
message.send(`PvE - режим, в котором придётся сражаться против боссов, нечести и прочих сущностей. Побеждая их, вы будете получать опыт, который понадобится для достижения нового уровня, а победа всех боссов будет открывать Вам новые локации. Не знаете с чего начать? Вам к 👾Ведьме...`,
{
keyboard:JSON.stringify(
{
"inline": true,
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Навестить 👾Ведьму"
},
"color": `${message.user.pve.ofcourseinformation == true ? 'positive' : 'secondary'}`
},
],
]
})
}
, {
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✅Понятно"
},
"color": "positive"
},
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Выйти из ⚕PVE"
},
"color": "negative"
},
]
]
})
})
} else {
message.send(`PvE - режим, в котором придётся сражаться против боссов, нечести и прочих сущностей. Побеждая их, вы будете получать опыт, который понадобится для достижения нового уровня, а победа всех боссов будет открывать Вам новые локации. Не знаете с чего начать? Вам к 👾Ведьме...`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✅Понятно"
},
"color": "positive"
},
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Выйти из ⚕PVE"
},
"color": "negative"
},
]
]
})
})
}

cmd.hear(/^(✅Понятно|Понятно)$/i, async (message, bot) => {
if (message.user.pve.whereiam == 'pve'){ 
message.send(`Возвращение... `,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🌳Локации"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📗Информация"
},
"color": `${message.user.pve.ofcourseinformation == true ? 'secondary' : 'primary'}`
},
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Навестить 👾Ведьму"
},
"color": `${message.user.pve.ofcourseinformation == true ? `positive` : `secondary`}`
},
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Выйти из ⚕PVE"
},
"color": "negative"
},
]
]
})
});
return;
} else if (message.user.pve.whereiam == 'vedmya') {
message.send(`Возвращение... `,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🌳Локации"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🦍Боссы"
},
"color": `${message.user.pve.VisitWitch == true ? 'primary' : 'secondary'}`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📗Информация"
},
"color": `${message.user.pve.ofcourseinformation == true ? 'secondary' : 'primary'}`
},
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Выйти из ⚕PVE"
},
"color": "negative"
},
]
]
})
});
}
});
});







cmd.hear(/^(Навестить)\s(Ведьму|👾Ведьму)?$/i, async (message, bot) => {
message.user.pve.whereiam = 'vedmya';
if (message.user.pve.ofcourseinformation !== true) return bot(`прочитайте сначала информацию.`)
let compL = (message.user.pve.FirstLocationOfWitch == true) ? true : false;
if (compL == false){
message.user.pve.VisitWitch = true;
message.send(`[👾Ведьма]: Здравствуй, странник... Дело всё в том, что существует темные силы, одолеть которых в одиночку, боюсь, что не в силах.
Мне очень нужна твоя помощь... Ты согласен мне помочь? Запомни, в долгу я не останусь... `,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✅Согласен"
},
"color": "positive"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "❗В меню"
},
"color": "negative"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Выйти из PvE⚕"
},
"color": "negative"
},
]
]
})

});

cmd.hear(/^(❗В|В)\s(меню)$/i, async (message, bot) => {
message.send(`Возвращение...`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🌳Локации"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📗Информация"
},
"color": `${message.user.pve.ofcourseinformation == true ? 'secondary' : 'primary'}`
},
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Навестить 👾Ведьму"
},
"color": `${message.user.pve.ofcourseinformation == true ? `positive` : `secondary`}`
},
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Выйти из ⚕PVE"
},
"color": "negative"
},
]
]
})
});
return;
});


cmd.hear(/^(✅Согласен|согласен)$/i, async (message, bot) => {
return bot(`в разработке...`)
message.user.pve.FirstLocationOfWitch = true;
message.send(`[👾Ведьма]: Я очень рада, что ты согласился. Нужно немного ввести тебя в курс дела: существуют несколько злодеев, которых нужно победить, - боссы. Сама я не справлюсь, но в тебе вижу огромный потенциал, к тому же без помощи ты не останешься.`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🌳Локации"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🦍Боссы"
},
"color": `${message.user.pve.VisitWitch == true ? 'primary' : 'secondary'}`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📗Информация"
},
"color": `${message.user.pve.ofcourseinformation == true ? 'secondary' : 'primary'}`
},
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Выйти из ⚕PVE"
},
"color": "negative"
},
]
]
})
});
});
} else { 
message.send(`[👾Ведьма]: Очерь рада, что ты вернулся отдохнувщий... Что ж, вперёд с новыми силами...`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🌳Локации"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🦍Боссы"
},
"color": `${message.user.pve.VisitWitch == true ? 'primary' : 'secondary'}`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "📗Информация"
},
"color": `${message.user.pve.ofcourseinformation == true ? 'secondary' : 'primary'}`
},
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Выйти из ⚕PVE"
},
"color": "negative"
},
]
]
})
});

}
});

cmd.hear(/^(🦍Боссы|боссы)$/i, async (message, bot) => {
let a = (message.user.pve.FirstLocationOfWitch == true) ? true : false;
if (a == false) {
return bot(`для начала Вам нужно сходить к ведьме.`);
}  
if (message.user.pve.FirstLocationOfWitch == true){
return bot(`В разработе...`)
var color1 = (message.user.pve.winOfBOSS1 == 1) ? 1 : 0;
var color2 = 0; if (message.user.pve.winofBOSS5 == 1) {color2 = 1}
if ((message.user.pve.winOfBOSS1 == 1) && (message.user.pve.winOfBOSS2 == 1)){color2 = 0}
var color3 = 0; 
if ((message.user.pve.winOfBOSS1 == 1) && (message.user.pve.winOfBOSS2 == 1)){color3 = 1}
if ((message.user.pve.winOfBOSS1 == 1) && (message.user.pve.winOfBOSS2 == 1) && (message.user.pve.winOfBOSS3 == 1)){color3 = 0}
var color4 = 0; 
if ((message.user.pve.winOfBOSS1 == 1) && (message.user.pve.winOfBOSS2 == 1)&&(message.user.pve.winOfBOSS3 == 1)){color4 = 1}
if ((message.user.pve.winOfBOSS1 == 1) && (message.user.pve.winOfBOSS2 == 1)&&(message.user.pve.winOfBOSS3 == 1) && (message.user.pve.winOfBOSS4 == 1)){color4 = 0}
var color5 = 0; 
if ((message.user.pve.winOfBOSS1 == 1) && (message.user.pve.winOfBOSS2 == 1)&&(message.user.pve.winOfBOSS3 == 1) && (message.user.pve.winOfBOSS4 == 1)){color5 = 1;}
if ((message.user.pve.winOfBOSS1 == 1) && (message.user.pve.winOfBOSS2 == 1)&&(message.user.pve.winOfBOSS3 == 1) && (message.user.pve.winOfBOSS4 == 1)
&& (message.user.pve.winofBOSS5 == 1)){color5 = 0}
var color6 = 0;
if ((message.user.pve.winOfBOSS1 == 1) && (message.user.pve.winOfBOSS2 == 1)&&(message.user.pve.winOfBOSS3 == 1) && (message.user.pve.winOfBOSS4 == 1)
&& (message.user.pve.winofBOSS5 == 1)){color6 = 1}
if ((message.user.pve.winOfBOSS1 == 1) && (message.user.pve.winOfBOSS2 == 1)&&(message.user.pve.winOfBOSS3 == 1) && (message.user.pve.winOfBOSS4 == 1)
&& (message.user.pve.winofBOSS5 == 1) && (message.user.pve.winofBOSS56 == 1)){color6 = 0}
var color7 = 0;
if ((message.user.pve.winOfBOSS1 == 1) && (message.user.pve.winOfBOSS2 == 1)&&(message.user.pve.winOfBOSS3 == 1) && (message.user.pve.winOfBOSS4 == 1)
&& (message.user.pve.winofBOSS5 == 1) && (message.user.pve.winofBOSS56 == 1)){color7 = 1}
if ((message.user.pve.winOfBOSS1 == 1) && (message.user.pve.winOfBOSS2 == 1)&&(message.user.pve.winOfBOSS3 == 1) && (message.user.pve.winOfBOSS4 == 1)
&& (message.user.pve.winofBOSS5 == 1) && (message.user.pve.winofBOSS56 == 1)&& (message.user.pve.winofBOSS57 == 1)){color7 = 0}
var color8 = 0;if ((message.user.pve.winOfBOSS1 == 1) && (message.user.pve.winOfBOSS2 == 1)&&(message.user.pve.winOfBOSS3 == 1) && (message.user.pve.winOfBOSS4 == 1)
&& (message.user.pve.winofBOSS5 == 1) && (message.user.pve.winofBOSS56 == 1)&& (message.user.pve.winofBOSS57 == 1)){color8 = 1}
if ((message.user.pve.winOfBOSS1 == 1) && (message.user.pve.winOfBOSS2 == 1)&&(message.user.pve.winOfBOSS3 == 1) && (message.user.pve.winOfBOSS4 == 1)
&& (message.user.pve.winofBOSS5 == 1) && (message.user.pve.winofBOSS56 == 1)&& (message.user.pve.winofBOSS57 == 1) &&
(message.user.pve.winofBOSS58 == 1)){color8 = 0}
var color9 = 0;if ((message.user.pve.winOfBOSS1 == 1) && (message.user.pve.winOfBOSS2 == 1)&&(message.user.pve.winOfBOSS3 == 1) && (message.user.pve.winOfBOSS4 == 1)
&& (message.user.pve.winofBOSS5 == 1) && (message.user.pve.winofBOSS56 == 1)&& (message.user.pve.winofBOSS57 == 1) &&
(message.user.pve.winofBOSS58 == 1)) {color9 = 1}
if ((message.user.pve.winOfBOSS1 == 1) && (message.user.pve.winOfBOSS2 == 1)&&(message.user.pve.winOfBOSS3 == 1) && (message.user.pve.winOfBOSS4 == 1)
&& (message.user.pve.winofBOSS5 == 1) && (message.user.pve.winofBOSS56 == 1)&& (message.user.pve.winofBOSS57 == 1) &&
(message.user.pve.winofBOSS58 == 1) && (message.user.pve.winofBOSS59 == 1)){color9 = 0}
message.send(`Боссы:
Босс #1 - Пожиратель Душ Клутху.
Босс #2 - Хранитель тьмы.
Босс #3 - ${message.user.pve.winOfBOSS2 == 1 ? 'Первая часть души Владыки Демонов' : '[Скрыто]'}
Босс #4 - Душегубы Подземелья.
Босс #5 - Демон.
Босс #6 - ${message.user.pve.winOfBOSS5 == 1 ? 'Вторая часть души Владыки Демонов' : '[Скрыто]'}
Босс #7 - Трёхглавая ящерица-пожиратель Влыдыки.
Босс #8 - Повелитель демонов.
Босс #9 - Владыка Демонов.`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Босс #1"
},
"color": `${color1 == 1 ? 'secondary' : 'primary'}`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Босс #2"
},
"color": `${color2 == 1 ? 'primary' : 'secondary'}`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Босс #3"
},
"color": `${(color3 == 1) ? 'primary' : 'secondary'}`
},
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Босс #4"
},
"color": `${color4 == 1 ? 'primary' : 'secondary'}`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Босс #5"
},
"color": `${color5 == 1 ? 'primary' : 'secondary'}`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Босс #6"
},
"color": `${color6 == 1 ? 'primary' : 'secondary'}`
},
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Босс #7"
},
"color": `${color7 == 1 ? 'primary' : 'secondary'}`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Босс #8"
},
"color": `${color8 == 1 ? 'primary' : 'secondary'}`
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Босс #9"
},
"color": `${color9 == 1 ? 'primary' : 'secondary'}`
},
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Выйти из ⚕PVE"
},
"color": "negative"
},
]
]
})
});

cmd.hear(/^(Босс#1|Босс #1)$/i, async (message, bot) => {
message.send(`[👾Ведьма]: Первый у нас - Пожиратель душ Клутху. К слову сказать, Клутху - небольшое поселение, а не такое забавное имя пожирателя. 
Так вот, после того, как Владыка Демонов выбрался на свободу, то у него появилось много сущностей, которые служат ему. Один из таких - есть наш Пожиратель. \n
Демоны - нисшие существа, по крайней мере из тех, о которых ты уже успел услышать. Этими демонами руководят пожиратели, а они, в свою очередь, этому самому Пожирателю душ, что начал разбой в поселении Клутху, именно на него у нас и объявлена охота. Если его вовремя не остановить, то много бед может произойти, ведь с каждой новой душой он становится всё более непобедимее... Поверь, одной мне не справиться...`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✅Помочь"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Почему я❓"
},
"color": "primary"
},
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Выйти из ⚕PVE"
},
"color": "negative"
},
],
]
})
});

cmd.hear(/^(Почему)\s(я❓|я ❓)$/i, async (message, bot) => {
message.send(`[👾Ведьма]: Я вижу в тебе огромный потенциал и, самое главное, силу, мощь и храбрость. Ты можешь не то что помочь мне, ты можешь спасти многих... К тому же, кто знает, что будет, если их не остановить вовремя... Я могу сдерживать их силы, но не вечно... Помощь лишней не будет...`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✅Помочь"
},
"color": "positive"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Выйти из ⚕PVE"
},
"color": "negative"
},
],
]
})
});
return;
});

cmd.hear(/^(✅Помочь)$/i, async (message, bot) => {
message.user.pve.helpWitch = 2300;
message.send(`[👾Ведьма]: Дела обстоят так... До Клутху отсюда 2300 шагов... Возьми с собой отвар жизней🥣 и этот лук🏹... Удачи, не подведи меня. Ах да, чуть не забыла, ты должен будешь по пути кое-кого встретить... Он, если я не ошибаюсь, в шагах 300 отсюда...`,

{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🦵🏻Шаг"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Отвар🥣"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "лук🏹"
},
"color": "secondary"
},						
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Выйти из ⚕PVE"
},
"color": "negative"
},
],
]
})
});
cmd.hear(/^(🦵🏻Шаг|🦵🏻 Шаг|Шаг)$/i, async (message, bot) => {
if (message.user.pve.lock){return bot(`Невозможно.`)}
if (message.user.pve.vstrecha == true){
return bot(`Я думаю, житель не зря тут, наверное всё-таки нужно его послушать, скорее всего, он хочет сказать что-то очень важное...`)
}
let shag = utils.random(1, 10)
let chanseforoskolki = utils.random(1,100)
if (chanseforoskolki <= 8){
let oskolochki = utils.random(1,5);
message.send(`По пути вы нашли ${oskolochki} осколков✨`)
}
message.user.pve.helpWitch -= shag;
message.send(`До Клутху осталось ${message.user.pve.helpWitch} шагов.
Вами был(о) сделан(о) ${shag} шаг(ов)`)
if ((message.user.pve.twodemswerewon == true) && (message.user.pve.twodemswerewonnotice == false)){
message.user.pve.twodemswerewonnotice = true;
message.send(`[Воин]: Фух! Я еле добежал до тебя! Я, надеюсь, вовремя?`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Промолчать"
},
"color": "primary"
},
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Ответить"
},
"color": "primary"
},					
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Выйти из ⚕PVE"
},
"color": "negative"
},
],
]
})
});
}
if ((message.user.pve.helpWitch <= 2200) && (message.user.pve.vstrecha !== false)){
message.user.pve.vstrecha = true;
message.send(`Вам на пути встретился 🧑местный житель. Поговорите с ним.`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✅Поболтать"
},
"color": "positive"
},
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🦵🏻Шаг"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Отвар🥣"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "лук🏹"
},
"color": "secondary"
},						
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Выйти из ⚕PVE"
},
"color": "negative"
},
],
]
})
});
cmd.hear(/^(✅Поболтать|✅ Поболтать)$/i, async (message, bot) => {
message.user.pve.vstrecha = false;
message.send(`[🧑Житель Клутху]: Клутху, говорите... Я один из немногих, кому удалось оттуда сбежать: пожиратель душ никогда не будет никого щадить. Почему Клутху, спросите?... Потому что это самое большое поселение из всех имеющихся, к тому же самое слабозащищенное, отчего и привлёк внимание. Пожиратель... Очень сверепая сущность, боюсь, Вам будет нелегко его одолеть, неспроста же он руководит демонами, не так ли?... Не могу понять, что не так с вами: многие мечтают выбраться оттуда, а Вы же, сами, целенаправленно, идёте туда...`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🦵🏻Шаг"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Отвар🥣"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "лук🏹"
},
"color": "secondary"
},						
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Выйти из ⚕PVE"
},
"color": "negative"
},
],
]
})
});
return;
});
}
if ((message.user.pve.helpWitch <= 2050) && (message.user.pve.witchfly !== true)){
message.user.pve.witchfly = true;
message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[👾Ведьма]: Я как только услышала, так сразу прилетела! Постой, погоди... Я должна тебя предупредить, по пути могут встретиться демоны... Будь аккуратен, это всё-таки первая встреча, не недооценивай их... Несмотря на то, что они самые низшие, они не самые слабые в мире, особенно, если их несколько: если рядом с демоном присутствует еще один, то второй может регенерироваться, отчего поставленная задача становится сложне... Всё, мне пора, меня ждут очень важные дела, береги себя. Ах да, скоро ты должен будешь встретить одного воина, он тебя кое-чему должен научить.`)
}
if ((message.user.pve.helpWitch <= 1950) && (message.user.pve.training == 1)){
message.user.pve.lock = true; message.user.pve.training = 0;
message.send(`${((message.user.misc.Dark == 1) || (message.user.misc.Dark2 == 1))? `🌑`: ``}[🛡Воин]: Приветствую тебя, ${message.user.tag}, до меня тут дошли слухи, что ты отправляешься к Пожирателю душ Клутху... Что ж, смело... На пути сто процентов должны быть демоны, если и не защита, то просто гуляющие близ территории - точно. Мне тебя нужно кое-чему научить. У меня есть сундук, когда я его открою, вылетит сущность, чем-то похожая на демона, но убить она тебя не сможет, разве что свалить с ног. Итак, как будешь готов, скажи, я буду ждать сигнала.`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "✅Готов"
},
"color": "positive"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Выйти из ⚕PVE"
},
"color": "negative"
},
],
]
})
});
cmd.hear(/^(✅Готов|✅ Готов)$/i, async (message, bot) => {
message.send(
`[🛡Воин]: Берегись! /Открывает сундук/ 
[Сущность из сундука] /Летит на Вас/`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Ударить луком"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Попытаться выстрелить"
},
"color": "primary"
},
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Выйти из ⚕PVE"
},
"color": "negative"
},
],
]
})
});
cmd.hear(/^(Попытаться)\s(выстрелить)$/i, async (message, bot) => {
(`Куда же стрелять...`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Выстрелить в тело"
},
"color": "primary"
},
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Выстрелить в сердце"
},
"color": "primary"
},
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Выстрелить в Голову"
},
"color": "primary"
},			
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Выйти из ⚕PVE"
},
"color": "negative"
},
],
]
})
})
cmd.hear(/^(Выстрелить)\s(в)\s(тело)$/i, async (message, bot) => {
message.user.pve.lock = false;
message.send(`[🛡Воин]: Не стрелять! Ты убьёшь её. Всё верно, ты прав, в тело, потому что это - самая уязвимая точка демонов, по всему их облику расстекается их сущность, которую можно легко поранить, тем более твоими-то зачарованными стрелами. Что ж, наша тренировка окончена, отправляйся, я в тебя верю.`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🦵🏻Шаг"
},
"color": "positive"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Отвар🥣"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "лук🏹"
},
"color": "secondary"
},						
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Выйти из ⚕PVE"
},
"color": "negative"
},
],
]
})
});	
return;
});
cmd.hear(/^(Выстрелить)\s(в)\s(сердце)$/i, async (message, bot) => {
message.send( 
`[Сущность с сундука]: /Повалила Вас на землю/
[🛡Воин]: /Закрыл сундук, убрав сущность внутрь/
[🛡Воин]: Неверно. Будем набирать опыт на ошибках!`)
return;
});
cmd.hear(/^(Выстрелить)\s(в)\s(голову)$/i, async (message, bot) => {
message.send( 
`[Сущность с сундука]: /Повалила Вас на землю/
[🛡Воин]: /Закрыл сундук, убрав сущность внутрь/
[🛡Воин]: Неверно. Будем набирать опыт на ошибках!`)
return;
});
});

cmd.hear(/^(Ударить)\s(луком)$/i, async (message, bot) => {
message.send(`[🛡Воин]: Насмешил! Оно сожрёт тебя!
[Сущность с сундука]: /Повалила Вас на землю/
[🛡Воин]: /Закрыл сундук, убрав сущность внутрь/
[🛡Воин]: Ещё раз! Только без глупостей на этот раз!`)
return;
});
});
}
if ((message.user.pve.helpWitch <= 1900) && (message.user.pve.twodemons == 1)){
message.user.pve.twodemons = 0;
message.send(`[${message.user.tag}]: О нет! Вдали виднеются какие-то сущности! Неужто это те самые демоны, о которых говорила ведьма...`);
}
if((message.user.pve.helpWitch<= 1800) && (message.user.pve.twodemonsattack == 1)){
twodemonsattack = 0;
message.user.pve.heal = 1600;
message.send(
`🧡Ваши жизни: ${message.user.pve.heal}
[😈Демон 1 [Главарь]]: *Перевод* взять беглеца!
[😈Демон 2 [Слуга]]: /Нападает/
[😈Демон 3 [Слуга]]: /Нападает/
`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "💣Увернуться"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👁‍🗨Принять бой"
},
"color": "primary"
},						
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Отвар🥣"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "лук🏹"
},
"color": "secondary"
},						
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Выйти из ⚕PVE"
},
"color": "negative"
},
],
]
})
});
cmd.hear(/^(💣Увернуться|💣 Увернуться)$/i, async (message, bot) => {
message.user.pve.heal -= 40;
message.send(`🧡Ваши жизни: ${message.user.pve.heal}
Вы увернулись... Демоны окружили с двух сторон! Им удалось повалить Вас на землю!... Один демон смог на секунду пройти через уязвимое место...`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "👁‍🗨Принять бой"
},
"color": "primary"
},						
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Отвар🥣"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "лук🏹"
},
"color": "secondary"
},						
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Выйти из ⚕PVE"
},
"color": "negative"
},
],
]
})
});
return;
});
cmd.hear(/^(👁‍🗨Принять|👁‍🗨 Принять)\s(бой)$/i, async (message, bot) => {
message.send(`🧡Ваши жизни: ${message.user.pve.heal}
Вы приняли верное решение, что не испугались, Демоны не смогли воспользоваться уязвимым местом. Определитесь, на какого Демона Вы хотите напасть.`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "😈Демон 1 Главарь"
},
"color": `${((message.user.pve.WINdem1 == true) && (message.user.pve.WINdem2 == true)) ? 'primary' : 'secondary'}`
},
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "😈Демон 2 Слуга"
},
"color": "primary"
},	
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "😈Демон 3 Слуга"
},
"color": "primary"
}					
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Отвар🥣"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "лук🏹"
},
"color": "secondary"
}						
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Выйти из ⚕PVE"
},
"color": "negative"
},
],
]
})
}); 
cmd.hear(/^(😈Демон)\s(1)\s(Главарь)$/i, async (message, bot) => {
if ((message.user.pve.WINdem1 !== true) && (message.user.pve.WINdem2 !== true)){return bot(`победите Слуг, главарь неуязвим под ними.`)} 
else {
message.user.pve.twodemswerewon = true;
message.send(`
${message.user.tag}, Демон Главарь, увидев Ваше могущество, улетел к пожирателю - сражения не будет.`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🦵🏻Шаг"
},
"color": "positive"
}
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Выйти из ⚕PVE"
},
"color": "negative"
},
],
]
})
});
}
});
cmd.hear(/^(😈Демон)\s(2)\s(Слуга)$/i, async (message, bot) => {
if (message.user.pve.WINdem1 == true) {return bot(`Вы уже одолели его.`)}
var text = message.user.pve.WINdem2 == true ? 'Вам остался последний!' : 'Помните, пока жив Демон 3, Демон 2 может регенерироваться. Огонь!' 
message.send(`${text}`, {
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Отвар🥣"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "лук🏹"
},
"color": "positive"
},						
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Выйти из ⚕PVE"
},
"color": "negative"
},
],
]
})
});
message.user.pve.hpDEMON1 = 400;
cmd.hear(/^(лук🏹)$/i, async (message, bot) => {
if (message.user.pve.WINdem1 == true){return}
if (message.user.pve.first == true){
message.send(`Выберите, куда атаковать: `,{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🖤Сердце"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "😈Голова"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "💢Тело"
},
"color": "primary"
},				
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Выйти из ⚕PVE"
},
"color": "negative"
},
],
]
})
})
cmd.hear(/^(🖤Сердце|🖤 Сердце)$/i, async (message, bot) => {
let damageDemon = utils.random(1,100);
let regenDmon = utils.random(1,100);
message.user.pve.heal -= damageDemon;
message.user.pve.hpDEMON1 += regenDmon;
message.user.pve.first = false;
message.send(
`[😈Демон 2 [Слуга]]: /Вы были повалены на землю из-за неверного выстрела/
⚔Вы нанесли 0 урона Демону.
❣Демон отрегенерировал себе: ${regenDmon}
🖤Жизней у Демона: ${message.user.pve.hpDEMON1 > 0 ? `${message.user.pve.hpDEMON1}` : 0}`);
return bot(
`⚔Вам было нанесено: ${damageDemon} урона 
🧡Ваши жизни: ${message.user.pve.heal}`, {
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Отвар🥣"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "лук🏹"
},
"color": "positive"
},						
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Выйти из ⚕PVE"
},
"color": "negative"
},
],
]
})
})
});
cmd.hear(/^(😈Голова|😈 Голова)$/i, async (message, bot) => {
let damageDemon = utils.random(1,100);
let regenDmon = utils.random(1,100);
message.user.pve.heal -= damageDemon;
message.user.pve.hpDEMON1 += regenDmon;
message.user.pve.first = false;
message.send(
`[😈Демон 2 [Слуга]]: /Вы были повалены на землю из-за неверного выстрела/
⚔Вы нанесли 0 урона Демону.
❣Демон отрегенерировал себе: ${regenDmon}
🖤Жизней у Демона: ${message.user.pve.hpDEMON1 > 0 ? `${message.user.pve.hpDEMON1}` : 0}`);
return bot(
`⚔Вам было нанесено: ${damageDemon} урона 
🧡Ваши жизни: ${message.user.pve.heal}`, {
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Отвар🥣"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "лук🏹"
},
"color": "positive"
},						
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Выйти из ⚕PVE"
},
"color": "negative"
},
],
]
})
})
});
cmd.hear(/^(💢Тело|💢 Тело)$/i, async (message, bot) => {
let damageDemon = utils.random(1,100);
let regenDmon = utils.random(1,100);
message.user.pve.heal -= damageDemon;
message.user.pve.hpDEMON1 -= 100;
message.user.pve.hpDEMON1 += regenDmon;
message.user.pve.first = false;
message.send(
`[😈Демон 2 [Слуга]]: Перевод: Как ты смог это сделать, смертный?...
⚔Вы нанесли 100 урона Демону.
❣Демон отрегенерировал себе: ${regenDmon}
🖤Жизней у Демона: ${message.user.pve.hpDEMON1 > 0 ? `${message.user.pve.hpDEMON1}` : 0}`);
return bot(
`Тренировки прошли не зря!
⚔Вам было нанесено: ${damageDemon} урона 
🧡Ваши жизни: ${message.user.pve.heal}`, {
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Отвар🥣"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "лук🏹"
},
"color": "positive"
},						
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Выйти из ⚕PVE"
},
"color": "negative"
},
],
]
})
})
});
} 
if (message.user.pve.WINdem2 == true){
let damageDemon = utils.random(1,100);
message.user.pve.heal -= damageDemon;
message.user.pve.hpDEMON1 -= 100;
message.send(
` ⚔Вы нанесли 100 урона Демону.
🖤Жизней у Демона: ${message.user.pve.hpDEMON1 > 0 ? `${message.user.pve.hpDEMON1}` : 0}`);
message.send(
`⚔Вам было нанесено: ${damageDemon} урона 
🧡Ваши жизни: ${message.user.pve.heal}`, {
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[ 
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Отвар🥣"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "лук🏹"
},
"color": "positive"
},						
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Выйти из ⚕PVE"
},
"color": "negative"
},
],
]
})
})
if (message.user.pve.hpDEMON1 <= 0){
message.user.pve.WINdem1 = true;
return bot(`Вы смогли одолеть всех Демонов! Вперед на главаря!`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "😈Демон 1 Главарь"
},
"color": `${((message.user.pve.WINdem1 == true) && (message.user.pve.WINdem2 == true)) ? 'primary' : 'secondary'}`
},
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "😈Демон 2 Слуга"
},
"color": "secondary"
},	
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "😈Демон 3 Слуга"
},
"color": "secondary"
}					
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Отвар🥣"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "лук🏹"
},
"color": "secondary"
}						
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Выйти из ⚕PVE"
},
"color": "negative"
},
],
]
})
}); 
}
} if (message.user.pve.WINdem2 == false) {
if (message.user.pve.first !== false) {return}
let damageDemon = utils.random(1,100);
let regenDmon = utils.random(1,100)
message.user.pve.heal -= damageDemon;
message.user.pve.hpDEMON1 -= 100;
message.user.pve.hpDEMON1 += regenDmon;
message.send(
` ⚔Вы нанесли 100 урона Демону.
❣Демон отрегенерировал ${regenDmon} здоровья.
🖤Жизней у Демона: ${message.user.pve.hpDEMON1 > 0 ? `${message.user.pve.hpDEMON1}` : 0}`);
message.send(
`⚔Вам было нанесено: ${damageDemon} урона 
🧡Ваши жизни: ${message.user.pve.heal}`, {
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Отвар🥣"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "лук🏹"
},
"color": "positive"
},						
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Выйти из ⚕PVE"
},
"color": "negative"
},
],
]
})
})	
if (message.user.pve.hpDEMON1 <= 0){
message.user.pve.WINdem1 = true;
return bot(`Вы смогли одолеть Демона! Остался второй. Но будет проще, теперь он не сможет регенерироваться...`,
{ 
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "😈Демон 1 Главарь"
},
"color": `${((message.user.pve.WINdem1 == true) && (message.user.pve.WINdem2 == true)) ? 'primary' : 'secondary'}`
},
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "😈Демон 2 Слуга"
},
"color": "secondary"
},	
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "😈Демон 3 Слуга"
},
"color": "primary"
}					
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Отвар🥣"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "лук🏹"
},
"color": "secondary"
}						
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Выйти из ⚕PVE"
},
"color": "negative"
},
],
]
})
}); 
}
}

});
});

cmd.hear(/^(😈Демон)\s(3)\s(Слуга)$/i, async (message, bot) => {
if (message.user.pve.WINdem2 == true) {return bot(`Вы уже одолели его.`)}
var text = message.user.pve.WINdem1 == true ? 'Вам остался последний!' : 'Помните, пока жив Демон 2, Демон 3 может регенерироваться. Огонь!' 
message.send(`${text}`,{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Отвар🥣"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏹лук"
},
"color": "positive"
},						
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Выйти из ⚕PVE"
},
"color": "negative"
},
],
]
})
})
message.user.pve.hpDEMON2 = 400;
cmd.hear(/^(🏹лук)$/i, async (message, bot) => {
if (message.user.pve.WINdem2 == true){return}
if (message.user.pve.first == true){
message.send(`Выберите, куда атаковать: `,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🖤Сердце"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "😈Голова"
},
"color": "primary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "💢Тело"
},
"color": "primary"
},				
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Выйти из ⚕PVE"
},
"color": "negative"
},
],
]
})
})
cmd.hear(/^(🖤Сердце|🖤 Сердце)$/i, async (message, bot) => {
let damageDemon = utils.random(1,100);
let regenDmon = utils.random(1,100);
message.user.pve.heal -= damageDemon;
message.user.pve.hpDEMON2 += regenDmon;
message.user.pve.first = false;
message.send(
`[😈Демон 3 [Слуга]]: /Вы были повалены на землю из-за неверного выстрела/
⚔Вы нанесли 0 урона Демону.
❣Демон отрегенерировал себе: ${regenDmon}
🖤Жизней у Демона: ${message.user.pve.hpDEMON2 > 0 ? `${message.user.pve.hpDEMON2}` : 0}`);
return bot(
`⚔Вам было нанесено: ${damageDemon} урона 
🧡Ваши жизни: ${message.user.pve.heal}`, {
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Отвар🥣"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏹лук"
},
"color": "positive"
},						
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Выйти из ⚕PVE"
},
"color": "negative"
},
],
]
})
})
});
cmd.hear(/^(😈Голова|😈 Голова)$/i, async (message, bot) => {
let damageDemon = utils.random(1,100);
let regenDmon = utils.random(1,100);
message.user.pve.heal -= damageDemon;
message.user.pve.hpDEMON2 += regenDmon;
message.user.pve.first = false;
return bot(
`[😈Демон 3 [Слуга]]: /Вы были повалены на землю из-за неверного выстрела/
⚔Вы нанесли 0 урона Демону.
❣Демон отрегенерировал себе: ${regenDmon}
🖤Жизней у Демона: ${message.user.pve.hpDEMON2 > 0 ? `${message.user.pve.hpDEMON2}` : 0}`);
message.send(
`⚔Вам было нанесено: ${damageDemon} урона 
🧡Ваши жизни: ${message.user.pve.heal}`, {
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Отвар🥣"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏹лук"
},
"color": "positive"
},						
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Выйти из ⚕PVE"
},
"color": "negative"
},
],
]
})
})
});
cmd.hear(/^(💢Тело|💢 Тело)$/i, async (message, bot) => {
let damageDemon = utils.random(1,100);
let regenDmon = utils.random(1,100);
message.user.pve.heal -= damageDemon;
message.user.pve.hpDEMON2 -= 100;
message.user.pve.hpDEMON2 += regenDmon;
message.user.pve.first = false;
return bot(
`[😈Демон 3 [Слуга]]: Перевод: Как ты это сделал, смертный...
⚔Вы нанесли 100 урона Демону.
❣Демон отрегенерировал себе: ${regenDmon}
🖤Жизней у Демона: ${message.user.pve.hpDEMON2 > 0 ? `${message.user.pve.hpDEMON2}` : 0}`);
message.send(
`Тренировки прошли не зря!
⚔Вам было нанесено: ${damageDemon} урона 
🧡Ваши жизни: ${message.user.pve.heal}`, {
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Отвар🥣"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏹лук"
},
"color": "positive"
},						
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Выйти из ⚕PVE"
},
"color": "negative"
},
],
]
})
})
});

} 
if (message.user.pve.WINdem1 == true){
let damageDemon = utils.random(1,100);
let regenDmon = utils.random(1,100);
message.user.pve.heal -= damageDemon;
message.user.pve.hpDEMON2 -= 100;
message.send(
`⚔Вы нанесли 100 урона Демону.
🖤Жизней у Демона: ${message.user.pve.hpDEMON2 > 0 ? `${message.user.pve.hpDEMON2}` : 0}`);
message.send(
`⚔Вам было нанесено: ${damageDemon} урона 
🧡Ваши жизни: ${message.user.pve.heal}`, {
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Отвар🥣"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏹лук"
},
"color": "positive"
},						
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Выйти из ⚕PVE"
},
"color": "negative"
},
],
]
})
})
if (message.user.pve.hpDEMON2 <= 0){
message.user.pve.WINdem2 = true;;
return bot(`Вы смогли одолеть всех Демонов! Вперед на главаря!`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "😈Демон 1 Главарь"
},
"color": `${((message.user.pve.WINdem1 == true) && (message.user.pve.WINdem2 == true)) ? 'primary' : 'secondary'}`
},
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "😈Демон 2 Слуга"
},
"color": "secondary"
},	
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "😈Демон 3 Слуга"
},
"color": "secondary"
}					
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Отвар🥣"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "лук🏹"
},
"color": "secondary"
}						
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Выйти из ⚕PVE"
},
"color": "negative"
},
],
]
})
}); 
}
} if (message.user.pve.WINdem1 == false) {
if (message.user.pve.first !== false) {return}
let damageDemon = utils.random(1,100);
let regenDmon = utils.random(1,100);
message.user.pve.heal -= damageDemon;
message.user.pve.hpDEMON2 -= 100;
message.user.pve.hpDEMON2 += regenDmon;
message.send(
`⚔Вы нанесли 100 урона Демону.
❣Демон отрегенерировал себе: ${regenDmon}
🖤Жизней у Демона: ${message.user.pve.hpDEMON2 > 0 ? `${message.user.pve.hpDEMON2}` : 0}`);
message.send(
`⚔Вам было нанесено: ${damageDemon} урона 
🧡Ваши жизни: ${message.user.pve.heal}`, {
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Отвар🥣"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "🏹лук"
},
"color": "positive"
},						
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Выйти из ⚕PVE"
},
"color": "negative"
},
],
]
})
})
if (message.user.pve.hpDEMON2 <= 0){
message.user.pve.WINdem2 = true;;
return bot(`Вы смогли одолеть Демона! Остался второй. Но будет проще, теперь он не сможет регенерироваться...`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "😈Демон 1 Главарь"
},
"color": `${((message.user.pve.WINdem1 == true) && (message.user.pve.WINdem2 == true)) ? 'primary' : 'secondary'}`
},
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "😈Демон 2 Слуга"
},
"color": "primary"
},	
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "😈Демон 3 Слуга"
},
"color": "secondary"
}					
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Отвар🥣"
},
"color": "secondary"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "лук🏹"
},
"color": "secondary"
}						
],
[
{
"action": {
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": "Выйти из ⚕PVE"
},
"color": "negative"
},
],
]
})
}); 
}
}
});
});




});


//1800 /|\


cmd.hear(/^(Ответить)$/i, async (message, bot) => {
if (message.user.pve.twodemswerewon !== true){
return;
} //вернуть клавиатуру, дать отхил
});

cmd.hear(/^(Промолчать)$/i, async (message, bot) => {
if (message.user.pve.twodemswerewon !== true){
return;
} //вернуть клавиатуру, дать отхил; сойтись на одном развитии событий.
});


}


if (message.user.pve.helpWitch <= 0){
//something
}
}); //шаг




}); //помощь 


}); //босс 1

cmd.hear(/^(Босс #2)$/i, async (message, bot) => {

});
cmd.hear(/^(Босс #3)$/i, async (message, bot) => {

});
cmd.hear(/^(Босс #4)$/i, async (message, bot) => {

});
cmd.hear(/^(Босс #5)$/i, async (message, bot) => {

});
cmd.hear(/^(Босс #6)$/i, async (message, bot) => {

});
cmd.hear(/^(Босс #7)$/i, async (message, bot) => {

});
cmd.hear(/^(Босс #8)$/i, async (message, bot) => {

});
cmd.hear(/^(Босс #9)$/i, async (message, bot) => {

});


} // - От FirstLocation.









});



















});
