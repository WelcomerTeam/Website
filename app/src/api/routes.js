export function doRequest(method, url, data, callback, errorCallback) {
  fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : null,
  })
    .then((response) => {
      callback(response);
    })
    .catch((error) => {
      errorCallback(error);
    });
}

export function doLogin() {
  let url = new URL(window.location.href);
  url.pathname = "/login";
  url.searchParams.append("path", window.location.pathname);

  window.location.href = url;
}
