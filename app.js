const express = require('express')
const addDays = require('date-fns/addDays')

const app = express()

app.get('/', (request, response) => {
  const dateTime = new Date()
  let nextday = addDays(
    new Date(dateTime.getFullYear(), dateTime.getMonth(), dateTime.getDate()),
    100,
  )
  response.send(
    `${nextday.getDate()}/${nextday.getMonth() + 1}/${nextday.getFullMonth()}`,
  )
})

app.listen(3000)
module.exports = app
