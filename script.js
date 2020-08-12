let tabButtons = document.getElementsByClassName('tabButton');
let tabSections = document.getElementsByClassName('tabInfo');
let imageSources=['resources/archery1.jpg','resources/archery2.jpg','resources/archery3.jpg','resources/archery4.jpeg','resources/archery5.jpg','resources/archery6.jpeg'];
let index=0;

function hideTabsExceptFirst(){

    Array.from(tabSections).forEach(function(tabInfo){
        if(tabSections[0]===tabInfo){
            tabInfo.style.display="block";
        }else {
            tabInfo.style.display = "none";
        }
    });
}
function tabsUsage(){
    hideTabsExceptFirst()
    Array.from(tabButtons).forEach(function(tabBtn,index){

        tabBtn.addEventListener('click', function(){

            Array.from(tabButtons).forEach(function(tabBtn){
                if(tabBtn.classList.contains('active')){
                    tabBtn.classList.remove('active')
                }
            })
            tabBtn.classList.add("active");
            Array.from(tabSections).forEach(function(tabInfo){
                if(  tabSections[index]!==tabInfo){
                    tabInfo.style.display="none";
                }else {
                    tabSections[index].style.display='block';
                }

            });
        })
    });
}
function formHandling(){
    document.getElementById('submit').addEventListener('click', function (event) {
        event.preventDefault();
        let formHandeling = document.getElementById('formHandeling')
        if (checkIfEmpty('name') && checkIfEmpty('email') && checkIfEmpty('message')) {
            console.log('not empty')
            formHandeling.innerHTML = "Form is been sent"
        } else {
            formHandeling.innerHTML = 'You need to fill in all fields'
        }

    })

}
function countUp(maxNum, id, timeInterval) {
    let display = 0
    let interval = setInterval(function counting() {
        display += 1;
        document.getElementById(id).innerHTML = display

        if (display === maxNum
        ) {
            clearInterval(interval);
        }
    }, timeInterval);


}
function checkIfEmpty(id) {
    if (document.getElementById(id).value == "") {
        return false;
    }
    return true;
}
function slideShow(){

    document.getElementById('next').addEventListener('click', function() {
        slideShowNext();
    });
    document.getElementById('previous').addEventListener('click', function() {
        slideShowPrevious();
    });
    setInterval(function (){slideShowNext(imageSources)}, 3000);

}
function slideShowNext() {

    if(index === imageSources.length) {
        index = 0;
    }
    document.getElementById('slideImg').src = imageSources[index];
    index++;

}
function slideShowPrevious() {
    if(index === 0) {
        index = imageSources.length;
    }
    document.getElementById('slideImg').src = imageSources[index];
    index--;

}



countUp(400, 'nbParticipants', 200);
countUp(200, 'vendors', 300);
countUp(300, 'professionals', 100);
tabsUsage();
formHandling();
slideShow();









