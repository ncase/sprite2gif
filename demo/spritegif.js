
var dropbox = document.getElementById("dropbox");
function dragenter(e) {
	e.stopPropagation();
	e.preventDefault();
}
function dragover(e) {
	e.stopPropagation();
	e.preventDefault();
}
function drop(e) {
	e.stopPropagation();
	e.preventDefault();

	var dt = e.dataTransfer;
	var files = dt.files;

	handleFiles(files);
}
function handleFiles(files){

	var file = files[0];
    
    /*if (!file.type.match(imageType)) {
      continue;
    }*/
    
    var reader = new FileReader();
    reader.onload = function(e) { 
		spritesheet_image.src = e.target.result; 
	}; 
    reader.readAsDataURL(file);

}
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);


/////////////////////

var IMAGE_LOADED = false;

var spritesheet_image = document.getElementById("spritesheet_image");
var spritesheet_json = document.getElementById("spritesheet_json");

function loadExample(example){

	IMAGE_LOADED = false;
	spritesheet_image.onload = function(){
		IMAGE_LOADED=true;
	};

    switch(example){
        case "monster":
            spritesheet_image.src = "sprites/Fluppit.png";
            spritesheet_json.value = '{"frames":[{"filename":"Fluppit0000","frame":{"x":10,"y":10,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0001","frame":{"x":210,"y":10,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0002","frame":{"x":410,"y":10,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0003","frame":{"x":610,"y":10,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0004","frame":{"x":810,"y":10,"w":190,"h":224},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":10,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0005","frame":{"x":1010,"y":10,"w":190,"h":224},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":10,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0006","frame":{"x":1210,"y":10,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0007","frame":{"x":1410,"y":10,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0008","frame":{"x":1610,"y":10,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0009","frame":{"x":1810,"y":10,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0010","frame":{"x":10,"y":244,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0011","frame":{"x":210,"y":244,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0012","frame":{"x":410,"y":244,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0013","frame":{"x":610,"y":244,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0014","frame":{"x":810,"y":244,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0015","frame":{"x":1010,"y":244,"w":196,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0016","frame":{"x":1216,"y":244,"w":202,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0017","frame":{"x":1428,"y":244,"w":204,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0018","frame":{"x":1642,"y":244,"w":207,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0019","frame":{"x":10,"y":477,"w":216,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0020","frame":{"x":236,"y":477,"w":216,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0021","frame":{"x":462,"y":477,"w":216,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0022","frame":{"x":688,"y":477,"w":216,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0023","frame":{"x":914,"y":477,"w":216,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0024","frame":{"x":1140,"y":477,"w":209,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0025","frame":{"x":1359,"y":477,"w":203,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0026","frame":{"x":1572,"y":477,"w":199,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0027","frame":{"x":1781,"y":477,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0028","frame":{"x":10,"y":710,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0029","frame":{"x":210,"y":710,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0030","frame":{"x":410,"y":710,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0031","frame":{"x":610,"y":710,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0032","frame":{"x":810,"y":710,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0033","frame":{"x":1010,"y":710,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0034","frame":{"x":1210,"y":710,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0035","frame":{"x":1410,"y":710,"w":190,"h":224},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":10,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0036","frame":{"x":1610,"y":710,"w":190,"h":224},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":10,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0037","frame":{"x":1210,"y":10,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0038","frame":{"x":1810,"y":710,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0039","frame":{"x":10,"y":944,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0040","frame":{"x":210,"y":944,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0041","frame":{"x":410,"y":944,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0042","frame":{"x":610,"y":944,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0043","frame":{"x":810,"y":944,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0044","frame":{"x":1010,"y":944,"w":190,"h":224},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":10,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0045","frame":{"x":1210,"y":944,"w":190,"h":224},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":10,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0046","frame":{"x":1410,"y":944,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0047","frame":{"x":1610,"y":944,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0048","frame":{"x":1810,"y":944,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0049","frame":{"x":10,"y":1178,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0050","frame":{"x":210,"y":1178,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0051","frame":{"x":410,"y":1178,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0052","frame":{"x":610,"y":1178,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0053","frame":{"x":810,"y":1178,"w":190,"h":224},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":10,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0054","frame":{"x":1010,"y":1178,"w":190,"h":228},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":10,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0055","frame":{"x":1210,"y":1178,"w":190,"h":229},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0056","frame":{"x":1410,"y":1178,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0057","frame":{"x":1610,"y":1178,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0058","frame":{"x":1810,"y":1178,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0059","frame":{"x":10,"y":1417,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0060","frame":{"x":210,"y":1417,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0061","frame":{"x":410,"y":1417,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0062","frame":{"x":610,"y":1417,"w":190,"h":224},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":10,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0063","frame":{"x":810,"y":1417,"w":190,"h":224},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":10,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0064","frame":{"x":1010,"y":1417,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0065","frame":{"x":1210,"y":1417,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0066","frame":{"x":1410,"y":1417,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0067","frame":{"x":1610,"y":1417,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0068","frame":{"x":1810,"y":1417,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0069","frame":{"x":10,"y":1651,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0070","frame":{"x":210,"y":1651,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0071","frame":{"x":410,"y":1651,"w":190,"h":224},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":10,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0072","frame":{"x":610,"y":1651,"w":190,"h":224},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":10,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0073","frame":{"x":810,"y":1651,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0074","frame":{"x":1010,"y":1651,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0075","frame":{"x":1210,"y":1651,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0076","frame":{"x":1410,"y":1651,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0077","frame":{"x":1610,"y":1651,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0078","frame":{"x":1810,"y":1651,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0079","frame":{"x":10,"y":1885,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0080","frame":{"x":210,"y":1885,"w":190,"h":224},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":10,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0081","frame":{"x":410,"y":1885,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0082","frame":{"x":610,"y":1885,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0083","frame":{"x":810,"y":1885,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0084","frame":{"x":1010,"y":1885,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0085","frame":{"x":1210,"y":1885,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0086","frame":{"x":1410,"y":1885,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0087","frame":{"x":1610,"y":1885,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0088","frame":{"x":1810,"y":1885,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0089","frame":{"x":10,"y":2119,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0090","frame":{"x":210,"y":2119,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0091","frame":{"x":410,"y":2119,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0092","frame":{"x":610,"y":2119,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0093","frame":{"x":810,"y":2119,"w":190,"h":234},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0094","frame":{"x":1010,"y":2119,"w":190,"h":232},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":2,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0095","frame":{"x":1210,"y":10,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0096","frame":{"x":1410,"y":10,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0097","frame":{"x":1210,"y":2119,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0098","frame":{"x":1410,"y":2119,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0099","frame":{"x":1610,"y":2119,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0100","frame":{"x":1810,"y":2119,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0101","frame":{"x":10,"y":2363,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0102","frame":{"x":210,"y":2363,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0103","frame":{"x":410,"y":2363,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0104","frame":{"x":610,"y":2363,"w":196,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0105","frame":{"x":816,"y":2363,"w":202,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0106","frame":{"x":1028,"y":2363,"w":204,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0107","frame":{"x":1242,"y":2363,"w":207,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0108","frame":{"x":1459,"y":2363,"w":216,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0109","frame":{"x":1685,"y":2363,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0110","frame":{"x":10,"y":2596,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0111","frame":{"x":210,"y":2596,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0112","frame":{"x":410,"y":2596,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0113","frame":{"x":610,"y":2596,"w":190,"h":224},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":10,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0114","frame":{"x":810,"y":2596,"w":190,"h":224},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":10,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0115","frame":{"x":1210,"y":10,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0116","frame":{"x":1010,"y":2596,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0117","frame":{"x":1210,"y":2119,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0118","frame":{"x":1210,"y":2596,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0119","frame":{"x":1410,"y":2596,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0120","frame":{"x":1610,"y":2596,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0121","frame":{"x":1810,"y":2596,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0122","frame":{"x":10,"y":2830,"w":190,"h":224},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":10,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0123","frame":{"x":1010,"y":10,"w":190,"h":224},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":10,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0124","frame":{"x":1210,"y":10,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0125","frame":{"x":210,"y":2830,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}},{"filename":"Fluppit0126","frame":{"x":410,"y":2830,"w":190,"h":223},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":216,"h":240},"sourceSize":{"w":216,"h":240}}],"meta":{"app":"Adobe Flash CS6","version":"12.0.0.481","image":"Fluppit.png","format":"RGBA8888","size":{"w":2048,"h":4096},"scale":"1"}}';
            break;
        case "origami":
            spritesheet_image.src = "sprites/Origami.png";
            spritesheet_json.value = '{"frames":[{"filename":"Falpbird0000","frame":{"x":10,"y":10,"w":98,"h":78},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":2,"y":33,"w":101,"h":118},"sourceSize":{"w":101,"h":118}},{"filename":"Falpbird0001","frame":{"x":118,"y":10,"w":96,"h":79},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":4,"y":27,"w":101,"h":118},"sourceSize":{"w":101,"h":118}},{"filename":"Falpbird0002","frame":{"x":10,"y":99,"w":93,"h":107},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":8,"y":4,"w":101,"h":118},"sourceSize":{"w":101,"h":118}},{"filename":"Falpbird0003","frame":{"x":113,"y":99,"w":96,"h":116},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":4,"y":0,"w":101,"h":118},"sourceSize":{"w":101,"h":118}},{"filename":"Falpbird0004","frame":{"x":10,"y":225,"w":99,"h":112},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":6,"w":101,"h":118},"sourceSize":{"w":101,"h":118}},{"filename":"Falpbird0005","frame":{"x":119,"y":225,"w":100,"h":98},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":18,"w":101,"h":118},"sourceSize":{"w":101,"h":118}},{"filename":"Falpbird0006","frame":{"x":10,"y":347,"w":99,"h":78},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":32,"w":101,"h":118},"sourceSize":{"w":101,"h":118}},{"filename":"Falpbird0007","frame":{"x":119,"y":347,"w":100,"h":77},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":38,"w":101,"h":118},"sourceSize":{"w":101,"h":118}}],"meta":{"app":"Adobe Flash CS6","version":"12.0.0.481","image":"Ending.png","format":"RGBA8888","size":{"w":256,"h":512},"scale":"1"}}';
            break;
        case "explosion":
            spritesheet_image.src = "sprites/Explosion.png";
            spritesheet_json.value = '{"frames":[{"filename":"explode_big0000","frame":{"x":10,"y":10,"w":74,"h":51},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":56,"y":65,"w":178,"h":125},"sourceSize":{"w":178,"h":125}},{"filename":"explode_big0001","frame":{"x":94,"y":10,"w":93,"h":59},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":47,"y":58,"w":178,"h":125},"sourceSize":{"w":178,"h":125}},{"filename":"explode_big0002","frame":{"x":197,"y":10,"w":108,"h":79},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":41,"y":46,"w":178,"h":125},"sourceSize":{"w":178,"h":125}},{"filename":"explode_big0003","frame":{"x":315,"y":10,"w":154,"h":105},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":15,"y":16,"w":178,"h":125},"sourceSize":{"w":178,"h":125}},{"filename":"explode_big0004","frame":{"x":10,"y":125,"w":168,"h":119},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":4,"y":0,"w":178,"h":125},"sourceSize":{"w":178,"h":125}},{"filename":"explode_big0005","frame":{"x":188,"y":125,"w":176,"h":116},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":2,"y":5,"w":178,"h":125},"sourceSize":{"w":178,"h":125}},{"filename":"explode_big0006","frame":{"x":188,"y":125,"w":176,"h":116},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":2,"y":5,"w":178,"h":125},"sourceSize":{"w":178,"h":125}},{"filename":"explode_big0007","frame":{"x":10,"y":254,"w":177,"h":103},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":6,"w":178,"h":125},"sourceSize":{"w":178,"h":125}},{"filename":"explode_big0008","frame":{"x":10,"y":254,"w":177,"h":103},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":6,"w":178,"h":125},"sourceSize":{"w":178,"h":125}},{"filename":"explode_big0009","frame":{"x":197,"y":254,"w":174,"h":97},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":4,"y":10,"w":178,"h":125},"sourceSize":{"w":178,"h":125}},{"filename":"explode_big0010","frame":{"x":197,"y":254,"w":174,"h":97},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":4,"y":10,"w":178,"h":125},"sourceSize":{"w":178,"h":125}},{"filename":"explode_big0011","frame":{"x":10,"y":367,"w":174,"h":76},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":2,"y":27,"w":178,"h":125},"sourceSize":{"w":178,"h":125}},{"filename":"explode_big0012","frame":{"x":10,"y":367,"w":174,"h":76},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":2,"y":27,"w":178,"h":125},"sourceSize":{"w":178,"h":125}},{"filename":"explode_big0013","frame":{"x":194,"y":367,"w":151,"h":35},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":9,"y":35,"w":178,"h":125},"sourceSize":{"w":178,"h":125}},{"filename":"explode_big0014","frame":{"x":194,"y":367,"w":151,"h":35},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":9,"y":35,"w":178,"h":125},"sourceSize":{"w":178,"h":125}},{"filename":"explode_big0015","frame":{"x":355,"y":367,"w":130,"h":35},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":31,"y":30,"w":178,"h":125},"sourceSize":{"w":178,"h":125}},{"filename":"explode_big0016","frame":{"x":355,"y":367,"w":130,"h":35},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":31,"y":30,"w":178,"h":125},"sourceSize":{"w":178,"h":125}},{"filename":"explode_big0017","frame":{"x":10,"y":453,"w":138,"h":35},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":29,"y":24,"w":178,"h":125},"sourceSize":{"w":178,"h":125}},{"filename":"explode_big0018","frame":{"x":10,"y":453,"w":138,"h":35},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":29,"y":24,"w":178,"h":125},"sourceSize":{"w":178,"h":125}},{"filename":"explode_big0019","frame":{"x":158,"y":453,"w":154,"h":35},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":24,"y":15,"w":178,"h":125},"sourceSize":{"w":178,"h":125}},{"filename":"explode_big0020","frame":{"x":158,"y":453,"w":154,"h":35},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":24,"y":15,"w":178,"h":125},"sourceSize":{"w":178,"h":125}},{"filename":"explode_big0021","frame":{"x":322,"y":453,"w":0,"h":0},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":89,"y":63,"w":178,"h":125},"sourceSize":{"w":178,"h":125}},{"filename":"explode_big0022","frame":{"x":322,"y":453,"w":0,"h":0},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":89,"y":63,"w":178,"h":125},"sourceSize":{"w":178,"h":125}},{"filename":"explode_big0023","frame":{"x":322,"y":453,"w":0,"h":0},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":89,"y":63,"w":178,"h":125},"sourceSize":{"w":178,"h":125}},{"filename":"explode_big0024","frame":{"x":322,"y":453,"w":0,"h":0},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":89,"y":63,"w":178,"h":125},"sourceSize":{"w":178,"h":125}},{"filename":"explode_big0025","frame":{"x":322,"y":453,"w":0,"h":0},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":89,"y":63,"w":178,"h":125},"sourceSize":{"w":178,"h":125}},{"filename":"explode_big0026","frame":{"x":322,"y":453,"w":0,"h":0},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":89,"y":63,"w":178,"h":125},"sourceSize":{"w":178,"h":125}},{"filename":"explode_big0027","frame":{"x":322,"y":453,"w":0,"h":0},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":89,"y":63,"w":178,"h":125},"sourceSize":{"w":178,"h":125}},{"filename":"explode_big0028","frame":{"x":322,"y":453,"w":0,"h":0},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":89,"y":63,"w":178,"h":125},"sourceSize":{"w":178,"h":125}},{"filename":"explode_big0029","frame":{"x":322,"y":453,"w":0,"h":0},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":89,"y":63,"w":178,"h":125},"sourceSize":{"w":178,"h":125}},{"filename":"explode_big0030","frame":{"x":322,"y":453,"w":0,"h":0},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":89,"y":63,"w":178,"h":125},"sourceSize":{"w":178,"h":125}},{"filename":"explode_big0031","frame":{"x":322,"y":453,"w":0,"h":0},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":89,"y":63,"w":178,"h":125},"sourceSize":{"w":178,"h":125}},{"filename":"explode_big0032","frame":{"x":322,"y":453,"w":0,"h":0},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":89,"y":63,"w":178,"h":125},"sourceSize":{"w":178,"h":125}},{"filename":"explode_big0033","frame":{"x":322,"y":453,"w":0,"h":0},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":89,"y":63,"w":178,"h":125},"sourceSize":{"w":178,"h":125}},{"filename":"explode_big0034","frame":{"x":322,"y":453,"w":0,"h":0},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":89,"y":63,"w":178,"h":125},"sourceSize":{"w":178,"h":125}},{"filename":"explode_big0035","frame":{"x":322,"y":453,"w":0,"h":0},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":89,"y":63,"w":178,"h":125},"sourceSize":{"w":178,"h":125}},{"filename":"explode_big0036","frame":{"x":322,"y":453,"w":0,"h":0},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":89,"y":63,"w":178,"h":125},"sourceSize":{"w":178,"h":125}},{"filename":"explode_big0037","frame":{"x":322,"y":453,"w":0,"h":0},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":89,"y":63,"w":178,"h":125},"sourceSize":{"w":178,"h":125}},{"filename":"explode_big0038","frame":{"x":322,"y":453,"w":0,"h":0},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":89,"y":63,"w":178,"h":125},"sourceSize":{"w":178,"h":125}},{"filename":"explode_big0039","frame":{"x":322,"y":453,"w":0,"h":0},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":89,"y":63,"w":178,"h":125},"sourceSize":{"w":178,"h":125}},{"filename":"explode_big0040","frame":{"x":322,"y":453,"w":0,"h":0},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":89,"y":63,"w":178,"h":125},"sourceSize":{"w":178,"h":125}},{"filename":"explode_big0041","frame":{"x":322,"y":453,"w":0,"h":0},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":89,"y":63,"w":178,"h":125},"sourceSize":{"w":178,"h":125}},{"filename":"explode_big0042","frame":{"x":322,"y":453,"w":0,"h":0},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":89,"y":63,"w":178,"h":125},"sourceSize":{"w":178,"h":125}},{"filename":"explode_big0043","frame":{"x":322,"y":453,"w":0,"h":0},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":89,"y":63,"w":178,"h":125},"sourceSize":{"w":178,"h":125}},{"filename":"explode_big0044","frame":{"x":322,"y":453,"w":0,"h":0},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":89,"y":63,"w":178,"h":125},"sourceSize":{"w":178,"h":125}},{"filename":"explode_big0045","frame":{"x":322,"y":453,"w":0,"h":0},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":89,"y":63,"w":178,"h":125},"sourceSize":{"w":178,"h":125}},{"filename":"explode_big0046","frame":{"x":322,"y":453,"w":0,"h":0},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":89,"y":63,"w":178,"h":125},"sourceSize":{"w":178,"h":125}},{"filename":"explode_big0047","frame":{"x":322,"y":453,"w":0,"h":0},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":89,"y":63,"w":178,"h":125},"sourceSize":{"w":178,"h":125}},{"filename":"explode_big0048","frame":{"x":322,"y":453,"w":0,"h":0},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":89,"y":63,"w":178,"h":125},"sourceSize":{"w":178,"h":125}},{"filename":"explode_big0049","frame":{"x":322,"y":453,"w":0,"h":0},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":89,"y":63,"w":178,"h":125},"sourceSize":{"w":178,"h":125}}],"meta":{"app":"Adobe Flash CS6","version":"12.0.0.481","image":"NightStrike.png","format":"RGBA8888","size":{"w":512,"h":512},"scale":"1"}}';
            break;
    }

};

