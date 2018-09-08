new Vue({
  el: "#vue_app",
  data: {
    name: "Vishesh",
    job: "Software developer"
  },
  methods: {
    greet: function(time) {
      return "Good " + time + " " + this.name;
    }
  }
});
