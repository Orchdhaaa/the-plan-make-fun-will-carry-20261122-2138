import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const plan =
  "Offer dental clinics an AI receptionist: build a booking bot from each clinic's own website first, charge $149 setup plus $49 a month. Find owners on Google Maps and send a demo. Day one: list 50 clinics, build 5 demos. Budget $60 for APIs, $40 for email and a domain.";

mkdirSync("/output", { recursive: true });
writeFileSync(join("/output", "entry.txt"), plan, "utf8");
