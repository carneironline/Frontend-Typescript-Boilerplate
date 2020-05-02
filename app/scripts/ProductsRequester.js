export default function getProductsObject(environment, callback) {
    var productsJson = {};

    var httpMethod = 'GET';
    var qaJson = 'https://s3.glbimg.com/v1/AUTH_3426e47ed6784b729ddc152696060e4c/Barreiras/products.json';
    var asyncRequest = true;
    var allowCrossOrigin = 'Access-Control-Allow-Origin';
    var allOrigin = '*';
    var responseType = 'json';

    var requester = new XMLHttpRequest();

    requester.onreadystatechange = function(){
        if (requester.readyState === XMLHttpRequest.DONE){
            callback(requester.responseText);
        }
    };

    requester.open(httpMethod, qaJson, asyncRequest);
    requester.setRequestHeader(allowCrossOrigin, allOrigin);
    requester.responseType = responseType;
    requester.send();
}