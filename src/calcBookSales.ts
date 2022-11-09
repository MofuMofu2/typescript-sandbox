type FanBook = {
  total: number;
  sample?: number;
  stock?: number;
  market?: number;
  price: number;
};

export const countBookSales = (bookSale: FanBook) =>
  bookSale.total - forSaleBooks(bookSale);

export const calcBookSales = (bookSale: FanBook) =>
  countBookSales(bookSale) * bookSale.price;

export const countAllBooksSales = (sales: FanBook[]) => {
  let sale = 0;
  for (const book of sales) {
    sale += countBookSales(book);
  }
  return sale;
};

export const calcAllBooksSales = (sales: FanBook[]) => {
  let sale = 0;
  for (const book of sales) {
    sale += calcBookSales(book);
  }
  return sale;
};

const forSaleBooks = (book: FanBook) => {
  if (book.sample && book.stock && book.market) {
    return book.sample + book.stock + book.market;
  } else if (book.sample && book.stock) {
    return book.sample + book.stock;
  } else if (book.stock && book.market) {
    return book.stock + book.market;
  } else if (book.sample) {
    return book.sample;
  } else if (book.market) {
    return book.market;
  } else {
    return 0;
  }
};
