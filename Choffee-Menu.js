const faGreaterThanCategory = document.getElementById('fa-greater-than-category');
const faGreaterThanItems = document.getElementById('fa-greater-than-items');
const greaterThanSymbols = [ faGreaterThanCategory, faGreaterThanItems ]
const productPathCategory = document.getElementById('product-path-category');
const productPathItems = document.getElementById('product-path-item');

let yAxisOfContainer = document.getElementById('products-main-container');

const productCategories = [
    { name: 'Cappuccino', flavors: ['vanilla', 'caramel', 'hazelnut'] },
    { name: 'Latte', flavors: ['choco', 'cinnamon', 'pumpkin'] },
    { name: 'Frappuccino', flavors: ['cafemocha', 'strawberry', 'darkchoco'] },
    { name: 'Mocha', flavors: ['marble', 'iced', 'white'] },
    { name: 'Americano', flavors: ['espresso', 'flatwhite', 'mocha'] }
];

const cappucinoVanilla = document.querySelector('#product-cappucino-vanilla');
const cappucinoCaramel= document.querySelector('#product-cappucino-caramel');
const cappucinoHazelnut = document.querySelector('#product-cappucino-hazelnut');
const latteChoco = document.querySelector('#product-latte-choco');
const latteCinnamon = document.querySelector('#product-latte-cinnamon');
const lattePumpkin = document.querySelector('#product-latte-pumpkin');
const frappuccinoCafeMocha = document.querySelector('#product-frappuccino-cafe-mocha');
const frappuccinoStrawberry = document.querySelector('#product-frappuccino-strawberry');
const frappuccinoDarkChoco = document.querySelector('#product-frappuccino-dark-choco');
const mochaMarble = document.querySelector('#product-mocha-marble');
const mochaIced = document.querySelector('#product-iced-mocha');
const mochaWhite = document.querySelector('#product-mocha-white');
const americanoEspresso = document.querySelector('#product-americano-espresso');
const americanoFlatWhite = document.querySelector('#product-americano-flat-white');
const americanoMocha = document.querySelector('#product-americano-mocha');
const allProduct = [ cappucinoVanilla, cappucinoCaramel, cappucinoHazelnut, latteChoco, latteCinnamon, lattePumpkin, frappuccinoCafeMocha, frappuccinoStrawberry, frappuccinoDarkChoco, mochaMarble, mochaIced, mochaWhite, americanoEspresso, americanoFlatWhite, americanoMocha];

// funtion to toggle product list button.
let menuBar = document.getElementById('menu-bar')

function toggleMenuBar() {
    menuBar.classList.toggle("active");
    navLinks.classList.remove("active");
    cartContainer.classList.remove("show-container");
  }
  
  // function to toggle nav links
  let navLinks = document.getElementById('navlinks')
  
  function toggleNavLinks() {
      navLinks.classList.toggle("active");
      menuBar.classList.remove("active");
      cartContainer.classList.remove("show-container");
    };

// function to toggle cart icon
const cartContainer = document.getElementById('cart-container');
const myCartButton = document.getElementById('my-cart');
function toggleCart() {
    cartContainer.classList.toggle("show-container");
    navLinks.classList.remove("active");
    menuBar.classList.remove("active");
 };
myCartButton.addEventListener('click', toggleCart);

// function to show all products.
function displayAllProducts() {
    for (let i = 0; i < allProduct.length; i++) {
        if (i >= 0 && i <= 14) {
            allProduct[i].style.display = 'flex';
        } else {
            allProduct[i].style.display = 'flex';
        }
    }
    greaterThanSymbols[0].style.display = 'none';
    greaterThanSymbols[1].style.display = 'none';
    productPathCategory.innerHTML = ``;
    productPathItems.innerHTML = ``;
    yAxisOfContainer.style.overflowY = 'scroll';
};


