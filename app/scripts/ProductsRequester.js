export default function getProductsObject(environment, callback) {
    const httpMethod = 'GET'
    const prodJson =
        'https://s3.glbimg.com/v1/AUTH_7b0a6df49895459fbafe49a96fcb5bbf/tiny/Prod/produtos.json'
    const qaJson =
        'https://s3.glbimg.com/v1/AUTH_7b0a6df49895459fbafe49a96fcb5bbf/tiny/Hom/produtos.json'
    const finalURL = window.tinyCpt.isProduction ? prodJson : qaJson
    const asyncRequest = false

    const requester = new XMLHttpRequest()

    requester.onreadystatechange = function () {
        if (requester.readyState === XMLHttpRequest.DONE) {
            callback(requester.responseText)
        }
    }

    requester.open(httpMethod, finalURL, asyncRequest)
    requester.send()
}
