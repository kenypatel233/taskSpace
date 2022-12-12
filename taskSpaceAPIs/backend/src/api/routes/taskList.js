const express = require('express');

const {createTaskList} = require('../controllers/taskList');
const router = express.Router();

router.route('/api/createTaskList').post(createTaskList)

module.exports = router;