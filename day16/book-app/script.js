let books = []; // 도서 목록 배열

// 도서 추가
function addBook() {
  const titleInput = document.getElementById("titleInput");
  const priceInput = document.getElementById("priceInput");

  const title = titleInput.value.trim();
  const price = parseInt(priceInput.value.trim(), 10);

  // 유효성 검사
  if (!title || isNaN(price) || price <= 0) {
    alert("도서 제목과 유효한 가격을 입력하세요.");
    return;
  }

  const book = { title, price };
  books.push(book);

  // DOM에 표시
  const li = document.createElement("li");
  li.className = "book-item";

  const span = document.createElement("span");
  span.textContent = `${book.title} - ${book.price}원`;

  const button = document.createElement("button");
  button.textContent = "삭제";
  button.onclick = function () {
    removeBook(button);
  };

  li.appendChild(span);
  li.appendChild(button);

  document.getElementById("bookList").appendChild(li);

  // 입력 초기화
  titleInput.value = "";
  priceInput.value = "";
}

// 도서 삭제
function removeBook(button) {
  const li = button.parentElement;
  const span = li.querySelector("span");
  const text = span.textContent;

  // 텍스트에서 제목 추출
  const [title] = text.split(" - ");

  // 배열에서 삭제
  books = books.filter((book) => book.title !== title);

  // DOM에서 제거
  li.remove();
}

// 도서 처리
function processBooks() {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = ""; // 초기화

  // map: 제목에 "Book: " 접두사 추가
  const mapped = books.map((book) => `Book: ${book.title} - ${book.price}원`);

  // filter: 10000원 이상인 도서
  const filtered = books
    .filter((book) => book.price >= 10000)
    .map((book) => `Book: ${book.title} - ${book.price}원`);

  // reduce: 총 가격
  const total = books.reduce((sum, book) => sum + book.price, 0);

  // 결과 구성
  const topList = mapped.map((item) => `<li>${item}</li>`).join("");
  const highList = filtered.map((item) => `<li>${item}</li>`).join("");

  resultsDiv.innerHTML = `
    <h3>상위 가격 도서:</h3>
    <ul>${topList}</ul>
    <h3>고가 도서:</h3>
    <ul>${highList}</ul>
    <h3>총 가격:</h3>
    <p>${total}원</p>
  `;
}
