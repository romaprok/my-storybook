const { injectAxe, checkA11y } = require('axe-playwright');

module.exports = {
  async preRender(page) {
    await injectAxe(page);
  },
  async postRender(page) {
    await checkA11y(page, {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
    });
  },
}; 