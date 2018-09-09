new Vue({
  el: "#vue_app",
  data: {
    name: "Vishesh",
    job: "Software developer",
    website: "http://www.thenetninja.co.uk",
    websiteTag: '<a href="http://www.google.com">Google!</a>',
    age: 25,
    x: 0,
    y: 0,
    a: 0,
    b: 0,
    available: false,
    nearby: false,
    error: false,
    success: false,
    characters: ["Mario", "Luigi", "Yoshi", "Ryu"],
    ninjas: [
      { name: "Ryu", age: 25 },
      { name: "Yoshi", age: 21 },
      { name: "Hatori", age: 28 }
    ]
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
    },
    update: function(e) {
      (this.x = e.offsetX), (this.y = e.offsetY);
    },
    click: function() {
      alert("you clicked!");
    },
    logName: function() {
      console.log("you entered name!");
    },
    logAge: function() {
      console.log("you entered age!");
    }
    // addToA: function() {
    //   console.log("addToA");
    //   return this.a + this.age;
    // },
    // addToB: function() {
    //   console.log("addToB");
    //   return this.b + this.age;
    // }
  },
  computed: {
    addToA: function() {
      console.log("addToA");
      return this.a + this.age;
    },
    addToB: function() {
      console.log("addToB");
      return this.b + this.age;
    },

    compClasses: function() {
      return {
        available: this.available,
        nearby: this.nearby
      };
    }
  }
});
