
// var expression = document.getElementById("ab").value

// function addValue(value){
    
//     expression = expression + value;
//     document.getElementById("ab").value=expression;

// }

// function calculate(){

//     document.getElementById("ab").value= eval(expression);

// }

// function clearAll(){
// expression="";
// document.getElementById('ab').value= expression;

// }

 let name ={
    firstname:"Arun",
    lastname :"Gaikwad",
    printFullname: function () {
        console.log(this.firstname +" " + this.lastname);
    }

 }
name.printFullname();
