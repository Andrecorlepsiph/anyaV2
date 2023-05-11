const chalk = require('chalk')
const fs = require('fs')
global.featureowner = `mohon maaf Mas Feature hanya bisa di gunakan oleh Owner Bot Saja`
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})