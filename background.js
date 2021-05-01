let trackUrl = "https://www.amazon.in/dp/B08L8SRSFN/?coliid=I2RVG7QDNNEMCW&colid=107Z04I75NYJ3&psc=0";
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ trackUrl });
    // chrome.tabs.create('url',trackUrl);
});