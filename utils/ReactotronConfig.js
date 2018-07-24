// ReactotronConfig.js
import { reactotronRedux } from "reactotron-redux";

// then add it to the plugin list
Reactotron.configure({ name: "React Native Demo" })
  .use(reactotronRedux()) //  <- here i am!
  .connect(); //Don't forget about me!
