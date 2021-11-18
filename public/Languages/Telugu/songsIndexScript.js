import { indexList } from './songsIndex.js';



const searchQueryInputElement = document.getElementById('searchQuery');
const searchResultsUL = document.getElementById('searchResultsUL');

const searchModal = document.getElementById('SearchModal');
const searchModalCloseBtn = document.getElementById('searchModalCloseBtn');


const indexesContainer = document.getElementById('IndexesContainer');
const largeSizeIndexes = document.getElementById('MainIndexContainer');

const mobileIndexContainer = document.getElementById('MobileIndexContainer');
const mobileIndexes = document.getElementById('floatIndexesContainer');

var mainCount = 0, mobileCount = 0, currentSongIndex = 0;

function loadMore(range, type) {
    const docElement = type == "mobile" ? mobileIndexes : indexesContainer;

    const limit = type == "mobile" ? (mobileCount + range) : (mainCount + range);


    for (let index = type == "mobile" ? mobileCount : mainCount; index < indexList.length && index < limit; index++) {
        const element = indexList[index];
        let title = element.title;
        if (title.length > 25) {
            title = title.substring(0, 25) + "...";
        }
        let spanStr = `<a href="${element.link}" class="items-center"><li class=" cursor-pointer pt-3 pb-2 pl-3 mb-2 rounded-md text-black text-lg hover:bg-green-600  hover:text-white"><span class="pl-5"> ${title}</span></li></a>`
        docElement.innerHTML = docElement.innerHTML + spanStr;
        if (type == "mobile") {
            mobileCount++;
        } else {
            mainCount++;
        }
    }
}

function floatLoadMore(range) {
    loadMore(range, "mobile");
}


function mainLoadMore(range) {
    loadMore(range, "largerscreen");
}



loadMore(100, "largerscreen");


loadMore(100, "mobile");






///Search functionality
//event listeners

//search bar click
searchBar.addEventListener('click', () => {
    searchModal.classList.toggle('hidden');
    searchModal.classList.toggle('flex');
});

//search query onchange event listener
searchQueryInputElement.addEventListener('change', () => {
    let query = searchQueryInputElement.value;
    console.log(query);
    sortTitles(query);
});

//search modal close btn
searchModalCloseBtn.addEventListener('click', () => {
    searchModal.classList.toggle('flex');
    searchModal.classList.toggle('hidden');
})


function sortTitles(query) {
    let containsList = indexList.filter(song => song.title.toLowerCase().startsWith(query.toLowerCase()));
    searchResultsUL.innerHTML = "";
    if (containsList.length != 0) {
        containsList.forEach(element => {
            let html = `  <a href="" class=""><li class=" cursor-pointer pt-3 pb-2 pl-3 mb-2 rounded-md text-black text-lg hover:bg-green-600  hover:text-white"><span class="pl-5"> ${element.title}</span></li></a>`;
            searchResultsUL.innerHTML = searchResultsUL.innerHTML + html;
        });
    } else {
        searchResultsUL.innerHTML = `<h2>Nothing Found ☹ </h2>`
    }

}

