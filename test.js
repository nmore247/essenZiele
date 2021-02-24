//restaurant list
const results = [
    {
        name: 'Perle',
        distance: "*",
        price: "*",
        veggie: "***",
        address: "Spitalerstraße 22, 20095 Hamburg",
        category: "Alles"
    },
    {
        name: 'Europapassage',
        distance: "*",
        price: "**",
        veggie: "***",
        address: "Ballindamm 40 EG2, 20095 Hamburg",
        category: "Alles"
    },
    {
        name: 'Max & Consorten',
        distance: "***",
        price: "*",
        veggie: "**",
        address: "Spadenteich 1, 20099 Hamburg",
        category: "Hausmannkost"
    },
    {
        name: "Luigis",
        distance: "***",
        price: "**",
        veggie: "***",
        address: "Ditmar-Koel-Straße 21, 20459 Hamburg",
        category: "Pizza/Pasta"
    },
    {
        name: "Bella Italia",
        distance: "**",
        price: "*",
        veggie: "**",
        address: "Brandstwiete 58, 20457 Hamburg",
        category: "Pizza/Pasta"
    },
    {
        name: "Restaurant Kabul",
        distance: "***",
        price: "*",
        veggie: "**",
        address: "Steindamm 53, 20099 Hamburg",
        category: "Sonstiges"
    },
    {
        name: "Goot",
        distance: "**",
        price: "***",
        veggie: "*",
        address: "Depenau 10, 20095 Hamburg",
        category: "Hausmannkost"
    },
    {
        name: "Oren Ishii",
        distance: "**",
        price: "***",
        veggie: "***",
        address: "Kleine Reichenstraße 18, 20457 Hamburg",
        category: "Asiatisch"
    },
    {
        name: "Better Burger Company",
        distance: "*",
        price: "**",
        veggie: "***",
        address: "Rosenstraße Ecke, Gertrudenkirchhof, 20095 Hamburg",
        category: "Burger"
    },
    {
        name: "Bucks Burger",
        distance: "**",
        price: "**",
        veggie: "***",
        address: "Kurze Mühren 13, 20095 Hamburg",
        category: "Burger"
    },
    {
        name: "Mr.Cheng",
        distance: "**",
        price: "***",
        veggie: "***",
        address: "Speersort 1, 20095 Hamburg",
        category: "Asiatisch"
    },
    {
        name: "Franko Rathaupassage",
        distance: "**",
        price: "**",
        veggie: "***",
        address: "Rathausmarkt 7, 20095 Hamburg",
        category: "Pizza/Pasta"
    },
];


const resultSection = document.querySelector('.results-section');

const filterBtns = document.querySelectorAll('.categories')


//load all results
window.addEventListener('DOMContentLoaded', function(){
displayAllResults(results);
});

//filter results
filterBtns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const category = e.currentTarget.dataset.id;
        const resultCategory = results.filter(function(resultItem){
           // console.log(resultItem.category);
           if(resultItem.category === category){
            return resultItem;
           }
        });
       //console.log(resultCategory);
       if (category === "Alles"){
           displayAllResults(results)
       }else {
           displayAllResults(resultCategory);
       }
    });
});




function displayAllResults(resultItems){
    let displayResults = resultItems.map(function(item){
        //console.log(item);
        return `    <div class="result-item">
        <div class="name">
            <ul>
                <li>
                    <p>${item.name}</p>
                </li>
            </ul>
        </div>
         <i class="fas fa-euro-sign">${item.price}</i>
         <i class="fas fa-car">${item.distance}</i>
         <i class="fas fa-leaf">${item.veggie}</i>
     </div>`;
    });
    displayResults = displayResults.join("");
   // console.log(displayResults);
    resultSection.innerHTML = displayResults;
}










