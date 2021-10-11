type User = {firstname:string, lastname:string}
type DateString = string;

//generique
function identity<ArgType>(arg:ArgType):ArgType{
    return arg;
}
const argfunc = identity<number>(56);
///////////////////////////////////////
const a = "firstname"
const n = 3
const b = true
const d = null
const arr = ['a', 'b', 'c']
const user: User = {firstname: "john", lastname: "doe"}
const date:DateString = 'string'
// const date = new Date()
const cb: (e:MouseEvent) => void = (e: MouseEvent):number => {
console.log(date)
    return 3
}
const compteur = document.querySelector('#compteur') as HTMLButtonElement
// function printId(id: number | string):void{
//     console.log(id.toString());
// }

// lastname? = optionelle, doit avoir un firstname mais pas nécessairement de lastname

let i = 0;
const increment = (e: Event) => {
    e.preventDefault()
    i++;
    const span = compteur?.querySelector('span')
    if (span) {
        span.innerText = i.toString()
    }
}
function printId(id: string | number) {
    if (typeof id === "number"){
        console.log((id * 3).toString())
    }else {
        console.log(id.toUpperCase())
    }

}

function example(a: string | boolean, b: string|number|boolean) {
    if (a === b){
        a
    }else {
        b
    }
}
compteur?.addEventListener('click', increment)