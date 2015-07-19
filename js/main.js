
var _app = new app();

_app.initGui = function() {
    //alert("App Ready");   
}

_app.formSubmission = function (event) {
   event.preventDefault();
   var val = $("#textarea").text();
   var params = [
       {'name': 'key', value:'xyz'},
       {'name': 'txt', value:val}
   ];
    console.log("Got Submission");
    _app.nimble.get(0, _app.formSubmissionHandler, true, params);
}

_app.formSubmissionHandler = function (data){
   var json = JSON.parse(data);
    
}

_app.initialize();