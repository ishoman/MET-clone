# METClone

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

# Beep Boop

#### A program that allows users to input a number and returns certain values based on certain rules. 3/28/2018

#### By **Isaac Shoman**

## Description

A website created with JS and HTML that allows a user to input a number and returns a .


### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Program replaces 0 with "Beep!".** | User input: "0" | Output: [Beep!]|
| **Program replaces 1 with "Boop!" ** | User input: "1" | Output: [Beep! Boop!]|
| **Program replaces numbers divisible by 3 with "I'm sorry, Dave. I'm afraid I can't do that."** | User input: "3" | Output: "Beep!, Boop!, 2, I'm sorry, Dave. I'm afraid I can't do that."|
| **Program ignores other numbers that don't meet these **| Input: "10" | Output: "4 3 2 1 0" |
| **Program ignores other numbers that don't meet these **| Input: "12" | Output: "Beep!, Boop!, 2, ...Boop! Boop! I'm sorry, Dave. I'm afraid I can't do that." |
| **Program is able to reverse the output.**| Input: "4" | Output: "4, I'm sorry, Dave. I'm afraid I can't do that., 2, Boop!, Beep!" |

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