// function to display products by categories and product category path
function displayCappucinoCategory() {
    for (i = 0; i < allProduct.length; i++) {
        if (i < 3) {
            allProduct[i].style.display = 'flex';
        } else {
            allProduct[i].style.display = 'none';
        }
    }
    productPathCategory.innerHTML = productCategories[0].name;
    productPathItems.innerHTML = ``;
    greaterThanSymbols[0].style.display = 'flex';
    greaterThanSymbols[1].style.display = 'none';
    yAxisOfContainer.style.overflowY = 'hidden';
    menuBar.classList.remove("active");
}
function displayLatteCategory() {
    for (let i = 0; i < allProduct.length; i++) {
        if (i >= 3 && i <= 5) {
            allProduct[i].style.display = 'flex';
        } else {
            allProduct[i].style.display = 'none';
        }
    }
    productPathCategory.innerHTML = productCategories[1].name;
    productPathItems.innerHTML = ``;
    greaterThanSymbols[0].style.display = 'flex';
    greaterThanSymbols[1].style.display = 'none';
    yAxisOfContainer.style.overflowY = 'hidden';
    menuBar.classList.remove("active");
}
function displayFrappuccinoCategory() {
    for (let i = 0; i < allProduct.length; i++) {
        if (i >= 6 && i <= 8) {
            allProduct[i].style.display = 'flex';
        } else {
            allProduct[i].style.display = 'none';
        }
    }
    productPathCategory.innerHTML = productCategories[2].name;
    productPathItems.innerHTML = ``;
    greaterThanSymbols[0].style.display = 'flex';
    greaterThanSymbols[1].style.display = 'none';
    yAxisOfContainer.style.overflowY = 'hidden';
    menuBar.classList.remove("active");
}
function displayMochaCategory() {
    for (let i = 0; i < allProduct.length; i++) {
        if (i >= 9 && i <= 11) {
            allProduct[i].style.display = 'flex';
        } else {
            allProduct[i].style.display = 'none';
        }
    }
    productPathCategory.innerHTML = productCategories[3].name;
    productPathItems.innerHTML = ``;
    greaterThanSymbols[0].style.display = 'flex';
    greaterThanSymbols[1].style.display = 'none';
    yAxisOfContainer.style.overflowY = 'hidden';
    menuBar.classList.remove("active");
}
function displayAmericanoCategory() {
    for (let i = 0; i < allProduct.length; i++) {
        if (i >= 12 && i <= 14) {
            allProduct[i].style.display = 'flex';
        } else {
            allProduct[i].style.display = 'none';
        }
    }
    productPathCategory.innerHTML = productCategories[4].name;
    productPathItems.innerHTML = ``;
    greaterThanSymbols[0].style.display = 'flex';
    greaterThanSymbols[1].style.display = 'none';
    yAxisOfContainer.style.overflowY = 'hidden';
    menuBar.classList.remove("active");
}


