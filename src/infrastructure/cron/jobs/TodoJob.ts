import cron from "node-cron";

export const example = () => {
    cron.schedule("0 0 * * *", () => {
        console.log("Running cron job: example");
    });
};
