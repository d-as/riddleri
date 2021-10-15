export enum BindType {
  Command = 'command',
  InitReady = 'initReady',
  WebPanelSocketUpdate = 'webPanelSocketUpdate',
}

export enum IRCBindType {
  ChannelJoin = 'ircChannelJoin',
  ChannelLeave = 'ircChannelLeave',
  ChannelMessage = 'ircChannelMessage',
  ChannelUserMode = 'ircChannelUserMode',
  ChannelUsersUpdate = 'ircChannelUsersUpdate',
  ClearChat = 'ircClearChat',
  PrivateMessage = 'ircPrivateMessage',
}

export enum TwitchBindType {
  AnonymousSubscriptionGift = 'twitchAnonymousSubscriptionGift',
  Bits = 'twitchBits',
  Clip = 'twitchClip',
  Follow = 'twitchFollow',
  FollowsInitialized = 'twitchFollowsInitialized',
  GameChange = 'twitchGameChange',
  Hosted = 'twitchHosted',
  HostsInitialized = 'twitchHostsInitialized',
  MassSubscriptionGifted = 'twitchMassSubscriptionGifted',
  MassAnonymousSubscriptionGifted = 'twitchMassAnonymousSubscriptionGifted',
  Offline = 'twitchOffline',
  Online = 'twitchOnline',
  PrimeSubscriber = 'twitchPrimeSubscriber',
  Raid = 'twitchRaid',
  ReSubscriber = 'twitchReSubscriber',
  Subscriber = 'twitchSubscriber',
  SubscriptionGift = 'twitchSubscriptionGift',
}

export enum DiscordBindType {
  ChannelCommand = 'discordChannelCommand',
  ChannelMessage = 'discordChannelMessage',
  MessageReaction = 'discordMessageReaction',
  RoleCreated = 'discordRoleCreated',
  RoleDeleted = 'discordRoleDeleted',
  RoleUpdated = 'discordRoleUpdated',
}

export enum PubSubBindType {
  ChannelPoints = 'PubSubChannelPoints',
  ModerationBan = 'PubSubModerationBan',
  ModerationDelete = 'PubSubModerationDelete',
  ModerationTimeout = 'PubSubModerationTimeout',
  ModerationUnBan = 'PubSubModerationUnBan',
  ModerationUnTimeout = 'PubSubModerationUnTimeout',
}

export enum StreamElementsBindType {
  Donation = 'streamElementsDonation',
  DonationInitialized = 'streamElementsDonationInitialized',
}

export enum StreamLabsBindType {
  Donation = 'streamLabsDonation',
  DonationInitialized = 'streamLabsDonationInitialized',
}

export enum TipeeeBindType {
  StreamDonation = 'tipeeeStreamDonation',
  StreamDonationInitialized = 'tipeeeStreamDonationInitialized',
}

export enum TwitterBindType {
  Retweet = 'twitterRetweet',
  Twitter = 'twitter',
}

export enum EmotesBindType {
  Get = 'emotesGet',
}

export enum YouTubePlayerBindType {
  Connect = 'yTPlayerConnect',
  CurrentID = 'yTPlayerCurrentId',
  DeleteCurrent = 'yTPlayerDeleteCurrent',
  DeletePlaylistByID = 'yTPlayerDeletePlaylistByID',
  DeleteSongRequest = 'yTPlayerDeleteSR',
  Disconnect = 'yTPlayerDisconnect',
  LoadPlaylist = 'yTPlayerLoadPlaylist',
  Randomize = 'yTPlayerRandomize',
  RequestCurrentSong = 'yTPlayerRequestCurrentSong',
  RequestPlaylist = 'yTPlayerRequestPlaylist',
  RequestSonglist = 'yTPlayerRequestSonglist',
  SkipSong = 'yTPlayerSkipSong',
  SongRequest = 'yTPlayerSongRequest',
  State = 'yTPlayerState',
  StealSong = 'yTPlayerStealSong',
  Volume = 'yTPlayerVolume',
}

export type BindTypes =
  | BindType
  | IRCBindType
  | TwitchBindType
  | DiscordBindType
  | PubSubBindType
  | StreamElementsBindType
  | TipeeeBindType
  | TwitterBindType
  | EmotesBindType
  | YouTubePlayerBindType;
