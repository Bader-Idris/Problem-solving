#!/bin/bash

# The quick brown fox jumps over the lazy dog.
is_pangram() {
  local arg1=$1
  # local arg1=${1^^}  # Convert to uppercase immediately
  # Initialize an associative array to track the presence of each letter
  local -A letters
  for ((i = 0; i < ${#arg1}; ++i)); do
    # substring method within for loop
    char=${arg1:i:1}
    if [[ $char =~ [a-zA-Z] ]]; then
      letters[${char^}]=1  # Convert to uppercase and mark as present
      # letters="${letters^}[${char^^}]"
    fi #! conver ˄ to be all not only 1 character, what about patterns instead of regExps
  done

  # Check if all 26 English letters are present
  [[ ${#letters[@]} -eq 26 ]] && echo "true" || echo "false"
}

is_pangram "$@"


<<sol1
arg1=$1
is_pangram() {
  # Remove non-alphabetic characters and convert to lowercase
  cleaned_input=$(echo "$arg1" | tr -dc 'a-zA-Z' | tr '[:upper:]' '[:lower:]')

  # Sort and remove duplicates
  unique_chars=$(echo $cleaned_input | grep -o . | sort -u | tr -d '\n')

  # Check if all 26 English letters are present
  [ ${#unique_chars} -eq 26 ] && echo "true" || echo "false"
}

is_pangram "$@"
sol1
