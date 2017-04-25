function bigMult(value: number[], mult: number) {
    value.forEach((x, i) => value[i] = x * mult);
    for(var i = 0; i < value.length; i++) {
        if (value[i] >= 10) {
            let carry = Math.floor(value[i]/10);
            value[i] = value[i] % 10;
            if (i + 1 == value.length) {
                value.push(0);
            }
            value[i + 1] += carry;
        }
    }
}

function factorial(n: number): number[] {
    let r : number[] = [1];
    for(var i = 2; i <= n; i++) {
        bigMult(r, i);
    }
    return r;
}

function sumDigits(digits: number[]) {
    return digits.reduce((a,b) => a + b, 0);
}

console.log(sumDigits(factorial(2000)));
