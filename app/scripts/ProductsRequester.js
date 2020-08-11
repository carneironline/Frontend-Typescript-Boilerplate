export default function getProductsObject(environment, callback) {
    const httpMethod = 'GET'
    const prodJson =
        'https://s3.glbimg.com/v1/AUTH_3426e47ed6784b729ddc152696060e4c/tiny/products.json'
    const qaJson =
        'https://s3.glbimg.com/v1/AUTH_a00f952f76904b5ca11e8426a3b0c8f8/tiny/products.json'
    let finalURL = qaJson
    const asyncRequest = false

    if (environment === 'prd') finalURL = prodJson

    const requester = new XMLHttpRequest()

    requester.onreadystatechange = function () {
        if (requester.readyState === XMLHttpRequest.DONE) {
            callback(requester.responseText)
        }
    }

    requester.open(httpMethod, finalURL, asyncRequest)
    requester.send()
}
