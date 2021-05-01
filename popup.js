let button = document.getElementById('openTab');
function trackerOpen(){
    chrome.storage.sync.get("trackUrl", ({ trackUrl }) => {
        chrome.tabs.create({url: trackUrl});
    });
}
button.addEventListener("click",trackerOpen);
