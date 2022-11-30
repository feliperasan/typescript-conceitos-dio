function addNumber(x: number, y: number): number {
    return x + y;
}

function addToHello(name: string) {
    return `Hello ${name}`;
}

/** funcao com multi tipos */
function callToPhone(phone: number | string): number | string {
    return phone;
}

async function getDataBase(id:number): Promise<string> {
    return "Felipe";
}


let soma: number = addNumber(4, 7);

console.log(soma);
console.log(addToHello("Felipe"));
console.log(callToPhone(1113232323232));