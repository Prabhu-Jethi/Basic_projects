let media = document.querySelector(".social-media-containers");

media.addEventListener("click", (event) => {
    console.log("Icon is clicked");
    let target = event.target;
    let listItem = target.closest("li");
    if (listItem) {
        let link = listItem.querySelector("a");
        if (link && link.href) {
            window.open(link.href, "_blank");
        }
    }
});

