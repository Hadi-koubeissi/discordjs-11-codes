const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://bg-bot.glitch.me/`);
}, 280000);
// كل البكجات الي ممكن تحتجها في اي بوت
const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const {TOKEN, YT_API_KEY, prefix, devs} = require('./config')
const client = new Client({ disableEveryone: true})
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const moment = require("moment");
const fs = require('fs');
const util = require("util")
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require('snekfetch');
const guild = require('guild');
const dateFormat = require('dateformat');//npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
//ستريم
client.on('ready', function(){
    var ms = 1000 ;
    var setGame = [`Server : ${client.guilds.size} | Members :${client.users.size}`,'bginvite,bghelp','BG | BOT','『Bloody Gaming ™','by Hadi" 🇱🇧 | iTs.Me'];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/barontube`);
    }, ms);
});
let spread = JSON.parse(fs.readFileSync('./spread.json' , 'utf8'));
 
 
client.on('message', message => {
    if(message.content.startsWith(prefix + "antispread off")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
spread[message.guild.id] = {
onoff: 'Off',
}
message.channel.send(`**⛔ The AntiSpread Is __𝐎𝐅𝐅__ !**`)
          fs.writeFile("./spread.json", JSON.stringify(spread), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }
 
        })
        client.on('message', message => {
    if(message.content.startsWith(prefix + "antispread on")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
spread[message.guild.id] = {
onoff: 'On',
}
message.channel.send(`**✅ The AntiSpread Is __𝐎𝐍__ !**`)
          fs.writeFile("./spread.json", JSON.stringify(spread), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }
 
        })
    client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('http://www.gmail.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
       if (!message.member.roles.some (role => role.name === "antispread")) {
      message.delete()
    return message.reply(`**⛔ The Antispread ON ! So You Cant spread Here !**`)
    }
    }
});
 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://www.snapchat.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
 
            }
        if(spread[message.guild.id].onoff === 'Off') return;
      if (!message.member.roles.some (role => role.name === "antispread")) { 
      message.delete()
    return message.reply(`**⛔ The Antispread ON ! So You Cant spread Here !**`)
      }
      }
});
 
 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://www.instagram.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
   if (!message.member.roles.some (role => role.name === "antispread")) {   
      message.delete()
    return message.reply(`**⛔ The Antispread ON ! So You Cant spread Here !**`)
   }  
   }
});
 
 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://www.twitter.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
       if (!message.member.roles.some (role => role.name === "antispread")) {
      message.delete()
    return message.reply(`**⛔ The Antispread ON ! So You Cant spread Here !**`)
    }
    }
    });
 
 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('http://www.facebook.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        if (!message.member.roles.some (role => role.name === "antispread")) {
      message.delete()
    return message.reply(`**⛔ The Antispread ON ! So You Cant spread Here !**`)
        }
        }
});
 
 
 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://www.youtube.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
       if (!message.member.roles.some (role => role.name === "antispread")) {
      message.delete()
    return message.reply(`**⛔ The Antispread ON ! So You Cant spread Here !**`)
    }
    }
});
 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://www.discordapp.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
     if (!message.member.roles.some (role => role.name === "antispread")) {  
      message.delete()
    return message.reply(`**⛔ The Antispread ON ! So You Cant spread Here !**`)
    }
    }
});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://discord.gg/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
     if (!message.member.roles.some (role => role.name === "antispread")) {  
      message.delete()
    return message.reply(`**⛔ The Antispread ON ! So You Cant spread Here !**`)
    }
    }
});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://youtu.be/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
     if (!message.member.roles.some (role => role.name === "antispread")) {
      message.delete()
    return message.reply(`**⛔ The Antispread ON ! So You Cant spread Here !**`)
    }
    }
});
 client.on('message', message => {

    var args = message.content.split(/[ ]+/)

    if(message.content.includes('https://m.facebook.com/')){

            if(!spread[message.guild.id]) spread[message.guild.id] = {

        onoff: 'Off'

            }

        if(spread[message.guild.id].onoff === 'Off') return;
if (!message.member.roles.some (role => role.name === "antispread")) {
        message.delete()

    return message.reply(`**⛔ The Antispread ON ! So You Cant spread Here !**`)

    }
    }
 

});

var Swears = JSON.parse(fs.readFileSync("./swears.json", "utf8"));
client.on('message', message => {
    var args = message.content.toLowerCase().split(' ');
    var args1 = args.slice(1).join(' ');
    var command = args[0];
    var prefix = 'bg'; // <====== تقدر تغير البرفكس
   
   
    if(Swears.some(word => message.content.toLowerCase().includes(word))) {
        if(message.member.hasPermission('ADMINISTRATOR')) return;
        message.delete();
        message.channel.send(`:no_entry: | Hey <@${message.author.id}>! Dont swear or you will get mute!`).then(msg => msg.delete(2000));
    }
   
   
    if(command == prefix + 'swears') {// حقوق الفا كودز & عبود
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(':no_entry: | You dont have **MANAGE_MESSAGES** Permission!');
        if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return message.channel.send(':no_entry: | I dont have **EMBED_LINKS** Permission!');
        if(Swears.length < 1) return message.channel.send(`:no_entry: | No swears words founds! \`\`If you want to add some words type ${prefix}add-swear <SWEAR>\`\``);
        var number = 1;// حقوق الفا كودز & عبود
       
        if(!args[1] || isNaN(args[1]) || args[1] === '1') {// حقوق الفا كودز & عبود
            if(Swears.length > 10) {
                var more = `\n__:sparkles: **More?** \`\`${prefix}swears 2\`\` (${Math.round(Math.round(Swears.length / 10) + 1)} pages)`;
            }else {
                var more = '\n__';
            }
           
            let swearsWords = new Discord.RichEmbed()// حقوق الفا كودز & عبود
            .setTitle(`:white_check_mark: **${Swears.length}** Swears Words.`)
            .setColor('RED')
            .setDescription(`__\n__${Swears.map(w => `**${number++}.** ${w}`).slice(0, 10).join('\n')}__\n${more}`)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.avatarURL)
           
            message.channel.send(swearsWords);
        }else if(!isNaN(args[1])) {// حقوق الفا كودز & عبود
            if(Swears.length < 10) {
                var morepage = 'This server have **1** Pages only.';
            }else {
                var morepage = `Please select page from 1 to ${Math.round(Swears.length / 10) + 1}`;
            }
            if(args[1] > Math.round(Swears.length / 10) + 1) return message.channel.send(`:no_entry: | I couldn\'t find the page. ${morepage}`);
          if(args[1] < 1) return message.channel.send(`:no_entry: | I couldn\'t find the page. ${morepage}`);// حقوق الفا كودز & عبود
          if(Swears.length > 10) {
              var more = `\n__:sparkles: **More?** \`\`${prefix}swears ${Math.round(args[1]) + 1}\`\` (${Math.round(Swears.length / 10) + 1} pages)`;
          }else {
              var more = '\n__';
          }
          if(args[1] === '5' && Swears.length > 40) more = '\n__';// حقوق الفا كودز & عبود
          var number = 1;
       
          let swearsWords = new Discord.RichEmbed()
          .setTitle(`:white_check_mark: **${Swears.length}** Swears Words.`)
          .setColor('RED')
          .setDescription(`__\n__${Swears.map(w => `**${number++}.** ${w}`).slice(10 * Math.round(args[1].replace('-', '')) - 10, 10 * Math.round(args[1].replace('-', ''))).join('\n')}__\n${more}`)
          .setTimestamp()
          .setFooter(message.author.tag, message.author.avatarURL)// حقوق الفا كودز & عبود
       
          message.channel.send(swearsWords);
      }
  }
 
 
  if(command == prefix + 'add-swear') {// حقوق الفا كودز & عبود
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: | You dont have **ADMINISTRATOR** Permission!');
      if(!args1) return message.channel.send(`**➥ Useage:** ${prefix}add-swear <SWEAR>`);
      if(Swears.length == 50) return message.channel.send(':no_entry: | Maxmium number of swears is **50**');
      if(args1.length > 30) return message.channel.send(`:no_entry: | The swear **${args1.length}** characters. Please try with characters less then **30**`);
   
      Swears.push(args1);// حقوق الفا كودز & عبود
      fs.writeFile('./swears.json', JSON.stringify(Swears), (err) => {
          if(err) console.error(err);
      })
      message.channel.send(`:white_check_mark: | Successfully added **${args1}** To swears words!`);
  }// حقوق الفا كودز & عبود
 
 
  if(command == prefix + 'remove-swear') {// حقوق الفا كودز & عبود
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: | You dont have **ADMINISTRATOR** Permission!');
      if(Swears.length < 1) return message.channel.send(`:no_entry: | No swears words founds to remove it! \`\`If you want to add some words type ${prefix}add-swear <SWEAR>\`\``);
      if(Swears.length == 1) {
          var to = 1;
      }else if(Swears.length > 1) {
          var to = `<1 to ${Swears.length}>`;// حقوق الفا كودز & عبود
      }
      if(!args[1]) return message.channel.send(`**➥ Useage:** ${prefix}remove-swear ${to}`);
       if(isNaN(args[1])) return message.channel.send(`:no_entry: | The args must be a number!`);
       if(args[1] > Swears.length) return message.channel.send(`:no_entry: | Please choose number from 1 to ${Swears.length}`);
   
      message.channel.send(`:white_check_mark: | Successfully remove **${Swears.splice(args[1] - 1, 1)}** from swears words`);
      fs.writeFile('./swears.json', JSON.stringify(Swears), (err) => {
          if(err) console.error(err);
      })
  }
 
 
  if(command == prefix + 'remove-all-swears') {// حقوق الفا كودز & عبود
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: | You dont have **ADMINISTRATOR** Permission!');
      if(Swears.length < 1) return message.channel.send(`:no_entry: | No swears words founds to remove it! \`\`If you want to add some words type ${prefix}add-swear <SWEAR>\`\``);
      message.channel.send(`:white_check_mark: | Successfully remove **${Swears.length}** Swears words!`);
      Swears = [];
      fs.writeFile('./swears.json', JSON.stringify(Swears), (err) => {
          if(err) console.error(err);
      })// حقوق الفا كودز & عبود
  }
});// حقوق الفا كودز & عبود
client.on('messageUpdate', (oldMessage, newMessage) => {
   if(Swears.some(word => newMessage.content.toLowerCase().includes(word))) {// حقوق الفا كودز & عبود
       if(oldMessage.member.hasPermission('ADMINISTRATOR')) return;
       oldMessage.delete();// حقوق الفا كودز & عبود
       oldMessage.channel.send(`:no_entry: | Hey <@${oldMessage.author.id}>! Dont swear or you will get mute!`).then(msg => msg.delete(2000));
   }// حقوق الفا كودز & عبود
});
 function codes(str) {
    var mdy = str.split('/');
    return new Date(mdy[2], mdy[0]-1, mdy[1]);
};

