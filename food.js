//Displaying Cart page
let cartPage = document.querySelector('.cartPage')
let cartIcon = document.querySelectorAll('.cartBtn');

cartIcon.forEach((button) => {
    button.addEventListener('click', ()=>{
        if(button.id === 'favorite'){
            favPage.classList.toggle('active')
        }
        else{
            cartPage.classList.toggle('active')
        }
    });
});
//STORING VARIOUS FOOD ITEMS AND DETAILS IN AN OBJECT
const foodCategory = {
    recommended: [{
        id: 1,
        name: 'Spaghetti and beef',
        img: 'pasta/1.jpeg', 
        price: '$18.25'
    },
    {
        id: 2,
        name: 'Egusi soup',
        img: 'African/egusi.jpg',
        price: '$17.45'
    },
    {
        id: 3,
        name: 'Akara',
        img: 'Snacks/9.jpeg', 
        price: '$8'    
    },
    {
        id: 4,
        name: 'Amala and Ewedu',
        img: 'African/9.jpeg',
        price: '$6.32'
    },
    {
        id: 5,
        name: 'Pancake and Berries',
        img: 'images/pancake.png', 
        price: '$12.11'
    },
    {
        id: 6,
        name: 'Jollof Rice',
        img: 'Pasta/4.jpeg', 
        price: '$15.43'
    },
    {
        id: 7,
        name: 'Potato and stew',
        img: 'foods/1.jpeg', 
        price: '$5.76'
    },
    {
        id: 8,
        name: 'Snakcs',
        img: 'Snacks/4.jpeg', 
        price: '$6.34'
    },
    {
        id: 9,
        name: 'Chocolate cake',
        img: 'Cakes/5.jpeg', 
        price: '$10.50'
    },
    {
        id: 10,
        name: 'Beans and plantain',
        img: 'African/11.jpeg', 
        price: '$9.99'
    },
    {
        id: 11,
        name: 'Burger',
        img: 'images/burger.png', 
        price: '$8.43'
    },
    {
        id: 12,
        name: 'Noodles',
        img: 'images/noodles.png', 
        price: '$100'
    }
    ],

    top: [
        {
            id: 13,
            name: 'Samousa',
            img: 'images/samousa.png', 
            price: '$31.5'
        },
        {
            id: 14,
            name: 'Ogbono soup',
            img: 'African/soup.jpg', 
            price: '$18.99'
        },
        {
            id: 15,
            name: 'Calamarata Pasta',
            img: 'Pasta/2.jpg', 
            price: '$20'
        },
        {
            id: 16,
            name: 'Yam and egg sauce',
            img: 'African/15.jpeg', 
            price: '$19.98'
        },
        {
            id: 17,
            name: 'Assorted Vegetable',
            img: 'African/1.jpeg', 
            price: '$17.74'
        },
        {
            id: 18,
            name: 'Fluffy cake',
            img: 'Cakes/8.jpeg', 
            price: '$23.10'
        },
        {
            id: 19,
            name: 'Lobster',
            img: 'foods/sea.jpg', 
            price: '$21.56'
        },
        {
            id: 20,
            name: 'Coffee and Cake',
            img: 'images/coffee.png', 
            price: '$5.56'
        },
        {
            id: 21,
            name: 'Biscuits',
            img: 'Snacks/2.jpeg', 
            price: '$7.89'
        }
    ],
    // OBJECTS STORING SNACKS ITEMS
    snacks: [
        {
            id: 22,
            name: 'Crunchy crackers',
            img: 'Snacks/1.jpeg', 
            price: '$12.56'
        },
        {
            id: 23,
            name: 'Fibre biscuits',
            img: 'Snacks/2.jpeg', 
            price: '$10.25'
        },
        {
            id: 24,
            name: 'Prawns',
            img: 'Snacks/3.jpeg', 
            price: '$13.56'
        },
        {
            id: 25,
            name: 'Sausages',
            img: 'Snacks/4.jpeg', 
            price: '$11.19'
        },
        {
            id: 26,
            name: 'Burgers',
            img: 'images/burger.png', 
            price: '$9.99'
        },
        {
            id: 27,
            name: 'Chinese sausage',
            img: 'Snacks/6.jpeg', 
            price: '$10.05'
        },
        {
            id: 28,
            name: 'Green tea with bean cake',
            img: 'Snacks/7.jpeg', 
            price: '$18.54'
        },
        {
            id: 29,
            name: 'Akara',
            img: 'Snacks/8.jpeg', 
            price: '$8'
        },
        {
            id: 30,
            name: 'Sliced bread with akara',
            img: 'Snacks/9.jpeg', 
            price: '$25.56'
        }
    ],

    // OBJECTS STORING PASTA ITEMS
    pasta: [
        {
            id: 31,
            name: 'Jollof spaghetti',
            img: 'Pasta/1.jpeg', 
            price: '$100'
        },
        {
            id: 32,
            name: 'Pasta Macaroni',
            img: 'Pasta/2.jpg', 
            price: '$100'
        },
        {
            id: 33,
            name: 'Italian Macaroni',
            img: 'Pasta/4.jpeg', 
            price: '$100'
        },
        {
            id: 34,
            name: 'Recipe Macaroni',
            img: 'Pasta/recipe.jpeg', 
            price: '$16.67'
        },
        {
            id: 35,
            name: 'Tomato basil pasta',
            img: 'Pasta/6.jpeg', 
            price: '$23.43'
        },
        {
            id: 36,
            name: 'Penne pasta',
            img: 'Pasta/Penn.jpeg', 
            price: '$25.76'
        },
        {
            id: 37,
            name: 'Spanish',
            img: 'Pasta/Spanish.jpeg', 
            price: '$100'
        },
        {
            id: 38,
            name: 'Elbow macaroni',
            img: 'Pasta/elbow.jpeg', 
            price: '$100'
        },
        {
            id: 39,
            name: 'Classic Macaroni salad',
            img: 'Pasta/salad.jpg', 
            price: '$100'
        },
    ],

    // OBJECTS STORING CAKE ITEMS
    cake: [
        {
            id: 40,
            name: 'Take a bite',
            img: 'Cakes/4.jpeg', 
            price: '$13.33'
        },
        {
            id: 41,
            name: 'Cakes',
            img: 'Cakes/9.jpeg', 
            price: '$10.49'
        },
        {
            id: 42,
            name: 'Fluffy',
            img: 'Cakes/2.jpeg', 
            price: '$8.77'
        },
        {
            id: 43,
            name: 'Choc Velvet',
            img: 'Cakes/5.jpeg', 
            price: '$17.66'
        },
        {
            id: 44,
            name: 'Half sliced',
            img: 'Cakes/3.jpeg', 
            price: '$16.3'
        },
        {
            id: 45,
            name: 'Yummy cake',
            img: 'Cakes/6.jpeg', 
            price: '$18.34'
        },
        {
            id: 46,
            name: 'Freshly Baked',
            img: 'Cakes/7.jpeg', 
            price: '$12.45'
        },
        {
            id: 47,
            name: 'Sweet Cake',
            img: 'Cakes/8.jpeg', 
            price: '$18.3'
        },
        {
            id: 48,
            name: 'Chocolate cake',
            img: 'Cakes/1.jpg', 
            price: '$15.55'
        }
    ],

    // OBJECT STORING AFRICAN FOOD ITEMS
    african: [
        {
            id: 49,
            name: 'Efo riro with assorted',
            img: 'African/1.jpeg', 
            price: '$31.56'
        },
        {
            id: 50,
            name: 'Semo and Efo',
            img: 'African/semo.jpg', 
            price: '$29.62'
        },
        {
            id: 51,
            name: 'Dodo and Veg stew',
            img: 'African/3.jpeg', 
            price: '$34.32'
        },
        {
            id: 52,
            name: 'Asaro well garnished',
            img: 'African/5.jpeg', 
            price: '$25.34'
        },
        {
            id: 53,
            name: 'Beans mixed with plantain',
            img: 'African/7.jpeg', 
            price: '$23.44'
        },
        {
            id: 54,
            name: 'Amala and gbegiri',
            img: 'African/8.jpeg', 
            price: '$32.34'
        },
        {
            id: 55,
            name: 'Agonyin and fried dodo',
            img: 'African/13.jpeg', 
            price: '$30.05'
        },
        {
            id: 56,
            name: 'Yam and fried egg',
            img: 'African/15.jpeg', 
            price: '$32.55'
        },
        {
            id: 57,
            name: 'Assorted and Veggie',
            img: 'African/10.jpeg', 
            price: '$23.56'
        }
    ]
}
let recommendItems = document.querySelector('.recommItem');
const showRecommend = () => {
    return recommendItems.innerHTML = foodCategory.recommended.map((item) =>
    { //Displaying items in the recommended section
        let{id, name,price,img} = item
        return `<div class="items">
            <div class="photo">
                <img src="${img}" alt="Stake">
            </div>
            <div class="detail">
                <div class="desc">
                    <strong class="name">${name}</strong>
                    <p class="price">${price}</p>
                </div>
                <div class="action">
                    <i class="fa-regular fa-heart" id="${id}" title="favorite"></i>
                    <button id="${id}">Add to Cart</button>
                </div>
            </div>
            <span class="notify"></span>
        </div>`
    }).join('');
}
showRecommend(); //calling the function to display items in the recommended section


