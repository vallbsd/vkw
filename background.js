var tabid;

browser.browserAction.onClicked.addListener(function() {
  browser.tabs.query({currentWindow: true, active:true})
    .then(function(tab) {tabid = tab[0].id})
      .then(function() {browser.tabs.sendMessage(tabid, "click");})
});
