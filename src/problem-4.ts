// Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

type Circle = { shape: "circle"; radius: number };
type Rectangle = { shape: "rectangle"; width: number; height: number };

const calculateShapeArea = (shape: Circle | Rectangle): number => {
  if (shape.shape === "circle") {
    return Math.PI * shape.radius * shape.radius;
  } else if (shape.shape === "rectangle") {
    return shape.width * shape.height;
  } else {
    throw new Error("");
  }
};

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
const rectangleArea = calculateShapeArea({ shape: "rectangle", height: 4,width: 8 });
console.log('Circle area :',circleArea); 
console.log('Rectangle area :',rectangleArea); 

