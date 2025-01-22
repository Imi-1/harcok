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