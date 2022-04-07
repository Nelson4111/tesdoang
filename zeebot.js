/**
 * WhatsApp Bot
 * @NelBot_
 * @🇳 🇪 🇱 🇸 🇴 🇳
*/
let {		
	Presence,
	Mimetype, 
	waChatkey,
	ProxyAgent,	
	processTime,
	mentionedJid,
	MessageType, 
	WAzeeection,
	RezeeectMode,		
	MessageOptions, 
	GroupSettingChange, 	
	WALocationMessage, 
	WA_DEFAULT_EPHEMERAL, 
	WA_MESSAGE_STUB_TYPES, 
	} = require('@adiwajshing/baileys')
let fs = require('fs')
let toMs = require('ms')
let hx = require('hxz-api')
let axios = require("axios")
let figlet = require('figlet')
let ms = require('parse-ms')
let crypto = require('crypto') 
let yts = require( 'yt-search')
let request = require('request')
let fetch = require('node-fetch')
let { exit } = require('process')
let googleImage = require('g-i-s')
let ffmpeg = require('fluent-ffmpeg')
let brainly = require('brainly-scraper')
let { lirikLagu } = require('./lib/lirik.js')
let { EmojiAPI } = require("emoji-api");
let { covid } = require("./lib/covid.js")
let emoji = new EmojiAPI();
let speed = require('performance-now')
let { y2mate } = require('./lib/y2mate');
let moment = require('moment-timezone')
let { color, bgcolor } = require('./lib/color')
let { jagoKata } = require('./lib/jagokata.js')
let { mediafireDl } = require('./lib/mediafire.js')
let imageToBase64 = require('image-to-base64')
let { y2mateA, y2mateV } = require('./lib/y2mate.js')
let { exec, spawn, execSync } = require('child_process')
let setting = JSON.parse(fs.readFileSync('./setting.json'));
let time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
let { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
let { jadibot, stopjadibot, listjadibot } = require("./lib/jadibot");
let { fetchJson, fetchText, createExif } = require('./lib/fetcher')
let { uptotele, uploadFile, uploadImages } = require('./lib/uploadimage');
let { gamewaktu, Miminnya, BotName, AccessToken, fake, ownerNumber, limitCount, gcounti } = require('./setting.json')
let { sleep, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, NumberRandom } = require('./lib/functions')

//A L L  D A T A B A S E📍
let bad = JSON.parse(fs.readFileSync('./lib/data/bad.json'))
let ban = JSON.parse(fs.readFileSync('./lib/data/banned.json'))
let simin = JSON.parse(fs.readFileSync('./lib/data/simi.json'))
let _dare = JSON.parse(fs.readFileSync('./lib/data/dare.json'));
let event = JSON.parse(fs.readFileSync('./lib/data/event.json'))
let _truth = JSON.parse(fs.readFileSync('./lib/data/truth.json'));
let nsfww = JSON.parse(fs.readFileSync('./lib/data/nsfw.json'))
let hit = JSON.parse(fs.readFileSync('./lib/data/totalcmd.json'))
let fiturnye = JSON.parse(fs.readFileSync('./lib/data/video.json'))
let setiker = JSON.parse(fs.readFileSync('./mediadata/stik.json'))
let prem = JSON.parse(fs.readFileSync('./lib/data/premium.json'))
let _antilink = JSON.parse(fs.readFileSync('./lib/data/antilink.json'))
let videonye = JSON.parse(fs.readFileSync('./mediadata/video.json'))
let audionye = JSON.parse(fs.readFileSync('./mediadata/audio.json'))
let badword = JSON.parse(fs.readFileSync('./lib/data/badword.json'))
let imagenye = JSON.parse(fs.readFileSync('./mediadata/image.json'))
let _scommand = JSON.parse(fs.readFileSync("./lib/data/scommand.json"));

//I M A G E📍
let tamnel = fs.readFileSync('./media/zeebot.jpg')
let mrpg = fs.readFileSync('./media/mrpg.jpg')
let tde = fs.readFileSync('./media/TD.jpg')
let devil = fs.readFileSync('./media/devil.jpg')
let slime = fs.readFileSync('./media/slime.jpg')
let demon = fs.readFileSync('./media/demon.jpg')
let goblin = fs.readFileSync('./media/goblin.jpg')
let demonking = fs.readFileSync('./media/demonking.jpg')
let behemoth = fs.readFileSync('./media/behemoth.jpg')

//D A T A B A S E  U S E R📍
let limit = JSON.parse(fs.readFileSync('./lib/bot/limit.json'));
let balance = JSON.parse(fs.readFileSync('./lib/bot/balance.json'));
let glimit = JSON.parse(fs.readFileSync('./lib/bot/glimit.json'));
let pendaftar = JSON.parse(fs.readFileSync('./lib/bot/user.json'))

//D A T A  G A M E📍
let tebakgambar = JSON.parse(fs.readFileSync('./lib/data/tebakgambar.json'))
let tebakanime = JSON.parse(fs.readFileSync('./lib/data/tebakanime.json'))
let asahotak = JSON.parse(fs.readFileSync('./lib/data/asahotak.json'))
let caklontong = JSON.parse(fs.readFileSync('./lib/data/caklontong.json'))
let tebakkata = JSON.parse(fs.readFileSync('./lib/data/tebakata.json'))
let family = JSON.parse(fs.readFileSync('./lib/data/family.json'))

//R P G  B Y  @NelBot_👑
let { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("./lib/lvlfunction");
let { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
let { checkPetualangUser, addInventori, addBesi, sellBesi, getBesi, addDm, sellDm, getDm, addEmas, sellEmas, getEmas, addFish, sellFish, getFish, addPet, getPet } = require("./lib/rpgfunction");

//D A T A B A S E  R P G📍
let _RPG = JSON.parse(fs.readFileSync('./lib/rpg/inventori.json'))
let _level = JSON.parse(fs.readFileSync('./lib/rpg/leveluser.json'))
let _petualang = JSON.parse(fs.readFileSync('./lib/rpg/inventori.json'))

//O P T I O N📍
var game = require("./lib/game");
var { allmenu } = require('./lib/helep')  
 
let family100 = [];
imgtobot = 'https://telegra.ph/file/1f910ae6b79cb0c517687.jpg'
let p = '```'
publik = true
readGc = false; 
readPc = false;
autovn = true;
autoketik = false;
hit_today = [];
//healtawal = 100
//potionawal = 1
modelmenu = 'loc' // ubah tema awal menu!! bisa loc / fyt / catalog
let LomKey = 'BeliLah' //Daftar Atau Beli Di lolhuman.xyz

//━━━━━━━━━━━━━━━[ AU LUPA ]━━━━━━━━━━━━━━━\\


function tanggal(){
myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
		myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum\'at','Sabtu'];
		var tgl = new Date();
		var day = tgl.getDate()
		bulan = tgl.getMonth()
		var thisDay = tgl.getDay(),
		thisDay = myDays[thisDay];
		var yy = tgl.getYear()
		var year = (yy < 1000) ? yy + 1900 : yy;
        return `${thisDay} ${day} ${myMonths[bulan]} ${year}`
}                  
var time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'GoodNigh🌌'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'GooodEvening🌆'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'GoodEvening🌇'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'GoodAfternoon🏞'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'GoodMoorning🌅'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'GoodNight🏙'
}
        var runtime = function(seconds) {
        seconds = Number(seconds);
        var d = Math.floor(seconds / (3600 * 24));
        var h = Math.floor(seconds % (3600 * 24) / 3600);
        var m = Math.floor(seconds % 3600 / 60);
        var s = Math.floor(seconds % 60);
        var dDisplay = d > 0 ? d + (d == 1 ? " Hari, " : " Hari, ") : "";
        var hDisplay = h > 0 ? h + (h == 1 ? " Jam, " : " Jam, ") : "";
        var mDisplay = m > 0 ? m + (m == 1 ? " Menit, " : " Menit, ") : "";
        var sDisplay = s > 0 ? s + (s == 1 ? " Detik" : " Detik") : "";
        return dDisplay + hDisplay + mDisplay + sDisplay;
        } 
//━━━━━━━━━━━━━━━[ MODULE EXPORTS ]━━━━━━━━━━━━━━━\\
        module.exports = zee = async (zee, mek, _welkom, ucapanWaktu, botmessage) => {
	    try {
        if (!mek.hasNewMessage) return 
        mek = mek.messages.all()[0]
        const { mentioned } = mek
       	if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.prefix
		global.blocked				
	    mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
        const type = Object.keys(mek.message)[0]
		const { text, extendedText, contact, contactsArray, groupInviteMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		const wita = moment.tz('Asia/Makassar').format("HH:mm")
        const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")        
        const hour_now = moment().format('HH:mm:ss')
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[z∆?Ａ繩?繞?°?Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+@,;]/.test(cmd) ? cmd.match(/^[z∆?Ａ繩?繞??Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+*,;]/gi) : '!'          	
		body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''				
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		bodi = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
	    const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
	    const messagesC = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
	    const timestamp = speed();
	    const copid = await covid()
	  	const latensi = speed() - timestamp
	    hit_today.push(command);
	  	const nopref = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
      	const args = body.trim().split(/ +/).slice(1)
    	const isCmd = body.startsWith(prefix)
        isStc = Object.keys(mek.message)[0] == "stickerMessage" ? mek.message.stickerMessage.fileSha256.toString('hex') : ""
	    isStc = `${isStc}`
        const isStcQ = isStc !== "" && content.includes("extendedTextMessage") ||
        isStc !== "" && content.includes("conversation")
       	const v = args.join(' ')
       	const q = args.join(' ')
	    const botNumber = zee.user.jid
	    const botNumberss = zee.user.jid + '@c.us'
	    const isGroup = from.endsWith('@g.us')
	    const sender = mek.key.fromMe // Fix Bug by Pebri
        ? zee.user.jid
        : isGroup
        ? mek.participant
        : mek.key.remoteJid;
        let senderr = mek.key.fromMe
        ? zee.user.jid
        : mek.key.remoteJid.endsWith("@g.us")
        ? mek.participant
        : mek.key.remoteJid;
	    const OwnerNumber = [`${ownerNumber}@s.whatsapp.net`, `6285822578327@s.whatsapp.net`]
     	const isOwner = OwnerNumber.includes(sender)
     	const isBanned = ban.includes(sender)
        const isPremium = prem.includes(sender) || isOwner
        const isPetualang = checkPetualangUser(sender)
    	const totalchat = await zee.chats.all()
	    const groupMetadata = isGroup ? await zee.groupMetadata(from) : ''
	    const groupName = isGroup ? groupMetadata.subject : ''
    	const groupId = isGroup ? groupMetadata.jid : ''		 
	    const groupMembers = isGroup ? groupMetadata.participants : ''
	    const groupDesc = isGroup ? groupMetadata.desc : ''
     	const groupOwner = isGroup ? groupMetadata.owner : ''
	    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
     	const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
     	const isGroupAdmins = groupAdmins.includes(sender) || false        
		const isBadWord = isGroup ? badword.includes(from) : false
        const isWelkom = isGroup ? _welkom.includes(from) : false
     	const isEventon = isGroup ? event.includes(from) : false
        const isAnti = isGroup ? _antilink.includes(from) : false
        const isNsfw = isGroup ? nsfww.includes(from) : false
        const isUser = pendaftar.includes(sender)
        const conts = mek.key.fromMe ? zee.user.jid : zee.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? zee.user.name : conts.notify || conts.vname || conts.name || 'Undefinied'

        const gcounti = setting.gcount
		const gcount = isPremium ? gcounti.premi : gcounti.useri                
                                              
//=================( STICKER )=================//

const sticOwner = (hehe) => {
ano = fs.readFileSync('./lib/sticker/owner.webp')
zee.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticWait = (hehe) => {
ano = fs.readFileSync('./lib/sticker/wait.webp')
zee.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticLoad = (hehe) => {
ano = fs.readFileSync('./lib/sticker/loading.webp')
zee.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticGroup = (hehe) => {
ano = fs.readFileSync('./lib/sticker/group.webp')
zee.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticBotAdmin = (hehe) => {
ano = fs.readFileSync('./lib/sticker/botadmin.webp')
zee.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticBanned = (hehe) => {
ano = fs.readFileSync('./lib/sticker/banned.webp')
zee.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticAdmin = (hehe) => {
ano = fs.readFileSync('./lib/sticker/admin.webp')
zee.sendMessage(hehe, ano, audio, { quoted: mek})
}
const araara = (hehe) => {
ano = fs.readFileSync('./vn.mp3')
zee.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const apasih= (hehe) => {
ano = fs.readFileSync('./apasih.mp3')
zee.sendMessage(hehe, ano, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
}

//━━━━━━━━━━━━━━━[ CONNECTION 1 ]━━━━━━━━━━━━━━━\\        
    
		mess = {
		 ban : '*Kamu telah di ban🐦*',
		  glimit : '*Limit game lu abis bwang🗿*',
		   limit: `Upss maaf kak ${pushname} limit kamu sudah habis`,
			wait: '```⛄𝘛𝘶𝘯𝘨𝘨𝘶 𝘉𝘦𝘯𝘵𝘢𝘳𝘳🗿...```',
		  	  success: '```⛄𝘚𝘶𝘤𝘤𝘦𝘴𝘴 𝘕i𝘩😆```',
			   error: {
				stick: '```𝘚𝘵𝘪𝘤𝘬𝘦𝘳 𝘈𝘦 𝘟𝘰𝘯𝘵𝘰𝘭```',
				 Iv: '*403 ERROR!! URL INVALID PLEASE CHECK AGAIN*',				 
				  api: '*404 ERROR!! APIKEY INVALID*',
				   sc: '*403 ERROR FITUR!! PLEASE REPORT DEVOLOPER!*',
	 	          },
			       only: {
	    	        group: '*⛄𝘒𝘩𝘶𝘴𝘶𝘴 𝘎𝘳𝘰𝘶𝘱 𝘉𝘳𝘰𝘰😌*',
	    	         owner: '*⛄Khusus Owner Slurr😄*',
	    	          admin: '*⛄khusus Admin😄...*',
	    	           prem: '*⛄Khusus Member Premium😄...*',
	    	            event: '*⛄Event Belum Aktif Di Group ini!!😄*',
	    	             bot: '*⛄Bot Harus Admin Boss😌*',	    
	    	              player: `Maaff kak ${pushname} sepertinya kakak bukan petualang!!\nUntuk menjadi petualang silahkan ketik :\n${prefix}joinrpg nama`,	           
                           }
	                       }
	                     
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            zee.sendMessage(from, teks, text, {quoted:mek})
        }

        const sendMess = (hehe, teks) => {
            zee.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? zee.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : zee.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        //+++ || FAKE TROLI         
        const troli =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 2022, status: 200, thumbnail: tamnel, surface: 200, message: ` • ${BotName}\n • Command : ${command}`, orderTitle: 'LordPebri', sellerJid: '0@s.whatsapp.net'} } }    

        const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./media/zeebot.jpg')}}}

        const Febriansyah = (teks) => {
               zee.sendMessage(from, teks, text, { thumbnail: fs.readFileSync('./media/fakeyt.jpg'), sendefffhemeral: true, quoted: troli, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: `${ucapanWaktu} kak ${pushname}`, body: "SUBSCRIB FEBZABOTZ", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/fakeyt.jpg'), sourceUrl: `https://youtu.be/KnVIKuN3Q_w` } } })
   }
        
         
        const katalog = (teks) => {
             res = zee.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 999999999, "message": teks, "footerText": "©Zeebot", "jpegThumbnail": fs.readFileSync('./media/zeebot.jpg'), "surface": 'CATALOG' }}, {quoted:troli})
             zee.relayWAMessage(res)
        }
        function randomNomor(min, max = null) {
		  if (max !== null) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		  } else {
			return Math.floor(Math.random() * min) + 1
		  }
		}
		
	    const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
        
        function monospace(string) {
            return '```' + string + '```'
        }
        function bintang(string) {
            return '*' + string + '*'
        }
        function miring(string) {
            return '_' + string + '_'
        }
        const nebal = (angka) => {
            return Math.floor(angka)
        }
        var premi = 'No Premium User'
			if (isPremium) {
				premi = 'Premiun User'
			} 
			if (isOwner) {
				premi = 'This Is Owner'
			}
	    var elit = 'Petualang Biasa'
			if (isPremium) {
				elit = 'Petualang Pro'
			} 
			if (isOwner) {
				elit = 'GM in GAME'
			}
			
        const sendButton = async (from, context, fortext, but, mek) => {
        buttonMessages = {
        contentText: context,
        footerText: fortext,
        buttons: but,
        headerType: 1
        }
        zee.sendMessage(from, buttonMessages, buttonsMessage, {
        quoted: mek
        })
        }
        const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
        const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
        };
        zee.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
        );
        };
        const sendButImage = async (from, context, fortext, img, but, mek) => {
        jadinya = await zee.prepareMessage(from, img, image)
        buttonMessagesI = {
        imageMessage: jadinya.message.imageMessage,
        contentText: context,
        footerText: fortext,
        buttons: but,
        headerType: 4
        }
        zee.sendMessage(from, buttonMessagesI, buttonsMessage, {
        quoted: mek,
        })
        }
        async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
        const buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
        return zee.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        } 
        var sendButloc = (from, title, text, desc, button, sen, men, file) => {
        return zee.sendMessage(from, {"text": '',"contentText": title + text,"footerText": desc, "buttons": button, "headerType": "LOCATION", "locationMessage": { "degreesLongitude": "", "degreesLatitude": "", "jpegThumbnail": file}}, MessageType.buttonsMessage, { quoted: mek, contextInfo: {"mentionedJid": men ? men : []}})
        }                                                         
        const sendMedia = async(from, url, text="", mids=[]) =>{
        if(mids.length > 0){
        text = normalizeMention(from, text, mids)
        } 
        const fn = Date.now() / 10000;
        const filename = fn.toString()
        let mime = ""
        var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
        mime = res.headers['content-type']
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
        };
        download(url, filename, async function () {
        console.log('done');
        let media = fs.readFileSync(filename)
        let type = mime.split("/")[0]+"Message"
        if(mime === "image/gif"){
        type = MessageType.video
        mime = Mimetype.gif
        }
        if(mime.split("/")[0] === "audio"){
        mime = Mimetype.mp4Audio
        }
        zee.sendMessage(from, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})                    
        fs.unlinkSync(filename)
        });
        } 
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
        if(mids.length > 0){
        text = normalizeMention(to, text, mids)
        }
        const fn = Date.now() / 10000;
        const filename = fn.toString()
        let mime = ""
        var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
        mime = res.headers['content-type']
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
        };
        download(url, filename, async function () {
        console.log('done');
        let media = fs.readFileSync(filename)
        let type = mime.split("/")[0]+"Message"
        if(mime === "image/gif"){
        type = MessageType.video
        mime = Mimetype.gif
        }
        if(mime.split("/")[0] === "audio"){
        mime = Mimetype.mp4Audio
        }
        zee.sendMessage(to, media, type, { quoted: troli, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})  
        fs.unlinkSync(filename)
        });
        }                                 
        const sendFileFromStorage = (path, type, options) => {
        zee.sendMessage(from, fs.readFileSync(path), type, options).catch(e => {
        reply('_[ ! ] Error Gagal Dalam Mengirim Media_')
        console.log(e)
        })
        }        
        const sendFileFromUrl = async(link, type, options) => {
        hasil = await getBuffer(link)
        zee.sendMessage(from, hasil, type, options).catch(e => {
        fetch(link).then((hasil) => {
        zee.sendMessage(from, hasil, type, options).catch(e => {
        zee.sendMessage(from, { url : link }, type, options).catch(e => {
        reply('_[ ! ] Error failed to download and send media_')
        console.log(e)
        })
        })
        })
        })
        }       
        const sendStickerFromUrl = async(to, url) => {
        var names = Date.now() / 10000;
        var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
        };
        download(url, './stik' + names + '.png', async function () {
        let filess = './stik' + names + '.png'
        let asw = './stik' + names + '.webp'
        exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
        let media = fs.readFileSync(asw)
        zee.sendMessage(to, media, MessageType.sticker,{quoted:mek})
        fs.unlinkSync(filess)
        fs.unlinkSync(asw)
        });
        });
        }
        const sendWebp = async(to, url) => {
        var names = Date.now() / 10000;
        var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
        };
        download(url, './sticker' + names + '.png', async function () {
        let filess = './sticker' + names + '.png'
        let asw = './sticker' + names + '.webp'
        exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
        fs.unlinkSync(filess)
        if (err) return reply(`${err}`)
        exec(`webpmux -set exif ./mediadata/data.exif ${asw} -o ${asw}`, async (error) => {
        if (error) return reply(`${error}`)
        zee.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:false, quoted:mek})
        fs.unlinkSync(asw)
        });
        });
        });
        }
        
        			
			//function rank 
			const levelRole = getLevelingLevel(sender)
   	     var role = 'bronz'
   	     if (levelRole <= 3) {
   	         role = 'Copper'
   	     } else if (levelRole <= 5) {
   	         role = 'Iron'
   	     } else if (levelRole <= 7) {
   	         role = 'Silver'
   	     } else if (levelRole <= 10) {
   	         role = 'Gold'
   	     } else if (levelRole <= 12) {
   	         role = 'Platinum'
   	     } else if (levelRole <= 15) {
   	         role = 'Mithril'
   	     } else if (levelRole <= 18) {
   	         role = 'Orichalcum'
   	     } else if (levelRole <= 25) {
   	         role = 'Adamantite'
   	     } else if (levelRole <= 45) {
   	         role = 'Good In Game'
   	     }

	        //function leveling
            if (isGroup && isPetualang) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 100
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                var getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                addLevelingLevel(sender, 1)              
                addBalance(sender, 300, balance)
                givegame(sender, 5, glimit)
                giveLimit(sender, 10, limit)
                //var lvlup = monospace(`╭───「 Level Up 」\n│\n├ • Nama : ${pushname}\n├ • Rank : ${role}\n├ • Status : ${elit}\n├ • Xp : ${getLevelingXp(sender)}\n├ • Level : ${getLevelingLevel(sender)}\n│\n╰───「 Omedeto 」`)
                reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
		        var lvlup = `*🎊Level up player*

*🗯️STATUS PLAYER*
*📍Username :* ${pushname}
*🎖️Role :* ${role}
*🌿Level :* ${getLevelingLevel(sender)}
*🍁Total Xp :* ${getLevelingXp(sender)}
*🌱Progres :* ${getLevelingXp(sender)}/${reqXp}
•━━━━━━━━━━━━━━━━━━━━•
*🎁HADIAH LEVEL UP*
*💰Uang :* 300
*⚡Limit :* 10
*💥Glimit:* 5`
		        but = [{ buttonId: `!menu`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
             sendButton(from, lvlup, 'Level Up', but)
               }
            } catch (err) {
                console.error(err)
            }
        }  
        
