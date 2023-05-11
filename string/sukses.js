const chalk = require('chalk')
const fs = require('fs')
global.tunggu = `Permintaanmu Sedang Kami Proses`
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})