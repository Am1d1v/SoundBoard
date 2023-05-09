

let sounds = ["Rain", "Amongus", "Kiss", "Heartbeat"];

sounds.forEach(sound =>{
    let btn = document.createElement("button");
    btn.classList.add("btn");

    btn.innerText = sound;

    btn.addEventListener("click", ()=>{
        stopSongs();
        document.getElementById(sound).play();
    });

    document.getElementById("buttons").append(btn);
})

