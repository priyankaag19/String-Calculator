# String Calculator TDD Kata

This is an implementation of the String Calculator Kata following Test-Driven Development (TDD) principles.

## Explanation:
Initial Setup: If the string is empty, return 0.
Delimiters: By default, we split on commas and newlines using a regex (/,|\n/), but if the input string begins with a custom delimiter (formatted like "//[delimiter]\n"), we adjust the delimiter accordingly.
Negative Numbers: We check for negative numbers in the input, and if any are found, an error is thrown listing all the negative numbers.
Summation: The numbers are summed using reduce.

## Run the Tests
You can run the tests using Jest by executing:

npm test
 
This approach showcases test-first development, refactoring between tests, and adhering to the constraints set in the problem.

## How to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/priyankaag19/String-Calculator.git

