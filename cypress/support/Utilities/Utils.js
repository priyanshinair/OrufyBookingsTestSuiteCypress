//function to generate random name
export function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; // Characters to use
    let result = '';
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    
    return result;
  }

  //function to generate random 10 digit number
  export function number(){
    const numbers = "1234567890"
    let result;

    for(let i =0;i<=9;i++){
      const randomIndex = Math.floor(Math.random() * numbers.length);
      result += numbers[randomIndex];
    }
    return result;
  }
  

  //function to generate random email ids
export function generateRandomEmail() {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const domains = ['gmail.com', 'yahoo.com', 'outlook.com', 'example.com'];
    
    // Function to generate a random string of a given length
    function getRandomString(length) {
      let result = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
      }
      return result;
    }
    
    // Generate random username (6-12 characters)
    const username = getRandomString(Math.floor(Math.random() * 7) + 6);
  
    // Select a random domain
    const domain = domains[Math.floor(Math.random() * domains.length)];
    
    // Return the random email
    return `${username}@${domain}`;
  }
  