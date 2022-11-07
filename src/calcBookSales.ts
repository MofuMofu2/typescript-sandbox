type FanBook = {
  total: number;
  sample: number;
  stock: number;
  market: number;
};

export const countBookSales = (arg: FanBook) => {
  return arg.total - (arg.sample + arg.stock + arg.market);
};
