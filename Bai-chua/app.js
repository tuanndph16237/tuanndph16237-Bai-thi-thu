var table = document.querySelector("#table")
var arrSp = [];

function getSp(query = "") {
    return fetch('http://localhost:3000/products?q='+ query).then(function (res) {
        return res.json()
    })
}
getSp().then(function (result){
    arrSp = result;
   render(result)
   afterRender()
});
function render(data){
    var content = "";

    if(data){
        data.forEach(function(sp, index){
            content += `
            <tr>
            <td>${index + 1}</td>
            <td>${sp.name}</td>
            <td>${sp.categories}</td>
            <td>${sp.description}</td>
            <td>${sp.images}</td>
            <td>${sp.saleprice}</td>
            <td>${sp.regularprice}</td>
            <td>${sp.rating}</td>
            </tr>
            `
        })
    }
}

var search_input = document.querySelector('#search-input')
var search_btn = document.querySelector('#search-btn')
search_btn.onclick = function(){
    var searched = arrSp.filter(function(sp){
        if(sp.name.includes(search_input.value)){
            return true
        } else{
            return false
        }
    })
    console.log(searched)

    render(searched)
}