let addcart = document.querySelector(".add"),
    card = document.querySelector(".card");
    addcart.addEventListener("click", function () {
    card.innerHTML += " <div class='card'><button class='mark'>X</button><div class='top'><p><textarea placeholder='Name' rows='2' cols='45' name='text'></textarea></p><input type='text'></div><div class='bot'><textarea placeholder='Name' rows='10' cols='45' name='text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum aut distinctio minima in voluptatibusconsequuntur numquam. Eligendi ex consectetur saepe quod odio, labore sapientepossimus modi dolore ipsa perspiciatis libero.</textarea><button class='classification'>!</button><div class='opend_window'><p>Важность:</p><div class='or'><input type='radio' id='rarity1' name='rarity' value='1'><label for='rarity1'>1</label><br><input type='radio' id='rarity2' name='rarity' value='2'><label for='rarity2'>2</label><br><button>Submit</button></div></div></div>";
    });