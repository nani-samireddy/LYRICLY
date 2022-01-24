import { indexList } from './songsIndex.js';
import { copytToClipboard } from '../../../scripts/copyAndDownload.js';
import { openMail } from '../../../scripts/reportOnSong.js';

const songId = document.getElementById('songId').innerHTML;
const song = document.getElementById('song');
const copytToClipboardButton = document.getElementById('copytoClipboardButton');
const reportBtn = document.getElementById('reportOnSong');

copytToClipboardButton.addEventListener('click', () => {
    console.log(song.textContent);
    copytToClipboard(song.textContent);
})




/* 
* Finds out the songId and Calls the openMail function with this songId
*/

reportBtn.addEventListener('click', () => {
    let Id = songId;
    openMail(Id);
});
