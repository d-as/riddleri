import { CommandEvent } from './types/global';

const ARG_REGEX = /^[a-z0-9]+$/i;

export const getArgs = (event: CommandEvent): string[] => (
  event.getArgs().map($.jsString).filter(arg => ARG_REGEX.test(arg))
);

export const getSender = (event: CommandEvent): string => (
  $.jsString(event.getSender())
);

export const randomInteger = (min: number, max: number): number => (
  Math.floor(Math.random() * (max - min + 1) + min)
);
