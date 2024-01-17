function alternatingString(N) {
    let result = "";
    for (let i = 0; i < N; i++) {
        result += i % 2 === 0 ? "+" : "-";
    }
    return result;
}

// Example usage:
let N = 10;
let resultString = alternatingString(N);
console.log(resultString);
