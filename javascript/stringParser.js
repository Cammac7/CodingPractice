var contents = "hello";

function readSingleFile(e) {
  var file = e.target.files[0];
  if (!file) {
    return;
  }
  var reader = new FileReader();
  reader.onload = function(e) {
    contents = e.target.result;
    processData(contents);
  };
  reader.readAsText(file);
}
document.getElementById('file-input').addEventListener('change', readSingleFile, false);

function processData(inputdata){
    bufferString = inputdata.toString();
    var arr = bufferString.split('\n');
    var jsonObj = [];
    
    var headers = arr[0].split(',');
    for(var i =1; i < arr.length; i++){
        var data = arr[i].split(',');
        var obj = {};
        for(var j = 0; j < data.length; j++){
            obj[headers[j].trim()] = data[j].trim();
        }
        jsonObj.push(obj);
    }
    console.log(jsonObj);
}