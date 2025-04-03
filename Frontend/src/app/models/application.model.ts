/**
 * Model for Application
 * 
 * @param {string} _id The unique identifier of the application.
 * @param {string} name The name of the application.
 * @param {string} techStack The technology stack used by the application.
 * @param {boolean} deployed Whether the application is deployed or not.
 * @param {number} monthlyCost The monthly cost of the application.
 * @param {string} cloudHostingPlatform The cloud hosting platform used by the application.
 * 
 */

export interface Application {

    _id?: string;
    name: string;
    techStack: string;
    deployed: boolean;
    monthlyCost: number;
    cloudHostingPlatform: string;
  }
  