function get(key) {
  return JSON.parse(localStorage.getItem(key)) || {};
}

function set(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getUserName() {
  return localStorage.getItem("username");
}
export function setUserName(username) {
  localStorage.setItem("username", username);
  // set default categories as we assume he is a new user
  const categories = {
      personal: {
          id: 'personal',
          todos: []
      },
      work: {
          id: 'work',
          todos: []
      }
  }
  set('categories', categories)
  return username;
}
export function getCategory(name) {
  const categories = get("categories");
  return categories[name];
}
export function getCategories() {
  return get("categories");
}
export function setTodo(category, todo) {
  const categories = get("categories");
  if (category in categories) {
    categories[category].todos.push(todo);
    set("categories", categories);
    return {
      msg: "Todo added."
    };
  } else {
    return {
      msg: "Category not existing."
    };
  }
}
export function setCategory(category) {
  const categories = get("categories");
  // Fixme is category and object or a string
  if (category in categories) {
    return {
      msg: "This category exists!",
      categories
    };
  } else {
    categories[category] = {
      name: category,
      todos: []
    };
    set("categories", categories);
    return {
      msg: "Category added"
    };
  }
}
