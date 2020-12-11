
document.querySelector(".js-go").addEventListener('click', function () {
    var container = document.querySelector(".js-container");
    container.innerHTML = " ";
    var input = document.querySelector("input").value;
    // console.log(input);
    // pushToDOM(input);
    getData();

});

document.querySelector(".js-userinput").addEventListener('keyup', function (e) {
    
    var input = document.querySelector("input").value;
    // console.log(input);

    // if the key ENTER is pressed...
    if (e.which === 13) {
        var container = document.querySelector(".js-container");
        container.innerHTML = " ";
        // pushToDOM(input);
        getData();
    }

});

function getData() {

    /* 2. do the data stuff with the API */
    var url = "https://api.giphy.com/v1/gifs/search?q=";
    var input = document.querySelector("input").value;
    var key = "&api_key=dc6zaTOxFJmzC";
    var fullUrl = url+input+key

    // AJAX Request
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open('GET', fullUrl);
    GiphyAJAXCall.send();

    GiphyAJAXCall.addEventListener('load', function (e) {

        var data = e.target.response;
        //   console.log(data);
        // pushToDOM(data);
        var response = JSON.parse(data);

        var imageUrls = response.data;

        imageUrls.forEach(function (image) {

            var src = image.images.fixed_height.url;
            // console.log(src);

            var container = document.querySelector(".js-container");
            container.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";

        });

    });
}






/* 3. Show me the GIFs */

function pushToDOM(input) {

    var container = document.querySelector(".var-container");
    container.innerHTML = input;
    var container = document.querySelector(".js-container");

    container.innerHTML=null;

}


