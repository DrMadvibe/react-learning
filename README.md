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

## Show untracked files
	`% git status`

## Add untracked files
- `% git add filename`
- `% git add -A` All
- `% git add *` everything

## Commit files with message
	`% git commit -m "first commit"`

## Push commits to a remote repo
	`% git push origin main`

## Set local username
	`% git config user.name "DrMadvibe" `

## Set local email address
	`% git config user.email drmadvibe@gmail.com`

## Push to remote repo
	`% git push origin main`

## Error
remote: Permission to DrMadvibe/react-learning.git denied to hdfeddavidevans.
fatal: unable to access 'https://github.com/DrMadvibe/react-learning.git/': The requested URL returned error: 403

## Install webpack & webpack-cli (command line interface) as dev dependencies
	`% npm install webpack webpack-cli --save-dev`

## Error - reason: unable to get local issuer certificate
	`% npm config set registry http://registry.npmjs.org/`

## Install babel as dev dependencies
	`% npm install @babel/core @babel/preset-env @babel/preset-react babel-loader --save-dev`

## Create webpack.config.js file
	`% touch webpack.config.js`

## Create babel config file
	`% touch .babelrc`

## Install React & React Dom as a dependency
	`% npm install react react-dom --save`

Source: http://dpwit.co.uk/how-to/