function factorial(n: number): number {
    // Requirement 2: Check for negative numbers and throw an error
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }

    // Base case: The factorial of 0 or 1 is 1
    let result: number = 1;

    // Requirement 3: Use a loop to compute the factorial from 2 up to n
    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}
