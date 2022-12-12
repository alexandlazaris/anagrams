# anagrams

Ever wondered how many changes are required to match 2 halves of one string? 

## Notes
- provided string must be a multiple of 2
- might not cover all duplicate scenarios 
- unit tests supported by https://jestjs.io/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes


## Good data
`134157` (there's an even split of string)

## Bad data
`52825` (there is no 'middle' to split evently into 2 halves)

## TODO
Need to improve logic to factor in duplicate values. E.g this array `[3,4,5,3,5,4,3,5]` needs 1 change however the current implementation is returning 0. 