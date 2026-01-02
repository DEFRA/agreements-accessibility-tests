import { LoginPage } from '../page-objects/login.page.js'
import {
  analyseAccessibility,
  generateAccessibilityReports,
  initialiseAccessibilityChecking
} from '../helper/accessibility-checking.js'
import { ReviewOfferPage } from '../page-objects/review-offer.page.js'
import { AcceptYourOfferPage } from '../page-objects/accept-your-offer.page.js'
import { OfferAcceptedPage } from '../page-objects/offer-accepted.page.js'
import { setupAgreement } from '../helper/setup-agreement.js'
import { faker } from '@faker-js/faker'
const loginPage = new LoginPage()
const reviewOfferPage = new ReviewOfferPage()
const acceptYourOfferPage = new AcceptYourOfferPage()
const offerAcceptedPage = new OfferAcceptedPage()
describe('Agreement pages', () => {
  const sbi = '106284736' // fixed to hardcode sbi for auth verification- faker.string.numeric(10)
  const frn = faker.string.numeric(10)
  const agreementName = 'E2E Agreement Test Farm'
  const clientRef = 'ref-e2e-001'
  before(async () => {
    await initialiseAccessibilityChecking()
    // Step 1: Create agreement
    const agreementId = await setupAgreement({
      sbi,
      frn,
      agreementName,
      clientRef
    })
    console.log(`Created agreement with ID: ${agreementId}`)
    await loginPage.login()
  })
  it('should analyse accessibility', async () => {
    await analyseAccessibility()
    await reviewOfferPage.clickPrintableAgreementLinkAndSwitchTab()
    await analyseAccessibility()
    await reviewOfferPage.goToMainWindow()
    await reviewOfferPage.selectContinue()
    await analyseAccessibility()
    await acceptYourOfferPage.clickConfirmCheckbox()
    await acceptYourOfferPage.selectAcceptOffer()
    await analyseAccessibility()
    await offerAcceptedPage.clickAgreementDocumentLink()
    await analyseAccessibility()
    generateAccessibilityReports('agreement-accessibility-pages')
  })
})
