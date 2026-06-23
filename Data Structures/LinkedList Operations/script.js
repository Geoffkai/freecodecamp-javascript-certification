function initList() {
  return {
    head: null,
    length: 0,
  };
}

function isEmpty(list) {
  return list.length === 0;
}

function add(list, element) {
  const node = { element, next: null };

  if (isEmpty(list)) {
    list.head = node;
  } else {
    let current = list.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
  }

  list.length++;
}

function remove(list, element) {
  let previous = null;
  let current = list.head;

  while (current !== null && current.element !== element) {
    previous = current;
    current = current.next;
  }

  if (current === null) return;

  if (previous !== null) {
    previous.next = current.next;
  } else {
    list.head = current.next;
  }

  list.length--;
}

function contains(list, element) {
  let current = list.head;
  while (current !== null) {
    if (current.element === element) {
      return true;
    }
    current = current.next;
  }
  return false;
}

function getAt(list, index) {
  if (list.length <= index || index < 0) {
    return undefined;
  }
  let result = list.head;
  for (let i = 0; i < index; i++) {
    result = result.next;
  }
  return result.element;
}

function insertAt(list, index, element) {
  if (index > list.length || index < 0) {
    return list;
  }
  if (index === 0) {
    list.head = { element: element, next: list.head };
  } else {
    let previous = list.head;
    for (let i = 0; i < index - 1; i++) {
      previous = previous.next;
    }
    previous.next = { element: element, next: previous.next };
  }
  list.length++;
  return list;
}

function removeAt(list, index) {
  if (index < 0 || index >= list.length) {
    return list;
  }
  if (index === 0) {
    list.head = list.head.next;
  } else {
    let previous = null;
    let current = list.head;
    for (let i = 0; i < index; i++) {
      previous = current;
      current = current.next;
    }
    previous.next = current.next;
  }
  list.length--;
  return list;
}

function clear(list) {
  list.head = null;
  list.length = 0;
}
