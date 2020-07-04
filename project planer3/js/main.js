let addcart = document.querySelector(".add"),
    help = document.querySelector(".help"),
    bigtwo = document.querySelector(".big-two"),
    button = document.querySelector(".add"),
    main = document.querySelector(".main"),
    total,   
    cards = document.querySelector(".card_all");
addcart.addEventListener("click", function () {
    cards.insertAdjacentHTML('beforeend', " <form class='card'><div class='mark_btn'><button class='mark'>X</button></div><div class='top<p class='name'><textarea class='down' placeholder='Name' rows='2' cols='45' name='text'></textarea></p><div class='bot'><div class='description'><textarea class='down-2' placeholder='Enter note description here' rows='10' cols='45' name='text'></textarea><div class='clock'><input class='clock_input' type='time'><button class='clock_btn'></button></div></div><div class='spec'><button class='classification'>Confirm</button><div class='opend_window'><hr class='rope'></hr><p class='raparity'>Rarity</p><div class='or'><div class='rarity'><div class='Firstly'><input class='inputs' type='radio' id='rarity1' name='rarity' value='1'><label class='label' for='rarity1'>Firstly</label></div><br><div class='Secondly'><input class='inputs' type='radio' id='rarity2' name='rarity'value='2'><label class='label' for='rarity2'>Secondly</label></div></div></div></div></div></form>");
let  clasific = document.querySelectorAll(".classification"),
     opendWind = document.querySelectorAll(".opend_window"),
    inp = document.querySelectorAll(".clock_input"),
    pop =  document.querySelectorAll(".clock_btn");
pop.forEach(function (item) { 
item.addEventListener("click", function(){
  item.previousElementSibling.style.display="flex"
});}) 

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
sectionFormRef.forEach(function(item){
    item.addEventListener('input', event => {
    if (event.target.checked) {
      if(event.target.form.classList.contains("mainCards1")){
          event.target.form.classList.remove("mainCards1");
          event.target.form.classList.add(`mainCards${event.target.value}`);
          localStorage.setItem('name',cards);
      }
      else{
        if(event.target.form.classList.contains("mainCards2")){
          event.target.form.classList.remove("mainCards2");
          event.target.form.classList.add(`mainCards${event.target.value}`);
          localStorage.setItem('name',cards);
      }else{console.log( event.target.form);
        event.target.form.classList.add(`mainCards${event.target.value}`);
          localStorage.setItem('name',cards);
      }}
       
    }
 })  
})
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

const bodyRef = document.getElementsByTagName('body');
if (bodyRef) {
  initTheme();
};

function initTheme() {
  if (localStorage.getItem(name)) {
    document.body.classList.add("mainCards1");
    document.body.classList.add("mainCards2");
    document.body.classList.add("card");
    document.body.querySelector('.js-switch-input').checked = true;
  };
};
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