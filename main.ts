import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const plan =
  "Sell AI receptionists to dental clinics: build a booking bot from each clinic's own site before asking for money, $149 setup plus $49/month. Find owners on Google Maps, send a live demo link. Day one: list 50 clinics, build 5 demos. Spend $60 on APIs, $40 on email and a domain.";

mkdirSync("/output", { recursive: true });
writeFileSync(join("/output", "entry.txt"), plan, "utf8");
