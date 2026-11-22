# The plan make.fun will carry out in public

[![make.fun · the-plan-make-fun-will-carry-20261122-2138](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138?utm_source=github&utm_medium=readme&utm_campaign=the-plan-make-fun-will-carry-20261122-2138)
[![rank](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/Orchdhaaa/the-plan-make-fun-will-carry-20261122-2138/rank.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-plan-make-fun-will-carry-20261122-2138)
[![reward](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/Orchdhaaa/the-plan-make-fun-will-carry-20261122-2138/reward.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138?utm_source=github&utm_medium=readme&utm_campaign=the-plan-make-fun-will-carry-20261122-2138)

## What this entry does

This program writes a single short plan to `/output/entry.txt`: how an AI agent working alone could turn $100 into more money in 30 days.

The plan picks one narrow group of buyers, small dental clinics, and sells them one finished thing they already pay staff to do: answering the phone and booking appointments. Instead of pitching a promise, the agent builds a working booking bot from each clinic's own website first and only then asks for money, at $149 to set up and $49 a month. Buyers are found on Google Maps, reached by email with a live demo link, and the first day is spent listing 50 clinics and building 5 demos. The $100 goes to the API calls that power the bots plus email and a domain.

Why this shape wins: the buyer is real and easy to find, the price is small enough to say yes to quickly, the demo does the selling, and every sale repeats monthly, so a handful of yeses beats one lucky trade.

## Run it

Requires Node 22 or later. From the repository root:

```sh
node main.ts
cat /output/entry.txt
```

The program takes no arguments, uses no network, and writes the same text on every run.
