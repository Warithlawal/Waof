// Get DOM elements for navigation
const navMenu = document.getElementById('nav_menu'),
    navOpen = document.getElementById('nav_open'),
    navClose = document.getElementById('nav_close'),
    overlay = document.getElementById('overlay'), // Assuming overlay is defined in your HTML
    body = document.body; // To control body scrolling

// Function to open the menu and handle overlay and scroll
function openmenu() {
    // Open menu by adding a class or adjusting styles
    navMenu.style.right = "0"; // You can also use class-based control if you prefer
    overlay.style.display = "block"; // Show overlay
    body.classList.add('no-scroll'); // Prevent scrolling
}

// Function to close the menu and handle overlay and scroll
function closemenu() {
    // Close menu by removing a class or adjusting styles
    navMenu.style.right = "-300px"; // Hide the menu
    overlay.style.display = "none"; // Hide overlay
    body.classList.remove('no-scroll'); // Restore scrolling
    body.style.filter = "none"; // Optional: reset any body filters if needed
}

// Add event listeners for opening and closing the menu
if (navOpen) {
  navOpen.addEventListener('click', openmenu);
}

if (navClose) {
  navClose.addEventListener('click', closemenu);
}

// Close menu when overlay is clicked
if (overlay) {
  overlay.addEventListener('click', closemenu);
}









const productsWeLike =  [{
    id: 6,
    name: 'Tall Dresser',
    Image1: 'images/Furniture/tall-dresser-1.jpg',
    Image2: 'images/Furniture/tall-dresser-2.jpg',
    Image3: 'images/Furniture/tall-dresser-3.jpg',
    price: 50.00,
    category: 'Furniture',
    weight: '5kg',
    texture: 'Wood',
    size: '4m x 100cm'
  },
{
    id: 37,
    name: 'Pop-up Toaster',
    Image1: 'images/Kitchen/toaster-1.jpg',
    Image2: 'images/Kitchen/toaster-2.jpg',
    Image3: 'images/Kitchen/toaster-3.jpg',
    price: 50.00,
    category: 'Kitchen',
    weight: '100g',
    texture: 'Steel',
    size: '30cm x 20cm'
  },
  {
    id: 25,
    name: 'Beige',
    Image1: 'images/Chairs/beige-1.jpg',
    Image2: 'images/Chairs/beige-2.jpg',
    Image3: 'images/Chairs/beige-3.jpg',
    price: 160.00,
    category: 'Chairs',
    weight: '3kg',
    texture: 'Fabrics',
    size: '700cm x 220cm'
  },
  {
    id: 31,
    name: 'Bubble',
    Image1: 'images/Skincare/bubble.jpg',
    Image2: 'images/Skincare/bubble-2.jpg',
    Image3: 'images/Skincare/bubble-3.jpg',
    price: 40.00,
    category: 'Skincare',
    weight: '200g',
    texture: 'Plastic',
    size: '100cm x 40cm'
  },
  {
    id: 33,
    name: 'Playstation Portable',
    Image1: 'images/games/psp-1.jpg',
    Image2: 'images/games/psp-2.jpg',
    Image3: 'images/games/psp-3.jpg',
    price: 150.00,
    category: 'Games',
    weight: '189g',
    texture: 'Plastic',
    size: '17cm x 7.4cm'
  },
  {
    id: 3,
    name: 'Record Stand',
    Image1: 'images/Furniture/record-1.jpg',
    Image2: 'images/Furniture/record-1.jpg',
    Image3: 'images/Furniture/record-1.jpg',
    price: 40.00,
    category: 'Furniture',
    weight: '2kg',
    texture: 'Wood',
    size: '30cm x 30cm'
  },
  {
    id: 14,
    name: 'Wooden Floor Lamp',
    Image1: 'images/Lamps/wooden-lamp-1.jpg',
    Image2: 'images/Lamps/wooden-lamp-2.jpg',
    Image3: 'images/Lamps/wooden-lamp-3.jpg',
    price: 70.00,
    category: 'Electronics',
    weight: '500g',
    texture: 'Wood',
    size: '1m x 200cm'
  },
  {
    id: 23,
    name: 'Tan chair',
    Image1: 'images/Chairs/tan-1.jpg',
    Image2: 'images/Chairs/tan-2.jpg',
    Image3: 'images/Chairs/tan-3.jpg',
    price: 120.00,
    category: 'Chairs',
    weight: '2kg',
    texture: 'Leather',
    size: '500cm x 40cm'
  },
];

let productsWeLikeHTML = '';

productsWeLike.forEach((product) => {
  productsWeLikeHTML += `
    <div class="products">
      <a href="categories.html?productId=${product.id}">
        <div class="products-image">
          <img src="${product.Image1}" alt="${product.name}">
        </div>
        <div class="products-name">
          <h4>${product.name}</h4>
        </div>
        <div class="products-price">
          <p>$${product.price}</p>
        </div>
      </a>
    </div>
  `;
});

document.querySelector('.js-products-we-like-grid').innerHTML = productsWeLikeHTML;


updateCartNumber(); 
