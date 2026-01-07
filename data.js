// Dane z pytaniami i odpowiedziami
const questions = [
  // Wykład 5: Dyskretne urządzenia czujnikowe
  {
    id: 1,
    lecture: "Wykład 5: Dyskretne urządzenia czujnikowe",
    question: "Zadaniem systemu automatyki procesu dyskretnego może być:",
    answers: [
      { text: "regulacja temperatury w procesie hartowania", correct: false },
      { text: "wybór odpowiednich dróg transportowych", correct: true },
      { text: "sporządzanie planu produkcji na podstawie zamówień klientów", correct: true },
      { text: "podnoszenie kwalifikacji załogi", correct: false }
    ]
  },
  {
    id: 2,
    lecture: "Wykład 5: Dyskretne urządzenia czujnikowe",
    question: "Pod pojęciem agregatu rozumie się:",
    answers: [
      { text: "stanowiska robocze, np. montażowe na których realizowany jest proces", correct: true },
      { text: "zbiór operacji technologicznych danego procesu", correct: false },
      { text: "kompleks środków (energia, materiały, ludzie i maszyny) produkcyjnych", correct: false },
      { text: "maszyny wykorzystywane w procesie produkcyjnym", correct: true }
    ]
  },
  {
    id: 3,
    lecture: "Wykład 5: Dyskretne urządzenia czujnikowe",
    question: "Właściwości procesu dyskretnego:",
    answers: [
      { text: "dotyczą cech maszyn i ich otoczenia", correct: true },
      { text: "opisywane są przez elementy teorii Klira", correct: false },
      { text: "zbierane są przez urządzenia sensoryczne", correct: true },
      { text: "uwzględniają także krytyczne parametry oprzyrządowania", correct: true }
    ]
  },
  {
    id: 4,
    lecture: "Wykład 5: Dyskretne urządzenia czujnikowe",
    question: "Urządzeniem sensorycznym jest:",
    answers: [
      { text: "czujnik i układ analizy wyników pomiaru", correct: true },
      { text: "zespół czujników współpracujących z przetwornikami", correct: true },
      { text: "okno pomiarowe i metoda pomiarowa", correct: false },
      { text: "układ analizy obrazów wizyjnych", correct: false }
    ]
  },
  {
    id: 5,
    lecture: "Wykład 5: Dyskretne urządzenia czujnikowe",
    question: "Układy taktylne stosowane są do:",
    answers: [
      { text: "zbierania informacji o położeniu członów manipulatora", correct: false },
      { text: "obróbki informacji z sensorów wizyjnych", correct: false },
      { text: "przetwarzania sygnałów analogowych na kodowane", correct: false },
      { text: "przekształcania informacji akustycznej na sygnał dźwiękowy", correct: false }
    ]
  },
  {
    id: 6,
    lecture: "Wykład 5: Dyskretne urządzenia czujnikowe",
    question: "Kod Greya umożliwia uzyskanie:",
    answers: [
      { text: "dwukrotnie większej rozdzielczości niż naturalny kod dwójkowy", correct: true },
      { text: "takiej samej rozdzielczości niż naturalny kod dwójkowy", correct: false },
      { text: "większej rozdzielczości niż kod BCD", correct: false },
      { text: "dwukrotnie mniejszej rozdzielczości niż naturalny kod dwójkowy", correct: false }
    ]
  },
  {
    id: 7,
    lecture: "Wykład 5: Dyskretne urządzenia czujnikowe",
    question: "Układy tensometryczne stosowane są do:",
    answers: [
      { text: "pomiaru sił i momentów", correct: true },
      { text: "sygnalizacji zapełnienia magazynów", correct: false },
      { text: "rejestracji przypadkowych sygnałów zakłócających", correct: false },
      { text: "analizy zmian ciśnienia", correct: true }
    ]
  },
  {
    id: 8,
    lecture: "Wykład 5: Dyskretne urządzenia czujnikowe",
    question: "Sensory hallotronowe stosowane są do:",
    answers: [
      { text: "pomiaru natężenia prądu", correct: true },
      { text: "pomiarów mocy energii elektrycznej", correct: true },
      { text: "pomiaru długości", correct: true },
      { text: "pomiarów pola magnetycznego", correct: true }
    ]
  },
  {
    id: 9,
    lecture: "Wykład 5: Dyskretne urządzenia czujnikowe",
    question: "Łączniki drogowe:",
    answers: [
      { text: "to czujniki obecności", correct: true },
      { text: "mogą pracować z częstotliwością 100 Hz", correct: false },
      { text: "mają charakterystykę liniową, bez histerezy", correct: false },
      { text: "są sensorami położenia", correct: false }
    ]
  },
  // Wykład 6: Dyskretne urządzenia wykonawcze
  {
    id: 10,
    lecture: "Wykład 6: Dyskretne urządzenia wykonawcze",
    question: "Urządzeniem wykonawczym jest:",
    answers: [
      { text: "pulpit sterowania ręcznego", correct: false },
      { text: "silnik pneumatyczny", correct: true },
      { text: "chwytak robota przemysłowego", correct: true },
      { text: "czytnik taśmy perforowanej", correct: false }
    ]
  },
  {
    id: 11,
    lecture: "Wykład 6: Dyskretne urządzenia wykonawcze",
    question: "Sygnały sterujące urządzeniami wykonawczymi:",
    answers: [
      { text: "mogą mieć postać binarną", correct: true },
      { text: "stanowią sprzężenie zwrotne w układzie automatyki", correct: false },
      { text: "generowane są w układach blokad i sygnalizacji", correct: false },
      { text: "mogą mieć postać analogową", correct: true }
    ]
  },
  {
    id: 12,
    lecture: "Wykład 6: Dyskretne urządzenia wykonawcze",
    question: "Właściwości procesu dyskretnego:",
    answers: [
      { text: "dotyczą cech maszyn i ich otoczenia", correct: true },
      { text: "opisywane są przez elementy teorii Klira", correct: false },
      { text: "zbierane są przez urządzenia sensoryczne", correct: true },
      { text: "uwzględniają także krytyczne parametry oprzyrządowania", correct: true }
    ]
  },
  {
    id: 13,
    lecture: "Wykład 6: Dyskretne urządzenia wykonawcze",
    question: "Urządzeniem sensorycznym jest:",
    answers: [
      { text: "czujnik i układ analizy wyników pomiaru", correct: true },
      { text: "zespół czujników współpracujących z przetwornikami", correct: true },
      { text: "okno pomiarowe i metoda pomiarowa", correct: false },
      { text: "układ analizy obrazów wizyjnych", correct: false }
    ]
  },
  {
    id: 14,
    lecture: "Wykład 6: Dyskretne urządzenia wykonawcze",
    question: "Urządzenia do wprowadzania danych do układu sterowania:",
    answers: [
      { text: "zalicza się do grupy urządzeń wykonawczych", correct: false },
      { text: "mają możliwość rejestracji wartości sygnałów sterujących", correct: false },
      { text: "zawierają sensory do oceny warunków otoczenia", correct: false },
      { text: "umożliwiają dokonywanie zmian parametrów urządzeń wykonawczych", correct: false }
    ]
  },
  {
    id: 15,
    lecture: "Wykład 6: Dyskretne urządzenia wykonawcze",
    question: "Siłowniki pneumatyczne w procesach dyskretnych:",
    answers: [
      { text: "sterowane są sygnałami binarnymi", correct: true },
      { text: "wyposażone są w układ pomiaru położenia", correct: false },
      { text: "można zatrzymać (zahamować) w dowolnej pozycji", correct: false },
      { text: "można obciążać siłami poprzecznymi", correct: false }
    ]
  },
  {
    id: 16,
    lecture: "Wykład 6: Dyskretne urządzenia wykonawcze",
    question: "Układy tensometryczne stosowane są do:",
    answers: [
      { text: "pomiaru sił i momentów", correct: true },
      { text: "sygnalizacji zapełnienia magazynów", correct: false },
      { text: "rejestracji przypadkowych sygnałów zakłócających", correct: false },
      { text: "analizy zmian ciśnienia", correct: true }
    ]
  },
  {
    id: 17,
    lecture: "Wykład 6: Dyskretne urządzenia wykonawcze",
    question: "Do prezentacji sygnałów wyjściowych układu automatyki stosuje się:",
    answers: [
      { text: "rejestratory", correct: true },
      { text: "wyświetlacze diodowe", correct: true },
      { text: "wskaźniki analogowe", correct: true },
      { text: "liczniki cyfrowe", correct: true }
    ]
  },
  {
    id: 18,
    lecture: "Wykład 6: Dyskretne urządzenia wykonawcze",
    question: "Łączniki drogowe:",
    answers: [
      { text: "to czujniki obecności", correct: true },
      { text: "urządzenia wykonawcze", correct: false },
      { text: "mają charakterystykę liniową, bez histerezy", correct: false },
      { text: "są sensorami położenia", correct: false }
    ]
  },
  // Wykład 7: Problemy automatyzacji wybranych procesów
  {
    id: 19,
    lecture: "Wykład 7: Problemy automatyzacji wybranych procesów",
    question: "Eksploatacja systemu automatyki polega na:",
    answers: [
      { text: "identyfikacji pracy obiektu", correct: false },
      { text: "przewidywaniu stanów awaryjnych", correct: false },
      { text: "określeniu zadań sterowania optymalnego", correct: false },
      { text: "harmonogramowaniu realizacji poszczególnych etapów pracy", correct: false }
    ]
  },
  {
    id: 20,
    lecture: "Wykład 7: Problemy automatyzacji wybranych procesów",
    question: "Na efektywność ekonomiczną automatyzacji ma wpływ:",
    answers: [
      { text: "koszt użytkowania i-tego systemu sterowania", correct: true },
      { text: "normatywny okres zwrotu nakładów", correct: true },
      { text: "nakłady kapitałowe poniesione na budowę systemu automatyki", correct: true },
      { text: "koszt własny rocznej produkcji", correct: true }
    ]
  },
  {
    id: 21,
    lecture: "Wykład 7: Problemy automatyzacji wybranych procesów",
    question: "Heurystyczny algorytm harmonogramowania transportu:",
    answers: [
      { text: "dotyczy przydzielania urządzeniom transportowym poszczególnych zadań", correct: true },
      { text: "zawiera bieżące sterowanie komputerowe", correct: false },
      { text: "umożliwia budowę modelu symulacyjnego systemu transportowego", correct: false },
      { text: "dotyczy tylko transportu blach w tłoczni", correct: false }
    ]
  },
  {
    id: 22,
    lecture: "Wykład 7: Problemy automatyzacji wybranych procesów",
    question: "Nakiełczarka to:",
    answers: [
      { text: "urządzenie transportu bliskiego", correct: false },
      { text: "typ obrabiarki", correct: true },
      { text: "czarka stosowana przy kuciu", correct: false },
      { text: "paleta z nakiełkami", correct: false }
    ]
  },
  {
    id: 23,
    lecture: "Wykład 7: Problemy automatyzacji wybranych procesów",
    question: "Człon informacyjny magazynu składa się z układów:",
    answers: [
      { text: "kontroli sprawności działania magazynu", correct: true },
      { text: "sterowania procesem inwentaryzacji", correct: true },
      { text: "sygnalizacji i raportowania o aktualnej sytuacji", correct: true },
      { text: "kontroli stanu zapasów w magazynie", correct: true }
    ]
  },
  {
    id: 24,
    lecture: "Wykład 7: Problemy automatyzacji wybranych procesów",
    question: "Portowe przeładownie kontenerowe powinny:",
    answers: [
      { text: "charakteryzować się dużą wydajnością przeładunkową", correct: true },
      { text: "skrócić czas oczekiwania statków w portach", correct: true },
      { text: "umożliwić obsługę kontenerów o różnych wymiarach", correct: true },
      { text: "zapewnić niezależną obsługę systemów czujnikowych", correct: false }
    ]
  },
  {
    id: 25,
    lecture: "Wykład 7: Problemy automatyzacji wybranych procesów",
    question: "Magazyny wysokiego składowania zawierają:",
    answers: [
      { text: "punkt załadunkowy oraz wyładunkowy", correct: true },
      { text: "regały i windy", correct: true },
      { text: "przechowują półprodukty, narzędzia i wyroby", correct: true },
      { text: "kontenery", correct: true }
    ]
  },
  {
    id: 26,
    lecture: "Wykład 7: Problemy automatyzacji wybranych procesów",
    question: "Podstawowymi elementami elastycznych systemów produkcyjnych są:",
    answers: [
      { text: "obrabiarki, roboty pomiarowe", correct: true },
      { text: "transportery i suwnice", correct: true },
      { text: "magazyny lokalne i bufory międzyoperacyjne", correct: true },
      { text: "sprzęt komputerowy i oprogramowanie", correct: true }
    ]
  },
  {
    id: 27,
    lecture: "Wykład 7: Problemy automatyzacji wybranych procesów",
    question: "W systemie generowania sekwencji operacji jest:",
    answers: [
      { text: "stosowana preferencja jakościowa", correct: false },
      { text: "niezbędny automat usuwania stanów perspektywicznych", correct: false },
      { text: "zawarty układ generatora funkcyjnego", correct: false },
      { text: "generowany kod systemowy", correct: false }
    ]
  }
];

