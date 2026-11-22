import { mkdirSync, writeFileSync } from "node:fs";

const PLAN = "Day 1: spend $70 on API credits and $30 on a BuiltWith list of 500 Shopify stores. Build each a demo AI chatbot from its FAQ, email 50 owners daily offering it live for $199. Deliver in 24h, upsell $49/mo hosting. Close 3-5 sales in 30 days: $600-$1,000, no ads, no trading.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PLAN, "utf8");