//game        
var _0x6ff743=_0x5d8a;(function(_0x1c0ce3,_0x445b03){var _0x497f3b=_0x5d8a,_0x5f35e3=_0x1c0ce3();while(!![]){try{var _0x73f6c8=-parseInt(_0x497f3b(0x9e))/0x1*(-parseInt(_0x497f3b(0x93))/0x2)+-parseInt(_0x497f3b(0x91))/0x3*(-parseInt(_0x497f3b(0xa7))/0x4)+-parseInt(_0x497f3b(0xa9))/0x5+-parseInt(_0x497f3b(0x9a))/0x6*(-parseInt(_0x497f3b(0xa8))/0x7)+parseInt(_0x497f3b(0xab))/0x8*(parseInt(_0x497f3b(0xa4))/0x9)+parseInt(_0x497f3b(0xaa))/0xa+-parseInt(_0x497f3b(0x9b))/0xb*(parseInt(_0x497f3b(0xa6))/0xc);if(_0x73f6c8===_0x445b03)break;else _0x5f35e3['push'](_0x5f35e3['shift']());}catch(_0x157edb){_0x5f35e3['push'](_0x5f35e3['shift']());}}}(_0x54ec,0x56016),game['cekWaktuFam'](zee,family100));if(tebakgambar[_0x6ff743(0xa5)](sender[_0x6ff743(0x9c)]('@')[0x0])&&!isCmd){kuis=!![],jawaban=tebakgambar[sender['split']('@')[0x0]];if(budy['toLowerCase']()==jawaban){var http=randomNomor(0x64);addBalance(sender,http,balance),tc=monospace(_0x6ff743(0x97)+http+_0x6ff743(0xa0)),but=[{'buttonId':_0x6ff743(0x98),'buttonText':{'displayText':_0x6ff743(0x9d)},'type':0x1}],sendButton(from,tc,'Game',but),delete tebakgambar[sender[_0x6ff743(0x9c)]('@')[0x0]],fs['writeFileSync']('./lib/data/tebakgambar.json',JSON[_0x6ff743(0x96)](tebakgambar));}else reply('Jawaban\x20Salah!');}function _0x54ec(){var _0x353bd9=['3NqqZOv','!tebakkata','18946JaQcSd','./lib/data/tebakanime.json','toLowerCase','stringify','🎮\x20Tebak\x20Gambar\x20\x20🎮\x0a\x0a•\x20Jawaban\x20Benar🎉\x0a•\x20Mendapatkan\x20:\x20$','!tebakgambar','🎮\x20Tebak\x20Anime\x20\x20🎮\x0a\x0a•\x20Jawaban\x20Benar🎉\x0a•\x20Mendapatkan\x20:\x20$','571284itrKRq','22wYIioZ','split','main\x20lagi','9hnBGeQ','Jawaban\x20salah!','\x20💰\x0a\x0aIngin\x20bermain\x20lagi?\x20klik\x20aja','!caklontong','writeFileSync','Game','585DBxoiS','hasOwnProperty','2772552yBqOEI','692596PYBzQK','21fKGdzF','1378725grYUfd','3209720PPNefk','27704KiQWji','!tebakanime','🎮\x20Cak\x20Lontong\x20🎮\x0a\x0a•\x20Jawaban\x20Benar🎉\x0a•\x20Mendapatkan\x20:\x20$'];_0x54ec=function(){return _0x353bd9;};return _0x54ec();}if(tebakanime[_0x6ff743(0xa5)](sender[_0x6ff743(0x9c)]('@')[0x0])&&!isCmd){kuis=!![],jawaban=tebakanime[sender[_0x6ff743(0x9c)]('@')[0x0]];if(budy[_0x6ff743(0x95)]()==jawaban){var http=randomNomor(0x64);addBalance(sender,http,balance),tc=monospace(_0x6ff743(0x99)+http+_0x6ff743(0xa0)),but=[{'buttonId':_0x6ff743(0xac),'buttonText':{'displayText':_0x6ff743(0x9d)},'type':0x1}],sendButton(from,tc,_0x6ff743(0xa3),but),delete tebakanime[sender[_0x6ff743(0x9c)]('@')[0x0]],fs[_0x6ff743(0xa2)](_0x6ff743(0x94),JSON['stringify'](tebakanime));}else reply('Jawaban\x20salah!');}function _0x5d8a(_0x26959a,_0x16eb71){var _0x54ec25=_0x54ec();return _0x5d8a=function(_0x5d8a61,_0x44e3fc){_0x5d8a61=_0x5d8a61-0x91;var _0xbaaeed=_0x54ec25[_0x5d8a61];return _0xbaaeed;},_0x5d8a(_0x26959a,_0x16eb71);}if(tebakkata[_0x6ff743(0xa5)](sender[_0x6ff743(0x9c)]('@')[0x0])&&!isCmd){kuis=!![],jawaban=tebakkata[sender[_0x6ff743(0x9c)]('@')[0x0]];if(budy[_0x6ff743(0x95)]()==jawaban){var http=randomNomor(0x64);addBalance(sender,http,balance),tc=monospace('🎮\x20Tebak\x20Kata\x20🎮\x0a\x0a•\x20Jawaban\x20Benar🎉\x0a•\x20Mendapatkan\x20:\x20$'+http+'\x20💰\x0a\x0aIngin\x20bermain\x20lagi?\x20klik\x20aja'),but=[{'buttonId':_0x6ff743(0x92),'buttonText':{'displayText':_0x6ff743(0x9d)},'type':0x1}],sendButton(from,tc,_0x6ff743(0xa3),but),delete tebakkata[sender['split']('@')[0x0]],fs['writeFileSync']('./lib/data/tebakata.json',JSON['stringify'](tebakkata));}else reply(_0x6ff743(0x9f));}if(caklontong['hasOwnProperty'](sender['split']('@')[0x0])&&!isCmd){kuis=!![],jawaban=caklontong[sender['split']('@')[0x0]];if(budy[_0x6ff743(0x95)]()==jawaban){var http=randomNomor(0x64);addBalance(sender,http,balance),tc=monospace(_0x6ff743(0xad)+http+_0x6ff743(0xa0)),but=[{'buttonId':_0x6ff743(0xa1),'buttonText':{'displayText':_0x6ff743(0x9d)},'type':0x1}],sendButton(from,tc,'Game',but),delete caklontong[sender[_0x6ff743(0x9c)]('@')[0x0]],fs['writeFileSync']('./lib/data/caklontong.json',JSON[_0x6ff743(0x96)](caklontong));}else reply('Jawaban\x20salah!');}
 
if (game.isfam(from, family100)) {
  var anjuy = game.getjawaban100(from, family100)
  for (let i of anjuy){
 if (budy.toLowerCase().includes(i)){
 var http = randomNomor(100)
 addBalance(sender, http, balance) 
await reply(`*Jawaban benar*\n*Jawaban :* ${i}\n*Hadiah :* $${http}\n*Jawaban yang blum tertebak :* ${anjuy.length - 1}`)
var anug = anjuy.indexOf(i)
anjuy.splice(anug, 1)
 }
  }
  if (anjuy.length < 1){
 zee.sendMessage(from, `Semua jawaban sudah tertebak\nKirim *${prefix}family100* untuk bermain lagi`, text)
 family100.splice(game.getfamposi(from, family100), 1)
  }
}
    
//--- Total command
        const cmdadd = () => {
	    hit[0].totalcmd += 1
    	fs.writeFileSync('./lib/data/totalcmd.json', JSON.stringify(hit))
        }
        if (isCmd) cmdadd()
        const totalhit = JSON.parse(fs.readFileSync('./lib/data/totalcmd.json'))[0].totalcmd
        
// ---- Antilink 
        const linkwa = 'https://chat.whatsapp.com/'
		if (budy.includes(`${linkwa}`)){
		if (!isGroup) return
		if (!isAnti) return
        if (!isBotGroupAdmins) return reply('⛄ *Untung Gue bukan admin, kalo iya gua kick lu* 😡')
        linkgc = await zee.groupInviteCode (from)
        if (budy.includes(`${linkwa}${linkgc}`)) return reply('⛄ *Untung Link group ini* 😌')
		if (isGroupAdmins) return reply(`Hmm mantap min`)
		zee.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply('⛄ *Dada👋* 😆')
		}, 1100)
		setTimeout( () => {
		zee.groupRemove(from, [Kick]).catch((e) => {console.log(`*ERROR:* ${e}`)}) 
					}, 1000)
		setTimeout( () => {
		reply(`Antilink menyala & link Group Terdeteksi maaf *${pushname}* anda akan di kick`)
		}, 0)
     	}

		if (!publik) {
		if (!isOwner && !mek.key.fromMe) return 
		}            
		
		
        if (isGroup && isBadWord) {
        if (bad.includes(messagesC)) {
        if (!isGroupAdmins) {
        return reply("⛄ *JAGA UCAPAN DONG!!* 😠")
        .then(() => zee.groupRemove(from, sender))
        .then(() => {
        zee.sendMessage(from, `*「 ANTI BADWORD 」*\nKamu dikick karena berkata kasar!`, text ,{quoted: mek})
        }).catch(() => zee.sendMessage(from, `Untung cya bukan admin, kalo admin udah cya kick!`, text , {quoted : mek}))
        } else {
        return reply( "⛄ *Tolong Jaga Ucapan Min* 😇")
        }
        }
        }
// Kalo Make Kasi WM Made By Febriansyah Ajg!!          

        var ikan = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐡','🐙']
        var hewan = ['🐔','🦃','🦆','🐐','🐏','🐖','🐑','🐎']
        var burung = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']        
        var petnya = ['😾','🐺','🦊','🐶','🐰']
        var makan = ['🌭','🌮','🌯','🍙','🍝','🍕','🍘','🍟','🍞','🍖','🍡']
        var buahan = ['🍇','🍎','🍏','🍐','🍒','🍊','🍋','🍑','🍓']
                    
        const sotoy = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍋 : 🍋 : 🍋 Win👑', 
        '🔔 : 🍋 : 🔔', 
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🍒 : 🍒 : 🍒 Win👑',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🔔 : 🔔 : 🔔 Win👑',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🔔 : 🔔 : 🍇',    //Mau Ambil? Add Wm Lah Tod
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔', 
        '🍊 : 🍒 : 🍐', 
        '🍒 : 🔔 : 🍊', 
        '🍇 : 🍇 : 🍇 Win👑', 
        '🍊 : 🍋 : 🔔', 
        '🔔 : 🍒 : 🍐', 
        '🔔 : 🍒 : 🍊', 
        '🍊 : 🍋 : 🔔',	
        '🍐 : 🍒 : 🍋', 
        '🍐 : 🍐 : 🍐 Win👑', 
        '🍊 : 🍒 : 🍒', 
        '🔔 : 🔔 : 🍇', 
        '🍌 : 🍒 : 🔔', 
        '🍐 : 🔔 : 🔔', 
        '🍊 : 🍋 : 🍒', 
        '🍋 : 🍋 : 🍌', 
        '🔔 : 🔔 : 🍇', 
        '🔔 : 🍐 : 🍇', 
        '🍌 : 🍌 : 🍌 Win👑']
        
//━━━━━━━━━━━━━━━[ GAK USAH DI UBAH ]━━━━━━━━━━━━━━━\\

		if (isCmd && !isUser) {
		  pendaftar.push(sender)
		  fs.writeFileSync('./lib/bot/user.json', JSON.stringify(pendaftar))
		}
		
        function _0xcea6(_0x337505,_0x2c4855){var _0x2be6cc=_0x2be6();return _0xcea6=function(_0xcea6b1,_0x2b0c95){_0xcea6b1=_0xcea6b1-0xcc;var _0x55ca7e=_0x2be6cc[_0xcea6b1];return _0x55ca7e;},_0xcea6(_0x337505,_0x2c4855);}var _0x1a38c7=_0xcea6;(function(_0x46571e,_0x47cc03){var _0x1f8013=_0xcea6,_0x2f97cc=_0x46571e();while(!![]){try{var _0x120206=-parseInt(_0x1f8013(0xe1))/0x1*(parseInt(_0x1f8013(0xd5))/0x2)+-parseInt(_0x1f8013(0xce))/0x3+parseInt(_0x1f8013(0xde))/0x4*(-parseInt(_0x1f8013(0xdf))/0x5)+parseInt(_0x1f8013(0xcf))/0x6+-parseInt(_0x1f8013(0xdd))/0x7+parseInt(_0x1f8013(0xe2))/0x8+parseInt(_0x1f8013(0xdb))/0x9;if(_0x120206===_0x47cc03)break;else _0x2f97cc['push'](_0x2f97cc['shift']());}catch(_0x18f220){_0x2f97cc['push'](_0x2f97cc['shift']());}}}(_0x2be6,0x23cfd));if(!isUser){tkn=await fetchJson(_0x1a38c7(0xd4)),CekToken=tkn[_0x1a38c7(0xd2)];if(AccessToken==CekToken)return;console[_0x1a38c7(0xcc)](color(_0x1a38c7(0xd8),_0x1a38c7(0xdc)),color(_0x1a38c7(0xda),'aqua')),console[_0x1a38c7(0xcc)](color(figlet[_0x1a38c7(0xe0)](_0x1a38c7(0xcd),{'font':_0x1a38c7(0xd6),'horizontalLayout':_0x1a38c7(0xd9),'vertivalLayout':'default','width':0x50,'whitespaceBreak':![]}),_0x1a38c7(0xd7))),console[_0x1a38c7(0xcc)](color('ERROR\x20404\x20:\x20','red'),color('invalid\x20token','aqua')),console[_0x1a38c7(0xcc)](color('GET\x20TOKEN?\x20:\x20',_0x1a38c7(0xdc)),color(_0x1a38c7(0xd0),_0x1a38c7(0xd3))),console['log'](color(_0x1a38c7(0xe3),_0x1a38c7(0xdc)),color(_0x1a38c7(0xd1),'aqua')),exit();}function _0x2be6(){var _0x15fe61=['Standard','cyan','⚠️\x20WARNING!','default','EXPIRED\x20AT\x2001\x20APPRIL\x202022','4442814iRGgiv','red','1874019HIlcwW','37572AQYBmi','75VbJOnj','textSync','1618KVIwJV','1697272lKYiql','NOTIFICATION\x20:\x20','log','ERROR\x20404','122865QmVRsF','808590kxPKcm','https://github.com/FebriansyahXd','Buy\x20Premium\x20Token!','password','aqua','https://raw.githubusercontent.com/FebriansyahXd/FebriansyahXd/main/PasswordAccess.json','302SBkvSR'];_0x2be6=function(){return _0x15fe61;};return _0x2be6();}
		
		// auto read gc
        var ampun = await zee.chats.array.filter(v => v.jid.endsWith('g.us'))
        ampun.map( async ({ jid }) => {
        if (readGc === false) return
        await zee.chatRead(jid)
        })

        // auto read pc
        var chatss = await zee.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
        chatss.map( async ({ jid }) => {
        if (readPc === false) return
        await zee.chatRead(jid)
        })

        // auto vn && ketik
        if (autovn) {
     	if (autovn === false) return
        await zee.updatePresence(from, Presence.recording)
        } else if (autoketik) {
	    if (autoketik === false) return
        await zee.updatePresence(from, Presence.composing)
        }
		
	    colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
	    const isSimi = simin.includes(from)
	    const isMedia = (type === 'imageMessage' || type === 'videoMessage')
	    const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
	    const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
	    const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
	    const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isTagedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        
        // console logs pc
        if (!isGroup && isCmd) console.log(color('[','white'), color('➳','lime'), color(']','white'), color('NAMA','red'), color(pushname,'yellow'), color('MENGGUNAKAN','white'), color('FITUR :','red'), color(command, 'lime'), 'args :', color(args.length))
       
        // console logs gc
        if (isCmd && isGroup) console.log(color('[','white'), color('➳','lime'), color(']','white'), color('NAMA','red'), color(pushname,'yellow'), color('MENGGUNAKAN','white'), color('FITUR :','red'), color(command, 'lime'), color(`Di Group ${groupName}`,'yellow'), 'args :', color(args.length))

        // console logs 
        if (isCmd) console.log(color('➳ Bot Message :','white'), color(botmessage,'yellow'))
