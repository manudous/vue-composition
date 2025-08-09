const { createApp, ref } = Vue;

const app = createApp({
  // template: `
  // <h1>{{message}}</h1>
  // <p>- {{author}}</p>
  // `,

  setup() {
    const message = ref("Hola, soy Batman");
    // Show objects in the console
    // console.log("message", message);
    const author = ref("Bruce Wayne");

    const changeQuote = () => {
      message.value = "Hola, soy Spiderman";
      author.value = "Peter Parker";
    };

    // setTimeout(() => {
    //   message.value = "Hola, soy Goku";
    //   author.value = "Goku";
    // }, 2000);

    return {
      message,
      author,
      changeQuote,
    };
  },
});

app.mount("#my-app");
