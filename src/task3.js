/* Task 3.
Function counts the area of each triangle and returns
sorted array of areas from the largest to smallest.
Input: array of objects with 4 params: vertices, and sizes.
Output: sorted array of triangles names;
*/

export default function sortTriangles(arr) {
    let sidesNames = [];
    let sidesValues = [];

    // Validation

    // check is it an array
    if (!Array.isArray(arr)) return console.error('{status: failed, reason: Unvalid type of params. Should be an array}');

    
    for (let triangle of arr) {

        // check that verticles have got 3 letters and is it a string
        if (typeof triangle.vertices !== 'string' || triangle.vertices.length !== 3 || triangle.vertices.match(/\d/)) {
            return console.error(`{status: failed, reason: Unvalid params in triangle ${triangle.vertices}. Three vertices are needed}`);
        };

        // check that names of sides are correct and their values are positive numbers
        sidesNames = triangle.vertices.toLowerCase().split('');

        if (sidesNames.some(el => triangle[el] < 1 || typeof triangle[el] !== 'number' || !triangle.hasOwnProperty(el))) {
            return console.error(`{status: failed, reason: Unvalid type of params in triangle ${triangle.vertices}. Must be a positive number. And names of sides are simillar to vertices}`);
        };

        // check that all sides are correct
        sidesValues = sidesNames.map(el => triangle[el]);
        if (sidesValues[2] > sidesValues[0] + sidesValues[1] || sidesValues[1] > sidesValues[0] + sidesValues[2] || sidesValues[0] > sidesValues[1] + sidesValues[2]) {
            return console.error(`{status: failed, reason: Unvalid params of side in triangle ${triangle.vertices}. Unposible to create a triangle with such sides}`);
        };
    };

    // Count square of each triangle
    for (let triangle of arr) {
        sidesNames = triangle.vertices.toLowerCase().split('');
        sidesValues = sidesNames.map(el => triangle[el]);
        let p = (sidesValues[0] + sidesValues[1] + sidesValues[2]) / 2;
        triangle.square = Math.sqrt(p * (p - sidesValues[0]) * (p - sidesValues[1]) * (p - sidesValues[2]));
    };
    
    let sortedArr = arr.sort((a, b) => a.square - b.square).map(el => el.vertices);

    return sortedArr;
};

// console.log(sortTriangles([{ vertices: 'ABC', a: 10, b: 20,c: 22.36}, {vertices: 'BCD', b: 5, c:10, d: 15.3}, {vertices: 'DEF', d: 5, e:10, f: 15.3}]));
// console.log(sortTriangles([{ vertices: 'ABC', b: 10, b: 20,c: 22.36}, {vertices: 'BCD', b: 6, c:10, d: 15.3}, {vertices: 'DEF', d: 10, e:10, f: 15.3}]));
// console.log(sortTriangles([{ vertices: 'ABC', a: 10, b: 15, c: 22},{ vertices: 'CDE', e: 10, c: 20, d: 22.36},{ vertices: 'CDE', e: 5, c: 5, d: 5},{ vertices: 'FGH', f: 50, g: 25, h: 50}]));