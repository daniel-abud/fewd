 document.querySelector('#submit').onclick = function(e) {
    e.preventDefault();
     let comparison;
     let a = Number(document.querySelector('#a').value);
     let b = Number(document.querySelector('#b').value);


  console.log(a);
  console.log(b);


  //  add comparison logic


    //  are they not numbers
    if(isNaN(a) || isNaN(b)){
      comparison = "N/A"
    } else if(a > b){
      comparison = ">"
    } else if(a < b){
      comparison = "<"
    } else 
      comparison = "="

    document.querySelector('#comparison').innerText = comparison;
  }

  