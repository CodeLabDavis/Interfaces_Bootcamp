// Initialize Airplane Type
type Airplane = {
  milesTraveled: number,
  gallonsUsed: number,
  wingSpan: number,
};

// Initialize Car type
type Car = {
  milesTraveled: number,
  gallonsUsed: number,
  engineType: "gas" | "hybrid",
};

// Initialize Various Objects
const airplane1: Airplane = {
  milesTraveled: 10,
  gallonsUsed: 10,
  wingSpan: 100
};

const car1: Car = {
  milesTraveled: 10,
  gallonsUsed: 10,
  engineType: "gas"
};

// Initialize User Object that is incompatible with interface
const user1 = {
  name: "Chris",
  age: 18
};

// Create interface vehicle
interface Vehicle {
  milesTraveled: number,
  gallonsUsed: number,
}

// Calculate Average MPG method that utilizes Vehicle Interface
const calculateAverageMPG = (vehicle: Vehicle): number => {
  return vehicle.milesTraveled / vehicle.gallonsUsed;
};

// Console log for calculating MPG
console.log(`Car has an MPG of ${calculateAverageMPG(car1)}`);
console.log(`Airplane has an MPG of ${calculateAverageMPG(airplane1)}`);

// Error here as user1 does not conform to the Vehicle Interface
// calculateAverageMPG(user1);