# briefs about each lesson

## 1st set 01-10

> To check exercises [**go to**](https://exercism.org/tracks/bash/exercises)

### two fer

[two-fer](./01-10/two_fer.sh) lesson has two main conditions, "" || filled strings and {input: true/false}
we can either ways:

* `if [[ ... ]]; then else fi`
* `function parameter` similar to js using Backtick/BackQuote
![Backtick/BackQuote?](./assets/image.png)

A mentor provided a great article to shorten the function parameter [**here**](https://www.gnu.org/software/bash/manual/html_node/Shell-Parameter-Expansion.html) named `Shell Parameter Expansion`

### Error handling

catching errors and handling them is critical in coding!
check the solution file [**here**](./01-10/error_handling.sh); the file has more info, check it out!

used concepts:

* argument length => `$#`; all stored args => `$@`
* `exit 1` non-zero status erroring

### raindrops

Raindrops is a slightly more complex version of the FizzBuzz challenge, a classic interview question. they said

> **instructions:** Your task is to convert a number into its corresponding raindrop sounds.

my first solution was boring and full of iterations, second one is provided by chatGPT's bito.

check its file [**here**](./01-10/raindrops.sh)

There's a Youtube video by the instructors providing 14 ways to solving it, [check it here](https://www.youtube.com/watch?v=mwe-9RIV39Y)

### Hamming

This exercise was tense and great in iteration and argument substring checking, I've explained about it in its file!
You can check its file [**here**](./01-10/hamming.sh)

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

I used sed with three RegExps and `tr` to trim spaces, in this solution; You can check its file [**here**](./01-10/acronym.sh), some people usd `for in loops` with what I used earlier of subString method, check it:

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

This exercise was using in iterating through substrings in arguments, Check its file [**here**](./01-10/armstrong_numbers.sh)

*filbo* a mentor helped me in many tensive things of this exercise!

> quotes in shell are not as js to exclusive strings within, it means **protection from further parsing**

check this explanation:

```sh
1$ var="hello pwd"
2$ echo $var
hello pwd
3$ var=hey
4$ var=hello pwd
/home/filbo/exercism/mentoring/student
5$ echo $var
hey
6$ var="hello       pwd"
7$ echo $var
hello pwd
8$ echo "$var"
hello       pwd
9$ echo '$var'
$var
```

> Pre-increment is a bit faster than post-increment

why ++i is better than ++i, in for loops, simply because processor registers in most cases use less computing, see:

```sh
# pre-incrementing is
var1 = ++var2 + 9

<<view1

  load var2 into reg
  increment reg
  store reg into var2
  add 9 to reg
  store reg into var1

view1

# where post-incrementing is

var1 = var2++ + 9

<<view2

  load var2 into reg
  copy reg into reg2
  increment reg2
  store reg2 into var2
  add 9 to reg
  store reg into var1

view2
```

### Pangram

This checks if all English characters are included or not!
Check its file [**here**](./01-10/pangram.sh)

an example provided as the best example for this to check is:

```tsx
// The quick brown fox jumps over the lazy dog.
```

case insensitive, using regExp is the best for this!

A great approach to convert arg1 into uppercase immediately is:

```sh
local arg1=${1^^}
# no need to use complex suffering as letters[${char^}]=1 with iteration
```

### Bob

Check its file [**here**](./01-10/bob.sh)
