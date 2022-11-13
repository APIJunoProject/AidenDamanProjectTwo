// on page load  -  have static img and placeholder text with dropodwn menu above it
// addeventlistener to dropdown and update page according to user choice by replacing the static img and placeholder text with api data
// the fetch call will be exceuted within the addeventlistener 
// drop down nemu will have 5 character options with corressonding id value
// once user selects character - page updates with img, name, status, species and gender of chosen character

const ramApp = {};


ramApp.getCharacter = (selection) => {

    const url = new URL('https://rickandmortyapi.com/api/character');

    // Search Params
    url.search = new URLSearchParams ({
        id: 1
    })

    const character = document.querySelector('#character');
    
    // event listener on dropdown menu
    character.addEventListener('change', function() {

        fetch(url)
        .then( (res) => {
            return res.json();
        })
        .then ((data) =>{
            console.log(data.results);

            // save user selection to parameter 
             selection = data.results[this.value].name;
            console.log(selection);

            //display selected img
            const characterImg = data.results[this.value].image;
            const characterCardEl = document.querySelector('#characterCard');
            
            characterCardEl.innerHTML = `<div class="imgContainer"> 
            <img src="${characterImg}" alt="Rick">
            </div>`;
            
            // const characterSpeices = data.results[this.value].species;

        })

        
    })
}

ramApp.getCharacter();


ramApp.init = () => {

}