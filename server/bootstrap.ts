import { Strapi } from "@strapi/types/dist/core";
import botServices from "./bot/bot.services";

export default async ({ strapi }: { strapi: Strapi }) => {
  strapi.plugin("telegram-bot-strapi").telegramBot = botServices({ strapi });
};
