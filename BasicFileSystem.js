var file = function(FileName,inputDir,isDir){
    this.Name=FileName;
    this.CurrentDir=inputDir;
    this.isDirectory = isDir;
    this.size = 0;
    this.timeStamp = new Date();
    if(isDir===true){
        this.subfiles = [];
    }
    if(inputDir!==null){
        this.parentDir = inputDir.getParentDirectory();
    }
    this.rename = function(newName){
        this.Name = newName;
    };
    this.updateTimeStamp = function(){
        this.timeStamp = new Date();
    };  
};

file.prototype.getParentDirectory = function(){
        return this.parentDir;
    };

var fileSystem = function(){
    this.root = new file("root",null,true);
    this.createFile = function(name,currentDirectory,isDirectory){
        var f = new file(name,currentDirectory,isDirectory);
        currentDirectory.subfiles.push(f);
    };
};

var myComputer = new fileSystem();
myComputer.createFile("Desktop",myComputer.root,true);