let topRated = document.querySelector('.top');
let snackTab = document.querySelector('.snacks')
let cakeTab = document.querySelector('.cake')
let pastaTab = document.querySelector('.pasta')
let africanTab = document.querySelector('.african')

const showTopRated = () => {
    
    topRated.classList.add('active')
    return topRated.innerHTML = foodCategory.top.map((item) =>{
        let {id, name,price, img} = item
        return `<div class="tops" ${id}>
            <div class="photo">
                 <img src="${img}" alt="">
            </div>
            <div class="detail">
                <div class="desc">
                    <strong class="name">${name}</strong>
                    <p class="price">${price}</p>
                </div>
                <div class="action">
                    <i class="fa-regular fa-heart" id="${id}" title="favorite"></i>
                    <button id="${id}">Add to Cart</button>
                </div>
            </div>
            <div class="notify"></div>
        </div>`
    }).join('');
}
showTopRated(); //calling function to display items in the toprated category

const showSnack = () => {
    return snackTab.innerHTML = foodCategory.snacks.map((item) =>{
        let {id, name,price, img} = item
        return `<div class="tops" ${id}>
            <div class="photo">
                 <img src="${img}" alt="">
            </div>
                <div class="detail">
                    <div class="desc">
                        <strong class="name">${name}</strong>
                        <p class="price">${price}</p>
                    </div>
                    <div class="action">
                        <i class="fa-regular fa-heart" id="${id}" title="favorite"></i>
                        <button id="${id}">Add to Cart</button>
                    </div>
                </div>
                <span class="notify"></span>
        </div>`
    }).join('');
}
showSnack();

