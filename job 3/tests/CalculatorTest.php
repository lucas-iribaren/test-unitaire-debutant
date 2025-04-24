<?php
use PHPUnit\Framework\TestCase;
require_once __DIR__ . '/../Calculator.php';

class CalculatorTest extends TestCase {
    private $calculator;

    protected function setUp(): void {
        $this->calculator = new Calculator();
    }

    public function testAddition() {
        $this->assertEquals(5, $this->calculator->calculate('2+3'));
    }

    public function testSoustraction() {
        $this->assertEquals(-1, $this->calculator->calculate('2-3'));
    }

    public function testMultiplication() {
        $this->assertEquals(6, $this->calculator->calculate('2*3'));
    }

    public function testDivision() {
        $this->assertEquals(2, $this->calculator->calculate('6/3'));
    }

    public function testDivisionParZero() {
        $this->expectException(RuntimeException::class);
        $this->expectExceptionMessage('Erreur de calcul');
        $this->calculator->calculate('6/0');
    }
}
