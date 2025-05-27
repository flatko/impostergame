
export const MIN_PLAYERS = 4;
export const MAX_PLAYERS = 10; // Recommended max, can be adjusted
export const LOCAL_STORAGE_PLAYER_NAMES_KEY = 'imposterGamePlayerNames';

export const WORD_LIST_EN: string[] = [
  "Apple", "Artist", "Airport", "Alarm", "Anchor",
  "Banana", "Beach", "Book", "Bridge", "Butterfly",
  "Camera", "Candle", "Car", "Castle", "Cave", "Chair", "Chef", "Chess",
  "Cloud", "Clown", "Coffee", "Comet", "Compass", "Computer", "Crown",
  "Desert", "Diamond", "Dinosaur", "Doctor", "Dog", "Dragon", "Dream", "Dress",
  "Earth", "Elephant", "Email", "Engine", "Evening",
  "Factory", "Family", "Feather", "Festival", "Film", "Fire", "Fish", "Flag", "Flower", "Forest", "Fountain", "Friend",
  "Galaxy", "Game", "Garden", "Ghost", "Gift", "Glasses", "Gold", "Guitar",
  "Hammer", "Hat", "Heart", "Holiday", "Honey", "Horse", "Hospital", "House",
  "Iceberg", "Idea", "Island", "Jacket", "Jellyfish", "Jewelry", "Jungle",
  "Kangaroo", "Key", "King", "Kitchen", "Kite", "Knight",
  "Lamp", "Language", "Laptop", "Laugh", "Lemon", "Letter", "Library", "Light", "Lion", "Lizard",
  "Magic", "Map", "Mask", "Medal", "Memory", "Mirror", "Money", "Monster", "Moon", "Morning", "Mountain", "Mouse", "Movie", "Music", "Mystery",
  "Needle", "Ninja", "Notebook", "Number", "Nurse",
  "Ocean", "Office", "Orange", "Origami", "Owl",
  "Painting", "Pajamas", "Panda", "Paper", "Parade", "Park", "Party", "Password", "Path", "Peach", "Pen", "Pencil", "Perfume", "Phone", "Photo", "Piano", "Picnic", "Pillow", "Pilot", "Pineapple", "Pirate", "Pizza", "Planet", "Pocket", "Poem", "Police", "Popcorn", "Portrait", "Potion", "Present", "Princess", "Puzzle",
  "Queen", "Quill", "Quiet",
  "Rabbit", "Radio", "Rainbow", "Raincoat", "Recipe", "Restaurant", "Ring", "River", "Road", "Robot", "Rocket", "Rose", "Ruler",
  "Safari", "Salad", "Sandwich", "Satellite", "Scarf", "School", "Science", "Scissors", "Score", "Screen", "Sculpture", "Sea", "Secret", "Seed", "Shadow", "Shampoo", "Shark", "Sheep", "Shell", "Ship", "Shoes", "Shop", "Shower", "Signature", "Singer", "Skateboard", "Skeleton", "Ski", "Sky", "Smile", "Snake", "Snow", "Soccer", "Song", "Soup", "Space", "Speaker", "Spider", "Spoon", "Sport", "Spring", "Spy", "Squirrel", "Stadium", "Stage", "Star", "Statue", "Stomach", "Storm", "Story", "Strawberry", "Street", "Suitcase", "Summer", "Sun", "Sunglasses", "Superhero", "Surprise", "Sushi", "Sweater", "Swing", "Sword",
  "Table", "Taco", "Tale", "Tea", "Teacher", "Telescope", "Television", "Tent", "Ticket", "Tiger", "Time", "Toast", "Toilet", "Tomato", "Tongue", "Tool", "Toothbrush", "Tornado", "Tower", "Toy", "Train", "Treasure", "Tree", "Triangle", "Trophy", "Truck", "Trumpet", "Tunnel", "Turtle",
  "Umbrella", "Unicorn", "Uniform",
  "Vacation", "Vampire", "Vase", "Vegetable", "Video", "Village", "Violin", "Volcano", "Vowel",
  "Wallet", "Wand", "Warrior", "Watch", "Water", "Waterfall", "Wave", "Weather", "Wedding", "Whale", "Wheel", "Wind", "Window", "Wine", "Winter", "Wish", "Witch", "Wolf", "Word", "Work", "World", "Worm",
  "Xylophone",
  "Yacht", "Yard", "Yawn", "Year", "Yogurt",
  "Zebra", "Zen", "Zero", "Zipper", "Zombie", "Zoo"
];