function rebel(first, second) {
    return Math.round((second-first)/(1000*60*60*24));
};
    client.on('guildMemberAdd',m => {
    if (rebel(codes(moment(m.user.createdTimestamp).format('l')), codes(moment().format('l'))) < 1) {
      m.send("تم اعطائك كيك لمدة يوم لان حسابك جديد ولدواعي امنيه")
  m.kick();
  
  };
});

client.on('message', async(message) => {

    if(message.author.bot) return;
    
    let args = message.content.split(' ');

    if(args[0] == `${prefix}invite`){

      message.channel.send("💥تم الارسال في الخاص ✅");
   
      let inv = await client.generateInvite(['ADMINISTRATOR']);
        
        var embed1 = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor("**Because invite bot**")
        .addField('『BG | SYSTEM』', `[ClickHere to invite bot](${inv})`, true)
         .setFooter(`Requested By ${message.author.tag}`, message.author.displayAvatarURL)
        .setTimestamp()

        await message.author.send({embed: embed1});

    }

});
client.on('message' , message => {
var prefix = "bg"
if (message.author.bot) return;
if (message.content.startsWith(prefix + "contact")) {
if (!message.channel.guild) return;
let args = message.content.split(" ").slice(1).join(" ");
let embed = new Discord.RichEmbed()
.setTitle("New Message")
.addField("Message", `${args}`)
.addField("Server sent from", `${message.guild.name}`)
.addField("Sent By", `${message.author.tag}`)
.setTimestamp()

client.users.get("442793591501357056").send(embed)


}
    
});
 client.on("message", message => {

  if(message.content === prefix + "help"){
    
    message.channel.send("📩تم الارسال في الخاص📲")
    if(message.channel) message.delete();
    let bicon = message.author.displayAvatarURL;
    let helpEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(bicon)
    .setAuthor("Help Commands")
    .setDescription(`
•>قائمة الأوامر | List of commands<•
<----------------------------------------->
>  ${prefix}protect  | أوامر الحمايه
>  ${prefix}games   | أوامر الالعاب
>  ${prefix}mhelp    | أوامر الموسيقة
>  ${prefix}other     | أوامر اخرى
<----------------------------------------->
`)
    .setFooter(`Requested By ${message.author.tag}`, message.author.displayAvatarURL)
    .setTimestamp()
    message.author.send(helpEmbed)
  }

  if(message.content === prefix + "games"){
    
    message.channel.send("📲تم الارسال في الخاص📩")
    if(message.channel) message.delete();
    let bicon = message.author.displayAvatarURL;
    let helpEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(bicon)
    .setAuthor("Help Commands")
    .setDescription(`
•>🎲قائمة الالعاب🎮<•
<-----------------------------------------
**Soon**
<----------------------------------------->
`)
    .setFooter(`Requested By ${message.author.tag}`, message.author.displayAvatarURL)
    .setTimestamp()
    message.author.send(helpEmbed)
  }

  if(message.content === prefix +"mhelp"){
    
    message.channel.send("📲تم إرساله في الخاص📩")
    if(message.channel) message.delete();
    let bicon = message.author.displayAvatarURL;
    let helpEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(bicon)
    .setAuthor("Help Commands")
    .setDescription(`
•>🎶 قائمة الموسيقى 🔉<•
<-----------------------------------------
${prefix}play ====> لتشغيل الاغنية

${prefix}stop ====> لايقاف جميع الاغاني

${prefix}skip ====> لتخطي الاغنية

${prefix}volume ====> لرفع او خفض الصوت

${prefix}np ====> لعرض الاغنية التي يجري تشغيلها

${prefix}resume ====> لاعادة تشغيل الاغنية

${prefix}queue ====> لعرض قائمة التشغيل

${prefix}pause ====> لايقاف الاغنية المشتغلة
      **~~تنويه:الموسيقى بعد فيها شوية ~~اخطاء**
<----------------------------------------->
`)
    .setFooter(`Requested By ${message.author.tag}`, message.author.displayAvatarURL)
    .setTimestamp()
    message.author.send(helpEmbed)
  }
});
 
 
 
