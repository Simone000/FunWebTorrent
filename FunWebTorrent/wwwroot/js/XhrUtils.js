//No 'Access-Control-Allow-Origin' header is present on the requested resource
//it will download the entire file before calling onload
function DownloadFile_Xhr(url, fileName, success) {
    console.log("TestXhr");
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';

    xhr.onload = function (e) {
        console.log("TestXhr onload, response status code: " + this.status);
        if (this.status == 200) {
            // get binary data as a response
            var blob = this.response;

            var fr = new FileReader();
            fr.onload = function (evt) {
                console.log("FileReader onload");

                blob.lastModifiedDate = new Date();
                blob.name = fileName;

                //now it is a file
                console.log("now it is a file!");
                success(blob);
            }
            fr.readAsArrayBuffer(blob);
        }
    };
    console.log("TestXhr send xhr");
    xhr.send();
};

//Content-type: application/octet-stream
function DownloadFileAsStream_Xhr(url, fileName, success) {
    console.log("TestXhr");
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';

    xhr.onload = function (e) {
        console.log("TestXhr onload, response status code: " + this.status);
        if (this.status == 200) {
            // get binary data as a response
            var blob = this.response;

            var fr = new FileReader();
            fr.onload = function (evt) {
                console.log("FileReader onload");

                blob.lastModifiedDate = new Date();
                blob.name = fileName;

                //now it is a file
                console.log("now it is a file!");
                success(blob);
            }
            fr.readAsArrayBuffer(blob);
        }
    };
    console.log("TestXhr send xhr");

    xhr.setRequestHeader("Content-type", "application/octet-stream");
    //xhr.overrideMimeType("octet-stream; charset=x-user-defined;");
    xhr.send();
};