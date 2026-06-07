/*making bag item container dynamic*/
let cartItemObjects;
const convinience_fee=99;
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
        return_period: 14,
        delivery_date: '10 Oct 2026',
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
        return_period: 14,
        delivery_date: '10 Oct 2026',
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
        return_period: 14,
        delivery_date: '10 Oct 2026',
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
        return_period: 14,
        delivery_date: '10 Oct 2026',
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
        return_period: 14,
        delivery_date: '12 Jun 2026',
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
        return_period: 14,
        delivery_date: '12 Jun 2026',
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

onLoad();


function onLoad(){
    loadCartItemObject();
    displayCartItems();
    displayTotalPrice();
}

function loadCartItemObject(){
    console.log(cartItems);
    cartItemObjects = cartItems.map(itemId =>{
        for(let i=0;i<item.length;i++){
            if(itemId==item[i].id){
                return item[i];
            }
        }
    });
    console.log(cartItemObjects);
}

function removeitem_from_cart(id){
    cartItems = cartItems.filter(cartItemId => cartItemId != id);
    localStorage.setItem('cartItems',JSON.stringify(cartItems));
    loadCartItemObject();
    displayCartItems();
    displayTotalPrice();
    displayBagIcon();
}

function displayCartItems(){
    
    let containerElement = document.querySelector('.bag-items-container');
    let innerHtml = '';
    cartItemObjects.forEach(ele => {
        innerHtml+=`<div class="bag-item-container">
                    <div class="item-left-part">
                      <img class="bag-item-img" src="${ele.item_image}" alt="Item image">
                    </div>
                    <div class="item-right-part">
                        <div class="company">${ele.company_name}</div>
                        <div class="item-name">${ele.item_name}</div>
                        <div class="price-container">
                            <span class="current-price">₹ ${ele.current_price}</span>
                            <span class="original-price">₹ ${ele.original_price}</span>
                            <span class="discount-percentage">(${ele.discount}% OFF)</span>
                        </div>
                        <div class="return-period">
                            <span class="return-period-days">${ele.return_period}</span>days return available
                        </div>
                        <div class="delivery-details">
                            Delivery by
                            <span class="delivery-details-days">${ele.delivery_date}</span>
                        </div>
                    </div>
                    <div class="remove-from-cart" onclick="removeitem_from_cart(${ele.id})">X</div>
                </div>`;
    });
    containerElement.innerHTML = innerHtml;
}

function displayTotalPrice(){
    let containerElement = document.querySelector('.bag-summary');
    let total_amt=0;
    let total_discount=0;
    let total_payable=0;
    let innerHtml = '';
    cartItemObjects.forEach(ele=>{
        total_amt+=ele.original_price;
        total_discount+=ele.original_price-ele.current_price;
    });
    total_payable=total_amt-total_discount+99;
    innerHtml+=`<div class="bag-details-container">
                    <div class="price-header">PRICE DETAILS ( ${cartItemObjects.length} items) </div>
                    <div class="price-item">
                        <span class="price-item-tag">Total MRP</span>
                        <span class="price-item-value">₹${total_amt}</span>
                    </div>
                    <div class="price-item">
                        <span class="price-item-tag">Discount on MRP</span>
                        <span class="price-item-value priceDetail-base-discount">₹ -${total_discount}</span>
                    </div>
                    <div class="price-item">
                        <span class="price-item-tag">Convenience Fee</span>
                        <span class="price-item-value">₹ 99</span>
                    </div>
                    <hr>
                    <div class="price-footer">
                        <span class="price-item-tag">Total Amount</span>
                        <span class="price-item-value">₹ ${total_payable}</span>
                    </div>
                    <hr>
                </div>
                <button class="btn-place-order">
                <div class="css-xjhrni">PLACE ORDER</div>
                </button>`;
    containerElement.innerHTML = innerHtml;
}
