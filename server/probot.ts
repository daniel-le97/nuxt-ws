// Deployments API example
// See: https://developer.github.com/v3/repos/deployments/ to learn more

import { Probot } from "probot";

// For more information, see https://probot.github.io/docs/development/
export const probot = (app: Probot) => {
    // Your code here
    app.log.info("Yay, the app was loaded!");
    app.onAny(async (context) => {

        app.log.info(context.payload);


    })};
  