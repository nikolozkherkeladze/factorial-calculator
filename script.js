var btnA = document.getElementById("btnA");
var btnB = document.getElementById("btnB");
var btnC = document.getElementById("btnC");

//calculate factorial
 function factorial(n){
  let answer = 1;
  if (n == 0 || n == 1){
    return answer;
  }else{
    for(var i = n; i >= 1; i--){
      answer = answer * i;
    }
    return answer;
  }  
}



    //B factorial
    function Bfactorial()
    {
        var userInput5 = prompt("enter number:");
        var result = factorial(userInput5);
        alert(result);
    }

    //A factorial
    function Afactorial () {
   
         var userInput1 = prompt("enter upper number:");
        var userInput2 = prompt("enter lower number:");

         
        var ftl1 = factorial(userInput2);
        var midvel = userInput2 - userInput1;
        var ftl2 = factorial(midvel);

        alert(ftl1 + ' divided by ' + ftl2);
    }


    //C factorial
   function Cfactorial() {
  
         var userInput3 = prompt("enter upper number:");
        var userInput4 = prompt("enter lower number:");

        var midvel2 = userInput4 - userInput3;
        var flt4 = factorial(userInput3);
        var midvel2fac = factorial(midvel2);
        var fres = flt4 * midvel2fac;
        var ftl3 = factorial(userInput4);

        
        alert(ftl3 + ' divided by ' + fres);

       
    }

    //Discriminant
    function Discriminant()
    {
        var userInput6 = prompt("enter number A: ");
        var userInput7 = prompt("enter number B: ");
        var userInput8 = prompt("enter number C: ");
        
        var Bsquare = userInput7 * userInput7;
        var AC4 = userInput6 * userInput8 * 4;
        var UserDiscriminant = Bsquare - AC4;

        if(userInput6 == 0 && userInput7 == 0 || userInput7 == 0 && userInput8 == 0)
        {
            console.log("please enter right numbers");
        }
        else if(UserDiscriminant == 0)
        {
            console.log("one root: " + -userInput7 / userInput6);
        }
        else if(UserDiscriminant != 0)
        {
            console.log("Discriminant is lower than 0, no root");
        }
        else if(UserDiscriminant > 0)
        {
            console.log('two roots: ');
            var Droot = Math.sqrt(UserDiscriminant);

            console.log('first: ' + (-userInput7 - Droot) / userInput6);
            console.log('second: ' + (-userInput7 + Droot) / userInput6);
            

        }
    }

    //percentage
    function percentage(){
        var userInput9 = prompt("enter number: ");
        var userInput10 = prompt("enter percentage, you want to know: ");

        var result = (userInput9 * userInput10) / 100;
        console.log(result + "%");
    }

    function root1(){
        var userInput11 = prompt("enter number: ");
        var Root = Math.sqrt(userInput11);
        console.log(Root);
    }

    function root2(){
         var userInput12 = prompt("enter number: ");
        var Root2 = Math.cbrt(userInput12);
        console.log(Root2);
    }

