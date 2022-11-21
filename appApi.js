// on page load  -  have static img and placeholder text with dropodwn menu above it
// addeventlistener to dropdown and update page according to user choice by replacing the static img and placeholder text with api data
// the fetch call will be exceuted within the addeventlistener 
// drop down nemu will have 5 character options with corressonding id value
// once user selects character - page updates with img, name, status, species and gender of chosen character

const ramApp = {};




const dropdown = document.querySelector('#character');

ramApp.getCharacter = (selection) => {

    const url = new URL('https://rickandmortyapi.com/api/character/1,2,3,4,5');
    
    

 dropdown.addEventListener('change', function() {

        fetch(url)
        .then( (res) => {
            return res.json();
        })
        .then ((data) =>{


            // save user selection to parameter 
            selection = data[this.value].name;

            //make vars for character data
            const characterImg = data[this.value].image;
            const characterName = data[this.value].name;
            const characterSpecies = data[this.value].species;
            const characterGender = data[this.value].gender;
            const characterCardEl = document.querySelector('#characterCard');
            const characterStatus = data[this.value].status
            const characterLocation = data[this.value].location.name

            //display character data
            characterCardEl.innerHTML = `<div class="imgContainer"> <!-- imgContainer -->
            <img src="${characterImg}" alt="${characterName}">
            </div> 
            <div class="characterInfo">
            <p class="name">${characterName}</p>
            <span id="icon" class="icon"></span><p class="status" id="status">${characterStatus}</p>
            <div class="inline">
            <p>${characterSpecies}</p>
            <p>${characterGender}</p>
            </div>
            <p>Last Known Location: ${characterLocation}</p>
            </div>`;

            
        })
    })
}


ramApp.getCharacter();


   



