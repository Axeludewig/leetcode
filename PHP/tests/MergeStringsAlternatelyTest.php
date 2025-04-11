<?php

// tests/SolutionTest.php

use PHPUnit\Framework\TestCase;

require_once __DIR__ . '/../src/1748_mergeStringsAlternately.php';

class mergeStringsAlternatelyTest extends TestCase
{
    public function testMergeAlternatelySameLength()
    {
        $sol = new Solution();
        $this->assertEquals('adbecf', $sol->mergeAlternately('abc', 'def'));
    }

    public function testMergeAlternatelyFirstLonger()
    {
        $sol = new Solution();
        $this->assertEquals('a1b2c3d4e', $sol->mergeAlternately('abcde', '1234'));
    }

    public function testMergeAlternatelySecondLonger()
    {
        $sol = new Solution();
        $this->assertEquals('a1b2c3', $sol->mergeAlternately('abc', '123'));
    }

    public function testMergeAlternatelyEmptyString()
    {
        $sol = new Solution();
        $this->assertEquals('abc', $sol->mergeAlternately('abc', ''));
        $this->assertEquals('123', $sol->mergeAlternately('', '123'));
    }
}
