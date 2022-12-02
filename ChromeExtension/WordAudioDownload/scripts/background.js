const deutschword = 'https://www.dwds.de/wb/'
const google = 'https://www.google.com/'

chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
      text: "RDY",
  });
});

function downloadTargetUrl(targetUrl) {
    console.log("Got target url = " + targetUrl);
    if (!targetUrl.endsWith(".mp3")) {
        return;
    }
    chrome.downloads.download({
        url: targetUrl
    }).then(function(result) {
        chrome.action.setBadgeText({text: "Done"});
    } , function(error) {
        chrome.action.setBadgeText({text: "Failed"});
    }
    );
}

chrome.action.onClicked.addListener(async (tab) => {
    if (tab.url.startsWith(deutschword) || tab.url.startsWith(google)) {
        chrome.tabs.sendMessage(tab.id, {text: 'target_url'}, downloadTargetUrl);
    }
});
