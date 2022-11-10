const ramApp = {};


ramApp.getCharacter = () => {

    const url = new URL('https://rickandmortyapi.com/api/character');
    
    fetch(url)
    .then( (res) => {
        console.log('yes')
    })
 
}


ramApp.init = () => {
    console.log('yea');
    ramApp.getCharacter()
}


ramApp.init()