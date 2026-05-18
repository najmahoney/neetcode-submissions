class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        let stripedS = s.replace(/[^a-zA-Z0-9]/g, "");
        let reversedS = stripedS.split('').reverse().join('');

        console.log(`stripedS:  ${stripedS} \n reversedS: ${reversedS}`);

        return stripedS.toLowerCase() === reversedS.toLowerCase();
    }
}