// function to display products by items and product items path
function displayCappucinoVanillaItem() {
    for (let i = 0; i < allProduct.length; i++) {
        if (i === 0) {
            allProduct[i].style.display = 'flex';
        } else {
            allProduct[i].style.display = 'none';
        }
    }
    productPathCategory.innerHTML = productCategories[0].name;
    productPathItems.innerHTML = `${productCategories[0].flavors[0]}${productCategories[0].name}`;
    greaterThanSymbols[0].style.display = 'flex';
    greaterThanSymbols[1].style.display = 'flex';
    yAxisOfContainer.style.overflowY = 'hidden';
    menuBar.classList.remove("active");
}
function displayCappucinoCaramelItem() {
    for (let i = 0; i < allProduct.length; i++) {
        if (i === 1) {
            allProduct[i].style.display = 'flex';
        } else {
            allProduct[i].style.display = 'none';
        }
    }
    productPathCategory.innerHTML = productCategories[0].name;
    productPathItems.innerHTML = `${productCategories[0].flavors[1]}${productCategories[0].name}`;
    greaterThanSymbols[0].style.display = 'flex';
    greaterThanSymbols[1].style.display = 'flex';
    yAxisOfContainer.style.overflowY = 'hidden';
    menuBar.classList.remove("active");
}
function displayCappucinoHazelnutItem() {
    for (let i = 0; i < allProduct.length; i++) {
        if (i === 2) {
            allProduct[i].style.display = 'flex';
        } else {
            allProduct[i].style.display = 'none';
        }
    }
    productPathCategory.innerHTML = productCategories[0].name;
    productPathItems.innerHTML = `${productCategories[0].flavors[2]}${productCategories[0].name}`;
    greaterThanSymbols[0].style.display = 'flex';
    greaterThanSymbols[1].style.display = 'flex';
    yAxisOfContainer.style.overflowY = 'hidden';
    menuBar.classList.remove("active");
}
function displayLatteChocoItem() {
    for (let i = 0; i < allProduct.length; i++) {
        if (i === 3) {
            allProduct[i].style.display = 'flex';
        } else {
            allProduct[i].style.display = 'none';
        }
    }
    productPathCategory.innerHTML = productCategories[1].name;
    productPathItems.innerHTML = `${productCategories[1].flavors[0]}${productCategories[1].name}`;
    greaterThanSymbols[0].style.display = 'flex';
    greaterThanSymbols[1].style.display = 'flex';
    yAxisOfContainer.style.overflowY = 'hidden';
    menuBar.classList.remove("active");
}
function displayLatteCinnamonItem() {
    for (let i = 0; i < allProduct.length; i++) {
        if (i === 4) {
            allProduct[i].style.display = 'flex';
        } else {
            allProduct[i].style.display = 'none';
        }
    }
    productPathCategory.innerHTML = productCategories[1].name;
    productPathItems.innerHTML = `${productCategories[1].flavors[1]}${productCategories[1].name}`;
    greaterThanSymbols[0].style.display = 'flex';
    greaterThanSymbols[1].style.display = 'flex';
    yAxisOfContainer.style.overflowY = 'hidden';
    menuBar.classList.remove("active");
}
function displayLattePumpkinItem() {
    for (let i = 0; i < allProduct.length; i++) {
        if (i === 5) {
            allProduct[i].style.display = 'flex';
        } else {
            allProduct[i].style.display = 'none';
        }
    }
    productPathCategory.innerHTML = productCategories[1].name;
    productPathItems.innerHTML = `${productCategories[1].flavors[2]}${productCategories[1].name}`;
    greaterThanSymbols[0].style.display = 'flex';
    greaterThanSymbols[1].style.display = 'flex';
    yAxisOfContainer.style.overflowY = 'hidden';
    menuBar.classList.remove("active");
}
function displayFrappuccinoCafeMocaItem() {
    for (let i = 0; i < allProduct.length; i++) {
        if (i === 6) {
            allProduct[i].style.display = 'flex';
        } else {
            allProduct[i].style.display = 'none';
        }
    }
    productPathCategory.innerHTML = productCategories[2].name;
    productPathItems.innerHTML = `${productCategories[2].flavors[0]}${productCategories[2].name}`;
    greaterThanSymbols[0].style.display = 'flex';
    greaterThanSymbols[1].style.display = 'flex';
    yAxisOfContainer.style.overflowY = 'hidden';
    menuBar.classList.remove("active");
}
function displayFrappuccinoStrawberryItem() {
    for (let i = 0; i < allProduct.length; i++) {
        if (i === 7) {
            allProduct[i].style.display = 'flex';
        } else {
            allProduct[i].style.display = 'none';
        }
    }
    productPathCategory.innerHTML = productCategories[2].name;
    productPathItems.innerHTML = `${productCategories[2].flavors[1]}${productCategories[2].name}`;
    greaterThanSymbols[0].style.display = 'flex';
    greaterThanSymbols[1].style.display = 'flex';
    yAxisOfContainer.style.overflowY = 'hidden';
    menuBar.classList.remove("active");
}
function displayFrappuccinoDarkChocoItem() {
    for (let i = 0; i < allProduct.length; i++) {
        if (i === 8) {
            allProduct[i].style.display = 'flex';
        } else {
            allProduct[i].style.display = 'none';
        }
    }
    productPathCategory.innerHTML = productCategories[2].name;
    productPathItems.innerHTML = `${productCategories[2].flavors[2]}${productCategories[2].name}`;
    greaterThanSymbols[0].style.display = 'flex';
    greaterThanSymbols[1].style.display = 'flex';
    yAxisOfContainer.style.overflowY = 'hidden';
    menuBar.classList.remove("active");
}
function displayMochaMarbleItem() {
    for (let i = 0; i < allProduct.length; i++) {
        if (i === 9) {
            allProduct[i].style.display = 'flex';
        } else {
            allProduct[i].style.display = 'none';
        }
    }
    productPathCategory.innerHTML = productCategories[3].name;
    productPathItems.innerHTML = `${productCategories[3].flavors[0]}${productCategories[3].name}`;
    greaterThanSymbols[0].style.display = 'flex';
    greaterThanSymbols[1].style.display = 'flex';
    yAxisOfContainer.style.overflowY = 'hidden';
    menuBar.classList.remove("active");
}
function displayMochaIcedItem() {
    for (let i = 0; i < allProduct.length; i++) {
        if (i === 10) {
            allProduct[i].style.display = 'flex';
        } else {
            allProduct[i].style.display = 'none';
        }
    }
    productPathCategory.innerHTML = productCategories[3].name;
    productPathItems.innerHTML = `${productCategories[3].flavors[1]}${productCategories[3].name}`;
    greaterThanSymbols[0].style.display = 'flex';
    greaterThanSymbols[1].style.display = 'flex';
    yAxisOfContainer.style.overflowY = 'hidden';
    menuBar.classList.remove("active");
}
function displayMochaWhiteItem() {
    for (let i = 0; i < allProduct.length; i++) {
        if (i === 11) {
            allProduct[i].style.display = 'flex';
        } else {
            allProduct[i].style.display = 'none';
        }
    }
    productPathCategory.innerHTML = productCategories[3].name;
    productPathItems.innerHTML = `${productCategories[3].flavors[2]}${productCategories[3].name}`;
    greaterThanSymbols[0].style.display = 'flex';
    greaterThanSymbols[1].style.display = 'flex';
    yAxisOfContainer.style.overflowY = 'hidden';
    menuBar.classList.remove("active");
}
function displayAmericanoEspressoItem() {
    for (let i = 0; i < allProduct.length; i++) {
        if (i === 12) {
            allProduct[i].style.display = 'flex';
        } else {
            allProduct[i].style.display = 'none';
        }
    }
    productPathCategory.innerHTML = productCategories[4].name;
    productPathItems.innerHTML = `${productCategories[4].flavors[0]}${productCategories[4].name}`;
    greaterThanSymbols[0].style.display = 'flex';
    greaterThanSymbols[1].style.display = 'flex';
    yAxisOfContainer.style.overflowY = 'hidden';
    menuBar.classList.remove("active");
}
function displayAmericanoFlatWhiteItem() {
    for (let i = 0; i < allProduct.length; i++) {
        if (i === 13) {
            allProduct[i].style.display = 'flex';
        } else {
            allProduct[i].style.display = 'none';
        }
    }
    productPathCategory.innerHTML = productCategories[4].name;
    productPathItems.innerHTML = `${productCategories[4].flavors[1]}${productCategories[4].name}`;
    greaterThanSymbols[0].style.display = 'flex';
    greaterThanSymbols[1].style.display = 'flex';
    yAxisOfContainer.style.overflowY = 'hidden';
    menuBar.classList.remove("active");
}
function displayAmericanoMochaItem() {
    for (let i = 0; i < allProduct.length; i++) {
        if (i === 14) {
            allProduct[i].style.display = 'flex';
        } else {
            allProduct[i].style.display = 'none';
        }
    }
    productPathCategory.innerHTML = productCategories[4].name;
    productPathItems.innerHTML = `${productCategories[4].flavors[2]}${productCategories[4].name}`;
    greaterThanSymbols[0].style.display = 'flex';
    greaterThanSymbols[1].style.display = 'flex';
    yAxisOfContainer.style.overflowY = 'hidden';
    menuBar.classList.remove("active");
}

