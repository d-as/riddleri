import dryCommand from './commands/dry';
import { BindType } from './types/bind-types';
import { CommandEvent, GroupID } from './types/global';

const SCRIPT_FILE = './custom/generated/commands.js';

enum Command {
  Dry = 'dry',
}

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
  const command = $.jsString(event.getCommand()).toLowerCase();

  switch (command) {
    case Command.Dry:
      dryCommand(event);
      break;
    default:
      break;
  }
});

$.bind(BindType.InitReady, () => {
  // eslint-disable-next-line global-require
  require('core-js'); // This has to be inside initReady

  console.log('Registering custom commands');

  $.registerChatCommand(SCRIPT_FILE, Command.Dry, GroupID.Moderator);
});
