const dropDown = document.querySelectorAll(".dropdown");
let stickyElem = document.querySelector('.header__sticky');


window.addEventListener('scroll', ()=>{
  let headerHeight = document.querySelector('header').offsetHeight - stickyElem.offsetHeight;
  if(window.scrollY > headerHeight) stickyElem.classList.add('sticky');
  else stickyElem.classList.remove('sticky');
})


dropDown.forEach((item) => {
  item.onclick = (e) => {
    let elem = e.target.parentNode;
    
    if(elem.classList.contains('active')) {
        elem.classList.remove('active');
    }
    else showDropDown(elem);

  };
});


function showDropDown(elem) {
  closeAllDropDown();
  if(elem.classList.contains('dropdown')) elem.classList.add("active");
}


function closeAllDropDown() {
    
  dropDown.forEach((item) => item.classList.remove("active"));
}


document.addEventListener('click', (e) => {
    if(!e.target.closest('.dropdown')) closeAllDropDown(); 
})

function optionSelect(elem){
    console.log(elem);
}


