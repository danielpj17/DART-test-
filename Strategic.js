let button = document.getElementById('btn');

button.addEventListener('click', () => {

const effrat = parseInt(document.getElementById('effrat').value);
const capgro = parseInt(document.getElementById('capgro').value);
const effratresult = document.getElementById('effratoutput');
const result = document.getElementById('output');
let effrat_status=false, capgro_status=false;

if(effrat === '' || isNaN(effrat) || (effrat <= 0)){
    document.getElementById('effrat_error').innerHTML = 'Please provide a valid ratio';
}else{
    document.getElementById('effrat_error').innerHTML = '';
    effrat_status=true
}
if(capgro === '' || isNaN(capgro) || (capgro <= 0)){ 
    document.getElementById('capgro_error').innerHTML = 'Please provide a valid rate'; 
}else{
    document.getElementById('capgro_error').innerHTML = '';
    capgro_status=true }

if(effrat_status && capgro_status){ const bmi = (capgro / ((effrat*effrat)/10000)).toFixed(2);

if(bmi < 18.6){
    effratresult.innerHTML = 'Under weight ; ' + bmi;
}else if(bmi >= 18.6 && bmi < 24.9){
    effratresult.innerHTML = 'Normal : ' + bmi;
}else{
    effratresult.innerHTML = 'Over weight : ' + bmi;
}
}else{ alert('The form has errors'); effratresult.innerHTML = ''; 
}

if(bmi < 18.6){
    result.innerHTML = 'Under weight ; ' + bmi;
}else if(bmi >= 18.6 && bmi < 24.9){
    result.innerHTML = 'Normal : ' + bmi;
}else{
    result.innerHTML = 'Over weight : ' + bmi;

}
{ alert('The form has errors'); result.innerHTML = ''; 

} });
