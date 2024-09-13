

// Function to add a product to the cart and store in localStorage
const addToCart = (product, quantity) => {
  // Retrieve existing cart data from localStorage or initialize an empty array
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Check if the product is already in the cart
  const existingProductIndex = cart.findIndex(item => item.id === product.id);

  if (existingProductIndex !== -1) {
    // If product exists, update its quantity
    cart[existingProductIndex].quantity += quantity;
  } else {
    // Add new product to the cart
    cart.push({
      id: product.id,
      name: product.name,
      image: product.Image1,
      price: product.price,
      quantity: quantity
    });
  }

  // Store the updated cart in localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
};

// Assuming selectedProduct is already retrieved from localStorage
const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));

// Ensure the product is valid
if (!selectedProduct) {
  console.error('No product found in localStorage');
  window.location.href = 'categories.html';  // Redirect if no product is found
} else {
  // Display product name
  const productHeader = document.querySelector('.product-page-header');
  if (productHeader) {
    productHeader.textContent = selectedProduct.name;
  }

  // Set the main product image
  const productImg = document.querySelector('.product-page-img img');
  if (productImg) {
    productImg.src = selectedProduct.Image1;
  }

  // Populate the additional images in the grid and add click events
  const productImageGrid = document.querySelector('.product-page-img-grid');
  if (productImageGrid) {
    productImageGrid.innerHTML = ''; // Clear previous images
    [selectedProduct.Image1, selectedProduct.Image2, selectedProduct.Image3].forEach((image, index) => {
      if (image) {  // Check if image exists
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.alt = `Product Image ${index + 1}`;
        
        // Add click event to switch main image on thumbnail click
        imgElement.addEventListener('click', () => {
          if (productImg) {
            productImg.src = image; // Change the main image to the clicked thumbnail
          }
        });

        productImageGrid.appendChild(imgElement);
      }
    });
  }

  // Display product summary/description
  const productDescription = document.querySelector('.product-summary p.product-description');
  if (productDescription) {
    productDescription.textContent = `This ${selectedProduct.name} is a modern and elegant piece, designed to add a stylish touch to your space.`;
  }

  // Display texture, weight, and size
  const textureElem = document.querySelector('.texture-detail p');
  const weightElem = document.querySelector('.weight-detail p');
  const sizeElem = document.querySelector('.size-detail p');

  if (textureElem) {
    textureElem.textContent = selectedProduct.texture || 'N/A'; // Show 'N/A' if texture is missing
  }
  
  if (weightElem) {
    weightElem.textContent = selectedProduct.weight || 'N/A'; // Show 'N/A' if weight is missing
  }
  
  if (sizeElem) {
    sizeElem.textContent = selectedProduct.size || 'N/A'; // Show 'N/A' if size is missing
  }

  // Store the product's unit price
  const unitPrice = selectedProduct.price;
  
  // Update product price display based on quantity
  const productPriceElem = document.querySelector('.quantity h4:last-of-type');
  if (productPriceElem) {
    productPriceElem.textContent = `$${unitPrice}`;  // Initial display of unit price
  }

  // Quantity adjustment logic
const quantityElem = document.querySelector('.quantity .middle');
let quantity = parseInt(quantityElem.textContent, 10); // Initialize quantity based on the element's text content

const increaseButton = document.querySelector('.quantity-flex span:last-child');  // "+" button
const decreaseButton = document.querySelector('.quantity-flex span:first-child'); // "-" button

// Function to update price based on quantity
const updatePrice = () => {
  const totalPrice = unitPrice * quantity;
  productPriceElem.textContent = `$${totalPrice}`; // Update displayed price
};

// Event listener for increase button
if (increaseButton) {
  increaseButton.addEventListener('click', () => {
    quantity += 1;  // Increase quantity
    quantityElem.textContent = quantity;  // Update the displayed quantity
    updatePrice();  // Update the price based on new quantity
    updateCartNumber();
  });
}

// Event listener for decrease button
if (decreaseButton) {
  decreaseButton.addEventListener('click', () => {
    if (quantity > 1) {  // Ensure quantity doesn't go below 1
      quantity -= 1;  // Decrease quantity
      quantityElem.textContent = quantity;  // Update the displayed quantity
      updatePrice();  // Update the price based on new quantity
      updateCartNumber();
    }
  });
}


  // Add to Cart and Buy Now buttons
  const addToCartButton = document.querySelector('.summary-btn .add');
  const buyNowButton = document.querySelector('.summary-btn .buy');

  // Event listener for Add to Cart button
  if (addToCartButton) {
    addToCartButton.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default link behavior

      // Add the product to the cart
      addToCart(selectedProduct, quantity);

      // Reset quantity to 1
      quantity = 1;
      quantityElem.textContent = quantity;
      updateCartNumber();
      updatePrice();  // Reset the price display
    });
  }

  // Event listener for Buy Now button
  if (buyNowButton) {
    buyNowButton.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default link behavior

      // Reset quantity to 1
      quantity = 1;
      quantityElem.textContent = quantity;
       updateCartNumber();
      updatePrice();  // Reset the price display
    });
  }
}

updateCartNumber();


// Function to remove product from cart
//const removeFromCart = (productId) => {
  //let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Filter out the product with the matching ID
  //cart = cart.filter(item => item.id !== productId);

  // Save updated cart back to localStorage
  //localStorage.setItem('cart', JSON.stringify(cart));

  // Update the cart page HTML
  //updateCartPage();
//};

// Call the updateCartPage function when the cart page loads
//window.addEventListener('DOMContentLoaded', updateCartPage);