// Add your German words here! This is a small sample.
export const WORD_LIST_DE: string[] = [
  "Apfel", "Künstler", "Flughafen", "Alarm", "Anker",
  "Banane", "Strand", "Buch", "Brücke", "Schmetterling",
  "Kamera", "Kerze", "Auto", "Schloss", "Höhle", "Stuhl", "Koch", "Schach",
  "Wolke", "Clown", "Kaffee", "Komet", "Kompass", "Computer", "Krone",
  "Wüste", "Diamant", "Dinosaurier", "Arzt", "Hund", "Drache", "Traum", "Kleid",
  "Erde", "Elefant", "Email", "Motor", "Abend",
  "Fabrik", "Familie", "Feder", "Festival", "Film", "Feuer", "Fisch", "Flagge", "Blume", "Wald", "Brunnen", "Freund",
  "Galaxie", "Spiel", "Garten", "Geist", "Geschenk", "Brille", "Gold", "Gitarre",
  "Hammer", "Hut", "Herz", "Urlaub", "Honig", "Pferd", "Krankenhaus", "Haus",
  "Eisberg", "Idee", "Insel", "Jacke", "Qualle", "Schmuck", "Dschungel",
  "Känguru", "Schlüssel", "König", "Küche", "Drachen", "Ritter",
  "Lampe", "Sprache", "Laptop", "Lachen", "Zitrone", "Brief", "Bibliothek", "Licht", "Löwe", "Eidechse",
  "Magie", "Karte", "Maske", "Medaille", "Erinnerung", "Spiegel", "Geld", "Monster", "Mond", "Morgen", "Berg", "Maus", "Film", "Musik", "Geheimnis",
  "Nadel", "Ninja", "Notizbuch", "Nummer", "Krankenschwester",
  "Ozean", "Büro", "Orange", "Origami", "Eule",
  "Gemälde", "Schlafanzug", "Panda", "Papier", "Parade", "Park", "Party", "Passwort", "Pfad", "Pfirsich", "Stift", "Bleistift", "Parfüm", "Telefon", "Foto", "Klavier", "Picknick", "Kissen", "Pilot", "Ananas", "Pirat", "Pizza", "Planet", "Tasche", "Gedicht", "Polizei", "Popcorn", "Porträt", "Trank", "Geschenk", "Prinzessin", "Puzzle",
  "Königin", "Federkiel", "Ruhe",
  "Kaninchen", "Radio", "Regenbogen", "Regenmantel", "Rezept", "Restaurant", "Ring", "Fluss", "Straße", "Roboter", "Rakete", "Rose", "Lineal",
  // ... (Please add more German words to make the game diverse)
  "Tisch", "Taco", "Märchen", "Tee", "Lehrer", "Teleskop", "Fernseher", "Zelt", "Ticket", "Tiger", "Zeit", "Toast", "Toilette", "Tomate", "Zunge", "Werkzeug", "Zahnbürste", "Tornado", "Turm", "Spielzeug", "Zug", "Schatz", "Baum", "Dreieck", "Trophäe", "Lastwagen", "Trompete", "Tunnel", "Schildkröte",
  "Regenschirm", "Einhorn", "Uniform",
  "Urlaub", "Vampir", "Vase", "Gemüse", "Video", "Dorf", "Violine", "Vulkan", "Vokal",
  "Geldbörse", "Zauberstab", "Krieger", "Uhr", "Wasser", "Wasserfall", "Welle", "Wetter", "Hochzeit", "Wal", "Rad", "Wind", "Fenster", "Wein", "Winter", "Wunsch", "Hexe", "Wolf", "Wort", "Arbeit", "Welt", "Wurm",
  "Xylophon",
  "Yacht", "Hof", "Gähnen", "Jahr", "Joghurt",
  "Zebra", "Zen", "Null", "Reißverschluss", "Zombie", "Zoo"
];
