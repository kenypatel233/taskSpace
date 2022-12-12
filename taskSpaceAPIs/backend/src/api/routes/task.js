const express = require('express');

const {createTask, listTasks} = require('../controllers/task');
const router = express.Router();

//router.route('/api/tasklist').get(listAllTasks)
router.route('/api/createTask').post(createTask)
router.route('/api/tasklist').get(listTasks)

module.exports = router;