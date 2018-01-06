# Webpack Initial Configuration

This repo is an example *HowTo* create a webpack bundle project with multiple environments.

## Getting Started

Please follow instructions below to *setup and running* the project.

### Prerequisites

This is what you need to run the project:

```
* npm 4.6 or above
* NodeJS 6 or above
```

### Installing

```
* run npm install
* after dependencies were installed, run npm start
```

## Purpose of this project

The purpose of this project is to setup a bundle with webpack that can works nicely with Continuous Integration (CI) and Testing in multiple environments. To achieve the purpose we must configurate the project correctly using the following criterias:

* Webpack needs to be installed as a development dependency
* Webpack can be installed with a CI tool like Jenkins, Teamcity or equivalent
* Webback must has a config folder with separated environment files