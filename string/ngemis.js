const chalk = require('chalk')
const fs = require('fs')
global.ngemis = `Bot hsrus menjadi admin Untuk menggunakan Feature ini`
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})