document.addEventListener("DOMContentLoaded", ()=>{
    for (let i=0; i <= 6; i++){
        document.getElementById('mix' + i).addEventListener('click', ()=>{
            ShowOrHideMix('mix' + i);
        });
    }
});
const ShowOrHideMix=(mixid)=>{
    let mixes=document.querySelectorAll('.mix');
    let selectedMix=document.getElementById(mixid);
    if(mixid != 'mix0'){
    mixes.forEach(mix => {
        if(!mix.classList.contains('hideMix')){
            mix.classList.add('hideMix');
        };
    });
    let filter=selectedMix.dataset.filter;
    let displaymix=document.querySelectorAll(filter);
    displaymix.forEach(dm=>{
        dm.classList.remove('hideMix');
    });
    }
    else{
        mixes.forEach(mix => {
        if(mix.classList.contains('hideMix')){
            mix.classList.toggle('hideMix');
        };
    });
    }
};