const { test, expect } = require('@playwright/test')

//import { test, expect } from '@playwright/test';

test('Buyer Registration', async ({ page }) => {

  await page.goto('/');

  // Click Register
  await page.getByText('Register').click();

  // Select Buyer
  await page.getByRole('button', { name: 'Buyer' }).click();

  await page.getByText('COMPANY INFORMATION').click();

  // Fill Company Information
  await page.locator('#name').fill('Gokul Arun');

  await page.getByRole('textbox', { name: 'Email Address for' }).fill('gokulraj1997ss@gmail.com');

  // Select Country Code
  await page.locator('#react-select-2-input').fill('91');
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: '+91' }).click();
  await page.waitForTimeout(1000);
  // Phone Number
  await page.getByRole('textbox', { name: 'Phone No*' }).fill('9787880134');

  // Company Details
  await page.getByRole('textbox', { name: 'Company Name*' }).fill('ASIAN TERMINALS INC');
  await page.getByRole('textbox', { name: 'Company Website*' }).fill('igo.com');
  await page.getByRole('textbox', { name: 'Company Registration Number*' }).fill('872344');
  await page.getByRole('textbox', { name: 'Company Corporate Tax Number*' }).fill('Sales');

  // Area of Business
  await page.locator('.css-5qgny4-control').first().click();
  await page.getByRole('option', { name: 'Terminal/Port operations' }).click();

  // Terminal Info
  await page.getByRole('textbox', { name: 'Terminal Name*' }).fill('APMT DISC');
  await page.getByRole('textbox', { name: 'Terminal Code' }).fill('1234');

  // Address
  await page.getByRole('textbox', { name: 'Address Line 1*' }).fill('1/193 a, main road');

  // COUNTRY

  const countryDropdown = page.getByText('Country').locator('..').getByRole('combobox');

  await countryDropdown.click();
  await page.keyboard.type('India');
  await page.getByRole('option', { name: 'India' }).click();


  // STATE
  const stateDropdown = page.getByText('State / Province').locator('..').getByRole('combobox');

  await stateDropdown.click();
  await page.keyboard.type('Tamil Nadu');
  await page.getByRole('option', { name: 'Tamil Nadu' }).click();
  // CITY
  const cityDropdown = page.getByText('City').locator('..').getByRole('combobox');

  await cityDropdown.click();
  await page.keyboard.type('Chennai');
  await page.getByRole('option', { name: 'Chennai' }).click();



  // Postal Code
  await page.getByRole('textbox', { name: 'Postal / Zip Code*' }).fill('876544');

  // Upload Files

  await page.locator('input[name="companyRegistrationCertificate"]')
    .setInputFiles('1000190570.pdf');

  await page.locator('input[name="companyLogo"]')
    .setInputFiles('Buyer LOGO.jpg');


  await page.locator('#AccordionOpenIcon_1').click();



  await page.getByText('CONTACT INFORMATION - BUYER').click();

  await page.locator('.css-19bb58m').first().click();
  await page.getByRole('option', { name: 'MR', exact: true }).click();
  await page.getByRole('textbox', { name: 'First Name*' }).click();
  await page.getByRole('textbox', { name: 'First Name*' }).fill('Deepak');
  await page.getByRole('textbox', { name: 'Middle Name' }).click();
  await page.getByRole('textbox', { name: 'Middle Name' }).fill('S');
  await page.getByRole('textbox', { name: 'Last Name*' }).click();
  await page.getByRole('textbox', { name: 'Last Name*' }).fill('Kumar');
  await page.locator('.w-1\\/2 > .css-b62m3t-container > .css-5qgny4-control > .css-hlgwow > .css-19bb58m').click();
  await page.getByRole('option', { name: 'Planning' }).click();
  await page.getByRole('textbox', { name: 'Title Held*' }).click();
  await page.getByRole('textbox', { name: 'Title Held*' }).fill('Plan');


  const phoneCode = page.getByText('Phone No').locator('..').getByRole('combobox');

  await phoneCode.click();
  await page.keyboard.type('91');
  await page.getByRole('option', { name: '+91' }).click();

  await page.getByRole('textbox', { name: 'Phone No*' }).click();
  await page.getByRole('textbox', { name: 'Phone No*' }).fill('897643562');
  await page.getByRole('textbox', { name: 'Email Address*' }).click();
  await page.getByRole('textbox', { name: 'Email Address*' }).fill('deepak@gmail.com');

  const MobileCode = page.getByText('Mobile No').locator('..').getByRole('combobox');

  await MobileCode.click();
  await page.keyboard.type('591');
  await page.getByRole('option', { name: '+591' }).click();

  await page.getByRole('textbox', { name: 'Mobile No' }).click();
  await page.getByRole('textbox', { name: 'Mobile No' }).fill('736452834');

  await page.locator('#AccordionOpenIcon_2').click();
  await page.getByText('CONTACT INFORMATION - TRANSACTION / PRODUCT INQUIRY').click();
  await page.locator('.css-19bb58m').first().click();
  await page.getByRole('option', { name: 'MS', exact: true }).click();
  await page.getByRole('textbox', { name: 'First Name*' }).click();
  await page.getByRole('textbox', { name: 'First Name*' }).fill('HariPriya');
  await page.getByRole('textbox', { name: 'Middle Name' }).click();
  await page.getByRole('textbox', { name: 'Middle Name' }).fill('S');
  await page.getByRole('textbox', { name: 'Last Name*' }).click();
  await page.getByRole('textbox', { name: 'Last Name*' }).fill('Rajesh');
  await page.locator('.w-1\\/2 > .css-b62m3t-container > .css-5qgny4-control > .css-hlgwow > .css-19bb58m').click();
  await page.getByRole('option', { name: 'Planning' }).click();
  await page.getByRole('textbox', { name: 'Title Held*' }).click();
  await page.getByRole('textbox', { name: 'Title Held*' }).fill('Its a Product enquiry Team');

  const phoneCode1 = page.getByText('Phone No').locator('..').getByRole('combobox');
  await phoneCode1.click();

  await page.keyboard.type('91');
  await page.getByRole('option', { name: '+91' }).click();

  await page.getByRole('textbox', { name: 'Phone No*' }).click();
  await page.getByRole('textbox', { name: 'Phone No*' }).fill('897643562');
  await page.getByRole('textbox', { name: 'Email Address*' }).click();
  await page.getByRole('textbox', { name: 'Email Address*' }).fill('deepak@gmail.com');

  const MobileCode1 = page.getByText('Mobile No').locator('..').getByRole('combobox');

  await MobileCode1.click();
  await page.keyboard.type('591');
  await page.getByRole('option', { name: '+591' }).click();

  await page.getByRole('textbox', { name: 'Mobile No' }).click();
  await page.getByRole('textbox', { name: 'Mobile No' }).fill('736452834');

  //  await page.locator('#AccordionOpenIcon_3').click();

  // await page.locator('#btnAddUser').click();

  await page.locator('#AccordionOpenIcon_3').click();


  // Navigate to GENERAL TERMS
  await page.getByText('GENERAL TERMS').click();

  // 🔹 Fill Order Response Time
  await page.getByRole('textbox', { name: 'Order Response Time Seller' })
    .fill('Response Time Within 3 months');

  // 🔹 Select Incoterm (DAP)
  await page.locator('.css-19bb58m').first().click();
  await page.getByRole('option', { name: 'DAP' }).click();

  // 🔹 Fill Transfer of Title
  await page.getByRole('textbox', { name: 'Transfer of Title*' })
    .fill('DAP');

  // 🔹 Select Merchant
  await page.locator('div:nth-child(2) > div:nth-child(2) > .css-b62m3t-container .css-19bb58m')
    .click();
  await page.getByRole('option', { name: 'Merchant' }).click();


  // 🔹 Fill Buyer Referral Count
  await page.locator('#buyerReferralCount').fill('12');

  // 🔹 Fill Other Requirements
  await page.getByRole('textbox', { name: 'Other Requirements' })
    .fill('Requirements');

  // 🔹 Fill Packing & Delivery
  await page.getByRole('textbox', { name: 'Packing & Delivery' })
    .fill('Without Seal');


  //  Upload File
  await page.locator('input[name="standardTermsAndConditions"]')
    .setInputFiles('1000190570.pdf');

  //   await page.evaluate(() => {
  //   document.body.style.zoom = '70%';   // change to 70%, 60% as needed
  // });


  //  Expand Accordion
  await page.locator('#AccordionOpenIcon_4').click();


  // 🔹 Open Section
  await page.getByText('DELIVERY CONTACT DETAILS').click();

  // 🔹 Port of Delivery
  await page.getByRole('textbox', { name: 'Port of Delivery*' })
    .fill('ADHANI');

  // 🔹 Contact Person
  await page.getByRole('textbox', { name: 'Delivery Contact Person*' })
    .fill('Tamu');

  // 🔹 Email
  await page.getByRole('textbox', { name: 'Email Address*' })
    .fill('tamu@igosolutions.eu');

  const phoneCode2 = page.getByText('Phone No').locator('..').getByRole('combobox');
  await phoneCode2.click();

  await page.keyboard.type('91');
  await page.getByRole('option', { name: '+91' }).click();

  await page.getByRole('textbox', { name: 'Phone No' }).click();
  await page.getByRole('textbox', { name: 'Phone No' }).fill('736452834');

  // 🔹 Delivery Address
  await page.getByRole('textbox', { name: 'Delivery Address Line 1*' })
    .fill('address1998ss main road street');


  // 🔹 Close / Expand Section
  await page.locator('#AccordionOpenIcon_5').click();

  // 🔹 ORDER INVOICING AND PAYMENT
  await page.getByText('ORDER INVOICING AND PAYMENT').click();

  // 🔹 Currency 1 (USD)
  await page.locator('.css-19bb58m').first().click();
  await page.getByRole('option', { name: 'USD' }).click();

  // 🔹 Currency 2 (EUR)
  await page.locator('.css-1enu9t3-control .css-19bb58m').click();
  await page.getByRole('option', { name: 'EUR' }).click();

  // 🔹 Payment Method
  await page.locator('.css-b62m3t-container .css-19bb58m').nth(2).click();
  await page.getByRole('option', { name: 'Bank Transfer' }).click();

  // 🔹 Credit Details
  await page.getByRole('textbox', { name: 'Requested Credit Days' })
    .fill('80 days');

  await page.getByRole('textbox', { name: 'Requested Credit Limit' })
    .fill('4 days');

  // 🔹 Accordion (wait 2 sec as requested)

  await page.locator('#AccordionOpenIcon_6').click();

  // 🔹 BILLING DETAILS SECTION

  await page.getByText('BILLING DETAILS').click();

  // 🔹 Billing Details
  await page.getByRole('textbox', { name: 'Billing Contact Person*' })
    .fill('David');

  await page.getByRole('textbox', { name: 'Company Name*' })
    .fill('David Pvt Ltd');

  await page.getByRole('textbox', { name: 'Company Corporate Tax Number*' })
    .fill('4537465');

  await page.getByRole('textbox', { name: 'Billing Address*' })
    .fill('Address1');

  await page.getByRole('textbox', { name: 'Invoicing Email Address*' })
    .fill('david123@gmail.com');

  // 🔹 File Upload (fixed)
  await page.setInputFiles('input[name="documents"]', '1000190570.pdf');

  // 🔹 Close Accordion (2 sec wait)

  await page.locator('#AccordionComp_7').click();

  // 🔹 Accept Terms
  await page.locator('#btnAcceptTerms').check();
  await page.waitForTimeout(12000);
  // await page.getByText("I'm not a robot").click();
  // await page.waitForTimeout(4000);
  // // 🔹 Submit
  // await page.getByRole('button', { name: 'Submit' }).click();
  // await page.waitForTimeout(2000);

});
