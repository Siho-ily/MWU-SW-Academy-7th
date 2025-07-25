export function request(url, successCallback, failureCallback) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("load", () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                successCallback(JSON.parse(xhr.responseText));
            } else {
                failureCallback(xhr.statusText);
            }
        }
    });
    xhr.addEventListener("error", () => {
        failureCallback(xhr.statusText);
    });

    xhr.open("GET", url);
    xhr.send();
}