const showCake = () => {
    cakeTab.innerHTML = foodCategory.cake.map((item) =>{
        let {id, name,price, img} = item
        return `<div class="tops" ${id}>
            <div class="photo">
                 <img src="${img}" alt="Stake">
            </div>
            <div class="detail">
                <div class="desc">
                    <strong class="name">${name}</strong>
                    <p class="price">${price}</p>
                </div>
                <div class="action">
                    <i class="fa-regular fa-heart" id="${id}" title="favorite"></i>
                    <button id="${id}">Add to Cart</button>
                </div>
            </div>
            <span class="notify"></span>
        </div>`
    }).join('');
}
showCake();

const showPasta = () => {
    pastaTab.innerHTML = foodCategory.pasta.map((item) =>{
        let {id, name,price, img} = item
        return `<div class="tops" ${id}>
            <div class="photo">
                 <img src="${img}" alt="Stake">
            </div>
            <div class="detail">
                <div class="desc">
                    <strong class="name">${name}</strong>
                    <p class="price">${price}</p>
                </div>
                <div class="action">
                    <i class="fa-regular fa-heart" id="${id}" title="favorite"></i>
                    <button id="${id}">Add to Cart</button>
                </div>
            </div>
            <span class="notify"></span>
        </div>`
    }).join('');
}
showPasta();

