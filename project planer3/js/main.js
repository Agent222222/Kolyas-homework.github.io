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
function startTime()
{
let tm = new Date();
let h = tm.getHours();
let m = tm.getMinutes();
m = checkTime(m);
day.innerHTML= h + ":"+ m + " " + "" + number;
t=setTimeout('startTime()',500);
}
function checkTime(i)
{
if (i<10)
{
i="0" + i;
}
return i;
};
let timer = document.querySelector(".classification"),
    mainstr = document.querySelector(".main");
mainstr.addEventListener("click", function(){
let  cardsSec = document.querySelectorAll(".mainCards2"),
     cardsMain = document.querySelectorAll(".mainCards1"); 
cardsSec.forEach(function (item) {
  item.style.display = "block"; 
});
cardsMain.forEach(function (item) {
  item.style.display = "block"; 
});
})
let addcart = document.querySelector(".add"),
    help = document.querySelector(".help"),
    bigtwo = document.querySelector(".big-two"),
    back = document.querySelector(".backgr"),
    button = document.querySelector(".add"),
    main = document.querySelector(".main"),
    total,   
    Main = document.querySelector(".Main"),
    comment = document.querySelector(".comment"),
    kpd = document.querySelector(".sec-drop-downlist"),
    ComentBlock = document.querySelector(".big-three"),
    red = document.querySelector(".red"),
    green = document.querySelector(".green"),
    yellow = document.querySelector(".yellow"),
    blue = document.querySelector(".blue"),
    imagine = document.querySelector(".imagine"),
    cards = document.querySelector(".card_all");
red.addEventListener("click", function(){
    Main.style.background = "rgba(255, 99, 71, 0.7)";
});
green.addEventListener("click", function(){
    Main.style.background = "rgba(154, 205, 50, 0.7)";
});
yellow.addEventListener("click", function(){
    Main.style.background = "rgba(254, 209, 54, 0.7)";
});
blue.addEventListener("click", function(){
    Main.style.background = "rgba(0, 206, 209, 0.7)";
});


   back.addEventListener("click", function(){
       if(kpd.classList.contains("geth")){console.log(10);
           kpd.classList.remove("geth");
           kpd.style.display = "none";
       }else{
        kpd.classList.add("geth");
        kpd.style.display = "flex";
       }
      });
comment.addEventListener("click", function(){
  ComentBlock.style.display = "block";
});
addcart.addEventListener("click", function () {
    cards.insertAdjacentHTML('beforeend', " <form class='card'><div class='mark_btn'><button class='mark'>X</button></div><div class='top<p class='name'><textarea class='down' placeholder='Name' rows='2' cols='45' name='text'></textarea></p><div class='bot'><div class='description'><textarea class='down-2' placeholder='Enter note description here' rows='10' cols='45' name='text'></textarea><div class='clock'><button class='clock_btn'></button><input class='clock_input' type='time'></div></div><div class='spec'><button class='classification'>Confirm</button><div class='opend_window'><hr class='rope'></hr><p class='raparity'>Rarity</p><div class='or'><div class='rarity'><div class='Firstly'><input class='inputs' type='radio' id='rarity1' name='rarity' value='1'><label class='label' for='rarity1'>Firstly</label></div><br><div class='Secondly'><input class='inputs' type='radio' id='rarity2' name='rarity'value='2'><label class='label' for='rarity2'>Secondly</label></div></div></div></div></div></form>");
let  clasific = document.querySelectorAll(".classification"),
     opendWind = document.querySelectorAll(".opend_window"),
    inp = document.querySelectorAll(".clock_input"),
    card = document.querySelectorAll(".card");
    pop =  document.querySelectorAll(".clock_btn");
    let tm = new Date();
    let h = tm.getHours();
    let m = tm.getMinutes();
pop.forEach(function (item) { 
item.addEventListener("click", function(){
  item.nextElementSibling.style.display="flex"
});}) 
clasific.forEach(function (item) {
    item.addEventListener("click", function () {
      item.nextElementSibling.style.display = "flex"; 
      inp.forEach(function (item) {
timerr = item.value;
if(timerr==h + ":"+ m){console.log(10);
  card.forEach(function (item) { 
    item.style.background = "red";
    }) ;

};
});

    });

  });

});
 let  mainCards = document.querySelector(".firstly"),
    secCards = document.querySelector(".secondly");
addcart.addEventListener("click", function(){   
let sectionFormRef = document.querySelectorAll('.rarity');
sectionFormRef.forEach(function(item){
    item.addEventListener('input', event => {
    if (event.target.checked) {
         event.target.form.classList.remove("mainCards1");
          event.target.form.classList.remove("mainCards2");
        event.target.form.classList.add(`mainCards${event.target.value}`);
          // localStorage.setItem('name',cards);
      
       
    }
 })  
})
});


mainCards.addEventListener("click", function(){
let cardsMain = document.querySelectorAll(".mainCards1"),   
    cardsSec = document.querySelectorAll(".mainCards2"); 
cardsSec.forEach(function (item) {
        item.style.display = "none"; 
  });  
cardsMain.forEach(function (item) {
        item.style.display = "block"; 
  });
  ComentBlock.style.display = "none";
});


secCards.addEventListener("click", function(){
let cardsMain = document.querySelectorAll(".mainCards1"),  
    cardsSec = document.querySelectorAll(".mainCards2"); 
cardsMain.forEach(function (item) {
    item.style.display = "none"; 
});
cardsSec.forEach(function (item) {
        item.style.display = "block"; 
  });
  ComentBlock.style.display = "none";
});



help.addEventListener("click", function(){
    bigtwo.style.display = "flex";
    cards.style.display = "none";
    button.style.display = "none";
    ComentBlock.style.display = "none";
});
main.addEventListener("click", function(){
    bigtwo.style.display = "none";
    cards.style.display = "flex";
    button.style.display = "block";
    button.style.margin = "0px auto";
    ComentBlock.style.display = "none";
});


// const bodyRef = document.getElementsByTagName('body');
// if (bodyRef) {
//   initTheme();
// };

// function initTheme() {
//   if (localStorage.getItem(name)) {
//     document.body.classList.add("mainCards1");
//     document.body.classList.add("mainCards2");
//     document.body.classList.add("card");
//     document.body.querySelector('.js-switch-input').checked = true;
//   };
// };




  
