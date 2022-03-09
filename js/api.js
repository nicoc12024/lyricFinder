import * as UI from "./interface.js";
class API {
  constructor(artist, title) {
    this.artist = artist;
    this.title = title;
  }

  askAPI() {
    const url = `https://api.lyrics.ovh/v1/${this.artist}/${this.title}`;

    const songLyric = document.getElementById("song-lyric");
    const titleLyric = document.getElementById("title-lyric");

    fetch(url)
      .then((result) => result.json())
      .then((data) => {
        if (data.lyrics) {
          const { lyrics } = data;
          songLyric.textContent = lyrics;
          titleLyric.textContent = `Lyric of the song: ${this.title} of ${this.artist}`;
        } else {
          UI.msg.classList.add("mb-2", "mt-3", "alert");
          UI.msg.innerHTML = `
          <p class="btn btn-danger p-3 w-75 mx-auto d-block"><strong>The song does not exist, try again</strong></p>
          `;

          UI.form.appendChild(UI.msg);

          setTimeout(() => {
            UI.form.reset();
            UI.msg.remove();
          }, 4000);
        }
      });
  }
}

export default API;
