<?php

use PHPUnit\Framework\TestCase;

require_once __DIR__ . '/../src/1071_greatestCommonDivisorOfStrings.php';

class GreatestCommonDivisorOfStringsTest extends TestCase
{
    private GCDOfStringsSolution $solution;

    protected function setUp(): void
    {
        $this->solution = new GCDOfStringsSolution();
    }

    public function testSameBaseString()
    {
        $this->assertEquals("ABC", $this->solution->gcdOfStrings("ABCABC", "ABC"));
    }

    public function testDifferentLengths()
    {
        $this->assertEquals("ABAB", $this->solution->gcdOfStrings("ABABABAB", "ABAB"));
    }

    public function testNoCommonDivisor()
    {
        $this->assertEquals("", $this->solution->gcdOfStrings("LEET", "CODE"));
    }

    public function testFullMatch()
    {
        $this->assertEquals("XYZ", $this->solution->gcdOfStrings("XYZ", "XYZ"));
    }

    public function testOneEmpty()
    {
        $this->assertEquals("", $this->solution->gcdOfStrings("ABC", ""));
        $this->assertEquals("", $this->solution->gcdOfStrings("", "ABC"));
    }

    public function testBothEmpty()
    {
        $this->assertEquals("", $this->solution->gcdOfStrings("", ""));
    }

    public function testMultipleRepeats()
    {
        $this->assertEquals("AA", $this->solution->gcdOfStrings("AAAAAA", "AA"));
    }
}
