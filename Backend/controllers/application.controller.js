const Application = require('../models/application.model');

/**
 * Create a new application.
 *
 * @param {object} req - The request object containing all the details of the application to be created.
 * @param {object} res - The response object.
 */
exports.createApplication = async (req, res) => {
  try {
    const application = new Application(req.body);
    const savedApplication = await application.save();
    res.status(201).send(savedApplication);
  } catch (error) {
    console.error('Erro ao criar aplicação:', error.message); 

    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ errors });
    }

    res.status(500).json({ message: 'Internal Error' });
  }
};
  
  /**
 * Get all applications.
 *
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 */
  exports.getAllApplications = async (req, res) => {
    try {
      const applications = await Application.find();
      res.status(200).send(applications);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
 * Get an application by ID.
 *
 * @param {object} req - The request object containing the ID of the application to be retrieved.
 * @param {object} res - The response object.
 */
  exports.getApplicationById = async (req, res) => {
    try {
      const application = await Application.findById(req.params.id);
      if (!application) {
        return res.status(404).send({ message: 'Application not found' });
      }
      res.status(200).send(application);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
 * Update an application by ID.
 *
 * @param {object} req - The request object containing the ID of the application to be updated and the update details.
 * @param {object} res - The response object.
 */
  exports.updateApplicationById = async (req, res) => {
    try {
      const application = await Application.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!application) {
        return res.status(404).send({ message: 'Application not found' });
      }
      res.status(200).send(application);
    } catch (error) {
      res.status(400).send(error);
    }
  };
  
  /**
 * Delete an application by ID.
 *
 * @param {object} req - The request object containing the ID of the application to be deleted.
 * @param {object} res - The response object.
 */
  exports.deleteApplicationById = async (req, res) => {
    try {
      const application = await Application.findByIdAndDelete(req.params.id);
      if (!application) {
        return res.status(404).send({ message: 'Application not found' });
      }
      res.status(200).send({ message: 'Application deleted successfully' });
    } catch (error) {
      res.status(500).send(error);
    }
  };