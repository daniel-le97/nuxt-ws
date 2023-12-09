import { Probot, createNodeMiddleware, createProbot } from "probot";
import { probot } from "../probot";

const probotApp = new Probot({
    appId: process.env.APP_ID,
    privateKey: process.env.PRIVATE_KEY,
    secret: process.env.WEBHOOK_SECRET,
});





export default fromNodeMiddleware(createNodeMiddleware(probot, {webhooksPath: "/api/webhooks", probot: probotApp}))