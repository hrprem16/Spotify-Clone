console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Until I Found You - Em Beihold and Stephen Sanchez", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Restless Road - Musical Brnad", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Chan Kithan - Ayushmann Khurrana", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "My Only One(No Hay Nandi Mas)", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Maiyya Mainu - Jersey", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Nazm Nazm - Ayushmann Khurrana", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Otilia Bilionera", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Kahani - Laal Singh Chaddha", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "BTS - Megan thee stallion(remix)", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "O saajna - Akhil Sachdeva", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
    {songName: "Unstopabble - Sia ", filePath: "songs/11.mp3", coverPath: "covers/11.jpg"},
    {songName: "Luis Fonsi", filePath: "songs/12.mp3", coverPath: "covers/12.jpg"},
    {songName: "Jo Tainu Dhoop Lagya Ve", filePath: "songs/13.mp3", coverPath: "covers/13.jpg"},
    {songName: "Shape Of You - Ed Sheeran ", filePath: "songs/14.mp3", coverPath: "covers/14.jpg"},
    {songName: "Its Always With You ", filePath: "songs/15.mp3", coverPath: "covers/15.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
