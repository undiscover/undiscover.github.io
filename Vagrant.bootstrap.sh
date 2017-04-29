#!/usr/bin/env bash

apt-get update

# Install node and npm
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
apt-get install -y nodejs

# Install stuff
apt-get install -y git

# Install dependencies
cd /vagrant
npm install