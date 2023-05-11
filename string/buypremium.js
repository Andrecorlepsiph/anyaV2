const chalk = require('chalk')
const fs = require('fs')
global.buypremium = `
harga
1 minggu:
2 Minggu:
3 minggu :

Payment 

GOPAY :
DANA :
OVO :
PULSA :

Benefit?
unli Limit
bebas akses Feature prem
`
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})