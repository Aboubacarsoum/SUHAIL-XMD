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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_48_11_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDMwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDYwLFxuICAgICAgICA2NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjE2LFxuICAgICAgICA0MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc5LFxuICAgICAgICA1MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzcsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDcsXG4gICAgICAgIDMzLFxuICAgICAgICA1MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjM2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTU0LFxuICAgICAgICA4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTksXG4gICAgICAgIDUxLFxuICAgICAgICA0OCxcbiAgICAgICAgMixcbiAgICAgICAgNTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjgsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDU5LFxuICAgICAgICA4MyxcbiAgICAgICAgODIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM3LFxuICAgICAgICA3MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgOTMsXG4gICAgICAgIDcsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTU3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDMzLFxuICAgICAgICA0NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5NixcbiAgICAgICAgNDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzcsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDgzLFxuICAgICAgICA4LFxuICAgICAgICA1NixcbiAgICAgICAgODMsXG4gICAgICAgIDE0MixcbiAgICAgICAgODksXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM1LFxuICAgICAgICA3OCxcbiAgICAgICAgNCxcbiAgICAgICAgOCxcbiAgICAgICAgNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNyxcbiAgICAgICAgODUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjE5LFxuICAgICAgICA5MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDM4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjE4LFxuICAgICAgICA2NixcbiAgICAgICAgMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDY0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE2LFxuICAgICAgICA2MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTExLFxuICAgICAgICA0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIvQlJobHlQaDUrOFk5Rkw0WEJEQ1hKOFh2eGd5WVo3T3NtZzROeXhWeVp3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIyNTk4ODg4NjYzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDMTZCN0Y1QzJFODE1OTM3QTYyNDFDRTg3QTlGNzFGQVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzIyOTc3MjdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiamp3c1lCQUNRcUMyOTNyVk80ZVFtZ1wiLFxuICBcInBob25lSWRcIjogXCJkMDgwN2Y1Zi05OTMyLTQ0YTctYWQxMy03MDI0MzE3MGVmM2RcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMyLFxuICAgICAgMTQ2LFxuICAgICAgMTEyLFxuICAgICAgMjAwLFxuICAgICAgOTUsXG4gICAgICAyNDcsXG4gICAgICAyNyxcbiAgICAgIDk2LFxuICAgICAgMjI0LFxuICAgICAgMjQ2LFxuICAgICAgMTE5LFxuICAgICAgMjQ5LFxuICAgICAgMTI0LFxuICAgICAgMTEzLFxuICAgICAgNSxcbiAgICAgIDE5MyxcbiAgICAgIDE5MixcbiAgICAgIDE2NCxcbiAgICAgIDE0MixcbiAgICAgIDYyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNyxcbiAgICAgIDk2LFxuICAgICAgMzQsXG4gICAgICAxOTEsXG4gICAgICAxNjEsXG4gICAgICA1MyxcbiAgICAgIDIzNixcbiAgICAgIDgwLFxuICAgICAgNDEsXG4gICAgICAxNTIsXG4gICAgICA4NSxcbiAgICAgIDI0LFxuICAgICAgMjgsXG4gICAgICAxLFxuICAgICAgMTYwLFxuICAgICAgMzMsXG4gICAgICAyNDgsXG4gICAgICAxODgsXG4gICAgICAxMjUsXG4gICAgICAxNjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUjNWSDlNQ0VcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyNTk4ODg4NjYzOjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2ZgPCdmaEg8J2Zi/CdmafwnZmk8J2Zm/CdmZrwnZmo8J2ZpPCdmadcIixcbiAgICBcImxpZFwiOiBcIjIzMzkzMzk4Mzc2ODY2NjoxOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNORG10NVVHRVBXSGc3b0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInlRRHBYU2w5a09zWVYyTXFKZW5RK05Vc2JqOWRSUGFjS0xIaEh4ZXdHU0E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiREhUYWxpbVczL0t4blNXdHJnekdtdnhidVNQenhxbG54bDBuNitFaXpzQ09udUdYTkRJM3lhVHY2eFg0RUdVN21FeXlIQUtXempVRmJCRFhMKzI0Qmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwianJrMm5xaW9hMzFBTXlOMXNsaW9zbGpxRTZnMHZlSTZyMVZZZ0R4TjFkVzJRTno5MWJIYm5JcFdhemFVWWN3MlJHS096YTJ2T0ZVYVBLaFY1Z2JNRFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjI1OTg4ODg2NjM6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDMyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzIyOTc3MjEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEb09cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURvTy5qc29uIjogIntcImtleURhdGFcIjpcIkxKL05YZzhaQm91a3NtOG1tQUhCeTA5Vyt0Q1B1NGhkellJV3dqaEtkSDQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY1NTU2NzE4NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMyMjU3NTA2MDk0XCJ9Igp9"  // PUT your SESSION_ID 


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
