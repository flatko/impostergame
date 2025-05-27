import { MIN_PLAYERS } from './constants';

export enum Language {
  EN = 'en',
  DE = 'de',
}

export type TranslationSet = {
  // App metadata
  appTitle: string;
  // MainMenu
  mainMenuTagline: string;
  startGame: string;
  gatherPlayers: (minPlayers: number) => string;
  switchToGerman: string;
  switchToEnglish: string;
  footerPlayful: (year: number, title: string) => string;
  // NameEntry
  nameEntryTitle: string;
  addPlayer: string;
  finalizePlayersAndAssignRoles: string;
  backToMainMenu: string;
  minPlayersRequiredError: (minPlayers: number) => string;
  allNamesRequiredError: string;
  uniqueNamesRequiredError: string;
  // PlayerInput
  playerInputPlaceholder: (playerNumber: number) => string;
  removePlayerAriaLabel: string;
  clearPlayerNameAriaLabel: string; 
  // RoleReveal
  passDeviceTo: (playerName: string) => string;
  onlyYouShouldSeeRole: string;
  imPlayerShowRole: (playerName: string) => string;
  alrightPlayer: (playerName: string) => string;
  youAreCivilian: string;
  yourSecretWordIs: string;
  rememberWordDontSay: string;
  youAreImpostor: string;
  impostorIntro: string;
  gotItStartDiscussion: string;
  gotItPassToNext: string;
  playerXofY: (current: number, total: number) => string;
  // DiscussionScreen
  discussionTitle: string;
  discussionIntro: string;
  impostorCountInfo: (count: number) => string;
  goodLuckEveryone: string;
  startNewGame: string;
  footerThanks: (year: number, title: string) => string;
  // Roles
  roleCivilian: string;
  roleImpostor: string;
  // App level alerts/messages
  alertMinPlayersRequired: (minPlayers: number) => string;
  alertUniqueNamesRequired: string;
  loadingPlayerRoles: string;
  // Error Boundary
  errorBoundaryTitle: string;
  errorBoundaryMessage: string;
  errorBoundaryAction: string;
  // Ad Banner
  advertisementLabel: string;
  adShortLabel: string;
  adPlaceholderText: string;
};

