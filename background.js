chrome.runtime.onInstalled.addListener(function() {
    console.log("Picture-in-Picture Extension installed.");
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete' && /^http/.test(tab.url)) {
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ["contentScript.js"]
        });
    }
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "activate_pip") {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: requestPiP
            });
        });
    }
});

function requestPiP() {
    var video = document.querySelector('video');
    if (video) {
        video.requestPictureInPicture();
    }
}
