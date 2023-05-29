const apiKey = "87c7a7a7c3354af9b522cd1241adf471"
const button = document.getElementById('button');
const audioElement = document.getElementById('audio');
// Disable/Enable Button
function toggleButton() {
  button.disabled = !button.disabled;
}
// passing joke to Voice API
function tellMe(joke){
    VoiceRSS.speech({
    key: apiKey,
    src: joke,
    hl: 'en-us',
    r: 0, 
    c: 'mp3',
    f: '44khz_16bit_stereo',
    ssml: false,
})
};
// get jock from api
async function jokFetch(){
let joke = "";

const apiUrl = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"

    try {
        reponse =await fetch(apiUrl)
        jokes = await reponse.json()
        if(jokes.setup){
            joke = `${jokes.setup} ... ${jokes.delivery}`
        }
        else{
            joke = jokes.joke
        }
        console.log(joke);
        tellMe(joke)
        toggleButton()
    } catch (error) {
        
    }
}
button.addEventListener("click",jokFetch)
button.addEventListener("click",function(){console.log("cliked")})

audioElement.addEventListener("ended",toggleButton)