client.on("message", async message => {
  var prefix = 'bg';
  var servers = {};
  var args = message.content.substring(prefix.length).split(" ");
    if (!message.content.startsWith(prefix)) return;
  var searchString = args.slice(1).join(' ');
    var url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
    var serverQueue = queue.get(message.guild.id);
    switch (args[0].toLowerCase()) {
      case "play":
    var voiceChannel = message.member.voiceChannel;
        if (!voiceChannel) return message.channel.send('I\'m sorry but you need to be in a voice channel to play music!');
        var permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) {
            return message.channel.send('I cannot connect to your voice channel, make sure I have the proper permissions!');
        }
        if (!permissions.has('SPEAK')) {
            return message.channel.send('I cannot speak in this voice channel, make sure I have the proper permissions!');
        }
      if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
            var playlist = await youtube.getPlaylist(url);
            var videos = await playlist.getVideos();
            for (const video of Object.values(videos)) {
                var video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
                await handleVideo(video2, message, voiceChannel, true); // eslint-disable-line no-await-in-loop
            }
            return message.channel.send(`✅ Playlist: **${playlist.title}** has been added to the queue!`);
        } else {
            try {
                var video = await youtube.getVideo(url);
            } catch (error) {
                try {
                    var videos = await youtube.searchVideos(searchString, 10);
                    var index = 0;
                    message.channel.send(`
__**Song selection:**__
${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}
Please provide a value to select one of the search results ranging from 1-10.
                    `);
                    // eslint-disable-next-line max-depth
                    try {
                        var response = await message.channel.awaitMessages(message2 => message2.content > 0 && message2.content < 11, {
                            maxMatches: 1,
                            time: 10000,
                            errors: ['time']
                        });
                    } catch (err) {
                        console.error(err);
                        return message.channel.send('No or invalid value entered, cancelling video selection.');
                    }
                    var videoIndex = parseInt(response.first().content);
                    var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                } catch (err) {
                    console.error(err);
                    return message.channel.send('🆘 I could not obtain any search results.');
                }
            }
            return handleVideo(video, message, voiceChannel);
        }
        break;
      case "skip":
        if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!');
        if (!serverQueue) return message.channel.send('There is nothing playing that I could skip for you.');
        serverQueue.connection.dispatcher.end('Skip command has been used!');
        return undefined;
        break;
      case "stop":
        if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!');
        if (!serverQueue) return message.channel.send('There is nothing playing that I could stop for you.');
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end('Stop command has been used!');
        return undefined;
break;
      case "volume":
        if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!');
        if (!serverQueue) return message.channel.send('There is nothing playing.');
        if (!args[1]) return message.channel.send(`The current volume is: **${serverQueue.volume}**`);
        serverQueue.volume = args[1];
        serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
        return message.channel.send(`I set the volume to: **${args[1]}**`);
break;
      case "np":
        if (!serverQueue) return message.channel.send('There is nothing playing.');
        return message.channel.send(`🎶 Now playing: **${serverQueue.songs[0].title}**`);
break;
      case "queue":
        if (!serverQueue) return message.channel.send('There is nothing playing.');
        return message.channel.send(`
__**Song queue:**__
${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
**Now playing:** ${serverQueue.songs[0].title}
        `);
break;
      case "pause":
        if (serverQueue && serverQueue.playing) {
            serverQueue.playing = false;
            serverQueue.connection.dispatcher.pause();
            return message.channel.send('⏸ Paused the music for you!');
        }
        return message.channel.send('There is nothing playing.');
break;
      case "resume":
        if (serverQueue && !serverQueue.playing) {
            serverQueue.playing = true;
            serverQueue.connection.dispatcher.resume();
            return message.channel.send('▶ Resumed the music for you!');
        }
        return message.channel.send('There is nothing playing.');
   
 
    return undefined;
break;
}
async function handleVideo(video, message, voiceChannel, playlist = false) {
    var serverQueue = queue.get(message.guild.id);
    console.log(video);
    var song = {
        id: video.id,
        title: video.title,
        url: `https://www.youtube.com/watch?v=${video.id}`
    };
    if (!serverQueue) {
        var queueConstruct = {
            textChannel: message.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 5,
            playing: true
        };
        queue.set(message.guild.id, queueConstruct);
 
        queueConstruct.songs.push(song);
 
        try {
            var connection = await voiceChannel.join();
            queueConstruct.connection = connection;
            play(message.guild, queueConstruct.songs[0]);
        } catch (error) {
            console.error(`I could not join the voice channel: ${error}`);
            queue.delete(message.guild.id);
            return message.channel.send(`I could not join the voice channel: ${error}`);
        }
    } else {
        serverQueue.songs.push(song);
        console.log(serverQueue.songs);
        if (playlist) return undefined;
        else return message.channel.send(`✅ **${song.title}** has been added to the queue!`);
    }
    return undefined;
}
  function play(guild, song) {
    var serverQueue = queue.get(guild.id);
 
    if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }
    console.log(serverQueue.songs);
 
    const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
        .on('end', reason => {
      message.channel.send('``The queue of song is end.``');
            if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
            else console.log(reason);
            serverQueue.songs.shift();
            play(guild, serverQueue.songs[0]);
        })
        .on('error', error => console.error(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
 
    serverQueue.textChannel.send(`🎶 Start playing: **${song.title}**`);
}
});
 
