# TypeScript Function Bug: Unexpected Behavior with Optional Parameters and Type Safety

This repository demonstrates a potential bug in a TypeScript function related to optional parameters and type safety. The function `calculateArea` calculates the area of different shapes. However, its current implementation might produce unexpected results or throw errors in certain situations.

The `bug.ts` file contains the buggy code. The `bugSolution.ts` file provides a corrected version that addresses the potential issues and enhances type safety.

## Bug Description

The original implementation incorrectly handles optional parameters and has a loose type check leading to unexpected results or errors.

## Bug Solution

The solution addresses the problem by improving the handling of optional parameters and type checks within the `calculateArea` function to ensure consistent and expected behavior for all input cases. This prevents unexpected errors and enhances overall type safety.