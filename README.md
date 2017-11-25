# checker-tron-3000

# About this Repository

This is repository is a personal project meant to develop and review the
following

* Creating a client-side using only HTML, CSS, and Javascript
* Creating a small server in Node.js, only using Express, and Jest
* Reviewing the DOM API, without using jQuery or MVC frameworks

# How to Run this application

## How to run the application

* fork this repository
* in the command line:
  ```
  git clone ...your forked repo url
  npm install
  npm start
  ```
  ## How to run the test suite
  uncomment the module.exports object in the models js file and run the
  following

```
npm test
```

# Tutorial Instructions

Implementation was not fulfilled over the span of the time alloted.

# Implementation Strategy

In order to accomplish functionality I wanted to focus primarily on the pieces
and the board as objects in the the program. Did not factor in the actual
players, and given the trouble I ran into debugging the test suite, I ended up
spending a little too much time on the game logic. In anycase, by focusing on
the pieces and defining the validity of the types of moves the piece can make
upon the board, and using functions to define diffent movements the pieces would
possibly make, made it easy to implement new logic into the game and define
nuanced moves.

# Google Tracker

No google was necessary for this iteration.

# TODO

* Render a game that two players can play, and have turn logic.
