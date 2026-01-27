#!/bin/bash

echo "🚀 Starting CI/CD Dashboard..."

# Load nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Use Node 18
nvm use 18

# Start the React app
npm start