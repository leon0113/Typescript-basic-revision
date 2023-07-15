// nomral 

function addNum(num1: number, num2: number = 10): number {
    return num1 + num2;
}
addNum(2)

//callback

const arr = [1, 3, 4, 5]

const newArr = arr.map((e : number) => e*e);

const person : {
    name : string,
    balance : number,
     addBalance(money : number) : void
} = {
    name : 'Leon',
    balance: 10,
    addBalance(money) {
      return  this.balance + money
    }
}

// npx ts-node-dev src/function.ts