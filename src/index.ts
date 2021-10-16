import dryCommand from './commands/dry';
import coxCommand from './commands/cox';
import { BindType } from './types/bind-types';
import { CommandEvent, GroupID } from './types/global';

const SCRIPT_FILE = './custom/generated/commands.js';

enum Command {
  Dry = 'dry',
  CoX = 'cox',
}

const COMMANDS: Record<Command, (event: CommandEvent) => void> = {
  [Command.Dry]: dryCommand,
  [Command.CoX]: coxCommand,
};

// Regular console doesn't exist in Rhino
// eslint-disable-next-line no-global-assign
console = {
  log: (...args: unknown[]) => (
    $.consoleLn(args.join(', '))
  ),
  debug: (...args: unknown[]) => (
    $.consoleDebug(args.join(', '))
  ),
} as Console;

$.bind(BindType.Command, (event: CommandEvent) => {
  COMMANDS[$.jsString(event.getCommand()).toLowerCase() as Command]?.(event);
});

$.bind(BindType.InitReady, () => {
  console.log('Registering custom commands');

  $.registerChatCommand(SCRIPT_FILE, Command.Dry, GroupID.Moderator);
  $.registerChatCommand(SCRIPT_FILE, Command.CoX, GroupID.Moderator);
});
