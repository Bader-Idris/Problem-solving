# briefs about each lesson

## 1st set 02-10

> To check exercises [**go to**](https://exercism.org/tracks/bash/exercises)

### two fer

[two-fer](./02-10/two_fer.sh) lesson has two main conditions, "" || filled strings and {input: true/false}
we can either ways:

* `if [[ ... ]]; then else fi`
* `function parameter` similar to js using Backtick/BackQuote
![Backtick/BackQuote?](./assets/image.png)

A mentor provided a great article to shorten the function parameter [**here**](https://www.gnu.org/software/bash/manual/html_node/Shell-Parameter-Expansion.html) named `Shell Parameter Expansion`

### Error handling

catching errors and handling them is critical in coding!
check the solution file [**here**](./02-10/error_handling.sh); the file has more info, check it out!

used concepts:

* argument length => `$#`; all stored args => `$@`
* `exit 1` non-zero status erroring

### raindrops

Raindrops is a slightly more complex version of the FizzBuzz challenge, a classic interview question. they said

> **instructions:** Your task is to convert a number into its corresponding raindrop sounds.

my first solution was boring and full of iterations, second one is provided by chatGPT's bito.

check its file [**here**](./02-10/raindrops.sh)

There's a Youtube video by the instructors providing 14 ways to solving it, [check it here](https://www.youtube.com/watch?v=mwe-9RIV39Y)

### Hamming

This exercise was tense and great in iteration and argument substring checking, I've explained about it in its file!
You can check its file [**here**](./02-10/hamming.sh)

And I learned that I'm able to use ternary conditioning in bash scripting, and `${1:i:1}` in a for loop is similar to subString method in js. which is called `Substring Expansion` in bash. so important, instead of using a crazy regExp as this: `sed -E 's/\b(\w)\w*/\1/g'`

```sh
for ((i=0; i<length; i++)); do
    char1=${1:i:1}
    char2=${2:i:1}
    if [ "$char1" != "$char2" ]; then
        ((count++))
    fi
done
```

### acronym

In this exercise, we'll be writing a program that converts a phrase to its acronym. as converting as soon as possible to ASAP

I used sed with three RegExps and `tr` to trim spaces, in this solution; You can check its file [**here**](./02-10/acronym.sh), some people usd `for in loops` with what I used earlier of subString method, check it:

```sh
for word in $words; do
  acronym+=${word:0:1}
done
# a professional coder provided this to me:
# pattern Substitution bash with Parameter Expansion
# bash case modification
# Parameter Transformation
# Shell Parameter Expansion
```

### Armstrong Numbers

Check its file [**here**](./02-10/armstrong_numbers.sh)
