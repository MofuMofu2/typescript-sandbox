type FanBook = {
  total: number;
  sample?: number;
  stock?: number;
  market?: number;
  price: number;
};

type FanBooks = FanBook[];

export const countBookSales = (bookSale: FanBook) => {
  return bookSale.total - forSaleBooks(bookSale);
};

export const calcBookSales = (bookSale: FanBook) => {
  return countBookSales(bookSale) * bookSale.price;
};

export const countAllBooksSales = (sales: FanBook[]) => {
  let sale = 0;
  for (const book of sales) {
    sale += countBookSales(book);
  }
  return sale;
};

const forSaleBooks = (book: FanBook) => {
  if (book.sample && book.stock && book.market) {
    return book.sample + book.stock + book.market;
  } else if (book.sample && book.stock) {
    return book.sample + book.stock;
  } else if (book.sample) {
    return book.sample;
  } else {
    return 0;
  }
};
