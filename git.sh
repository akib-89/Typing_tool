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
    echo git branch -a | grep -q "$2"
  else
    # if the user has not provided the branch name then we need to push the code to the master branch
    git push origin master
fi
