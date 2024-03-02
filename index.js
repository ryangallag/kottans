class Kottan {
    constructor(name, color, pattern) {
      this.name = name;
      this.color = color;
      this.pattern = pattern;
      this.isPlayful = true;
      this.energyLevel = 100;
    }
  
    play() {
      if (this.energyLevel > 0) {
        console.log(`${this.name} (a Kottan) is playing!`);
        this.energyLevel -= 10;
      } else {
        console.log(`${this.name} (a Kottan) is too tired to play.`);
      }
      this.checkPlayfulness();
    }
  
    sleep() {
      console.log(`${this.name} (a Kottan) is sleeping.`);
      this.energyLevel = 100;
      this.checkPlayfulness();
    }
  
    checkPlayfulness() {
      if (this.energyLevel > 50) {
        this.isPlayful = true;
        console.log(`${this.name} (a Kottan) is feeling playful!`);
      } else {
        this.isPlayful = false;
        console.log(`${this.name} (a Kottan) is not very playful right now.`);
      }
    }
  }
  
  // Example usage
  const kottan1 = new Kottan('Whiskers', 'Gray', 'Striped');
  const kottan2 = new Kottan('Mittens', 'White', 'Spotted');
  
  kottan1.play();
  kottan1.sleep();
  kottan2.play();
  