const showAfrican = () => {
    africanTab.innerHTML = foodCategory.african.map((item) =>{
        let {id, name,price, img} = item
        return `<div class="tops" ${id}>
            <div class="photo">
                 <img src="${img}" alt="Stake">
            </div>
            <div class="detail">
                <div class="desc">
                    <strong class="name">${name}</strong>
                    <p class="price">${price}</p>
                </div>
                <div class="action">
                    <i class="fa-regular fa-heart" id="${id}" title="favorite"></i>
                    <button id="${id}">Add to Cart</button>
                </div>
            </div>
            <span class="notify"></span>
        </div>`
    }).join('');
}
showAfrican();

//CREATING FUNCTION TO ADD ITEMS TO CART PAGE
let addButton = document.querySelectorAll('.action button');
let cartNumber = document.querySelector('.cartNumber');

let basket = [];//CREATING A LOCAL STORAGE FOR EACH CART ITEM SELECTED

//DEFINING THE ADD AND REMOVE BUTTON FUNCTION
addButton.forEach((btn) => {
    btn.addEventListener('click', (el) =>{
        let btnSelected = el.target;
        let btnId = btnSelected.id

        let foodItem = btnSelected.parentElement.parentElement.parentElement;
        let foodName = foodItem.getElementsByClassName('name')[0].innerText;
        let foodPrice = foodItem.getElementsByClassName('price')[0].innerText;
        let foodImg = foodItem.getElementsByTagName('img')[0].src;
        let notify = foodItem.getElementsByClassName('notify')[0];
        cartNumber.classList.add('active')
        let search = basket.find((x) => x.id === btnSelected.id);
        //SEARCHING THROUGH BASKET ARRAY
        
        if(search === undefined){ //ADDING SELECTED ITEM TO BASKET IF NOT INITIALLY FOUND
            basket.push({
                id: btnSelected.id,
                fname: foodName,
                item: 1
            });
            document.querySelector('.cartHeader').innerHTML = 'Here are your cart items'
        }
        else{
            search.item += 0;
            notify.innerHTML= 'Item aready added to cart'
            setTimeout(() => {
                notify.innerHTML= ''
            }, 3000); 
            return;
        }
        cartNumber.innerHTML = basket.map((x) => x.item).reduce((x,y) => x+y, 0);//DISPLAY THE NUMBER OF ITEMS IN THE BASKET SELECTED ON THE CART ICON
        addItemToCart(foodName, foodPrice, foodImg, btnId);
    });
    
});
function addItemToCart(foodName, foodPrice, foodImg, btnId){
    let addBtnClicked = document.createElement('div');
    let shownItem = document.getElementsByClassName('cartItems')[0]
    
    let cartContent = `<div class="cartRows">
        <div class="description">
            <img src="${foodImg}" alt="">
            <p class="title">${foodName}</p>
        </div>
        <p class="price">${foodPrice}</p>
        <div class="action">
            <input class="quantity" type="number" value="1">
            <i class="fa fa-trash-can" id ="${btnId}"></i>
        </div>
    </div>`//NEW ITEM ADDED TO THE CART PAGE

    addBtnClicked.innerHTML = cartContent;
    shownItem.append(addBtnClicked);
    

    //DEFINING FUNCTION TO REMOVING ITEM FROM THE CART PAGE
    let removeBtn = document.querySelectorAll('.fa-trash-can');
    removeBtn.forEach((icon) => {//LOOPING THROUGH EACH REMOVE BUTTON 
        icon.addEventListener('click', (btn) =>{//EVENT LISTENER TO REMOVE ITEM FROM CART PAGE
            let iconSelected = btn.target;
            iconSelected.parentElement.parentElement.parentElement.remove();
            iconSelected = basket.find((x) => x.id === iconSelected.id)//MATCHING SELECTED/CLICKED ITEM AGAINST ITEMS IN THE BASKET ARRAY
            if(iconSelected === undefined){
                return;
            }
            else{
                let index = basket.indexOf(iconSelected)//FINDING INDEX OF SELECTED ITEM IN THE BASKET IF IT EXIST
                basket.splice(index, 1)
            }
            if(basket.length === 0){
                document.querySelector('.cartHeader').innerHTML = 'Your cart is empty'
            }
            cartNumber.innerHTML = basket.map((x) => x.item).reduce((x,y) => x+y, 0)
            updateCart();
        });
        
    });

    //UPDATING NUMBER OF ITEMS SELECTED
    let input = document.querySelectorAll('.quantity')
    const updateQuantity = () => {
        input.forEach((item) =>{
            item.addEventListener('input', (event)=> {
                let inputVal = event.target;
                if(isNaN(inputVal.value) || inputVal.value <= 0){
                    inputVal.value = 1
                }
                updateCart();
            })
        })   
    }
    //CLEARING OUT CART PAGE ONCE USER CLICKS ON CHECTOUT BUTTON
    let checkOutBtn = document.querySelector('.checkOutBtn');
    checkOutBtn.addEventListener('click', () => {
    if(basket.length === 0){
        return;
    }
    else{
            basket.splice(0, basket.length);
            checkOut();
            cartNumber.innerHTML = basket.map((x) => x.item).reduce((x,y) => x+y, 0);
            document.querySelector('.cartHeader').innerHTML = 'Add new Items?'
            document.querySelector('.response').innerHTML = 
            'Your items have been successfully ordered. <br> Thank You!'
            setTimeout(() => {
                document.querySelector('.response').innerHTML = ''
            }, 5000);
            cartNumber.classList.remove('active');
            updateCart();
        };
    });
    updateQuantity();
    updateCart();
}

