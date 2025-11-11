function createCounter() {
  let count = 0; 

  return {
    increment: function() {
      count++;
      return new Promise(resolve => {
        setTimeout(() => {
          console.log(`Count after async update: ${count}`);
          resolve(count);
        }, 1000); 
      });
    }
  };
}


const counter = createCounter();

counter.increment(); 
counter.increment(); 
