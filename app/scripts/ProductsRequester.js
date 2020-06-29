export default function getProductsObject(environment, callback) {
    var httpMethod = 'GET';
    var prodJson = 'https://s3.glbimg.com/v1/AUTH_3426e47ed6784b729ddc152696060e4c/tiny/products.json';
    var qaJson = 'https://s3.glbimg.com/v1/AUTH_a00f952f76904b5ca11e8426a3b0c8f8/tiny/products.json';
    var finalURL = '';
    var asyncRequest = false;

    if (environment === 'prd')
        finalURL = prodJson;
    else
        finalURL = qaJson;

    var requester = new XMLHttpRequest();

    requester.onreadystatechange = function(){
        if (requester.readyState === XMLHttpRequest.DONE){
            callback(requester.responseText);
        }
    };

    requester.open(httpMethod, qaJson, asyncRequest);
    requester.send();
}