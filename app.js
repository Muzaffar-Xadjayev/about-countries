// Reja : 
// 1 : API dan malumotlarni olib kelish
// 2 : Ma'lumotlarni shablonga chiqarish
// 3 : Saralash qismini tayyorlash
// 4 : Tayyor shablonni GitHubga qoyish 
let countries = document.querySelector('.countries');
async function getCountry(){
    let url = await fetch('https://restcountries.com/v2/all');
    let res = await url.json()
    // console.log(res);
    res.forEach((element)=>{
        showCountry(element)
        // console.log(element);
    })
}
getCountry();
function showCountry(data){ 
    // console.log(data);
    let country = document.createElement('div');
    country.classList.add('country')
    // console.log(country);
    country.innerHTML = `<div class="country-img">
    <img src="${data.flags['png']}" alt="">
  </div>
  <div class="country-info">
    <h5 class="countryName">${data.name}</h5>
    <p class="regionName"><strong>Region: </strong>${data.region}</p>
    <p><strong>Population: </strong>${data.population}</p>
    <p><strong>Capital: </strong>${data.capital}</p>
    <p><strong>Borders: </strong>${data.borders}</p>
  </div>`
  countries.appendChild(country);
};
let dropDown = document.querySelector('.dropDown');
let drop = document.querySelector('.drop')
let regions = document.querySelectorAll('.region')
let regionName = document.getElementsByClassName('regionName')
regions.forEach((region)=>{
    region.addEventListener('click',(e)=>{
        // console.log(e.target.innerText);
        drop.classList.add('showDropDown')
        Array.from(regionName).filter((item)=>{
            // console.log(item.textContent);
            if(item.innerHTML.includes(region.innerHTML) || region.innerHTML=='All'){
                // console.log(item.parentElement);
                item.parentElement.parentElement.style.display='grid'
            }else{
                item.parentElement.parentElement.style.display='none'
            }
        })
    })
})
dropDown.addEventListener('click',()=>{
    drop.classList.toggle('showDropDown');
})



let moonIcon = document.querySelector('.moon');
let btn = document.querySelector('.toggle');
btn.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
    moonIcon.classList.toggle('fas')
})


let mainContainer = document.querySelector('.main');
let spinner = document.querySelector('.spinner');
setTimeout(()=>{
    mainContainer.style.display = 'grid'
    spinner.style.display = 'none'
},2000);


let formControl = document.querySelector('.form-control');
let search = document.querySelector('.search');
let countryName = document.getElementsByClassName('countryName')
search.addEventListener('input',(e)=>{
    // console.log(e.target.value);
    let inputValue = e.target.value.toLowerCase()
    Array.from(countryName).forEach((element)=>{
        if(element.innerHTML.toLowerCase().includes(inputValue)){
            element.parentElement.parentElement.style.display = 'grid'
        } else{
            element.parentElement.parentElement.style.display = 'none'
        }
    })
})
