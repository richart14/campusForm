/* global $ */

const api = (() => {
  const post = (path, obj) => {
    return $.ajax({
      type: 'POST',
      url: path,
      dataType: 'json',
      data: JSON.stringify(obj),
    });
  };
  return {
    post
  };
})();