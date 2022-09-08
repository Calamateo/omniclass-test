const a = [1, 2, 3, 4, 9]

function solution(a, k) {
    let rows = 0

    do {
        rows = 0
        let i = 1
        for (let index = 0; index < a.length; index++) {
            rows = Math.floor(a[i] / i) + rows
        }
    } while (rows !== k);
    return rows
}

console.log(solution(a, 5))