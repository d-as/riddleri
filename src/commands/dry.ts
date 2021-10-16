import { CommandEvent } from '../types/global';
import { getArgs } from '../util';

const USAGE = 'Usage: !dry [rate] [kc]';
const FRACTION_REGEX = /^(\d+)\s*\/\s*(\d+)$/;

export default (event: CommandEvent): void => {
  const [rate, kc] = getArgs(event);

  if (!rate || !kc) {
    $.say(USAGE);
    return;
  }

  let numericRate: number;
  const killCount = Number(kc);

  if (Number.isNaN(killCount) || killCount <= 0) {
    $.say(USAGE);
    return;
  }

  if (FRACTION_REGEX.test(rate)) {
    const [numerator, denominator] = rate.match(FRACTION_REGEX)
      ?.slice(1)
      ?.map(Number) as [number, number];

    if (denominator === 0) {
      $.say(USAGE);
      return;
    }
    numericRate = numerator / denominator;
  } else {
    $.say(USAGE);
    return;
  }

  const receiveChance = 1 - (1 - numericRate) ** killCount;
  $.say(`${(receiveChance * 100).toFixed(2)}% chance of having received the drop`);
};
