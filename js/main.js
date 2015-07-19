
var _app = new app();

_app.initGui = function() {
    //alert("App Ready");   
}

_app.formSubmission = function (event) {
   event.preventDefault();
   var val = document.getElementById("inputarea").value;
   var params = [
       {'name': 'key', value:'810ff583bed6266bc7cec7781b49cfc9'},
       {'name': 'txt', value:val}
   ];
    console.log("Got Submission");
    _app.nimble.get(0, _app.formSubmissionHandler, true, params);
}

_app.formSubmissionHandler = function (data){
   var json = JSON.parse(data);
   var pages = json['ListPage']
    
}

_app.audioSubmission = function (event) {
   event.preventDefault();
   var val = document.getElementById("inputarea").value;
   var params = [
       {'name': 'key', value:'810ff583bed6266bc7cec7781b49cfc9'},
       {'name': 'txt', value:val}
   ];
    console.log("Got Submission");
    _app.nimble.get(0, _app.audioSubmissionHandler, true, params);
}

_app.audioSubmissionHandler = function (data){
   var json = JSON.parse(data);
   var pages = json['ListPage']
    
}


_app.initialize();