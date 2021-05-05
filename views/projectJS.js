let inputs = document.querySelectorAll("input") ;
let textarea = document.querySelector("textarea") ;
let formElement = document.querySelectorAll(".form-element");
let formContainer = document.querySelector(".form-container");
let table = document.querySelector(".entry-table table");

function reset(){
    textarea.value =  "" ;

    for(var i = 0 ; i < inputs.length ; i++){
        inputs[i].value = "" ;
    }
}

let isInvalid = false ;
let inErr = new Array();

function build(){
    for(var i = 0 ; i < inputs.length ; i++){
        if(inputs[i].value == "" || inputs[i].value == " " )
        {
            isInvalid = true ;
            inErr.push(i) ;
        }
    }
    if(textarea == " " || textarea == ""){
        isInvalid = true ;
    }

    if(isInvalid == false){
        var html = '' ;
        formElement.forEach((e) => {
            html += '<tr class="row-table"><td class="key">' + e.children[0].innerText + '</td><td>' + e.children[1].value + '</td></tr>' ;
        });

        formContainer.style.display = "none" ;

        table.parentElement.style.display = "flex" ;

        table.innerHTML = html ;
    }
    else{
        var str = '[ ' ;
        inErr.forEach((e) => {
            console.log(e);
            str += inputs[e].previousElementSibling.innerText + ", ";
        });

        str += ' ]' ;
        alert("Invalid Input in " + str );
        isInvalid = false ;
        inErr = [] ;
    }
}