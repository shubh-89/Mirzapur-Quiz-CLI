#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

let playerName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow(
    'I am sure that you have watched Mirzapur.\nSo this is the time to check your memory.\nLet the party begin...'
  );

  await sleep();
  rainbowTitle.stop();

  console.log(`
    ${chalk.bgBlue('HOW TO PLAY')} 
    I am a process on your computer.
    If you get any question wrong I will be ${chalk.bgRed('killed')}
    So get all the questions right...

  `);
}

async function handleAnswer(isCorrect) {
  const spinner = createSpinner('Checking answer...').start();
  await sleep();

  if (isCorrect) {
    spinner.success({ text: `Nice work ${playerName}. That's a legit answer` });
  } else {
    spinner.error({ text: `💀💀💀 Game over, you lose ${playerName}!` });
    process.exit(1);
  }
}

async function askName() {
  const answers = await inquirer.prompt({
    name: 'player_name',
    type: 'input',
    message: 'What is your name?',
    default() {
      return 'Player';
    },
  });

  playerName = answers.player_name;
}

function winner() {
  console.clear();
  figlet(`Congrats , ${playerName} !\n $ 1 , 0 0 0 , 0 0 0`, (err, data) => {
    console.log(gradient.pastel.multiline(data) + '\n');

    console.log(
      chalk.green(
        `Programming isn't about what you know; it's about making the command line look cool`
      )
    );
    process.exit(0);
  });
}

async function question1() {
  const answers = await inquirer.prompt({
    name: 'question_1',
    type: 'list',
    message: 'Who said this?\nTmhare papa bhi gaali diye the tum bhi diye ho\nVo bhi pele gye the\nTum bhi pele jaoge..\n',
    choices: ["Sharad", "Rati Shankar", "Munna Bhaiya", "Guddu Bhaiya"],
  });

  return handleAnswer(answers.question_1 === "Guddu Bhaiya");
}

async function question2() {
  const answers = await inquirer.prompt({
    name: 'question_2',
    type: 'list',
    message: 'Who said this to whom?\nKuch log bahubali peda hote h\nInko hm bnayenge..\n',
    choices: ["Kaleen Bhaiya to Maqbool", "Bauji to Kaleen Bhaiya", "Kaleen Bhaiya to Bauji", "Kaleen Bhaiya to JP Yadav"],
  });
  return handleAnswer(answers.question_2 === "Kaleen Bhaiya to Bauji");
}

async function question3() {
  const answers = await inquirer.prompt({
    name: 'question_3',
    type: 'list',
    message: "What is the famaous dialogue of Bharose vale Chacha?\n",
    choices:  ["Mamla izzat ka nhi dar ka h", "Mamla dar ka nhi izzat ka h", "Chacha pgl h unse na hopayega"],
  });

  return handleAnswer(answers.question_3 === "Mamla dar ka nhi izzat ka h");
}

async function question4() {
  const answers = await inquirer.prompt({
    name: 'question_4',
    type: 'list',
    message: "Who is shown alive in the post credit seen?\n",
    choices:["Bade Tyagi", "Chote Tyagi", "Dono zinda h chupan chupai khel rhe h", "Mene ye seen dekha hi nhi h"],
  });
  return handleAnswer(answers.question_4 === "Chote Tyagi");
}

async function question5() {
  const answers = await inquirer.prompt({
    name: 'question_5',
    type: 'list',
    message:
      "What did Sweety and Guddu had on their date?\n",
    choices: ["Sonepapdi", "Began ka bharta", "Nothing vo dono bhukhe hi rhe the", "Aloo Patiz"],
  });

  return handleAnswer(answers.question_5 === "Aloo Patiz");
}

async function question6() {
  const answers = await inquirer.prompt({
    name: 'question_6',
    type: 'list',
    message:
      "What Guddu ordered at Munna Bhaiya's house?\n",
    choices: ["Kadhi chawal", "Bundi ka raeta", "Eggs", "Kuch to order kiye the abhi yaad nhi h"],
  });

  return handleAnswer(answers.question_6 === "Eggs");
}

async function question7() {
  const answers = await inquirer.prompt({
    name: 'question_7',
    type: 'list',
    message:
      "What that Grocery Store person used to call Bablu's Mother?\n",
    choices: ["Aunty Ji", "Bhabhi Ji", "Panditayn", "Mata Shree"],
  });

  return handleAnswer(answers.question_7 === "Panditayn");
}

async function question8() {
  const answers = await inquirer.prompt({
    name: 'question_8',
    type: 'list',
    message:
      "What Golu was doing in the library?\n",
    choices: ["Vhi akele vala kaam", "Sleeping", "Eating", "Studying"],
  });

  return handleAnswer(answers.question_8 === "Studying");
}

// Run it with top-level await
console.clear();
await welcome();
await askName();
await question1();
await question2();
await question3();
await question4();
await question5();
await question6();
await question7();
await question8();
winner();