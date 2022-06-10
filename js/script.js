const container = document.querySelector('.container');
const seat = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const price = document.getElementById('price');
const select = document.getElementById('movie')
const screen = document.querySelector('.screen');

getSavedData();
let ticketPrice = +movie.value;
//select movie eventListener
select.addEventListener('change', e =>{
    e.preventDefault();
    ticketPrice = +e.target.value;
    const movieIndex = e.target.selectedIndex;
    screenCoverChanger(movieIndex);
    setMovieData(movieIndex,ticketPrice);
    selectedSeatCounter();

})  
//seat eventListener
container.addEventListener('click', e=>{
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');
        selectedSeatCounter();
    }
});
// update seat count and price 
function selectedSeatCounter(){
    const selectedSeat = document.querySelectorAll('.row .seat.selected');
    const seatIndex = [...selectedSeat].map(function(item){
        return [...seat].indexOf(item);
    })
    localStorage.setItem('selectedSeats', JSON.stringify(seatIndex));
    const selectedSeatCounted = selectedSeat.length;
    count.innerText = selectedSeatCounted;
    price.innerText = selectedSeatCounted * ticketPrice;


}
// Set Data to localStorage
function setMovieData(movieIndex,ticketPrice){
    localStorage.setItem('movieIndex',movieIndex);
    localStorage.setItem('ticketPrice', ticketPrice);
}

// Get data from LocalStorage
function getSavedData(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if(selectedSeats !== null && selectedSeats.length > 0){
        seat.forEach((item,index)=>{
            if(selectedSeats.indexOf(index)>-1){
                item.classList.add('selected');
            }
        })
    }
    const selectedMovieIndex = localStorage.getItem('movieIndex');
    if(selectedMovieIndex !== null){
         select.selectedIndex = selectedMovieIndex;
    }
    const selectedMoviePrice = localStorage.getItem('ticketPrice');
    if (selectedMoviePrice !== null){
        price.value = selectedMoviePrice;
    }
}
function screenCoverChanger(item){
    switch(item){
        case 0:
            screen.className = 'screen midsommer';
            break;
        case 1:
            screen.className = 'screen visit';
            break;
        case 2:
            screen.className = 'screen joker';
            break;
        case 3:
            screen.className = 'screen lobster';
            break;    
        }
}
selectedSeatCounter();