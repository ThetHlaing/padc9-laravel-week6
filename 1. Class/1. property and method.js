    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
    // Add leg Property and sleep method

    class Animal {
      
      constructor(name,leg = 2) {
        this.name = name;   
        this.leg = leg;       
      }
      
      speak(){        
        console.log(`${1} ${1} speak`);
        //console.log(this.name + " speak" );
      }

      sleep(){
        
      }
    }
   
    let a = new Animal('Mitzie');    
    console.log(a.leg);
    a.speak();