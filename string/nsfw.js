const chalk = require('chalk')
const fs = require('fs')
global.nsfw = `Mohon Maaf..Featurr Nsfw Belum Di aktifkan, Harap Hubungi admin Untuk  mengaktifkan nya!!`
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})