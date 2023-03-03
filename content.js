// content.js

// This function runs when the page is loaded
window.onload = function() {
  // Find the table you want to manipulate
  var table = document.getElementById("my-table");

  // Change the background color of the table headers
  var headers = table.getElementsByTagName("th");
  for (var i = 0; i < headers.length; i++) {
    headers[i].style.backgroundColor = "#ccc";
  }

  // Add a border to the table cells
  var cells = table.getElementsByTagName("td");
  for (var i = 0; i < cells.length; i++) {
    cells[i].style.border = "1px solid black";
  }

  // Change the font size of the table text
  table.style.fontSize = "12px";
};
