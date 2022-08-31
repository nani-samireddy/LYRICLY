import { indexList } from './songsIndex.js';
import { copytToClipboard } from '../../scripts/copyAndDownload.js';
import { openMail } from '../../scripts/reportOnSong.js';

const songId = document.getElementById('songId').innerHTML;
const song = document.getElementById('song');
const shareBtn = document.getElementById('shareButton')
const copytToClipboardButton = document.getElementById('copytoClipboardButton');
const reportBtn = document.getElementById('reportOnSong');
const imageConatiner = document.getElementById('songContainer');
const downloadBtn = document.getElementById('downloadBtn');

copytToClipboardButton.addEventListener('click', () => {
    console.log(song.innerText);
    navigator.clipboard.writeText(song.innerText);

    //copytToClipboard(song.textContent);
})

/**
 * copy the link to the clipboard
 */

shareBtn.addEventListener('click', () => {
    let link = window.location.href;
    console.log(link);
    navigator.clipboard.writeText(link);
    alert("Link Copied to the clipboard");
});

/* 
* Finds out the songId and Calls the openMail function with this songId
*/

reportBtn.addEventListener('click', () => {
    let Id = songId;
    openMail(Id);
});

/**
 * download image
 */

downloadBtn.addEventListener('click', () => {

    html2canvas(imageConatiner, { allowTaint: true }).then(function (canvas) {
        var link = document.createElement("a");
        document.body.appendChild(link);
        link.download = "html_image.jpg";
        link.href = canvas.toDataURL();
        link.target = '_blank';
        link.click();
    });
});