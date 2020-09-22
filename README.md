# ScrabbleSolver

Basic tech test in JS and testing with Jest.

## Requirements:

Given a word, compute the Scrabble score for that word.

## Letter Values

You'll need these:
| Letter | Value |
|--------|-------|
| A, E, I, o, U, L, N, R, S, T | 1 |
| D, G | 2 |
| B, C, M, P | 3 |
| F, H, V, W, Y | 4 |
| K | 5 |
| J, X | 8 |
|Q, Z | 10 |

Example:
"cabbage" shoud be scored as 14 points:

* 3 points for C
* 1 point for A, twice
* 3 points for B, twice
* 2 points for G
* 1 point for E

## Acceptance Criteria

```
scrabble = Scrabble.new('')
scrabble.score # => 0

scrabble = Scrabble.new(" \t\n")
scrabble.score # => 0

scrabble = Scrabble.new(nil)
scrabble.score # => 0

scrabble = Scrabble.new('a')
scrabble.score # => 1

scrabble = Scrabble.new('f')
scrabble.score # => 4

scrabble = Scrabble.new('street')
scrabble.score # => 6

scrabble = Scrabble.new('quirky')
scrabble.score # => 22

scrabble = Scrabble.new('OXYPHENBUTAZONE')
scrabble.score # => 41
```
