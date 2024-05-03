const validateResource = schema => (req, res, next) => {
  try {
    schema.parse({
      body: req.body,
      body: req.body,
      query: req.query,
      params: req.params,
    })

    next()
  } catch (event) {
    return res.sendStatus(400).send(event.errors)
  }
}

module.exports = validateResource
