const container = document.querySelector('.container');
const seat = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const price = document.getElementById('price');
const select = document.getElementById('movie')
const screen = document.querySelector('.screen');
let ticketPrice = +movie.value;
//select movie eventListener
select.addEventListener('change', e =>{
    ticketPrice = +e.target.value;
    selectedSeatCounter();
    if(ticketPrice === 5){
        // screen.classList = 'screen midsummer';
        screen.className = 'screen midsommer';
        console.log(screen.className);
    }
    else if(ticketPrice === 8){
        screen.className = 'screen visit';
    }
    else if(ticketPrice === 10){
        screen.className = 'screen joker';
    }
    else if(ticketPrice === 15){
        screen.className = 'screen lobster';
    }
})  
//seat eventListener
container.addEventListener('click', e=>{
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');

        selectedSeatCounter();
    }
});
function selectedSeatCounter(){
    const selectedSeat = document.querySelectorAll('.row .seat.selected');
    const selectedSeatCounted = selectedSeat.length;
    count.innerText = selectedSeatCounted;
    price.innerText = selectedSeatCounted * ticketPrice;
}