loadExample("monster");

///////////////////////

function reset(){
    document.getElementById("start_recording_button").style.display = "block";
    document.getElementById("recording_progress").style.display = "none";
    document.getElementById("modal").style.display = "none";
    canvas.width=0;
}


///////////////////////

var canvas = document.getElementById("spritesheet_canvas");
context = canvas.getContext('2d');

function recordAnimation(){

	if(!IMAGE_LOADED){
        alert("Image not loaded yet! Be patient.");
		return;
	}

    document.getElementById("start_recording_button").style.display = "none";
    document.getElementById("recording_progress").style.display = "block";
    var progress = document.getElementById("recording_progress_bar");
    progress.style.width = 0;

    // Spritesheet!
    // Using Flash's JSON-Array
    
    var spritesheet = spritesheet_image;
    try{
        var json = JSON.parse(spritesheet_json.value);
    }catch(e){
        alert("JSON is invalid!");
        reset();
		return;
    }

//spritesheet.onload = function(){

    // Configure
    var width = json.frames[0].sourceSize.w;
    var height = json.frames[0].sourceSize.h;
    var imageDatas = [];

    // Nice Style
    canvas.style.marginTop = (250-height)/2;

    // Get per frame
    /*for(var i=0;
        var frameWidth;
        var frameHeight;
        imageDatas.push( context.getImageData(0,0,canvas.width,canvas.height).data );*/

    // Each frame
    var index = 0;
    var RECORDING_GIF = true;
    var animLoop = setInterval(function(){

        // Get frame data
        var data = json.frames[index];
        index = (index+1) % json.frames.length;

        // Draw in canvas
        canvas.width = width;
        canvas.height = height;
        context.fillStyle = "#fff";  
        context.fillRect(0,0,width,height);
        context.drawImage(
            spritesheet,
            data.frame.x, data.frame.y, data.frame.w, data.frame.h,
            data.spriteSourceSize.x, data.spriteSourceSize.y, data.frame.w, data.frame.h
        );

        // Recording Gif
        if(RECORDING_GIF){

            imageDatas.push( context.getImageData(0,0,canvas.width,canvas.height).data );

            // Done recording, create gif!
            if(index==0){
                RECORDING_GIF = false;
                
                document.getElementById("recording_progress_caption").innerHTML = "exporting gif...";

                createGIF(
                    width,height,imageDatas,
                    function(ratio){
                        progress.style.width = Math.round(ratio*100)+"%";
                    },
                    function(rawGIF){
                        clearInterval(animLoop);

                        var output_gif = document.getElementById("output_gif");
                        output_gif.src = rawGIF;
                        output_gif.style.left = (500-width)/2;
                        output_gif.style.top = (400-height)/2;

                        document.getElementById("modal").style.display = "block";
                        document.getElementById("download_output_gif_link").href = rawGIF;


                    }
                );
            }

        }

    },1000/30);

    //};

}


/***
 * CREATE GIF
 * from an array of raw image datas
 ***/

function createGIF(width,height,imageDatas,onProgress,onComplete){

    // Create Web Worker, so it doesn't stall the main page.
    var worker = new Worker('lib/screencast.js');
    worker.onmessage = function(event) {
        var message = event.data;
        switch(message.type){

            // On progress, pass the ratio of completion
            case "progress":
                var ratio = message.data;
                onProgress(ratio);
                break;

            // On complete, pass the raw GIF dataURI
            case "complete":
                var rawGIF = message.data;
                onComplete(rawGIF);
                break;

        }
    };

    // Get to work, worker!
    worker.postMessage({
        width: width,
        height: height,
        imageDatas: imageDatas
    });

}