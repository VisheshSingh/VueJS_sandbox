var one = new Vue({
  el: "#vue_app_one",
  data: {
    title: "Vue app one"
  },
  methods: {},
  computed: {
    greet: function() {
      return "Hello from app one!";
    }
  }
});

var two = new Vue({
  el: "#vue_app_two",
  data: {
    title: "Vue app two"
  },
  methods: {
    changeTitle: function() {
      one.title = "I am your father!";
    }
  },
  computed: {
    greet: function() {
      return "yo boys! this is app two speaking :)";
    }
  }
});

two.title = "Fear is the path to DARK side";
