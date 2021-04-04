/* Task 4.
Function checks is the number or its part a palindrome.
Input: number. Length > 10.
Output: palindrome or 0.
*/

export default function findPalindrome (number) {
    let variants = [];
    let palindromes = [];
    
    // Validation
    if(typeof number !== 'number' || number < 10 || String(number).length > 20){
        return '{status: failed, reason: Unvalid type of params. Should be a number. Length more that 2, but less than 20}';
    } 
    // Create an array of all possible variants
    number = String(number);

    for (let a = 0; a <= number.length; a++) {
        for (let b = 2; b <= number.length; b++) {
            if (number.slice(a, b) > 10) variants.push(number.slice(a, b));
        }
    };
    
    // Compare every value with its reversed value and create an array of palindromes
    palindromes = variants.filter(el => el == el.split('').reverse().join(''));
    
    // Return the longest palindrome or zero if there are no palindromes
    return palindromes.length == 0 ? 0 : + palindromes.sort((a,b) => b - a)[0];
};

// console.log(findPalindrome(54322345));
// console.log(findPalindrome(111));