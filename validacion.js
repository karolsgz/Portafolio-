//Scroll/animacion de la pagina
const sr = ScrollReveal({
     origin: "top",
     distance: "60px",
     duration: 2500,
     delay: 400,
     //reset:true,

})
sr.reveal(".menu")
sr.reveal(".title", {delay: 700})
sr.reveal(".about", {delay: 700})
sr.reveal(".skills", {delay: 700})
sr.reveal(".hobbies", {delay: 700})
sr.reveal(".academic", {delay: 700})
sr.reveal(".experience", {delay: 700})
sr.reveal(".formcontato__contacto", {delay: 700})
