const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.get('/upload-your-files', function (req, res) {
  res.render('upload-your-files')
})

module.exports = router
