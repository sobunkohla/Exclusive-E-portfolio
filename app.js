const menuButton = document.querySelector(".open--menu");
const closeButton = document.querySelector(".close--menu");
const closeElem = document.querySelector(".menu__link--anchor");
const scaleFactor = 1/20;
function OpenMenu() {
document.body.classList.add("menu__open");
}
function CloseMenu() {
    document.body.classList.remove("menu__open");
    }
closeButton.addEventListener("click", CloseMenu);
menuButton.addEventListener('click', OpenMenu);
closeElem.addEventListener("click", CloseMenu);





 function contact(event) {
   event.preventDefault();
   const loading = document.querySelector(".modal__overlay--loading");
const success = document.querySelector(".modal__overlay--success");
loading.classList.add("modal__overlay--visible");
    emailjs
     .sendForm(
   'service_u178grg',
   'template_cmxw92s',
   event.target,
   'smA1y_ypshEF1HFrw'
   ).then(()=> {
    loading.classList.remove("modal__overlay--visible");
    success.classList.add("modal__overlay--visible");
   }).catch(() => {
    loading.classList.remove("modal__overlay--visible");
    alert(
        "the email service is currently unavailable. Please contact me directly at sobunkohla@gmail.com "
    )
   })
}

function toggleModal() {
    document.body.classList.toggle("modal--open")
}

function toggleContrast() {
    document.body.classList.toggle("dark-theme")
}

function moveBackground(event){
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor; 
    console.log(x, y);

    for(i = 0; i < shapes.length; i++) {
        const isOdd = i % 2 !== 0;
    const oddInteger = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * oddInteger}px, ${y * oddInteger}px)`
    }

}

