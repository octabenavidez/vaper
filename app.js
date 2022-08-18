if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
    if (document.cookie.indexOf("iphone_redirect=false") == -1){
        const sectionVideo = document.querySelector("#sectionVideo")
        const img = document.createElement("img")
        img.setAttribute("src", "pexels-tetyana-kovyrina-937980.jpg");
        img.className = "video"
        
        sectionVideo.append(img);
    } 
 }


// if (ereg("Mobile.*Safari",$_SERVER['HTTP_USER_AGENT'])) {
//     const sectionPrincipal = document.querySelector("#bgPrincipal")
//     const h1 = document.createElement("h1")
//     h1.innerText = "Hola"
    
//     sectionPrincipal.append(h1)
// }

// if (ereg("Mobile.*Safari",$_SERVER['HTTP_USER_AGENT'])) {
//     const video = document.querySelector("#bgvid")
//     video.remove()

//     const section = document.querySelector("#sectionVideo") 


//     section.append(img)
// }