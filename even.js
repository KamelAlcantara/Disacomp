document.write("kamel") 

function Operacion(numero, numero2){
    var numero = numero||1;
    var numero2 = numero2||1;

    var _resultado = 0;    

    function sum(){
        return numero+numero2;
    }     
    function resta(){
        return numero-numero2;
    }     
    function divide(){
        return numero/numero2;
    }
    return{
        resta:resta,
        sum:sum,
        divide:divide
    }
};

document.write(" "+Operacion(1,2).sum());