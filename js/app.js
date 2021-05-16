'use strict';

let table = document.getElementById('table');

/**Header Function */

let headerArray = ['#' , 'Image' , 'Name' , ' Season'];

function headerRow() {
    

    let headElement = document.createElement('thead');
    table.appendChild(headElement);

    let trElement = document.createElement('tr');
    headElement.appendChild(trElement);


for (let index = 0; index < headerArray.length; index++) {
    
    let thElement = document.createElement('th');
    trElement.appendChild(thElement);

    thElement.textContent = headerArray[index];
}

}

headerRow();


/***constructor function */

function Flower(image,name,season) {
    this.image=image;
    this.name=name;
    this.season=season;
    allObject.push(this);

}

let allObject=[];


/**saveData */


function saveData() {
    localStorage.setItem('data',JSON.stringify(allObject));
}

function getData() {
    
    let checked = localStorage.getItem('data');
    if (checked){

        allObject=JSON.parse(checked);
        render();
    }
}


/***clear Data */


function clearData() {
    

    localStorage.clear();
    table.innerHTML='';
    allObject=[];
}

/*** delete row*** */

function deleteRow(params) {
  allObject.splice(i,1);
    localStorage.setItem('data',JSON.stringify(allObject));
    table.innerHTML='';
    render();

}


/***render function */


function render(params) {
    for (let i = 0; i < allObject.length; i++) {
        
        let trElement = document.createElement('tr');
        table.appendChild(trElement);
        

        let tdElement = document.createElement('td');
        trElement.appendChild(tdElement);
        tdElement.textContent = 'X'

        tdElement = document.createElement('td');
        trElement.appendChild(tdElement);

        let imgElement = document.createElement('img');
        tdElement.appendChild(imgElement);
        // tdElement.textContent = allObject[i].image;
        imgElement.src = './img/'+allObject[i].image+'.jpeg';


        tdElement = document.createElement('td');
        trElement.appendChild(tdElement);
        tdElement.textContent = allObject[i].name;

        tdElement = document.createElement('td');
        trElement.appendChild(tdElement);
        tdElement.textContent = allObject[i].season;
    }
}


/**add event Listner */

let form = document.getElementById('form');
form.addEventListener('submit',newFlower);

function newFlower(event) {
  event.preventDefault()
  table.innerHTML='';

  let name = event.target.name.value;
  let image = event.target.img.value;
  let season = event.target.season.value;

  let flowerNew = new Flower(image,name,season);

  saveData();
  headerRow();
  render();

}


getData();

