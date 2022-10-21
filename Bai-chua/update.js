// Declaraion
var nameEl = document.querySelector('#name')
var decriptionEl = document.querySelector('#description')

// Lấy dữ liệu theo ID
function getSpByID(id) {
    return fetch('http://localhost:3000/products/' + id)
    .then(function (res) {
        return res.json()
    })
}

// Update dữ liệu
function putSp(data, id) {
    return fetch('http://localhost:3000/products/' + id, {
        method: "PUT", // phuong thuc cap nhat (update) RESTFull
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(function(res) {
        return res.json()
    })
}

var queryString = location.search
var param = new URLSearchParams(queryString)
var id = param.get('id')
if (id) {
    getSpByID(id).then(function (result) {
        console.log(result);
        nameEl.value = result.name
        decriptionEl.value = result.description
    })
}