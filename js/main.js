import { Router } from "./router";

const router = new Router();

router.add("/", "../pages/home.html");
router.add("/about", "../pages/about.html");
router.add("/contact", "../pages/contact.html");
router.add(404, "../pages/404.html");

router.handleUrl();

window.router = () => router.pushPath();
window.onpopstate = () => router.handleUrl();
