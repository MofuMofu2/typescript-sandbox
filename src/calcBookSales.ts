type FanBook = {
  total: number;
  sample: number;
  stock: number;
  market: number;
  price: number;
};

type FanBooks = FanBook[];

export const countBookSales = (bookSale: FanBook) => {
  return bookSale.total - (bookSale.sample + bookSale.stock + bookSale.market);
};

export const calcBookSales = (bookSale: FanBook) => {
  return countBookSales(bookSale) * bookSale.price;
};