//function for product path categories links
function productCategoryLink() {
    const lowerCaseProductCategoriesCappucino = productCategories[0].name.toLowerCase();
    const lowerCaseProductCategoriesLatte = productCategories[1].name.toLowerCase();
    const lowerCaseProductCategoriesFrappuccino = productCategories[2].name.toLowerCase();
    const lowerCaseProductCategoriesMocha = productCategories[3].name.toLowerCase();
    const lowerCaseProductCategoriesAmericano = productCategories[4].name.toLowerCase();
    const  lowerCaseProductPathCategory = productPathCategory.innerHTML.toLowerCase();

    if (lowerCaseProductCategoriesCappucino === lowerCaseProductPathCategory) {
        displayCappucinoCategory();
    } else if (lowerCaseProductCategoriesLatte === lowerCaseProductPathCategory) {
        displayLatteCategory();
    } else if (lowerCaseProductCategoriesFrappuccino === lowerCaseProductPathCategory) {
        displayFrappuccinoCategory();
    } else if (lowerCaseProductCategoriesMocha === lowerCaseProductPathCategory) {
        displayMochaCategory();
    } else if (lowerCaseProductCategoriesAmericano === lowerCaseProductPathCategory) {
        displayAmericanoCategory();
    } else {
        console.log("Number a Category");
    }
}


// * PRODUCT QUANTITY FUNCTION
// These constants define the maximum and minimum quantity allowed.
const minQuantity = 1;
const maxQuantity = 10;
// This function takes an action ('increase' or 'decrease') and the quantity element (HTML input element).
// It parses the current quantity value and then performs the appropriate action based on the input.
// If the quantity reaches the maximum or minimum limit, it displays an alert message.
function manageQuantity(action, quantityElement) {
    const quantity = parseInt(quantityElement.value);
    switch (action) {
        case 'increase':
            if (quantity < maxQuantity) {
                quantityElement.value++;
            } else {
                Swal.fire({
                    icon: "info",
                    title: "Maximum quantity reached!"
                  });
            }
            break;
        case 'decrease':
            if (quantity > minQuantity) {
                quantityElement.value--;
            } else {
                Swal.fire({
                    icon: "info",
                    title: "Minimum quantity reached!"
                  });
            }
            break;
        default:
            Swal.fire({
                icon: "warning",
                title: "Invalid action provided!"
            });
    }
}
// This array contains the names of all the products.
const products = [
    'vanilla-cappucino', 'cappucino-caramel', 'cappucino-hazelnut', 
    'latte-choco', 'latte-cinnamon', 'latte-pumpkin', 
    'frappuccino-cafe-mocha', 'frappuccino-strawberry', 'frappuccino-dark-choco', 
    'mocha-marble', 'mocha-iced', 'mocha-white', 
    'americano-espresso', 'americano-flat-white', 'americano-mocha'
];
// This loop iterates over each product name in the products array.
// For each product, it retrieves the decrease button, quantity input element, and increase button using document.getElementById.
// It then sets up event listeners for the decrease and increase buttons. When clicked, these buttons call the manageQuantity function with the appropriate action ('decrease' or 'increase') and the corresponding quantity input element.
products.forEach(product => {
    const decreaseButton = document.getElementById(`product-quantity-decrease-${product}`);
    const quantityElement = document.getElementById(`${product}-quantity`);
    const increaseButton = document.getElementById(`product-quantity-increase-${product}`);
    
    decreaseButton.addEventListener('click', () => manageQuantity('decrease', quantityElement));
    increaseButton.addEventListener('click', () => manageQuantity('increase', quantityElement));
});