const checkOut = () => {
    let cartItems = document.getElementsByClassName('cartItems')[0];
    while(cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild);
    }
}

//DEFINING A FUNCTION TO UPDATE PRICE AND QUANTITY OF ITEMS IN THE CARTPAGE
const updateCart = () => {
    let cartItem = document.getElementsByClassName('cartItems')[0];
    let cartRow = cartItem.getElementsByClassName('cartRows');
    let totalPrice = 0;
    let totalItem = 0;

    for(var i = 0; i < cartRow.length; i++){
        let cartRows = cartRow[i];
        let price = cartRows.getElementsByClassName('price')[0];
        let quantity = cartRows.getElementsByClassName('quantity')[0];
        

        let itemPrice = parseFloat(price.innerText.replace('$', ''))
        let itemQuantity = quantity.value;

        
        totalPrice += (itemPrice * itemQuantity);
        totalItem += parseInt(itemQuantity)
    }
    totalPrice = Math.round(totalPrice * 100) / 100
    document.querySelector('.totalPrice').innerText = '$'+ totalPrice
    document.querySelector('.totalItems').innerText = totalItem;

}
updateCart();

// SEE MORE FUNCTION
let counter = 8;
let seeMore = document.getElementById('seeMore');
seeMore.onclick = () => {
    let items = [...document.querySelectorAll('.items')];
    for(let i = counter; i < counter + 4; i++){
        items[i].style.display = 'block';
    }
    counter += 4
    if(counter >= items.length ){
        seeMore.style.display = 'none'
    }
}

//Defining function for showing active content in each category section
let tabLinks = document.querySelectorAll('.tabLink');
tabLinks.forEach((event) => {//looping through and calling a function on clicking each category name
    event.addEventListener('click', () =>{
            document.querySelector('.tabLink.active').classList.remove('active');
            event.classList.add('active')
        
    
            if(event.id === 'top') {
                topRated.classList.add('active');
                snackTab.classList.remove('active')
                cakeTab.classList.remove('active')
                pastaTab.classList.remove('active')
                africanTab.classList.remove('active')
                
            }
            else if(event.id === 'snack'){
                topRated.classList.remove('active');
                snackTab.classList.add('active')
                cakeTab.classList.remove('active')
                pastaTab.classList.remove('active')
                africanTab.classList.remove('active')
            }
            else if(event.id === 'pasta'){
                topRated.classList.remove('active');
                snackTab.classList.remove('active')
                cakeTab.classList.remove('active')
                pastaTab.classList.add('active')
                africanTab.classList.remove('active')
            }
            else if(event.id === 'cake'){
                topRated.classList.remove('active');
                snackTab.classList.remove('active')
                cakeTab.classList.add('active')
                pastaTab.classList.remove('active')
                africanTab.classList.remove('active')
            }
            else{
                topRated.classList.remove('active');
                snackTab.classList.remove('active')
                cakeTab.classList.remove('active')
                pastaTab.classList.remove('active')
                africanTab.classList.add('active')
            }
        })
});

