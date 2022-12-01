# JUMP2DIGITAL - Price Plans

This project is part of Jump2Digital Hackaton.
You can see the final result at the github pages - [click here](https://chaiben.github.io/Jump2Digital-PricePlans/)


## Requirements

The goal of this project is to implement the shop cards for 3 different plans.
![Requirements](./readme_assets/cards-requirement.png)

[You can see at Figma the required design here.](https://www.figma.com/file/8DTsCBsanZ0OEoLdiY1qzW/front_creator?node-id=4%3A194)

Also, when the user clicks the button the user should see a modal that asks for her/his email.

## How to install

Clone this repository
> `git clone https://github.com/chaiben/jumpdigital-planprecios.git`

Enter the project folder
> `cd shop-cards`

Install dependencies
> `npm install`

Run the project
> `npm start`

## How to deploy to git pages
1. Run the install process. 
2. Edit `package.json` homepage attribute to meet your git respository
3. Run
> `npm run deploy` 

## Folder structure
For this project I used the atomic strucutre - ref. 1-3.

Inside the components you will find the following folders
- pages
- templates
- UI
  - atoms
  - molecules
  - organisms

All company plans can be found at the JSON file `cards-data.json`

## Some metrics

[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=chaiben_jumpdigital-planprecios&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=chaiben_jumpdigital-planprecios)

[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=chaiben_jumpdigital-planprecios&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=chaiben_jumpdigital-planprecios)

[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=chaiben_jumpdigital-planprecios&metric=bugs)](https://sonarcloud.io/summary/new_code?id=chaiben_jumpdigital-planprecios)

[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=chaiben_jumpdigital-planprecios&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=chaiben_jumpdigital-planprecios)

[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=chaiben_jumpdigital-planprecios&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=chaiben_jumpdigital-planprecios)

[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=chaiben_jumpdigital-planprecios&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=chaiben_jumpdigital-planprecios)

[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=chaiben_jumpdigital-planprecios&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=chaiben_jumpdigital-planprecios)


## References
1. [Structuring your React Application — Atomic Design Principles](https://andela.com/insights/structuring-your-react-application-atomic-design-principles/)
2. [Atomic Design Pattern: How to structure your React application](https://medium.com/@janelle.wg/atomic-design-pattern-how-to-structure-your-react-application-2bb4d9ca5f97)
3. [How to Folder Structure Your React App | Everything You Need to Know](https://www.youtube.com/watch?v=uqKoqcO08ho&t=1495s)