export const translations: Record<Language, TranslationSet> = {
  [Language.EN]: {
    appTitle: "Impostor!",
    mainMenuTagline: "Find the impostor among your friends!",
    startGame: "Start Game",
    gatherPlayers: (min) => `Gather ${min} or more players around one device.`,
    switchToGerman: "Deutsch",
    switchToEnglish: "English",
    footerPlayful: (year, title) => `© ${year} ${title}. Have fun!`,
    nameEntryTitle: "Enter Player Names",
    addPlayer: "Add Player",
    finalizePlayersAndAssignRoles: "Start Game & Assign Roles",
    backToMainMenu: "Back to Main Menu",
    minPlayersRequiredError: (min) => `Minimum ${min} players required, and all names must be filled.`,
    allNamesRequiredError: "All names must be filled.",
    uniqueNamesRequiredError: "Player names must be unique.",
    playerInputPlaceholder: (num) => `Player ${num} Name`,
    removePlayerAriaLabel: "Remove player",
    clearPlayerNameAriaLabel: "Clear player name",
    passDeviceTo: (name) => `Pass the device to <br/> <span class="text-4xl text-white">${name}</span>`,
    onlyYouShouldSeeRole: "Only you should see your role. Tap below when you are ready.",
    imPlayerShowRole: (name) => `I'm ${name}, Show My Role`,
    alrightPlayer: (name) => `Alright, ${name}!`,
    youAreCivilian: "You are a",
    yourSecretWordIs: "Your secret word is:",
    rememberWordDontSay: "Remember it, but don't say it out loud! Your goal is to find the Impostor(s).",
    youAreImpostor: "You are an",
    impostorIntro: "You don't know the secret word. Blend in, act natural, and try not to get caught!",
    gotItStartDiscussion: "Got it! Start Discussion",
    gotItPassToNext: "Got it! Pass to Next Player",
    playerXofY: (curr, total) => `Player ${curr} of ${total}`,
    discussionTitle: "Let the Discussion Begin!",
    discussionIntro: "Civilians, your mission is to identify the Impostor(s). <br/>Impostors, do your best to stay hidden!",
    impostorCountInfo: (count) => `There ${count === 1 ? 'is' : 'are'} <span class="text-2xl">${count}</span> Impostor${count === 1 ? '' : 's'} among you.`,
    goodLuckEveryone: "Good luck to everyone! Discuss, deduce, and decide. <br/> The app's role as moderator is now complete for this round.",
    startNewGame: "Start New Game",
    footerThanks: (year, title) => `© ${year} ${title}. Thanks for playing!`,
    roleCivilian: "Civilian",
    roleImpostor: "Impostor",
    alertMinPlayersRequired: (min) => `Minimum ${min} players required.`,
    alertUniqueNamesRequired: "Player names must be unique.",
    loadingPlayerRoles: "Loading player roles...",
    errorBoundaryTitle: "Oops! Something went wrong.",
    errorBoundaryMessage: "We encountered an unexpected error. Please try refreshing the page. If the problem persists, you can report this issue.",
    errorBoundaryAction: "Refresh Page",
    advertisementLabel: "Advertisement",
    adShortLabel: "Ad",
    adPlaceholderText: "Example Banner Ad - Your Content Here",
  },
  [Language.DE]: {
    appTitle: "Impostor!",
    mainMenuTagline: "Finde den Hochstapler unter deinen Freunden!",
    startGame: "Spiel starten",
    gatherPlayers: (min) => `Sammelt ${min} oder mehr Spieler um ein Gerät.`,
    switchToGerman: "Deutsch",
    switchToEnglish: "English",
    footerPlayful: (year, title) => `© ${year} ${title}. Viel Spaß!`,
    nameEntryTitle: "Spielernamen eingeben",
    addPlayer: "Spieler hinzufügen",
    finalizePlayersAndAssignRoles: "Spiel starten & Rollen zuweisen",
    backToMainMenu: "Zurück zum Hauptmenü",
    minPlayersRequiredError: (min) => `Mindestens ${min} Spieler erforderlich und alle Namen müssen ausgefüllt sein.`,
    allNamesRequiredError: "Alle Namen müssen ausgefüllt sein.",
    uniqueNamesRequiredError: "Spielernamen müssen eindeutig sein.",
    playerInputPlaceholder: (num) => `Spieler ${num} Name`,
    removePlayerAriaLabel: "Spieler entfernen",
    clearPlayerNameAriaLabel: "Spielername leeren",
    passDeviceTo: (name) => `Gib das Gerät an <br/> <span class="text-4xl text-white">${name}</span> weiter`,
    onlyYouShouldSeeRole: "Nur du solltest deine Rolle sehen. Tippe unten, wenn du bereit bist.",
    imPlayerShowRole: (name) => `Ich bin ${name}, zeig meine Rolle`,
    alrightPlayer: (name) => `Alles klar, ${name}!`,
    youAreCivilian: "Du bist ein",
    yourSecretWordIs: "Dein geheimes Wort ist:",
    rememberWordDontSay: "Merke es dir, aber sag es nicht laut! Dein Ziel ist es, den/die Hochstapler zu finden.",
    youAreImpostor: "Du bist ein",
    impostorIntro: "Du kennst das geheime Wort nicht. Passe dich an, verhalte dich natürlich und versuche, nicht erwischt zu werden!",
    gotItStartDiscussion: "Verstanden! Diskussion starten",
    gotItPassToNext: "Verstanden! Weitergeben",
    playerXofY: (curr, total) => `Spieler ${curr} von ${total}`,
    discussionTitle: "Die Diskussion kann beginnen!",
    discussionIntro: "Zivilisten, eure Mission ist es, den/die Hochstapler zu identifizieren. <br/>Hochstapler, gebt euer Bestes, um unentdeckt zu bleiben!",
    impostorCountInfo: (count) => `Es ${count === 1 ? 'gibt' : 'gibt'} <span class="text-2xl">${count}</span> Hochstapler unter euch.`,
    goodLuckEveryone: "Viel Glück an alle! Diskutiert, kombiniert und entscheidet. <br/> Die Rolle der App als Moderator ist für diese Runde nun abgeschlossen.",
    startNewGame: "Neues Spiel starten",
    footerThanks: (year, title) => `© ${year} ${title}. Danke fürs Spielen!`,
    roleCivilian: "Zivilist",
    roleImpostor: "Hochstapler",
    alertMinPlayersRequired: (min) => `Mindestens ${min} Spieler erforderlich.`,
    alertUniqueNamesRequired: "Spielernamen müssen eindeutig sein.",
    loadingPlayerRoles: "Lade Spielerrollen...",
    errorBoundaryTitle: "Hoppla! Etwas ist schiefgegangen.",
    errorBoundaryMessage: "Ein unerwarteter Fehler ist aufgetreten. Bitte versuche, die Seite neu zu laden. Wenn das Problem weiterhin besteht, kannst du diesen Fehler melden.",
    errorBoundaryAction: "Seite neu laden",
    advertisementLabel: "Werbung",
    adShortLabel: "Ad",
    adPlaceholderText: "Beispiel Bannerwerbung - Ihr Inhalt hier",
  },
};