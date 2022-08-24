###  문제

```js
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]. 
```
### 풀이

```js
const twoSum = (arr, targetNum) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targetNum) {
        return [i, j];
      }
    }
  }
  return [i, j];
};

console.log(twoSum([2, 7, 11, 15], 18));
```

###  우수 풀이

```js
var twoSum = function(nums, target) {
    // create a new Map
    let map = new Map();
    // loop over the nums
    for (var i = 0; i < nums.length; i++) {
      // store the compliment between current num and the target
	  // if target 10, and num[i] = 6 there is only ONE number that we can add to 6 to make it 10. 
        // That is the number 4. We call it the compliment because it compliments 6 to hit the target 10.
        // EG if target = 10 and nums[i] = 6....  10 - 6 = compliment = 4
        let compliment = target - nums[i];
        // What we are going to do is check if the compliment exists in the hashmap.
        // If the map already contains the compliment we will return an array with the index of the compliment. And current index.
        // When calling map.get(compliment) in the return, this will return the VALUE at that key 
        if ( map.has(compliment)) {
           return [map.get(compliment), i];
           } else {
               // Since the compliment does not exist as a key in the map.
               // We store the key num[i], and index as the value for that key.
               map.set( nums[i] , i)
           }

    }
    // If there is no compliment we will return an empty array. 
return [];
}; 
```

---

### 문제

     Roman to Integer
* Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
```JS
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```
>For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

>Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

>I can be placed before V (5) and X (10) to make 4 and 9.    
X can be placed before L (50) and C (100) to make 40 and 90.     
C can be placed before D (500) and M (1000) to make 400 and 900.   
Given a roman numeral, convert it to an integer.   

### 소스코드
```JS
const romanInt = function (letter) {
  const romanSet = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let addedNum = 0;

  for (let i = 0; i < letter.length; i++) {
    const currentLetter = romanSet[letter[i]];
    const nextLetter = romanSet[letter[i + 1]];
    if (currentLetter < nextLetter) {
      addedNum -= currentLetter;
    } else {
      addedNum += currentLetter;
    }
  }
  return addedNum;
};
let letter = "LVIII";
console.log(romanInt(letter));
```
### 풀이 방법
 * 라틴문자는 왼쪽에서 오른쪽으로 해석하며, 만약 큰수가 작은수(혹은 같은 수)를 만났을 때 더하고, 자신보다 더 큰
 숫자를 만나면 뺀다. 
 * 예를 들어 I = 1, II = 2, III = 3, I(1)V(5)  1 - 5 = 4, V =5, VI = 6
 * `else` 에 더하기 식을 쓴 이유는 마지막 문자 "I" 는 다음 비교대상 문자가 없기 때문에 `if 조건식`에서 `false` 이다.그러므로, else 조건문에 더하기 식을 작성해야 한다.
> 참조사이트 : https://coding.tools/kr/roman-numerals-to-numbers

---

### 문제

     2235. Add Two Integers
* Given two integers num1 and num2, return the sum of the two integers.
 

> Example :
Input: num1 = 12, num2 = 5   
Output: 17
Explanation: num1 is 12, num2 is 5, and their sum is 12 + 5 = 17, so 17 is returned.

### 풀이
```js
const sum = (num1, num2) => {
  let result = num1 + num2;
  return result;
};
console.log(sum(1, 1));
```

### 기타 우수풀이

```js
var sum = function() {
    if (arguments[0] == 0) return arguments[1]
    return arguments[0] + arguments[1]
};
// 만약 파라미터 1이 0이라면 당연히 파라미터 2만 출력하면 되기 때문에.. 2번파리미터를 리턴.
// 인자 2개가 다를경우 배열로 처리.

var sum = (num1, num2) => num1 + num2
// arrow function을 이용한 간단한 풀이

var sum = function(num1, num2) {
    return num1 + num2;
};
// 기본형
```

----

### 문제

     Concatenation of Array

 * Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
Specifically, ans is the concatenation of two nums arrays.
Return the array ans.

> Example    
Input: nums = [1,2,1]
Output: [1,2,1,1,2,1]
Explanation: The array ans is formed as follows:    
ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]   
ans = [1,2,1,1,2,1]


###  풀이

```js
const getConcatenation = (num) => { return [...num, ...num];};
// Spread Syntax


const getConcatenation = (num) => {
    return num.concat(num);};

// concat 내장함수 활용

const getConcatenation = (num) => {
  let ans = [];

  for (let i = 0; i < num.length; i++) {
    ans.push(num[i]);
  }
  for (let i = 0; i < num.length; i++) {
    ans.push(num[i]);
  }

  return ans};
  // 내 처음풀이용.. 답답 그 자체

const getConcatenation = (num) => num.concat(num);
// arrow function 활용
```

----