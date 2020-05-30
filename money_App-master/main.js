let fec = document.querySelector(".f-e-c"),
  massive = [
    (spend = document.createElement("input")),
    (spendsum = document.createElement("input")),
  ],
  totalCalaulation = document.querySelector(".budget_calculation");
spend.classList.add("enter_costname");
spendsum.classList.add("enter_costsum");
fec.append(spend);
fec.append(spendsum);
spend.placeholder = "Стаття витрaт";
spendsum.placeholder = "Сума";
let plus = document.querySelector(".add-cost"),
  input = document.getElementById("#number"),
  total = 0,
  j = 1,
  caught = document.querySelectorAll(".add");

 
plus.addEventListener("click", function () { 
  for(let i = 0; i<1; i++){
    if(j <= 12){
      j = j + 1;
let spend = document.createElement("input"),
    spendsum = document.createElement("input");
  spend.classList.add("enter_costname");
  spend.classList.add("add");
  spendsum.classList.add("enter_costsum");
  spendsum.classList.add("add");
  spend.placeholder = "Стаття витрaт";
  spendsum.placeholder = "Сума";
  fec.append(spend);
  fec.append(spendsum);
      }else{
    };
  };
});
let addBotton = document.querySelectorAll(".s2_costs-btn"),
  form = document.querySelector(".form_enter-costs"),
  okBotton = document.querySelector(".send-costs"),
  allSite = document.querySelector(".form"),
  target,
  broke;

let num = document.querySelector(".num"),
  number = document.querySelector(".number"),
  botton = document.querySelector(".s2_total-btn");
botton.addEventListener("click", function () {  
 let  sumvitr = document.querySelectorAll(".sp"), 
      cost = document.querySelector(".cost"),
      remainder = document.querySelector(".remainder"),
      vitrats = 0; 
      cost.innerHTML = "";
 sumvitr.forEach(function (item, i) {
    vitrats += Number(item.textContent);
  });
  sum = document.querySelector(".sum").innerHTML = String(Number(num.value) + Number(number.value) + "uah");
  allSite.classList.add("hole");
  totalCalaulation.style.display = "flex";
  cost.innerHTML += String(Number(vitrats) + "uah");
  remainder.innerHTML = String((Number(num.value) + Number(number.value)) - Number(vitrats) + "uah");
});

addBotton.forEach(function (item) {
  item.addEventListener("click", function () {
    allSite.classList.remove("hide");
    form.style.display = "flex";
    allSite.style.alignItems = "center";
    allSite.style.justifyContent = "center";
    target = event.target;
  });
});

okBotton.addEventListener("click", function () {
  (spend = document.querySelectorAll(".enter_costname")),
    (spendsum = document.querySelectorAll(".enter_costsum"));
  spend.forEach((item, i) => {
    let brokename = document.createElement("span"),
      broke = document.createElement("span"),
      li = document.createElement("li"),
      valut = (document.createElement("span").innerHTML = "uah "),
      img = document.createElement("img"),
      inputs = document.querySelectorAll(".added");
    broke.classList.add("sp");
    brokename.classList.add("forCloseIcon");
    li.classList.add("spnd");
    img.classList.add("delete");
    li.append(brokename);
    li.append(broke);
    li.append(valut);
    li.append(img);
    li.style.flexDirection = "row";
    img.src = "./img/close-24px.svg";
    if (isNaN(Number(spendsum[i].value))) {
      spend[i].value = "";
      spendsum[i].value = "";
    } else {
      if (spendsum[i].value === "") {
        spend[i].value = "";
        spendsum[i].value = "";
      } else {
        if (spend[i].value === "") {
          spend[i].value = "";
          spendsum[i].value = "";
        } else {
          if (target.classList.contains("main")) {
            ulon = document.querySelector(".mainCosts-list");
            ulon.append(li);
            broke.innerHTML = spendsum[i].value;
            brokename.innerHTML = spend[i].value;
            form.classList.add("hide");
            allSite.classList.add("hide");
          } else {
            ul = document.querySelector(".additCosts-list");
            ul.append(li);
            broke.innerHTML = spendsum[i].value;
            brokename.innerHTML = spend[i].value;
          }
        }
      }
    }
    form.classList.add("hide");
    allSite.classList.add("hide");
    spend[i].value = "";
    spendsum[i].value = "";
    add = document.querySelectorAll(".add");
    add.forEach(function(item){
      item.remove();
    });
    
  });

});  
  
let deleted = document.querySelector(".delete");
main = document.querySelector(".mainCosts-list");
addit = document.querySelector(".additCosts-list");
main.onclick = function (event) {
  if (event.target.className != "delete") return;

  let pane = event.target.closest(".spnd");
  pane.remove();
};
addit.onclick = function (event) {
  if (event.target.className != "delete") return;

  let pane = event.target.closest(".spnd");
  pane.remove();
};