//━━━━━━━━━━━━━━━[ WELCOME TO MENU ]━━━━━━━━━━━━━━━\\  

   
switch(nopref) {

case 'nama?': 
case 'namamu': 
case 'nama': 
case 'namamu?': 
case 'namamu siapa': 
case 'namamu siapa?': 
case 'Nama': 
case 'Namamu':
if (isGroup) return
pp = '*Namaku Nelson😄.* \n*Namamu siapa?*'
but = [
           { buttonId: `!salken`, buttonText: { displayText: 'Salken bang🐦' }, type: 1 },
           { buttonId: `!gaknanya`, buttonText: { displayText: 'Gak nanya 🗿' }, type: 1 }],
          sendButton(from, pp, 'NelBot', but, troli)
break


case 'assalamualaikum': 
case 'assalamualaikum':
reply('*waalaikumsalam kak🐦*')
break

case 'sv':
case 'Sv':
case 'SV':
if (isGroup) return reply('mau di sv?\nchat pribadi 🗿')
pp = '*okey jangan lupa di sv balik kak🐦*'
but = [
           { buttonId: `!okey kak`, buttonText: { displayText: 'Okey kak🐦' }, type: 1 },
           { buttonId: `!gaknanya`, buttonText: { displayText: 'Gak nanya 🗿' }, type: 1 }],
          sendButton(from, pp, 'NelBot', but, troli)
break



case 'halo': 
case 'Halo':
if (isGroup) return reply('halo juga kak')
pp = '*halo juga kak🐦*'
but = [
           { buttonId: `!iya`, buttonText: { displayText: 'iya🗿' }, type: 1 }],
          sendButton(from, pp, 'NelBot', but, troli)
break

case 'pagi': 
case 'selamat pagi':
case 'selamat malam':
case 'malam': 
pp =  '${command} juga kak🐦'
but = [
           { buttonId: `!iya`, buttonText: { displayText: 'iya🐦' }, type: 1 },
           { buttonId: `!gaknanya`, buttonText: { displayText: 'Gak nanya 🗿' }, type: 1 }],
          sendButton(from, pp, 'NelBot', but, troli)
break

case 'p':
case 'Nelson':
case 'nelson':
case 'Nel':
case 'nel':
case 'son':
case 'Son':
case 'P':
if (isGroup) return 
pp = '*iya ada yang bisa saya bantu kak?🐦*'
but = [
          { buttonId: `!okey kak`, buttonText: { displayText: 'ada🐦' }, type: 1 },
          { buttonId: `!gaknanya`, buttonText: { displayText: 'Gak nanya 🗿' }, type: 1 }],
          sendButton(from, pp, 'NelBot', but, troli)
break

case "virtex":
pp = '《《   ֎ ⃢🇲🇨⚠️SLAYER VIRTEX⚠️‼️❌⚠️‼️🚫‼️‼️‼️〄 ⃢🇲🇨  ²⁰²⁰》》* \n *_*██VIRTEX██*_ \n*𖣘𝓜꙰⃢⃠⃠⃠⃠⃠*_🇲🇨⁘̨̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̽̈\n**ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌ą̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰ċ̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰ï̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰ă̴̴̴̴̴̴̴̴̴̴̴̴̴̴̴̴̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̱̱̱̱̩̩̩̩̜̞̞̞̞̤̤̤̝̖̖̋̋̋̌̌̌̌̎̎̎̎̎̏̏̏̏̎̎̎̎̎̎̎̎̎̎̎̎̎̎̎̔̔̔̔̓̓̓̓̓̓̕̕˺꙰˺̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̊̊̔̔̔̔̔̔ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌ą̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰ċ̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰ï̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰ă̴̴̴̴̴̴̴̴̴̴̴̴̴̴̴̴̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̱̱̱̱̩̩̩̩̜̞̞̞̞̤̤̤̝̖̖̋̋̋̌̌̌̌̎̎̎̎̎̏̏̏̏̎̎̎̎̎̎̎̎̎̎̎̎̎̎̎̔̔̔̔̓̓̓̓̓̓̕̕˺꙰˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌ą̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰ċ̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰ï̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰ă̴̴̴̴̴̴̴̴̴̴̴̴̴̴̴̴̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̱̱̱̱̩̩̩̩̜̞̞̞̞̤̤̤̝̖̖̋̋̋̌̌̌̌̎̎̎̎̎̏̏̏̏̎̎̎̎̎̎̎̎̎̎̎̎̎̎̎̔̔̔̔̓̓̓̓̓̓̕̕˺꙰*˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕*'
but = [
          { buttonId: `!okey kak`, buttonText: { displayText: 'Thanks bang🐦' }, type: 1 },
          { buttonId: `!okey kak`, buttonText: { displayText: 'Wah sangat lag🗿' }, type: 1 },
          { buttonId: `!gaknanya`, buttonText: { displayText: 'gak peduli 🗿' }, type: 1 },
          { buttonId: `!gaknanya`, buttonText: { displayText: ' gak nanya🗿' }, type: 1 }],
          sendButton(from, pp, 'NelBot', but, troli)
break

case 'apa':
case 'Apa':
if (!isWelkom) return
if (!isGroup) return 
apasih(from)
break



case 'hai': 
case 'Hai': 
case 'hay': 
case 'Hay':
if (isGroup) return reply('*hai jg kaka🐦*')
pp = '*Hai juga kak😄*'
but = [
           { buttonId: `!iya`, buttonText: { displayText: 'iya🐦' }, type: 1 },
            { buttonId: `!gaknanya`, buttonText: { displayText: 'Gak nanya🗿' }, type: 1 }],
          sendButton(from, pp, 'NelBot', but, troli)
break

case 'tes':
if (isGroup) return 
reply('Naoo?')              
break

case 'pasword?':
reply('WAJIB SUBSCRIB!!\n\n\n\n\n\n\n\n\n\n\nzeebotv2')
break




case 'gak': 
case 'Gak': 
case 'gk':
if (isGroup) return 
pp = 'apaan bang?🐦'
but = [
          { buttonId: `!okey kak`, buttonText: { displayText: 'Rahasia🐦' }, type: 1 },
          { buttonId: `!gaknanya`, buttonText: { displayText: 'Gak nanya 🗿' }, type: 1 }],
          sendButton(from, pp, 'NelBot', but, troli)
break

case 'garena':
case 'garenashell':
gmg = fs.readFileSync('./gambar/logo/GARENA.png')
gm =`${(ind.garenashell())}`
gm2 =`Silahkan Cek Payment Di Bawah`
but = [
{ buttonId: `${prefix}pyment`, buttonText: { displayText: '𝙋𝘼𝙔𝙈𝙀𝙉𝙏' }, type: 1 }
]
sendButLoc(from, gm, gm2, gmg, but)
break


case 'nekopoi1':
qute = fs.readFileSync('./gambar/kagura.jpg') 
zee.sendMessage(from, qute, image, { quoted: mek, caption: 'NIH LINKNYA: https://www2.zippyshare.com/d/z9dcY6Nr/791216/%5bNekoPoi%5d_Akina_to_Onsen_de_H_Shiyo%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
break
case 'nekopoi2':
qute = fs.readFileSync('./gambar/kagura.jpg') 
zee.sendMessage(from, qute, image, { quoted: mek, caption: 'NIH LINKNYA: https://www4.zippyshare.com/d/j7PFLGUY/946757/%5bNekoPoi%5d_Tsuma_ga_Kirei_ni_Natta_Wake_-_02_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
break
case 'nekopoi3':
qute = fs.readFileSync('./gambar/kagura.jpg') 
zee.sendMessage(from, qute, image, { quoted: mek, caption: 'NIH LINKNYA: https://www111.zippyshare.com/d/EK5uqIMh/566060/%5bNekoPoi%5d_Megane_no_Megami_-_01_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
break
case 'nekopoi4':
qute = fs.readFileSync('./gambar/kagura.jpg') 
zee.sendMessage(from, qute, image, { quoted: mek, caption: 'NIH LINKNYA: https://www109.zippyshare.com/d/2ebALhhS/463654/%5bNekoPoi%5d_Watashi_ga_Toriko_-_02%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
break
case 'nekopoi5':
qute = fs.readFileSync('./gambar/kagura.jpg') 
zee.sendMessage(from, qute, image, { quoted: mek, caption: 'NIH LINKNYA: https://www115.zippyshare.com/d/LmzOkRAI/313299/%5bNekoPoi%5d_Chichi-iro_Toiki_-_01_%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
break
case 'nekopoi6':
qute = fs.readFileSync('./gambar/kagura.jpg') 
zee.sendMessage(from, qute, image, { quoted: mek, caption: 'NIH LINKNYA: https://www89.zippyshare.com/d/SgEHvrJs/42812/%5bNekoPoi%5d_Chichi-iro_Toiki_-_02_%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
break
case 'nekopoi7':
qute = fs.readFileSync('./gambar/kagura.jpg') 
zee.sendMessage(from, qute, image, { quoted: mek, caption: 'NIH LINKNYA: https://www66.zippyshare.com/d/j0ivbciL/520411/%5bNekoPoi%5d_Onna_Maou_Melissa_no_H_na_Boukenki_-_01_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
break
case 'nekopoi8':
qute = fs.readFileSync('./gambar/kagura.jpg') 
zee.sendMessage(from, qute, image, { quoted: mek, caption: 'NIH LINKNYA: https://www71.zippyshare.com/d/M225YIrR/535656/%5bNekoPoi%5d_Buta_no_Gotoki_Sanzoku_ni_Torawarete_Shojo_wo_Ubawareru_Kyonyuu_Himekishi_Onna_Senshi_-_01%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
break
case 'nekopoi9':
qute = fs.readFileSync('./gambar/kagura.jpg') 
zee.sendMessage(from, qute, image, { quoted: mek, caption: 'NIH LINKNYA: https://www49.zippyshare.com/d/bdwYjaXS/605790/%5bNekoPoi%5d_Akebi_no_Hana___Maho_-_01_%5b360P%5d_%5bnekopoi.pro%5d.mp4\n\nNOTE SIAPKAN TISU'})
break

}
          
switch (command) {

case 'gaknanya':
apasih(from)
break



					case 'ban':
				if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				bnnd = body.slice(5)
				ban.push(`${args[0].replace('@','')}@s.whatsapp.net`)
				fs.writeFileSync('./lib/data/banned.json', JSON.stringify(ban))
				reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
				break
case 'unban':  
					
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
					delp = body.slice(7)
					ban.splice(`${delp}@s.whatsapp.net`, 1)
					fs.writeFileSync('./lib/data/banned.json', JSON.stringify(ban))
					reply(`Berhasil Menghapus wa.me/${delp} dari banned`)
					break
case 'listban':
		case 'banlist'://By M4N1K
					teks = '*List Ban:*\n\n'
					for (let manikgans of ban) {
						teks += `- ${manikgans}\n`
					}
					teks += `\n*Total : ${ban.length}*`
					zee.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": ban } })
					break
                   
        //--------------------------------------------------------------------------------------------\\  	               	
    case "setmenu":
if (!mek.key.fromMe && !isOwner) return  reply(mess.only.owner)    
if (!q) return reply(`Masukan opts :\n
loc
pdf`)
if (q == "loc") {
modelmenu = "loc"
reply("Done change menu to "+q)
} else if (q == "fyt") {
modelmenu = "fyt"
reply("Done change menu to "+q)
} else if (q == "catalog") {
modelmenu = "catalog"
reply("Done change menu to "+q)
} else {
reply(`Masukan opts :\n
loc
pdf`)
}
break


case 'ssc': case 'ssc':
  var { allesce } = require('./lib/sewa')   
Febriansyah(allesce())
break

   
    case 'ghstalk': 
    case 'githubstalk': 
     if (isBanned) return reply(mess.ban)
          {
          if (args.length < 1) return reply(`Kirim perintah *${prefix}ghstalk* _username_`)
          reply(mess.wait)
          damta = await fetchJson(`https://api.github.com/users/${v}`)    
          let txt = `*GITHUB STALKING*

*📍Data Berhasil Didapatkan!*
•️ Username : ${damta.login}
• Name : ${damta.name}
• Followers : ${damta.followers}
• Following : ${damta.following}
• Public Gists : ${damta.public_gists}
• Public Repos : ${damta.public_repos}
• Twitter : ${damta.twitter_username}
• Email : ${damta.email}
• Location : ${damta.location}
• Blog : ${damta.blog}
• Link : ${damta.html_url}
• Bio : ${damta.bio}
• Created : ${damta.created_at}
• Last Updated : ${damta.updated_at}`
          pp = await getBuffer(damta.avatar_url)
          but = [{ buttonId: `!allmenu`, buttonText: { displayText: 'M E N U' }, type: 1 }]
          sendButLocation(from, txt, 'Github Stalk@^1.2.3', pp, but, {quoted: mek}).catch((err) => {                         
		  reply('Data tidak ditemukan')
          })    
          }       
          break            

       case 'fox':  
        if (isBanned) return reply(mess.ban)
                   anu = await fetchJson(`https://some-random-api.ml/img/fox`)
                   anu1 = await getBuffer(anu.link)
                   zee.sendMessage(from, anu1, image, {caption: `\`\`\`[ ✓ ]\`\`\` Sukses`, quoted: mek}).catch(e => {
          reply(mess.error.sc)          
          })          
                   break
       case 'dog':  
        if (isBanned) return reply(mess.ban)
                   anu = await fetchJson(`https://some-random-api.ml/img/dog`)
                   anu1 = await getBuffer(anu.link)
                   zee.sendMessage(from, anu1, image, {caption: `\`\`\`[ ✓ ]\`\`\` Sukses`, quoted: mek}).catch(e => {
          reply(mess.error.sc)          
          })          
          break
                   break
       case 'panda':  
        if (isBanned) return reply(mess.ban)
                   anu = await fetchJson(`https://some-random-api.ml/img/panda`)
                   anu1 = await getBuffer(anu.link)
                   zee.sendMessage(from, anu1, image, {caption: `\`\`\`[ ✓ ]\`\`\` Sukses`, quoted: mek}).catch(e => {
          reply(mess.error.sc)          
          })          
                   break
       case 'redpanda':  
        if (isBanned) return reply(mess.ban)
                   anu = await fetchJson(`https://some-random-api.ml/img/red_panda`)
                   anu1 = await getBuffer(anu.link)
                   zee.sendMessage(from, anu1, image, {caption: `\`\`\`[ ✓ ]\`\`\` Sukses`, quoted: mek}).catch(e => {
          reply(mess.error.sc)          
          })          
                   break
       case 'bird':  
        if (isBanned) return reply(mess.ban)
                   anu = await fetchJson(`https://some-random-api.ml/img/bird`)
                   anu1 = await getBuffer(anu.link)
                   zee.sendMessage(from, anu1, image, {caption: `\`\`\`[ ✓ ]\`\`\` Sukses`, quoted: mek}).catch(e => {
          reply(mess.error.sc)          
          })          
                   break
      case 'koala':  
       if (isBanned) return reply(mess.ban)
                   anu = await fetchJson(`https://some-random-api.ml/img/koala`)
                   anu1 = await getBuffer(anu.link)
                   zee.sendMessage(from, anu1, image, {caption: `\`\`\`[ ✓ ]\`\`\` Sukses`, quoted: mek}).catch(e => {
          reply(mess.error.sc)          
          })          
                   break
       case 'meme':  
 if (isBanned) return reply(mess.ban)
                   anu = await fetchJson(`https://some-random-api.ml/meme`)
                   anu1 = await getBuffer(anu.image)
                   zee.sendMessage(from, anu1, image, {caption: `\`\`\`[ ✓ ]\`\`\` Sukses`, quoted: mek}).catch(e => {
          reply(mess.error.sc)          
          })          
                   break



    case 'autoread':
          if (args.length < 1) return reply(`Example:\n${prefix}autoread gc/pc on`)
          if (args[0] === "gc") {
          if (args.length < 2) return reply(`Example:\n${prefix}autoread gc on`)
          if (args[1] === "on") {
          if (readGc === true) return
          readGc = true
          reply(`Succes mengaktifkan autoread group`)
          } else if (args[1] === "off") {
          if (readGc === false) return
          readGc = false
          reply(`Succes mematikan autoread group`)
          } else {
          reply(`Pilih on atau off`)
          }
          } else if (args[0] === "pc") {
          if (args.length < 2) return reply(`Example:\n${prefix}autoread pc on`)
          if (args[1] === "on") {
          if (readPc === true) return
          readPc = true
          reply(`Succes mengaktifkan autoread pc`)
          } else if (args[1] === "off") {
          if (readPc === false) return
          readPc = false
          reply(`Succes mematikan autoread pc`)
          } else {
          reply(`Pilih on atau off`)
          }
          } else {
          reply(`*List Auto Read*\n•> gc\n•> pc`)
          }
          break


    case 'autoketik':
          if (!isOwner && !mek.key.fromMe) return
          if (args.length < 1) return reply('Pilih on atau off')
          if (args[0] === "on") {
          if (autoketik === true) return
          autoketik = true
          reply(`Succes mengaktifkan autoketik`)
          } else if (args[0] === "off") {
          if (autoketik === false) return
          autoketik = false
          reply(`Succes mematikan autoketik`)
          } else {
          reply(`Pilih on atau off`)
          }
          break
    case 'autovn':
          if (!isOwner && !mek.key.fromMe) return
          if (args.length < 1) return reply('Pilih on atau off')
          if (args[0] === "on") {
          if (autovn === true) return
          autovn = true
          reply(`Succes mengaktifkan autovn`)
          } else if (args[0] === "off") {
          if (autovn === false) return
          autovn = false
          reply(`Succes mematikan autovn`)
          } else {
          reply(`Pilih on atau off`)
          }           
          break

    case 'bugreportadmin':
          if (args.length < 1) return reply(`Ketik ${prefix}bugreport [fiturnya] [Error Nya Gimana]`) 
          reply('Terima Kasih Telah Melaporkan Bug Pada Owner, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!')
          zee.sendMessage(`${ownerNumber}@s.whatsapp.net`,`*Bug Report:* ${v}`, text)
          break 
    case 'bugreportdev':
          if (args.length < 1) return reply(`Ketik ${prefix}bugreport [fiturnya] [Error Nya Gimana]`)       
          reply('Terima Kasih Telah Melaporkan Bug Pada Devoloper, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!')
          zee.sendMessage('6285849261085@s.whatsapp.net',`*Bug Report:* ${v}\ndari http://wa.me/${sender.split('@')[0]}`, text)
          break
            
case 'profile': case 'rpgmenu':
 if (isBanned) return reply(mess.ban)
if (!isGroup) return reply(mess.only.group)
if (!isPetualang) return reply(mess.only.player)
 reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
pp = monospace(`📍 𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗣𝗹𝗮𝘆𝗲𝗿
 • Nama : ${pushname}
 • Rank : ${role}
 • Status : ${elit}
 • Uang : $${(getBalance(sender, balance))}
 • Xp : ${getLevelingXp(sender)}/${reqXp}
 • Level : ${getLevelingLevel(sender)}
 
🎒 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝗶 :
 • Uang : $${(getBalance(sender, balance))}
 • Emas : ${getEmas(sender)}
 • Besi : ${getBesi(sender)}
 • Ikan : ${getFish(sender)}
 • Berlian : ${getDm(sender)}

🏔️ 𝗠𝗲𝗻𝘂 𝗥𝗣𝗚
 • joinrpg
 • quest 
 • mining
 • mancing
 • luckyday
 • adventure
 • myinventori
 • topleaderboard
 
⚔️ 𝗙𝗮𝗿𝗺𝗶𝗻𝗴 𝗥𝗣𝗚
 • killslime
 • killgoblin
 • killdevil
 • killbehemoth
 • killdemond
 • killdemondking 
 
🛒 𝗦𝗲𝗹𝗹 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝘆
 • sellikan
 • sellbesi
 • sellemas
 • selldiamond`)
 but = [
          { buttonId: `!inventori`, buttonText: { displayText: 'Inventori' }, type: 1 }]
          sendButLocation(from, pp, 'Rpg Game@^1.2.3', mrpg, but, {quoted: mek})
          break
    case 'joinrpg':   
          if (isBanned) return reply(mess.ban)
          if (!isGroup) return reply(mess.only.group)  
		  if (isPetualang) return reply('Kamu sudah menjadi petualang')
		  if (args.length < 1) return reply(`Kirim perintah ${prefix + command} nama`) 
	   	  _petualang.push(sender)
		  fs.writeFileSync('./lib/data/inventori.json', JSON.stringify(_petualang))        
	      addInventori(sender)
	      addLevelingId(sender) 
          const name = args[0]
          try {
		  ppimg = await zee.getProfilePicture(`${sender.split('@')[0]}@c.us`)
		  } catch {
	      ppimg = 'https://telegra.ph/file/ea03e6d664f8406465f00.jpg'	
		  }
		  const serialUser = createSerial(14)
          const anuu = monospace(`「 SUKSES JOIN RPG 」\n「 PROFILE 」\n • Nama : ${name}\n • Level : ${getLevelingLevel(sender)}\n • Status : ${elit}\n • Xp :  ${getLevelingXp(sender)}/${reqXp}\n\n「 RPG GAME 」`)
          haitod = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${name}&member=${pendaftar.length} User&seri=${serialUser}&pp=${ppimg}&bg=https://telegra.ph/file/d34e017b7d744bdcbfac3.jpg`)
          but = [
          { buttonId: `!rpgmenu`, buttonText: { displayText: 'RPG MENU' }, type: 1 }]
          sendButLocation(from, anuu, 'Rpg Game@^1.2.3', haitod, but, {quoted: mek})  
          break
    case 'mybag':
    case 'cekinven':
    case 'inventori':
    case 'myinventori':
          if (isBanned) return reply(mess.ban)
          if (!isGroup) return reply(mess.only.group)
          if (!isPetualang) return reply(mess.only.player)
          var reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
          done = monospace(`📍 𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗣𝗹𝗮𝘆𝗲𝗿\n • Nama : ${pushname}\n • Rank : ${role}\n • Status : ${elit}\n • Xp : ${getLevelingXp(sender)}/${reqXp}\n • Level : ${getLevelingLevel(sender)}\n🎒 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝗶 :\n • Emas : ${getEmas(sender)}🪙\n • Uang : $${(getBalance(sender, balance))}💰\n • Besi : ${getBesi(sender)}⛓️\n • Berlian : ${getDm(sender)}💎\n • Ikan : ${getFish(sender)}🎣`)
          but = [{ buttonId: `!adventure`, buttonText: { displayText: 'Adventure' }, type: 1 }]
          sendButton(from, done, 'Inventori User', but)
          break

case 'kues': case 'quest': case 'misi':
          if (isBanned) return reply(mess.ban)
          if (!isGroup) return reply(mess.only.group)
          if (!isPetualang) return reply(mess.only.player)
          var lordpebri = zee.prepareMessageFromContent(from, {
                        "listMessage": {
						"title": "Hallo kak, Aku NelBot!!\nAku adalah admin quest di group ini! \nSilahkan pilih quest yang cocok dengan kakak!\nGabung ke petualang pro untuk membuka quest mode demon",
						"description": "\n*Jadi petualangan pro untuk dapatkan hadiah sepesial>_<*",
						"buttonText": "Silahkan Pilih Misinya Kak!",
						"footerText": "@Quest game",
						"listType": "SINGLE_SELECT",
						"sections": [
							{
								"title": "Misi Ke-1",
								"rows": [
									{
										"title": "Membunuh Slime",
										"description": "Berburu slime untuk mendapatkan hadiah",
										"rowId": "!slime"
									}
								]
							},
							{
								"title": "Misi Ke-2", 
								"rows": [
									{
										"title": "Membunuh Goblin",
										"description": "Membunuh goblin untuk mendapatkan hadiah",
										"rowId": "!goblin"
									}
								]
							},
							{
								"title": "Misi Ke-3", 
								"rows": [
									{
										"title": "Membunuh Monster Evil Eye",
										"description": "Membunuh monster untuk mendapatkan hadiah",
										"rowId": "!devil"
									}
								]
							},
							{
								"title": "Misi Ke-4",
								"rows": [
									{
										"title": "Membunuh Monster Behemoth",
										"description": "Membunuh monster untuk mendapatkan hadiah",
										"rowId": "!behemoth"
									}
								]
							},
                            {
								"title": "Misi Ke-5",
								"rows": [
									{
										"title": "Membunuh Demon Four Fiends | VIP",
										"description": "Membunuh demon untuk mendapatkan hadiah",
										"rowId": "!demon"
									}
								]
							},
                            {
								"title": "Misi Ke-6",
								"rows": [
									{
										"title": "Membunuh Demon King | VIP",
										"description": "Membunuh demon king untuk mendapatkan hadiah spesial",
										"rowId": "!demonking"
                                  }
								]
							}
						]
					}
				},
			{}
	      )
	      zee.relayWAMessage(lordpebri, {waitForAck: true})     
          break
    case 'slime': case 'killslime':
          if (isBanned) return reply(mess.ban)
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)    
	      if (!isGroup) return reply(mess.only.group)          
		  if (!isPetualang) return reply('⛄ *Kamu sudah menjadi petualang* 🥳')          
          ez = Math.ceil(Math.random() * 400)
          addLevelingXp(sender, ez)
          a = randomNomor(55)
          b = randomNomor(400)
          c = randomNomor(80)
          d = randomNomor(3)
          addLevelingXp(sender, ez)
          addBalance(sender, b, balance)
          addEmas(sender, a)          
          addBesi(sender, c)
          addDm(sender, d)
          pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗦𝗹𝗶𝗺𝗲️\n\n🎁 Hadiah Membunuh Slime\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
          but = [{ buttonId: `!inventori`, buttonText: { displayText: '⛄ *cek inventory* 😆' }, type: 1 }]
          sendButLocation(from, pp, 'Rpg Game@^1.2.3', slime, but, {quoted: mek})                  
          gameAdd(sender, glimit) 
          break      
    case 'goblin': case 'killgoblin':
          if (isBanned) return reply(mess.ban)
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)    
	      if (!isGroup) return reply(mess.only.group)          
		  if (!isPetualang) return reply('⛄ *Kamu sudah menjadi petualang* 🥳')          
          ez = Math.ceil(Math.random() * 500)
          addLevelingXp(sender, ez)
          a = randomNomor(65)
          b = randomNomor(500)
          c = randomNomor(90)
          d = randomNomor(5)
          addLevelingXp(sender, ez)
          addBalance(sender, b, balance)
          addEmas(sender, a)          
          addBesi(sender, c)
          addDm(sender, d)
          pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗚𝗼𝗯𝗹𝗶𝗻\n\n🎁 Hadiah Membunuh Goblin\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
          but = [{ buttonId: `!inventori`, buttonText: { displayText: '⛄ *cek inventory* 😆' }, type: 1 }]
          sendButLocation(from, pp, 'Rpg Game@^1.2.3', goblin, but, {quoted: mek})                  
          gameAdd(sender, glimit) 
          break                      
    case 'devil': case 'killdevil':
          if (isBanned) return reply(mess.ban)
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)    
	      if (!isGroup) return reply(mess.only.group)          
		  if (!isPetualang) return reply('⛄ *Kamu sudah menjadi petualang* 🥳')          
          ez = Math.ceil(Math.random() * 600)
          addLevelingXp(sender, ez)
          a = randomNomor(70)
          b = randomNomor(600)
          c = randomNomor(95)
          d = randomNomor(6)
          addLevelingXp(sender, ez)
          addBalance(sender, b, balance)
          addEmas(sender, a)          
          addBesi(sender, c)
          addDm(sender, d)
          pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗗𝗲𝘃𝗶𝗹️\n\n🎁 Hadiah Membunuh Devil\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
          but = [{ buttonId: `!inventori`, buttonText: { displayText: '⛄ "cek inventory* 😆' }, type: 1 }]
          sendButLocation(from, pp, 'Rpg Game@^1.2.3', devil, but, {quoted: mek})                  
          gameAdd(sender, glimit) 
          break
    case 'behemoth': case 'killbehemoth':
          if (isBanned) return reply(mess.ban)
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)    
	      if (!isGroup) return reply(mess.only.group)          
		  if (!isPetualang) return reply('⛄ *Kamu sudah menjadi petualang* 🥳')          
          ez = Math.ceil(Math.random() * 700)
          addLevelingXp(sender, ez)
          a = randomNomor(75)
          b = randomNomor(600)
          c = randomNomor(100)
          d = randomNomor(7)
          addLevelingXp(sender, ez)
          addBalance(sender, b, balance)
          addEmas(sender, a)          
          addBesi(sender, c)
          addDm(sender, d)
          pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗕𝗲𝗵𝗲𝗺𝗼𝘁𝗵️\n\n🎁 Hadiah Membunuh Behemoth\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
          but = [{ buttonId: `!inventori`, buttonText: { displayText: '⛄ *cek inventory* 😆' }, type: 1 }]
          sendButLocation(from, pp, 'Rpg Game@^1.2.3',behemoth, but, {quoted: mek})                  
          gameAdd(sender, glimit) 
          break   
    case 'demon': case 'killdemond': 
          if (isBanned) return reply(mess.ban)
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)    
	      if (!isGroup) return reply(mess.only.group)          
		  if (!isPetualang) return reply('⛄ *Kamu sudah menjadi petualang* 🥳')          
		  if (!isPremium) return reply('⛄ *Upss sepertinya kakak bukan petualang pro!* 😥\nchat ownet untuk menjadi petualang pro')
          ez = Math.ceil(Math.random() * 850)
          addLevelingXp(sender, ez)
          a = randomNomor(90)
          b = randomNomor(900)
          c = randomNomor(120)
          d = randomNomor(10)
          addLevelingXp(sender, ez)
          addBalance(sender, b, balance)
          addEmas(sender, a)          
          addBesi(sender, c)
          addDm(sender, d)
          pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗗𝗲𝗺𝗼𝗻️\n\n🎁 Hadiah Membunuh Demond\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
          but = [{ buttonId: `!inventori`, buttonText: { displayText: '⛄ *cek inventory* 😆' }, type: 1 }]
          sendButLocation(from, pp, 'Rpg Game@^1.2.3', demon, but, {quoted: mek})                  
          gameAdd(sender, glimit) 
          break  
    case 'demonking': case 'killdemondking':
          if (isBanned) return reply(mess.ban)
	      if (!isGroup) return reply(mess.only.group)    
          if (!isOwner) return reply ('Hanya Untuk GM')    
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)    
		  if (!isPetualang) return reply('⛄ *Kamu sudah menjadi petualang* 🥳')          
          ez = Math.ceil(Math.random() * 1000)
          addLevelingXp(sender, ez)
          addLevelingXp(sender, ez)
          addBalance(sender, 1999, balance)
          addEmas(sender, 99)          
          addBesi(sender, 99)
          addDm(sender, 99)
          pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗗𝗲𝗺𝗼𝗻𝗞𝗶𝗻𝗴\n\n🎁 Hadiah Membunuh DemonKing\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
          but = [{ buttonId: `!inventori`, buttonText: { displayText: '⛄ *cek inventory* 😆' }, type: 1 }]
          sendButLocation(from, pp, 'Rpg Game@^1.2.3', demonking, but, {quoted: mek})                  
          gameAdd(sender, glimit) 
          break                    
    case 'leaderboard':
	case 'lb':
	      if (isBanned) return reply(mess.ban)
	      if (!isGroup) return reply(mess.only.group)
	      _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
          let leaderboardlvl = ' > 𝗧𝗢𝗣 𝗟𝗘𝗔𝗗𝗘𝗥𝗕𝗢𝗔𝗥𝗗 <\n\n'
          let nom = 0
          try {
          for (let i = 0; i < 10; i++) {
          nom++
          leaderboardlvl += `*[${nom}]* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n • *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n`
          }
          await reply(leaderboardlvl)
          } catch (err) {
          console.error(err)
          await reply(`minimal 10 user untuk bisa mengakses database`)
          }
          break
    case 'sellikan':
          if (isBanned) return reply(mess.ban)
          if (!isGroup) return reply(mess.only.group)
          if (!isPetualang) return reply(mess.only.player)
          if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)      
          jmlh = body.slice(10)
          rp = 5 * jmlh
          if (getFish(sender) < jmlh) return reply(`Ikan Kamu Tidak Cukup`)
          sellFish(sender, jmlh, balance)
          addBalance(sender, rp, balance) 
          capti = monospace(`🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Ikan : 5\n • Status : Sukses\n • Sisa Ikan : ${getFish(sender)}\n • Hasil Penjualan : $${rp}`)
          but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
          sendButton(from, capti, 'sellikan', but)          
          break
    case 'sellbesi':
          if (isBanned) return reply(mess.ban)
          if (!isGroup) return reply(mess.only.group)
          if (!isPetualang) return reply(mess.only.player)
          if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)      
          jmlh = body.slice(10)
          rp = 10 * jmlh
          if (getBesi(sender) < jmlh) return reply(`Besi Kamu Tidak Cukup`)
          sellBesi(sender, jmlh, balance)
          addBalance(sender, rp, balance) 
          capti = monospace(`🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Besi : 10\n • Status : Sukses\n • Sisa Besi : ${getBesi(sender)}\n • Hasil Penjualan : $${rp}`)
          but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
          sendButton(from, capti, 'sellikan', but)                    
          break          
    case 'sellemas':
          if (isBanned) return reply(mess.ban)
          if (!isGroup) return reply(mess.only.group)
          if (!isPetualang) return reply(mess.only.player)
          if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)      
          jmlh = body.slice(10)
          rp = 25 * jmlh
          if (getEmas(sender) < jmlh) return reply(`Emas Kamu Tidak Cukup`)
          sellEmas(sender, jmlh, balance)
          addBalance(sender, rp, balance) 
          capti = monospace(`🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Emas : 25\n • Status : Sukses\n • Sisa Emas : ${getEmas(sender)}\n • Hasil Penjualan : $${rp}`)
          but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
          sendButton(from, capti, 'sellikan', but)                    
          break 
    case 'selldiamond':
          if (isBanned) return reply(mess.ban)
          if (!isGroup) return reply(mess.only.group)
          if (!isPetualang) return reply(mess.only.player)
          if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)      
          ttl = body.slice(13)
          var etoo = 75 * ttl
          if (getDm(sender) < ttl) return reply(`Besi Kamu Tidak Cukup`)
          sellDm(sender, ttl)
          addBalance(sender, etoo, balance) 
          capti = monospace(`🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Dm : 75\n • Status : Sukses\n • Sisa Diamond : ${getDm(sender)}\n • Hasil Penjualan : $${etoo}`)
          but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
          sendButton(from, capti, 'sellikan', but)                    
          break                                      
    case 'mancing':
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
          if (!isGroup) return reply(mess.only.group)
          if (!isPetualang) return reply(mess.only.player)	
          ikannya = ikan[Math.floor(Math.random() * ikan.length)]
	      xp = Math.ceil(Math.random() * 350)          
	      coin = randomNomor(50)	    
	      ditangkap = Math.ceil(Math.random() * 50)
	      cing = await getBuffer(`https://telegra.ph/file/d9b15de4f661808dfd0b9.jpg`)
	      setTimeout( () => {
	      caption = monospace(`「 Memancing 」\n\n • Tangkapan : ${ikannya}\n • Total Dapat : ${ditangkap} Ikan\n • MONEY : $${coin}\n • EXP : ${xp}Xp`)
          but = [
          { buttonId: '!mancing', buttonText: { displayText: 'Mancing lagi' }, type: 1 },
          { buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }
           ]
          sendButLocation(from, caption, 'Memancing', cing, but, {quoted: mek})      
          }, 6000)
          setTimeout( () => {
		  zee.sendMessage(from, 'Berhasil Mendapatkan Ikan. . .', text) 
		  }, 5000) // 1000 = 1s,
	      setTimeout( () => {
		  zee.sendMessage(from, '🎣Meanarik kail. . .', text) 
		  }, 3000) // 1000 = 1s,
		  setTimeout( () => {
		  zee.sendMessage(from, '🎣Mulai memancing. . .', text) 
		  }, 1500) // 1000 = 1s,
		  addFish(sender, ditangkap)
		  addLevelingXp(sender, xp)
		  addBalance(sender, coin, balance) 
          limitAdd(sender, limit)         
	      break
    case 'adventure':
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
          if (!isGroup) return reply(mess.only.group)
          if (!isPetualang) return reply(mess.only.player)
          ngab = ['Longsor','Letusan Gunung','Tsunami','Gempa Bumi','Meteor','Demon']
	      const sesuatu = ngab[Math.floor(Math.random() * ngab.length)]
          const dungeon =['Whetstone','Willow Field','Rodeo','Verdant Blufs','Bull Holland','Fallen Tree','Dellnort','Verona Lush','Leafy Hollow','Chilliad Dome','Garcia','Pine Valley','Santa Florals','Guvero East','Cranbarry','Junever','Aldea Malvada','Green Palms','Green Oasis','Fort Carson','Prickel Pine','Pilson Meadow','Boca Roca','Rocksore East','Camel Toe','Hanky Panky','Fern Ridge','Montgomerry','Flint Yankton','Vespucci','fortress city', 'ravines valley', 'horizon valley', 'cyber city', 'end city', 'templar city', 'pochinki', 'peak','Vertical Zone','Sentainel Country','Night City','Flush City','Royals Canyon','Blackburn','Peterborough','Tarnstead','Jarren’s','Outpost','Landow','Nearon','Kincardine','Aysgarth','Veritas','Openshaw','Bredwardine','Berkton','Wolford','Norwich','Kald','Solaris','Kilead','Pitmerden','Acomb','Eldham','Warcester','Lingmell','Kilead','Cromerth','Wingston','Garmsby','Kingcardine','Perthlochry','Frostford','Hillford','Hardersfield','Tarrin','Holmfirth','Caerleon','Elisyum','Ballaeter','Penshaw','Bradford','Wigston','Accreton','Kameeraska','Ferncombe','Kilerth','Erostey','Carran','Jongvale','Larnwick','Queenstown','Whaelrdrake','Baerney','Wingston','Arkney','Strongfair','Lowestoft','Beggar’s Hole','Shepshed','Perthlochry','Ironforge','Tywardreath','Pontheugh','Foolshope','Hull','Dalmerlington','Aucteraden','Woodpine','Millstone','Windermere','Lancaster','Kirkwall','Rotherhithe','Astrakhan','Watford','Ritherhithe','Krosstoen','Pella’s','Wish','Grimsby','Ayrith','Ampleforth','Skystead','Eanverness','Penshaw','Peatsland','Astrakane','Pontybridge','Caershire','Snowbush','Sutton','Northwich','Hogsfeet','Claethorpes','Sudbury','Cherrytown','Blue Field','Orrinshire','Aempleforth','Garrigill','Jedburgh','Eastbourne','Taedmorden','Venzor','Grasmere','Ubbin','Falls','Violl’s Garden','Glanchester','Bailymena','Arkkukari','Skargness','Cardend','Llanybydder','Faversham','Yellowseed','Carlisle','Cirencester','Aramoor','Furness','Kincardine','Rotherham','Emelle','Boroughton','Carran','Ffestiniog','Mansfield','Huthwaite','Marclesfield','Pavv','Squall’s End','Glenarm','Dragontail','Moressley','Hardersfield','Gilramore','Aria','Ecrin','Clare View Point','Blackburn','Oakheart','Doonatel','Broughton','Carlisle','Murlayfield','Nuxvar']
          anu = fs.readFileSync('./lib/rpg/dungeon.js');
          const ad = dungeon[Math.floor(Math.random() * dungeon.length)]
          jsonData = JSON.parse(anu);
	      randIndex = Math.floor(Math.random() * jsonData.length);
          randKey = jsonData[randIndex];
	      hasm = await getBuffer(randKey.result)  
	      const adven = Math.ceil(Math.random() * 1000)          
	      const money = Math.ceil(Math.random() * 300)					      	      
	      setTimeout( () => {		
          caption = monospace(`「 DEATH 」\n\n • Tempat  ${ad}\n • MONEY : $${money}\n • EXP : ${adven}Xp`)
          but = [
          { buttonId: `!myinventori`, buttonText: { displayText: 'Inventori' }, type: 1 }]
          sendButLocation(from, caption, 'Memancing', hasm, but, {quoted: mek})   
          }, 7000)
          setTimeout( () => {
		  zee.sendMessage(from, `Awass`, text) 
		  }, 5000) // 1000 = 1s,
	      setTimeout( () => {
		  zee.sendMessage(from, `Tiba tiba ada ${sesuatu}`, text) 
		  }, 3000) // 1000 = 1s,
		  setTimeout( () => {
		  zee.sendMessage(from, `${pushname} sedang bertualang`, text) 
		  }, 1500) // 1000 = 1s,
		  addLevelingXp(sender, adven)
		  addBalance(sender, money, balance) 
          limitAdd(sender, limit)         
          break
   	case 'mining':   
   	      if (isBanned) return reply(mess.ban)
   	      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
   	      if (!isGroup) return reply(mess.only.group)                         
          if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan oleh owner`)                              
          if (!isPetualang) return reply(mess.only.player)
          pp = randomNomor(75)
          emas = randomNomor(15)
          dm = randomNomor(3)
          besi = randomNomor(50)
          done = monospace(`Selesai Mining🚧\nlist hasil :\nEmas : ${emas}🪙\nUang : $${pp}💰\nBesi : ${besi}⛓️\nBerlian : ${dm}💎`)
          addBalance(sender, pp, balance)          
          addBesi(sender, besi)
          addEmas(sender, emas)
          addDm(sender, dm)
          mining = ('Waitt sedang menguli . . .')
		  setTimeout( () => {		//case by pebri
		  but = [{ buttonId: `!mining`, buttonText: { displayText: 'Mining again' }, type: 1 }]
          sendButton(from, done, 'Mining', but)
		  }, 9000) // 1000 = 1s,
		  setTimeout( () => {
		  zee.sendMessage(from, '🚧 selesai menguli. . .🪙👷', text) 
		  }, 7000) // 1000 = 1s,
	      setTimeout( () => {
		  zee.sendMessage(from, '🚧 menemukan emas. . .⚒️🏔️️️', text) 
		  }, 4000) // 1000 = 1s,
		  setTimeout( () => {
		  zee.sendMessage(from, '🚧 mulai menambang. . .⚒️🏔️️', text) 
		  }, 1500) // 1000 = 1s,
		  setTimeout( () => {
		  zee.sendMessage(from, mining, text, {quoted: mek}) 
		  }, 0) // 1000 = 1s,
	      break	  
    case 'luckyday':  case 'luckytime':
          if (isBanned) return reply(mess.ban)
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)    
		  if (!isPetualang) return reply('Kamu belum menjadi petualang')
          if (isPremium) {
          ez = Math.ceil(Math.random() * 450)
          a = randomNomor(99)
          b = randomNomor(500)
          c = randomNomor(150)
          addBalance(sender, b, balance)
          addLevelingXp(sender, ez)
          addEmas(sender, a)
          addBesi(sender, c)
          za = monospace(`🎰 LuckyTime\n• Uang : $${b}\n• Emas : ${a}\n• Besi : ${c}\n• Xp : ${ez}`)
          but = [{ buttonId: '!luckytime', buttonText: { displayText: 'LuckyTime Again' }, type: 1 }]
          sendButton(from, za, '@LuckyTime', but, mek)   
          }else{
          ez = Math.ceil(Math.random() * 300)
          addLevelingXp(sender, ez)
          a = randomNomor(49)
          b = randomNomor(300)
          c = randomNomor(70)
          addLevelingXp(sender, ez)
          addBalance(sender, b, balance)
          addEmas(sender, a)          
          addBesi(sender, c)
          za = monospace(`🎰 LuckyTime\n• Uang : $${b}\n• Emas : ${a}\n• Besi : ${c}\n• Xp : ${ez}`)
          but = [{ buttonId: '!luckytime', buttonText: { displayText: 'LuckyTime Again' }, type: 1 }]
          sendButton(from, za, '@LuckyTime', but, mek)          
          }  
          gameAdd(sender, glimit) 
          break	              
          
//==============		
    case 'restart':
          if (!isOwner) return 
          reply(mess.wait)
          exec(`node main`)
          reply('_Restarting Bot Success_')
          break             								
	case 'bc2': 
		  if (!isOwner) return reply(mess.only.owner) 
		  if (args.length < 1) return reply('.......')
	      anu = await zee.chats.all()
		  if (isMedia && !mek.message.videoMessage || isQuotedImage) {
		  const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		  buff = await zee.downloadMediaMessage(encmedia)
		  for (let _ of anu) {
		  zee.sendMessage(_.jid, buff, image, {caption: `❮ PESAN ❯\n\n${body.slice(4)}`}).catch(e => {
		  })
		  }
		  reply('*_succes broadcast_* ')
		  } else {
		  for (let _ of anu) {
		  sendMess(_.jid, `*「 BROADCAST BOT 」*\n\n${body.slice(4)}`).catch(e => {
		  })
		  }
		  reply('*_succes broadcast_* ')
		  }
          break				                       
    case 'buylimit':{
          if (args.length < 1) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $150 balance`)      
          payout = body.slice(10)
          ane = 150 * payout
          if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
          kurangBalance(sender, ane, balance)
          giveLimit(sender, parseInt(args[0]), limit)
          reply(monospace(`Pembeliaan limit sebanyak ${args[0]} berhasil\n\nSisa Balance :  $${(getBalance(sender, balance))}\nSisa Limit : ${getLimit(sender, limitCount, limit)}/${limitCount}`))
          }
          break
    case 'buygamelimit':
    case 'buyglimit':{
          if (args.length < 1) return reply(`Kirim perintah *${prefix}buyglimit* jumlah game limit yang ingin dibeli\n\nHarga 1 game limit = $250 balance`)            
          payout = v
          ane = 250 * payout
          if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
          kurangBalance(sender, ane, balance)
          givegame(sender, payout, glimit)
          reply(monospace(`Pembeliaan game limit sebanyak ${args[1]} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Game Limit : ${cekGLimit(sender, gcount, glimit)}/${gcount}`))
          }
          break                    
//------------------< Downloader/Search/Anime 
    case 'addprem':  case 'addpremium':
    case 'addpetualangpro':
          if (isBanned) return reply(mess.ban)
          if (args.length < 1) return reply('ditag')
		  if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)    
		  adprem = `${args[0].replace('@','')}@s.whatsapp.net`
		  prem.push(adprem)
		  fs.writeFileSync('./lib/data/premium.json', JSON.stringify(prem))
	 	  reply(`BERHASIL MENAMBAHKAN USER PREMIUM`)
		  break				
	case 'delprem':  case 'delpremium':
	case 'delpetualangpro':
	      if (args.length < 1) return reply('tag')
		  if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)    
		  delp = v
		  prem.splice(`${delp}@s.whatsapp.net`, 1)
		  fs.writeFileSync('./lib/data/premium.json', JSON.stringify(prem))
		  reply(`Berhasil Menghapus wa.me/${delp} Dari Daftar Premium`)
		  break
	case 'listprem': case 'listpremium':
    case 'premlist':
          if (!isPremium && !isOwner) return reply(mess.only.prem)
		  teks = '*List Premium:*\n\n'
		  for (let manikgans of prem) {
		  teks += `- ${manikgans}\n`
		  }
	      teks += `\n*Total : ${prem.length}*`
		  zee.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": prem } })
		  break
    case "jadian":
          if (isBanned) return reply(mess.ban)
          if (!isGroup) return reply(mess.only.group)          
		  jds = []
	  	  const jdii = groupMembers
		  const koss = groupMembers
		  const akuu = jdii[Math.floor(Math.random() * jdii.length)]
		  const diaa = koss[Math.floor(Math.random() * koss.length)]
	      teks = `⛄ *Ciee..🤭yang lagi jadian* @${akuu.jid.split('@')[0]} ♥️ @${diaa.jid.split('@')[0]} 🥳 `
		  jds.push(akuu.jid)
		  jds.push(diaa.jid)
	      mentions(teks, jds, true)
		  break	
    case "ngewe":
          if (isBanned) return reply(mess.ban)
          if (!isGroup) return reply(mess.only.group)          
		  jds = []
		  const jdiid = groupMembers
	      const kosst = groupMembers
	      const akuut = jdiid[Math.floor(Math.random() * jdiid.length)]
		  const diaat = kosst[Math.floor(Math.random() * kosst.length)]
		  teks = `⛄ *Yang ngewe kemarin di grub ini adalah* 😱 @${akuut.jid.split('@')[0]} dan️ @${diaat.jid.split('@')[0]} `
		  jds.push(akuut.jid)
		  jds.push(diaat.jid)		  		  
		  mentions(teks, jds, true)
	   	  break
case "selingkuh":
          if (isBanned) return reply(mess.ban)
          if (!isGroup) return reply(mess.only.group)          
		  jds = []
		  const jdiidp = groupMembers
	      const kosstt = groupMembers
	      const akuutt = jdiidp[Math.floor(Math.random() * jdiidp.length)]
		  const diaatt = kosstt[Math.floor(Math.random() * kosstt.length)]
		  teks = `⛄ *Yang selingkuh kemarin di grub ini adalah* 🥲 @${akuutt.jid.split('@')[0]} dengan @${diaatt.jid.split('@')[0]}`
		  jds.push(akuutt.jid)
		  jds.push(diaatt.jid)		  		  
		  mentions(teks, jds, true)
	   	  break
    case 'truth':
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          const truth = _truth[Math.floor(Math.random() * _truth.length)]
          but = [
          { buttonId: `!dare`, buttonText: { displayText: 'dare' }, type: 1 }, { buttonId: `!truth`, buttonText: { displayText: 'truth' }, type: 1 }]
          sendButImage(from, truth, `Gak Jalanin Donasi`, tde, but)  
          limitAdd(sender, limit)
          break
    case 'dare':
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          const dare = _dare[Math.floor(Math.random() * _dare.length)]
          but = [
          { buttonId: `!dare`, buttonText: { displayText: 'dare' }, type: 1 }, { buttonId: `!truth`, buttonText: { displayText: 'truth' }, type: 1 }]
          sendButImage(from, dare, `Gak Jalanin Donasi`, tde, but)  
          limitAdd(sender, limit)
          break	
    case 'addtruth':
          if (isBanned) return reply(mess.ban)
          if (!isOwner) return reply(mess.only.owner)
          if (args.length < 1) return reply('Textnya mana?')
          _truth.push(v)
          fs.writeFileSync('./lib/data/truth.json', JSON.stringify(_truth))
          reply(`Done add ${v} di fitur truth`)
          break
    case 'adddare':
          if (isBanned) return reply(mess.ban)
          if (!isOwner) return reply(mess.only.owner)
          if (args.length < 1) return reply('⛄ *Textnya mana?* 🤔')
          _dare.push(v)
          fs.writeFileSync('./lib/data/dare.json', JSON.stringify(_dare))
          reply(`Done add ${v} di fitur dare`)
          break            
    case "bodoh":
    case "lolii":
    case "kenamental":
    case "lagi_nyari_jodoh":
    case "kenabuly":
    case "jomblo":
    case "terkaya":
    case "lagingentod":
    case "babu":
    case "jadibadut":
    case "tolol":
    case "artis":
    case "pakboy":
    case "terpintar":
    case "lonte":
    case "beban":
    case "nyimak":
    case "lagisad": 	  	
    case "lagicoli":
    case "terganteng":
    case "terjelek":
    case "tercantik":
    case "gay":
    case "terpedo":
    case "terwibu":
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)      
          if (!isGroup) return reply(mess.only.group)          
		  jds = []
		  const jdiidc = groupMembers
		  const kosstc = groupMembers
		  const akuutc = jdiidc[Math.floor(Math.random() * jdiidc.length)]
		  teks = `⛄ *Yang* ${command} *di grub ini adalah* 😱 @${akuutc.jid.split('@')[0]}`
		  jds.push(akuutc.jid)
		  limitAdd(sender, limit)
		  mentions(teks, jds, true)
	      break		
    case 'darkjokes':
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)      
          if (!isGroup) return reply(mess.only.group)          
          let data = fs.readFileSync('./lib/darkjokes.js');
	      jsonData = JSON.parse(data);
	      randIndex = Math.floor(Math.random() * jsonData.length);
          randKey = jsonData[randIndex];
	      hasl = await getBuffer(randKey.result)  
          but = [
          { buttonId: `!darkjokes`, buttonText: { displayText: 'NEXT' }, type: 1 }]
          sendButImage(from, `AhhhGelapKekMasaDepanlu`, `Klik Next Ngab`, hasl, but)   
          limitAdd(sender, limit)       
          break



    case 'tts': case 'gtts':      
          if (isBanned) return reply(mess.ban) 
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)      
          bogay = body.replace(prefix, '')
          const gtts = require('./lib/gtts.js')(args[0])
          if (args.length < 2) return zee.sendMessage(from, 'Textnya mana om', text, {quoted: mek})
          dtt = bogay.slice(8)
          ranm = getRandom('.mp3')
          dtt.length > 600 ? reply('Textnya kebanyakan om') : gtts.save(ranm, dtt, function() {
          sendFileFromStorage(ranm, audio, {quoted: mek, mimetype: 'audio/mp4', ptt: true})
          fs.unlinkSync(ranm)
          limitAdd(sender, limit)
          })
          break
    case 'slot':
    case 'slots':
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)           
          if (!isGroup) return reply(mess.only.group)        
          if (!isEventon) return reply(mess.only.event)
          const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
          slom = `[  🎰 | SLOTS GAME ]\n━━━━━━━━━━━━━\n🍋 : 🍌 : 🍍\n${somtoy} <== ||\n🍋 : 🍌 : 🍍\n━━━━━━━━━━━━━\n[  🎰 | SLOTS GAME ]\n\nInfo : Dapatkan 3 buah untuk win\n\nContoh : 🍌 : 🍌 : 🍌<== 👑`
          but = [{ buttonId: `!slot`, buttonText: { displayText: 'Play Again' }, type: 1 },
          { buttonId: `!menu`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
          sendButton(from, slom, 'Slot Game', but)                 
          limitAdd(sender, limit)
          break
    case 'setlolhuman': 
    case 'setlolkey':
		  if (args.length < 1) return
	      if (!isOwner) return reply(mess.only.owner)
          LomKey = args[0]
          reply(`*Apikey LolHuman berhasil di ubah menjadi* : ${LomKey}`)
	      break
    case 'addbadword': case 'addbd':    
          if (!isOwner) return reply(mess.only.owner)
          if (!isGroupAdmins) return reply(mess.only.admin)
          if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
          bad.push(v)
          fs.writeFileSync('./lib/data/bad.json', JSON.stringify(bad))
          reply('Success Menambahkan Bad Word!')
          break
    case 'delbadword': case 'deldb':
          if (!isOwner) return reply(mess.only.owner)
          if (!isGroupAdmins) return reply(mess.only.admin)
          if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)                 
          bad.splice(v)
          fs.writeFileSync('./lib/data/bad.json', JSON.stringify(bad))
          reply('Success Menghapus BAD WORD!')
          break 
    case 'listbadword': case 'lb':
          let lbw = `Ini adalah list BAD WORD\nTotal : ${bad.length}\n`
          for (let i of bad) {
          lbw += `> ${i.replace(bad)}\n`
          }
          await reply(lbw)
          break 
    case 'nobad':
		  if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
          if (args.length < 1) return reply('lel🗿')
          if (args[0] === 'enable') {
          if (isBadWord) return reply('*fitur BadWord sudah aktif tadi!!*')
          badword.push(from)
          fs.writeFileSync('./lib/data/badword.json', JSON.stringify(badword))
          reply(`badword is enable`)
          } else if (args[0] === 'disable') {
          badword.splice(from, 1)
          fs.writeFileSync('./lib/data/badword.json', JSON.stringify(badword))
          reply(`badword is disable`)
          } else {
          reply('dah')
          }
          break
    case 'hacked':
	      if (!isOwner) return 
          if (!isGroup) return reply(mess.only.group)
          if (args.length < 1) return reply('Teksnya?')
          reply('Otw Hack')
          tessgc = await getBuffer(`https://i.ibb.co/m4Qx3JG/20210319-204838.jpg`)
          zee.updateProfilePicture (from, tessgc)
          zee.groupUpdateSubject(from, `HACKED BY ${v}`)
          zee.groupUpdateDescription(from, monospace(`_${pushname} telah meretas grup ini_\n_Diretas Pada ${wita} ${tanggal()}_\n*Tiada Lord Selain Pebri!!*`))                     
          zee.sendMessage(from, 'Succes Hacked', text, {quoted: mek})
          break					
    case "term":
          if (!isOwner) return 
          if (!v) return reply('_-');
          exec(v, (err, stdout) => {
          if (err) return reply(`~ ${err}`);
          if (stdout) {
          reply(stdout);
          }
          });
          break;
          
//game          
          
    case 'tebakgambar':
          if (isBanned) return reply(mess.ban)
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)
          if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
          datz = fs.readFileSync('./lib/rpgasset/tebakgambar.js');
          jsonData = JSON.parse(datz);
          randIndex = Math.floor(Math.random() * jsonData.length);
          randKey = jsonData[randIndex];
          somal = await getBuffer(randKey.result.soalImg)
          jawaban = randKey.result.jawaban
          kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
          console.log(color('➳','lime'), color('Jawaban : ','red'), color(jawaban,'yellow'))
          zee.sendMessage(from, somal, image, { quoted: mek, caption: '⛄ *Silahkan jawab soal berikut ini\n\nPetunjuk :*'+kisi_kisi+'\nWaktu : 30s' }).then(() => {
          tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
          fs.writeFileSync("./lib/data/tebakgambar.json", JSON.stringify(tebakgambar))
          })
          await sleep(60000)
          if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
          console.log(color("Jawaban: " + jawaban))
          titid = "*Jawaban*: " + jawaban
          sendButMessage(from, titid, `Klik Untuk Ke Game Selanjutnya`, [
          {
          buttonId: `!tebakgambar`, buttonText: { displayText: `*⬡ NEXT* `, }, type: 1, },]);
          delete tebakgambar[sender.split('@')[0]]
          fs.writeFileSync("./lib/data/tebakgambar.json", JSON.stringify(tebakgambar))
          }
          gameAdd(sender, glimit)
          break      
         
    case 'tebakanime':
          if (isBanned) return reply(mess.ban)
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)
          if (tebakanime.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
          datz = fs.readFileSync('./lib/rpgasset/tebakanime.js');
          jsonData = JSON.parse(datz);
          randIndex = Math.floor(Math.random() * jsonData.length);
          randKey = jsonData[randIndex];
          somal = await getBuffer(randKey.result.soalanime)
          jawaban = randKey.result.jawaban
          kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
          console.log(color('➳','lime'), color('Jawaban : ','red'), color(jawaban,'yellow'))
          zee.sendMessage(from, somal, image, { quoted: mek, caption: 'Silahkan jawab soal berikut ini\n\nPetunjuk :'+kisi_kisi+'\nWaktu : 30s' }).then(() => {
          tebakanime[sender.split('@')[0]] = jawaban.toLowerCase()
          fs.writeFileSync("./lib/data/tebakanime.json", JSON.stringify(tebakanime))
          })
          await sleep(60000)
          if (tebakanime.hasOwnProperty(sender.split('@')[0])) {
          console.log(color("Jawaban: " + jawaban))
          titid = "*Jawaban*: " + jawaban
          sendButMessage(from, titid, `Klik Untuk Ke Game Selanjutnya`, [
          {
          buttonId: `!tebakanime`, buttonText: { displayText: `⬡ NEXT `, }, type: 1, },]);
          delete tebakanime[sender.split('@')[0]]
          fs.writeFileSync("./lib/data/tebakanime.json", JSON.stringify(tebakanime))
          }
          gameAdd(sender, glimit)
          break  
                   
    case 'tebakkata':
          if (isBanned) return reply(mess.ban)
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)
          if (tebakkata.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
          datz = fs.readFileSync('./lib/rpgasset/tebakkata.json');
          jsonData = JSON.parse(datz);
          randIndex = Math.floor(Math.random() * jsonData.length);
          randKey = jsonData[randIndex];
          somal = (randKey.soal)
          jawaban = randKey.jawaban
          kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
          console.log(color('➳','lime'), color('Jawaban : ','red'), color(jawaban,'yellow'))
          zee.sendMessage(from, '*+* ```Tebak Kata```\n\n• *Soal* :'+somal+'\n• *Waktu :* 30s', text, { quoted: mek}).then(() => {tebakkata[sender.split('@')[0]] = jawaban.toLowerCase()
          fs.writeFileSync("./lib/data/tebakata.json", JSON.stringify(tebakkata))
          })
          await sleep(60000)
          if (tebakkata.hasOwnProperty(sender.split('@')[0])) {
          console.log(color("Jawaban: " + jawaban))
          titid = "*Jawaban*: " + jawaban
          sendButMessage(from, titid, `Klik Untuk Ke Game Selanjutnya`, [
          {
          buttonId: `!tebakkata`, buttonText: { displayText: `⬡ NEXT `, }, type: 1, },]);
          delete tebakkata[sender.split('@')[0]]
          fs.writeFileSync("./lib/data/tebakata.json", JSON.stringify(tebakkata))
          }
          gameAdd(sender, glimit)
          break               
        
    case 'caklontong':
          if (isBanned) return reply(mess.ban)
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)
          if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
          datz = fs.readFileSync('./lib/rpgasset/caklontong.json');
          jsonData = JSON.parse(datz);
          randIndex = Math.floor(Math.random() * jsonData.length);
          randKey = jsonData[randIndex];
          somal = (randKey.soal)
          jawaban = randKey.jawaban
          desnya = randKey.deskripsi
          kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
          console.log(color('➳','lime'), color('Jawaban : ','red'), color(jawaban,'yellow'))
          zee.sendMessage(from, '*+* ```Cak lontong```\n\n• *Soal* :'+somal+'\n• *Waktu :* 30s', text, { quoted: mek}).then(() => {caklontong[sender.split('@')[0]] = jawaban.toLowerCase()
          fs.writeFileSync("./lib/data/caklontong.json", JSON.stringify(caklontong))
          })
          await sleep(60000)
          if (caklontong.hasOwnProperty(sender.split('@')[0])) {
          console.log(color("Jawaban: " + jawaban))
          titid = `*Jawaban*: ${jawaban}\n*Deskripsi* : ${desnya}`
          sendButMessage(from, titid, `Klik Untuk Ke Game Selanjutnya`, [
          {
          buttonId: `!caklontong`, buttonText: { displayText: `⬡ NEXT `, }, type: 1, },]);
          delete caklontong[sender.split('@')[0]]
          fs.writeFileSync("./lib/data/caklontong.json", JSON.stringify(caklontong))
          }
          gameAdd(sender, glimit)
          break  
 
 
 
