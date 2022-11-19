// on page load  -  have static img and placeholder text with dropodwn menu above it
// addeventlistener to dropdown and update page according to user choice by replacing the static img and placeholder text with api data
// the fetch call will be exceuted within the addeventlistener 
// drop down nemu will have 5 character options with corressonding id value
// once user selects character - page updates with img, name, status, species and gender of chosen character

const ramApp = {};


ramApp.getCharacter = (selection) => {

    const url = new URL('https://rickandmortyapi.com/api/character/1,2,3,4,5,242');
    const dropdown = document.querySelector('#character');
    // const urlEp = new URL('https://rickandmortyapi.com/api/episode');

    // Search Params
    // url.search = new URLSearchParams ({
       
    // })

    // console.log(url.search)
    // event listener on dropdown menu
    dropdown.addEventListener('change', function() {

        fetch(url)
        .then( (res) => {
            return res.json();
        })
        .then ((data) =>{
            console.log(data);

            // save user selection to parameter 
            selection = data[this.value].name;
            console.log(selection);

            //display selected img
            const characterImg = data[this.value].image;
            // Display selected name
            const characterName = data[this.value].name;
            const characterSpecies = data[this.value].species;
            const characterGender = data[this.value].gender;
            const firstEp = data[this.value].episode[0];
            const characterCardEl = document.querySelector('#characterCard');
            const characterStatus = data[this.value].status
            const characterLocation = data[this.value].location.name

            characterCardEl.innerHTML = `<div class="imgContainer"> <!-- imgContainer -->
            <img src="${characterImg}" alt="Rick">
            </div> 
            <div class="characterInfo">
            <p class="name">${characterName}</p>
            <p class="status">${characterStatus}</p>
            <div class="inline">
            <p>${characterSpecies}</p>
            <p>${characterGender}</p>
            </div>
            <p>Last Seen: ${characterLocation}</p>
            </div>`;
            
            
            // const characterSpeices = data.results[this.value].species;

        })

        
    })
}
 

ramApp.getCharacter();


ramApp.init = () => {

}


