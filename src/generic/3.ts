// Task 3

function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB);
}

export {};