// ! AYUSIN YUNG MGA PRICES
const allCoffee = [
    {
        productName: "vanilla cappucino",
        productPrice: 55,
        productSugarLevel: [ 
                                            "25%", "50%", "75%", "100%"
                                        ],
        productSizes: { "small" : 0.8, 
                                    "regular": 1, 
                                    "medium": 1.2, 
                                    "large": 1.5 
                                },
        productQuantity: 60,
        productImage: "cappucino-vanilla.jfif",
        productTotalPrice: ""
    },
    {        productName: "caramel cappucino",
        productPrice: 60,
        productSugarLevel: [ 
                                            "25%", "50%", "75%", "100%"
                                        ],
        productSizes: { "small" : 0.8, 
                                    "regular": 1, 
                                    "medium": 1.2, 
                                    "large": 1.5 
                                },
        productQuantity: 1,
        productImage: "cappucino-caramel.jfif",
        productTotalPrice: ""
    },
    {        productName: "hazelnut cappucino",
        productPrice: 62.75,
        productSugarLevel: [ 
                                            "25%", "50%", "75%", "100%"
                                        ],
        productSizes: { "small" : 0.8, 
                                    "regular": 1, 
                                    "medium": 1.2, 
                                    "large": 1.5 
                                },
        productQuantity: 1,
        productImage: "cappucino-hazelnut.jpg",
        productTotalPrice: ""
    },
    {        productName: "choco latte",
        productPrice: 70.00,
        productSugarLevel: [ 
                                            "25%", "50%", "75%", "100%"
                                        ],
        productSizes: { "small" : 0.8, 
                                    "regular": 1, 
                                    "medium": 1.2, 
                                    "large": 1.5 
                                },
        productQuantity: 1,
        productImage: "latte-choco.jpg",
        productTotalPrice: ""
    },
    {        productName: "cinnamon latte",
        productPrice: 70.25,
        productSugarLevel: [ 
                                            "25%", "50%", "75%", "100%"
                                        ],
        productSizes: { "small" : 0.8, 
                                    "regular": 1, 
                                    "medium": 1.2, 
                                    "large": 1.5 
                                },
        productQuantity: 1,
        productImage: "latte-cinnamon.jpg",
        productTotalPrice: ""
    },
    {        productName: "pumpkin latte",
        productPrice: 67.75,
        productSugarLevel: [ 
                                            "25%", "50%", "75%", "100%"
                                        ],
        productSizes: { "small" : 0.8, 
                                    "regular": 1, 
                                    "medium": 1.2, 
                                    "large": 1.5 
                                },
        productQuantity: 1,
        productImage: "latte-pumpkin.jpg",
        productTotalPrice: ""
    },
    {        productName: "cafe mocha frappuccino",
        productPrice: 68.00,
        productSugarLevel: [ 
                                            "25%", "50%", "75%", "100%"
                                        ],
        productSizes: { "small" : 0.8, 
                                    "regular": 1, 
                                    "medium": 1.2, 
                                    "large": 1.5 
                                },
        productQuantity: 1,
        productImage: "frappuccino-cafe-mocha.jpg",
        productTotalPrice: ""
    },
    {        productName: "strawberry frappuccino",
        productPrice: 68.25,
        productSugarLevel: [ 
                                            "25%", "50%", "75%", "100%"
                                        ],
        productSizes: { "small" : 0.8, 
                                    "regular": 1, 
                                    "medium": 1.2, 
                                    "large": 1.5 
                                },
        productQuantity: 1,
        productImage: "frappuccino-strawberry.jpg",
        productTotalPrice: ""
    },
    {        productName: "dark choco frappuccino",
        productPrice: 69.50,
        productSugarLevel: [ 
                                            "25%", "50%", "75%", "100%"
                                        ],
        productSizes: { "small" : 0.8, 
                                    "regular": 1, 
                                    "medium": 1.2, 
                                    "large": 1.5 
                                },
        productQuantity: 1,
        productImage: "frappuccino-dark-choco.jpg",
        productTotalPrice: ""
    },
    {
        productName: "marble mocha",
        productPrice: 67.25,
        productSugarLevel: [ 
                                            "25%", "50%", "75%", "100%"
                                        ],
        productSizes: { "small" : 0.8, 
                                    "regular": 1, 
                                    "medium": 1.2, 
                                    "large": 1.5 
                                },
        productQuantity: 1,
        productImage: "mocha-marble.jpg",
        productTotalPrice: ""
    },
    {
        productName: "iced mocha",
        productPrice: 59.25,
        productSugarLevel: [ 
                                            "25%", "50%", "75%", "100%"
                                        ],
        productSizes: { "small" : 0.8, 
                                    "regular": 1, 
                                    "medium": 1.2, 
                                    "large": 1.5 
                                },
        productQuantity: 1,
        productImage: "mocha-iced.jpg",
        productTotalPrice: ""
    },
    {
        productName: "white mocha",
        productPrice: 55.50,
        productSugarLevel: [ 
                                            "25%", "50%", "75%", "100%"
                                        ],
        productSizes: { "small" : 0.8, 
                                    "regular": 1, 
                                    "medium": 1.2, 
                                    "large": 1.5 
                                },
        productQuantity: 1,
        productImage: "mocha-white.jpg",
        productTotalPrice: ""
    },
    {
        productName: "espresso americano",
        productPrice: 65.50,
        productSugarLevel: [ 
                                            "25%", "50%", "75%", "100%"
                                        ],
        productSizes: { "small" : 0.8, 
                                    "regular": 1, 
                                    "medium": 1.2, 
                                    "large": 1.5 
                                },
        productQuantity: 1,
        productImage: "americano-espresso.jpg",
        productTotalPrice: ""
    },
    {
        productName: "flat white americano",
        productPrice: 66.75,
        productSugarLevel: [ 
                                            "25%", "50%", "75%", "100%"
                                        ],
        productSizes: { "small" : 0.8, 
                                    "regular": 1, 
                                    "medium": 1.2, 
                                    "large": 1.5 
                                },
        productQuantity: 1,
        productImage: "americano-flat-white.jpg" ,
        productTotalPrice: ""
    },
    {
        productName: "mocha americano",
        productPrice: 62.50,
        productSugarLevel: [ 
                                            "25%", "50%", "75%", "100%"
                                        ],
        productSizes: { "small" : 0.8, 
                                    "regular": 1, 
                                    "medium": 1.2, 
                                    "large": 1.5 
                                },
        productQuantity: 1,
        productImage: "americano-mocha.jpg",
        productTotalPrice: ""
    }
];

