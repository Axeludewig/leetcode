<?php

// You are given two strings word1 and word2.
// Merge the strings by adding letters in alternating order,
// starting with word1. If a string is longer than the other,
// append the additional letters onto the end of the merged string.

// Return the merged string.

class Solution
{
    /**
     * @param String $word1
     * @param String $word2
     * @return String
     */
    public function mergeAlternately($word1, $word2)
    {
        $result = '';

        $maxLength = max(strlen($word1), strlen($word2));

        for ($i = 0; $i <= $maxLength; $i++) {
            if (isset($word1[$i])) {
                $result .= $word1[$i];
            }
            if (isset($word2[$i])) {
                $result .= $word2[$i];
            }
        }

        echo $result;
        return $result;
    }
}


$sol = new Solution();
$sol->mergeAlternately('abcde', 'defg');
