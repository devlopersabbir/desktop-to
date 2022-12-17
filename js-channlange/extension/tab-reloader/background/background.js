chrome.tabs.query({ active: true, currentWindow: false }, function (e) {
  console.log(e);
});
