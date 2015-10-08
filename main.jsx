if (Meteor.isClient) {

  Meteor.startup(function() {
    React.render(
      <h1>Hello, world!</h1>,
      document.getElementById('example')
    );
  });
  
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

