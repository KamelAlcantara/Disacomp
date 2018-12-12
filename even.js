// document.write("kamel") 

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

// document.write(" "+Operacion(1,2).sum());

var Xmr = new XMLHttpRequest(); 

function Respuesta (){
    if(this.readyState === 4 && this.status ===200){

        var R = JSON.parse(this.responseText);
        var rHTML = document.querySelector('#Respuesta');
        var tpl='';

        R.forEach(function(elem){
            tpl += '<a href ='+elem.url+'>'
            +'<img src='+elem.thumbnailUrl+'/>'
            +'</a>'
            +'<br/>'
        });

        rHTML.innerHTML= tpl;         
    }
} 
Xmr.onload = Respuesta;
Xmr.open('GET','http://jsonplaceholder.typicode.com/photos',true);
Xmr.send();