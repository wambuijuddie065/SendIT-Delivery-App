import express, { NextFunction, Request, Response } from "express";
import cron from "node-cron";
import sendWelcomeEmail from "./EmailServices/welcomeEmailService";
import ParcelDispatchedEmail from "./EmailServices/Dispatched";
import ParcelDeliveredEmail from "./EmailServices/DeliveredEmailService";



const app = express();

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.json({ Error: err.message });
});
const run = () => {
  cron.schedule("*/5 * * * * *", async () => {
    console.log("running in the background every 5 seconds")
    await sendWelcomeEmail()
    await ParcelDispatchedEmail()
    await ParcelDeliveredEmail()
  
  })
}
run();

app.listen(4003, () => {
  console.log("App is running");
});
