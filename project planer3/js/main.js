let addcart = document.querySelector(".add"),
    help = document.querySelector(".help"),
    bigtwo = document.querySelector(".big-two"),
    button = document.querySelector(".add"),
    main = document.querySelector(".main"),
    card = document.querySelector(".card_all");
    console.log(bigtwo);
    card.style.transition = "0.3s";
    addcart.addEventListener("click", function () {
    card.innerHTML += " <div class='card'><div class='mark_btn'><button class='mark'>X</button></div><div class='top'><p class='name'><textarea class='down' placeholder='Name' rows='2' cols='45' name='text'></textarea></p><div class='bot'><div class='description'><textarea class='down' placeholder='Enter note description here' rows='10' cols='45' name='text'></textarea><div class='clock'><input class='clock_input' type='text'></div><button class='clock_btn'></button></div><button class='classification'>Confirm</button><div class='opend_window'><hr class='rope'></hr><p class='Rarity'>Rarity</p><div class='or'><div class='rarity'><div class='Secondly'><input type='radio' id='rarity1' name='rarity' value='1'><label class='label' for='rarity1'>Firstly</label></div><br><div class='Secondly'><input type='radio' id='rarity2' name='rarity' value='2'><label class='label' for='rarity2'>Secondly</label></div></div><br><button class='submit'>Submit</button></div></div></div>";
    });
help.addEventListener("click", function(){
    bigtwo.style.display = "flex";
    card.style.display = "none";
    button.style.display = "none";
});
main.addEventListener("click", function(){
    bigtwo.style.display = "none";
    card.style.display = "flex";
    button.style.display = "block";
    button.style.margin = "0px auto";
});

let delet = document.querySelectorAll(".mark"),

    