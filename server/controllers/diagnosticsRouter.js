const diagnosticsRouter = require('express').Router()

diagnosticsRouter.get('/version', (_req, res) => {
  res.send('yarg')
})

diagnosticsRouter.get('/health', (_req, res) => {
  res.send('ok')
})

diagnosticsRouter.get('/periodic-health', (_req, res) => {
  const currentMinutes = new Date().getMinutes()
  if (currentMinutes < 30 && currentMinutes >= 0) res.send('ok') //Send response only in the first half of every hour
})

module.exports = diagnosticsRouter
