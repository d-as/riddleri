import { CommandEvent } from './types/global';

export const getArgs = (event: CommandEvent): string[] => (
  event.getArgs().map($.jsString)
);
