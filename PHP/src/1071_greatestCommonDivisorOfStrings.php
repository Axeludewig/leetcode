<?php

class GCDOfStringsSolution
{
    /**
     * @param String $str1
     * @param String $str2
     * @return String
     */
    public function gcdOfStrings(string $str1, string $str2): string
    {
        if ($str1 === "" || $str2 === "") {
            return "";
        }
        if ($str1 . $str2 !== $str2 . $str1) {
            return "";
        }

        $gcdLength = $this->gcd(strlen($str1), strlen($str2));
        return substr($str1, 0, $gcdLength);
    }

    private function gcd(int $a, int $b): int
    {
        return $b === 0 ? $a : $this->gcd($b, $a % $b);
    }
}