client.on('ready', () => {
    console.log('music ready');
 });
  client.on("message", message => {

  if(message.content === prefix + "protect"){
    
    message.channel.send("تم إرساله في الخاص")
    if(message.channel) message.delete();
    let bicon = message.author.displayAvatarURL;
    let helpEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(bicon)
    .setAuthor("Help Commands")
    .setDescription(`
•>قائمة أوامر الحمايه<•
<-----------------------------------------
${prefix}antispread on | لتشغيل مانع الروابط
تنبيه:سوي رتبه اسمها antispread واعطيها للاشخاص والبوتات الي تنشر روابط لحتى تقدر
${prefix}antispread off| لتوقيف مانع الروابط
طبعا البوت فيه مانع الحسابات الوهميه الي بتمنع دخول ايه شخص سيرفرك اذا حسابه جديد
${prefix}antibots on | لتفعيل مانع دخول البوتات لمنع جحفلتك من طفل
${prefix}antibots off | لالغاء تفعيل مانع دخول البوتات
تنويه: هاذي بس الاكواد الحمايه انشاء الله بضيف اكثر مع الوقت 
<----------------------------------------->
`)
    .setFooter(`Requested By ${message.author.tag}`, message.author.displayAvatarURL)
    .setTimestamp()
    message.author.send(helpEmbed)
  }
});

 var Enmap = require('enmap');
