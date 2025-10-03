import App from "./App.svelte";

//CSS
import "./style/variables.scss";
import "./style/core.scss";
import "./style/admin.css";

const app = new App({
	target: document.body,
});

export default app;
