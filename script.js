let currentSong = new Audio();
let songs;

const SONGS_LIST = [
    "Dil-Tu-Jaan-Tu.mp3",
    "Ishq-Hai.mp3",
    "Perfect.mp3",
    "Tenu-Sang-Rakhna.mp3",
    "Zaroor.mp3"
];

function secondsToMinutesSeconds(seconds) {
    if(isNaN(seconds) || seconds < 0) {
        return "00:00"
    }

    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = Math.floor(seconds % 60)

    const formattedMinutes = String(minutes).padStart(2, '0')
    const formattedSeconds = String(remainingSeconds).padStart(2, '0')

    return `${formattedMinutes}:${formattedSeconds}`
}

async function getSongs() {
    return SONGS_LIST;
}

const playMusic = (track, pause = false)=> {
    const trackFile = track.endsWith('.mp3') ? track : track.replaceAll(' ', '-') + '.mp3'
    currentSong.src = "/songs/" + trackFile
    if(!pause) {
        currentSong.play()
        play.src = "svg/pause.svg"
    }     
    document.querySelector(".songinfo").innerHTML = decodeURI(track.replace('.mp3', '').replaceAll('-', ' '))
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00"
}

async function main() {
    // Get the list of all the songs
    songs = await getSongs()
    playMusic(songs[0], true)

    // Show all the songs in the playlist
    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0]
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `<li><i class="fa-solid fa-music"></i>
                            <div class="info">
                                <div>${song.replace('.mp3', '').replaceAll('-', ' ')}</div>
                            </div>
                            <div class="playnow">
                                <span>Play Now</span>
                                <i class="fa-regular fa-circle-play"></i>
                            </div></li>`;
    }

    // Attach an event listener to each song
    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e=> {
        e.addEventListener("click", element=> {
            console.log(e.querySelector(".info").firstElementChild.innerHTML)
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
        })    
    })

    // Attach an event listener to play
    play.addEventListener("click", ()=> {
        if(currentSong.paused) {
            currentSong.play()
            play.src = "svg/pause.svg"
        }
        else {
            currentSong.pause()
            play.src = "svg/play.svg"
        }
    })

    // Attach an event listener to previous
    previous.addEventListener("click", ()=> {
        let index = songs.indexOf(currentSong.src.split("/").slice(-1) [0])
        if((index-1) >= 0) {
            playMusic(songs[index-1])
        }
    })

    // Attach an event listener to next
    next.addEventListener("click", ()=> {
        let index = songs.indexOf(currentSong.src.split("/").slice(-1) [0])
        if((index+1) < songs.length) {
            playMusic(songs[index+1])
        }
    })

    // Listen for timeupdate event
    currentSong.addEventListener("timeupdate", ()=> {
        console.log(currentSong.currentTime, currentSong.duration)
        document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`

        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%"
    })

    // Add an event listener to seekbar
    document.querySelector(".seekbar").addEventListener("click", e=> {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100
        document.querySelector(".circle").style.left = percent + "%"
        currentSong.currentTime = ((currentSong.duration) * percent) / 100
    })

    // Add an event listener for hamburger
    document.querySelector(".hamburger").addEventListener("click", ()=> {
        document.querySelector(".left").style.left = "0"
    })

    // Add an event listener for close button
    document.querySelector(".close").addEventListener("click", ()=> {
        document.querySelector(".left").style.left = "-120%"
    })

    // Add an event to volume
    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e)=> {
        console.log("Setting volume to", e.target.value, "/ 100")
        currentSong.volume = parseInt(e.target.value) / 100
    })
}

main()