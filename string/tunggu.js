const chalk = require('chalk')
const fs = require('fs')
global.tunggu = `Silahkan Tunggu Permintaan Mu sedang kami proses Okei,`
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})