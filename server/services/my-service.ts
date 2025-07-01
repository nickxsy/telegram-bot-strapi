import { Strapi } from "@strapi/types/dist/core";

export default ({ strapi }: { strapi: Strapi }) => ({
  getWelcomeMessage() {
    return "Welcome to Strapi 🚀";
  },
});
