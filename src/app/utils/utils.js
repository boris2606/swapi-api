function customEncodeURIComponent(str) {
    return encodeURIComponent(str).replace(/%20/g, "+");
}

function customDecodeURIComponent(str) {
    return decodeURIComponent(str).replace(/\+/g, "%20");
}

export { customEncodeURIComponent, customDecodeURIComponent };
