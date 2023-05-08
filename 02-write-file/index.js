const fs = require('fs')
const path = require('path')
const { stdout, stdin } = require('process')

const stream = fs.createWriteStream(path.join(__dirname, 'new-file.txt'))
stdout.write('Введи любой текст\n')
stdin.on('data', (data) => {
  if (data.toString().trim() === 'exit') {
    sayGoodbye()
  }
  stream.write(data)
})

process.on('SIGINT', sayGoodbye)

function sayGoodbye() {
  stdout.write('Пока!\n')
  process.exit()
}
