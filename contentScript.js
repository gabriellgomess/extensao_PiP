chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "activate_pip") {
        var video = document.querySelector('video');
        if (video) {
            video.requestPictureInPicture();
        }
    }
});
