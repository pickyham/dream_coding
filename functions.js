//1. function declaration

// function name(param1, param2) {body... return;}
//one function === one thing
//naming :  dosomething, command, verb
//e.g. createCardandPoint -> createCard, createPoint
//function is object in JS
//

//Useless :(
function printHello() {
    console.log('Hello')
}

printHello()

//
function log(message) {
    console.log(message);
}

log('Hello')

//typescript tips : param(type 명시), return value(type 명시)

// 2.Parameters
//premitive :passed by value
//object : passed by object

function changeName(obj) {
    obj.name = 'coder' //무조건 변경하게 하는 함수
}

const ellie = {name : 'ellie'}

changeName(ellie)

console.log('realName', ellie)

console.log('///////////////4. Rest Parameters/////////////////')

// 4. Rest Parameters
//(...varible) -> 이런 형태로 적어주면 배열(Array)형태로 변경해줌

function printAll(...args) {
    for(let i = 0 ; i < args.length; i++){
        console.log(args[i])
    }

    for(const arg of args){
        console.log(arg)
}

//배열(Array)에서 더 자세하게 할
args.forEach( (arg) => console.log(arg) )

}

printAll('dream', 'code', 'ellie')

//브라우저 console 창에서
//함수에다가 .을 붙이면 


// 5. 