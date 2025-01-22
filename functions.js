function generateColgroup(){  
    const tableID=document.getElementById("tableID")
    const colgroup = document.createElement('colgroup');
    tableID.appendChild(colgroup);
  
    for(let i = 0; i < 3; i++){
        const col = document.createElement('col');
  
        col.className = (i === 0 || i === 2) ? "colored-column" : "";
  
        colgroup.appendChild(col);
    }
}

function createHeader(){

    const headerObj = {
        cell1: "Harc megnevezése",
        cell2: "Szembenálló felek",  
        cell3: "Haderő"    
    };

    const tableID=document.getElementById("tableID")
    const thead = document.createElement('thead');
    tableID.appendChild(thead); 

    const headerRow = document.createElement('tr');
    thead.appendChild(headerRow);

    for(const i in (headerObj)){ 
        const headerCell = document.createElement('th'); 
        headerCell.innerHTML = headerObj[i]; 
        headerRow.appendChild(headerCell); 
    }
}


function renderTable(array){
    for (const i in array) {
        const row1 = document.createElement('tr');
        const tbodyID=document.getElementById("tbodyID");
        tbodyID.appendChild(row1);
    
        const cell1 = document.createElement('td');
        cell1.innerHTML = array[i].cell1;
        row1.appendChild(cell1);

        const cell2 = document.createElement('td');
        cell2.innerHTML = array[i].cell2;
        row1.appendChild(cell2); 
    
        const cell3 = document.createElement('td');
        cell3.innerHTML = array[i].cell3;
        row1.appendChild(cell3); 

        if (array[i].cell4 !== undefined && array[i].cell5 !== undefined){

            cell1.rowSpan = "2";

            const row2 = document.createElement('tr');
            tbodyID.appendChild(row2);

            const cell4 = document.createElement('td'); 
            cell4.innerHTML = array[i].cell4; 
            row2.appendChild(cell4);

            const cell5 = document.createElement('td');
            cell5.innerHTML = array[i].cell5;
            row2.appendChild(cell5);

        }
    }
  
}



function validateFormInputFields(inputElement, errormessage){
    let validation = true; 
    if(inputElement.value === ""){ 
        const parentElement = inputElement.parentElement; 
        const error = parentElement.querySelector('.error'); 
        error.innerHTML = errormessage; 
        validation = false;
    }
    return validation;  
}

function validateFormInputFieldsExtra(inputElement1, inputElement2){ 
    let validation = true; 

    if(inputElement1.value!=="" && inputElement2.value===""){
        const parentElement = inputElement2.parentElement; 
        const error = parentElement.querySelector('.error'); 
        error.innerHTML = "Meg kell adni a szembenálló felet is!"; 
        validation = false; 
    }

    if(inputElement1.value==="" && inputElement2.value!==""){ 
        const parentElement = inputElement1.parentElement; 
        const error = parentElement.querySelector('.error'); 
        error.innerHTML = "Meg kell adni a haderőt is!";
        validation = false; 
    }

    return validation;
}


