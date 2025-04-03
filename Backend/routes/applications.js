const express = require('express');
const router = express.Router();
const ApplicationController = require('../controllers/application.controller');

/**
 * Route serving list of all applications.
 * @name get/applications
 **/
router.get('/', ApplicationController.getAllApplications);
/**
 * Route serving creation of a new application.
 * @name post/applications
 **/
router.post('/', ApplicationController.createApplication);
/**
 * Route serving retrieval of a single application by ID.
 * @name get/applications/:id
 **/
router.get('/:id', ApplicationController.getApplicationById);
/**
 * Route serving update of a single application.
 * @name put/applications/:id
 **/
router.put('/:id', ApplicationController.updateApplicationById);
/**
 * Route serving deletion of a single application.
 * @name delete/applications/:id
 **/
router.delete('/:id', ApplicationController.deleteApplicationById);

module.exports = router;
