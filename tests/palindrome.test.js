const { describe, it, before, after, beforeEach, afterEach } = require('node:test');
const assert = require('node:assert');
const isPalindrome = require('../lib/palindrome.js');

// Test suite for palindrome function
describe('Palindrome Checker', () => {
    
  // Setup and teardown hooks (optional, shown for demonstration)
  before(() => {
    console.log('🏃‍♂️ Starting palindrome tests...');
  });
    
  after(() => {
    console.log('✅ All palindrome tests completed!');
  });
    
  beforeEach(() => {
    console.log('  Running a test case...');
  });
    
  afterEach(() => {
    console.log('  Test case completed.');
  });
    
  // Test group: Basic palindrome words
  describe('Basic palindrome words', () => {
    it('should return true for "radar"', () => {
      assert.strictEqual(isPalindrome('radar'), true);
    });
        
    it('should return true for "level"', () => {
      assert.strictEqual(isPalindrome('level'), true);
    });
        
    it('should return true for "civic"', () => {
      assert.strictEqual(isPalindrome('civic'), true);
    });
        
    it('should return true for "kayak"', () => {
      assert.strictEqual(isPalindrome('kayak'), true);
    });
        
    it('should return false for "hello"', () => {
      assert.strictEqual(isPalindrome('hello'), false);
    });
        
    it('should return false for "world"', () => {
      assert.strictEqual(isPalindrome('world'), false);
    });
  });
    
  // Test group: Case sensitivity
  describe('Case sensitivity', () => {
    it('should ignore uppercase letters', () => {
      assert.strictEqual(isPalindrome('Radar'), true);
    });
        
    it('should ignore mixed case', () => {
      assert.strictEqual(isPalindrome('LeVeL'), true);
    });
        
    it('should handle all caps', () => {
      assert.strictEqual(isPalindrome('KAYAK'), true);
    });
  });
    
  // Test group: Phrases with spaces and punctuation
  describe('Phrases with spaces and punctuation', () => {
    it('should handle phrases with spaces', () => {
      assert.strictEqual(isPalindrome('never odd or even'), true);
    });
        
    it('should handle punctuation', () => {
      assert.strictEqual(isPalindrome('A man, a plan, a canal: Panama'), true);
    });
        
    it('should handle quotes and apostrophes', () => {
      assert.strictEqual(isPalindrome("Was it a car or a cat I saw?"), true);
    });
        
    it('should handle multiple punctuation marks', () => {
      assert.strictEqual(isPalindrome("No 'x' in Nixon"), true);
    });
  });
    
  // Test group: Edge cases
  describe('Edge cases', () => {
    it('should return false for single character', () => {
      assert.strictEqual(isPalindrome('a'), false);
    });
        
    it('should return false for single character with spaces', () => {
      assert.strictEqual(isPalindrome('   a   '), false);
    });
        
    it('should return false for empty string', () => {
      assert.strictEqual(isPalindrome(''), false);
    });
        
    it('should return false for string with only spaces', () => {
      assert.strictEqual(isPalindrome('   '), false);
    });
        
    it('should return false for string with only punctuation', () => {
      assert.strictEqual(isPalindrome('!@#$%'), false);
    });
        
    it('should return false for null input', () => {
      assert.strictEqual(isPalindrome(null), false);
    });
        
    it('should return false for undefined input', () => {
      assert.strictEqual(isPalindrome(undefined), false);
    });
        
    it('should return false for number input', () => {
      assert.strictEqual(isPalindrome(12321), false);
    });
  });
    
  // Test group: Numbers as strings
  describe('Numeric palindromes', () => {
    it('should handle numeric strings that are palindromes', () => {
      assert.strictEqual(isPalindrome('12321'), true);
    });
        
    it('should handle numeric strings that are not palindromes', () => {
      assert.strictEqual(isPalindrome('12345'), false);
    });
        
    it('should ignore commas in numbers', () => {
      assert.strictEqual(isPalindrome('1,2,3,2,1'), true);
    });
  });
    
  // Test group: Famous palindromes
  describe('Famous palindromes', () => {
    it('should detect "racecar" as palindrome', () => {
      assert.strictEqual(isPalindrome('racecar'), true);
    });
        
    it('should detect "tacocat" as palindrome', () => {
      assert.strictEqual(isPalindrome('tacocat'), true);
    });
        
    it('should detect "Mr. Owl ate my metal worm" as palindrome', () => {
      assert.strictEqual(isPalindrome('Mr. Owl ate my metal worm'), true);
    });
        
    it('should detect "A Santa lived as a devil at NASA" as palindrome', () => {
      assert.strictEqual(isPalindrome('A Santa lived as a devil at NASA'), true);
    });
  });
    
  // Test group: Performance with large strings
  describe('Performance', () => {
    it('should handle long palindromes efficiently', () => {
      const longPalindrome = 'a'.repeat(10000) + 'b' + 'a'.repeat(10000);
      assert.strictEqual(isPalindrome(longPalindrome), true);
    });
  });
});
