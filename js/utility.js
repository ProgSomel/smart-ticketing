function scrollToNewElement() {
    document.getElementById('seat-selection').scrollIntoView({behavior: 'smooth'});
}

function getElementInnerTextById(elementId) {
    const element = document.getElementById(elementId);
    return element.innerText;
}

function updateElementInnerText(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;

}

function updateTable(elementId, value1, value2, value3) {
    const tableBody = document.getElementById(elementId);
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');

    td1.innerText = value1;
    td1.classList.add('uppercase');
    td2.innerText = value2;
    td3.innerText = value3;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    tableBody.appendChild(tr);


}

function getInputFieldValue(elementId) {
    const inputField = document.getElementById(elementId) ;
    const inputFieldValue = inputField.value;
    // console.log(inputFieldValue);
    return inputFieldValue;
    
}



function setBackgroundColorGreen(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#1DD100]');
}

function makeDisabledClassToElement(elementid) {
    const element = document.getElementById(elementid);
    element.classList.add('pointer-events-none');
}

function removeAttributeFromElement(elementid) {
    const element = document.getElementById(elementid);
    element.removeAttribute('disabled');
}

function addHiddenClassToElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');

}

