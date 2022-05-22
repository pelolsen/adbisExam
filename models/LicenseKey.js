//---------------------------------------------------------------------------------------
// Copyright (c) 2001-2021 by PDFTron Systems Inc. All Rights Reserved.
// Consult legal.txt regarding legal and license information.
//---------------------------------------------------------------------------------------

//"Enter your key here. If you don't have it, please go to https://www.pdftron.com/pws/get-key to obtain a demo license or https://www.pdftron.com/form/contact-sales to obtain a production key.
//Enter your LicenceKey form PDFTRON here:
const LicenseKey = 'demo:1653207800890:7b864045030000000031e5e966c1d44c87e2516edbf532c3edc54ef0f0';
if(LicenseKey == 'YOUR_PDFTRON_LICENSE_KEY'){
    throw ('Please enter your license key by replacing \'YOUR_PDFTRON_LICENSE_KEY\' that is assigned to the LicenseKey variable in Samples/LicenseKey/LicenseKey.js. If you do not have a license key, please go to https://www.pdftron.com/pws/get-key to obtain a demo license or https://www.pdftron.com/form/contact-sales to obtain a production key.');
}
exports.Key = LicenseKey;
