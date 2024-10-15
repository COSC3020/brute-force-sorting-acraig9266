I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
ChatGPT was used to write the main portion of the heaps permutation algorithm. I wrote the functions to check if the array was sorted and to count the number of permutations before it was sorted. The complexity analysis is all my own work.

# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

The average-case runtime for my implementation would be T(n) ∈ θ(n * n!). Checking if a permutation is O(n) and that is mutiplied with a multiple of n!. A best-case input for the implementation is a sorted array. It checks if the array is sorted when entered which takes θ(n) time and if it is sorted, it simply returns 1. The worst-case is being given a reverse-sorted array. It will perform every single possible permutation of the list before being found everytime it is given a reverse sorted array, or T(n) ∈ θ(n * n!). If it were to be attempted without any memory and doing random permutations until finding the sorted one, it would be about T(n) ∈ θ(n * n!) because unless there are duplicate entries, there only exists one sorted permutation out of n! total permutations. This means the odds of finding the sorted permutation each time is 1/n! so it should require n! permutations on average when creating them randomly and takes O(n) to check if its sorted. It is possible to go over n(n!) and will happen in practice sometimes, but it should average out to finding the sorted permutation after about n! permutations. It is in theory possible to create random permutations infinitely without finding the sorted one, but in practice is unlikely even with quite large inputs.
