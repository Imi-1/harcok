const array = [
    {
        cell1: "Rákóczi szabadságharc",
        cell2: "Kuruc",
        cell3: "70.000",
        cell4: "Labanc",
        cell5: "60.000",
    },
    {
        cell1: "48-as szabadságharc",
        cell2: "Osztrák császárság (+ Orosz birodalom)",
        cell3: "170.000 (+ 200.000)",
        cell4: "Magyar királyság",
        cell5: "170.000",
    },
    {
        cell1: "I. világháború",
        cell2: "Antant",
        cell3: "43 millió",
        cell4: "Központi hatalmak",
        cell5: "25 millió",
    },
    {
        cell1: "Bosworthi csata",
        cell2: "Angolok (York + Lancester)",
        cell3: "15.000",
    },
];

const table = document.createElement('table');
table.id="tableID";
document.body.appendChild(table);

const tbody = document.createElement('tbody'); 
tbody.id="tbodyID";
table.appendChild(tbody);

generateColgroup();

createHeader(); 

// renderTable(array);

// generateForm();





const form = document.getElementById('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const thisForm = e.currentTarget; 
    const errorElements = thisForm.querySelectorAll('.error'); 
    for (const i of errorElements) { 
        i.innerHTML = ""; 
    }

    let valid = true; 

    const cell1HtmlElement = document.getElementById('harc_nev');
    const cell2HtmlElement = document.getElementById('harcolo1');
    const cell3HtmlElement = document.getElementById('hadero1');
    const cell4HtmlElement = document.getElementById('harcolo2');
    const cell5HtmlElement = document.getElementById('hadero2');

    const cell1Value = cell1HtmlElement.value;
    const cell2Value = cell2HtmlElement.value;
    const cell3Value = cell3HtmlElement.value;
    const cell4Value = cell4HtmlElement.value === '' ? undefined :cell4HtmlElement.value; 
    const cell5Value = cell5HtmlElement.value === '' ? undefined :cell5HtmlElement.value; 


    if(!validateFormInputFields(cell1HtmlElement, "Kötelező megadni a harc nevét!")){
        valid = false;
    };
    
    if(!validateFormInputFields(cell2HtmlElement, "Kötelező megadni a szembenálló felet!")){ 
        valid = false;
    };

    if(!validateFormInputFields(cell3HtmlElement, "Kötelező megadni a haderőt!")){ 
        valid = false;
    };

    if(!validateFormInputFieldsExtra(cell4HtmlElement, cell5HtmlElement)){
        valid=false
    }

    if(valid){
        const newElement = {
            cell1: cell1Value,
            cell2: cell2Value,
            cell3: cell3Value,
            cell4: cell4Value,
            cell5: cell5Value,
          };

        array.push(newElement);
    
        tbody.innerHTML = '';
        renderTable(array); 
    
        thisForm.reset();
    }

});