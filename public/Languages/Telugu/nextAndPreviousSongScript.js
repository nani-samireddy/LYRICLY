import { indexList } from './songsIndex.js';

///dom objects of next and previous buttons
const previousSongLinkAnchor = document.getElementById('previousSongLinkA');
const nextSongLinkAnchor = document.getElementById('nextSongLinkA');
const currentSongId = document.getElementById('songId').textContent;



function matchSongId(song) {
    return song.iD = currentSongId;
}

function addSongsLinks() {

    let index = indexList.findIndex(matchSongId)
    let previousSongLink = index == 0 ? indexList[index].link : indexList[index - 1].link;
    let nextsongLink = index == indexList.length - 1 ? indexList[index].link : indexList[index + 1].link;
    previousSongLinkAnchor.href = previousSongLink;
    nextSongLinkAnchor.href = nextsongLink;
    console.log('Added next and previous songs links');
}


addSongsLinks();