const trendingProducts = [
{
    id: 8,
    name: 'Wireless Charger',
    Image1: 'images/Electronics/charger-1.jpg',
    Image2: 'images/Electronics/charger-2.jpg',
    Image3: 'images/Electronics/charger-3.jpg',
    price: 10.00,
    category: 'Electronics',
    weight: '50g',
    texture: 'Rubber',
    size: '10cm x 3cm'
  },
{
	id: 34,
    name: 'Nintendo lite',
    Image1: 'images/games/lite-1.jpg',
    Image2: 'images/games/lite-2.jpg',
    Image3: 'images/games/lite-3.jpg',
    price: 180.00,
    category: 'Games',
    weight: '150g',
    texture: 'Plastic',
    size: '17cm x 7cm'
  },
  {
    id: 28,
    name: 'Elf Mini Kit',
    Image1: 'images/Skincare/elf-3.jpg',
    Image2: 'images/Skincare/elf-2.jpg',
    Image3: 'images/Skincare/elf-1.jpg',
    price: 35.00,
    category: 'Skincare',
    weight: '500g',
    texture: 'Glass',
    size: '100cm x 70cm'
  },
  {
    id: 2 ,
    name: 'Night-stand Drawer',
    Image1: 'images/Furniture/nightstand-1.jpg',
    Image2: 'images/Furniture/nightstand-2.jpg',
    Image3: 'images/Furniture/nightstand-3.jpg',
    price: 90.00,
    category: 'Furniture',
    weight: '3kg',
    texture: 'Wood',
    size: '40cm x 30cm'
  },
  {
    id: 12,
    name: 'Floor Lamp',
    Image1: 'images/Lamps/floor-lamp-1.jpg',
    Image2: 'images/Lamps/floor-lamp-2.jpg',
    Image3: 'images/Lamps/floor-lamp-3.jpg',
    price: 95.00,
    category: 'Lamp',
    weight: '500g',
    texture: 'Steel',
    size: '1m x 200cm'
  },
  {
    id: 17,
    name: 'Knife Set',
    Image1: 'images/Kitchen/knife-1.jpg',
    Image2: 'images/Kitchen/knife-2.jpg',
    Image3: 'images/Kitchen/knife-3.jpg',
    price: 100.00,
    category: 'Kitchen',
    weight: '500g',
    texture: 'Steel',
    size: '50cm x 20cm'
  },

  {
    id: 24,
    name: 'Accent Stand',
    Image1: 'images/Chairs/accent-1.jpg',
    Image2: 'images/Chairs/accent-2.jpg',
    Image3: 'images/Chairs/accent-3.jpg',
    price: 100.00,
    category: 'Chairs',
    weight: '2kg',
    texture: 'Fabrics',
    size: '700cm x 200cm'
  },
  {
    id: 22,
    name: 'Jabel Leather',
    Image1: 'images/Chairs/jabel-1.jpg',
    Image2: 'images/Chairs/jabel-2.jpg',
    Image3: 'images/Chairs/jabel-3.jpg',
    price: 100.00,
    category: 'Chairs',
    weight: '2kg',
    texture: 'Leather',
    size: '1m x 40cm'
  },
  {
    id: 4,
    name: 'Shoe Bench',
    Image1: 'images/Furniture/shoebench-1.jpg',
    Image2: 'images/Furniture/shoebench-2.jpg',
    Image3: 'images/Furniture/shoebench-3.jpg',
    price: 30.00,
    category: 'Furniture',
    weight: '5kg',
    texture: 'Wood',
    size: '30cm x 50cm'
  },
  {
    id: 20,
    name: 'Weave cotton',
    Image1: 'images/Kitchen/cotton-1.jpg',
    Image2: 'images/Kitchen/cotton-2.jpg',
    Image3: 'images/Kitchen/cotton-3.jpg',
    price: 10.00,
    category: 'Kitchen',
    weight: '5g',
    texture: 'Fabric',
    size: '10cm x 20cm'
  },

];


let trendingProductsHTML = '';

trendingProducts.forEach((trendingProducts) => {
	trendingProductsHTML += `
	<div class="trending-products">
    <a href ="product-page.html">
  		<div class="trending-products-image">
  			<img src="${trendingProducts.Image1}">
  		</div>
  		<div class="trending-products-name">
  			<h4>${trendingProducts.name}</h4>
  		</div>
  		<div class="trending-products-price">
  			<p>$ ${trendingProducts.price}</p>
  		</div>
    </a>
	</div>`
});

document.querySelector('.js-trending-products-container').
innerHTML = trendingProductsHTML;


const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const item = document.querySelectorAll(".trending-products");

let slideNumber = 1;
const length = item.length;

const nextSlide = () => {
    if (slideNumber === 0) {
        getFirstSlide();  // Reset if slideNumber reaches 6
    } else {
        slider.style.transform = `translateX(-${slideNumber * 200}px)`;
        slideNumber++;
    }
};

const prevSlide = () => {
    slider.style.transform = `translateX(-${(slideNumber - 2) * 200}px)`;
    slideNumber--;
};

const getFirstSlide = () => {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
};

const getLastSlide = () => {
    slider.style.transform = `translateX(${(length - 1) * 200}px)`;
    slideNumber = length;
};

// Event listeners
right.addEventListener('click', () => {
    slideNumber < length ? nextSlide() : getFirstSlide();
});

left.addEventListener('click', () => {
    slideNumber > 1 ? prevSlide() : getFirstSlide();
});



const clicked = () => {
  document.getElementById('sub-button').
  innerHTML = 'Sbuscribed';

  document.querySelector('.subscribed').
  innerHTML = `${'Thank you for subscribing'}`;
};

