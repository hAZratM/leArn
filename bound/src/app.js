const books = document.getElementById("books");
const bookss = document.getElementById("book__card");

// Append the book card to the parent container

const myLibrary = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    totalPages: 281,
    isRead: false,
    genre: "Fiction",
    publicationYear: 1960,
    rating: 4.8,
  },
  {
    title: "1984",
    author: "George Orwell",
    totalPages: 328,
    isRead: false,
    genre: "Dystopian",
    publicationYear: 1949,
    rating: 4.7,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    totalPages: 180,
    isRead: false,
    genre: "Classic",
    publicationYear: 1925,
    rating: 4.4,
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    totalPages: 277,
    isRead: false,
    genre: "Fiction",
    publicationYear: 1951,
    rating: 4.2,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    totalPages: 432,
    isRead: true,
    genre: "Romance",
    publicationYear: 1813,
    rating: 4.6,
  },
];

function Book(
  author,
  title,
  totalPages,
  isRead,
  genre,
  publicationYear,
  rating
) {
  this.author = author;
  this.title = title;
  this.totalPages = totalPages;
  this.isRead = isRead;
  this.genre = genre;
  this.publicationYear = publicationYear;
  this.rating = rating;
}

function addBookToLibrary(
  title,
  genre,
  author,
  isRead,
  totalPages,
  publicationYear,
  rating
) {
  const book = new Book(
    author,
    title,
    totalPages,
    isRead,
    genre,
    publicationYear,
    rating
  );
  myLibrary.push(book);
}

addBookToLibrary("author1", "title1", 100, false, "horror", 2010, 4.8);

myLibrary.forEach((bk) => {
  const bookCard = document.createElement("div");
  bookCard.setAttribute("id", "book__card");
  bookCard.setAttribute(
    "class",
    "bg-white shadow-xs rounded-md overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300"
  );

  const imageContainer = document.createElement("div");
  imageContainer.setAttribute("class", "object-cover");

  const img = document.createElement("img");
  img.setAttribute(
    "src",
    "https://picsum.photos/300/300?random=" + Math.random()
  );
  img.setAttribute("alt", "Random");

  imageContainer.appendChild(img);
  bookCard.appendChild(imageContainer);

  const title = document.createElement("h3");
  title.setAttribute("class", "text-xl font-l text-center mt-2");
  const titleSpan = document.createElement("span");
  titleSpan.setAttribute("class", "details");
  title.appendChild(titleSpan);
  bookCard.appendChild(title);

  const rating = document.createElement("p");
  rating.setAttribute(
    "class",
    "text-amber-800 text-md text-center font-d mb-4"
  );
  const ratingSpan = document.createElement("span");
  ratingSpan.setAttribute("class", "details");

  titleSpan.textContent = bk.title;
  ratingSpan.textContent = bk.rating;
  rating.appendChild(ratingSpan);
  bookCard.appendChild(rating);
  if (!bk.isRead) {
    const readStatus = document.createElement("p");
    readStatus.innerText = "Not Read";
    readStatus.setAttribute(
      "class",
      "font-l text-right mx-3 mb-3 py-1 text-sm rounded-full px-2 inline-block bg-red-50 hover:bg-red-200 hover:border-red-500 border border-red-400 text-end"
    );
    bookCard.appendChild(readStatus);
  } else {
    const readStatus = document.createElement("p");
    readStatus.innerText = "Read";
    readStatus.setAttribute(
      "class",
      "font-l text-right mx-3 mb-3 py-1 text-sm rounded-full px-2 inline-block bg-emerald-50 border hover:bg-emerald-200 border-emerald-400 hover:border-emerald-500 bottom"
    );
    bookCard.appendChild(readStatus);
  }

  books.appendChild(bookCard);
});

// make the read button work
// The task input form
