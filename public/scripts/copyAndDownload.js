async function updateClipboard() {
    let link = document.location.href;
    navigator.permissions.query({ name: "clipboard-write" }).then(result => {
        if (result.state == "granted" || result.state == "prompt") {
            
        }
    });

}