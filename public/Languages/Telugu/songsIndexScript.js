import { indexList } from './songsIndex.js';



const searchBar = document.getElementById('searchBar');
const searchQueryInputElement = document.getElementById('searchQuery');
const searchResultsUL = document.getElementById('searchResultsUL');

const searchModal = document.getElementById('SearchModal');
const searchModalCloseBtn = document.getElementById('searchModalCloseBtn');



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
            let html = `  <a href="${element.link}" class=""><li class=" cursor-pointer pt-3 pb-2 pl-3 mb-2 rounded-md text-black text-lg hover:bg-green-600  hover:text-white"><span class="pl-5"> ${element.title}</span></li></a>`;
            searchResultsUL.innerHTML = searchResultsUL.innerHTML + html;
        });
    } else {
        searchResultsUL.innerHTML = `<h2>Nothing Found ☹ </h2>`
    }

}