// array of orders 
let orders = [ ];
const cartOrderContainer = document.getElementById('cart-order-container');
// * ADD TO CART FUNCTION
function addDiv(index) {
    // Update the length of orders by counting the child element of #cart-container
    const orderNotif = document.getElementById('order-notification-count');
   // Array of select tag values of sugar level
    sugarLevels = [
        document.getElementById('sugar-level-option-cappucino-vanilla').value,
        document.getElementById('sugar-level-option-cappucino-caramel').value,
        document.getElementById('sugar-level-option-cappucino-hazelnut').value,
        document.getElementById('sugar-level-option-latte-choco').value,
        document.getElementById('sugar-level-option-latte-cinnamon').value,
        document.getElementById('sugar-level-option-latte-pumpkin').value,
        document.getElementById('sugar-level-option-frappuccino-cafe-mocha').value,
        document.getElementById('sugar-level-option-frappuccino-strawberry').value,
        document.getElementById('sugar-level-option-frappuccino-dark-choco').value,
        document.getElementById('sugar-level-option-mocha-marble').value,
        document.getElementById('sugar-level-option-mocha-iced').value,
        document.getElementById('sugar-level-option-mocha-white').value,
        document.getElementById('sugar-level-option-americano-espresso').value,
        document.getElementById('sugar-level-option-americano-flat-white').value,
        document.getElementById('sugar-level-option-americano-mocha').value
    ];
    // Array of quantity values
    quantities = [
        document.getElementById('vanilla-cappucino-quantity').value,
        document.getElementById('cappucino-caramel-quantity').value,
        document.getElementById('cappucino-hazelnut-quantity').value,
        document.getElementById('latte-choco-quantity').value,
        document.getElementById('latte-cinnamon-quantity').value,
        document.getElementById('latte-pumpkin-quantity').value,
        document.getElementById('frappuccino-cafe-mocha-quantity').value,
        document.getElementById('frappuccino-strawberry-quantity').value,
        document.getElementById('frappuccino-dark-choco-quantity').value,
        document.getElementById('mocha-marble-quantity').value,
        document.getElementById('mocha-iced-quantity').value,
        document.getElementById('mocha-white-quantity').value,
        document.getElementById('americano-espresso-quantity').value,
        document.getElementById('americano-flat-white-quantity').value,
        document.getElementById('americano-mocha-quantity').value,
    ]
    // Array of sizes value
    sizes = [
        document.getElementById('cappucinno-vanilla-sizes').value,
        document.getElementById('cappucinno-caramel-sizes').value,
        document.getElementById('cappucinno-hazelnut-sizes').value,
        document.getElementById('latte-choco-sizes').value,
        document.getElementById('latte-cinnamon-sizes').value,
        document.getElementById('latte-pumpkin-sizes').value,
        document.getElementById('frappuccino-cafe-mocha-sizes').value,
        document.getElementById('frappuccino-strawberry-sizes').value,
        document.getElementById('frappuccino-dark-choco-sizes').value,
        document.getElementById('mocha-marble-sizes').value,
        document.getElementById('mocha-iced-sizes').value,
        document.getElementById('mocha-white-sizes').value,
        document.getElementById('americano-espresso-sizes').value,
        document.getElementById('americano-flat-white-sizes').value,
        document.getElementById('americano-mocha-sizes').value,
    ];
    //! Pagandahin ang cart container
    //! Idisplay yung size name sa cart
    if (!checkOrderCount()) {
        const order = document.createElement("div"); 
        const prodOrderName = document.createElement("span");
        const prodOrderPrice = document.createElement("span");
        const prodOrderSugarLevel = document.createElement("span");
        const prodOrderSizes= document.createElement("span");
        const prodOrderQuantity = document.createElement("span");
        const prodOrderTotalPrice = document.createElement("span");
        const removeBtn = document.createElement("button");

        prodOrderName.textContent = `${allCoffee[index].productName}`;
        prodOrderPrice.textContent = `₱${allCoffee[index].productPrice}`
        prodOrderPrice.value = allCoffee[index].productPrice;
        prodOrderSugarLevel.textContent = `SUGAR: ${sugarLevels[index]}%` ; 
        prodOrderSizes.textContent = `SZ : ${sizes[index]}`
        prodOrderQuantity.textContent = `QTY : ${quantities[index]}pc(s)`
        prodOrderQuantity.value = quantities[index];
        prodOrderSizes.value = sizes[index];
        
        totalOrderPrice = ( prodOrderPrice.value * prodOrderSizes.value ) * prodOrderQuantity.value;
        const formattedTotalOrderPrice = totalOrderPrice.toFixed(2);
        prodOrderTotalPrice.textContent = `TOTAL : ₱${formattedTotalOrderPrice}`
        removeBtn.textContent = "remove"; 
        // function to remove the orders in cart
        removeBtn.addEventListener('click', function() {
            order.remove();
            //! AYUSIN AND REMOVE DAPAT MAG BABAWASAN ANG TOTAL PRICE PAG NAG REMOVE NG ORDER
            updateOrderNotification();
        });
        
        
        order.appendChild(prodOrderName);
        order.appendChild(prodOrderPrice);
        order.appendChild(prodOrderSugarLevel);
        order.appendChild(prodOrderSizes);
        order.appendChild(prodOrderQuantity);
        order.appendChild(prodOrderTotalPrice);
        order.appendChild(removeBtn)

        cartOrderContainer.appendChild(order);

        // display cart order numbers notification
        function updateOrderNotification() {
            const numberOfElements = cartOrderContainer.children.length;
            if (numberOfElements > 0) {
                orderNotif.style.display = "inline";
                orderNotif.innerHTML = numberOfElements;
            } else {
                orderNotif.style.display = "none";
            }
        }
        updateOrderNotification();

        // Add order to orders array
        orders.push({
            productName: allCoffee[index].productName,
            productPrice: parseFloat(allCoffee[index].productPrice),
            sugarLevel: sugarLevels[index],
            size: parseFloat(sizes[index]),
            quantity: parseFloat(quantities[index]),
            totalPrice: totalOrderPrice
        });
        console.log(orders);
        // Save orders to localStorage
        localStorage.setItem('orders', JSON.stringify(orders));

        // function to display the total price of the orders in the cart
        const totalPriceOfOrders = document.getElementById('total-price-of-orders');
        function getTotalPriceForAllOrders(orders) {
            let totalPrice = 0;
            orders.forEach(order => {
                totalPrice += order.totalPrice;
            });
        return totalPriceOfOrders.innerHTML = `
        Total Price: ₱${totalPrice.toFixed(2)}`;
        }
        getTotalPriceForAllOrders(orders)

        Swal.fire({
            icon: "success",
            title: "Added to cart",
            showConfirmButton: false,
            timer: 1000
          });
          
    } else {
        Swal.fire({
            title: "Maximum order reached!",
            text: "Please checkout your order(s) first before adding another product.",
            icon: "info"
        });
    }
};