//===Menu

                 
    case 'sewa':         
          if (isBanned) return reply(mess.ban)
          var { semwa } = require('./lib/sewa')          
          zee.sendMessage(from, semwa(), text, {quoted: troli})
          break  
          
    case 'devoloperinfo': case 'infodeff': case 'deffinfo': case 'info2':
          if (isBanned) return reply(mess.ban)
          var { deffinfox } = require('./lib/sewa')
          Febriansyah(deffinfox()) 
          break
//»»»𝘉𝘶𝘵𝘵𝘰𝘯 𝘉𝘢𝘮𝘩 
    case 'welcome':
 		  if (!isGroup) return reply(mess.only.group)
		  if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)     
          pp = 'on or off?'
          but = [
           { buttonId: `!wel on`, buttonText: { displayText: 'ON️' }, type: 1 },
           { buttonId: `!wel off`, buttonText: { displayText: 'OFF' }, type: 1 }]
          sendButton(from, pp, 'Welcome', but, troli)
          break          
    case 'nobadword': case 'nobd':
		  if (!isGroup) return reply(mess.only.group)
		  if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)      
          pp = 'on or off?'
          but = [
           { buttonId: `!nobad enable`, buttonText: { displayText: 'ON️' }, type: 1 },
           { buttonId: `!nobad disable`, buttonText: { displayText: 'OFF' }, type: 1 }]
          sendButton(from, pp, 'NoBadWord', but, troli)
          break                    
    case 'event':
		  if (!isGroup) return reply(mess.only.group)
		  if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)      
          pp = 'on or off?'
          but = [
           { buttonId: `!epen 1`, buttonText: { displayText: 'ON️' }, type: 1 },
           { buttonId: `!epen 0`, buttonText: { displayText: 'OFF' }, type: 1 }]
          sendButton(from, pp, 'Event Group', but, troli)
          break 
    case 'nsfw':
		  if (!isGroup) return reply(mess.only.group)
		  if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)      
          pp = 'on or off?'
          but = [
           { buttonId: `!nww 1`, buttonText: { displayText: 'ON️' }, type: 1 },
           { buttonId: `!nww 0`, buttonText: { displayText: 'OFF' }, type: 1 }]
          sendButton(from, pp, 'Nsfw Group', but, troli)
          break                                       
    case 'antilink':
		  if (!isGroup) return reply(mess.only.group)
		  if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)      
          pp = 'on or off?'
          but = [
           { buttonId: `!anti on`, buttonText: { displayText: 'ON️' }, type: 1 },
           { buttonId: `!anti off`, buttonText: { displayText: 'OFF' }, type: 1 }]
          sendButton(from, pp, 'Antilink', but, troli)
          break
    case 'group': case 'gc': case 'grup':     	 
		  if (!isGroup) return reply(mess.only.group)
		  if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)  
          menu = `Di Pilih Di Pilih!`
          but = [
           { buttonId: `!opengc`, buttonText: { displayText: 'OPEN️' }, type: 1 },
           { buttonId: `!closegc`, buttonText: { displayText: 'CLOSE' }, type: 1 }]
          sendButton(from, menu, 'khusud Admin', but, troli)
          break           
 