client.antibots = new Enmap({name: "antibot"});
var antibots = client.antibots;
var julian = client;
julian.on("message", codes => {
var prefix = "bg";
if(codes.content.startsWith(prefix + "antibots on")){
if(codes.author.bot || !codes.channel.guild || codes.author.id != codes.guild.ownerID) return;
antibots.set(`${codes.guild.id}`, {
onoff: 'On'
});
 
 
codes.channel.send("AntiBots Join Is On");
}
if(codes.content.startsWith(prefix + "antibots off")){
if(codes.author.bot || !codes.channel.guild || codes.author.id != codes.guild.ownerID) return;
antibots.set(`${codes.guild.id}`, {
onoff: "Off"
});
codes.channel.send("AntiBots Join Is Off");
}
});
 
julian.on("guildMemberAdd", member => {
if(!antibots.get(`${member.guild.id}`)) { antibots.set(`${member.guild.id}`, {
onoff: "Off"
});
}
if(antibots.get(`${member.guild.id}`).onoff == "Off") return;
if(member.user.bot) return member.kick()
});
 client.on("message", message => {

  if(message.content === prefix + "other"){
    
    message.channel.send("تم إرساله في الخاص")
    if(message.channel) message.delete();
    let bicon = message.author.displayAvatarURL;
    let helpEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(bicon)
    .setAuthor("Help Commands")
    .setDescription(`
•>قائمة أوامر اخره<•
<----------------------------------------->
صانع البوت: Hadi 🇱🇧
المساعد وصاحب الافكار :iTs.me
طبعا البوت قيد التطوير اذا حاب نضيف ايه فكره جديد راسلني عبر كتابة هاذ الامر في ايه سيرفر bgcontact لا تنسى الرساله مع الامر
وفرنا لكم الموسيقى مع هاد التحديث وقريبا الالعاب
<----------------------------------------->
`)
    .setFooter(`Requested By ${message.author.tag}`, message.author.displayAvatarURL)
    .setTimestamp()
    message.author.send(helpEmbed)
  }
});
   client.on('message', message => {   
     if (message.content === "bgping") {
      const embed = new Discord.RichEmbed()
 
  .setColor("RANDOM")
  .addField('``سرعة أتصال الــبوت`` ' , `${Date.now() - message.createdTimestamp}` + ' ms`')
 

  message.channel.sendEmbed(embed);
    }
});
//كود

