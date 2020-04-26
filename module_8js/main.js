// let inputs = document.querySelectorAll('.inputs');
// const firstInput = document.querySelector('#inputss');
// console.log(inputs);
// console.log(firstInput);

// number 2

// const heading = document.querySelector('.title-head');
// heading.style.color = 'green';
// heading.textContent = 'I LOVE MY MOM';
// console.log(heading);

// number 3

// const peshka = document.querySelector('.more-text');
// peshka.classList.add('active');
// const pushka = document.querySelector('.new-text');
// peshka.classList.remove('new-text');

// number 4

// const firstInput = document.querySelector('#inputss').value;
// inpt = (firstInput * 4);
// const peshka = document.querySelector('.more-text');
// peshka.textContent = inpt;

// number 5

// let input = document.querySelectorAll(".inputs");
// objGlobal = {};
// objGlobal.age = input[0].value;
// objGlobal.surname = input[1].value;
// objGlobal.name = input[2].value;
// objGlobal.pobatykovi = input[3].value;
// console.log(objGlobal);

// number 6

// let img1 = document.querySelector(".image");
// img1.src = "./img/second.jpg";

// number 7

// let img3 = document.querySelector(".beautiful");
// img3.style.display = 'none';
// let img4 = document.querySelector(".four-img");
// img4.style.display = 'block';

// number 8

let check = document.querySelectorAll(".checkbox");
for(let i = 0; i<check.length; i++){
   if(check[i].hasAttribute('checked')){
      check[i].removeAttribute('checked'); 
   }
   else{
      check[i].setAttribute('checked', "");
   }
}
