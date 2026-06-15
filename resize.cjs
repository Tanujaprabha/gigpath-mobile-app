const Jimp = require('jimp');

async function resize() {
  const srcPath = 'C:\\Users\\tanuj\\.gemini\\antigravity-ide\\brain\\a59f0e04-fb02-402f-915b-9753f0809d6b\\gigpath_logo_1781498234665.png';
  try {
    const img = await Jimp.read(srcPath);
    await img.clone().resize(192, 192).writeAsync('public/pwa-192x192.png');
    await img.clone().resize(512, 512).writeAsync('public/pwa-512x512.png');
    console.log('Images resized perfectly.');
  } catch(e) {
    console.error(e);
  }
}
resize();
