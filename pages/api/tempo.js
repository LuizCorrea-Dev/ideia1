function tempo(request, response) {
  const dynamicDate = Date()

  response.json({
    date: dynamicDate.toGMTString()
  })
}

export default tempo