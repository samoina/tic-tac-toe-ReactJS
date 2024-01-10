# Tic Tac Toe Game

Tic Tac Toe is a classic two-player game that uses a 3X3 board layout. The players choose between two symols - either the X or the O. The end-goal of the game is to ensure that one's sybmols are arranged in a straight line - whether that's horizontally, diaognally or vertically.

This is an excellent challenge for web developers looking to hone their skills.

## Prerequisites

In order to create this game, the prerequisites are a good understanding of:

- HTML
- CSS
- Vanilla Javascript
- Fundamentals of React JS

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [My approach](#my-approach)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

This was inspired by the brief provided on the Frontend Mentor premium challenge for the Tic Tac Toe game.

### My approach

I shared my approach to this challenge in a blogpost ## My approach with REACTJS

After creating the Tic-tac-toe game using using Vanilla HTML, CSS and Javascript, I challenged myself to do the same and write down my approach using it in React JS. Interestingly, this is also provided in the official documentation for React on https://react.dev/learn/tutorial-tic-tac-toe

I decided to work it out on my own first and then compare my approach to that one provided in the React documentation.

I opted to use Vite and followed the steps below - i will be using pnpm instead of npm. pnpm stands for perfomant Node package manager. Quite frankly, I am yet to understand the inner workings of why pnpm is better than npm, but this link is a god place to start - https://dev.to/ayoub3bidi/lets-settle-things-out-2-npm-vs-yarn-vs-pnpm-5e04

To scafold my React App, I used Vite as follows:

- pnpm create vite@latest .
  the . at the end means create this project within the folder I am already in. Alternatively, add the folder name at the end of the command and then cd into it.

Follow the prompts provided: ie, Choose React & Javascript in my case.

- pnpm install
  This is to install the dependencies

- pnpm run dev
  this command initiates the "dev" script as defined in your package.json file. Typically, this command is employed to launch a development server that automatically refreshes when modifications are applied.

Since I also wanted to use Tailwind for this project, I followed the steps that I shared in this blogpost -

I also learned that one can use bun(https://bun.sh/#:~:text=Bun%20still%20installs%20your%20dependencies,Bun%20as%20a%20package%20manager.&text=Bun%20uses%20the%20fastest%20system,than%20you'd%20think%20possible) an npm-compatible package manager. bun installs dependencies into node modules pretty much the same way that npm does - its jusr faster.

### Screenshot

![]()

### Links

- Solution URL: [Github Link](https://github.com/samoina/tic-tac-toe-ReactJS)
- Live Site URL: [Netlify Link]()

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- React Javascript
- Tailwind CSS

### What I learned

### Continued development

I want to continue working on this project to allow for the following in the updates:

- View the optimal layout for the game depending on their device's screen size
- See hover states for all interactive elements on the page
- Play the game either solo vs the computer or multiplayer against another person
- Bonus 1: Save the game state in the browser so that it’s preserved if the player refreshes their browser
- Bonus 2: Instead of having the computer randomly make their moves, try making it clever so it’s proactive in blocking your moves and trying to win

### Useful resources

## Author

- Hashnode - [Samoina Codes](https://samoina.hashnode.dev/)
- Website - [Samoina Lives](https://samoinalives.wordpress.com/)
- Frontend Mentor - [Samoina](https://www.frontendmentor.io/profile/samoina)
- Twitter - [Samoina](https://www.twitter.com/samoina)
