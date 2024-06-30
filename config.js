const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348050907760";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348050907760";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_58_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTIsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNixcbiAgICAgICAgMTA2LFxuICAgICAgICA4MixcbiAgICAgICAgNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTksXG4gICAgICAgIDIxNixcbiAgICAgICAgNDEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjM2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDgyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODAsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjAzLFxuICAgICAgICA3NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjUzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTA1LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzksXG4gICAgICAgIDczLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTksXG4gICAgICAgIDM1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAzMSxcbiAgICAgICAgNixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjksXG4gICAgICAgIDEsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU5LFxuICAgICAgICA4NixcbiAgICAgICAgNzUsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjA2LFxuICAgICAgICA0MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTExLFxuICAgICAgICA0NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTE5LFxuICAgICAgICA2MixcbiAgICAgICAgNjksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTE4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDgyLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzEsXG4gICAgICAgIDc2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzksXG4gICAgICAgIDIxMyxcbiAgICAgICAgODYsXG4gICAgICAgIDU3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDg5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIzLFxuICAgICAgICA1MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODcsXG4gICAgICAgIDYsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjI0LFxuICAgICAgICA2NyxcbiAgICAgICAgODgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTIzLFxuICAgICAgICA0LFxuICAgICAgICA0NixcbiAgICAgICAgNDYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDU2LFxuICBcImFkdlNlY3JldEtleVwiOiBcImRrZWc2d3FmNDFiWUN6bDY3bHlQNEkza0Zsdy8xZXJiRVZ6b3dWUXFJRGs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjNvVDRpN3plUkwtT0lLTU9TYm5JS1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGRmMTZkYWQtNmQwMS00MTc2LTliNjItNDRmNjY5NTcyMzE1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MCxcbiAgICAgIDY2LFxuICAgICAgOTAsXG4gICAgICAxNTAsXG4gICAgICA0OSxcbiAgICAgIDU2LFxuICAgICAgMixcbiAgICAgIDE2OCxcbiAgICAgIDQsXG4gICAgICAxNjQsXG4gICAgICAxMzUsXG4gICAgICAwLFxuICAgICAgMTQxLFxuICAgICAgMTc3LFxuICAgICAgMTIxLFxuICAgICAgMTA5LFxuICAgICAgNzUsXG4gICAgICA4MyxcbiAgICAgIDEzMyxcbiAgICAgIDIxNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI3LFxuICAgICAgMjYsXG4gICAgICAyLFxuICAgICAgNDMsXG4gICAgICA4MixcbiAgICAgIDE5NSxcbiAgICAgIDg4LFxuICAgICAgMTg3LFxuICAgICAgMTM5LFxuICAgICAgMTU3LFxuICAgICAgMzEsXG4gICAgICA0NixcbiAgICAgIDE0MyxcbiAgICAgIDkxLFxuICAgICAgMjUwLFxuICAgICAgNjksXG4gICAgICAxNTksXG4gICAgICAyMjQsXG4gICAgICA5MSxcbiAgICAgIDM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSjNYbk4wRkVQS05oN1FHR0FZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJvWGNod09uckVMV0xzdjIyNEJRZmR4TEJ1Si9rWng3bTdjRm5Db3dZN1hzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInJZdWExTzd6Y09PNGZKRDk5SGpMeUNOZHE1SHdWOTdTcE5ULys0Vy91QS9yQkhJMEI4dXZkOHRFRTZ3SjRERm5TOEpYOVBTOHhRRFhpSFJsWEJJdkRBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImxDOGxSZndjWTMxZTVmbFFTNTNZMk80RlNTZlJydytJT0xwcmQ2d0NCVVo2K2xjejRuL0NCZ01rcWdqeFVzU2JMWFhXVTNSelM0Tzc1cG42NTNhS2pBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA1MDkwNzc2MDo2M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkrDmFNIXCIsXG4gICAgXCJsaWRcIjogXCIyMDgzOTIxNDg4Njk3MDo2M0BsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNTA5MDc3NjA6NjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5NzgxMTEwXG59Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
