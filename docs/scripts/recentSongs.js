const recentSongs = [
    {
        title: "song 1",
        link: "#",
    }, {
        title: "song 2",
        link: "#",
    }, {
        title: "song 3",
        link: "#",
    }, {
        title: "song 4",
        link: "#",
    }, {
        title: "song 5",
        link: "#",
    },
];


const recentSongsDiv = document.getElementById('recentSongsDiv');

function loadRecentSongs() {
    recentSongsDiv.innerHTML = "";
    recentSongs.forEach(element => {
        recentSongsDiv.innerHTML = recentSongsDiv.innerHTML + `<li class="" title="Share this song lyrics"><a href="${element.link}" class="m-1 hover:underline hover:text-black font-medium">${element.title}</a>`;
    });
}

loadRecentSongs();