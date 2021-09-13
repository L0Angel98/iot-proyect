export default (function () {
  return {
    set: (key, value) => {
      localStorage.setItem(key, JSON.stringify(value));
    },
    get: (key) => {
      const value = localStorage.getItem(key);
      return value == undefined ? undefined : JSON.parse(value);
    },
    remove: (key) => {
      localStorage.removeItem(key);
    },
  };
})();