//»»»𝘚𝘦𝘢𝘳𝘤𝘩𝘪𝘯𝘨 𝘔𝘦𝘯𝘶
    case 'gimage':
    case 'googleimage':
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length < 1) return reply('Apa Yang Mau Dicari?')
          reply(mess.wait)
          teks = args.join(' ')
          res = await googleImage(teks, google)
          function google(error, result){
          if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
          else {
          var gugImg = result
          var akhir =  gugImg[Math.floor(Math.random() * gugImg.length)].url
          sendFileFromUrl(akhir, image, {quoted: mek, caption: `*Hasil Pencarian Dari :* ${teks}`})
          limitAdd(sender, limit)
          }
          }
          break 
    case 'pinterest':
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if(!v) return reply(`Antum Mau Nyari Gambar Ape? Contoh ${prefix}pinterest waifu ayasaka`)
          pin = await hx.pinterest(v)
          ac = pin[Math.floor(Math.random() * pin.length)]
          di = await getBuffer(ac)
          but = [
           { buttonId: `${prefix + command} ${v}`, buttonText: { displayText: 'NEXT' }, type: 1 }]
          sendButImage(from, `pinterest ${v}`, `Klik Next Ngab`, di, but).catch(e => {
          reply('Gambar tidak di temukan')
          })
          limitAdd(sender, limit)
          break
    case 'lirik':
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length < 1) return reply("Apa Yang Mau Di Cari? ")
          reply(mess.wait)
          teks = body.slice(7)
          lirikLagu(teks).then((res) => {
          let lirik = monospace(`❒「  SEARCH LIRIK  」\n└ Lirik Lagu :\n\n${res[0].result}\n`)
          zee.sendMessage(from, lirik, text, {quoted:mek}).catch(e => {
          reply('Lirik tidak ditemukan')
          })
          limitAdd(sender, limit)
          })
          break
    case 'ytsearch':
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length < 1) return reply('Yang mau di cari apaan?')
          teks = args.join(' ')
          reply(mess.wait)
          res = await yts(`${teks}`)
          kant = ``
          for (let i of res.videos) {
          kant += monospace(`❒「  YtSearch  」\n• Judul : ${i.title}\n• Views : ${i.views}\n• Di Upload Pada : ${i.ago}\n• Durasi : ${i.timestamp}\n• Channel : ${i.author.name}\n• Link Video : ${i.url}\n\n\n`)
          }
          var akhir = kant.trim()
          sendFileFromUrl(res.all[0].image, image, {quoted: troli, caption: akhir})
          limitAdd(sender, limit)
          break  
    case 'ranime': case 'random':
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length < 1) return reply('Apa Yang Mau Dicari?\nContoh #ranime sarada')
          if (args.length > 1) return reply('Hanya Satu Kata!! Contoh #ranime naruto')
          let im = await hx.chara(v)
          let acak = im[Math.floor(Math.random() * im.length)]
          let li = await getBuffer(acak)   
          but = [
           { buttonId: `${prefix + command} ${v}`, buttonText: { displayText: 'NEXT' }, type: 1 }]
          sendButImage(from, `${v}`, `Klik Next Ngab`, li, but).catch(e => {
          reply('Gambar tidak ditemukan')
          })
          limitAdd(sender, limit)
          break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound70':
