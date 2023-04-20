let cards = document.querySelectorAll(".card");
let addToCardButtons = [];
let count = document.querySelector(".count");
let totalSpan = document.querySelector(".total");
cards.forEach((card)=>{
    addToCardButtons.push(card.children[0].children[4]);
});

document.addEventListener("DOMContentLoaded",()=>{
    if (!localStorage.getItem("product")) {
        let basket = [];
        localStorage.setItem("product",JSON.stringify(basket));
    }
})

addToCardButtons.forEach((add)=>{
    add.addEventListener("click",(e)=>{
        let name = e.target.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
        let price = e.target.previousElementSibling.children[0].textContent;
        let desc = e.target.previousElementSibling.previousElementSibling.textContent;
        let id = e.target.parentElement.parentElement.getAttribute("data-id");
        let product = {
            id: id,
            name: name,
            price: price,
            desc:desc,
            count:1
        }

        let basket = JSON.parse(localStorage.getItem("product")) || [];
        let existed = basket.find((basketItem)=>basketItem.id==id);

        if (existed) {
            existed.count++;
        }
        else{
            basket.push(product)
        }

        count.textContent = basket.length;

        let total = basket.reduce((total,value)=>{
            let t = Number(value.price)*Number(value.count);
            return total+t;
        },0);
        totalSpan.textContent = total;
        localStorage.setItem("product",JSON.stringify(basket));

        Swal.fire({
            position: 'bottom-end',
            icon: 'success',
            title: `${product.name.toUpperCase()} added to basket`,
            showConfirmButton: false,
            timer: 1000
          })
    })
})


