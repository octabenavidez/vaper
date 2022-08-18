if (ereg("Mobile.*Safari",$_SERVER['HTTP_USER_AGENT'])) {
    const sectionPrincipal = document.querySelector("#bgPrincipal")
    const h1 = document.createElement("h1")
    h1.innerText = "Hola"
    
    sectionPrincipal.append(h1)
}

// if (ereg("Mobile.*Safari",$_SERVER['HTTP_USER_AGENT'])) {
//     const video = document.querySelector("#bgvid")
//     video.remove()

//     const section = document.querySelector("#sectionVideo") 
//     const img = document.createElement("img")
//     img.setAttribute("src", "pexels-tetyana-kovyrina-937980.jpg");

//     section.append(img)
// }