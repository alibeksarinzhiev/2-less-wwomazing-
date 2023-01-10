
let url = "http://localhost:3000/clothes?"
let clothesList = document.querySelector('.cards')
let filterSelector = document.querySelector('.main-select-price')

let filterPrice = ''

const getClothes = ()=>{
    clothesList.innerHTML =''
    fetch(url + `${filterPrice.length ? '_sort=price&_order=' + filterPrice:''}`)
        .then((res)=>res.json())
        .then((res)=>res.forEach((el)=>{
    clothesList.innerHTML +=`
                        <div class="left-card">
                            <img src="${el.image}" alt="">
                            <p class="description">Название: ${el.title}</p>
                            <p class="price">Цена: ${el.price}</p>
                            <p class="brand">Брэнд: ${el.brand}</p>
                        </div>
                        
    `
        }))
}
filterSelector.addEventListener('change',(e)=>{

    filterPrice = e.target.value
    getClothes()

})
console.log(filterPrice)
getClothes()