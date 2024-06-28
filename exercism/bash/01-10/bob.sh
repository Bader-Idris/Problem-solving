#!/bin/bash

# our robot responses are "Sure." "Whoa, chill out!" "Calm down, I know what I'm doing!" "Fine. Be that way!" "Whatever."
# put them in cases
chat_bot() {
  # ending with ?, if ("How are you?") =>  return "Sure."
  # if (YOU YELL AT HIM.) => return "Whoa, chill out!"
  # ending with !, if (you yell a Q at him) => return "Calm down, I know what I'm doing!"
  # if (silence || "") => reutrn "Fine. Be that way!"
  # else reutrn "Whatever."
  # inspired by https://pine.fm/LearnToProgram/chap_06.html


  # for ((i = 0; i < arg_length; i++)); do
  #   ((result += ${arg1:i:1} ** arg_length))
  # done

  local arg1=$1
  local arg_length=${#arg1}

  last_index="${arg1:$arg_length - 1:1}"
  if [[ $(echo "$arg1" | tr -dc 'A-Za-z') =~ ^[A-Z]+$ ]]; then
    echo "Whoa, chill out!"
  elif [[ ${last_index%} == "?" ]]; then
    echo "Sure."
  elif [[ $last_index == "!" ]]; then
    echo "Calm down, I know what I'm doing!"
  elif [[ $arg_length -eq 0 ]]; then
    echo "Fine. Be that way!"
  else echo "Whatever."
  fi
}

chat_bot "$@"


<<howdy
is_armstrong() {
  local arg1=$1  # Input number
  local arg_length=${#arg1}  # Length of the input number
  local result=0  # Initialize result
  for ((i = 0; i < arg_length; i++)); do
    ((result += ${arg1:i:1} ** arg_length))
  done
  [ $result -eq "$arg1" ] && echo true || echo false
}

is_armstrong "$@"
howdy