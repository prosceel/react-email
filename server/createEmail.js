const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();

const main = async () => {
  let data = null;

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3090', { waitUntil: 'domcontentloaded' });

    data = await page.evaluate(() => document.documentElement.innerHTML);
    fs.writeFileSync(path.resolve(__dirname, '../build/email.html'), data);

    await browser.close();
  } catch (e) {
    console.error(e);
  }

  if (!data) {
    return;
  }

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: 'ithesdv@gmail.com bar@example.com baz@example.com', // list of receivers
      subject: 'Hello ✔', // Subject line
      html: data, // html body
    });

    console.log('All done');
  } catch (e) {
    console.error(e);
  }
};

module.exports = main;
