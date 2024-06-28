#!/bin/bash

# As Soon As Possible	ASAP
# Liquid-crystal display	LCD
# Thank George It's Friday!	TGIF

ACRONYM() {
  decoded_string=$(echo "$1" | sed -E "s/[^a-zA-Z']/ /g" | sed "s/'//g")
  acronym_result=$(echo "$decoded_string" | sed -E 's/\b(\w)\w*/\1/g' | tr -d ' ' | tr '[:lower:]' '[:upper:]')
  echo "$acronym_result"
}

ACRONYM "$@"
