class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        let regEx = /[\p{P}\p{S}\s]/gu;
        let convertS = s.replaceAll(regEx,"").split("").join("").toLowerCase();
        let reversedS = convertS.split("").reverse().join("");
        
        console.log(`reversedS: ${reversedS} and convertS: ${convertS}`)
        return reversedS === convertS;
    }
}
