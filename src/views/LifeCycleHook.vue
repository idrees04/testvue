<template>
  <div ref="greeting">
    <h1> Hello lifecycle Hook!</h1>
    <span>comment/uncomment me to see beforeUpdate/updated hook's reactivity
    <br/>
    and console to understand lifecycle Hook
    <br/>
  </span>
  <h2>Commented lifeCycle beforeUnmount and unmounted
  </h2>
    <p>
      Commented lifeCycle (beforeUnmount) and (unmounted) because if we call this two function this running application will be unmount.
    </p>
   </div> 
</template>

<script>
export default {
  setup() {
    console.log("setup hook console start");
    console.log("I'm setup hook");
    console.log("setup hook console end");
  },
  data() {
    console.log("data hook console start");
    console.log("I'm data hook");
    return {
      stateOfBob: "sleeping",
      img: "",
    };
    console.log("data hook console end");
  },
  computed: {
    test: function () {
      return "I'm computed hook";
    },
  },
  beforeCreate() {
    console.log("beforeCreate hook console start");
    console.log("I'm beforeCreate hook");
    console.log("Bob is currently ", this.stateOfBob);
    console.log("computed hook is returning ", this.test);
    console.log("beforeCreate hook console end");

  },
  created() {
    console.log("created hook console start");
    console.log("I'm created hook");
    console.log("Bob is currently ", this.stateOfBob);
    this.stateOfBob = "awakened but still sleeping";
    console.log("Bob is currently ", this.stateOfBob);
    console.log("computed hook is returning ", this.test);
    console.log("created hook console end");
  },
  beforeMount() {
    console.log("beforeMount hook console start");
    console.log("I'm beforeMount hook");
    console.log("The Dom node is ", this.$refs["greeting"]);
    console.log("beforeMount hook console end");
  },
  mounted() {
    console.log("mounted hook console start");
    console.log("I'm mounted hook");
    console.log("The Dom node is ", this.$refs["greeting"]);
    console.log("mounted hook console end");
  },
  beforeUpdate() {
    console.log("beforeUpdate hook console start");
    console.log(
      "I'm beforeUpdate hook and i can help to apply extra effects before a DOM is updated"
    );
    console.log("width of img div ", this.$refs.img.width);
    this.$refs.img.width = 300;
    console.log("width of img div after overriding ", this.$refs.img.width);
    console.log("beforeUpdate hook console end");
  },
  updated() {
    console.log("updated hook console start");
    console.log("I'm updated hook");
    this.img = "https://picsum.photos/200/300"; //updates the image src
    console.log("updated hook console end");
  },
  // beforeUnmount() {
  //   console.log("beforeUnmount hook console start");
  //   console.log("I'm beforeUnmount hook");
  //   this.$refs.img.width = 0;
  //   console.log("beforeUnmount hook console end");
  // },
  // unmounted() {
  //   console.log("unmounted hook console start");
  //   console.log("I'm unmounted hook");
  //   this.$refs.img.width = 0;
  //   console.log("unmounted hook console end");
  // },
};
</script>