function calculateArea(shape: string, width: number, height?: number): number {
  switch (shape) {
    case "rectangle":
      return width * (height || width); // Corrected handling of optional height
    case "triangle":
      if (height === undefined) {
        throw new Error("Height is required for triangles.");
      }
      return 0.5 * width * height;
    default:
      throw new Error("Unsupported shape: "+ shape);
  }
}

console.log(calculateArea("rectangle", 5, 10)); // 50
console.log(calculateArea("rectangle", 5)); // 25
console.log(calculateArea("triangle", 5, 10)); // 25
console.log(calculateArea("circle", 5, 10));// throws error