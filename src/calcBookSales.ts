type FanBook = {
  total: number;
  price: number;
  events?: EventStock;
};

type EventStock = {
  sample?: number;
  stock?: number;
  market?: number;
};

export const countBookSales = (bookSale: FanBook) =>
  bookSale.total - forSaleBooks(bookSale);

export const calcBookSales = (bookSale: FanBook) =>
  countBookSales(bookSale) * bookSale.price;

export const calcAllBooksSales = (sales: FanBook[]) => {
  const allSales = {
    books: 0,
    sales: 0,
  };
  for (const book of sales) {
    allSales.books += countBookSales(book);
    allSales.sales += calcBookSales(book);
  }
  return allSales;
};

const forSaleBooks = (book: FanBook) => {
  if (book.events) {
    if (book.events.sample && book.events.stock && book.events.market) {
      return book.events.sample + book.events.stock + book.events.market;
    } else if (book.events.sample && book.events.stock) {
      return book.events.sample + book.events.stock;
    } else if (book.events.stock && book.events.market) {
      return book.events.stock + book.events.market;
    } else if (book.events.sample) {
      return book.events.sample;
    } else if (book.events.market) {
      return book.events.market;
    } else {
      return 0;
    }
  } else {
    return 0;
  }
};
