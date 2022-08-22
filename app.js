if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
    if (document.cookie.indexOf("iphone_redirect=false") == -1){
        const sectionVideo = document.querySelector("#sectionVideo")
        const video = document.querySelector("#bgvid")
        video.remove();

        const img = document.createElement("img")
        img.setAttribute("src", "pexels-tetyana-kovyrina-937980.jpg");
        img.className = "video"
        
        sectionVideo.append(img);
    } 
}



let popup = localStorage.getItem('popup')

if (popup === null){
  window.addEventListener('load', () => {
    Swal.fire({
        title: '¿Eres mayor de 18 años?',
        icon: 'warning',
        width: "50em",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: "No"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Perfecto!',
            '',
            'success'
          )
          localStorage.setItem('popup', "false")
        } else{
            localStorage.removeItem('popup')
            window.location.href="https://www.google.com.ar/?hl=es";
        }
      })
  });
} 









