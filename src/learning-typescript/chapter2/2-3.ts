export const updateType = () => {
  let rocker;
  rocker = "Joan Jett"; // evolving anyはstringとして推論される
  rocker.toUpperCase(); // stringメソッドは利用できる

  rocker = 19.58; // 今度はnumber
  return rocker.toPrecision(3);
};
