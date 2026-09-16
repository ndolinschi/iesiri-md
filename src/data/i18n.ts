import { Language } from "@/types";

export const I18N = {
  ro: {
    app: {
      title: "Ieșiri MD",
      tagline: "Idei de weekend în Chișinău",
      description:
        "Locuri autentice alese de localnici: parcuri, muzee, plimbări verzi și cafenele de suflet, fără clișee.",
      badge: "Chișinău Weekend",
    },
    nav: {
      explore: "Descoperă",
      favorites: "Favorite",
      settings: "Setări",
      random: "O idee la nimereală",
    },
    hero: {
      title: "Unde ieșim în acest weekend?",
      subtitle:
        "18 destinații reale din Chișinău — de la faleza din Buiucani la rozariul din Dendrariu și cafenelele de pe str. București.",
      searchPlaceholder: "Caută parc, lac, muzeu, cafea sau stradă...",
      allZones: "Toate sectoarele",
      allTags: "Toate etichetele",
      freeOnly: "Doar gratis",
      resultsCount: (count: number) =>
        count === 1 ? "1 loc găsit" : `${count} locuri găsite`,
      noResults: "Nu am găsit niciun loc conform filtrelor selectate.",
      resetFilters: "Resetează filtrele",
    },
    categories: {
      all: "Toate",
      parc: "Parcuri",
      plimbare: "Plimbări & Lacuri",
      muzeu: "Muzee & Istorie",
      cafe: "Cafenele & Terase",
    },
    price: {
      gratis: "Gratis",
      ieftin: "Ieftin (≤ 20 MDL)",
      moderat: "Moderat",
    },
    card: {
      viewDetails: "Vezi detalii",
      addToFavorites: "Salvează la favorite",
      removeFromFavorites: "Elimină din favorite",
      durationHint: "Timp estimat",
      zone: "Sector",
      bestTime: "Moment ideal",
      insiderTip: "Sfat local",
    },
    detail: {
      backToList: "Înapoi la catalog",
      highlights: "De ce merită să vii aici",
      localTipTitle: "Sfatul chișinăuianului",
      bestTimeTitle: "Când e cel mai bine să vii",
      durationTitle: "Cât timp să aloci",
      locationTitle: "Adresă & Orientare",
      categoryTitle: "Categorie",
      priceTitle: "Cost intrare",
      savedInFavorites: "Salvat în favorite",
      saveToFavorites: "Adaugă la favorite",
      copiedLink: "Linkul a fost copiat în clipboard!",
      sharePlace: "Distribuie locul",
      relatedPlacesTitle: "Alte idei similare de weekend",
    },
    favorites: {
      title: "Locurile tale salvate",
      subtitle:
        "Planul tău personal de plimbări și ieșiri de weekend în Chișinău.",
      emptyTitle: "Niciun loc salvat încă",
      emptyDescription:
        "Apasă pe inimioară la oricare dintre parcuri, muzee sau cafenele pentru a le păstra aici la îndemână.",
      exploreCta: "Descoperă locuri",
      clearAll: "Golește favoritele",
      clearConfirm: "Ești sigur că vrei să ștergi toate locurile salvate?",
    },
    settings: {
      title: "Setări & Despre aplicație",
      subtitle: "Personalizează limba și preferințele de navigare.",
      languageSection: "Limba interfeței",
      languageDescription: "Alege limba preferată pentru textele și descrierile locurilor.",
      romanian: "Română (Moldova)",
      russian: "Русский",
      dataSection: "Date locale",
      savedCount: (count: number) => `${count} locuri salvate în favorite`,
      clearFavoritesBtn: "Resetează favoritele",
      favoritesCleared: "Lista de favorite a fost resetată.",
      aboutSection: "Despre Ieșiri MD",
      aboutText:
        "Ieșiri MD este un ghid minimalist, fără reclame și fără intermediari turistici, creat pentru oricine vrea să redescopere Chișinăul pe jos, la pas liniștit. Fără circuite artificiale de vinării — doar aer curat, cafea bună, patrimoniu istoric și parcuri îngrijite.",
      weekendTipsTitle: "3 reguli locale pentru un weekend reușit în Chișinău",
      tip1: "1. Diminețile de sâmbătă sunt ideale pentru cafenelele boeme de pe str. București și 31 August — liniște și soare printre tei.",
      tip2: "2. La apus, mergi negreșit la Valea Morilor sau la parcul La Izvor pentru reflexia soarelui peste lac.",
      tip3: "3. Duminica este perfectă pentru o plimbare de 2 ore în Grădina Botanică sau Dendrariu cu o pătură de picnic.",
    },
  },
  ru: {
    app: {
      title: "Ieșiri MD",
      tagline: "Идеи для выходных в Кишинёве",
      description:
        "Настоящие любимые места горожан: парки, музеи, прогулочные набережные и уютные кофейни без туристических шаблонов.",
      badge: "Кишинёв Выходные",
    },
    nav: {
      explore: "Обзор",
      favorites: "Избранное",
      settings: "Настройки",
      random: "Случайная идея",
    },
    hero: {
      title: "Куда выбраться на этих выходных?",
      subtitle:
        "18 проверенных локаций Кишинёва — от набережной на Буюканах до розария в Дендрарии и двориков на улице Букурешть.",
      searchPlaceholder: "Поиск: парк, озеро, музей, кофе, улица...",
      allZones: "Все районы",
      allTags: "Все теги",
      freeOnly: "Только бесплатно",
      resultsCount: (count: number) => {
        const mod10 = count % 10;
        const mod100 = count % 100;
        if (mod10 === 1 && mod100 !== 11) return `Найдено ${count} место`;
        if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20))
          return `Найдено ${count} места`;
        return `Найдено ${count} мест`;
      },
      noResults: "По выбранным фильтрам ничего не найдено.",
      resetFilters: "Сбросить фильтры",
    },
    categories: {
      all: "Все",
      parc: "Парки",
      plimbare: "Прогулки и озёра",
      muzeu: "Музеи и история",
      cafe: "Кофейни и террасы",
    },
    price: {
      gratis: "Бесплатно",
      ieftin: "Бюджетно (≤ 20 MDL)",
      moderat: "Умеренно",
    },
    card: {
      viewDetails: "Подробнее",
      addToFavorites: "В избранное",
      removeFromFavorites: "Удалить из избранного",
      durationHint: "Примерное время",
      zone: "Район",
      bestTime: "Лучшее время",
      insiderTip: "Совет горожанина",
    },
    detail: {
      backToList: "Назад к списку",
      highlights: "Почему стоит прийти сюда",
      localTipTitle: "Совет местного жителя",
      bestTimeTitle: "Когда лучше приходить",
      durationTitle: "Сколько времени заложить",
      locationTitle: "Адрес и ориентиры",
      categoryTitle: "Категория",
      priceTitle: "Стоимость входа",
      savedInFavorites: "В избранном",
      saveToFavorites: "Добавить в избранное",
      copiedLink: "Ссылка скопирована в буфер обмена!",
      sharePlace: "Поделиться",
      relatedPlacesTitle: "Похожие идеи для выходных",
    },
    favorites: {
      title: "Ваши сохранённые места",
      subtitle: "Персональный маршрут прогулок и выходных по Кишинёву.",
      emptyTitle: "Пока ничего не сохранено",
      emptyDescription:
        "Нажмите на сердечко у любого парка, музея или кофейни, чтобы сохранить их в этот список.",
      exploreCta: "Найти интересные места",
      clearAll: "Очистить список",
      clearConfirm: "Вы уверены, что хотите удалить все сохранённые места?",
    },
    settings: {
      title: "Настройки и О проекте",
      subtitle: "Выбор языка и управление сохраненными данными.",
      languageSection: "Язык интерфейса",
      languageDescription: "Выберите предпочтительный язык для текстов и описаний мест.",
      romanian: "Română (Молдавский / Румынский)",
      russian: "Русский",
      dataSection: "Локальные данные",
      savedCount: (count: number) => `${count} мест сохранено в избранное`,
      clearFavoritesBtn: "Очистить избранное",
      favoritesCleared: "Список избранного очищен.",
      aboutSection: "О проекте Ieșiri MD",
      aboutText:
        "Ieșiri MD — это минималистичный гид без рекламы и коммерческих штампов, созданный для тех, кто хочет заново открыть Кишинёв пешком в спокойном темпе. Никаких шаблонных винных туров — только свежий воздух, отличный кофе, каменная история и зеленые парки.",
      weekendTipsTitle: "3 местных правила отличных выходных в Кишинёве",
      tip1: "1. Субботнее утро идеально для кофе на улицах Букурешть и 31 Августа — тишина и солнце сквозь кроны лип.",
      tip2: "2. На закате обязательно отправляйтесь на Валя Морилор или в парк Ла Извор ради вечерних красок над водой.",
      tip3: "3. В воскресенье приятно провести пару часов в Ботаническом саду или Дендрарии с пледом и книгой.",
    },
  },
} as const;

export function getTranslation(lang: Language) {
  return I18N[lang] || I18N.ro;
}
