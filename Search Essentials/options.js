// Saves options to chrome.storage
function save_options() {
  var blockAdsOption = document.getElementById('ads').checked;
  var blockRSOption = document.getElementById('rs').checked;
  var blockULSOption = document.getElementById('ULS').checked;
  var blockRHSOption = document.getElementById('rhs').checked;
  chrome.storage.sync.set({
    blockAds: blockAdsOption,
    blockRS: blockRSOption,
    blockULS: blockULSOption,
    blockRHS: blockRHSOption
  }, function() {
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    blockAds: true,
    blockRS: true,
    blockULS: false,
    blockRHS: true
  }, function(items) {
    document.getElementById('ads').checked = items.blockAds;
    document.getElementById('rs').checked = items.blockRS;
    document.getElementById('ULS').checked = items.blockULS;
    document.getElementById('rhs').checked = items.blockRHS;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('ads').addEventListener('click', save_options);
document.getElementById('rs').addEventListener('click', save_options);
document.getElementById('ULS').addEventListener('click', save_options);
document.getElementById('rhs').addEventListener('click', save_options);