const nav_offset_top = document.querySelector('header').offsetHeight + 50
const headerArea = document.querySelector('.header_area')
console.log('foi')
function navbarFixed(){
    if ( headerArea.length ){ 
        window.addEventListener('scroll', ()=>{
            const scroll = window.top.scrollY

            console.log('foi')

            if(scroll >= nav_offset_top){
                headerArea.classList.add = 'navbar_fixed'
            }else{
                headerArea.classList.remove = 'navbar_fixed'   
            }
        })
    };
};
navbarFixed();