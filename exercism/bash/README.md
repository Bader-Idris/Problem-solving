# briefs about each lesson

## 1st set 02-10

> To check exercises [**go to**](https://exercism.org/tracks/bash/exercises)

### two fer

[two-fer](./02-10/two-fer.sh) lesson has two main conditions, "" || filled strings and {input: true/false}
we can either ways:

* `if [[ ... ]]; then else fi`
* `function parameter` similar to js using Backtick/BackQuote
![Backtick/BackQuote?](./assets/image.png)

### Error handling

catching errors and handling them is critical in coding!
check the solution file [here](./02-10/error-handling.sh); the file has more info, check it out!

used concepts:

* argument length => `$#`; all stored args => `$@`
* `exit 1` non-zero status erroring

### raindrops

Raindrops is a slightly more complex version of the FizzBuzz challenge, a classic interview question. they said

> **instructions:** Your task is to convert a number into its corresponding raindrop sounds.

check its file [here](./02-10/raindrops.sh)