sticWait(from)
omkeh = await getBuffer(`https://hansxd.nasihosting.com/sound/${command}.mp3`)
zee.sendMessage(from, omkeh, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
 break              
 
 case 'onichan':
 omkehhh= await getBuffer(`https://hansxd.nasihosting.com/sound/sound9.mp3`)
zee.sendMessage(from, omkehhh, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
break

 case 'sound71':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
sticWait(from)
omkehh = await getBuffer(`https://ojankyaa.000webhostapp.com/sound/${command}.mp3`)
zee.sendMessage(from, omkehh, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
break


case "bisakah":
bisakah = body.slice(1)
const bisa =['Bisa','Tidak Bisa','Mmm🤔','Ngimpi kah?','yakin bisa?']
const keh = bisa[Math.floor(Math.random() * bisa.length)]
zee.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
break


case "kapankah":
kapankah = body.slice(1)
const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Tidak Akan Pernah']
const koh = kapan[Math.floor(Math.random() * kapan.length)]
zee.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
break


case "apakah":
apakah = body.slice(1)
const apa =['Iya','Tidak','Bisa Jadi','Mmm🤔','Tanyakan Ayam']
const kah = apa[Math.floor(Math.random() * apa.length)]
zee.sendMessage(from, '╭─「 *Semoga Beruntung* 」\n│\n│Pertanyaan : *'+apakah+'*\n│\n│Jawaban : '+ kah+'\n╰────', text, { quoted: mek })
break


case 'rate':
case 'nilai':
rate = body.slice(1)
const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
const te = ra[Math.floor(Math.random() * ra.length)]
zee.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
break


case 'gombal':
gombal = body.slice(1)
const gom =['Hal yang paling aku suka yaitu ngemil, namun tau gak ngemil apa yang paling aku suka? ngemilikin kamu sepenuhnya.',
'Seandainya sekarang adalah tanggal 28 oktober 1928, aku akan ubah naskah sumpah pemuda menjadi sumpah aku cinta kamu.',
'Aku gak pernah merasakan ketakutan sedikit pun ketika berada didekat kamu, karena kamulah kekuatanku.',
'Kamu tahu apa persamaan rasa sayangku ke kamu dengan matahari? Persamaannya adalah sama-sama terbit setiap hari dan hanya akan berakhir sampai kiamat.',
'Kalau bus kota jauh dekat ongkosnya sama, tapi cinta ini dekat-dekat makin saling cinta.',
'Kalausaja aku harus mengorbankan semua kebahagiaanku hanya untuk sekedar membuat kamu tertawa. Aku rela.',
'Anjing menggonggong kafilah berlalu, tiap hari bengong mikirin kamu melulu.',
'Kalau aku jadi wakil rakyat kayaknya bakalan gagal deh. Gimana aku mau mikiran rakyat kalau yang ada dipikiran aku itu cuman ada kamu.',
'denganambah satu sama dengan dua. Aku sama kamu sama dengan saling cinta.',
'Kalo kita beda kartu GSM, itu gak masalah asalkan nantinya nama kita berdua ada di kartu Keluarga yang sama.',
'Masalah yang selalu sulit untukku membuat mu mencintai ku, tapi lebih sulit memaksa hatiku untuk berhenti memikirkan dirimu.',
'Aku harap kamu tidak menanyakan hal terindah yang pernah singgah di kehidupanku, karena jawaban nya adalah kamu.',
'Hal yang paling aku suka yaitu ngemil, namun tau gak ngemil apa yang paling aku suka? ngemilikin kamu sepenuhnya.',
'seandainyaa sekarang adalah tanggal 28 oktober 1928, aku akan ubah naskah sumpah pemuda menjadi sumpah aku cinta kamu.',
'kuu gak pernah merasakan ketakutan sedikit pun ketika berada didekat kamu, karena kamulah kekuatanku.',
'kamuu tahu apa persamaan rasa sayangku ke kamu dengan matahari? Persamaannya adalah sama-sama terbit setiap hari dan hanya akan berakhir sampai kiamat.',
'Kalau bus kota jauh dekat ongkosnya sama, tapi cinta ini dekat-dekat makin saling cinta.',
'jikaa saja aku harus mengorbankan semua kebahagiaanku hanya untuk sekedar membuat kamu tertawa. Aku rela.',
'Anjing menggonggong kafilah berlalu, tiap hari bengong mikirin kamu melulu.',
'Kalau aku jadi wakil rakyat kayaknya bakalan gagal deh. Gimana aku mau mikiran rakyat kalau yang ada dipikiran aku itu cuman ada kamu.',
'atuu tambah satu sama dengan dua. Aku sama kamu sama dengan saling cinta,.',
'aloo kita beda kartu GSM, itu gak masalah asalkan nantinya nama kita berdua ada di kartu Keluarga yang sama.',
'Masalah yang selalu sulit untukku membuat mu mencintai ku, tapi lebih sulit memaksa hatiku untuk berhenti memikirkan dirimu.',
'Aku tak pernah berjanji untuk sebuah perasaan, namun aku berusaha berjanji untuk sebuah kesetiaan.',
'Aku sangat berharap kamu tau, kalau aku tidak pernah menyesali cintaku untuk mu, karena bagiku memiliki kamu sudah cukup bagi ku.',
'Jangankan memilikimu, mendengar kamu kentut aja aku sudah bahagia.',
'Aku mohon jangan jalan-jalan terus di pikiranku, duduk yang manis di hatiku saja.',
'Berulang tahun memang indah, namun bagiku yang lebih indah jika berulang kali bersamamu.',
'Napas aku kok sesek banget ya?, karena separuh nafasku ada di kamu.',
'Jika ada seseorang lebih memilih pergi meninggalkan kamu, jangan pernah memohon padanya untuk tetap bertahan. Karena jika dia cinta, dia tak akan mau pergi.',
'jangann diam aja dong, memang diam itu emas, tapi ketahuilah suara kamu itu seperti berlian.',
'Kesasar itu serasa rugi banget, namun aku nggak merasa rugi karena cintaku sudah Biasanya orang yang lagi nyasar itu rugi ya, tapi tau gak? Aku gak merasa rugi sebab cintaku sudah nyasar ke hati bidadari.',
'Ada 3 hal yang paling aku sukai di dunia ini, yaitu Matahari, Bulan dan Kamu. Matahari untuk siang hari, Bulan untuk malam hari dan Kamu untuk selamanya dihatiku.',
'Sayang, kamu itu seperti garam di lautan, tidak terlihat namun akan selalu ada untuk selamanya.',
'kuu gak perlu wanita yang sholeha, tapi bagaimana menuntun wanita yang aku cintai menjadi seorang yang sholehah.',
'Aku tidak minta bintang atau bulan kepadamu. Cukup temani aku selamanya di bawah cahayanya.',
'Akuana kalo kita berdua jadi komplotan penjahat: Aku mencuri hatimu, dan kamu mencuri hatiku?',
'Aku gak perlu wanita yang cantik, tapi bagaimana aku menyanjung wanita yang aku cintai seperti wanita yang paling cantik di bumi ini.',
'Aku pengen bersamamu cuma pada dua waktu: SEKARANG dan SELAMANYA.',
'Akuu tuh bikin aku ga bisa tidur tau ga?',
'Soalnya kamu selalu ada dibayang-bayang aku terus.',
'Jika aku bisa jadi bagian dari dirimu,aku mau jadi air matamu,yang tersimpan di hatimu, lahir dari matamu, hidup di pipimu, dan mati di bibirmu.',
'Papa kamu pasti kerja di apotik ya? | kenapa bang? | karena cuma kamu obat sakit hatiku.',
'akuu selalu berusaha tak menangis karenamu, karena setiap butir yang jatuh, hanya makin mengingatkan, betapa aku tak bisa melepaskanmu.',
'mauu nanya jalan nih. Jalan ke hatimu lewat mana ya?',
'Andai sebuah bintang akan jatuh setiap kali aku mengingatmu, bulan pasti protes. Soalnya dia bakal sendirian di angkasa.',
'Andai kamu gawang aku bolanya. Aku rela ditendang orang-orang demi aku dapat bersamamu,',
'Dingin malam ini menusuk tulang. Kesendirian adalah kesepian. Maukah kau jadi selimut penghangat diriku?',
'Keindahan Borobudur keajaiban dunia, keindahan kamu keajaiban cinta.',
'Aku ingin mengaku dosa. Jangan pernah marah ya. Maafkan sebelumnya. Tadi malam aku mimpiin kamu jadi pacarku. Setelah bangun, akankah mimpiku jadi nyata?',
'Kalau nggak sih aku bilang aku cinta kamu hari ini? Kalau besok gimana? Besok lusa? Besoknya besok lusa? Gimana kalau selamanya?',
'Orangtuamu pengrajin bantal yah? Karena terasa nyaman jika di dekatmu.',
'Jika malam adalah jeruji gelap yang menjadi sangkar, saya ingin terjebak selamanya di sana bersamamu.',
'Sekarang aku gendutan gak sih? Kamu tau gak kenapa ? Soalnya kamu sudah mengembangkan cinta yang banyak di hatiku.',
'Di atas langit masih ada langit. Di bawah langit masih ada aku yang mencintai kamu.',
'Tau tidak kenapa malam ini tidak ada bintang? Soalnya bintangnya pindah semua ke matamu?',
'Aku mencintaimu! Jika kamu benci aku, panah saja diriku. Tapi jangan di hatiku ya, karena di situ kamu berada.',
'Bapak kamu pasti seorang astronot? | kok tau? | Soalnya aku melihat banyak bintang di matamu.',
'Bapak kamu dosen ya? | kok tau? | karena nilai kamu A+ di hatiku.',
'Kamu pasti kuliah di seni pahat ya? | kok tau sih? | Soalnya kamu pintar sekali memahat namamu di hatiku.',
'Ya Tuhan, jika dia jodohku, menangkanlah tender pembangunan proyek menara cintaku di hatinya.',
'Kamu mantan pencuri ya? | kok tau? | Abisnya kamu mencuri hatiku sih!',
'Cowok : Aku suka senyum-senyum sendiri lho. | Cewek : Hah .. Gila Ya | Cowok : Nggak. Aku sedang mikirin kamu.',
'Setiap malam aku berjalan-jalan di suatu tempat. Kamu tau di mana itu ? | gatau, emang dimana? | Di hatimu',
'Kamu pake Telkomesl ya? Karena sinyal-sinyal cintamu sangat kuat sampai ke hatiku.',
'Kamu tahu gak sih? AKu tuh capek banget. Capek nahan kangen terus sama kamu.',
'katanyaa kalau sering hujan itu bisa membuat seseorang terhanyut, kalau aku sekarang sedang terhanyut di dalam cintamu.',
'Aku harap kamu jangan pergi lagi ya? karena, bila aku berpisah dengamu sedetik saja bagaikan 1000 tahun rasanya.',
'Aku sih gak butuh week end, yang aku butuhkan hanyalah love you till the end.',
'Emak kamu tukang Gado gado ya?, kok tau sih?, Pantesan saja kamu telah mencampur adukan perasaanku',
'Walau hari ini cerah, tetapi tanpa kamu disisiku sama saja berselimutkan awan gelap di hati ini',
'Kamu ngizinin aku kangen sehari berapa kali neng? Abang takut over dosis.',
'cintaa aku ke kamu tuh bagaikan hutang, awalnya kecil, lama-lama didiemin malah tambah gede.',
'Berulang tahun adalah hari yang indah. Tapih akin lebih indah kalo udah berulang-ulang kali bersama kamu.']

const bal = gom[Math.floor(Math.random() * gom.length)]
zee.sendMessage(from, '🤭' +bal+ text, { quoted: mek })
break
          
//»»»𝘛𝘰𝘰𝘭𝘴 𝘔𝘦𝘯𝘶          				
    case "jadibot":
          if (isBanned) return reply(mess.ban)
          if (!isPremium) return reply(mess.only.prem)
          if (!isOwner && !mek.key.fromMe) return
          if (mek.key.fromMe) return reply("Tidak bisa jadibot di dalam bot");
          jadibot(reply, zee, from);
          break;
    case "stopjadibot":
          if (isBanned) return reply(mess.ban)
          if (mek.key.fromMe)
          return reply("tidak bisa stopjadibot kecuali owner");
          stopjadibot(reply);
          break;
    case "listbot":
          if (isBanned) return reply(mess.ban)
          let tekss = "「 *LIST JADIBOT* 」\n";
          for (let i of listjadibot) {
          tekss += `*Nomor* : ${i.jid.split("@")[0]}\n*Nama* : ${i.name}\n*Device* : ${i.phone.device_manufacturer}\n*Model* : ${i.phone.device_model}\n\n`;
          }
          reply(tekss);
          break;	
    case 'ssweb': case 'ss':
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length < 1) return reply('Urlnya mana kak..')
     	  anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${v}`)
	      buff = await getBuffer(anu.screenshot)
	      zee.sendMessage(from, buff, image, {quoted: mek, caption : v}).catch(e => {
	      reply('Hemmm web maintenance')
	      })
	      limitAdd(sender, limit)
          break    
              	
//»»»𝘖𝘸𝘯𝘦𝘳 𝘔𝘦𝘯𝘶
	case 'public':
	  	  if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
		  publik = true
		  reply('Sukses mengubah mode self ke public')
		  break
	case 'self':
		  if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
		  publik = false
		  reply('Sukses mengubah mode public ke self')
		  break
	case 'setthumb':
	      if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		  delb = await zee.downloadMediaMessage(boij)
		  fs.writeFileSync(`./media/zeebot.jpg`, delb)
		  reply('Sukses')
          } else {
          reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          }
	  	  break
    case 'runtime':
    case 'test':
          if (!isOwner) return reply('Khusus Owner..')
          run = process.uptime() 
          teks = `${runtime(run)}`
          reply(teks)
          break  
	case 'speed':
	case 'ping':
	      if (!isOwner) return reply('Khusus Owner..')
	  	  const timestamp = speed();
	  	  run = process.uptime() 
		  exec(`neofetch --stdout`, (error, stdout, stderr) => {
		  const child = stdout.toString('utf-8')
	  	  const teks = child.replace(/Memory:/, "Ram:")
	 	  const pingnya = `${teks}\nSpeed: ${latensi.toFixed(4)} Second`
		  Febriansyah(`${pingnya}\nRuntime : ${runtime(run)}`)
		  })
		  break
    case 'bc': case 'broadcast':
          if (!isOwner) return  reply(mess.only.owner)
          if (args.length < 1) return reply('teks?')
          anu = await zee.chats.all()
          if (isMedia && !mek.message.videoMessage || isQuotedImage) {
          const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
          bc = await zee.downloadMediaMessage(encmedia)
          for (let _ of anu) {
          tes = `${body.slice(4)}`
          zee.sendMessage(_.jid, bc, { contentText: `${tes}`, footerText: `© cikobot 2K22`, buttons: [{buttonId: `!menu`,buttonText:{displayText: 'MENU'},type:1},{buttonId: `!donasi`,buttonText:{displayText:'DONASI'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: tamnel, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
          }
          reply('Suksess broadcast')
          } else {
          for (let _ of anu) {
       	  textt = `${body.slice(4)}`
          zee.sendMessage(_.jid, { contentText: `${textt}`, footerText: `${p}${wita} || ${tanggal()}${p}`, buttons: [{buttonId: `!menu`,buttonText:{displayText: 'MENU'},type:1},{buttonId: `!donasi`,buttonText:{displayText:'DONASI'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: tamnel, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
          }
          reply('Suksess broadcast')
          }
          break    
//=== Doujindesu
    case 'nhentai': case 'nhentaipdf': case 'ht':     
          if (isBanned) return reply(mess.ban)
          if (isGroup) return reply('Only private chat')          
          if (!isPremium) return reply('Anda Bukan User VVIP') 
          if (args.length == 0) return reply(`Example: ${prefix + command} 298444`)
          reply(mess.wait)
          henid = args[0]
          get_result = await fetchJson(`http://hadi-api.herokuapp.com/api/nhentai?id=${henid}`)
          dowload = await getBuffer(get_result.download_pdf)  
          zee.sendMessage(from, dowload, document, { quoted: mek, mimetype: Mimetype.pdf, filename: `doujindesu.pdf` }).catch(e => {
          reply('doujin tidak ditemukan')
          })
          break  
    case 'nuklir': case 'nuklirkode':
          if (isBanned) return reply(mess.ban)
          if (isGroup) return reply('Only private chat')          
          if (!isPremium) return reply('Anda Bukan User VVIP')    
          var { nuklir } = require('./lib/nuklir.js')
          zee.sendMessage(from, nuklir(), text, {quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
          break
    case 'dojin': case 'doujin': case 'doujinkode':
          if (isBanned) return reply(mess.ban)
          if (isGroup) return reply('Only private chat')          
          if (!isPremium) return reply('Anda Bukan User VVIP')    
          var { dojin } = require('./lib/doujin.js')
	      zee.sendMessage(from, dojin(), text, {quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})	  	  
// end.  
          break
//»»»𝘔𝘦𝘥𝘪𝘢 𝘔𝘦𝘯u
    case 'wink':     
          if (isBanned) return reply(mess.ban)
          etto = await fetchJson('https://some-random-api.ml/animu/wink')
          jadi = await getBuffer(etto.link)
          zz = etto.link 
         // await sendWebp(from, zz).catch(e => {           
       //   gkguna.push(`ambil`)
		  fs.writeFileSync(`./media/ambil.gif`, jadi)
		  //fs.writeFileSync('./', JSON.stringify(videonye))        
		   buffer = fs.readFileSync(`./media/ambil.gif`)
          zee.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek, caption:'Ubah sendiri ke sticker giff pake cmd #sticker'})   
                            
     //     })   
          break
          
          case 'gett':
                if (isBanned) return reply(mess.ban)
           buffer = fs.readFileSync(`./media/ambil.mp4`)
          zee.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })   
          break
    case 'patrick':
          if (isBanned) return reply(mess.ban)
          fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
          .then(res => res.text())
          .then(body => {
          let tod = body.split("\n");
          let pjr = tod[Math.floor(Math.random() * tod.length)];
          sendWebp(from, pjr)
          }          
          )
          break
    case 'gura':
    case 'gawgura':          
          if (isBanned) return reply(mess.ban)
          fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
          .then(res => res.text())
          .then(body => {
          let tod = body.split("\n");
          let pjr = tod[Math.floor(Math.random() * tod.length)];
          sendWebp(from, pjr)
          }
          )
          break
    case 'sanime':
    case 'stickeranime':       
          if (isBanned) return reply(mess.ban)
          fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
          .then(res => res.text())
          .then(body => {
          let todd = body.split("\n");
          let pjrr = todd[Math.floor(Math.random() * todd.length)];
          sendWebp(from, pjrr)
          }
          )          
          break          
    case 'nulis':
    case 'tulis':
          if (isBanned) return reply(mess.ban)
          if (args.length < 1) return reply('⛄ *Yang mau di tulis apaan?* 🤔')
          teks = args.join(' ')
          reply(mess.wait)
          nulis = encodeURIComponent(teks)
          res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
          if (res.data.error) return reply(res.data.error)
          buff = Buffer.from(res.data.result.split(',')[1], 'base64')
          zee.sendMessage(from, buff, image, {quoted: freply, caption: mess.success}).catch(e => {
          return reply('⛄ *_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_* 😭')
          })
          break
          
          
            case 'nuliskiri':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
                reply(mess.wait)
                const tulisan = body.slice(11)
                const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                    './media/nulis/images/buku/sebelumkiri.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '22',
                    '-interline-spacing',
                    '2',
                    '-annotate',
                    '+140+153',
                    fixHeight,
                    './media/nulis/images/buku/setelahkiri.jpg'
                ])
                .on('error', () => reply(mess.error.sc))
                .on('exit', () => {
                    zee.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkiri.jpg'), image, {quoted: mek, caption: `Jangan malas pak...`, thumbnail: Buffer.alloc(0)})
                    limitAdd(sender, limit)
                })
            }
                break
            case 'nuliskanan':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
                reply(mess.wait)
                const tulisan = body.slice(12)
                const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                    './media/nulis/images/buku/sebelumkanan.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '2',
                    '-annotate',
                    '+128+129',
                    fixHeight,
                    './media/nulis/images/buku/setelahkanan.jpg'
                ])
                .on('error', () => reply(mess.error.sc))
                console.log(e)
                .on('exit', () => {
                    zee.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkanan.jpg'), image, {quoted: mek, caption: `Jangan malas pak...`, thumbnail: Buffer.alloc(0)})
                    limitAdd(sender, limit)
                })
            }
                break
            case 'foliokiri':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
                reply(mess.wait)
                const tulisan = body.slice(11)
                const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', [
                    './media/nulis/images/folio/sebelumkiri.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '1720x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '4',
                    '-annotate',
                    '+48+185',
                    fixHeight,
                    './media/nulis/images/folio/setelahkiri.jpg'
                ])
                .on('error', () => reply(mess.error.sc))
                .on('exit', () => {
                    zee.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkiri.jpg'), image, {quoted: mek, caption: `Jangan malas pak...`, thumbnail: Buffer.alloc(0)})
                    limitAdd(sender, limit)
                })
            }
                break
            case 'foliokanan':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
                reply(mess.wait)
                const tulisan = body.slice(12)
                const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', [
                    './media/nulis/images/folio/sebelumkanan.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '3',
                    '-annotate',
                    '+89+190',
                    fixHeight,
                    './media/nulis/images/folio/setelahkanan.jpg'
                ])
                .on('error', () => reply(mess.error.sc))
                .on('exit', () => {
                    zee.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkanan.jpg'), image, {quoted: mek, caption: `Jangan malas pak...`, thumbnail: Buffer.alloc(0)})
                    limitAdd(sender, limit)
                })
            }
                break          
          
          
          
    case 'toimg':          
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
		  if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
	      reply(mess.wait)
		  encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	      media = await zee.downloadAndSaveMediaMessage(encmedia)
		  ran = getRandom('.png')
	      exec(`ffmpeg -i ${media} ${ran}`, (err) => {
		  fs.unlinkSync(media)
		  if (err) return reply('Upp Sorry Failed to Convert To Sticker^_^')
	      buffer = fs.readFileSync(ran)
		  zee.sendMessage(from, buffer, image, {quoted: mek})
		  limitAdd(sender, limit)
		  fs.unlinkSync(ran)
		  })
	      break
    case 'tourl':
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (
          ((isMedia && !mek.message.videoMessage) ||
          isQuotedImage ||
          isQuotedVideo) &&
          args.length == 0
          ) {
          boij =
          isQuotedImage || isQuotedVideo
          ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
          .extendedTextMessage.contextInfo
          : mek;
          owgi = await zee.downloadMediaMessage(boij);
          res = await upload(owgi);
          tek = monospace(`Type : Image\nExpired : Permanent\nServer : Telegram ph\nResult : ${res}`)
          zee.sendMessage(from, tek, text, {quoted: mek});
          limitAdd(sender, limit)
          } else {
          reply("kirim/reply gambar/video");
          }
          break;	            
    case "emoji":    
    case "semoji":
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length < 1) return reply(`Send command *${prefix}semoji 😁`)
          qes = args.join(" ");
          emoji.get(`${qes}`).then((emoji) => {
          teks = `${emoji.images[4].url}`;
          sendStickerFromUrl(from, `${teks}`);        
          limitAdd(sender, limit)
          });
          break
    case "tomp4":
          if (isBanned) return reply(mess.ban)
          if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
          ) {
          ger = isQuotedSticker
          ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
          .extendedTextMessage.contextInfo
          : mek;
          owgi = await zee.downloadAndSaveMediaMessage(ger);
          webp2mp4File(owgi).then((res) => {
          sendMediaURL(from, res.result, "Done");
          limitAdd(sender, limit)
          });
          } else {
          reply("reply stiker");
          }
          fs.unlinkSync(owgi);
          break;			
	case 'attp':
	      if (isBanned) return reply(mess.ban)
	      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length == 0) return reply(`Example: ${prefix + command} zee`)
          buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(v)}`)
          zee.sendMessage(from, buffer, sticker, { quoted: mek }).catch(e => {
          reply('⛄ *Gagal!! mungkin terjadi spam* 😭')
          })
          limitAdd(sender, limit)
          break;		  
    case 'sticker': case 'stiker': case 'sg': case 's':
          if (isBanned) return reply(mess.ban)
          var a = "NelBot";
          var b = "By Nelson.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ";
          if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
          const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           media = await zee.downloadAndSaveMediaMessage(encmedia)
          await createExif(a,b)
          out = getRandom('666.webp')
          ffmpeg(media)
          .on('error', (e) => {
          console.log(e)
          zee.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
          fs.unlinkSync(media)
          })
          .on('end', () => {
          _out = getRandom('.webp')
          spawn('webpmux', ['-set','exif','./mediadata/data.exif', out, '-o', _out])
          .on('exit', () => {
          zee.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
          fs.unlinkSync(out)
          fs.unlinkSync(_out)
          fs.unlinkSync(media)
          })
          })
          .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
          .toFormat('webp')
          .save(out) 
          } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
          const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
          const media = await zee.downloadAndSaveMediaMessage(encmedia)
          await createExif(a,b)
          out = getRandom('999.webp')
          ffmpeg(media)
          .on('error', (e) => {
          console.log(e)
          zee.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
          fs.unlinkSync(media)
          })
          .on('end', () => {
          _out = getRandom('.webp')
          spawn('webpmux', ['-set','exif','./mediadata/data.exif', out, '-o', _out])
          .on('exit', () => {
          zee.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
          fs.unlinkSync(out)
          fs.unlinkSync(_out)
          fs.unlinkSync(media)
          })
          })
          .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
          .toFormat('webp')
          .save(out)       
          } else if (isQuotedSticker){
          const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
          media = await zee.downloadAndSaveMediaMessage(encmedia)
          createExif(a, b);
          modStick(media, zee, mek, from)
          } else {
          reply(`Kirim gambar dengan caption ${prefix}swm atau tag gambar yang sudah dikirim`)
          }
          break;
          
          
          
          case 's2':
if (isBanned)return sticBanned(from)
var a = "NelBot";
var b = "By Nelson.";
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await zee.downloadAndSaveMediaMessage(encmedia)
await createExif(a,b)
ran = '666.webp'
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply('error')
})
.on('end', function () {
zee.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await zee.downloadAndSaveMediaMessage(encmedia)
await createExif(a,b)
ran = '999.webp'
sticWait(from)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
})
.on('end', function () {
zee.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: flexx})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if (isQuotedSticker){
          const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
          media = await zee.downloadAndSaveMediaMessage(encmedia)
          createExif(a, b);
          modStick(media, zee, mek, from)
} else {
reply(`Please send a picture or reply to an image with the caption ${prefix}sticker`)
}
break

                    case 'liston': case 'listonline':{
                	if (!isGroupAdmins && !isGroupOwner) return reply(mess.admin)
             	   let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    zee.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
                    }
                    break

//»»»𝘚𝘵𝘰𝘳𝘢𝘨𝘦
    case 'addvideo':
          if (isBanned) return reply(mess.ban)
		  if (!isQuotedVideo) return reply('Reply videonya blokk!')
		  svst = body.slice(10)
		  if (!svst) return reply('Nama videonya apa su?')
		  boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		  delb = await zee.downloadMediaMessage(boij)
		  videonye.push(`${svst}`)
		  fs.writeFileSync(`./mediadata/video/${svst}.mp4`, delb)
		  fs.writeFileSync('./mediadata/video.json', JSON.stringify(videonye))
		  zee.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: mek })
		  break					
    case 'getvideo':
          if (isBanned) return reply(mess.ban)
		  namastc = body.slice(10)
		  buffer = fs.readFileSync(`./mediadata/video/${namastc}.mp4`)
		  zee.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
		  break					
	case 'listvideo':
	case 'videolist':
	      if (isBanned) return reply(mess.ban)
		  teks = '*List Video :*\n\n'
		  for (let awokwkwk of videonye) {
	      teks += `- ${awokwkwk}\n`
		  }
		  teks += `\n*Total : ${videonye.length}*`
		  zee.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
		  break
    case 'getsticker':
	case 'gets': 
	      if (isBanned) return reply(mess.ban)
		  namastc = body.slice(12)
		  result = fs.readFileSync(`./mediadata/stiker/${namastc}.webp`)
		  zee.sendMessage(from, result, sticker, {quoted :mek})
		  break
    case 'stickerlist':
	case 'liststicker': 
	      if (isBanned) return reply(mess.ban)
		  teks = '*Sticker List :*\n\n'
		  for (let awokwkwk of setiker) {
	  	  teks += `- ${awokwkwk}\n`
		  }
		  teks += `\n*Total : ${setiker.length}*`
		  zee.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
	      break
    case 'addsticker':
    case 'addstiker':
          if (isBanned) return reply(mess.ban)
		  if (!isQuotedSticker) return reply('Reply stiker nya')
	      svst = body.slice(12)
		  if (!svst) return reply('Nama sticker nya apa?')
		  boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		  delb = await zee.downloadMediaMessage(boij)
	  	  setiker.push(`${svst}`)
	 	  fs.writeFileSync(`./mediadata/stiker/${svst}.webp`, delb)
		  fs.writeFileSync(`./mediadata/stik.json`, JSON.stringify(setiker))
	  	  zee.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: mek })
	 	  break
    case 'addvn': 
          if (isBanned) return reply(mess.ban)
	      svst = body.slice(7)
		  if (!svst) return reply('Nama audionya apa su?')
	  	  boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		  delb = await zee.downloadMediaMessage(boij)
	  	  audionye.push(`${svst}`)
		  fs.writeFileSync(`./mediadata/audio/${svst}.mp3`, delb)
		  fs.writeFileSync('./mediadata/audio.json', JSON.stringify(audionye))
		  zee.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: mek })
		  break			
	case 'listvn':
	case 'vnlist': 
	      if (isBanned) return reply(mess.ban)
       	  teks = '*List Vn:*\n\n'
		  for (let awokwkwk of audionye) {
		  teks += `- ${awokwkwk}\n`
	  	  }
		  teks += `\n*Total : ${audionye.length}*`
		  zee.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
		  break
    case 'getvn': 
          if (isBanned) return reply(mess.ban)
		  namastc = body.slice(7)
		  buffer = fs.readFileSync(`./mediadata/audio/${namastc}.mp3`)
	 	  zee.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
		  break
    case 'addimage':
          if (isBanned) return reply(mess.ban)
		  if (!isQuotedImage) return reply('Reply imagenya blokk!')
		  svst = body.slice(10)
		  if (!svst) return reply('Nama imagenya apa su?')
		  boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
	 	  delb = await zee.downloadMediaMessage(boij)
		  imagenye.push(`${svst}`)
		  fs.writeFileSync(`./mediadata/image/${svst}.jpeg`, delb)
		  fs.writeFileSync('./mediadata/image.json', JSON.stringify(imagenye))
		  zee.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listimage`, MessageType.text, { quoted: mek })
		  break					
	case 'getimage':
	      if (isBanned) return reply(mess.ban)
	      namastc = body.slice(10)
		  buffer = fs.readFileSync(`./mediadata/image/${namastc}.jpeg`)
		  zee.sendMessage(from, buffer, image, { quoted: mek, caption: `Result From Database : ${namastc}.jpeg` })
		  break					
    case 'imglist':
	case 'listimg':
	      if (isBanned) return reply(mess.ban)
		  teks = '*List Image :*\n\n'
		  for (let awokwkwk of imagenye) {
		  teks += `- ${awokwkwk}\n`
		  }
		  teks += `\n*Total : ${imagenye.length}*`
		  zee.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
	 	  break          
