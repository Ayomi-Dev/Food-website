//CHANGE HEADER BACKGROUND IMAGES
let animate = 1;
window.onload = () => {
    setInterval(() => {
        document.getElementById('radio' + animate).checked = true;
        animate++;
        if(animate > 3){
            animate = 1;
        }
    }, 5000);
    //SCROLLING PAGE BACK TO TOP FUNCTION
    window.addEventListener('scroll', () => {
    let scroll = document.querySelector('.scrollTop')
    scroll.classList.toggle('active', window.scrollY > 400);

    scroll.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
})
}



//ANIMATION SCROLL FOR EACH ELEMENTS
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 200

});
ScrollReveal().reveal('.intro-text, .sect1, .col1 img', { delay: 400, origin: 'left' });
ScrollReveal().reveal('.img img', { delay: 500, origin: 'right' });
ScrollReveal().reveal('.img .text, .col2 h2, .inner, .carousel, .segment .image', { delay: 600, origin: 'bottom' });
ScrollReveal().reveal('.recommend h2, .catMenu h2', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.items', { delay: 600, origin: 'left', interval: 200 });
ScrollReveal().reveal('.seeMore, .sect2 h1, .sect2 p', { delay: 600, origin: 'bottom' });
ScrollReveal().reveal('.tabs li', { delay: 500, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.segment .text', { delay: 500, origin: 'top'});





//DARKMODE BODY FUNCTION
let darkMode = document.querySelector('.fa-moon')
darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    let darkIcon = darkMode.innerHTML
    switch(darkIcon) {
        case '.':
            darkMode.innerHTML = ""
            darkMode.classList.remove('fa-moon')
            darkMode.classList.add('fa-sun')
            break;

        case "":
            darkMode.innerHTML = "."
            darkMode.classList.remove('fa-sun')
            darkMode.classList.add('fa-moon')
            break;
    }
})
//DISPLAY SEARCH BAR ON SMALLER SCREENS
const searchIcon = document.querySelector('.fa-search');
const searchBar = document.getElementById('searchBar');
const searchPage = document.querySelector('[data-search-page]')
searchIcon.onclick = () => {
    searchBar.classList.toggle('active');
    
}

//CAROUSEL BUTTON FUNCTION FOR USER REVIEW CARD
let buttons = document.querySelectorAll('.buttons .button');

buttons.forEach((button) => {
    button.addEventListener('click', () =>{
        let offset = button.dataset.carouselButton === "next" ? 1 : -1
        let carouselItems = button.closest('[data-carousel]').querySelector('[data-slides]');
        let activeSlide = carouselItems.querySelector("[data-active");
        let newIndex = [...carouselItems.children].indexOf(activeSlide) + offset;

        if(newIndex < 0) newIndex = carouselItems.children.length - 1;

        if(newIndex >= carouselItems.children.length) newIndex = 0;

        carouselItems.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    });
});


//CREATING SEARCH PAGE WITH ITS RESULTS ONCE A USER CLICKS ON AND INPUTS A VALUE IN THE SEARCHBAR
let searchInput = document.querySelector("[data-search]");
let food = [];
searchInput.addEventListener('input', (event)=> {
    let searchValue = event.target.value.toLowerCase();//TARGETING USER INPUT IN THE SEARCHBAR
    food.forEach((foodItem) => {
        const isVisible = foodItem.name.toLowerCase().includes(searchValue);//CHECKING IF THE SEARCHRESULTS  HAS THE VALUE INPUTED BY USER
        foodItem.element.classList.toggle('hide', !isVisible)
        searchPage.classList.toggle('active')
    });
});

let nwArray = [...foodCategory.recommended, ...foodCategory.snacks, ...foodCategory.cake,
    ...foodCategory.pasta, ...foodCategory.top, ...foodCategory.african]//MERGING PROPERTIES OF THE FOODCATEGORY OBJECT

food = nwArray.map((foods) =>{
    let {id, name, img} = foods
    let searchName = document.createElement('div')
    let searchResults= document.querySelector("[data-container]")
    const foodCard = `<div class="foodie">
        <a href="#${id}" class="result" data-name>
            <img src="${img}">
            <span>${name}</span>
        </a>
    </div>`
    searchName.innerHTML = foodCard
    searchResults.append(searchName)
    return {name: foods.name, element: searchName}
});


//FAVORITE BUTTON FUNCTION
const favBtn = document.querySelectorAll('.fa-heart')
favBtn.forEach((button) => {
    button.addEventListener('click', (btn) => {
        let btnClicked = btn.target
        let text = btnClicked.title;
        switch (text) {
            case 'favorite':
                btnClicked.setAttribute('title', '')
                btnClicked.style.color = '#139136';
                break;
        
            case '':
                btnClicked.setAttribute('title', 'favorite')
                btnClicked.style.color = '#131313';
                break;
        }
    })
})