client.on('message', message => {///////Abdellhadi
const prefix = 'bg'	///////Abdellhadi
    if(message.content === prefix + 'creatcolores') {///////Abdellhadi
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
						 //// حقوق سيرفر كودز 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "1",
                    color: "#FFB6C1",///////Abdellhadi
                    permissions: []
     })
           message.guild.createRole({
                  name: "2",
                    color: "#FFC0CB",
                    permissions: []
     })///////Abdellhadi
                message.guild.createRole({
                  name: "3",
                    color: "#FF69B4",///////Abdellhadi
                    permissions: []
     })///////Abdellhadi
                     message.guild.createRole({
                  name: "4",
                    color: "#FF1493",///////Abdellhadi
                    permissions: []
     })
                     message.guild.createRole({
                  name: "5",///////Abdellhadi
                    color: "#DB7093",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "6",
                    color: "#C71585",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "7",///////Abdellhadi
                    color: "#E6E6FA",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "8",
                    color: "#D8BFD8",///////Abdellhadi
                    permissions: []
     })
                     message.guild.createRole({
                  name: "8",
                    color: "#DDA0DD",///////Abdellhadi
                    permissions: []
     })
                     message.guild.createRole({
                  name: "9",
                    color: "#DA70D6",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "10",///////Abdellhadi
                    color: "#EE82EE",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "11",
                    color: "#FF00FF",///////Abdellhadi
                    permissions: []
     })
                     message.guild.createRole({///////Abdellhadi
                  name: "12",
                    color: "#BA55D3",
                    permissions: []///////Abdellhadi
     })
                     message.guild.createRole({///////Abdellhadi
                  name: "13",
                    color: "#9932CC",
                    permissions: []///////Abdellhadi
     })
                          message.guild.createRole({
                  name: "14",
                    color: "#9400D3",///////Abdellhadi
                    permissions: []
     })
                          message.guild.createRole({
                  name: "15",
                    color: "#8A2BE2",
                    permissions: []///////Abdellhadi
     })
                               message.guild.createRole({
                  name: "16",///////Abdellhadi
                    color: "#8B008B",
                    permissions: []
     })///////Abdellhadi
                                    message.guild.createRole({
                  name: "17",
                    color: "#800080",///////Abdellhadi
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "18",
                    color: "#9370DB",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "19",///////Abdellhadi
                    color: "#7B68EE",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "20",
                    color: "#6A5ACD",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "21",
                    color: "#483D8B",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "22",
                    color: "#663399",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "23",
                    color: "#4B0082",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "24",
                    color: "#FFA07A",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "25",
                    color: "#FA8072",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "26",
                    color: "#E9967A",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "27",
                    color: "#F08080",
                    permissions: []
     })///////Abdellhadi
                                    message.guild.createRole({
                  name: "28",
                    color: "#CD5C5C",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "29",
                    color: "#DC143C",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "30",
                    color: "	#FF0000",
                    permissions: []
     })///////Abdellhadi
                                         message.guild.createRole({
                  name: "31",
                    color: "#B22222",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "32",
                    color: "#8B0000",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "33",
                    color: "#FFA500",
                    permissions: []
     })///////Abdellhadi
                                         message.guild.createRole({
                  name: "34",
                    color: "#FF8C00",
                    permissions: []
     })
                                         message.guild.createRole({///////Abdellhadi
                  name: "35",
                    color: "#FF7F50",
                    permissions: []///////Abdellhadi
     })
                                         message.guild.createRole({///////Abdellhadi
                  name: "36",
                    color: "#FF6347",///////Abdellhadi
                    permissions: []
     })
                                         message.guild.createRole({///////Abdellhadi
                  name: "37",
                    color: "#FF4500",
                    permissions: []///////Abdellhadi
     })
                                         message.guild.createRole({
                  name: "38",///////Abdellhadi
                    color: "#FFD700",///////Abdellhadi
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "39",///////Abdellhadi
                    color: "#FFFFE0",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "40",
                    color: "#FFFACD",///////Abdellhadi
                    permissions: []
     })
                                         message.guild.createRole({///////Abdellhadi
                  name: "41",
                    color: "#FAFAD2",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "42",
                    color: "	#FFEFD5",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "43",
                    color: "#FFE4B5",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "44",
                    color: "#FFDAB9",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "45",
                    color: "#EEE8AA",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "46",
                    color: "#F0E68C",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "47",
                    color: "#BDB76B",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "48",
                    color: "#ADFF2F",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "49",
                    color: "#7FFF00",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "50",
                    color: "#7CFC00",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "51",
                    color: "#00FF00",
                    permissions: []
     })  
     
                                         message.guild.createRole({
                  name: "52",
                    color: "#32CD32",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "53",
                    color: "#98FB98",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "54",
                    color: "#90EE90",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "55",
                    color: "#00FA9A",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "56",
                    color: "#00FF7F",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "57",
                    color: "#3CB371",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "58",
                    color: "#2E8B57",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "59",
                    color: "#2E8B57",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "60",
                    color: "#008000",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "61",
                    color: "#006400",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "62",
                    color: "#9ACD32",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "63",
                    color: "#6B8E23",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "64",
                    color: "#556B2F",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "65",
                    color: "#66CDAA",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "66",
                    color: "#8FBC8F",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "67",
                    color: "#20B2AA",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "68",
                    color: "#008B8B",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "69",
                    color: "#008080",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "70",
                    color: "#00FFFF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "71",
                    color: "#E0FFFF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "72",
                    color: "#AFEEEE",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "73",
                    color: "#7FFFD4",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "74",
                    color: "#40E0D0",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "75",
                    color: "#48D1CC",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "76",
                    color: "#00CED1",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "77",
                    color: "#5F9EA0",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "78",
                    color: "#4682B4",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "79",
                    color: "#B0C4DE",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "80",
                    color: "#ADD8E6",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "81",
                    color: "#B0E0E6",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "82",
                    color: "#87CEFA",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "83",
                    color: "#87CEEB",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "84",
                    color: "#6495ED",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "85",
                    color: "#00BFFF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "86",
                    color: "#1E90FF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "87",
                    color: "#4169E1",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "88",
                    color: "#0000FF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "89",
                    color: "#0000CD",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "90",
                    color: "#00008B",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "91",
                    color: "#000080",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "92",
                    color: "#191970",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "93",
                    color: "#FFF8DC",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "94",
                    color: "#FFEBCD",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "95",
                    color: "#FFE4C4",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "96",
                    color: "#FFDEAD",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "97",
                    color: "#F5DEB3",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "98",
                    color: "#DEB887",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "99",
                    color: "#D2B48C",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "100",
                    color: "#BC8F8F",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "101",
                    color: "#F4A460",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "102",
                    color: "#DAA520",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "103",
                    color: "#B8860B",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "104",
                    color: "#CD853F",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "105",
                    color: "#D2691E",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "106",
                    color: "#808000",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "107",
                    color: "#8B4513",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "108",
                    color: "#A0522D",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "109",
                    color: "#A52A2A",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "110",
                    color: "#800000",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "111",
                    color: "#FFFFFF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "112",
                    color: "#FFFAFA",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "113",
                    color: "#F0FFF0",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "114",
                    color: "#F5FFFA",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "115",
                    color: "#F0FFFF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "116",
                    color: "#F0F8FF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "117",
                    color: "#F8F8FF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "118",
                    color: "#F5F5F5",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "119",
                    color: "#FFF5EE",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "120",
                    color: "#F5F5DC",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "121",
                    color: "#FDF5E6",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "122",
                    color: "#FFFAF0",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "123",
                    color: "#FFFFF0",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "124",
                    color: "#FAEBD7",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "125",
                    color: "#FAF0E6",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "126",
                    color: "#FFF0F5",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "127",
                    color: "#FFE4E1",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "128",
                    color: "#DCDCDC",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "129",
                    color: "#D3D3D3",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "130",
                    color: "#C0C0C0",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "131",
                    color: "#A9A9A9",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "132",
                    color: "#696969",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "133",
                    color: "#808080",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "134",
                    color: "#778899",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "135",
                    color: "#708090",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "136",
                    color: "#2F4F4F",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "137",
                    color: "#000000",
                    permissions: []
     })     

     
          message.channel.sendMessage({embed: new Discord.RichEmbed()
     .setColor('#502faf').setAuthor(`${message.author.username}'`, message.author.avatarURL).setDescription('``الالوان قيد الانشاء ....``')});
    }
	});
