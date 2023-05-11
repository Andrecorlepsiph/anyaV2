const chalk = require('chalk')
const fs = require('fs')
global.ping = `Masuk Masehh`
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})