// background.js

// This function runs when the extension is first installed or updated
chrome.runtime.onInstalled.addListener(function() {
  console.log("Extension installed or updated.");
});

// This function runs when a browser action is clicked
chrome.browserAction.onClicked.addListener(function(tab) {
  console.log("Browser action clicked.");
  // Do something, like open a new tab or show a popup
});

// This function runs when a message is received from a content script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log("Message received from content script:", request);
  // Do something with the message, like modify the DOM or send a response back
});

// This function runs when the extension is uninstalled
chrome.runtime.onSuspend.addListener(function() {
  console.log("Extension unloaded.");
});
