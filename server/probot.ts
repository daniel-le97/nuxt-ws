// Deployments API example
// See: https://developer.github.com/v3/repos/deployments/ to learn more

import { Probot } from "probot";

// For more information, see https://probot.github.io/docs/development/
export const probot = (app: Probot) => {
    // Your code here
    app.log.info("Yay, the app was loaded!");
    app.onAny(async (context) => {
        // Creates a deployment on a pull request event
        // Then sets the deployment status to success
        // NOTE: this example doesn't actually integrate with a cloud
        // provider to deploy your app, it just demos the basic API usage.
        app.log.info(context.payload);


    })};
  