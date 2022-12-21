function Fibonacci(num) {
    const fibo = [0,1];
    for (let i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
        
    }
    return fibo;
}
const fibSerie = Fibonacci(6);
console.log(fibSerie);
