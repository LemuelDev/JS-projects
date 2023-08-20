const closeBtn = document.querySelector('.closeBtn');
const myCart = document.querySelector('.mycart')
const cartIcon = document.querySelector('.cartIcon')
const quantityNumber= document.querySelector('.quantityNumber')
const wrapperCart = document.querySelector('.wrapper-cart')
const totalBtn = document.querySelector('.totalBtn')
// show and hide the cart
cartIcon.addEventListener('click', () => {
    myCart.style.display = 'block'
})
closeBtn.addEventListener('click', () => {
    myCart.style.display = 'none'
})




// adding to the cart

let productList = [];
let total = 0
const addToCartButtons = document.querySelectorAll('.addToCart')

addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
  });

  function addToCart (event) {

    // initializing the cart, cartname and cartprice
    myCart.style.display = 'block'
    const productName = event.target.getAttribute('data-product-name');
    const productPrice = event.target.getAttribute('data-product-price');
    const price = productPrice.replace("$", "")
    let quantity = 1
    // creating the product list
    const wrapperchild = document.createElement('div')
  wrapperchild.classList.add('wrapper-cart')
  wrapperchild.innerHTML = `
  <div class="cartname">
      <p>${productName}</p>
  </div>
  <div class="cartprice">
      <p class="cartPrice">${productPrice}</p>
  </div>
  <div class="cartquantity">
      <button class="minus" onclick = "minusQuantity(this)" >
          -
      </button>
      <p class="quantityNumber">1</p>
      <button class="plus" onclick="addQuantity(this)">
          +
      </button>

    </div>
</div>`

// calculating the total and the quantity number 


  const minus = wrapperchild.querySelector('.minus')
  const plus = wrapperchild.querySelector('.plus')
  
  minus.addEventListener('click', function () {
    minusQuantity(wrapperchild);
    calculateTotal();
  });

  plus.addEventListener('click', function () {
    addQuantity(wrapperchild);
    calculateTotal();
  });
      

    const wrapper = document.querySelector('.wrapper')
    wrapper.appendChild(wrapperchild)

    calculateTotal();
  }
  
  
   function calculateTotal() {
    const totalBtn = document.querySelector('.totalBtn');
    total = 0; // Reset the total
  
    const quantityElements = document.querySelectorAll('.quantityNumber');
    const priceElements = document.querySelectorAll('.cartPrice');
    console.log(quantityElements, priceElements);
    for (let i = 0; i < quantityElements.length; i++) {
      const quantity = parseInt(quantityElements[i].textContent);
      const price = parseFloat(priceElements[i].textContent.replace("$", ""));
      if (!isNaN(quantity) && !isNaN(price)) {
        total += quantity * price;
      }
    }
  
    totalBtn.textContent = `$${total}`;
  }
  
  function minusQuantity(wrapperchild) {
    const quantityNumber = wrapperchild.querySelector('.quantityNumber');
    let quantity = parseInt(quantityNumber.textContent);
    if (isNaN(quantity)) {
      console.error('Invalid quantity:', quantityNumber.textContent);
      return; // Exit the function or handle the error appropriately
    }
    
    quantity--;
    
    if (quantity <= 0) {
      quantity = 0;
      wrapperchild.remove(); // Remove the product list element
    }
    
    quantityNumber.textContent = quantity;
  }
  
  function addQuantity(wrapperchild) {
    const quantityNumber = wrapperchild.querySelector('.quantityNumber');
    let quantity = parseInt(quantityNumber.textContent);
    if (isNaN(quantity)) {
      console.error('Invalid quantity:', quantityNumber.textContent);
      return; // Exit the function or handle the error appropriately
    }
    
    quantity++;
    quantityNumber.textContent = quantity;
  }
 
  
  
  
  
  
  
  


  










 