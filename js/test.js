function deleteRow(i) {
    
    allObject.splice(i,1);
    localStorage.setItem('data',JSON.stringify(allObject));
    table.innerHTML='';
    render();

}