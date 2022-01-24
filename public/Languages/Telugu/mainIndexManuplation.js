import { indexList } from "./songsIndex.js";

const mainIndexContainer = document.getElementById("IndexContainer");


function LoadMainIndex() {
    let linkPrefix = window.location.href.replace("TeluguIndex.html", "") + "songs/";
    indexList.forEach(song => {
        let link = linkPrefix + song.link
        let element = `<li class="cursor-pointer pt-3 pb-2 pl-3 mb-2 rounded-md text-black text-xl hover:underline"><a href="${link}"> <span class="pl-5"> ${song.title}</span></a></li>`;
        mainIndexContainer.innerHTML = mainIndexContainer.innerHTML + element;
    });

}


LoadMainIndex()
