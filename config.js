const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_23_11_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOCxcbiAgICAgICAgMTIyLFxuICAgICAgICA4MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAzNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTIxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTA0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTQzLFxuICAgICAgICA3NSxcbiAgICAgICAgODYsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTEsXG4gICAgICAgIDMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjI3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI4LFxuICAgICAgICAzMCxcbiAgICAgICAgMixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjAzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjksXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDk4LFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDc0LFxuICAgICAgICA1MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTg4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjExLFxuICAgICAgICAzMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIsXG4gICAgICAgIDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNixcbiAgICAgICAgNjgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTkzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDM2LFxuICAgICAgICA0OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDY2LFxuICAgICAgICA0MixcbiAgICAgICAgNzcsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTMxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTksXG4gICAgICAgIDEzNixcbiAgICAgICAgNTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjksXG4gICAgICAgIDgyLFxuICAgICAgICA1NixcbiAgICAgICAgMjgsXG4gICAgICAgIDMxLFxuICAgICAgICAzMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTEzLFxuICAgICAgICA3MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODgsXG4gICAgICAgIDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgNixcbiAgICAgICAgMzAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDU3LFxuICAgICAgICA4NixcbiAgICAgICAgOTEsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDcsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTcyLFxuICAgICAgICA5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjksXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjM2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZEw2aGhqR2s1aXh3L2NjNk9zUEtLRWxTREZUY3g2TkZaVEplSW1nM3pYVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMjU5ODg4ODY2M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjc2Njc5NDkwQTU5Q0ZFMDZFQkZFQ0ZGNkQ5N0U3QTJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMyNjk1Nzc5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInBjUXhTbERMUWM2S2E5NkxZUzBZNmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGE1OWZhZmEtNzUxNy00M2IzLThjYmYtMWMxNmI1MjRlNDgwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0LFxuICAgICAgMTUyLFxuICAgICAgMTY1LFxuICAgICAgMTEzLFxuICAgICAgMjgsXG4gICAgICA3LFxuICAgICAgMTcsXG4gICAgICA1NixcbiAgICAgIDM3LFxuICAgICAgNzMsXG4gICAgICAxMTYsXG4gICAgICAzNixcbiAgICAgIDE0MyxcbiAgICAgIDM1LFxuICAgICAgMTc5LFxuICAgICAgNTgsXG4gICAgICAxMTYsXG4gICAgICAyNTMsXG4gICAgICAyMjIsXG4gICAgICAxNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE2LFxuICAgICAgMTcyLFxuICAgICAgOTksXG4gICAgICA4NSxcbiAgICAgIDE0MyxcbiAgICAgIDE5MyxcbiAgICAgIDMyLFxuICAgICAgMjQ0LFxuICAgICAgMixcbiAgICAgIDY3LFxuICAgICAgMjUsXG4gICAgICAxMzUsXG4gICAgICAyMixcbiAgICAgIDEyMSxcbiAgICAgIDEzNCxcbiAgICAgIDgwLFxuICAgICAgNDUsXG4gICAgICA2MyxcbiAgICAgIDEyNSxcbiAgICAgIDE3MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLOFY3R1M0VlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI1OTg4ODg2NjM6MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZmA8J2ZoSDwnZmL8J2Zp/CdmaTwnZmb8J2ZmvCdmajwnZmk8J2Zp1wiLFxuICAgIFwibGlkXCI6IFwiMjMzOTMzOTgzNzY4NjY2OjI2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05UbXQ1VUdFTm10bTdvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieVFEcFhTbDlrT3NZVjJNcUplblErTlVzYmo5ZFJQYWNLTEhoSHhld0dTQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJOYmlCZ3cyMmxTM3NET2ovOVQwY0lVWnQ2ZHB0S2NPTXQ1ZTFEM0NRMWI2M0NKdkRtZ1poR2NDQ2ZKdVF1VHBwVFBtcVhiNDR4T20xNkhTcWFMQUtBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJLcEtUQzZMc3dPVzV2blZaWVhvd3h3VGZmamxNcUhzTlhDRlQ4UTB4RlluMEhjUUh4aEhaTG1ENTRSdCs2WjNqK3U4eVkrcEc1RXB2eExIV2xpUGtEQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjU5ODg4ODY2MzoyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjY5NTc3MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5hK1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTmErLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVGRkRmlNSUIvdnMyczQ5T1JHZ2p0Ni9FQTYvL1l1dXc5d0xWUEtuUmFtZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjU1NTY3MTg3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
