const generateElement = () => Math.floor(Math.random() * 100) + 1;

const generateArray = () => {
  const randomInt = [];
  for (let i = 0; i < 5; i++) {
    randomInt.push(generateElement());
  }
  return randomInt;
};

const generateContainer = () => document.createElement("div");

const fillArrContainer = (element, arr) => {
  for (const n of arr) {
    const span = document.createElement("span");
    span.textContent = n;
    element.appendChild(span);
  }
};

const isOrdered = (int1, int2) => int1 <= int2;

const swapElements = (arr, index) => {
  if (!isOrdered(arr[index], arr[index + 1])) {
    const temp = arr[index];
    arr[index] = arr[index + 1];
    arr[index + 1] = temp;
  }
};

const highlightCurrentEls = (element, index) => {
  element.children[index].style.border = "2px dashed red";
  element.children[index + 1].style.border = "2px dashed red";
};

const generateBtn = document.getElementById("generate-btn");
const startingArrEl = document.getElementById("starting-array");
const arrayContainerEl = document.getElementById("array-container");
const sortBtn = document.getElementById("sort-btn");

generateBtn.addEventListener("click", () => {
  // remove every child of #array-container except #starting-array
  [...arrayContainerEl.children].forEach((child) => {
    if (child !== startingArrEl) {
      child.remove();
    }
  });

  // clear old numbers and fill with five fresh ones
  startingArrEl.innerHTML = "";
  fillArrContainer(startingArrEl, generateArray());
});

const bubbleSort = (arr) => {
  let firstStep = true;
  let swapping = true;

  while (swapping) {
    swapping = false;
    for (let j = 0; j < arr.length - 1; j++) {
      // render the comparison BEFORE swapping (highlight the pair being compared)
      if (firstStep) {
        startingArrEl.innerHTML = "";
        fillArrContainer(startingArrEl, arr); // #starting-array = first step
        highlightCurrentEls(startingArrEl, j);
        firstStep = false;
      } else {
        const stepDiv = generateContainer();
        fillArrContainer(stepDiv, arr);
        highlightCurrentEls(stepDiv, j);
        arrayContainerEl.appendChild(stepDiv);
      }
      // then compare & swap
      if (!isOrdered(arr[j], arr[j + 1])) {
        swapElements(arr, j);
        swapping = true; // a swap happened → we need another pass
      }
    }
  }

  // final sorted div
  const sortedDiv = generateContainer();
  sortedDiv.id = "sorted-array";
  fillArrContainer(sortedDiv, arr);
  arrayContainerEl.appendChild(sortedDiv);
};

sortBtn.addEventListener("click", () => {
  // read the current numbers out of #starting-array's spans FIRST
  const arr = [...startingArrEl.children].map((span) =>
    Number(span.textContent),
  );

  // remove old step divs but KEEP #starting-array
  [...arrayContainerEl.children].forEach((child) => {
    if (child !== startingArrEl) {
      child.remove();
    }
  });

  bubbleSort(arr);
});
