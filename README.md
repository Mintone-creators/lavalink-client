# Lavalink Client
Easy, flexible and feature-rich lavalink@v4 Client. Both for Beginners and Proficients.

> [!NOTE]
> This is a fork of the original [lavalink-client](https://github.com/Tomato6966/lavalink-client) with some additional
> features and fixes.

> [!NOTE]
> We push every change to our dev branch.

# Install

Latest stable Version: **`v2.4.0`**

<details><summary>👉 via NPM</summary>

```bash
npm install --save Mintone-creators/lavalink-client
```

</details>

<details><summary>👉 via YARN</summary>

```bash
yarn add Mintone-creators/lavalink-client
```

</details>

# Documentation

Check out the [Documentation](https://tomato6966.github.io/lavalink-client/)
- See all [Manager-Events, e.g. for Track / player and general errors / logs](https://tomato6966.github.io/lavalink-client/extra/manager-events)
- See all [NodeManager-Events e.g. for Node Errors / logs](https://tomato6966.github.io/lavalink-client/extra/node-events)
- See the Guide on [How to do resuming](https://tomato6966.github.io/lavalink-client/extra/resuming)

# Used in:

- [Betty](https://betty.cx/)
- [Mivator](https://discord.gg/5dUb7M2qCj)

# Features

- 💯 Lavalink v4 Supported only (with Lavalink Plugins)

- ✅ Player-Destroy Reasons like:
  - Channel got deleted, Player got disconnected...

- ✨ Choose able queue stores (maps, collections, redis, databases, ...)
  - You can create your own queueStore, thus make it easy to sync queues accross multiple connections (e.g. dashboard-bot)
  - Automated Queue Sync methods
  - Automated unresolveable Tracks (save the queries as Partial Track Objects -> Fetch the tracks only once they are gonna play)

- 😍 Included Filter & Equalizer Management

- 👍 Multiple Player Options *for easier use*
  - onDisconnect -> Player Destroy / auto Reconnect
  - onEmptyQueue -> Player Destroy / leave After x Time
  - instaFixFilter -> seek the player after applying a filter, to instantly apply it's effect (only works for little-durational-songs)
  - applyVolumeAsFilter -> instead of using lavalink.volume, it uses lavalink.filters.volume which is much different!

- 🛡️ Lavalink Validations
  - It only let's you use the filters / plugins / sources, if Lavalink actually has it enabled

- 🛡️ Client Validations
  - Allows you to whitelist links and even blacklist links / words / domain names, so that it doesn't allow requests you don't want!
  - Checks almost all Lavalink Requests for out of bound errors, right before the request is made to prevent process breaking errors.

- 🧑‍💻 Memory friendly and easy style
  - Only the required data is displayed, and the store-way & types match Lavalink#IMPLEMENTATION.md

- 😘 Automated Handlings
  - Skips the songs, on TrackEnd, TrackStuck, TrackError,
  - Destroys the player on channeldelete
  - Pauses / resumes the player if it get's muted / unmuted (server-wide) [soon]
  - ...

- 😁 Much much more!

***