const menuOptions = [
  { name: "X-Salada", price: 30, vegan: false, src: "./assets/xsalada.jpeg" },

  { name: "X-Bacon", price: 35, vegan: false, src: "./assets/xbacon.png" },

  {
    name: "X-Bacon Egg",
    price: 40,
    vegan: false,
    src: "./assets/bacon-egg.png",
  },

  {
    name: "Monstruoso",
    price: 50,
    vegan: false,
    src: "./assets/monstruoso.png",
  },

  {
    name: "Big Vegano",
    price: 55,
    vegan: true,
    src: "./assets/monstruoso-vegan.png",
  },

  {
    name: "X-Vegan",
    price: 45,
    vegan: true,
    src: "./assets/xvegan.png",
  },
];



function StyleCurrentBRL(value){
const newFormat =  value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

return newFormat

}


function ShowAll(productsArray) {
    const list = document.querySelector("ul");
    let myLi = "";
   productsArray.forEach((product) => {
    myLi += `
    <li>  
     <img src="${product.src}" />
    <p>${product.name}</p>
    <p> ${ StyleCurrentBRL (product.price)}</p>
  </li>
`;
  });
  list.innerHTML = myLi;
  
}

function DiscountTen() {
  const Map10 = menuOptions.map((foods) => ({
    ...foods,
    price: foods.price - foods.price / 10
  }));
  ShowAll(Map10);
}


function FilterVegans () {

const VegansOnly = menuOptions.filter ((food) => {
if (food.vegan === true) {return true} else {return false}
}
)
ShowAll(VegansOnly)
}

 
  function ReduceTotalValue() {
    const SumTotal = menuOptions.reduce((acc, food) => {
      return acc + food.price;
    }, 0);
    const list = document.querySelector("ul");
    list.innerHTML = 
    `   <li>  
    <p>  O preço de todos os burgers é de ${ StyleCurrentBRL(SumTotal)}</p>
  </li>
` 

  }
  


