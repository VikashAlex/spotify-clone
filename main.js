// import './style.cs   s'

console.log("Wel Come Spotify");



let songIndex =0;
let AudioElement = new Audio(`songs/audio1.mp3`);
let masterPlay = document.getElementById("MasterPlay");
let masterSongName = document.getElementById("masterSongName");
let myProgressBar = document.querySelector(".myProgressBar");
let Gif = document.querySelector(".playingGif");
let songItem = Array (document.querySelector(".songItem"));
let songsPlayItem = Array.from(document.querySelectorAll(".songsPlayItem"));


let songs = [
    {songName:"Gallan Do", filePath:"songs/audio1.mp3", coverPath:"/public/images/gallan1.jpeg"},
    {songName:"Phir Bhi Tumko", filePath:"songs/audio2.mp3", coverPath:"/public/images/phirbhi.jpeg"},
    {songName:"Pehli Baarish", filePath:"songs/audio3.mp3", coverPath:"/public/images/pehli.webp"},
    {songName:"Salamat", filePath:"songs/audio4.mp3", coverPath:"/public/images/salamat.jpeg"},
    {songName:"Tum Hi Ho", filePath:"songs/audio5.mp3", coverPath:"/public/images/song1.jpeg"},
    {songName:"Galliyan", filePath:"songs/audio6.mp3", coverPath:"/public/images/Galliya.jpeg"},
];

songItem.forEach((element,i)=>{
element.getElementsByTagName("img")[0].src=songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerHTML=songs[i].songName;
})




const masterPlayBtn = ()=>{
    if (AudioElement.paused || AudioElement.currentTime<=0) {
        AudioElement.play();
        
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        
        Gif.style.opacity=1;

    }
    else{
        AudioElement.pause();
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");
        Gif.style.opacity=0;
        songsPlayItem.forEach((element)=>{
            

            element.classList.remove("fa-pause")
            element.classList.add("fa-play")
        })
        // songsPlayItem.classList
        // songsPlayItem.classList
    }
}

masterPlay.addEventListener("click",()=>{
    masterPlayBtn()
})

AudioElement.addEventListener("timeupdate",()=>{
   let progress = parseInt((AudioElement.currentTime/AudioElement.duration)* 100);
   myProgressBar.value = progress;
})

myProgressBar.addEventListener("change",()=>{
    AudioElement.currentTime= AudioElement.duration*myProgressBar.value /100;
})

const makeAllPlay = () =>{
   Array.from(document.getElementsByClassName("songsPlayItem")).forEach((element)=>{
     
      
       element.classList.remove("fa-pause");
        element.classList.add("fa-play");
        })
    
};

Array.from(document.getElementsByClassName("songsPlayItem")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        
        makeAllPlay();
        
        if (AudioElement.paused || AudioElement.currentTime<=0){
            
    e.target.classList.remove("fa-play");
    e.target.classList.add("fa-pause");
   songIndex = parseInt(e.target.id)
   
   AudioElement.src = `songs/audio${songIndex+1}.mp3`;
    masterSongName.innerHTML=songs[songIndex].songName;
    AudioElement.currentTime=0;
    AudioElement.play();
    
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    
    Gif.style.opacity=1;
    }
    else{
       
        AudioElement.pause();
        Gif.style.opacity=0;
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");
    }

})
})

document.querySelector(".fa-forward").addEventListener("click",()=>{
    if (songIndex>=5) {
        songIndex =0;
        
    }
    else{
        songIndex++;
    }
    

    AudioElement.src = `songs/audio${songIndex+1}.mp3`;
    masterSongName.innerHTML=songs[songIndex].songName;
    AudioElement.currentTime=0;
    AudioElement.play();
    Gif.style.opacity=1;
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    
})

document.querySelector(".fa-backward").addEventListener("click",()=>{
    if (songIndex<=0) {
        songIndex =5;
        
    }
    else{
        songIndex--;
    }

    AudioElement.src = `songs/audio${songIndex+1}.mp3`;
    masterSongName.innerHTML=songs[songIndex].songName;
    AudioElement.currentTime=0;
    AudioElement.play();
    Gif.style.opacity=1;
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
})