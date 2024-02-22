HTML
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Calculate in JavaScript</title>
        <link rel="stylesheet" href="style.css"
        <script src="script.js" defer></script>
    </head>

    <body>
        <div class="wrapper">
            <form name="formcalc">
                <p>
                Number 1: <input type="text" name="txtnum1">
                <br><span id="num_error"></span>
                <br>
                Score 1: <input type="text" name="txtscr1">
                <br><span id="scr_error"></span>
                <br>
                Number 2: <input type="text" name="txtnum2">
                <br>
                <br>
                Score 2: <input type="text" name="txtscr2">
                <br>
                <br>
                Number 3: <input type="text" name="txtnum3">
                <br>
                <br>
                Score 3: <input type="text" name="txtscr3">
                <br>
                <br>
                Number 4: <input type="text" name="txtnum4">
                <br>
                <br>
                Score 4: <input type="text" name="txtscr4">
                <br>
                <br>
                Number 5: <input type="text" name="txtnum5">
                <br>
                <br>
                Score 5: <input type="text" name="txtscr5">
                <br>
                <br>
                Number 6: <input type="text" name="txtnum6">
                <br>
                <br>
                Score 6: <input type="text" name="txtscr6">
                <br>
                <br>
                Number 7: <input type="text" name="txtnum7">
                <br>
                <br>
                Score 7: <input type="text" name="txtscr7">
                <br>
                <br>
                Cumulative Score: <input type="text" name="txtres">

              <input type="button" value="Calculate" onclick="sumValues()"

            </p>
        </form>
        </div>
       
    </body>


body{
    margin: 0%;
    padding: 0%;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    background-color: skyblue;
    
}
span{
    color: red;
}
.wrapper{
    position: absolute;
    top: 30%;
    left: 30%;
    transform:translate(-50%, -50%)
    padding 15px;
    background: black;
    border-radius: 5px;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
}
input{
    outline: none;
    border: 5px;
    padding: 5px;
    

}
button{
    color: white;
    padding: 10px;
    border: 2px solid white;
    background: black;
    display: block;
    margin-top: 10%;
    cursor: pointer;
}



let button = document.getElementById('btn');

button.addEventListener('click', () => {

    const height = parseInt(document.getElementById('num1').value);
    const weight = parseInt(document.getElementById('num2').value);
    const result = document.getElementById('output');
    let height_status=false, weight_status=false;

    if(height === '' || isNaN(height) || (height <= 0)){
        document.getElementById('height_error').innerHTML = 'Please provide a valid height';
    }else{
        document.getElementById('height_error').innerHTML = '';
        height_status=true
    }

if(weight === '' || isNaN(weight) || (weight <= 0)){
    document.getElementById('weight_error').innerHTML = 'Please provide a valid weight';
}else{
    document.getElementById('weight_error').innerHTML = '';
    weight_status=true
}

if(height_status && weight_status){
    const bmi = (weight / ((height*height)/10000)).toFixed(2);

    if(bmi < 18.6){
        result.innerHTML = 'Under weight ; ' + bmi;
    }else if(bmi >= 18.6 && bmi < 24.9){
        result.innerHTML = 'Normal : ' + bmi;
    }else{
        result.innerHTML = 'Over weight : ' + bmi;
    }
}else{
    alert('The form has errors');
    result.innerHTML = '';
}
});

