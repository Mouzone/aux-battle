import './style.css';
// user adding song page
const playing = true

const queue = document.getElementById("queue")
const form = document.querySelector("form")
form.addEventListener("submit", event => {
    event.preventDefault()
    const song_link = document.getElementById("song_link").value
    const song_info = song_link.split("/").at(-1)
    if (song_link.includes("spotify")) {
        if (!playing){
            const spotify_player = document.getElementById("spotify-player")
            spotify_player.src = `https://open.spotify.com/embed/track/${song_info}?utm_source=generator`
        } else {
            const queue_item = document.getElementById("spotify-player").cloneNode(true)
            queue_item.id = ""
            queue_item.classList.add("queue-item")
            queue_item.src = `https://open.spotify.com/embed/track/${song_info}?utm_source=generator`
            queue.appendChild(queue_item)
        }

    //     if no song is playing then submit
        // else add to queue if any song is currently playing
    } else {
        // popup saying song selection is invalid
    }
    // ability to add, remove, change order (by drag) songs in queue
})

