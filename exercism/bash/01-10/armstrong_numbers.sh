#!/bin/bash

# An Armstrong number is a number that is the sum of its own digits each raised to the power of the number of digits.

# put many lines under power of number of digits!

# 153 is an armstrong number
# 9 is. 9 = 9^1 = 9
# 10 isn't. 10 != 1^2 + 0^2 = 1

# Description: Check if a number is an Armstrong number.
# Usage: ./script.sh <number>
# Example: ./script.sh 153


is_armstrong() {
  local arg1=$1              # Input number
  local arg_length=${#arg1}  # Length of the input number
  local result=0             # Initialize result

  # for ((i=0; i<arg_length; i++)); do
  #   char=${arg1:i:1}
  #   powered=$((char ** arg_length))
  #   result=$((result + powered))
  # done
  for ((i = 0; i < arg_length; i++)); do
    # digit=${arg1:i:1}
    # result=$((result + (digit ** arg_length)))
    # result=$((result + (${arg1:i:1} ** arg_length)))
    ((result += ${arg1:i:1} ** arg_length))
    # result+=$((result + (${arg1:i:1} ** arg_length)))
  done

  # ((result == arg1)) && echo true || echo false
  [ $result -eq "$arg1" ] && echo true || echo false
  # [ $result -eq $arg1 ] && echo "true" || echo "false" # no need for protection
  # if [ $result -eq $arg1 ]; then
  #   echo "true"
  # else
  #   echo "false"
  # fi
}

is_armstrong "$@"