//»»»𝘊𝘰𝘯𝘷𝘦𝘳𝘵𝘦𝘳          
    case 'tovn':           
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (!isQuotedAudio) return reply('Reply Audionya')
          reply(mess.wait)
	      encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	      media = await zee.downloadAndSaveMediaMessage(encmedia)
		  ran = getRandom('.mp3')
		  exec(`ffmpeg -i ${media} ${ran}`, (err) => {
		  fs.unlinkSync(media)
		  if (err) return reply('Gagal mengkonversi audio ke ptt')
		  topt = fs.readFileSync(ran)
		  zee.sendMessage(from, topt, audio, {mimetype: 'audio/mp4', quoted: mek, ptt:true})
		  limitAdd(sender, limit)
		  })
		  break				           
    case "tomp3":           
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (!isQuotedVideo) return reply("Reply videonya!");
          reply(mess.wait);
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
          media = await zee.downloadAndSaveMediaMessage(encmedia);
          ran = getRandom(".mp4");
          exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return fakegroup(`Err: ${err}`);
          buffer453 = fs.readFileSync(ran);
          zee.sendMessage(from, buffer453, audio, {
          mimetype: "audio/mp4",
          quoted: mek,
          });      
          fs.unlinkSync(ran);
          limitAdd(sender, limit)
          });
          break;          
    case "fast":    
          if (isBanned) return reply(mess.ban)        
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (!isQuotedVideo) return reply("Reply videonya!");
          reply(mess.wait);
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
          media = await zee.downloadAndSaveMediaMessage(encmedia);
          ran = getRandom(".mp4");
          exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`,
          (err) => {
          fs.unlinkSync(media);
          if (err) return fakegroup(`Err: ${err}`);
          buffer453 = fs.readFileSync(ran);
          zee.sendMessage(from, buffer453, video, {
          mimetype: "video/mp4",
          quoted: mek,
          });
          fs.unlinkSync(ran);
          limitAdd(sender, limit)
          }
          );
          break;
    case "slow":            
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (!isQuotedVideo) return reply("Reply videonya!");
          reply(mess.wait);
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
          media = await zee.downloadAndSaveMediaMessage(encmedia);
          ran = getRandom(".mp4");
          exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`,
          (err) => {
          fs.unlinkSync(media);
          if (err) return fakegroup(`Err: ${err}`);
          buffer453 = fs.readFileSync(ran);
          zee.sendMessage(from, buffer453, video, {
          mimetype: "video/mp4",
          quoted: mek,
          });
          fs.unlinkSync(ran);
          limitAdd(sender, limit)
          }
          );
          break;
    case "reverse":            
          if (isBanned) return reply(mess.ban)
          if (!isQuotedVideo) return reply("Reply videonya!");
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
          media = await zee.downloadAndSaveMediaMessage(encmedia);
          ran = getRandom(".mp4");
          exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return fakegroup(`Err: ${err}`);
          buffer453 = fs.readFileSync(ran);
          zee.sendMessage(from, buffer453, video, {
          mimetype: "video/mp4",
          quoted: mek,
          });
          fs.unlinkSync(ran);
          limitAdd(sender, limit)
          });
          break;      
    case 'bass':             
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (!isQuotedAudio) return reply('Reply Audionya')
	   	  encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		  media = await zee.downloadAndSaveMediaMessage(encmedia)
		  ran = getRandom('.mp3')
		  exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
		  fs.unlinkSync(media)
		  if (err) return reply('Error!')
		  hah = fs.readFileSync(ran)
		  zee.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
	      fs.unlinkSync(ran)
	      limitAdd(sender, limit)
		  })
		  break
    case 'nightcore':            
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
      	  if (!isQuotedAudio) return reply('Reply Audionya')
		  night = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		  core = await zee.downloadAndSaveMediaMessage(night)
		  ran = getRandom('.mp3')
		  reply(mess.wait)
		  exec(`ffmpeg -i ${core} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
		  fs.unlinkSync(core)
		  if (err) return reply('Error!')
		  hah = fs.readFileSync(ran)
		  zee.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:false, quoted: mek, ptt: true})
		  fs.unlinkSync(ran)
		  limitAdd(sender, limit)
		  })
	      break
    case 'gemuk':            
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (!isQuotedAudio) return reply('Reply Audionya')
		  encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		  media = await zee.downloadAndSaveMediaMessage(encmedia)
	      ran = getRandom('.mp3')
		  exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
	      fs.unlinkSync(media)
		  if (err) return reply('Error!')
		  hah = fs.readFileSync(ran)
		  zee.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
		  fs.unlinkSync(ran)
		  limitAdd(sender, limit)
	 	  })
		  break
    case 'tupai':           
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (!isQuotedAudio) return reply('Reply Audionya')
		  encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		  media = await zee.downloadAndSaveMediaMessage(encmedia)
		  ran = getRandom('.mp3')
		  exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
		  fs.unlinkSync(media)
		  if (err) return reply('Error!')
		  hah = fs.readFileSync(ran)
		  zee.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
		  fs.unlinkSync(ran)
		  limitAdd(sender, limit)
		  })
		  break
    case 'slow2':            
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (!isQuotedAudio) return reply('Reply Audionya')
		  encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		  media = await zee.downloadAndSaveMediaMessage(encmedia)
		  ran = getRandom('.mp3')
  	      exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
		  fs.unlinkSync(media)
	      if (err) return reply('Error!')
	      hah = fs.readFileSync(ran)
	      zee.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
		  fs.unlinkSync(ran)
		  limitAdd(sender, limit)
		  })
		  break 
//===Up SW		   
    case 'upswteks':
          if (isBanned) return reply(mess.ban)
          if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
          if (args.length < 1) return reply('Teksnya?')
          teks = body.slice(10)
          zee.sendMessage('status@broadcast', teks, MessageType.text)
          reply(`Sukses upload status:\n${teks}`)
          break	
    case 'upswlokasi':
          if (isBanned) return reply(mess.ban)
          if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
          if (args.length < 1) return reply('Teksnya?')
          teks = body.slice(12)
          zee.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`${fakeyoi}`}, MessageType.location)
          reply(`Sukses upload lokasi:\n${teks}`)
          break	
    case 'upswsticker':
          if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
          if (!isQuotedSticker) return reply('Reply stikernya!')
          if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
	      const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
	      buff = await zee.downloadMediaMessage(encmedia)
	 	  zee.sendMessage('status@broadcast', buff, sticker)
	      }
		  reply(`Sukses upload sticker`)
          break
    case 'upswaudio':
          if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
          if (!isQuotedAudio) return reply('Reply audionya!')
          if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
	      const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
	      buff = await zee.downloadMediaMessage(encmedia)
	      zee.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
		  }
		  reply(`Sukses upload audio`)
		  break
    case 'upswvoice':
          if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerBl)
          if (!isQuotedAudio) return reply('Reply audionya!')
          if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
		  const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
          buff = await zee.downloadMediaMessage(encmedia)
		  zee.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
	 	  }
		  reply(`Sukses upload voice`)
		  break
    case 'upswvideo':
          if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
          var konti = body.slice(11)
          reply(mess.wait)
          var enmediap = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	      var mediap = await zee.downloadAndSaveMediaMessage(enmediap)
          const buffer3 = fs.readFileSync(mediap)
          zee.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
          reply(`Sukses upload video:\n${konti}`)
          break
    case 'upswgif':
          if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
          var konti = body.slice(7)
          reply(mess.wait)
          enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	      media = await zee.downloadAndSaveMediaMessage(enmedia)
          const buffer6 = fs.readFileSync(media)
          zee.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
          reply(`Sukses upload gif:\n${konti}`)
          break
    case 'upswimage':
          if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
          var teksyy = body.slice(11)
          reply(mess.wait)
          enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	      media = await zee.downloadAndSaveMediaMessage(enmedia)
          buffer = fs.readFileSync(media)
          zee.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: mek, caption: `${teksyy}`})
          reply(`Sukses upload image:\n${teksyy}`)
          break		   
//»»»𝘎𝘳𝘰𝘱 𝘔𝘦𝘯𝘶	
    case 'epen':
          if (isBanned) return reply(mess.ban)
		  if (!isGroup) return reply(mess.only.group)
	      if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
		  if (args.length < 1) return reply('Boo :𝘃')
		  if (Number(args[0]) === 1) {
		  if (isEventon) return reply('*SUDAH AKTIF* !!!')
		  event.push(from)
		  fs.writeFileSync('./lib/data/event.json', JSON.stringify(event))
		  reply('*❬ SUKSES ❭ MENGAKTIFKAN EVENT DI GRUB INI*')
		  } else if (Number(args[0]) === 0) {
		  event.splice(from, 1)
		  fs.writeFileSync('./lib/data/event.json', JSON.stringify(event))
		  reply('*❬ SUKSES ❭ MENONAKTIFKAN EVENT DI GRUB INI*')
		  } else {
		  reply('eeee')
		  }										
		  break  
    case 'nww':
          if (isBanned) return reply(mess.ban)
		  if (!isGroup) return reply(mess.only.group)
	      if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
		  if (args.length < 1) return reply('Boo :𝘃')
		  if (Number(args[0]) === 1) {
		  if (isNsfw) return reply('*SUDAH AKTIF* !!!')
		  nsfww.push(from)
		  fs.writeFileSync('./lib/data/nsfw.json', JSON.stringify(nsfww))
		  reply('*❬ SUKSES ❭ MENGAKTIFKAN NSFW DI GRUB INI*')
		  } else if (Number(args[0]) === 0) {
		  nsfww.splice(from, 1)
		  fs.writeFileSync('./lib/data/nsfw.json', JSON.stringify(nsfww))
		  reply('*❬ SUKSES ❭ MENONAKTIFKAN EVENT DI GRUB INI*')
		  } else {
		  reply('eeee')
		  }										
		  break		            
    case 'wel':   
          if (isBanned) return reply(mess.ban)
          if (!isGroup) return reply(mess.only.group)
          if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
          if (args.length < 1) return reply(`Ketik :\n${prefix}welcome on untuk mengaktifkan\n${prefix}welcome off untuk menonaktifkan`)
          if ((args[0]) === 'on') {
          if (isWelkom) return reply('welcome sudah aktif')
          _welkom.push(from)
          fs.writeFileSync('./lib/data/welcome.json', JSON.stringify(_welkom))
          reply(`\`\`\`✓Sukses mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
          } else if ((args[0]) === 'off') {
          if (!isWelkom) return reply('welcome sudah off sebelumnya')
          _welkom.splice(from, 1)
          fs.writeFileSync('./lib/data/welcome.json', JSON.stringify(_welkom))
          reply(`\`\`\`Sukses menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
          } else {
          reply('on untuk mengaktifkan, off untuk menonaktifkan')
          }
          break		           		              	  
    case 'modesimi':
          if (args.length < 1) return reply('hmm')
          if (Number(args[0]) === 1) {
          simin.push(from)
          fs.writeFileSync('./lib/data/simi.json', JSON.stringify(simin))
          reply('Sukses mengaktifkan mode simi')
          } else if (Number(args[0]) === 0) {
          simin.splice(from, 1)
          fs.writeFileSync('./lib/data/simi.json', JSON.stringify(simin))
          reply('Sukes menonaktifkan mode simi')
          } else {
          reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
          }
          break
    case 'anti':
	  	  if (!isGroup) return sticBanned(from)
		  if (!isGroupAdmins && !isOwner) return sticAdmin(from)
	      if (!isBotGroupAdmins) return sticBotAdmin(from)
		  if (args.length < 1) return reply(`On untuk mengaktifkan & off untuk menonaktifkan`)
		  if ((args[0]) === 'on') {
		  if (isAnti) return reply('Antilink aktif')
		  _antilink.push(from)
	  	  fs.writeFileSync('./lib/data/antilink.json', JSON.stringify(_antilink))
		  reply(`Mengaktifkan fitur anti link di group *${groupMetadata.subject}*`)
		  } else if ((args[0]) === 'off') {
		  if (!isAnti) return reply('Antilink off')
		  _antilink.splice(from, 1)
	      fs.writeFileSync('./lib/data/antilink.json', JSON.stringify(_antilink))
		  reply(`Menonaktifkan fitur anti link di group *${groupMetadata.subject}*`)
		  } else {
	      reply('On untuk mengaktifkan & off untuk menonaktifkan')
	      }
	 	  break
    case 'opengc':
     	  if (!isGroup) return sticGroup(from)
	      if (!isOwner && !isGroupAdmins) return sticAdmin(from)
          if (!isBotGroupAdmins) return sticBotAdmin(from)
          reply(`Sukses Membuka Grup ${groupName}`)
		  zee.groupSettingChange(from, GroupSettingChange.messageSend, false)
		   break
     case 'closegc':
		   if (!isGroup) return sticGroup(from)
		   if (!isOwner && !isGroupAdmins) return sticAdmin(from)
           if (!isBotGroupAdmins) return sticBotAdmin(from)
		   reply(`Sukses Menutup Grup ${groupName}`)
		   zee.groupSettingChange(from, GroupSettingChange.messageSend, true)
		   break   	 	   
     case "groupinfo": case 'gcinfo': case 'infogc':       	       
           if (!isGroup) return sticGroup(from)
           sticLoad(from)
           ppUrl = await zee.getProfilePicture(from); // leave empty to get your own
           buffergbl = await getBuffer(ppUrl);
           zee.sendMessage(from, buffergbl, image, {
           quoted: mek,
           caption: `\`\`\`「 Group Info 」\`\`\`\n\n*•> Name* : ${groupName}\n*•> Member* : ${groupMembers.length}\n*•> Admin* : ${groupAdmins.length}\n*•> Description* : \n${groupDesc}`,
           });
           break;
     case 'setdesc':
           if (!isGroup) return sticGroup(from)
           if (!isOwner && !isGroupAdmins) return sticAdmin(from)
           if (!isBotGroupAdmins) return sticBotAdmin(from)
           if (args.length < 1) return reply(`Ketik *${prefix}setdesc Isi* Buat Edit Desc Grup`)
           teks = body.slice(9)
           zee.groupUpdateDescription(from, teks)
           break	       
   	 case 'setppgc': 
           if (!isGroup) return sticGroup(from)
           if (!isOwner && !isGroupAdmins) return sticAdmin(from)
           if (!isBotGroupAdmins) return sticBotAdmin(from)
           media = await zee.downloadAndSaveMediaMessage(mek)
           await zee.updateProfilePicture (from, media)
           reply('[SUKSES] Mengganti icon grub')
	  	   break
   	 case 'setname':
           if (!isGroup) return sticGroup(from)
    	   if (!isOwner && !isGroupAdmins) return sticAdmin(from)
		   if (!isBotGroupAdmins) return sticBotAdmin(from)
           zee.groupUpdateSubject(from, `${body.slice(9)}`)
           reply('Succes, Ganti Nama Grup')	  	   
 	  case 'add':
	       if (!isGroup) return reply(mess.only.bot)
		   if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
		   if (!isBotGroupAdmins) return reply(mess.only.bot)
	       if (args.length < 1) return reply('Yang mau di add jin ya?')
		   if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
		   try {
		   num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
		   zee.groupAdd(from, [num])
	       } catch (e) {
	  	   console.log('Error :', e)
	 	   reply('Gagal menambahkan target, mungkin karena di private')
		   }
		   break
     case 'kick':
		   if (!isGroup) return reply(mess.only.group)
		   if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
		   if (!isBotGroupAdmins) return reply(`bot harus admin`)
		   if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
		   mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
		   if (mentioned.length > 1) {
		   teks = ''
		   for (let _ of mentioned) {
		   teks += `asek dapat makanan,otw mengkickmu, 🏃sksks :\n`
		   teks += `@_.split('@')[0]`
		   }
		   mentions(teks, mentioned, true)
		   zee.groupRemove(from, mentioned)
		   } else {
		   mentions(`asek dapat makanan,otw mengkickmu, @${mentioned[0].split('@')[0]} 🏃`, mentioned, true)
		   zee.groupRemove(from, mentioned)
		   }
		   break		   
	 case 'demote':
		   if (!isGroup) return reply(mess.only.group)
		   if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
		   if (!isBotGroupAdmins) return reply(mess.only.bot)
		   if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
	       mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
		   if (mentioned.length > 1) {
	 	   teks = ''
		   for (let _ of mentioned) {
		   teks += `Status adminmu dicopot. Makanya jan jadi sider🏃 :\n`
	 	   teks += `@_.split('@')[0]`
		   }
		   mentions(teks, mentioned, true)
	 	   zee.groupDemoteAdmin(from, mentioned)
		   } else {
		   mentions(`YA HAHAHA  WAHYU @${mentioned[0].split('@')[0]} Jabatan adminmu di copt, Makanya jan jadi sider🏃`, mentioned, true)
	  	   zee.groupDemoteAdmin(from, mentioned)
		   }
	       break
	 case 'promote':
		   if (!isGroup) return reply(mess.only.group)
	       if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
	       if (!isBotGroupAdmins) return reply(mess.only.bot)
		   if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
		   mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
		   if (mentioned.length > 1) {
		   teks = ''
		   for (let _ of mentioned) {
		   teks += `Selamat🥳 anda naik menjadi admin grub (+_+) :\n`
		   teks += `@_.split('@')[0]`
		   }
		   mentions(teks, mentioned, true)
		   zee.groupMakeAdmin(from, mentioned)
		   } else {
		   mentions(`selamat🥳 @${mentioned[0].split('@')[0]} anda naik menjadi admin grub (+_+)`, mentioned, true)
		   zee.groupMakeAdmin(from, mentioned)
		   }
		   break
     case 'revoke': case 'risetgc': case 'resetlink':
     case 'revokegroup': case 'revokelink': {
           if (!isGroup) return reply(mess.only.group)
           if (!isGroupAdmins)return reply(mess.only.admin)
           if (!isBotGroupAdmins) return reply(mess.only.bot)
           var linkgc = await zee.revokeInvite(from)
           mentions(`Link Group Berhasil direset oleh admin @${sender.split('@')[0]}`, [sender], true)
           }
           break
     case 'linkgc': case 'link':
     case 'linkgroup':
           linkgc = await zee.groupInviteCode(from)
           reply('https://chat.whatsapp.com/'+linkgc)  
           break         	   
     case 'join':case 'joingc':
		   if (args.length < 1) return reply(`link broo?*`)
		   if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
		   if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('gkvalid..')
	       reply('Tunggu Sebentar..')
		   link = args[0].replace('https://chat.whatsapp.com/','')
	  	   fak = zee.query({ json: ['action', 'invite', link],
		   expect200: true })
		   reply('Berhasil Masuk Grup')
           break		
     case 'delete': case 'del': case 'D':
	       if (!isGroup)return reply(mess.only.group)
	       sticLoad(from)
		   try {
		   zee.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
		   } catch (e) {
		   reply('Hanya bisa menghapus pesan dariku')
	  	   }
		   break  
    case 'hidetag':
          if (!isGroup) return sticGroup(from)
          if (!isOwner && !isGroupAdmins) return sticAdmin(from)
    	  var value = args.join(' ')
		  var group = await zee.groupMetadata(from)
		  var member = group['participants']
		  var mem = []
    	  member.map(async adm => {
		  mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		  })
		  var optionshidetag = {
	      text: value,
		  contextInfo: { mentionedJid: mem },
		  quoted: mek
	      }
	      zee.sendMessage(from, optionshidetag, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "393470602054-1351628616@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption":'#IZIN NGETAG',"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": tamnel} }  } })
	      break
    case 'tagall':
		  if (!isGroup) return sticGroup(from)
		  if (!isOwner && !isGroupAdmins) return sticAdmin(from)
		  members_id = []
		  teks = `🎌 Group : *${groupName}*\n\n➲ *📢Pesan!! : ${q ? q : 'Nothing'}*\n\n💫 Jumlah member : *${groupMetadata.participants.length}*\n\n┌───⊷ *TAG ALL* ⊶\n`
		  for (let mem of groupMembers) {
		  teks += `├> @${mem.jid.split('@')[0]}\n`
	   	  members_id.push(mem.jid)
		  }
		  teks += `└──────────────`
	 	  mentions(teks, members_id, true)
		  break	
    case 'demoteall':
	      if (!isOwner && !mem.key.fromMe) return reply(mess.only.owner)
		  if (!isGroup) return reply(mess.only.group)
		  if (!isBotGroupAdmins) return reply(mess.only.bot)
          members_id = []
		  for (let mem of groupMembers) {
	   	  members_id.push(mem.jid)
	  	  }
          zee.groupDemoteAdmin(from, members_id)
          break
    case 'promoteall':
		  if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
		  if (!isGroup) return reply(mess.only.group)
		  if (!isBotGroupAdmins) return reply(mess.only.bot)
          members_id = []
		  for (let mem of groupMembers) {
	  	  members_id.push(mem.jid)
	  	  }
          zee.groupMakeAdmin(from, members_id)
          break		  	        
          
case 'absen':
global.db.data.absen = global.db.data.absen || {} 
if (!(from in global.db.data.absen)) return alpha.send1ButMes(m.chat, `Tidak ada absen berlangsung di group ini !`, `© ${ownername}`, `absenstart`, `Mulai Absen`, m)

let absen = global.db.data.absen[from][1] 
const wasVote = absen.includes(m.sender) 
if (wasVote)return reply('Kamu sudah absen!')
absen.push(m.sender) 
let d = new Date 
let date = d.toLocaleDateString('id', { 
  day: 'numeric', 
  month: 'long', 
  year: 'numeric' 
}) 
let list = absen.map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n') 
let caption = `Tanggal: ${date}
${global.db.data.absen[from][2] ? global.db.data.absen[from][2] + '\n' : ''}
*--------「 DAFTAR ABSEN 」--------*
${list}

Total: ${absen.length}
`.trim()
await alpha.send2ButMes(m.chat, caption, `© ${ownername}`, `absen`, `Absen`, `cekabsen`, `Cek Absen`, m, absen)

//alpha.sendTextWithMentions(m.chat, caption, m)
break
case 'cekabsen':{
global.db.data.absen = global.db.data.absen || {}
if (!(from in global.db.data.absen))return alpha.send1ButMes(m.chat, `Tidak ada absen berlangsung di group ini !`, `© ${ownername}`, `absenstart`, `Mulai Absen`, m)

let dd = new Date 
let datee = dd.toLocaleDateString('id', { 
  day: 'numeric', 
  month: 'long', 
  year: 'numeric' 
}) 
let absenn = global.db.data.absen[from][1] 
let listt = absenn.map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n') 
let captionn = `Tanggal: ${datee}
${global.db.data.absen[from][2] ? global.db.data.absen[from][2] + '\n' : ''}
*--------「 DAFTAR ABSEN 」--------*
${listt}

Total: ${absenn.length}
`.trim()
alpha.send2ButMes(m.chat, captionn, `© ${ownername}`, `absen`, `Absen`, `deleteabsen`, `Hapus Absen`, m, absenn)

//alpha.sendTextWithMentions(m.chat, captionn, m)
}
break

case 'delabsen': case 'deleteabsen':{
if (m.isGroup) { 
  if (!(isGroupAdmins || isCreator))return reply(lang.adminOnly())
  } 
  global.db.data.absen = global.db.data.absen || {}
  if (!(from in global.db.data.absen))return alpha.send1ButMes(m.chat, `Tidak ada absen berlangsung di group ini !`, `© ${ownername}`, `absenstart`, `Mulai Absen`, m)

  delete global.db.data.absen[from]
reply(`Absen berhasil dihapus`)
}
break
case 'absenstart': case 'mulaiabsen':{
if (m.isGroup) { 
  if (!(isGroupAdmins || isCreator))return reply(lang.adminOnly())
} 
global.db.data.absen = global.db.data.absen || {}
if (from in global.db.data.absen)return alpha.send2ButMes(m.chat, `Masih ada sesi absen di group ini !`, `© ${ownername}`, `cekabsen`, `Cek Absen`, `deleteabsen`, `Hapus Absen`, m)

global.db.data.absen[from] = [
  await alpha.send1ButMes(m.chat, `Absen dimulai...`, `© ${ownername}`, `absen`, `Absen`, m),

  [], q ? q : '']
  }
