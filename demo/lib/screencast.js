importScripts('b64.js');
importScripts('LZWEncoder.js');
importScripts('NeuQuant.js');
importScripts('GIFEncoder.js');

self.onmessage = function(event) {

    // Configuration
    var width = event.data.width;
    var height = event.data.height;
    var imageDatas = event.data.imageDatas;

    // Init GIF
    var encoder = new GIFEncoder();
    encoder.setRepeat(0); // Automatically Loops
    encoder.setDelay(30); // TODO: Variable FPS
    encoder.setSize(width,height);
    encoder.start();

    // Progress event for each frame encoded
    for(var i=0;i<imageDatas.length;i++){
        encoder.addFrame( imageDatas[i], true );
        self.postMessage({
            type: "progress",
            data: i/imageDatas.length
        });
    }

    // Completion event for full gif
    encoder.finish();
    var rawGIF = 'data:image/gif;base64,'+encode64(encoder.stream().getData());
    self.postMessage({
        type: "progress",
        data: 1
    });
    self.postMessage({
        type: "complete",
        data: rawGIF
    });

}