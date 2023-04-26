let products = [
  {
    id: 1,
    name: "cola",
    price: 1.5,
  },
  {
    id: 2,
    name: "fanta",
    price: 2.5,
  },
  {
    id: 3,
    name: "sprite",
    price: 0.7,
  },
  {
    id: 4,
    name: "doritos",
    price: 1.8,
  },
  {
    id: 5,
    name: "pandora",
    price: 150,
  },
];
let list = document.querySelector("#list");
let favoritesList = document.querySelector("#favorites");

document.addEventListener("DOMContentLoaded", () => {
  CreateListItem(products);
  //GET add to cart buttons
  let buttons = [];
  for (let i = 0; i < list.children.length; i++) {
    buttons.push(list.children[i].children[2]);
  }
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      //add to favorites list
      AddToLocal(e);
      let favorites = JSON.parse(localStorage.getItem("products")) || [];
      favorites.forEach((fav) => {
            if (fav.count==1) {
                let listItem = document.createElement("li");
                listItem.innerHTML = `<span>${fav.name}</span>, <span>${fav.price}</span>, <span>count: ${fav.count}</span>`;
                favoritesList.append(listItem);
            }
            else{
                for (let i = 0; i < favoritesList.children.length; i++) {
                    favoritesList.children[i].children[2].innerHTML = `<span>count: ${fav.count}</span>`;
                }
            }
           
      });
    });
  });
});

function AddToLocal(e) {
  let basketItem = {
    id: e.target.parentElement.getAttribute("data-id"),
    name: e.target.previousElementSibling.previousElementSibling.textContent,
    price: e.target.previousElementSibling.textContent,
    count: 1,
  };
  if (!localStorage.getItem("products")) {
    let basket = [];
    basket.push(basketItem);
    localStorage.setItem("products", JSON.stringify(basket));
  } else {
    let basket = JSON.parse(localStorage.getItem("products"));
    let existed = basket.find((x) => x.id == basketItem.id);
    if (existed) {
      existed.count++;
    } else {
      basket.push(basketItem);
    }
    localStorage.setItem("products", JSON.stringify(basket));
  }
}
function CreateListItem() {
  products.forEach((product) => {
    let listItem = document.createElement("li");
    listItem.setAttribute("data-id", product.id);
    listItem.innerHTML = `<span>${product.name}</span>, <span>${product.price}$</span> <button>Add to cart</button>`;
    list.append(listItem);
  });
}
