class Request {
    constructor(url) {
        this.url = url
    }

    createRequest(method) {
        let request = new XMLHttpRequest()
        if ('withCredentials' in request) {
            request.open(method, this.url, true)
        }
        else if (typeof XDomainRequest !== 'undefined') {
            request = new XDomainRequest();
            request.open(method, this.url);
        }
        else {
            request = null
        }
        return request
    }

    get(onComplete) {
        const request = this.createRequest('GET')
        if (!request) {
            console.error('CORS not supported');
        }
        else {
            request.onload = function() {
                console.log('onloading')
                if (request.status !== 200) return;
                const response = JSON.parse(request.responseText);

                onComplete(response);
            }
            request.send()
        }
    }
}

export default Request
