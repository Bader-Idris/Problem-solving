#!/usr/bin/env bash

# #!/bin/bash we use it as this in common

ARGUMENTS_YO() {
  if [[ $# -lt 1 || $# -gt 1 ]]; then
    echo "Usage: error_handling.sh <person>"
    exit 1  # Exit with a non-zero status to indicate an error
  elif [[ $# == 1 ]]; then
    echo "Hello, $1"
  fi
}
ARGUMENTS_YO "$@"

<<COMMUNITY_SOLUTIONS
if (( $# == 1 )) with exit 0 for good one!
if (( $# != 1 )) for not equal
if [ $# -eq 1 ]; for 0 one
if [ $# -ne 1 ]; for the error one

COMMUNITY_SOLUTIONS

<<STACK_DOC
$#    Stores the number of command-line arguments that 
      were passed to the shell program.
$?    Stores the exit value of the last command that was 
      executed.
$0    Stores the first word of the entered command (the 
      name of the shell program).
$*    Stores all the arguments that were entered on the
      command line ($1 $2 ...).
"$@"  Stores all the arguments that were entered
      on the command line, individually quoted ("$1" "$2" ...).
STACK_DOC