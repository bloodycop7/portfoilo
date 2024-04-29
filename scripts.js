function PlayPressSound() {
    var audio = document.getElementById("pressSound");
    audio.volume = 0.1;
    audio.play();
}

window.addEventListener("input", function() {
    PlayPressSound();
})

function OpenGithub() {
    window.open("https://github.com/bloodycop7");
}

function OpenYoutube() {
    window.open("https://www.youtube.com/channel/UCurHS3iLyptMSQsxUtz21hQ");
}

function OpenSteam() {
    window.open("https://steamcommunity.com/id/bloodycop/");
}

function GoToMinerva() {
    window.open("https://discord.gg/minervaservers");
}

function GoToIXEHL2RP() {
    window.open("https://github.com/bloodycop7/ixehl2rp");
}