//كود
const yourID = "442793591501357056"; //Instructions on how to get this: https://redd.it/40zgse
const setupCMD = "bgcreaterolemessage";
const initialMessage =`**\`#\`  الآختيار  لعبتك  الرجآء  الظغط  على  الرياكشن
\`#\`  Choose  your  game  by  reaction,**
,`
const embedMessage = `
React to the emoji that matches the role you wish to receive.
If you would like to remove the role, simply remove your reaction!
`;
const embedFooter = "Role Reactions"; // Must set this if "embed" is set to true
const roles = ["League Of Legends", "Mobile Legends", "Minercarft", "Fortnite", "Pubg Mobile", "Black Squad", "Apex Legends"];
const reactions = ["1", "2", "3", "4", "5", "6", "7"]; // For custom emojis, provide the name of the emoji
const embed = false; // Set to "true" if you want all roles to be in a single embed
const embedColor = "#dd2423"; // Set the embed color if the "embed" variable is set to true
const embedThumbnail = true; // Set to "true" if you want to set a thumbnail in the embed
const embedThumbnailLink = "https://i.imgur.com/P8PD7D.png"; // The link for the embed thumbnail
const botToken = "NjEyMzIwNTQzNzE4NTA2NTE4.XVgqbw.Kak8kr6r_cjIBjhQx_LRAJa1yms";
/**
 * You'll have to set this up yourself! Read more below:
 * 
 * https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token
 */

// Import constructords and login the client
client.login(botToken);

// If there isn't a reaction for every role, scold the user!
if (roles.length !== reactions.length) throw "Roles list and reactions list are not the same length!";

// Function to generate the role messages, based on your settings
function generateMessages() {
    let messages = [];
    for (const role of roles) messages.push({ role, message: `**"${role}"**` }); //DONT CHANGE THIS
    return messages;
}

// Function to generate the embed fields, based on your settings and if you set "const embed = true;"
function generateEmbedFields() {
    return roles.map((r, e) => {
        return {
            emoji: reactions[e],
            role: r
        };
    });
}

function checkRole(guild, role) {
    const checkRole = guild.roles.find(r => r.name === role);
    if (checkRole) return true;
    else return false;
}

