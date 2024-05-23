#!/bin/bash

# this exercise focuses on distingusihg two srings
#  as the word {i to e} in wire were
# It's called "Hamming Distance"
# then we return the length of difrerent letters
# args are two strings!

HAMMING_DISTANCE () {
  if [[ $# -ne 2 ]]; then
    echo "Usage: hamming.sh <string1> <string2>"
    exit 1;
  fi
  if (( ${#1} != ${#2} )); then
    echo "strands must be of equal length";
    exit 1;
  fi
  # len1=${#1}
  # len2=${#2}
  # length=$((len1 > len2 ? len1 : len2))
  length=${#1}
  count=0
  for ((i=0; i<length; i++)); do
    char1=${1:i:1}
    char2=${2:i:1}
    if [ "$char1" != "$char2" ]; then
        ((count++))
    fi
  done
  echo $count
}
HAMMING_DISTANCE "$@"
