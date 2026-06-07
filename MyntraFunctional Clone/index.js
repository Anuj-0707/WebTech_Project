let cartItems;

Onload();

function Onload(){
    let cartItemsStr = localStorage.getItem('cartItems');
    cartItems = cartItemsStr ? JSON.parse(cartItemsStr):[];
    displayItemOnHomePage();
    displayBagIcon();
}

function addToCart(prodId){
    cartItems.push(prodId);
    localStorage.setItem('cartItems',JSON.stringify(cartItems));
    displayBagIcon();
}

function displayBagIcon(){
    let elementcount = document.querySelector('.bag_item_count');
    if(cartItems.length>0){
        elementcount.style.visibility = 'visible';
        elementcount.innerText = cartItems.length;
    }
    else{
        elementcount.style.visibility = 'hidden';
    }
}

function displayItemOnHomePage(){
let itemsContainerElement = document.querySelector('.Item_container');
if(!itemsContainerElement){
    return;
}
const item = [
    {
        id:'001',
        item_image:'Clothes.png',
        rating:{
            stars:4.5,
            review:1400,
        },
        company_name:'CUCKOO',
        item_name:'Minimalist Casual Denim & Tee Set',
        current_price:1200,
        original_price:2000,
        discount:40,
    },
    {
        id:'002',
        item_image:'Clothes (2).png',
        rating:{
            stars:4.7,
            review:1330,
        },
        company_name:'ZYRA',
        item_name:'Heritage Hat & Blazer Set',
        current_price:2599,
        original_price:3999,
        discount:35,
    },
    {
        id:'003',
        item_image:'Clothes (3).png',
        rating:{
            stars:3.5,
            review:1620,
        },
        company_name:'  VELORA',
        item_name:'Velora SunDrape Top Set',
        current_price:1799,
        original_price:2999,
        discount:40,
    },
    {
        id:'004',
        item_image:'Clothes (4).png',
        rating:{
            stars:3.8,
            review:1540,
        },
        company_name:'VEYRA',
        item_name:'Veyra Executive Belted Dress',
        current_price:2399,
        original_price:3999,
        discount:40,
    },
    {
        id: '005',
        item_image: 'Jwellery.png',
        rating: {
            stars: 4.8,
            review: 1850,
        },
        company_name: 'AURAYA',
        item_name: 'Maharani Heritage Pearl Chandbali Earrings',
        current_price: 1499,
        original_price: 2999,
        discount: 50,
    },
    {
        id: '006',
        item_image: 'Jwellery (2).png',
        rating: {
            stars: 4.9,
            review: 2230,
        },
        company_name: 'AURAYA',
        item_name: 'Maharani Heritage Jhumka Earrings',
        current_price: 1999,
        original_price: 3999,
        discount: 50,
    },
    {
        id: '007',
        item_image: 'Jwellery (3).png',
        rating: {
            stars: 4.8,
            review: 1945,
        },
        company_name: 'VARNIKA',
        item_name: 'Ruby Pearl Luxe Jhumka Earrings',
        current_price: 2499,
        original_price: 4999,
        discount: 50,
        return_period: 14,
        delivery_date: '13 Jun 2026',
    },
    {
        id: '008',
        item_image: 'Jwellery (4).png',
        rating: {
            stars: 4.9,
            review: 2450,
        },
        company_name: 'AURAYA',
        item_name: 'Maharani Heritage Floral Bracelet',
        current_price: 2799,
        original_price: 5599,
        discount: 50,
        return_period: 14,
        delivery_date: '14 Jun 2026',
    },
    {
        id: '009',
        item_image: 'Jwellery (5).png',
        rating: {
            stars: 4.9,
            review: 2860,
        },
        company_name: 'SWARNIKA',
        item_name: 'Royal Floral Heritage Choker',
        current_price: 3499,
        original_price: 6999,
        discount: 50,
        return_period: 14,
        delivery_date: '15 Jun 2026',
    }
]
let innerHtml = '';
item.forEach(prod => {
    innerHtml+=`
            <div class="c1">
                <img class="WFitem1" src="${prod.item_image}" alt="Clothe1">
                <div class="rating">
                    ${prod.rating.stars} ⭐ | ${prod.rating.review}

                </div>
                <div class="company_name">${prod.company_name}</div>
                <div class="item_name">${prod.item_name}</div>
                <div class="price">
                    <span class="curr_price">₹${prod.current_price}</span>
                    <span class="Original_price">₹${prod.original_price}</span>
                    <span class="discount">(${prod.discount}% OFF)</span>
                </div>
                <button class="btn_add_bag" onclick="addToCart(${prod.id})" >Add to bag</button>
            </div>`;
});
itemsContainerElement.innerHTML = innerHtml;
}