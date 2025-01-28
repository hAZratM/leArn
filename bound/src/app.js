const books = document.getElementById("books");
const bookss = document.getElementById("book__card");
const taskCard = document.getElementById("task__add-card");
const form = document.querySelector("form");
const addButton = document.getElementById("task__add");

const inputElements = document.querySelectorAll("form input, form select");

function getValue() {
  const formData = {};
  inputElements.forEach((input) => {
    const key = input.id;
    const formedKey = key.slice(5, key.length);

    if (
      formedKey === "totalPages" ||
      formedKey === "publicationYear" ||
      formedKey === "rating"
    ) {
      const inputVal = Number(input.value);
      formData[formedKey] = inputVal;
    } else if (formedKey !== "isRead") {
      formData[formedKey] = input.value;
    } else {
      // console.log("ke:" + formedKey);
      // console.log(input.value);
      if (input.value === "yes") {
        formData[formedKey] = true;
      } else if (input.value === "no") {
        formData[formedKey] = false;
      }
    }
  });

  return {
    title: formData.title,
    genre: formData.genre,
    author: formData.author,
    totalPages: formData.totalPages,
    publicationYear: formData.publicationYear,
    isRead: formData.isRead,
    rating: formData.rating,
  };
}

addButton.addEventListener("click", () => {
  taskCard.classList.toggle("hidden");
});

const myLibrary = [
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
  title,
  genre,
  author,
  totalPages,
  publicationYear,
  isRead,
  rating
) {
  this.title = title;
  this.genre = genre;
  this.author = author;
  this.totalPages = totalPages;
  this.publicationYear = publicationYear;
  this.isRead = isRead;
  this.rating = rating;
}

function addBookToLibrary(
  title,
  genre,
  author,
  totalPages,
  publicationYear,
  isRead,
  rating
) {
  const book = new Book(
    title,
    genre,
    author,
    totalPages,
    publicationYear,
    isRead,
    rating
  );

  myLibrary.push(book);
}
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = getValue();
  console.log(formData);
  addBookToLibrary(
    formData.title,
    formData.genre,
    formData.author,
    formData.totalPages,
    formData.publicationYear,
    formData.isRead,
    formData.rating
  );

  // rerender & reset
  renderBooks();
  taskCard.classList.add("hidden");
  form.reset();

  console.log(myLibrary);
});

function renderBooks() {
  books.innerHTML = "";
  myLibrary.forEach((bk, index) => {
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

    const readStatus = document.createElement("button");
    readStatus.setAttribute("data-index", index);

    if (!bk.isRead) {
      readStatus.innerText = "To Read";
      readStatus.setAttribute("class", "not-read isRead font-l");
    } else {
      readStatus.innerText = "Completed";
      readStatus.setAttribute("class", "read isRead font-l");
    }

    readStatus.addEventListener("click", () => {
      myLibrary[index].isRead = !myLibrary[index].isRead;

      if (readStatus.classList.contains("read")) {
        readStatus.classList.remove("read");
        readStatus.classList.add("not-read");
        readStatus.innerText = "To Read";
      } else {
        readStatus.classList.remove("not-read");
        readStatus.classList.add("read");
        readStatus.innerText = "Completed";
      }
    });

    bookCard.appendChild(readStatus);
    books.prepend(bookCard);
  });
}

renderBooks();
// Remove the separate event listener setup since it's now handled in renderBooks
// Delete or comment out this part:
/*
const isRead = document.querySelectorAll(".isRead");
for (let i = 0; i < isRead.length; i++) {
  const currRead = isRead[i];
  currRead.addEventListener("click", (e) => {
      if (currRead.classList.contains("read")) {
          currRead.classList.toggle("read");
          currRead.classList.toggle("not-read");
          currRead.innerText = "To Read";
      } else {
          currRead.classList.toggle("not-read");
          currRead.classList.toggle("read");
          currRead.innerText = "Completed";
      }
  });
}
*/
