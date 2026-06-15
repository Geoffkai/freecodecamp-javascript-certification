const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const bookmarkListSection = document.getElementById("bookmark-list-section");
const addBookmarkBtn = document.getElementById("add-bookmark-button");
const closeFormBtn = document.getElementById("close-form-button");
const closeListBtn = document.getElementById("close-list-button");
const categoryDropdown = document.getElementById("category-dropdown");
const categoryList = document.getElementById("category-list");
const addBookmarkBtnForm = document.getElementById("add-bookmark-button-form");
const viewCategoryBtn = document.getElementById("view-category-button");
const nameEl = document.getElementById("name");
const urlEl = document.getElementById("url");
const categoryNames = document.querySelectorAll(".category-name");
const deleteBookmarkBtn = document.getElementById("delete-bookmark-button");

const getBookmarks = () => {
  try {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    if (
      Array.isArray(bookmarks) &&
      bookmarks.every((b) => b.name && b.category && b.url)
    ) {
      return bookmarks;
    }
    return [];
  } catch (e) {
    return [];
  }
};

const displayOrCloseForm = () => {
  mainSection.classList.toggle("hidden");
  formSection.classList.toggle("hidden");
};

const updateCategoryName = () => {
  categoryNames.forEach((el) => {
    el.innerText = `${categoryDropdown.value[0].toUpperCase() + categoryDropdown.value.slice(1)}`;
  });
};

addBookmarkBtn.addEventListener("click", () => {
  updateCategoryName();
  displayOrCloseForm();
});

closeFormBtn.addEventListener("click", displayOrCloseForm);

addBookmarkBtnForm.addEventListener("click", () => {
  const bookmarkObj = {
    name: nameEl.value,
    category: categoryDropdown.value,
    url: urlEl.value,
  };
  const bookmarks = getBookmarks();
  bookmarks.push(bookmarkObj);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  resetAddBookmark();
});

const resetAddBookmark = () => {
  nameEl.value = "";
  urlEl.value = "";
  displayOrCloseForm();
};

const displayOrHideCategory = () => {
  mainSection.classList.toggle("hidden");
  bookmarkListSection.classList.toggle("hidden");
};

const displayCategoryList = () => {
  categoryList.innerHTML = "";
  const bookmarks = getBookmarks();
  const selectedCategory = categoryDropdown.value;

  const filtered = bookmarks.filter(
    (bookmark) => bookmark.category === selectedCategory,
  );

  if (filtered.length === 0) {
    categoryList.innerHTML += `<p>No Bookmarks Found</p>`;
  } else {
    filtered.forEach((bookmark) => {
      categoryList.innerHTML += `
      <input type="radio" id="${bookmark.name}" value="${bookmark.name}" name="bookmark"/>
      <label for="${bookmark.name}"><a href="${bookmark.url}">${bookmark.name}</a></label>
    `;
    });
  }
};

viewCategoryBtn.addEventListener("click", () => {
  updateCategoryName();
  displayCategoryList();
  displayOrHideCategory();
});

closeListBtn.addEventListener("click", () => {
  displayOrHideCategory();
});

deleteBookmarkBtn.addEventListener("click", () => {
  const selected = document.querySelector(`input[name="bookmark"]:checked`);

  if (!selected) return; //nothing selected, do nothing

  const bookmarks = getBookmarks();
  const selectedCategory = categoryDropdown.value;

  const updated = bookmarks.filter(
    (b) => !(b.name === selected.value && b.category === selectedCategory),
  );

  localStorage.setItem("bookmarks", JSON.stringify(updated));
  displayCategoryList();
});
