//Create a function using arrow function synthax
const getUserChoice = userInput =>{

    //Call JavaScript's function to make inputs lowercases
      userInput= userInput.toLowerCase();
      
    //If statement to make sure user types valid choice
      if(userInput==='rock' || 'paper' || 'scissors' || 'bomb'){
        return userInput;
      } else {
       console.log('Error Message! This is an invalid choice')
     };
     }
    
    // Function that gets computer to make a choice.
     function getComputerChoice(){
       Math.floor(Math.random()*3);
    
       switch (Math.floor(Math.random()*3)){
         case 0:
            return 'rock';
            break;
         case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
       }
     }
    // Function to determine winner of the game
    const determineWinner = (userChoice,computerChoice) => {
        if(userChoice === 'bomb'){
            return 'You have won';
        };
        if(userChoice===computerChoice){
            return 'The game is a tie';}
        if (userChoice ==='rock'){
            if (computerChoice === 'paper'){
              return 'The Computer has won';
            } else {
              return 'You have won.'; }}
        if (userChoice==='paper'){
            if (computerChoice === 'scissors'){
               return 'The computer has won.'
            }  else {
               return 'You have won.'} }
        if (userChoice ==='scissors'){
            if (computerChoice === 'rock'){
               return 'The computer has won.'
            }  else {
               return 'You have won.';
            };
        };
        };
    
    //Make decision with user and computer input
    function playGame(){
      const userChoice = getUserChoice('paper');
      const computerChoice = getComputerChoice();
      console.log('You selected: ' + userChoice);
      console.log('The computer selected: ' + computerChoice);
    
      console.log(determineWinner(userChoice, computerChoice));
    };
    
    //Print result of game.
    playGame();
    