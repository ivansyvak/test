function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
    }
}
function showPosition(position) {
    let data = [];
    let params = ['latitude', 'longtitude'];
    for (let param of params) {
        let encodedKey = encodeURIComponent(param);
        let encodedValue = encodeURIComponent(position.coords[param]);
        data.push(encodedKey + "=" + encodedValue);
    }
    let body = data.join("&");
    let method = "POST";
    let headers = {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
    };
    fetch('/location', { method, body, headers, mode: 'cors' })
        .then(response => response.json())
        .then(alert)
        .catch(alert);
    // http://93.79.103.147:3000/
}
getLocation();
//# sourceMappingURL=main.js.map