// Open cart container
function openCartContainer() {
    if (!cartContainer.classList.contains('show-container')) {
        cartContainer.classList.add("show-container");
    }
};
// Close cart container
function closeCartContainer() {
    if (cartContainer.classList.contains('show-container')) {
        cartContainer.classList.remove("show-container");
    }
}
// Check if the cart order is in count of 10
function checkOrderCount() {
    var divCount = 0;
    for (var i = 0; i < cartOrderContainer.children.length; i++) {
        if (cartOrderContainer.children[i].tagName === 'DIV') {
            divCount++;
        }
    }
    if (divCount === 10) {
        return true;
    }
}

//checking of buttons
const addBtnCapuccinoVanilla = document.getElementById('add-btn-cappucino-vanilla');
const addBtnCappucinoCaramel = document.getElementById('add-btn-cappucino-caramel');
const addBtnCappucinoHazelnut = document.getElementById('add-btn-cappucino-hazelnut');
const addBtnLatteChoco = document.getElementById('add-btn-latte-choco');
const addBtnLatteCinnamon = document.getElementById('add-btn-latte-cinnamon');
const addBtnLattePumpkin = document.getElementById('add-btn-latte-pumpkin');
const addBtnFrappuccinoCafeMocha = document.getElementById('add-btn-frappuccino-cafe-mocha');
const addBtnFrappuccinoStrawberry = document.getElementById('add-btn-frappuccino-strawberry');
const addBtnFrappuccinoDarkChoco = document.getElementById('add-btn-frappuccino-dark-choco');
const addBtnMochaMarble = document.getElementById('add-btn-mocha-marble');
const addBtnMochaIced = document.getElementById('add-btn-mocha-iced');
const addBtnMochaWhite = document.getElementById('add-btn-mocha-white');
const addBtnAmericanoEspresso = document.getElementById('add-btn-americano-espresso');
const addBtnAmericanoFlatWhite = document.getElementById('add-btn-americano-flat-white');
const addBtnAmericanoMocha = document.getElementById('add-btn-americano-mocha');

