function calculateRectangleArea(lenght, width) {
  let area = lenght * width;
  if (area > 0) {
    return area;
  }
}
function calculateTriangleArea(base, height) {
  let area = base * height / 2;
  if (area > 0) {
    return area;
  }
}
function calculateCircleArea(radius) {
  let area = Math.PI * (radius * radius);
  if (radius > 0) {
    if (area > 0) {
      return area;
    }
  }
}
