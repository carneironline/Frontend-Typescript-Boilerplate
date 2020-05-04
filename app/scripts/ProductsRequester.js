export default function getProductsObject(environment, callback) {
    var productsJson = {};

    var httpMethod = 'GET';
    var qaJson = 'https://s3.glbimg.com/v1/AUTH_a00f952f76904b5ca11e8426a3b0c8f8/tiny/products.json';
    var asyncRequest = true;

    var requester = new XMLHttpRequest();

    requester.onreadystatechange = function(){
        if (requester.readyState === XMLHttpRequest.DONE){
            callback(requester.responseText);
        }
    };

    requester.open(httpMethod, qaJson, asyncRequest);
    requester.send();
}