
function searchAudioUrl () {
  const audioTag = document.querySelector("audio");
  if (audioTag) {
    if (audioTag.childElementCount > 0) {
        const audioSrc = audioTag.children[0].src;
        console.log("url is:" + audioSrc);
        return audioSrc;
    } else {
        const audioSrc = audioTag.src;
        console.log("url is: " + audioSrc);
        return audioSrc;
    }
  }
  return null;
}

chrome.runtime.onMessage.addListener(
    function (msg, sender, sendResponse) {
        if (msg.text == "target_url") {
            const audioUrl = searchAudioUrl();
            if (audioUrl) {
                sendResponse(audioUrl) 
            }
        }
    }
)