break    		           
//»»»𝘋𝘰𝘸𝘭𝘰𝘢𝘥𝘦𝘳 𝘔𝘦𝘯𝘶     									

    case 'play':
          if (isBanned) return sticBanned(from)
          if (args.length < 1) return reply(`Kirim perintah *${prefix}play query*`)
          sticLoad(from)
          let yut = await yts(v)
          yta(yut.videos[0].url)             
          .then(async(res) => {
          var { thumb, title, filesizeF, filesize } = res
          var capti = `𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗣𝗟𝗔𝗬🍁\n•💬 Judul : ${yut.all[0].title}\n•🎥 ID Video : ${yut.all[0].videoId}\n•⏰️ Diupload Pada : ${yut.all[0].ago}\n•👁️️ Views : ${yut.all[0].views}\n•▶️ Durasi : ${yut.all[0].timestamp}\n•📍 Channel : ${yut.all[0].author.name}\n•🔗 Link Channel : ${yut.all[0].author.url}\n•⚡ Link Video : ${yut.videos[0].url}`
          ya = await getBuffer(thumb)
          py =await zee.prepareMessage(from, ya, image)
          sendButloc(from,monospace(capti),'',`*select the type you want to download*`,[{buttonId: `!ytmp3 ${yut.all[0].url}`, buttonText: {displayText: 'AUDIO'}, type: 1},
          {buttonId: `!ytmp4 ${yut.all[0].url}`, buttonText: {displayText: 'VIDEO'}, type: 1}],null,null,ya)
          }).         
          break      
    
    case 'ytmp3':                  
          if (isBanned) return sticBanned(from)
          if (args.length < 1) return reply(`Kirim perintah *${prefix}ytmp3 link*`)
          sticLoad(from)
          get_dl = await fetchJson(`http://hadi-api.herokuapp.com/api/yt2/audio?url=${v}`)
          mp3 = await getBuffer(get_dl.result.download_audio)
          hm = `*Judul* : ${get_dl.result.title}\n*Size* : ${get_dl.result.size}\n*Resolution* : ${get_dl.result.resolution}`
          await zee.sendMessage(from, mp3, audio, { mimetype: 'audio/mp4', filename: `${get_dl.result.title}.mp3`, quoted: mek}).catch(e => {
          reply('Gagal Dalam Mendownload Lagu')
          })      
          break
    case 'ytmp4':
          if (isBanned) return sticBanned(from)
          if (args.length < 1) return reply(`Kirim perintah *${prefix}ytmp4 link*`)
          sticLoad(from)
          get_hasil = await fetchJson(`http://hadi-api.herokuapp.com/api/yt2/video?url=${v}`)
          mp4 = await getBuffer(get_hasil.result.download_video)
          hm = `*Judul* : ${get_hasil.result.title}\n*Size* : ${get_hasil.result.size}\n*Resolution* : ${get_hasil.result.resolution}`
          await zee.sendMessage(from, mp4, video, { mimetype: 'video/mp4', filename: `${get_hasil.result.title}.mp3`, quoted: mek,caption:hm}).catch(e => {
          reply('Gagal Dalam Mendownload Lagu')
          })
          break
    
    case 'tiktokdl': case 'ttdl': case 'tiktokmp4': case 'tiktok':    	        	
          if (isBanned) return sticBanned(from)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
 	      if (!isUrl(args[0]) && !args[0].includes('tiktok')) return reply(mess.Iv)
 	      if (!v) return reply('Link?')
 		  sticLoad(from)
		  hx.ttdownloader(`${args[0]}`)
    	  .then(result => {
          const { wm, nowm, audio } = result
          axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
          .then(async (a) => {
    	  me = fake
	      zee.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:mek,caption:me})
	      limitAdd(sender, limit)
          })
		  })
		  break
    case "twitter":
          if (isBanned) return sticBanned(from)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
           if (!isUrl(args[0]) && !args[0].includes("twitter.com"))
           return reply(mess.error.url);
           sticLoad(from)
           if (!v) return fakegroup("Linknya?");
           ten = args[0];
           var res = await hx.twitter(`${ten}`);
           ren = `${g.HD}`;
           sendMediaURL(from, ren, "Nih kak video nya!!");
           limitAdd(sender, limit)
           break;
     case "facebook":
           if (isBanned) sticBanned(from)
           if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
           if (!v) return reply("Linknya?");
           if (!isUrl(args[0]) && !args[0].includes("facebook.com"))
           return reply(mess.error.url);
           sticLoad(from)
           te = args.join(" ");
           hx.fbdown(`${te}`).then((G) => {
           ten = `${G.HD}`;
           sendMediaURL(from, ten, `*Link video_normal* : ${G.Normal_video}`).catch(e => {
           reply(mess.error.sc)
           })
           limitAdd(sender, limit)
           });
           break;
     case "instagram":
           if (isBanned) sticBanned(from)
           if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
           if (!isUrl(args[0]) && !args[0].includes("instagram.com"))
           return reply(mess.error.url);
           if (!v) return reply("Linknya?");
           sticLoad(from)
           hx.igdl(args[0]).then(async (result) => {
           for (let i of result.medias) {
           if (i.url.includes("mp4")) {
           let link = await getBuffer(i.url);
           zee.sendMessage(from, link, video, {
           quoted: mek,
           caption: `Type : ${i.type}`,
           });
           } else {
           let link = await getBuffer(i.url);
           zee.sendMessage(from, link, image, {
           quoted: mek,
           caption: `Type : ${i.type}`,
           });
           }
           }
           });
           limitAdd(sender, limit)
           break;		  		  
    case 'mediafire':
          if (isBanned) return sticBanned(from)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length < 1) return reply('Link Nya Mana? ')
          if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
          sticWait(from)
          teks = args.join(' ')
          res = await mediafireDl(teks)
          result = monospace(`❒「  MediaFire  」\n• Nama : ${res[0].nama}\n• Ukuran : ${res[0].size}\n• Link : ${res[0].link}`)
          but = [
           { buttonId: `!dwd`, buttonText: { displayText: 'DOWNLOAD️' }, type: 1 }]
          sendButton(from, result, 'MediaFire Downloader', but, troli)
          break
          case 'dwd':
          sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek}).catch(e => {
          reply('Error Dalam Mendownload File')
          })
          limitAdd(sender, limit)
          break
//+++Random
    case 'waifu': case 'loli': case 'husbu': case 'milff': case 'cosplay': case 'wallml':
          if (isBanned) return sticBanned(from)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          sticWait(from)
          let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
          let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
          fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
    	  var bb = await zee.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), MessageType.image)
          var buttonnsss = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'Next️'}, type: 1}]
          var ButtonssMessages = {
          contentText: `⛄ *Antum suka Dengan ${command}🤭?  Dia punya aing👻*`,
          buttons: buttonnsss,
          footerText: `Klik Next Untuk Melanjutkan`,
          headerType: 4,
          imageMessage: bb.message.imageMessage
          }
          await zee.sendMessage(from, ButtonssMessages, MessageType.buttonsMessage, {quoted : mek})
          fs.unlinkSync(`./${sender}.jpeg`)
          limitAdd(sender, limit)
          break   
    case 'waifu2':
          if (isBanned) return sticBanned(from)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)    
          sticWait(from)
          anu = await fetchJson(`https://api.waifu.pics/sfw/waifu`)
          img = await getBuffer(anu.url)
          but = [{ buttonId: `${prefix + command}`, buttonText: { displayText: 'NEXT' }, type: 1 }]
          sendButImage(from, `${command}`, `Klik Next Ngab`, img, but)
          limitAdd(sender, limit)
          break
    case 'nekochan':
          if (isBanned) return sticBanned(from)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)    
          sticWait(from)
          anu = await fetchJson(`https://api.waifu.pics/sfw/neko`)
          img = await getBuffer(anu.url)
          but = [{ buttonId: `${prefix + command}`, buttonText: { displayText: 'NEXT' }, type: 1 }]
          sendButImage(from, `${command}`, `Klik Next Ngab`, img, but)
          limitAdd(sender, limit)
          break          
   case  'nekochan2':
         if (isBanned) return sticBanned(from)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)   
          if (!isGroup) return sticGroup(from)
          sticWait(from)
          anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
          buffer = await getBuffer(anu.url)
          but = [{ buttonId: `${prefix + command}`, buttonText: { displayText: 'NEXT' }, type: 1 }]
          sendButImage(from, `${command}`, `Klik Next Ngab`, buffer, but)
          limitAdd(sender, limit)
          break
   case  'megumin':
         if (isBanned) return sticBanned(from)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)   
          if (!isGroup) return sticGroup(from)
          sticWait(from)
          anu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
          buffer = await getBuffer(anu.url)
          but = [{ buttonId: `${prefix + command}`, buttonText: { displayText: 'NEXT' }, type: 1 }]
          sendButImage(from, `${command}`, `Klik Next Ngab`, buffer, but)
          limitAdd(sender, limit)
          break                          
//»»»𝘔𝘢𝘬𝘦𝘳 𝘔𝘦𝘯𝘶          
  // Textprome //
    case 'blackpink':      case 'neon':
    case 'greenneon':     case 'advanceglow':
    case 'futureneon':    case 'sandwriting':
    case 'sandsummer':  case 'sandengraved':
    case 'metaldark':     case 'neonlight':
    case 'holographic':   case 'text1917':
    case 'minion':        case 'deluxesilver':
    case 'newyearcard':  case 'bloodfrosted':
    case 'halloween':     case 'jokerlogo':
    case 'fireworksparkle':case 'natureleaves':
    case 'bokeh':         case 'toxic':
    case 'strawberry':    case 'box3d':
    case 'roadwarning':  case 'breakwall':
    case 'icecold':        case 'luxury':
    case 'cloud':          case 'summersand':
    case 'horrorblood':   case 'thunder':
          if (isBanned) return sticBanned(from)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length == 0) return reply(`Example: ${prefix + command} zeebot`)
          sticWait(from)
          ini_txt = args.join(" ")
          getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${LomKey}&text=${ini_txt}`).then((gambar) => {
          zee.sendMessage(from, gambar, image, {quoted:mek, caption: 'Nih kak'}).catch(e => {
          reply(mess.error.api)
          console.log(e)
          })
          limitAdd(sender, limit)
          })
          break
          break
    case 'pornhub':      case 'glitch':
    case 'avenger':      case 'space':
    case 'ninjalogo':     case 'marvelstudio':
    case 'lionlogo':      case 'wolflogo':
    case 'steel3d':       case 'wallgravity':
          if (isBanned) return sticBanned(from)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length == 0) return reply(`Example: ${prefix + command} zeebot`)
          sticWait(from)
          txt1 = args[0]
          txt2 = args[1]
          getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${LomKey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
          zee.sendMessage(from, gambar, image, {quoted:mek, caption: 'Nih kak'}).catch(e => {
          reply(mess.error.api)
          console.log(e)
          })
          limitAdd(sender, limit)
          })
          break
         // Photo Oxy //
    case 'shadow':  case 'cup':
    case 'cup1':     case 'romance':
    case 'smoke':   case 'burnpaper':
    case 'lovemessage': case 'undergrass':
    case 'love':      case 'coffe':
    case 'woodheart': case 'woodenboard':
    case 'summer3d': case 'wolfmetal':
    case 'nature3d':   case 'underwater':
    case 'golderrose': case 'summernature':
    case 'letterleaves': case 'glowingneon':
    case 'fallleaves':   case 'flamming':
    case 'harrypotter': case 'carvedwood':
          if (isBanned) return sticBanned(from)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length == 0) return reply(`Example: ${prefix + command} zeebot`)
          sticWait(from)
          ini_txt = args.join(" ")
          getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${LomKey}&text=${ini_txt}`).then((gambar) => {
          zee.sendMessage(from, gambar, image, {quoted:mek, caption: 'Nih kak'}).catch(e => {
          reply(mess.error.api)
          console.log(e)
          })
          limitAdd(sender, limit)
          })
          break
    case 'arcade8bit':
    case 'battlefield4':
    case 'pubg':
          if (isBanned) return sticBanned(from)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length == 0) return reply(`Example: ${prefix + command} zeebot`)
          sticWait(from)
          txt1 = args[0]
          txt2 = args[1]      
          getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${LomKey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
           zee.sendMessage(from, gambar, image, {quoted:mek, caption: 'Nih kak'}).catch(e => {
          reply(mess.error.api)
          console.log(e)
          })
          limitAdd(sender, limit)
          })          
          break
          // Ephoto 360 //
    case 'wetglass':     case 'multicolor3d':
    case 'watercolor':    case 'luxurygold':
    case 'galaxywallpaper':  case 'lighttext':
    case 'beautifulflower':  case 'puppycute':
    case 'royaltext':      case 'heartshaped':
    case 'birthdaycake':  case 'galaxystyle':
    case 'hologram3d':  case 'greenneon':
    case 'glossychrome': case 'greenbush':
    case 'metallogo':    case 'noeltext':
    case 'glittergold':    case 'textcake':
    case 'starsnight':    case 'wooden3d':
    case 'textbyname':  case 'writegalacy':
    case 'galaxybat':    case 'snow3d':
    case 'birthdayday':  case 'goldplaybutton':
    case 'silverplaybutton': case 'freefire':
          if (isBanned) return sticBanned(from)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length == 0) return reply(`Example: ${prefix + command} zeebot`)
          sticWait(from)
          ini_txt = args.join(" ")      
          getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${LomKey}&text=${ini_txt}`).then((gambar) => {
          zee.sendMessage(from, gambar, image, {quoted:mek, caption: 'Nih kak'}).catch(e => {
          reply(mess.error.api)
          console.log(e)
          })
          limitAdd(sender, limit)
          })
          break
                         
          
case  'blowjob':
      if (isBanned) sticBanned(from)
if (!isGroup) return sticGroup(from)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
if (!isPremium) return reply('Anda Bukan User VIP') 
sticWait(from)
anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
img = await getBuffer(anu.url)
          but = [{ buttonId: `${prefix + command}`, buttonText: { displayText: 'NEXT' }, type: 1 }]
          sendButImage(from, `${command}`, `Klik Next Ngab`, img, but)
          limitAdd(sender, limit)
break
case  'hentai': 
      if (isBanned) return sticBanned(from)
if (!isGroup) return sticGroup(from)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
sticWait(from)
anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
img = await getBuffer(anu.url)
          but = [{ buttonId: `${prefix + command}`, buttonText: { displayText: 'NEXT' }, type: 1 }]
          sendButImage(from, `${command}`, `Klik Next Ngab`, img, but)
          limitAdd(sender, limit)
break
case  'milf':
case 'neko':
case 'Neko':
if (isBanned) return sticBanned(from)
if (!isGroup) return sticGroup(from)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
sticWait(from)
anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
img = await getBuffer(anu.url)
          but = [{ buttonId: `${prefix + command}`, buttonText: { displayText: 'NEXT' }, type: 1 }]
          sendButImage(from, `${command}`, `Klik Next Ngab`, img, but)
          limitAdd(sender, limit) 
break
case  'trapnime':
      if (isBanned) return sticBanned(from)
if (!isGroup) return sticGroup(from)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
if (!isPremium) return reply('Anda Bukan User VIP') 
sticWait(from)
anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
img = await getBuffer(anu.url)
          but = [{ buttonId: `${prefix + command}`, buttonText: { displayText: 'NEXT' }, type: 1 }]
          sendButImage(from, `${command}`, `Klik Next Ngab`, img, but)
          limitAdd(sender, limit)
break

    case 'ahegao':
    case 'ass':
    case 'bdsm':
    case 'cuckold':
    case 'cum':
    case 'ero':
    case 'femdom':
    case 'foot':
    case 'glasses':
    case 'jahy':
    case 'yuri':
    case 'manga':
    case 'pussy':
    case 'thighs':
          if (isBanned) return sticBanned(from)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (!isGroup) return sticGroup(from)
          if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)       
function _0x1a28(_0x4bbb5c,_0x7612f){var _0x4fba6e=_0x4fba();return _0x1a28=function(_0x1a282e,_0x173fcf){_0x1a282e=_0x1a282e-0x194;var _0x61baf=_0x4fba6e[_0x1a282e];return _0x61baf;},_0x1a28(_0x4bbb5c,_0x7612f);}var _0x1616de=_0x1a28;(function(_0x46840e,_0x5bd52){var _0x247235=_0x1a28,_0x10bbf7=_0x46840e();while(!![]){try{var _0x10dd73=-parseInt(_0x247235(0x19a))/0x1*(parseInt(_0x247235(0x19f))/0x2)+-parseInt(_0x247235(0x19e))/0x3*(parseInt(_0x247235(0x19d))/0x4)+parseInt(_0x247235(0x194))/0x5*(-parseInt(_0x247235(0x19c))/0x6)+parseInt(_0x247235(0x1a0))/0x7*(parseInt(_0x247235(0x1a1))/0x8)+parseInt(_0x247235(0x199))/0x9*(parseInt(_0x247235(0x19b))/0xa)+-parseInt(_0x247235(0x198))/0xb*(-parseInt(_0x247235(0x195))/0xc)+parseInt(_0x247235(0x197))/0xd;if(_0x10dd73===_0x5bd52)break;else _0x10bbf7['push'](_0x10bbf7['shift']());}catch(_0x51d5c2){_0x10bbf7['push'](_0x10bbf7['shift']());}}}(_0x4fba,0x56a18));if(!isPremium)return reply('Anda\x20Bukan\x20User\x20VIP');function _0x4fba(){var _0xbcc374=['3570rlBrhY','4998DlcvEK','16DMYeFg','505017JPGSfr','2ArCEmS','4815629ztJvQL','8wKUzNe','215pNCnJO','300JNCplf','dosaaa','628589gCcRUs','107239jplziL','17370uFfJyh','605020SnRRMR'];_0x4fba=function(){return _0xbcc374;};return _0x4fba();}reply(_0x1616de(0x196)),limitAdd(sender,limit);
          break
          
//++Menunya          
    case 'allmenu': case 'm2':                        
          if (isBanned) return reply(mess.ban)
          but = [
           { buttonId: `!owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ️' }, type: 1 },
           { buttonId: `!sewa`, buttonText: { displayText: 'sᴇᴡᴀ' }, type: 1 }]
          sendButton(from, allmenu(), fake, but, troli)
          break 
    case 'ffshop':      
          var { epep } = require('./lib/shop/listsale.js')
          reply(epep())
          break
          
case 'menu':
      if (isBanned) return reply(mess.ban)
           if (modelmenu == "gakdiset") return reply('set menu dulu kali bang!!')
           	try {
					ppx = await zee.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					ppx = imgtobot
					}
					img = await getBuffer(ppx)
               menu =`# Hallo @${sender.split('@')[0]}
• Status User : ${premi}
• Limit User : ${isOwner ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
• Limit Game : ${isOwner ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
• Uang User : $${(getBalance(sender, balance))}
• Kasus Covid : ${copid[0].kasus}
• Kasus Sembuh : ${copid[0].sembuh}
• Kasus Kematian : ${copid[0].kematian}
• Nama Owner : ${Miminnya}
• Nama Bot : ${BotName}
• Mode : ${publik ? 'Public' : 'Self'}
• Runtime : ${runtime(process.uptime())}
• Total Chat : ${totalchat.length} Chat
• Total Pengguna : ${pendaftar.length} User
• Hit Today : ${hit_today.length} Hit
• Total Hit : ${totalhit} Hit
• Browser : ${zee.browserDescription[1]}
• Server : ${zee.browserDescription[0]}
• Version : ${zee.browserDescription[2]}
• Handphone : ${zee.user.phone.device_manufacturer}
• Speed :  ${latensi.toFixed(4)} Second
• Versi Whatsapp : ${zee.user.phone.wa_version}`
            if (modelmenu == "loc") {
            // menu button loc
            await sendButLocation(from, menu, fake, img, [{buttonId:`!allmenu`,buttonText:{displayText:'ALLMENU'},type:1},{buttonId:`!info`,buttonText:{displayText:'INFO'},type:1},{buttonId:`!info2`,buttonText:{displayText:'DEVINFO'},type:1}], {contextInfo: { mentionedJid:[senderr]}})
            } else if (modelmenu == "fyt") {
            // menu fake yt
                    var menx = monospace(`​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​• Status User : ${premi}
• Limit User : ${isOwner ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
• Limit Game : ${isOwner ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
• Uang User : $${(getBalance(sender, balance))}
• Kasus Covid : ${copid[0].kasus}
• Kasus Sembuh : ${copid[0].sembuh}
• Kasus Kematian : ${copid[0].kematian}
• Nama Owner : ${Miminnya}
• Nama Bot : ${BotName}
• Mode : ${publik ? 'Public' : 'Self'}
• Runtime : ${runtime(process.uptime())}
• Total Chat : ${totalchat.length} Chat
• Total Pengguna : ${pendaftar.length} User
• Hit Today : ${hit_today.length} Hit
• Total Hit : ${totalhit} Hit
• Browser : ${zee.browserDescription[1]}
• Server : ${zee.browserDescription[0]}
• Version : ${zee.browserDescription[2]}
• Handphone : ${zee.user.phone.device_manufacturer}
• Speed :  ${latensi.toFixed(4)} Second
• Versi Whatsapp : ${zee.user.phone.wa_version}`)
zee.sendMessage(from, {"contentText": menx,"footerText": `${fake}\n${wita} || ${tanggal()}`,
"buttons": [
{buttonId: `!info`, buttonText: {displayText: 'HOW?'}, type: 1},
{buttonId: `!allmenu`, buttonText: {displayText: 'ALLMENU‍️'}, type: 1},
{buttonId: `!sewa`, buttonText: {displayText: 'SEWA'}, type: 1}],
"headerType": "DOCUMENT", "documentMessage": {
            "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc",
            "mimetype": "application/pdf",
            "title": "NelBot.pdf",
            "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=",
            "fileLength": "1111",
            "pageCount": 1111,
            "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=",
            "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=",
            "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC",
            "mediaKeyTimestamp": "1634472176",         
  }}, MessageType.buttonsMessage,{ quoted: troli, sendEphemeral: true, contextInfo:{"forwardingScore":1111,"isForwarded":true, "externalAdReply":{"title": `Hai Kak ${pushname} ${ucapanWaktu}`, "body": 'susbcribe YouTube devoloper👑', mediaType: 2, thumbnail: fs.readFileSync('./media/fakeyt.jpg'),"previewType": "VIDEO","mediaUrl": `https://youtu.be/KnVIKuN3Q_w`}}})
  
} else if (modelmenu == 'catalog') {

           var imgs = await zee.prepareMessage('0@c.us', tamnel, image, { thumbnail: tamnel })
            var imgCatalog = imgs.message.imageMessage
            var ctlg = await zee.prepareMessageFromContent(from, {
            "productMessage": {
            "product": {
            "productImage": imgCatalog,
            "productId": "4457725420906655",
            "title": `THIS IS A MENU`,
            "description": allmenu(),
            "footerText": `メ${BotName}`,
            "currencyCode": "USD",
            "priceAmount1000": "0",
            "productImageCount": 1,
            "firstImageId": 1,
            "salePriceAmount1000": "0",
            "retailerId": `Please Use command Example : ${prefix}sticker`,
            "url": "blm ada"
            },
            "businessOwnerJid": `${ownerNumber}@s.whatsapp.net`,
            }
            }, { quoted: troli, mimetype: 'image/jpeg' })
            zee.relayWAMessage(ctlg)
}
break          

    case 'info':
      var { info } = require('./lib/info')          
      reply(info(pushname))
      zee.sendMessage(from, 'Tanyakan lebih lanjut ke owner', text)
case 'owner':
vcard3 = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'N:Sy;Bot;;;\n' +
            `FN:${Miminnya}\n` +
            `item1.TEL;waid=${ownerNumber}:${ownerNumber}\n` +
            `item1.X-ABLabel:👑 Creator\n` +
            `item2.EMAIL;type=INTERNET:febzabotzofc@gmail.com\n` +
            `item2.X-ABLabel:📧 Email\n` +
            `item3.URL:https://youtube.com/c/febzabotz/\n` +
            `item3.X-ABLabel:⚙️ Channel Owner\n` +
            `item4.ADR:;;🇮🇩 Indonesia;;;;\n` +
            `item4.X-ABADR:ac\n` +
            `item4.X-ABLabel:🌍 Region\n` +
            `item5.X-ABLabel:⚔️ Zee - Botz Owner\n` +
            'END:VCARD'.trim()
zee.sendMessage(from, {displayName: `Creator Febriansyah`, vcard: vcard3}, contact, 
{ quoted: troli, 
})
break

   default:

          if (isSimi && bodi != undefined){
          res = await axios.get(`https://api-sv2.simsimi.net/v2/?text=${bodi}&lc=id`)
          pp = res.data.success
          zee.sendMessage(from, pp, text)
          }

          if (budy.startsWith('>') && isOwner) {
          console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
	      try {
	      let evaled = await eval(budy.slice(2))
		  if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
		  Febriansyah(`${evaled}`)
	      } catch (err) {
	      reply(`${err}`)
		  }
		  } else if (budy.startsWith('x') && isOwner) {
console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
		  try {
	 	  return zee.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: mek })
	      } catch (err) {
		  e = String(err)
		  reply(e)
		  }
	      }
          }
		
    	  } catch (e) {
          e = String(e)
          if (!e.includes("this.isZero") && !e.includes("jid")) {
    	  console.log('ERROR TOD : %s', color(e, 'red'))
          }
    	  }
          }