const product = [
    {
        id: 0,
        image: 'images/airpod.webp',
        title: 'Blitzwolf Airpods',
        price: 120,
    },
    {
        id: 1,
        image: 'images/camera.webp',
        title: 'Sony Digital Camera',
        price: 920,
    },
    {
        id: 2,
        image: 'images/headset.webp',
        title: 'Blitzwolf Headset',
        price: 200,
    },
    {
        id: 3,
        image: 'images/ear-buds.webp',
        title: 'Blitzwolf Ear Buds',
        price: 110,
    },
    {
        id: 4,
        image: 'images/power-bank-1.webp',
        title: 'Romoss 20000MAH Power Bank',
        price: 250,
    },
    {
        id: 5,
        image: 'images/power-bank-2.webp',
        title: 'Awei 50000MAH Power Bank',
        price: 350,
    },
    {
        id: 6,
        image: 'images/samsung-fold.jpeg',
        title: 'Samsung Galaxy Fold',
        price: 750,
    },
    {
        id: 7,
        image: 'images/watch.jpeg',
        title: 'iPhone Watch X12',
        price: 290,
    },
    {
        id: 0,
        image: 'images/samsung.jpeg',
        title: 'Samsung Galaxy S25',
        price: 800,
    },
];

const categories = [...new Set(product.map((item) => {return item}))]
    let i = 0;

document.getElementById('root').innerHTML = categories.map((item) => {
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart()
}
function displaycart(a){
    let j = 0;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
    }else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>{
            var {image, title, price} = items;
            return (
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}