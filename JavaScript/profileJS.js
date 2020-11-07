//THE PROFILE SCRIPTINGS HERE

var profileTrigger=0;
var sideProfileSelect=document.getElementById('sideProfile');
var profilebtnSelect=document.getElementById('profilebtn');
var proStyleSelect=document.getElementById('proArrowStyle');

function hideShowSide(){
    switch(profileTrigger){
        case 0:
            sideProfileSelect.style.width='240px';
            sideProfileSelect.style.padding='20px'; profilebtnSelect.style.backgroundColor="#00bbff";
            profilebtnSelect.style.color='#fff';
            proStyleSelect.innerHTML='#sideProfile::before{content: "";border: 10px solid;border-color: transparent transparent transparent #00bbff;font-size: 0;position: fixed;top: 36px;left: 78px;transform: scaleY(4.6) scaleX(2.5);display:block}';
            document.getElementById('borFade').style.display='block';
            profileTrigger=1;
            break;
        case 1:
            sideProfileSelect.style.width='0';
            sideProfileSelect.style.padding='20px 0';
            profilebtnSelect.style.backgroundColor="#c600b3";
            proStyleSelect.innerHTML='#sideProfile::before{display:none}';
            document.getElementById('borFade').style.display='none';
            profileTrigger=0;
            break;
    }
}
// OVERLAY SCRIPTINGS HERE
var ovClose=document.getElementById('overlayClose');
var ovOpen=document.getElementById('overlayOpen');
var ovCont=document.getElementById('overlayCont');
var ovBack=document.getElementById('overlayBack');
var body=document.getElementsByTagName('body')[0];

function ovHide(){
    ovCont.style.display="none";
    ovBack.style.height="0";
    ovClose.style.display="none";
    body.style.overflow="auto";
    ovOpen.style.display="block";
}
function ovShow(){
    ovCont.style.display="block";
    ovBack.style.height="100%";
    ovClose.style.display="block";
    body.style.overflow="hidden";
    ovOpen.style.display="none";
}

ovClose.onclick=ovHide;
ovOpen.onclick=ovShow;
ovBack.onclick=ovHide;