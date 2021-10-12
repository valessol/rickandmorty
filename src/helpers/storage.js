//Almacenamiento de datos en el local storage
export const getLocalStorage = (keyName) => localStorage.getItem(keyName);

export const setLocalStorage = (keyName, value) =>
  localStorage.setItem(keyName, value);


//Almacenamiento de datos en el session storage
export const getSessionStorage = (keyName) => sessionStorage.getItem(keyName);

export const setSessionStorage = (keyName, value) =>
  sessionStorage.setItem(keyName, value);
