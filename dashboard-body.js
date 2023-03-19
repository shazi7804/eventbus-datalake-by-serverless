module.exports.dashboardBody = (serverless) => {
    const fsPromises = require('fs').promises
    return fsPromises.readFile('dashboard.json', 'utf-8')
};