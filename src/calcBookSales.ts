type FanBook = {
  total: number;
  sample: number;
  stock: number;
  market: number;
  price: number;
};

export const countBookSales = (arg: FanBook) => {
  return arg.total - (arg.sample + arg.stock + arg.market);
};

export const calcBookSales = (arg: FanBook, salesCount: number) => {
  return 59000;
};
