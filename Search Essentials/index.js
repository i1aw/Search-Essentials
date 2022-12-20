let id = null
chrome.storage.sync.get({
  blockAds: true,
  blockRS: true,
  blockULS: false,
  blockRHS: true
}, function(items) {
  if (items.blockAds) {
    id = setInterval(removeAds,100);
    // Find the sponsored content on the page
    var sponsored = document.querySelectorAll('[aria-label="Ads"]');
  
    // Remove the sponsored content from the page
    sponsored.forEach(function(ad) {
      ad.remove();
    });
  }
  if (items.blockRS) {
    var relatedSearches = document.getElementById("bres");
    relatedSearches.remove();
  }
  if (items.blockULS) {
    var ULS = document.querySelectorAll('[class="ULSxyf"]');
    ULS.forEach(function(item) {
      item.remove();
    });
  }
  if (items.blockRHS) {
    var sidebar = document.getElementById("rhs");
    sidebar.remove();
  }
});

function removeAds() {
  var sponsored = document.querySelectorAll('[aria-label="Ads"]');
  sponsored.forEach(function(ad) {
    ad.remove();
  });
}




