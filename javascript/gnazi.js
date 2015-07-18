function formSubmission(event) {
   event.preventDefault();
   var val = $("#textarea").text();
   var params = [
       {'name': 'key', value:'xyz'},
       {'name': 'txt', value:val}
   ];
    app.nimble.get(0, handler, true, params);
}

function formSubmissionHandler(data){
   var json = JSON.parse(data);
   json.ListPage.pages.LinkPage[1].searchPage.ListPage.pages.BasicPage[0].title
}
