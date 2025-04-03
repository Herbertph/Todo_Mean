const mongoose = require('mongoose');

/**
 * Schema for the Application entity.
 * @constructor
 * @param {string} name - Name of the application. Required, at least 3 characters long.
 * @param {string} techStack - The stack of technologies used in the application. Required, at least 5 characters long.
 * @param {boolean} deployed - Flag indicating if the application is currently deployed. Defaults to false.
 * @param {number} monthlyCost - The monthly cost associated with the application. Defaults to 0.
 * @param {string} cloudHostingPlatform - The cloud platform where the application is hosted. Required, must be one of 'Azure', 'AWS', 'GCP', 'Cloudfare', 'Cyclic'.
 */
const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: [3, 'Name must be at least 3 characters long']
      },
      techStack: {
        type: String,
        required: [true, 'Tech Stack is required'],
        minlength: [5, 'Tech Stack must be at least 5 characters long']
      },
      deployed: {
        type: Boolean,
        default: false
      },
      monthlyCost: {
        type: Number,
        default: 0
      },
      cloudHostingPlatform: {
        type: String,
        required: [true, 'Cloud Hosting Platform is required'],
        enum: {
          values: ['Azure', 'AWS', 'GCP', 'Cloudfare', 'Cyclic'],
          message: '{VALUE} is not supported'
        }
      }
    });

    const Application = mongoose.model('Application', Schema);
    module.exports = Application;