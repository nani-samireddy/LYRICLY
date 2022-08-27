import { indexList } from "./songsIndex.js";

const mainIndexContainer = document.getElementById("IndexContainer");
const loadMoreMessage = document.getElementById('loadingMore');

let index = 0;
const limit = 500;


function LoadMainIndex() {
    let linkPrefix = window.location.href.replace("TeluguIndex.html", "") + "songs/";

    for (let count = 0; index < indexList.length && count < limit; index++, count++) {
        const song = indexList[index];
        let link = linkPrefix + song.link
        let element = `<li class="cursor-pointer pt-3 pb-2 pl-3 mb-2 rounded-md text-black text-xl hover:underline"><a href="${link}"> <span class="pl-5"> ${song.title}</span></a></li>`;
        mainIndexContainer.innerHTML = mainIndexContainer.innerHTML + element;

    }


    // indexList.forEach(song => {
    //     let link = linkPrefix + song.link
    //     let element = `<li class="cursor-pointer pt-3 pb-2 pl-3 mb-2 rounded-md text-black text-xl hover:underline"><a href="${link}"> <span class="pl-5"> ${song.title}</span></a></li>`;
    //     mainIndexContainer.innerHTML = mainIndexContainer.innerHTML + element;
    // });

}

window.onscroll = function (ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        if (index < indexList.length) {
            LoadMainIndex();
        } else {
            loadMoreMessage.classList.remove('block');
            loadMoreMessage.classList.add('hidden');

        }
    }
};

LoadMainIndex()
