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
  return book.events ? calcStock(book.events) : 0;
};

const calcStock = (events: EventStock) => {
  return Object.values(events).reduce(
    (previous, current) => previous + current,
    0
  );
};
