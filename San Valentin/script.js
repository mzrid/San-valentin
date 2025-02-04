const contBtns = document.querySelector(".card-btns")
const btnSi = document.querySelector(".si")
const btnNo = document.querySelector(".no")
const hearts = document.querySelectorAll(".heart")
const text = document.querySelector(".text")
const hammster = document.querySelector(".hammsterimg")

const positivo=()=>{
    hearts.forEach(element => {
        element.classList.add("animate")
    });
    text.classList.add("grow")

    const audio2 = new Audio("magic.mp3")
    audio2.play()
    setTimeout(()=>{
        audio2.pause()
    },35000)
}

const negativo=()=>{
    if(contBtns.children.length < 50){
        newBtn = btnNo.cloneNode(true);
        newBtn.classList.add("randomNo")

        const btnWidth = newBtn.clientWidth;
        const btnHeight = newBtn.clientHeight;

        const maxTop = window.innerHeight - btnHeight;
        const maxLeft = window.innerWidth - btnWidth;

        const randomTop = Math.random() * maxTop;
        const randomLeft = Math.random() * maxLeft;

        newBtn.style.top = `${randomTop}px`;
        newBtn.style.left = `${randomLeft}px`;

        newBtn.addEventListener("click",negativo)
        contBtns.append(newBtn)
    }else{
        const main = document.querySelector("main");
        main.style.background = "#0e0e0e";
        hammster.classList.add("spin")
        const audio = new Audio("hammster.m4a");
        audio.play()
    }
}

btnNo.addEventListener("click",negativo)
btnSi.addEventListener("click",positivo)
