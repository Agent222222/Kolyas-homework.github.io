let addcart = document.querySelector(".add"),
    help = document.querySelector(".help"),
    bigtwo = document.querySelector(".big-two"),
    button = document.querySelector(".add"),
    main = document.querySelector(".main"),
    total,   
    cards = document.querySelector(".card_all");
addcart.addEventListener("click", function () {
    cards.insertAdjacentHTML('beforeend', " <form class='card'><div class='mark_btn'><button class='mark'>X</button></div><div class='top<p class='name'><textarea class='down' placeholder='Name' rows='2' cols='45' name='text'></textarea></p><div class='bot'><div class='description'><textarea class='down-2' placeholder='Enter note description here' rows='10' cols='45' name='text'></textarea><div class='clock'><input class='clock_input' type='text'></div><button class='clock_btn'></button></div><div class='spec'><button class='classification'>Confirm</button><div class='opend_window'><hr class='rope'></hr><p class='raparity'>Rarity</p><div class='or'><div class='rarity'><div class='Firstly'><input class='inputs' type='radio' id='rarity1' name='rarity' value='1'><label class='label' for='rarity1'>Firstly</label></div><br><div class='Secondly'><input class='inputs' type='radio' id='rarity2' name='rarity'value='2'><label class='label' for='rarity2'>Secondly</label></div></div></div></div></div></form>");
let  clasific = document.querySelectorAll(".classification"),
     opendWind = document.querySelectorAll(".opend_window");
clasific.forEach(function (item) {
      item.addEventListener("click", function () {
        item.nextSibling.style.display = "block";  
      });

    });

});
 let  mainCards = document.querySelector(".firstly"),
    secCards = document.querySelector(".secondly");
addcart.addEventListener("click", function(){   
let sectionFormRef = document.querySelectorAll('.rarity');
// let formRef = document.querySelectorAll('.card');
sectionFormRef.forEach(function(item){
    item.addEventListener('input', event => {
    if (event.target.checked) {
       event.target.form.classList.add(`mainCards${event.target.value}`);
    }
 })  })
     

});
mainCards.addEventListener("click", function(){
let  cardsSec = document.querySelectorAll(".mainCards2"); 
cardsSec.forEach(function (item) {
        item.style.display = "none"; 
  });
let  cardsMain = document.querySelectorAll(".mainCards1"); 
cardsMain.forEach(function (item) {
        item.style.display = "block"; 
  });
});


secCards.addEventListener("click", function(){
let  cardsMain = document.querySelectorAll(".mainCards1");
cardsMain.forEach(function (item) {
    item.style.display = "none"; 
});
let  cardsSec = document.querySelectorAll(".mainCards2"); 
cardsSec.forEach(function (item) {
        item.style.display = "block"; 
  });
});
help.addEventListener("click", function(){
    bigtwo.style.display = "flex";
    cards.style.display = "none";
    button.style.display = "none";
});
main.addEventListener("click", function(){
    bigtwo.style.display = "none";
    cards.style.display = "flex";
    button.style.display = "block";
    button.style.margin = "0px auto";
});

let container = document.getElementById("container");
container.onclick = function(event) {
    if (event.target.className != 'mark') return;
    let pane = event.target.closest('.card');
    pane.remove();
  };
  let date = new Date();

  let options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };
let  number = date.toLocaleString("en-US", options),
     day = document.querySelector(".today");

     window.onload = function(){
         (function(){
             let time = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
             document.querySelector('.clock_input')[0].innerHTML = time;
             window.setTimeout(arguments.callee, 1000);
         });
     };
