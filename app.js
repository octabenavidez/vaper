if (ereg("Mobile.*Safari",$_SERVER['HTTP_USER_AGENT'])) {
    const video = document.querySelector("#bgvid")
    video.remove()

    const section = document.querySelector("#sectionVideo") 
    const img = document.createElement("img")
    img.setAttribute("src", "pexels-tetyana-kovyrina-937980.jpg");

    section.append(img)
}