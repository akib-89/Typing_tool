#!/bin/bash
# This file is used to push the code to the main repository
# The script use 2 arguments
# 1. The commit message (mandatory)
# 2. The branch name (optional)
# @Author: Akib

# check if the user has provided the commit message
if [ $# -eq 0 ]
  then
    # if the user has not provided the commit message then we need to exit the script
    echo "ERROR: Usage: git.sh \"commit message\" [branch name]"
    exit 1
fi

# at first we need to add the files to the staging area
git add .

# now we need to commit the files with the provided message

git commit -m "$1"

# check if the user has provided the branch name
if [ $# -eq 2 ]
  then
    # if the user has provided the branch name 
    # then we need to push the code to that branch
    # after creating the branch (if it does not exist)
    branch_count=$(git branch | grep -x -c "* $2")
    if [ $branch_count -eq 0 ]
      then
        # if the branch does not exist then we need to create it
        git checkout -b $2
    fi
    # now we need to push the code to the provided branch
    git push origin $2
  else
    # if the user has not provided the branch name 
    # then we need to push the code to the branch user is currently working on
    
    # find the current branch name
    branch_name=$(git branch | grep -x -e "* .*" | cut -d " " -f 2)

    # echo the branch name
    echo "Pushing code to branch: $branch_name"
fi
