

// Create an h1 node for the fomr title
    // Add the form title to the h1 node
// Grab the APP div and add it to the DoM
// Create a form node for the APP div



// Grab div named #app. Form will be placed in div
const oddsEventApp = document.querySelector(`#app`);
console.log(oddsEventApp);




// Create H1 title of form
const h1FormTitle = document.createElement('h1');
// Add text to H1 title
h1FormTitle.innerText = 'Odds and Events';
oddsEventApp.appendChild(h1FormTitle);

// Create Odds and Events Form
const formOddsEvent = document.createElement('form');



// Create LABEL for Bank Input
const labelForBank = document.createElement('label');
labelForBank.setAttribute = ('for', 'bank-input');
labelForBank.textContent = 'Bank:';

// Create INPUT for Bank
const inputForBank = document.createElement('input');
inputForBank.setAttribute = ('type', 'number');
inputForBank.setAttribute = ('id', 'bank-input');
inputForBank.setAttribute = ('name', 'bank-input');
inputForBank.setAttribute = ('placeholder', 'Add your numbers here.');
console.log(inputForBank);

// Create SECTION for Bank input
const sectionForBank = document.createElement('section');
console.log(sectionForBank);

// Append BANK Label and Input to BANK Section
sectionForBank.appendChild(labelForBank);
sectionForBank.appendChild(inputForBank);

//Put form into app section
//oddsEventApp.appendChild(formOddsEvent);
//sectionForBank.appendChild(labelForBank);

// 
// Create section node for the Bank
  // Create a label for the bank
  // Create text for the label
  // Create input for the label
  // Add elements to Bank section