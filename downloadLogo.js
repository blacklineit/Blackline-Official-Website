import https from 'https';
import fs from 'fs/promises';
import { createWriteStream } from 'fs';

// Download white and black logos
const whiteLogoPath = './public/logo-white.png';
const blackLogoPath = './public/logo-black.png';

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(createWriteStream(filepath))
          .on('error', reject)
          .once('close', () => resolve(filepath));
      } else if (res.statusCode === 302 || res.statusCode === 301) {
        // Handle redirects
        console.log(`Redirecting to: ${res.headers.location}`);
        downloadImage(res.headers.location, filepath)
          .then(resolve)
          .catch(reject);
      } else {
        // Consume response data to free up memory
        res.resume();
        reject(new Error(`Request Failed. Status Code: ${res.statusCode}`));
      }
    }).on('error', reject);
  });
};

// Try multiple potential URLs for the logos
const tryMultipleUrls = async () => {
  // Current year is 2025, try a range of years
  const years = ['2025', '2024', '2023'];
  const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  
  let whiteLogoFound = false;
  let blackLogoFound = false;

  // Try to find white logo
  for (const year of years) {
    for (const month of months) {
      const url = `https://blacklineit.com/wp-content/uploads/${year}/${month}/blackline_logo_white_rgb_540px_w_300ppi.png`;
      try {
        console.log(`Trying to download white logo from ${url}...`);
        await downloadImage(url, whiteLogoPath);
        console.log(`Successfully downloaded white logo to ${whiteLogoPath}`);
        whiteLogoFound = true;
        break;
      } catch (error) {
        console.log(`Error downloading from ${url}`);
      }
    }
    if (whiteLogoFound) break;
  }

  // Try to find black logo
  for (const year of years) {
    for (const month of months) {
      const url = `https://blacklineit.com/wp-content/uploads/${year}/${month}/blackline_logo_black_rgb_540px_w_300ppi.png`;
      try {
        console.log(`Trying to download black logo from ${url}...`);
        await downloadImage(url, blackLogoPath);
        console.log(`Successfully downloaded black logo to ${blackLogoPath}`);
        blackLogoFound = true;
        break;
      } catch (error) {
        console.log(`Error downloading from ${url}`);
      }
    }
    if (blackLogoFound) break;
  }

  // If white logo download fails, create a placeholder
  if (!whiteLogoFound) {
    console.log('Creating a placeholder white logo...');
    createPlaceholderLogo(whiteLogoPath, 'white');
  }
  
  // If black logo download fails, create a placeholder
  if (!blackLogoFound) {
    console.log('Creating a placeholder black logo...');
    createPlaceholderLogo(blackLogoPath, 'black');
  }
};

const createPlaceholderLogo = async (logoPath, type) => {
  // Simple SVG with "BlackLine IT" text in white or black
  let bgColor = type === 'black' ? 'white' : 'black';
  let textColor = type === 'black' ? 'black' : 'white';
  
  const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="540" height="90" viewBox="0 0 540 90">
  <rect width="540" height="90" fill="${bgColor}" opacity="0"/>
  <text x="270" y="55" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="${textColor}" text-anchor="middle">BlackLine IT</text>
</svg>`;

  await fs.writeFile(logoPath, svgContent);
  console.log(`Created placeholder ${type} logo at ${logoPath}`);
};

tryMultipleUrls();
