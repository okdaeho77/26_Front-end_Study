console.log("하이!")

//audio 가져오기s
const music = document.querySelector(".music");
console.log(music);

const tape = document.querySelector(".icon-play");
console.log(tape);

tape.addEventListener("click", ()=>{
    music.src = "./src/mp3/IVE (아이브) Blackhole.mp3"
    music.autoplay = true;
    music.muted = true;
    console.log('야호!')
})