
export function copytToClipboard(song) {
    let link = document.location.href;
    navigator.permissions.query({ name: "clipboard-write" }).then(result => {
        if (result.state == "granted" || result.state == "prompt") {

            navigator.clipboard.writeText(song);

        }
    });
}