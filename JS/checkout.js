let shop = document.getElementById('shop');

let shopItemsData = [{
    id: "reg-1",
    dataname: "p-1",
    img: "jpgs/pearlharbor.jpg",
    name: "Pearl Harbor",
    value: 57,
    price: "$57.00",
    stock: "2/2 Needed"

},{
    id: "reg-2",
    dataname: "p-2",
    img: "jpgs/catamaran.jpg",
    name: "Catamaran Sunset Cruise",
    value: 75,
    price: "$75.00",
    stock: "2/2 Needed"
},{
    id: "reg-3",
    dataname: "p-3",
    img: "jpgs/market.jpg",
    name: "Kakaako Farmers Market",
    value: 20,
    price: "$20.00",
    stock: "1/1 Needed"
},{
    id: "reg-4",
    dataname: "p-4",
    img: "jpgs/pearlharbor.jpg",
    name: "Bishop Museum",
    value: 27,
    price: "$27.00",
    stock: "2/2 Needed"
},{
    id: "reg-5",
    dataname: "p-5",
    img: "jpgs/iolani.jpg",
    name: "Iolani Palace",
    value: 25,
    price: "$25.00",
    stock: "2/2 Needed"
},{
    id: "reg-6",
    dataname: "p-6",
    img: "jpgs/surf.jpg",
    name: "Surf Lesson",
    value: 90,
    price: "$90.00",
    stock: "2/2 Needed"
}]

let generateShop = () => {
    return (shop.innerHTML = shopItemsData.map((x)=>{
        let { id, dataname, img, name, value, price, stock } = x;
        return `
        <div id=product-id-${id} class="pcard" data-name=${dataname}>
            <div class="pimg">
                <img src=${img}>
            </div>
            <div class="pname">${name}</div>
            <div class="pnums">
                <div id="price" value="${value}" class="price">${price}</div>
                <div class="stock">${stock}</div>
                <div class="rgBtns">
                <a href="checkout.html" class="give">Give this gift</a>
                </div> 
            </div>
              
            
        </div>
        `
    }).join(""));
};

generateShop();