/* Task 2.
Function which analyse can one envelop be put in another.
Input: two objects with sides of envelopes.
Output: number of envelope in which we can put another or 0 if it is unpossible.
 */

export default function analyseEnvelopes(env1, env2) {

    // Validation
    for (let i in env1) {
        if (typeof env1[i] !== 'number' || env1[i] < 1) {
            return '{status: failed, reason: Unvalid params}';
        }
    }

    for (let i in env2) {
        if (typeof env2[i] !== 'number' || env2[i] < 1) {
            return '{status: failed, reason: Unvalid params}';
        }
    }
    
    // Check which envelop is larger and return the number. Otherwise, return 0
    if (env1.a >= env2.c && env1.b > env2.d) return 1;
    else if (env2.c >= env1.a && env2.d > env1.b) return 2;
    else return 0;
};

// console.log(analyseEnvelopes({a:-2,b:4},{c:2,d:5}));