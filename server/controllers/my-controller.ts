import { Strapi } from "@strapi/types/dist/core";

export default ({ strapi }: { strapi: Strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin("telegram-bot-strapi")
      .service("myService")
      .getWelcomeMessage();
  },
});
