const seats = document.getElementsByClassName('seat')
let count = 0;
let total = 0;

for(const seat of seats) {
   
    
        seat.addEventListener('click', function(e) {
           if(count < 4) {
            setBackgroundColorGreen(e.target.id);
            makeDisabledClassToElement(e.target.id);
    
            const currentSeatsCount = parseInt(getElementInnerTextById("seats-count"));
    
            const newSeatCount = currentSeatsCount - 1;
            updateElementInnerText('seats-count', newSeatCount);
            count++;
            total+=550;

            updateTable('tbody', e.target.id, 'Economy', 550);
            updateElementInnerText('total', total);


           }
           else {
            alert("you can't book more than 4 Seats");


           }

           
        })
   

}


