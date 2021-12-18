


window.addEventListener("keydown", (e) => {
    const box = document.querySelector(`div[data-key="${e.key}"]`); 
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    if (!audio) return;
    if (e.repeat) return;
    audio.currentTime = 0;
    audio.play();
    box.setAttribute("class", "key playing");
});

window.addEventListener("keyup", (e) => {
    const box = document.querySelector(`div[data-key="${e.key}"]`); 
    box.setAttribute("class", "key");
});

// `audio[data-key="${e.keyCode}"]`