import * as UI from "./interface.js";
import API from "./api.js";

UI.form.addEventListener("submit", searchSong);

function searchSong(e) {
  e.preventDefault();

  const artist = document.getElementById("artist").value;
  const title = document.getElementById("title").value;

  if (artist === "" || title === "") {
    UI.msg.classList.add("mb-2", "mt-3", "alert");
    UI.msg.innerHTML = `
    <p class="btn btn-danger p-3 w-75 mx-auto d-block"><strong>Error! both fields are mandatory</strong></p>
    `;

    UI.form.appendChild(UI.msg);

    setTimeout(() => {
      UI.msg.remove();
    }, 4000);

    return;
  }

  // Ask the API
  const search = new API(artist, title);
  search.askAPI();
}
