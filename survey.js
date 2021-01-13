const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const feedback = [];

rl.question('What\'s your name? ', (answer) => {
  feedback.push(answer);

  rl.question('What\'s an activity you like doing? ', (answer) => {
    feedback.push(answer);
    
    rl.question('What do you listen to while studying? ', (answer) => {
      feedback.push(answer);

      rl.question('Which meal is your favourite? ', (answer) => {
        feedback.push(answer);

        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => { 
          feedback.push(answer);

          rl.question('Which sport is your absolute favourite? ', (answer) => {
            feedback.push(answer);

            rl.question('What is your superpower? ', (answer) => {
              feedback.push(answer);

              console.log( '\n' + 'Your profile is ready:' + '\n' + '\n' +
                `My name is ${feedback[0]}. I really like ${feedback[1]}! When I study, I listen to ${feedback[2]} and my favourite meal is ${feedback[3]}. I consider it a good day when I eat ${feedback[4]} for ${feedback[3]}. During my freetime, I play ${feedback[5]}. My secret superpower is ${feedback[6]} but shhhhh it\'s a secret!`
              )

              rl.close();
            });
          });
        });
      });
    });
  });
});


