const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
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
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_52_04_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDg4LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDg5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNixcbiAgICAgICAgMTEwLFxuICAgICAgICAxODcsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDUsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM0LFxuICAgICAgICAzMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDM0LFxuICAgICAgICAyMixcbiAgICAgICAgMTYxLFxuICAgICAgICAzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEsXG4gICAgICAgIDg5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTg0LFxuICAgICAgICA2NyxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE5MCxcbiAgICAgICAgODAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDgzLFxuICAgICAgICA1NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDYxLFxuICAgICAgICA4MyxcbiAgICAgICAgOTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDY1LFxuICAgICAgICAyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3NixcbiAgICAgICAgNyxcbiAgICAgICAgOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTU4LFxuICAgICAgICA4NSxcbiAgICAgICAgODYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTUyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDkwLFxuICAgICAgICA0MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNCxcbiAgICAgICAgMTg2LFxuICAgICAgICA4NSxcbiAgICAgICAgODEsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAzMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExLFxuICAgICAgICA0MixcbiAgICAgICAgNjcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTEsXG4gICAgICAgIDAsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTAzLFxuICAgICAgICA3NixcbiAgICAgICAgMzUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDYzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAzMixcbiAgICAgICAgMTYwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUS8rQjJKKzZITHM1ZUkvcjh3cmVSZnVCd0U5b2JOeVI2eXFNTGtPWkphVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOFpHTmNaaU9RTzJzSXdKbnM4eTFDUVwiLFxuICBcInBob25lSWRcIjogXCIzYTY3NmJiYy01ODA5LTRlNDUtOGE0ZS02OWY2Y2VlZGI4NjBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMwLFxuICAgICAgMjE0LFxuICAgICAgMTIwLFxuICAgICAgMjE0LFxuICAgICAgMTcwLFxuICAgICAgMTg4LFxuICAgICAgMTEyLFxuICAgICAgMjEwLFxuICAgICAgMjE2LFxuICAgICAgMzgsXG4gICAgICAyMTksXG4gICAgICAxMDksXG4gICAgICAyMTMsXG4gICAgICAyNTAsXG4gICAgICAxNzIsXG4gICAgICAyMTcsXG4gICAgICAyNTEsXG4gICAgICAyMzgsXG4gICAgICA3NyxcbiAgICAgIDIxMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODksXG4gICAgICA1NixcbiAgICAgIDUsXG4gICAgICAxNzgsXG4gICAgICAxMzksXG4gICAgICAyNTMsXG4gICAgICAxOTksXG4gICAgICAxMTYsXG4gICAgICAxNTQsXG4gICAgICAyMjAsXG4gICAgICA5MCxcbiAgICAgIDIxNixcbiAgICAgIDI3LFxuICAgICAgMTE1LFxuICAgICAgMTQ1LFxuICAgICAgNDUsXG4gICAgICA0NyxcbiAgICAgIDE5NSxcbiAgICAgIDQzLFxuICAgICAgMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQ1BXMlNSOTlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNjg1NjMwOTY6MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0NzY3ODU5MTczMzgzNzozMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNRFcrK01DRU9ycnNMOEdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjNLUHZSOU9rZG5ENGUzK1dhTjMyVUN5UjNsUXJkZjU5R3MwT2VFN3EzajQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiR1hUK3JNeXFOYXJHTHU4aU1LS3phWEtxMnlUdmdEVjdpUXBNS1orV1lHQjJzdldEUWRNRXMxZ2xVZ2ZzL1dvdkV3eFczQzJNa0ZWRUxxdXRFRXg0Q2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNm1sVUFUN25SSDZWWDFiZCtJcmpXckExTXBKcmVMUFl1bjhGbXhjT1VHTkZHN1RCdk9RclVyWW82SVJzY2J2UzkxZHg4ZC9zRjBCeVo1Qm5wNWVqQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2ODU2MzA5NjozMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MzUzMzU1NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUovN1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSi83Lmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
