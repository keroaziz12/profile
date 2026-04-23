(function(){
    emailjs.init("IZG6gUVaufWZ5a6ll");
})();
document.getElementById("content-form").addEventListener("submit",function (e) {
    e.preventDefault();
    const form = this;

    emailjs.sendForm("service_pb1dtfx","template_3sn7g48", form)
    .then(function (response) {
        alert("Message sent successfully!");
        form.reset();
    },
    function (error) {
        alert("Failed to send message. Please try again later.");
    });

});
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2300  ,
    delay: 300,
    reset: true
});
sr.reveal('.home_data, .about-data, .services-data, .work-data, .contact-data');
sr.reveal('.about_img, .contact_img ',{delay:500,scale:0.5})

const scrolleup=()=>{
    const scrollBAUTTON= document.getElementById("scroll-up");
    if(this.scrollY >= 250) {
        scrollBAUTTON.classList.remove("-bottom-1/2")
        scrollBAUTTON.classList.add("bottom-4")
    }else{
        scrollBAUTTON.classList.add("-bottom-1/2")
        scrollBAUTTON.classList.remove("bottom-4")
    }
}
window.addEventListener("scroll",scrolleup)

