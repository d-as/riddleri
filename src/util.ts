// Console doesn't exist here by default
export const console = {
  log: (...args: unknown[]) => (
    $.consoleLn(args.join(', '))
  ),
  debug: (...args: unknown[]) => (
    $.consoleDebug(args.join(', '))
  ),
};
