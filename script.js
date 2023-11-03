const sounds=[ 'beast-sound', 'chicken-sounds','donkey-sound','dragon-sound','pig-sound','river-sound'];


sounds.forEach(sound=>{
    const button=document.createElement('button');
    button.classList.add('btn');
    button.innerText=sound;
    
    document.getElementById('buttons').appendChild(button)

    button.addEventListener('click',()=>{
        stopSound();
        document.getElementById(sound).play();
    })

})

function stopSound(){
    sounds.forEach(sound=>{
        const song=document.getElementById(sound)
        song.pause()
        song.currentTime=0
    })
}





















