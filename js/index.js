const seats = document.getElementsByClassName("seat");
let count = 0;
let total = 0;
let grandTotal = 0;
var storedInputValue;

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
      total += 550;

      if (count >= 4) {
        removeAttributeFromElement("discount-field");
        removeAttributeFromElement("apply-btn");
      }

      updateElementInnerText("seat-count-th", count);

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
  if(storedInputValue === 'NEW15') {
        const newGrandTotal = total-(total*0.15);
        updateElementInnerText('grand-total', newGrandTotal);
        addHiddenClassToElement('discount-field')
        addHiddenClassToElement('apply-btn')
  }
  else if(storedInputValue === 'Couple 20') {
        const newGrandTotal = total-(total*0.20);
        updateElementInnerText('grand-total', newGrandTotal);
        addHiddenClassToElement('discount-field')
        addHiddenClassToElement('apply-btn')
  }
  else {
        alert('Invalid Coupon');

  }
});


