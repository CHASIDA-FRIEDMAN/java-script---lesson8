function f1(c){
    let a=document.getElementById("in1").value
    let b=document.getElementById("in2").value

    switch (c) {
        case '*':
            alert(a*b)
            break;
         case '+':
            alert(+a+(+b))
            break;
        case '^':
            alert(a**b)
            break;        
    
        default:
            break;
    }

}

function f1bin(){
    let a=document.getElementById("nu1").value
    let b=document.getElementById("nu2").value
    let x=parseInt(a,2)
    let y=parseInt(b,2)
    let res = +x+(+y)

    console.log(parseInt(res,))



}


function f2(){
    let a=document.getElementById("name").value
    let b=document.getElementById("pass").value
    console.log(a, b);
    alert('hello '+(a|| 'guest')+' your password is: '+(b|| '1234'))
}
