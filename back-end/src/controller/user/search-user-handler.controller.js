const { omit } = require('loadsh')

const logger = require('../../utils/logger')
const { searchAvailabeGroups } = require('../../service/user.service')

async function searchAvailabeGroupsHandler(req, res) {
  const groups = await searchAvailabeGroups()
  return res.send(groups)
}

module.exports = { searchAvailabeGroupsHandler }
