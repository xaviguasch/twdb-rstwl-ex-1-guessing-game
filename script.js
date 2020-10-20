let maximum = parseInt(prompt('Enter the maximum number'))
while (!maximum) {
  maximum = parseInt(prompt('Enter a valid number!'))
}
const targetNum = Math.floor(Math.random() * maximum) + 1

console.log(targetNum)

let guess = parseInt(prompt('Guess a number!'))
let attemps = 1

while (parseInt(guess) !== targetNum) {
  if (guess === 'q') break
  attemps++
  if (guess < targetNum) {
    guess = prompt('Your guessed number was too low')
  } else if (guess > targetNum) {
    guess = prompt('Your guessed number was too high')
  }
}

if (guess === 'q') {
  console.log('you exited the game')
} else {
  console.log(
    `You got it right! The number was ${targetNum}, you did it in ${attemps} tries`
  )
}
