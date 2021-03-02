# react-learning
Big Dave's React learning repo


- Log in to GitHub
- Click on the Repositories tab from your profile dashboard
- Click on the green New button, on the right-hand side
- Choose a descriptive Repository name (using kebab-case)
- And give an optional Description
- Choose whether you want your repo to be Public or Private – in this case we’re choosing Public
- Check the box 'Initialize this repository with a README'
- Click on Add .gitignore
- And choose Node from the drop-down options
- Click on the green Create repository button.

Click the down arrow of green 'Code' button
Choose https and click the 'copy' symbol

Open Terminal
cd to the folder to clone the repo
	cd /Users/evansd/learning/react-learning 
Clone the repo
	git clone https://github.com/DrMadvibe/react-learning.git

Show untracked files
	git status

Add untracked files
- `% git add filename`
- `% git add -A` All
- `% git add *` everything

Commit files with message
	git commit -m "first commit"

Push files to remote (main)
	git push main 

Set local username
	git config user.name "DrMadvibe"  

Set local email address
	git config user.email drmadvibe@gmail.com