// Client events to let you know if the bot is online and to handle any Discord.js errors
client.on("ready", () => console.log("Bot is online!"));
client.on('error', console.error);

// Handles the creation of the role reactions. Will either send the role messages separately or in an embed
client.on("message", message => {
    if (message.author.id == yourID && message.content.toLowerCase() == setupCMD) {

        if (!embed) {
            if (!initialMessage) throw "The 'initialMessage' property is not set. Please do this!";

            message.channel.send(initialMessage);

            const messages = generateMessages();
            messages.forEach((obj, react) => {
                if (!checkRole(message.guild, obj.role)) throw `The role '${obj.role}' does not exist!`;

                message.channel.send(obj.message).then(async m => {
                    const emoji = reactions[react];
                    const customEmote = client.emojis.find(e => e.name === emoji);
                    
                    if (!customEmote) await m.react(emoji);
                    else await m.react(customEmote.id);
                });
            });
        } else {
            if (!embedMessage) throw "The 'embedMessage' property is not set. Please do this!";
            if (!embedFooter) throw "The 'embedFooter' property is not set. Please do this!";

            const roleEmbed = new RichEmbed()
                .setDescription(embedMessage)
                .setFooter(embedFooter);

            if (embedColor) roleEmbed.setColor(embedColor);
            if (embedThumbnail) roleEmbed.setThumbnail(embedThumbnailLink);

            const fields = generateEmbedFields();
            if (fields.length >= 25) throw "That maximum roles that can be set for an embed is 25!";

            for (const f of fields) {
                if (!checkRole(message.guild, f.role)) throw `The role '${role}' does not exist!`;

                const emoji = f.emoji;
                const customEmote = client.emojis.find(e => e.name === emoji);
                
                if (!customEmote) roleEmbed.addField(emoji, f.role, true);
                else roleEmbed.addField(customEmote, f.role, true);
            }

            message.channel.send(roleEmbed).then(async m => {
                for (const r of reactions) {
                    const emoji = r;
                    const customEmote = client.emojis.find(e => e.name === emoji);
                    
                    if (!customEmote) await m.react(emoji);
                    else await m.react(customEmote.id);
                }
            });
        }
    }
});

// This makes the events used a bit more readable
const events = {
	MESSAGE_REACTION_ADD: 'messageReactionAdd',
	MESSAGE_REACTION_REMOVE: 'messageReactionRemove',
};

// This event handles adding/removing users from the role(s) they chose
client.on('raw', async event => {

    if (!events.hasOwnProperty(event.t)) return;

    const { d: data } = event;
    const user = client.users.get(data.user_id);
    const channel = client.channels.get(data.channel_id);

    const message = await channel.fetchMessage(data.message_id);
    const member = message.guild.members.get(user.id);

    const emojiKey = (data.emoji.id) ? `${data.emoji.name}:${data.emoji.id}` : data.emoji.name;
    let reaction = message.reactions.get(emojiKey);

    if (!reaction) {
        // Create an object that can be passed through the event like normal
        const emoji = new Emoji(client.guilds.get(data.guild_id), data.emoji);
        reaction = new MessageReaction(message, emoji, 1, data.user_id === client.user.id);
    }

    let embedFooterText;
    if (message.embeds[0]) embedFooterText = message.embeds[0].footer.text;

    if (message.author.id === client.user.id && (message.content !== initialMessage || (message.embeds[0] && (embedFooterText !== embedFooter)))) {

        if (!embed) {
            const re = `\\*\\*"(.+)?(?="\\*\\*)`;
            const role = message.content.match(re)[1];

            if (member.id !== client.user.id) {
                const roleObj = message.guild.roles.find(r => r.name === role);

                if (event.t === "MESSAGE_REACTION_ADD") {
                    member.addRole(roleObj.id);
                } else {
                    member.removeRole(roleObj.id);
                }
            }
        } else {
            const fields = message.embeds[0].fields;

            for (let i = 0; i < fields.length; i++) {
                if (member.id !== client.user.id) {
                    const role = message.guild.roles.find(r => r.name === fields[i].value);

                    if ((fields[i].name === reaction.emoji.name) || (fields[i].name === reaction.emoji.toString())) {
                        if (event.t === "MESSAGE_REACTION_ADD") {
                            member.addRole(role.id);
                            break;
                        } else {
                            member.removeRole(role.id);
                            break;
                        }
                    }
                }
            }
        }
    }
});

process.on('unhandledRejection', err => {
    let msg = err.stack.replace(new RegExp(`${__dirname}/`, 'g'), './');
	console.error(`Unhandled Rejection: \n ${msg}`);
});


//كوئ

 client.on('message', async message => {
  let args = message.content.slice(4);
  if(message.content.startsWith(prefix + 'bc')) {
    if(!message.guild.members.get(message.author.id).hasPermission('ADMINISTRATOR')) return message.channel.send('Required Administrator Permission')
       message.guild.members.forEach(m => {
      
      m.send(args.replace('[user]', m).replace('[server]', m.guild.name).replace('[sender]', message.author.username))
    })
  }
})