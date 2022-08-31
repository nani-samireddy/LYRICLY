
function openMail(songId) {
    console.log(songId);
    let address = `lyriclyofficial@gmail.com`
    let subject = `Reporting on song ID : ${songId}`;
    let body = `Please don't change the subject and describe your issue below`;
    document.location.href = `mailto:${address}?subject=${subject}&body= ${body}`;
}

export { openMail };