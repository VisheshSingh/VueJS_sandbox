new Vue({
  el: "#vue_app",
  data: {
    name: "Vishesh",
    job: "Software developer",
    website: "http://www.thenetninja.co.uk",
    websiteTag: '<a href="http://www.google.com">Google!</a>'
  },
  methods: {
    greet: function(time) {
      return "Good " + time + " " + this.name;
    }
  }
});
