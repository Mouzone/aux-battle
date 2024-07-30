import './style.css';

const form = document.querySelector("form")
form.addEventListener("submit", event => {
    event.preventDefault()
    const song_link = document.getElementById("song_link").value
    if (song_link.includes("spotify")) {
        const song_info = song_link.split("/").at(-1)
        const spotify_player = document.getElementById("spotify-player")
        spotify_player.src = `https://open.spotify.com/embed/track/${song_info}?utm_source=generator`
    } else if (song_link.includes("soundcloud")) {

    }

})
