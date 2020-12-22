

//입력, 연산, 출력 이 가장 중요하다고 생각
//CPU에 최적화된 연산
//메모리 사용 최소화
//도 중요하다고 생각


// 1. Use strict
// added in ES 5
'use strict'

//2. variable
//let (added in ES 6) : mutable data
// ES 6 뒤에 것은 잘 쓰지 않음

let name = 'ellie'
console.log('name 1: ', name)
name = 'hello'
console.log('name 2: ', name)


//block

let globleName = 'global name';
//어플리케이션이 실행될때 부터 끝날때 까지 
//항상 탑재 되어 있기 때문에 

//var는 절대 쓰지 않기 
//var hoisting //끌어올려주다 //what is hoisting ? : move declaration from bottom to top
//no block scope

//let, const


//3.Constant : immutable data
//ex)let 변수를 만들면 메모리 어딘가에 할당된 값을 가리키고 있어서 포인터를 이용해서 값을 계속 바꾸어 나갈 수 있음
//constant는 그 포인터가 잠겨 있어서 변경 불가
//favor immutable data type always for a few reasons :
// - security
// - thread safety
// - reduce human mistake

const daysInweek = 7
const maxNumber = 5

//4. Variable Types
//Primitive, single item : number, string, boolean, null, undefined, symbol, 
//object, box container
//function, 
//first-class function : function이 변수할당 가능 다른 데이터 타입처럼, 파라미터, return으로 반환도 가능함

//c, java랑 다르게 javascript 의 숫자는 
//number만 생각하면 됌

const count = 17
const size = 17.1

console.log(`value : ${count}, type: ${typeof count}, hello`)
console.log(`value : ${size}, type: ${typeof size}, hello`)

// nuber - speicla numeric values : infinity, -infinity, NaN(not a number)
const infinity = 1 / 0;
const negativeInfinity = -1/0
const nAn = 'not a number' / 2;
console.log(infinity)
console.log(negativeInfinity)
console.log(nAn)