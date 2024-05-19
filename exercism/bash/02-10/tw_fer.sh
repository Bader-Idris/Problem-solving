#!/usr/bin/env bash

main () {
  if [[ -z $1 ]]; then
    echo "One for you, one for me."
  else
    echo "One for $1, one for me."
  fi
}
main "$1"

# this task asks to return the first condition
# when the user ignores adding any string
# aside to running the bash file as ./two-fer instead of ./two-fer name
# keep in mind that $1 isn't the same as using read keyword, read == prompt() value

# there are some different solutions as:

<<SOL
# this is how to use multi-line comments << then any name, then closing it down below
#!/usr/bin/env bash

echo "One for ${1:-you}, one for me."
SOL