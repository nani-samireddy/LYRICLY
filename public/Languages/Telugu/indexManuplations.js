import { indexList } from './songsIndex.js';



const indexesContainer = document.getElementById('IndexesContainer');
const largeSizeIndexes = document.getElementById('MainIndexContainer');

const mobileIndexContainer = document.getElementById('MobileIndexContainer');
const mobileIndexes = document.getElementById('floatIndexesContainer');

const mobileShowMoreButton = document.getElementById('mobileShowMoreButton');
const largerscreenShowMoreButton = document.getElementById('largerscreenShowMoreButton');

const menuButton = document.getElementById('MenuButton');
const menuSVG = document.getElementById('menuSVG');
const closeSVG = document.getElementById('closeSVG');


var mainCount = 0, mobileCount = 0, currentSongIndex = 0;


//event listeners

menuButton.addEventListener('click', () => {
    console.log('Menu button');
    mobileIndexToggle();
});

mobileShowMoreButton.addEventListener('click', () => {
    floatLoadMore(100);
});

largerscreenShowMoreButton.addEventListener('click', () => {
    mainLoadMore(100);
});

//end of the event listeners


//functions


function mobileIndexToggle() {
    mobileIndexContainer.classList.toggle('hidden');
    menuSVG.classList.toggle('hidden');
    closeSVG.classList.toggle('hidden');
}


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

