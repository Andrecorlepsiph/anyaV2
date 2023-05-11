const chalk = require('chalk')
const fs = require('fs')
global.apizein = 'zenzkey_945a0b8a03c5'
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})