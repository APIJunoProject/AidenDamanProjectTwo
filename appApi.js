// on page load  -  have static img and placeholder text with dropodwn menu above it
// addeventlistener to dropdown and update page according to user choice by replacing the static img and placeholder text with api data
// the fetch call will be exceuted within the addeventlistener 
// drop down nemu will have 5 character options with corressonding id value
// once user selects character - page updates with img, name, status, species and gender of chosen character

const ramApp = {};


ramApp.getCharacter = (selection) => {

    const url = new URL('https://rickandmortyapi.com/api/character');
    const dropdown = document.querySelector('#character');
    // const urlEp = new URL('https://rickandmortyapi.com/api/episode');

    // Search Params
    // url.search = new URLSearchParams ({
    //     id: 1
    // })

    // event listener on dropdown menu
    dropdown.addEventListener('change', function() {

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
            // Display selected name
            const characterName = data.results[this.value].name;
            const characterSpecies = data.results[this.value].species;
            const characterGender = data.results[this.value].gender;
            const firstEp = data.results[this.value].episode[0];
            const characterCardEl = document.querySelector('#characterCard');
            
            characterCardEl.innerHTML = `<div class="imgContainer"> <!-- imgContainer -->
            <img src="${characterImg}" alt="Rick">
        </div><!-- imgContainer END -->
        <div class="characterInfo">
            <p>${characterName}</p>
            <p>${characterSpecies}</p>
            <p>${characterGender}</p>
            <p>${firstEp}</p>
        </div><!-- END  character info -->`;
            
            // const characterSpeices = data.results[this.value].species;

        })

        
    })
}

ramApp.getCharacter();


ramApp.init = () => {

}
