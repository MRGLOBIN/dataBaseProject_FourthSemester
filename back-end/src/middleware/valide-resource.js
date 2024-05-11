const validateResource = schema => (req, res, next) => {
  try {
    schema.parse({
      body: req.body,
      query: req.query,
      params: req.params,
    })

    next()
  } catch (event) {
    return res.status(400).send(event.errors)
  }
}

module.exports = validateResource
