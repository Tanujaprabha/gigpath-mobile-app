import { Builder } from 'selenium-webdriver';
import seleniumCommand from 'selenium-webdriver/lib/command.js';
const { Command } = seleniumCommand;
import path from 'path';

(async () => {
  const apkPath = path.resolve(process.cwd(), 'android/app/build/outputs/apk/debug/app-debug.apk');
  const capabilities = {
    browserName: '',
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:app': apkPath,
    'appium:appPackage': 'com.gigpath.app',
    'appium:appActivity': 'com.gigpath.app.MainActivity',
    'appium:autoGrantPermissions': true,
  };

  let driver = await new Builder()
    .usingServer('http://127.0.0.1:4723/')
    .withCapabilities(capabilities)
    .build();

  driver.getExecutor().defineCommand('getContexts', 'GET', '/session/:sessionId/contexts');
  driver.getExecutor().defineCommand('getCurrentContext', 'GET', '/session/:sessionId/context');
  
  console.log("Waiting for webview...");
  let contexts = [];
  for(let i=0; i<15; i++) {
      contexts = await driver.execute(new Command('getContexts'));
      console.log(`Attempt ${i}: contexts = ${contexts}`);
      if(contexts.length > 1) break;
      await driver.sleep(2000);
  }
  
  console.log("Page Source (Native):");
  // const source = await driver.getPageSource();
  // console.log(source.substring(0, 1000));
  
  await driver.quit();
})();
