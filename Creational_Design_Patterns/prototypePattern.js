// using Object.create as was recommended by ES5 standard
const car = {
    noOfWheels: 4,
    start() {
      return 'started';
    },
    stop() {
      return 'stopped';
    },
  };
  
  // Object.create(proto[, propertiesObject])
  
  const myCar = Object.create(car, { owner: { value: 'John' } });
  
  //myCar.owner = 'dany';
//   console.log((JSON.parse(JSON.stringify(myCar.owner = 'dany')))); // true
  console.log(myCar.hasOwnProperty('owner')); // true