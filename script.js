let currentSong = new Audio();
let songs = [
    { name: "Song 1", url: "songs\128-Dil Tu Jaan Tu - Gurnazar 128 Kbps.mp3" },
    { name: "Song 2", url: "songs\128-Tenu Sang Rakhna - Jigra 128 Kbps.mp3" },
    { name: "Song 3", url: "songs\Ishq Hai - (Raag.Fm).mp3" },
    { name: "Song 4", url: "songs\Perfect-(Mr-Jat.in).mp3" },
    { name: "Song 5", url: "songs\Zaroor Aparshakti Khurana 128 Kbps.mp3" }
];

function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
}

const playMusic = (song, pause = false) => {
    currentSong.src = song.url;
    if (!pause) {
        currentSong.play();
        play.src = "svg/pause.svg";
    }
    document.querySelector(".songinfo").innerHTML = decodeURI(song.name);
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00";
};

async function main() {
    playMusic(songs[0], true);

    // Display the songs in the playlist
    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0];
    songs.forEach(song => {
        songUL.innerHTML += `<li>
            <i class="fa-solid fa-music"></i>
            <div class="info">
                <div>${song.name}</div>
            </div>
            <div class="playnow">
                <span>Play Now</span>
                <i class="fa-regular fa-circle-play"></i>
            </div>
        </li>`;
    });

    // Attach event listeners to each song
    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach((e, index) => {
        e.addEventListener("click", () => {
            playMusic(songs[index]);
        });
    });

    // Play/Pause functionality
    play.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play();
            play.src = "svg/pause.svg";
        } else {
            currentSong.pause();
            play.src = "svg/play.svg";
        }
    });

    // Previous song functionality
    previous.addEventListener("click", () => {
        let index = songs.findIndex(song => song.url === currentSong.src);
        if (index > 0) {
            playMusic(songs[index - 1]);
        }
    });

    // Next song functionality
    next.addEventListener("click", () => {
        let index = songs.findIndex(song => song.url === currentSong.src);
        if (index < songs.length - 1) {
            playMusic(songs[index + 1]);
        }
    });

    // Update song time and seekbar
    currentSong.addEventListener("timeupdate", () => {
        document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`;
        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
    });

    // Seekbar functionality
    document.querySelector(".seekbar").addEventListener("click", e => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = percent + "%";
        currentSong.currentTime = (currentSong.duration * percent) / 100;
    });

    // Hamburger menu functionality
    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0";
    });

    // Close button functionality
    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-120%";
    });

    // Volume control
    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", e => {
        currentSong.volume = parseInt(e.target.value) / 100;
    });
}

main();
