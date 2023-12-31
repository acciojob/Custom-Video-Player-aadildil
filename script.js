/* Edit this file */
const player = document.querySelector('.player');//container
const video = player.querySelector('.viewer');//video
const progress = player.querySelector('.progress');//progress div
const progressBar = player.querySelector('.progress__filled');//progress bar
const toggle = player.querySelector('.toggle');//play - pause
const skipButtons = player.querySelectorAll('[data-skip]');//skip
const ranges = player.querySelectorAll('.player__slider');//volume


const pauseIcon="pause_circle";



toggle.addEventListener("click",()=>{

    const toggleStatus=toggle.innerText;

    if(toggleStatus===pauseIcon){
        video.pause();
        toggle.innerText="►";
    }
    else
    {
        video.play();
        toggle.innerText=pauseIcon;
    }



})


ranges[0].addEventListener("input",()=>{
   video.volume=ranges[0].value;

})

ranges[1].addEventListener("input",()=>{
    video.playbackRate=ranges[1].value;
})


video.addEventListener("timeupdate",()=>{
    const current=video.currentTime;
    let timepercentage=current/(video.duration)*100;
    progressBar.style.flexBasis=`${timepercentage}%`;

    
})

skipButtons[0].addEventListener("click",()=>{
    video.currentTime=video.currentTime-10;
})

skipButtons[1].addEventListener("click",()=>{
    video.currentTime=video.currentTime+25;
})

video.addEventListener("ended",()=>{
    toggle.innerText="►";
})









