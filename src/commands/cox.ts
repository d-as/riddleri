import polyfills from '../polyfills';
import { CommandEvent } from '../types/global';
import { getArgs, getSender, randomInteger } from '../util';
import { UNIQUE_POOL } from './data/cox.data';

const USAGE = 'Usage: !cox [kc] [points] or !cox [points]';
const POINTS_K_REGEX = /^(\d+)k$/i;
const KC_MAX = 2_000;
const POINTS_MAX = 570_000;

const rollChest = (points: number): string[] => {
  const drops: string[] = [];
  const uniqueChance = points / 8676 / 100;

  if (Math.random() < uniqueChance) {
    drops.push(UNIQUE_POOL[randomInteger(0, UNIQUE_POOL.length - 1)]);

    if (randomInteger(1, 53) === 1) {
      drops.push('Olmlet');
    }
  }
  return drops;
};

export default (event: CommandEvent): void => {
  const args = getArgs(event);
  const sender = getSender(event);
  let kc = 1;
  let points: number;
  let maybePointsK: string;

  if (args.length === 1) {
    [maybePointsK] = args as [string];
    [points] = [args].map(Number) as [number];
  } else if (args.length >= 2) {
    [, maybePointsK] = args as [string, string];
    [kc, points] = args.map(Number) as [number, number];
  } else {
    $.say(USAGE);
    return;
  }

  if (Number.isNaN(points) && POINTS_K_REGEX.test(maybePointsK)) {
    const [, pointsK] = maybePointsK.match(POINTS_K_REGEX) as RegExpMatchArray;
    points = Number(pointsK) * 1000;
  }

  if (
    [kc, points].some(Number.isNaN) || kc <= 0 || points <= 0 || kc > KC_MAX || points > POINTS_MAX
  ) {
    $.say(USAGE);
    return;
  }

  const uniques: Record<string, number> = {};

  for (let i = 0; i < kc; i++) {
    rollChest(points).forEach(unique => {
      if (uniques[unique]) {
        uniques[unique]++;
      } else {
        uniques[unique] = 1;
      }
    });
  }

  if (Object.keys(uniques).length) {
    polyfills();

    $.say(
      `@${sender} received loot: ${
        Object.entries(uniques)
          .map(([unique, count]) => `${unique}${count > 1 ? ` ×${count}` : ''}`)
          .join(', ')
      }`,
    );
  } else {
    $.say('WhiteLight');
  }
};
