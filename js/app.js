let picture_div = document.getElementById(`pic_div`)
picture_div.insertAdjacentHTML(`afterbegin` , `<img class="img_but" src="/images/mountain.jpeg">`)
picture_div.insertAdjacentHTML(`afterbegin` , `<img class="img_but" src="/images/flowers.jpeg">`)
picture_div.insertAdjacentHTML(`afterbegin` , `<img class="img_but" src="/images/water.jpeg">`)
function pic_click(details){
    for(let i = 0 ; i < picture_div.length ; i++){
        Cookies.set(`img_save` , `src`)
    }
    location.href = `/pages/display.html`
}
let img_clicked = document.querySelectorAll(`.img_but`)
for(let i = 0 ; i < img_clicked.length; i++){
    img_clicked[i].addEventListener(`click` , pic_click)
}