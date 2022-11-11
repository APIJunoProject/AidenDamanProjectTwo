
// on page load  -  have static img and placeholder text with dropodwn menu above it
// addeventlistener to dropdown and update page according to user choice by replacing the static img and placeholder text with api data
// the fetch call will be exceuted within the addeventlistener 
// drop down nemu will have 5 character options with corressonding id value
// once user selects character - page updates with img, name, status, species and gender of chosen character

const ramApp = {};


ramApp.getCharacter = () => {

    const url = new URL('https://rickandmortyapi.com/api/character');

    // Search Params
    url.search = new URLSearchParams ({
        id: 1
    })

    fetch(url)
    .then( (res) => {
        return res.json();
    })
    .then ((data) =>{
        console.log(data.results)
        document.querySelector('#characterCard')
        // .innerHTML = "";
    })

}
    // event listener on dropdown menu
    const character = document.querySelector('#character');
    character.addEventListener('change', function() {
        console.log(this.value)
    })





console.log('featuretest')

ramApp.init = () => {
    console.log('yea');
    ramApp.getCharacter()
}


ramApp.init()