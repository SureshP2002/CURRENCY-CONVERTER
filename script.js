let select = document.querySelectorAll('.currency')//getting the option from select in html
let btn = document.getElementById('btn')//btn element getting
let input = document.getElementById('input')//input element getting

//fetch the countries from another program using API KEy
fetch('https://api.frankfurter.app/currencies')
.then(res=>res.json())//convert to JSON OBJECT
.then(res=>displayDropDown(res))//then calling functions to add it into our dropdown method

function displayDropDown(res){
  let curr = Object.entries(res)//it will convert it arrayd
  for(let i=0;i<curr.length;i++){
    let opt = `<option value="${curr[i][0]}">${curr[i][0]}</option>`//adding this like format
    select[0].innerHTML += opt//adding that opt in first select
    select[1].innerHTML += opt//adding that opt in second select
  }
}

btn.addEventListener('click',()=>{//whenever button is clicked
  let curr1 = select[0].value//take first value 
  let curr2 = select[1].value//take second value
  let inputVal = input.value//get the input value
  if(curr1===curr2)//if both curr eqaul give alert
    alert("Choose different currencies")
  else
    convert(curr1,curr2,inputVal)//else convert
});

function convert(curr1,curr2,inputVal){
  const host = 'api.frankfurter.app';
  fetch(`https://${host}/latest?amount=${inputVal}&from=${curr1}&to=${curr2}`)
  .then(resp => resp.json())
  .then((data) => {
    document.getElementById('result').value = Object.values(data.rates)[0]//display result
  });

}