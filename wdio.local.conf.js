import { generateAccessibilityReportIndex } from './test/helper/accessibility-checking.js'

export const config = {
  baseUrl: `https://grants-ui.dev.cdp-int.defra.cloud`,
  testAPIEndPointUrl:
    'https://farming-grants-agreements-api.dev.cdp-int.defra.cloud',
  proxy: '/agreement',
  maxInstances: 1,
  capabilities: [
    {
      browserName: 'chrome'
    }
  ],
  runner: 'local',
  specs: ['./test/specs/*.js'],
  exclude: [],
  logLevel: 'info',
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 300000
  },
  onComplete: function (exitCode, config, capabilities, results) {
    generateAccessibilityReportIndex()
  }
}
