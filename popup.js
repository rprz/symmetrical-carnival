// popup.js

// Get the elements from the popup.html file
var urlInput = document.getElementById("url");
var saveButton = document.getElementById("save");

// When the user clicks the Save button, save the URL to local storage
saveButton.addEventListener("click", function() {
  var url = urlInput.value;
  chrome.storage.local.set({ "url": url }, function() {
    console.log("URL saved:", url);
  });
});
