import { BindTypes } from './bind-types';

export enum GroupID {
  Caster = 0,
  Administrator = 1,
  Moderator = 2,
  Subscriber = 3,
  Donator = 4,
  VIP = 5,
  Regular = 6,
  Viewer = 7,
}

export interface JavaString {
  concat: (str: JavaString) => JavaString
  equalsIgnoreCase: (str: JavaString) => boolean
  isBlank: () => boolean
  isEmpty: () => boolean
  length: () => number
  repeat: (count: number) => JavaString
  startsWith: (prefix: string) => boolean
  substring: (beginIndex: number, endIndex?: number) => JavaString
  toLowerCase: () => JavaString
  toUpperCase: () => JavaString
  trim: () => JavaString
  [key: string]: unknown
}

export interface CommandEvent {
  getSender: () => JavaString
  getCommand: () => JavaString
  getArguments: () => JavaString
  getArgs: () => JavaString[]
}

export interface CommandResult {
  result: string | JavaString
  cache: boolean
}

export interface EmotesHandler {
  getEmotesRegExp: () => RegExp[]
  getEmotesMatchCount: (message: string | JavaString) => number
}

export interface $ {
  addComRegisterAliases: (...args: unknown[]) => unknown
  addComRegisterCommands: (...args: unknown[]) => unknown
  addModeratorToCache: (...args: unknown[]) => unknown
  addSubUsersList: (...args: unknown[]) => unknown
  addTagTransformer: (...args: unknown[]) => unknown
  adminMsg: unknown
  alertspollssocket: unknown
  aliasExists: (...args: unknown[]) => boolean
  arrayShuffle: (...args: unknown[]) => unknown
  audioHookExists: (...args: unknown[]) => boolean
  bind: <T>(type: BindTypes, callback: (arg: T) => void) => void
  bot: unknown
  botName: unknown
  casterMsg: unknown
  changed: unknown
  channelName: unknown
  command: unknown
  commandExists: (command: string | JavaString) => boolean
  commandPause: unknown
  consoleDebug: (message: string | JavaString) => void
  consoleLn: (message: string | JavaString) => void
  coolDown: unknown
  coolDownKeywords: unknown
  customAPI: unknown
  dateToString: (date: unknown) => string | JavaString
  deathUpdateFile: unknown
  deleteFile: (...args: unknown[]) => unknown
  delSubUsersList: unknown
  discordAPI: unknown
  donationpanelupdate: unknown
  emotes: unknown
  emotesHandler: EmotesHandler
  equalsIgnoreCase: (str: string | JavaString) => boolean
  escapeTags: unknown
  exists: (...args: unknown[]) => boolean
  fileExists: (file: string | JavaString) => boolean
  findFiles: (...args: unknown[]) => unknown
  findSize: (...args: unknown[]) => unknown
  gameMessages: unknown
  getBotWhisperMode: (...args: unknown[]) => unknown
  getChannelAge: (...args: unknown[]) => unknown
  getCommandGroup: (...args: unknown[]) => unknown
  getCommandGroupName: (...args: unknown[]) => unknown
  getCommandPay: (...args: unknown[]) => unknown
  getCommandPrice: (...args: unknown[]) => unknown
  getCommandScript: (...args: unknown[]) => unknown
  getCountString: (...args: unknown[]) => unknown
  getCurLocalTimeString: (...args: unknown[]) => unknown
  getCurrentHostTarget: (...args: unknown[]) => unknown
  getCurrentLocalTimeString: (...args: unknown[]) => unknown
  getFollowAge: (...args: unknown[]) => unknown
  getFollowDate: (...args: unknown[]) => unknown
  getFollows: (...args: unknown[]) => unknown
  getGame: (...args: unknown[]) => unknown
  getGamesPlayed: (...args: unknown[]) => unknown
  getGroupIdByName: (...args: unknown[]) => unknown
  getGroupNameById: (...args: unknown[]) => unknown
  getGroupPointMultiplier: (...args: unknown[]) => unknown
  getIniDbBoolean: (...args: unknown[]) => unknown
  getIniDbFloat: (...args: unknown[]) => unknown
  getIniDbNumber: (...args: unknown[]) => unknown
  getIniDbString: (...args: unknown[]) => unknown
  getLocalTime: (...args: unknown[]) => unknown
  getLocalTimeString: (...args: unknown[]) => unknown
  getLogo: (...args: unknown[]) => unknown
  getMessageWrites: (...args: unknown[]) => unknown
  getOrdinal: (...args: unknown[]) => unknown
  getPercentage: (...args: unknown[]) => unknown
  getPlayTime: (...args: unknown[]) => unknown
  getPointsMessage: (...args: unknown[]) => unknown
  getPointsString: (...args: unknown[]) => unknown
  getRank: (...args: unknown[]) => unknown
  getScript: (...args: unknown[]) => unknown
  getSetIniDbBoolean: (...args: unknown[]) => unknown
  getSetIniDbFloat: (...args: unknown[]) => unknown
  getSetIniDbNumber: (...args: unknown[]) => unknown
  getSetIniDbString: (...args: unknown[]) => unknown
  getStatus: (...args: unknown[]) => unknown
  getStreamDownTime: (...args: unknown[]) => unknown
  getStreamStartedAt: (...args: unknown[]) => unknown
  getStreamUptime: (...args: unknown[]) => unknown
  getStreamUptimeSeconds: (...args: unknown[]) => unknown
  getSubCommandFromArguments: (...args: unknown[]) => unknown
  getSubcommandGroup: (...args: unknown[]) => unknown
  getSubCommandGroupName: (...args: unknown[]) => unknown
  getSubscriberCount: (...args: unknown[]) => unknown
  getSubscriberGroupID: (...args: unknown[]) => unknown
  getTimeString: (...args: unknown[]) => unknown
  getTimeStringMinutes: (...args: unknown[]) => unknown
  getUserGroupId: (...args: unknown[]) => unknown
  getUserGroupName: (...args: unknown[]) => unknown
  getUserPoints: (...args: unknown[]) => unknown
  getUserTime: (...args: unknown[]) => unknown
  getUserTimeString: (...args: unknown[]) => unknown
  getViewers: (...args: unknown[]) => unknown
  getVIPGroupID: (...args: unknown[]) => unknown
  giveAll: (...args: unknown[]) => unknown
  greetingspanelupdate: unknown
  hasDiscordToken: (...args: unknown[]) => boolean
  hasKey: (...args: unknown[]) => boolean
  hasModeO: (...args: unknown[]) => boolean
  hasModList: (...args: unknown[]) => boolean
  hasRank: (...args: unknown[]) => boolean
  inidb: unknown
  isAdmin: (...args: unknown[]) => boolean
  isBot: (...args: unknown[]) => boolean
  isCaster: (...args: unknown[]) => boolean
  isDirectory: (...args: unknown[]) => boolean
  isDonator: (...args: unknown[]) => boolean
  isMod: (...args: unknown[]) => boolean
  isModeratorCache: (...args: unknown[]) => boolean
  isModv3: (...args: unknown[]) => boolean
  isNightly: (...args: unknown[]) => boolean
  isOnline: (...args: unknown[]) => boolean
  isOwner: (...args: unknown[]) => boolean
  isPrerelease: (...args: unknown[]) => boolean
  isReg: (...args: unknown[]) => boolean
  isSub: (...args: unknown[]) => boolean
  isSubv3: (...args: unknown[]) => boolean
  isSwappedSubscriberVIP: (...args: unknown[]) => boolean
  isTurbo: (...args: unknown[]) => boolean
  isTwitchBot: (...args: unknown[]) => boolean
  isVIP: (...args: unknown[]) => boolean
  javaString: (str: string) => JavaString
  jsString: (str: JavaString) => string
  lang: unknown
  lastJoinPart: unknown
  loadAudioHookCommands: (...args: unknown[]) => unknown
  loadPrizes: (...args: unknown[]) => unknown
  loadPrizesSlot: (...args: unknown[]) => unknown
  loadRanksTimeTable: (...args: unknown[]) => unknown
  loadScript: (...args: unknown[]) => unknown
  loadScriptR: (...args: unknown[]) => unknown
  log: unknown
  logCustomCommand: unknown
  logging: unknown
  makeTwitchVODTime: (...args: unknown[]) => unknown
  match: unknown
  matchAll: unknown
  mkDir: (...args: unknown[]) => unknown
  modeOUsers: unknown
  moderation: unknown
  modListUsers: unknown
  modMsg: unknown
  moveFile: unknown
  on: (...args: unknown[]) => unknown
  outOfRange: unknown
  ownerName: unknown
  paginateArray: unknown
  paginateArrayDiscord: unknown
  panelsocketserver: unknown
  patternDetector: unknown
  payCom: unknown
  performModeration: (...args: unknown[]) => unknown
  permCom: (...args: unknown[]) => unknown
  permitUserLink: (...args: unknown[]) => unknown
  pointNameMultiple: unknown
  pointNameSingle: unknown
  poll: unknown
  priceCom: (...args: unknown[]) => unknown
  raffleCommand: unknown
  rand: (max: number) => number
  randElement: (...args: unknown[]) => unknown
  randInterval: (min: number, max: number) => number
  random: (...args: unknown[]) => CommandResult
  randRange: (...args: unknown[]) => unknown
  readFile: (...args: unknown[]) => unknown
  regexExec: (...args: unknown[]) => unknown
  registerChatAlias: (...args: unknown[]) => unknown
  registerChatCommand: (
    location: string | JavaString, name: string | JavaString, groupID?: GroupID
  ) => void
  registerChatSubcommand: (
    location: string | JavaString,
    name: string | JavaString,
    subcommand: string | JavaString,
    groupID?: GroupID
  ) => void
  reloadAdventure: (...args: unknown[]) => unknown
  reloadBet: (...args: unknown[]) => unknown
  reloadBits: (...args: unknown[]) => unknown
  reloadClips: (...args: unknown[]) => unknown
  reloadGamble: (...args: unknown[]) => unknown
  reloadKill: (...args: unknown[]) => unknown
  reloadLogs: (...args: unknown[]) => unknown
  reloadMisc: (...args: unknown[]) => unknown
  reloadModeration: (...args: unknown[]) => unknown
  reloadNoticeSettings: (...args: unknown[]) => unknown
  reloadRaffle: (...args: unknown[]) => unknown
  reloadRaid: (...args: unknown[]) => unknown
  reloadRoulette: (...args: unknown[]) => unknown
  reloadScriptR: (...args: unknown[]) => unknown
  reloadStreamElements: (...args: unknown[]) => unknown
  reloadTipeeeStream: (...args: unknown[]) => unknown
  reloadTRaffle: (...args: unknown[]) => unknown
  reloadWhispers: (...args: unknown[]) => unknown
  removeModeratorFromCache: (...args: unknown[]) => unknown
  replace: (...args: unknown[]) => unknown
  resolveRank: (...args: unknown[]) => unknown
  restoreSubscriberStatus: (...args: unknown[]) => unknown
  returnCommandCost: (...args: unknown[]) => unknown
  saveArray: (...args: unknown[]) => unknown
  say: (message: string | JavaString) => void
  sayWithTimeout: (message: string | JavaString) => void
  script: unknown
  session: unknown
  setIniDbBoolean: (...args: unknown[]) => unknown
  setIniDbFloat: (...args: unknown[]) => unknown
  setIniDbNumber: (...args: unknown[]) => unknown
  setIniDbString: (...args: unknown[]) => unknown
  setTempBonus: (...args: unknown[]) => unknown
  setUserGroupById: (...args: unknown[]) => unknown
  setUserGroupByName: (...args: unknown[]) => unknown
  streamLabsAPI: (...args: unknown[]) => unknown
  strlen: (str: string | JavaString) => number
  subCommandExists: (...args: unknown[]) => boolean
  subUsers: unknown
  systemTime: unknown
  systemTimeNano: unknown
  tags: unknown
  tempUnRegisterChatCommand: unknown
  test: unknown
  timeoutUser: (...args: unknown[]) => unknown
  touchFile: (...args: unknown[]) => unknown
  trueRand: (...args: unknown[]) => unknown
  trueRandElement: (...args: unknown[]) => unknown
  trueRandRange: (...args: unknown[]) => unknown
  twitch: unknown
  twitchcache: unknown
  twitchCacheReady: unknown
  twitchteamscache: unknown
  twitter: unknown
  unbind: (...args: unknown[]) => void
  unregisterChatCommand: (...args: unknown[]) => void
  unregisterChatSubcommand: (...args: unknown[]) => void
  updateChannelPointsConfig: (...args: unknown[]) => unknown
  updateCommandGroup: (...args: unknown[]) => unknown
  updateFollowConfig: (...args: unknown[]) => unknown
  updateGame: (...args: unknown[]) => unknown
  updateHost: (...args: unknown[]) => unknown
  updateSettings: (...args: unknown[]) => unknown
  updateStatus: (...args: unknown[]) => unknown
  updateSubcommandGroup: (...args: unknown[]) => unknown
  updateSubscribeConfig: (...args: unknown[]) => unknown
  updateTimeSettings: (...args: unknown[]) => unknown
  updateUsersObject: (...args: unknown[]) => unknown
  user: unknown
  userExists: (...args: unknown[]) => boolean
  userGroups: unknown
  username: unknown
  usernameCache: unknown
  userPrefix: unknown
  users: unknown
  version: unknown
  welcomepanelupdate: unknown
  whisperPrefix: (sender: string | JavaString) => string | JavaString
  writeToFile: (...args: unknown[]) => unknown
  youtube: unknown
  ytplayer: unknown
}

declare global {
  const $: $;
}
