const express = require('express');
const {handleGenerateNewShortURL, handleRidrectURL,handleGetAnalytics} = require('../controllers/url');
const router = express.Router();

router.route('/').post(handleGenerateNewShortURL)
router.route('/:shortId').get(handleRidrectURL);
router.route('/analytics/:shortId').get(handleGetAnalytics);

module.exports = router;