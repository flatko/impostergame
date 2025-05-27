
export enum GamePhase {
  MainMenu,
  NameEntry,
  RoleReveal,
  Discussion,
}

export enum Role {
  Civilian = "Civilian",
  Impostor = "Impostor",
}

export interface Player {
  id: string;
  name: string;
  role: Role | null;
  word: string | null; // Civilians get the word, Impostors don't
}

export enum Language {
  EN = 'en',
  DE = 'de',
}
