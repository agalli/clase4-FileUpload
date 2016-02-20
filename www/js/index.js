function alert(message) {
    new Windows.UI.Popups.MessageDialog(message).showAsync();
}


function capturePhoto(){
    
    navigator.camera.getPicture(function(fileURI){
        var win=function(r){
            document.getElementById("resp").innerHTML=JSON.stringify(r);
            clearCache();
        };
        var fail=function(error){
            alert(error);
            clearCache();
        };
        
        var options=new FileUploadOptions();
        options.fileKey="file";
        options.fileName=fileURI.substring(fileURI.lastIndexOf("/")+1);
        options.mimeType="image/jpeg";
        options.params={
            dato1: "Este texto va desde el telefono y vuelve desde el servidor"
        };
        var ft=new FileTransfer();
        ft.upload(fileURI, encodeURI("http://10.35.152.202/subida.php"), win, fail, options);
    },function(message){
        alert(message);
    },{quality:100, destinationType: Camera.DestinationType.FILE_URI});
}
