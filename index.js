const mysql = require('mysql')
const { promisify } = require('util')

const connection = mysql.createConnection({
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST,
  password: process.env.MYSQL_PASS,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER
})

async function start () {
  console.log('hello world')
  process.exit()
}

start()
