
let productview = document.getElementById('productview');

let previewItemsData = [{
    id: "pre-1",
    datatarget: "p-1",
    img: "jpgs/pearlharbor.jpg",
    name: "Pearl Harbor",
    desc: "To visit Pearl Harbor and to describe all the locations: Pearl Harbor, USS Arizona Memorial, Battleship Missouri Mem., Submarine Mus.",
    gus: "57",
    max: 2

},{
    id: "pre-2",
    datatarget: "p-2",
    img: "jpgs/catamaran.jpg",
    name: "Catamaran Sunset Cruise",
    desc: "Boatride in Oahu",
    gus: "75",
    max: 2
},{
    id: "pre-3",
    datatarget: "p-3",
    img: "jpgs/market.jpg",
    name: "Kakaako Farmers Market",
    desc: "market shopping for local fruit/produce + souvinirs",
    gus: "20",
    max: 1
},{
    id: "pre-4",
    datatarget: "p-4",
    img: "jpgs/pearlharbor.jpg",
    name: "Bishop Museum",
    desc: "Hawaii State Museum of Natural and Cultural History ",
    gus: "27",
    max: 1
},{
    id: "pre-5",
    datatarget: "p-5",
    img: "jpgs/iolani.jpg",
    name: "Ionali Palace",
    desc: "was the home of Hawaii's last reigning monarchs..and the only official royal residence in the United States - from website",
    gus: "25",
    max: 2
},{
    id: "pre-6",
    datatarget: "p-6",
    img: "jpgs/surf.jpg",
    name: "Surf Lessons",
    desc: "2 hour surf lesson in Oahu",
    gus: "90",
    max: 2
}];


let generatePreview = () => {
    return (productview.innerHTML =  previewItemsData.map((y)=>{
        let { id, datatarget, img, name, desc, gus, max } = y;
        return `
       
        <div id=preview-id-${id} class="preview" data-target=${datatarget}>
            <i class="fas fa-times"></i>
            <img src=${img} alt="">
            <h3>${name}</h3>
            <p>${desc}</p>
        </div>

        `
    }).join(""));
   
};

generatePreview();

