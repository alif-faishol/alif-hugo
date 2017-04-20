#!/bin/bash

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

# Delete the old files
rm -rf public/*

# Build the project.
hugo # if using a theme, replace by `hugo -t <yourtheme>`
      
# Go To Public folder
cd public

# Connect to github
git init
git remote add origin https://github.com/alif-faishol/alif-faishol.github.io.git
# Add changes to git.
git add -A

# Commit changes.
msg="rebuilding site `date`"
if [ $# -eq 1 ]
      then msg="$1"
      fi
      git commit -a -m "$msg"
      
      # Push source and build repos.
      git push -f origin master
      
      # Come Back
      cd ..