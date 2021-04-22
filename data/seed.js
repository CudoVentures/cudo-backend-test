const withdrawalRequests = require('./withdrawal-requests.json')

const mysql = require('mysql')
const { promisify } = require('util')

const connection = mysql.createConnection({
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST,
  password: process.env.MYSQL_PASS,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER
})

async function init () {
  await promisify(connection.query).bind(connection)(`
    DROP TABLE IF EXISTS WithdrawalRequest
  `)

  await promisify(connection.query).bind(connection)(`
  CREATE TABLE WithdrawalRequest (
    amount DECIMAL(65,18) NOT NULL,
    address VARCHAR(80) CHARACTER SET 'ascii' COLLATE 'ascii_bin' NOT NULL,
    id CHAR(32) CHARACTER SET 'ascii' COLLATE 'ascii_bin' NOT NULL,
    requestedTime DATETIME NOT NULL,
    status VARCHAR(32) CHARACTER SET 'ascii' COLLATE 'ascii_bin' NOT NULL,
    transactionId VARCHAR(80) CHARACTER SET 'ascii' COLLATE 'ascii_bin' NULL,
    PRIMARY KEY (id)
  )
`)

  for (const withdrawal of withdrawalRequests) {
    await promisify(connection.query).bind(connection)(`
    INSERT INTO WithdrawalRequest (amount, address, id, requestedTime, status, transactionId)
    VALUES (?, ?, ?, ?, ?, ?)
  `, [
      withdrawal.amount,
      withdrawal.address,
      withdrawal.id,
      withdrawal.requestedTime,
      withdrawal.status,
      withdrawal.transactionId
    ])
  }

  process.exit()
}

init()
