// Math operators
// on numbers
5 + 1     // 6
2 - 7     // -5
1 * 62    // 62
89 / 15   // 5.93333333334
23 % 2    // 1
2 ** 3    // 8

// on not numbers
'Hello' + ' ' + 'World'     // Hello World
[0,1,2] + [3, 4, 5]         // '0,1,23,4,5'
{} + {}                     // '[object Object][object Object]'
5 * 'hi'                    // NaN
'' * ''                     // 0
'a' * ''                    // NaN
false * false               // 0

// Boolean operators
true && true
false || false
!true

true && 5 && 12 && '' && true             // ''
false || 0 || null || 'Vineti' || true    // 'Vineti

// Comparison operators
8 == 8      // true
8 != 8      // false
8 == 5      // false
8 == '8'    // true (Compares values only)

12 <= 1     // false
22 < 100    // true
88 >= 1     // true
1 > 0       // true

8 === 8     // true
8 === '8'   // false (Compares values AND types)
1 !== 4     // true
1 !== '1'   // true (Compares values AND types)