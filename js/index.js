

 function getPhoneNumberInputValue() {
  phoneNumber = document.getElementById("phone").value;
  const seatCountValue = parseInt(getElementInnerTextById('seat-count-th'));
  // console.log(phoneNumber.length);
  if(phoneNumber && seatCountValue) {
    
    
    removeAttributeFromElement('next-btn');

    

    
  }
}

const seats = document.getElementsByClassName("seat");
var count = 0;
let total = 0;
let grandTotal = 0;
var storedInputValue;
var seatCount = 0;

for (const seat of seats) {
  
  seat.addEventListener("click", function (e) {
   
    

    if (count < 4) {
      setBackgroundColorGreen(e.target.id);
      makeDisabledClassToElement(e.target.id);

      const currentSeatsCount = parseInt(
        getElementInnerTextById("seats-count")
      );



      const newSeatCount = currentSeatsCount - 1;
      updateElementInnerText("seats-count", newSeatCount);
      count++;
      updateElementInnerText("seat-count-th", count);
      getPhoneNumberInputValue()


      
      

      

      total += 550;

      if (count >= 4) {
        removeAttributeFromElement("discount-field");
        removeAttributeFromElement("apply-btn");
      }


      updateTable("tbody", e.target.id, "Economy", 550);
      updateElementInnerText("total", total);

      grandTotal = total;
      updateElementInnerText("grand-total", grandTotal);

      

    } else {
      alert("you can't book more than 4 Seats");
    }
  });
}

document.getElementById("apply-btn").addEventListener("click", function () {
  storedInputValue = getInputFieldValue("discount-field");
  if (storedInputValue === "NEW15") {
    const newGrandTotal = total - total * 0.15;
    updateElementInnerText("grand-total", newGrandTotal);
    addHiddenClassToElement("discount-field");
    addHiddenClassToElement("apply-btn");
  } else if (storedInputValue === "Couple 20") {
    const newGrandTotal = total - total * 0.2;
    updateElementInnerText("grand-total", newGrandTotal);
    addHiddenClassToElement("discount-field");
    addHiddenClassToElement("apply-btn");
  } else {
    alert("Invalid Coupon");
  }
});



// if(count > 0 &&  phoneNumber.length > 0) {
//   removeAttributeFromElement('next-btn')
// }


console.log(seatCount);





