onmessage = function(e) {
    var buffers = [];
    for (let i = 0; i < 2500; i++) {
        buffers.push(new ArrayBuffer(40965));
    }
    self.postMessage({data: buffers}, buffers);
};