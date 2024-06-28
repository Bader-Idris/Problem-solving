#!/bin/bash

NUMBER=$1
RAINDROPS () {
  if [[ $NUMBER -eq 0 || $# -gt 1 ]]; then
    echo "Error: please provide a valid number"
    exit 1
  fi

  # Define divisor values and corresponding strings
  divisors=(3 5 7)
  strings=("Pling" "Plang" "Plong")

  raindrop=""
  for (( i=0; i<${#divisors[@]}; i++ )); do
    # if (( $NUMBER % ${divisors[i]} == 0 )) ${} is unncessary here
    if (( $NUMBER % divisors[i] == 0 )); then
      raindrop+="${strings[i]}"
    fi
  done

  # Output the raindrop string or the number if no match found
  echo "${raindrop:-$NUMBER}"
}

RAINDROPS "$@"

<<PRIOR_SOLUTION
#!/usr/bin/env bash

NUMBER=$1
RAINDROPS () {
  if [[ $NUMBER -eq 0 ]]; then
    echo "Error: please provide a valid number"
    exit 1;
  fi
  # while [ $NUMBER -gt 0 ]; do
    if (( $NUMBER == 1 )); then
      echo $NUMBER
    elif (( $NUMBER % 3 == 0 && $NUMBER % 5 == 0 && $NUMBER % 7 == 0 )); then
        echo "PlingPlangPlong"
    elif (( $NUMBER % 3 != 0 && $NUMBER % 5 == 0 && $NUMBER % 7 == 0 )); then
        echo "PlangPlong"
    elif (( $NUMBER % 3 == 0 && $NUMBER % 5 == 0 && $NUMBER % 7 != 0 )); then
        echo "PlingPlang"
    elif (( $NUMBER % 3 == 0 && $NUMBER % 5 != 0 && $NUMBER % 7 == 0 )); then
        echo "PlingPlong"
    elif (( $NUMBER % 3 == 0 )); then
        echo "Pling"
    elif (( $NUMBER % 5 == 0 )); then
        echo "Plang"
    elif (( $NUMBER % 7 == 0 )); then
        echo "Plong"
    elif (( $NUMBER )); then 
      echo $NUMBER
    fi
    
  # done
}
RAINDROPS "$@"

# the testers are providing 14 ways to solving it, OMG!
PRIOR_SOLUTION