function queryCount(input, query) {
    return query.map(q => input.filter(item => item === q).length);
}

const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];
console.log(queryCount(INPUT, QUERY)); 