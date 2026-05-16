class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length){
            return false;
        }
        let mapT = {}, mapS = {}, i
        for (i = 0; i < s.length; i++){
            mapS[s[i]] = (mapS[s[i]] || 0 ) + 1;
            mapT[t[i]] = (mapT[t[i]] || 0)+ 1;
        }

        for (let count in mapS){
            if (mapS[count] != mapT[count]){
                return false;
            };
        }
        return true;
        console.log(mapS);
        console.log(mapT);
        // return s.split("").sort().join("") === t.split("").sort().join("");
       // console.log(sorted_s);
    }
}
