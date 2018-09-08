new Vue({
  el: "#vue_app",
  data: {
    name: "Vishesh",
    job: "Software developer",
    website: "http://www.thenetninja.co.uk",
    websiteTag: '<a href="http://www.google.com">Google!</a>',
    age: 25
  },
  methods: {
    greet: function(time) {
      return "Good " + time + " " + this.name;
    },
    add: function(inc) {
      this.age += inc;
    },
    subtract: function(dec) {
      this.age -= dec;
    }
  }
});
