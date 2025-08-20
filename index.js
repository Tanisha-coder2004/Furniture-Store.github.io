
document.addEventListener("DOMContentLoaded",()=>{
let buttons = document.querySelectorAll(".addCart");
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
    const name = button.getAttribute('data-name');
    const price = parseFloat(button.getAttribute('data-price'));
    const img = button.getAttribute('data-img');
        console.log("add to cart");
         
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.push({ name, price, img });

    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Optional: Alert user
    alert(`${name} added to cart!`);
    })
})
console.log("hello");
})