function checkClickedButton(event) {
    const clickedButton = event.target.id;
    if (event.target && event.target.id && event.currentTarget && event.currentTarget.id) {
        switch(clickedButton) {
            case 'add-btn-cappucino-vanilla':
                addDiv(0)
                break;
            case 'add-btn-cappucino-caramel':
                addDiv(1)
                break;
            case 'add-btn-cappucino-hazelnut':
                addDiv(2)
                break;
            case 'add-btn-latte-choco':
                addDiv(3)
                break;
            case 'add-btn-latte-cinnamon':
                addDiv(4)
                break;
            case 'add-btn-latte-pumpkin':
                addDiv(5)
                break;
            case 'add-btn-frappuccino-cafe-mocha':
                addDiv(6)
                break;
            case 'add-btn-frappuccino-strawberry':
                addDiv(7)
                break;
            case 'add-btn-frappuccino-dark-choco':
                addDiv(8)
                break;
            case 'add-btn-mocha-marble':
                addDiv(9)
                break;
            case 'add-btn-mocha-iced':
                addDiv(10)
                break;
            case 'add-btn-mocha-white':
                addDiv(11)
                break;
            case 'add-btn-americano-espresso':
                addDiv(12)
                break;
            case 'add-btn-americano-flat-white':
                addDiv(13)
                break;
            case 'add-btn-americano-mocha':
                addDiv(14)
                break;
            default:
            alert("Failed to add order!");
                break;
        }
    } else {
        // Handle the case where event target doesn't have an ID
        console.error("Event target doesn't have an ID.");
    }
}

// Add click event listener to each button
addBtnCapuccinoVanilla.addEventListener('click', checkClickedButton);
addBtnCappucinoCaramel.addEventListener('click', checkClickedButton);
addBtnCappucinoHazelnut.addEventListener('click', checkClickedButton);
addBtnLatteChoco.addEventListener('click', checkClickedButton);
addBtnLatteCinnamon.addEventListener('click', checkClickedButton);
addBtnLattePumpkin.addEventListener('click', checkClickedButton);
addBtnFrappuccinoCafeMocha.addEventListener('click', checkClickedButton);
addBtnFrappuccinoStrawberry.addEventListener('click', checkClickedButton);
addBtnFrappuccinoDarkChoco.addEventListener('click', checkClickedButton);
addBtnMochaMarble.addEventListener('click', checkClickedButton);
addBtnMochaIced.addEventListener('click', checkClickedButton);
addBtnMochaWhite.addEventListener('click', checkClickedButton);
addBtnAmericanoEspresso.addEventListener('click', checkClickedButton);
addBtnAmericanoFlatWhite.addEventListener('click', checkClickedButton);
addBtnAmericanoMocha.addEventListener('click', checkClickedButton);

// 
const checkOutOrderBtn = document.getElementById('checkout-order');

// function for close cart button
document.getElementById('close-cart').addEventListener("click", function() {
    closeCartContainer();
});