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
  const sbi = '106284736' // fixed for auth verification
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
    // Analyse the main review offer page
    await analyseAccessibility('Review Offer Page')

    // Switch to printable agreement tab and analyse
    await reviewOfferPage.clickPrintableAgreementLinkAndSwitchTab()
    await analyseAccessibility('Printable Agreement Tab')

    // Go back to main window and continue
    await reviewOfferPage.goToMainWindow()
    await analyseAccessibility('Review Offer Main Window')

    await reviewOfferPage.selectContinue()
    await analyseAccessibility('Accept Your Offer Page')

    await acceptYourOfferPage.clickConfirmCheckbox()
    await acceptYourOfferPage.selectAcceptOffer()
    await analyseAccessibility('Offer Confirmation Page')

    await offerAcceptedPage.clickAgreementDocumentLink()
    await analyseAccessibility('Agreement Document Page')

    // Generate reports after all analyses
    generateAccessibilityReports('agreement-accessibility-pages')
  })
})
