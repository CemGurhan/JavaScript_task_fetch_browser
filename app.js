console.log("HI!");



const input = document.querySelector("#country_form");
const filterInput = document.querySelector("#country-filter");

input.addEventListener("submit",(event)=>{
    event.preventDefault();

    getCountryByName(event.target["countryNameInput"].value);

});

filterInput.addEventListener("submit",(event)=>{
    event.preventDefault();

    filterAllCountryList(event.target["countryNameInputFilter"].value);
    

});



function getCountryByName(countryName){
    const fetchPromise = fetch(`https://restcountries.com/v2/name/${countryName}`);

    fetchPromise.then(response => response.json()).then(country => {
        const list = document.querySelector("ul");
        
        console.log(country);

        const newListItem = document.createElement("li");

        newListItem.innerText = [`Country name: ${country[0].name}`, ` Population: ${country[0].population}`];

        list.appendChild(newListItem);




    })
}


function getAllCountries(){
    const fetchPromise = fetch(`https://restcountries.com/v2/all`);

    fetchPromise.then(response => response.json()).then(countryAll => {


        const list = countryAll.map(country => `Country name: ${country.name}, Population: ${country.population} \n`);

        console.log(list);
        
        const unorderedList = document.querySelector("#AllCountriesUl")
        const newAllCountryList = document.createElement("li");
        newAllCountryList.innerText = list;
        unorderedList.appendChild(newAllCountryList);
        

    })
}

function filterAllCountryList(countryName){

    const fetchPromise = fetch(`https://restcountries.com/v2/all`);

    fetchPromise.then(response => response.json()).then(countryAll => {


        const unorderedList = document.querySelector("#AllCountriesUl");

        unorderedList.innerText = " ";
        unorderedList.innerText = countryAll.filter(country => country.name.toLowerCase().match(countryName)).map(country => `Country name: ${country.name}, Population: ${country.population} \n`);

        // const filteredResult = countryAll.filter(country => country.name.match(countryName));
        // const filteredLIst = filteredResult.map(country => `Country name: ${country.name}, Population: ${country.population} \n`);
        // const newAllCountryList = document.createElement("li");
        // newAllCountryList.innerText = filteredLIst;
        // unorderedList.appendChild(newAllCountryList);

        console.log(countryAll.filter(country => country.name.match(countryName)));

        
        





    })


   
    
    




}

