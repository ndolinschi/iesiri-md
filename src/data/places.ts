import { Place } from "@/types";

export const PLACES: Place[] = [
  {
    id: "parcul-dendrariu",
    name: {
      ro: "Parcul Dendrariu",
      ru: "Парк Дендрарий",
    },
    shortDescription: {
      ro: "Oază liniștită cu rozariu spectaculos, alei umbroase de conifere și bănci ideale pentru lectură.",
      ru: "Уютный зеленый оазис с огромным розарием, тенистыми аллеями хвойных и лавочками для чтения.",
    },
    fullDescription: {
      ro: "Dendrariul este probabil cel mai îngrijit parc din Chișinău. Departe de agitația bulevardelor, parcul oferă zeci de hectare de colecții botanice, un rozariu imens înfloritor din mai până în octombrie, un iaz cu nuferi și alei aerisite unde localnicii vin să citească sau să facă plimbări lungi de weekend.",
      ru: "Дендрарий — один из самых ухоженных и спокойных парков Кишинёва. Десятки гектаров ботанических коллекций, великолепный розарий, цветущий с мая по октябрь, пруд с кувшинками и просторные аллеи для неспешных прогулок вдали от городского шума.",
    },
    category: "parc",
    priceLevel: "ieftin",
    tags: ["ieftin", "parc", "plimbare", "natura", "flori", "liniste"],
    zone: "Buiucani",
    address: "str. Ion Creangă 4 / str. Vasile Lupu",
    duration: {
      ro: "1.5 – 3 ore",
      ru: "1.5 – 3 часа",
    },
    bestTime: {
      ro: "Sâmbătă sau duminică dimineața (09:00 - 12:00)",
      ru: "Суббота или воскресенье утром (09:00 - 12:00)",
    },
    localTip: {
      ro: "Intrarea secundară dinspre str. Vasile Lupu este adesea mai puțin aglomerată. Biletul costă doar 10–15 MDL.",
      ru: "Вход со стороны улицы Василе Лупу обычно свободнее. Входной билет стоит всего 10–15 леев.",
    },
    highlights: {
      ro: [
        "Colecție de peste 1000 de specii de arbori și arbuști",
        "Rozariu vast și labirint floral",
        "Iaz pitoresc cu rațe și nuferi",
        "Perfect pentru picnic pe iarbă sau lectură",
      ],
      ru: [
        "Более 1000 видов редких деревьев и кустарников",
        "Большой цветущий розарий",
        "Живописный пруд с утками и кувшинками",
        "Идеальное место для пикника на газоне или чтения",
      ],
    },
  },
  {
    id: "valea-morilor",
    name: {
      ro: "Parcul Valea Morilor & Scara Cascadelor",
      ru: "Парк Валя Морилор и Каскадная лестница",
    },
    shortDescription: {
      ro: "Inima plimbărilor de weekend: lacul de 2.5 km, treptele monumentale de granit și apusurile aurii.",
      ru: "Сердце кишинёвских выходных: кольцо вокруг озера 2.5 км, гранитная лестница и закаты.",
    },
    fullDescription: {
      ro: "Fostul 'Comsomolist' este locul unde se întâlnește tot Chișinăul în weekend: alergători de dimineață, familii cu cărucioare, tineri cu role sau cafea la pachet și pictori la apus. Coboară pe Scara Cascadelor proaspăt restaurată, fă o tură completă de lac și oprește-te la o cafea pe ponton.",
      ru: "Любимое место горожан для отдыха у воды. Здесь утром бегают спортсмены, днем гуляют с колясками, а вечером собираются у ротонды провожать закат. Полный круг вокруг озера составляет около 2.5 км отличного пешеходного маршрута.",
    },
    category: "plimbare",
    priceLevel: "gratis",
    tags: ["gratis", "plimbare", "lac", "parc", "apus", "sport"],
    zone: "Centru",
    address: "str. Alexei Mateevici / str. Grigore Alexandrescu",
    duration: {
      ro: "1 – 2.5 ore",
      ru: "1 – 2.5 часа",
    },
    bestTime: {
      ro: "La apus de soare (ora de aur peste lac)",
      ru: "На закате (золотой час над водной гладью)",
    },
    localTip: {
      ro: "Ia o cafea la pachet de la gheretele de lângă Universitate și coboară pe treptele cascadelor.",
      ru: "Возьмите кофе с собой на Матеевича у Госуниверситета и спускайтесь по каскадной лестнице.",
    },
    highlights: {
      ro: [
        "Scara Cascadelor cu fântâni arteziene și foișor clasic",
        "Pistă circulară de promenadă și biciclete de 2.5 km",
        "Închirieri de bărci și hidrobiciclete în sezon",
        "Vedere panoramică spre dealurile Buiucaniului",
      ],
      ru: [
        "Каскадная лестница с фонтанами и классической ротондой",
        "Оборудованная набережная для бега и велопрогулок",
        "Прокат лодок и катамаранов в тёплый сезон",
        "Панорамный вид на закат над холмами Буюкан",
      ],
    },
  },
  {
    id: "gradina-publica-stefan-cel-mare",
    name: {
      ro: "Grădina Publică Ștefan cel Mare",
      ru: "Центральный парк Штефан чел Маре",
    },
    shortDescription: {
      ro: "Parcul istoric central al Chișinăului, cu Aleea Clasicilor, arbori seculari și partide aprinse de șah.",
      ru: "Старейший парк Кишинёва с Аллеей Классиков, вековыми дубами и уличными шахматистами.",
    },
    fullDescription: {
      ro: "Amenajat încă din 1818, parcul 'Pușkin' rămâne nucleul vieții boeme din Chișinău. Aici te plimbi pe sub teii și castanii seculari, admiri busturile marilor scriitori de pe Aleea Clasicilor, asculți fântâna arteziană din centru și observi bătrânii orașului adunați la partide de șah și table.",
      ru: "Основанный в 1818 году, главный парк города сохранил атмосферу старого Кишинёва. Вековые платаны и липы, бюсты классиков литературы, центральный гранитный фонтан и непременные партии пенсионеров в шахматы и нарды на боковых скамейках.",
    },
    category: "parc",
    priceLevel: "gratis",
    tags: ["gratis", "parc", "istorie", "plimbare", "centru"],
    zone: "Centru",
    address: "bd. Ștefan cel Mare și Sfânt / str. 31 August 1989",
    duration: {
      ro: "45 – 90 min",
      ru: "45 – 90 мин",
    },
    bestTime: {
      ro: "Duminică la prânz, după o cafea în centru",
      ru: "В воскресенье в обеденное время после чашки кофе",
    },
    localTip: {
      ro: "Găsește cei doi arbori ginkgo biloba istorici și bustul lui Pușkin, cel mai vechi monument din Chișinău (1885).",
      ru: "Найдите реликтовые деревья гинкго билоба и бюст Пушкина работы Опекушина — старейший памятник города (1885).",
    },
    highlights: {
      ro: [
        "Aleea Clasicilor literaturii române",
        "Fântâna arteziană istorică din centrul stelei aleilor",
        "Copaci protejați de stat vechi de peste 160 de ani",
        "Aproape de Teatrul Național de Operă și Balet",
      ],
      ru: [
        "Знаменитая Аллея Классиков",
        "Исторический фонтан в форме звезды",
        "Вековые дубы и редкие деревья, охраняемые государством",
        "Выход к Театру Оперы и Балета",
      ],
    },
  },
  {
    id: "muzeul-national-de-arta",
    name: {
      ro: "Muzeul Național de Artă (MNAM)",
      ru: "Национальный художественный музей (MNAM)",
    },
    shortDescription: {
      ro: "Capodoperă arhitecturală (Gimnaziul Dadiani) cu expoziții de pictură, sculptură și o curte interioară calmă.",
      ru: "Архитектурный шедевр бывшей женской гимназии Дадиани с богатой коллекцией живописи и тихим двориком.",
    },
    fullDescription: {
      ro: "Restaurat impecabil, edificiul proiectat de Alexandru Bernardazzi găzduiește cea mai importantă colecție de artă plastică din Moldova: de la icoane medievale până la modernism basarabean și expoziții contemporane temporare. Tavanele înalte, scările de marmură și lumina naturală fac vizita o plăcere autentică.",
      ru: "Великолепно отреставрированное здание гимназии княгини Дадиани работы архитектора Бернардацци. Здесь собраны иконы, полотна молдавских и европейских мастеров, графика и скульптура. Светлые залы с дубовым паркетом создают редкую атмосферу спокойствия.",
    },
    category: "muzeu",
    priceLevel: "ieftin",
    tags: ["ieftin", "muzeu", "arta", "istorie", "arhitectura"],
    zone: "Centru",
    address: "str. 31 August 1989, 115",
    duration: {
      ro: "1 – 1.5 ore",
      ru: "1 – 1.5 часа",
    },
    bestTime: {
      ro: "Sâmbătă după-amiază când lumina cade prin ferestrele mari",
      ru: "Суббота днем, когда мягкий свет льется через высокие окна",
    },
    localTip: {
      ro: "Biletul de intrare costă doar 20 MDL pentru adulți (10 MDL studenți). Nu ratați galeria de artă contemporană de la etaj.",
      ru: "Входной билет всего 20 леев для взрослых. Обязательно поднимитесь на второй этаж в залы молдавского авангарда.",
    },
    highlights: {
      ro: [
        "Arhitectură eclectică proiectată de Alexandru Bernardazzi",
        "Opere de Theodor Pallady, Corneliu Baba, Mihail Grecu",
        "Expoziții temporare europene de înalt nivel",
        "Ambianță liniștită ideală pentru introspecție",
      ],
      ru: [
        "Архитектура авторства Александра Бернардацци",
        "Шедевры Михаила Греку, Корнелиу Бабы и европейских мастеров",
        "Регулярные временные международные выставки",
        "Тихие залы без туристической суеты",
      ],
    },
  },
  {
    id: "muzeul-national-de-istorie",
    name: {
      ro: "Muzeul Național de Istorie a Moldovei",
      ru: "Национальный музей истории Молдовы",
    },
    shortDescription: {
      ro: "Lupoaica Capitolină la intrare, Tezaurul de aur, arme medievale și faimoasa dioramă a Operațiunii Iași-Chișinău.",
      ru: "Капитолийская волчица у входа, золотая сокровищница, рыцарские доспехи и знаменитая диорама.",
    },
    fullDescription: {
      ro: "Amplasat în fostul Gimnaziu de Băieți nr. 1, muzeul păstrează peste 300.000 de piese din paleolitic până în epoca contemporană. În curte te întâmpină copia Lupoaicei capitoline donate de Roma, iar la interior găsești un impresionant tezaur de aur și argint antic, săli de arme și diorama masivă de la etaj.",
      ru: "Главный исторический музей страны в монументальном здании XIX века. Перед фасадом установлена копия римской Капитолийской волчицы. Внутри — богатейшая археология Кукутень-Триполье, средневековое оружие, золотая кладовая и масштабная диорама.",
    },
    category: "muzeu",
    priceLevel: "ieftin",
    tags: ["ieftin", "muzeu", "istorie", "arhitectura", "educativ"],
    zone: "Centru",
    address: "str. 31 August 1989, 121a",
    duration: {
      ro: "1.5 – 2 ore",
      ru: "1.5 – 2 часа",
    },
    bestTime: {
      ro: "Duminică înainte de prânz",
      ru: "Воскресенье до полудня",
    },
    localTip: {
      ro: "În curtea interioară sunt expuse piese mari de artilerie și fragmente arhitecturale medievale.",
      ru: "Во внутреннем дворе под открытым небом выставлена историческая бронетехника и пушки.",
    },
    highlights: {
      ro: [
        "Sala Tezaurului cu monede și bijuterii dacice și romane",
        "Diorama monumentală a Bătăliei pentru Chișinău",
        "Curtea istorică și arhitectura monumentală",
        "Expoziții dedicate tradițiilor populare basarabene",
      ],
      ru: [
        "Зал сокровищ с античными монетами и украшениями",
        "Монументальная художественная диорама",
        "Коллекция археологии культуры Триполье",
        "Уютный тенистый внутренний дворик",
      ],
    },
  },
  {
    id: "parcul-valea-trandafirilor",
    name: {
      ro: "Parcul Valea Trandafirilor",
      ru: "Парк Долина Роз",
    },
    shortDescription: {
      ro: "Salbă de trei lacuri, pod suspendat pietonal, alei împădurite și terasa 'Roata Dracului'.",
      ru: "Каскад трех озер, подвесной пешеходный мостик, лесные тропы и колесо обозрения.",
    },
    fullDescription: {
      ro: "Unul dintre cele mai variate parcuri din Chișinău, Valea Trandafirilor coboară printre dealurile Botanicii oferind trei lacuri în cascadă, un izvor curat, un mic pod suspendat și mult spațiu umbros sub sălcii bătrâne. Este locul perfect pentru o alergare, o cafea la malul apei sau o plimbare nostalgică lângă roata panoramică.",
      ru: "Живописный парк в районе Ботаника с каскадом водоёмов, тенистыми ивами и романтичным подвесным мостом. Здесь приятно гулять вдоль берега, кормить уток, покататься на велосипеде или вспомнить детство возле ретро-аттракционов.",
    },
    category: "parc",
    priceLevel: "gratis",
    tags: ["gratis", "parc", "lac", "plimbare", "natura", "priveliste"],
    zone: "Botanica",
    address: "str. Trandafirilor / bd. Decebal",
    duration: {
      ro: "1 – 2 ore",
      ru: "1 – 2 часа",
    },
    bestTime: {
      ro: "După-amiază sau spre seară",
      ru: "Вторая половина дня или предзакатные часы",
    },
    localTip: {
      ro: "Aleea dintre lacul 1 și lacul 2 oferă cele mai bune unghiuri pentru fotografii pe pasarela de lemn.",
      ru: "Дорожка между первым и вторым озером у деревянного мостика — отличная точка для красивых фото.",
    },
    highlights: {
      ro: [
        "Trei lacuri legate prin mici cascade și stăvilare",
        "Pod pietonal suspendat deasupra râpei",
        "Parc de distracții retro cu roată panoramică",
        "Zone amenajate pentru skate și workout",
      ],
      ru: [
        "Три каскадных озера с деревянными мостиками",
        "Подвесной пешеходный мост",
        "Ретро-колесо обозрения с видом на Ботанику",
        "Современные спортивные и воркаут площадки",
      ],
    },
  },
  {
    id: "gradina-botanica",
    name: {
      ro: "Grădina Botanică 'Alexandru Ciubotaru'",
      ru: "Ботанический сад им. Александру Чуботару",
    },
    shortDescription: {
      ro: "104 hectare de pajiști deschise, insulă japoneză, colecții de liliac și conifere la Porțile Orașului.",
      ru: "104 гектара простора, японский садик с беседкой, холмы и поляны для пикников у Ворот Города.",
    },
    fullDescription: {
      ro: "Cea mai întinsă arie verde din capitală, Grădina Botanică este un refugiu spectaculos de weekend. Terenul deluros include o insulă cu foișor în stil oriental, un rozariu imens, pajiști vaste ideale pentru pături de picnic și alei lungi flancate de magnolii, mesteceni și brazi rari.",
      ru: "Огромная территория на въезде в город со стороны аэропорта. Здесь чувствуешь себя на природе за городом: холмистый рельеф, искусственное озеро с островком в японском стиле, розарии, альпинарии и бескрайние поляны, где разрешено устраивать пикники на пледах.",
    },
    category: "parc",
    priceLevel: "ieftin",
    tags: ["ieftin", "parc", "natura", "picnic", "plimbare", "lac"],
    zone: "Botanica",
    address: "str. Pădurii 18 (lângă Porțile Orașului)",
    duration: {
      ro: "2 – 4 ore",
      ru: "2 – 4 часа",
    },
    bestTime: {
      ro: "Weekend de la prânz până la asfințit (pentru picnic)",
      ru: "Выходные с полудня до заката (для долгого пикника)",
    },
    localTip: {
      ro: "Vino cu o pătură și termos de ceai. Biletul este 15 MDL, iar spațiul este atât de mare încât găsești mereu o pajiște izolată.",
      ru: "Возьмите плед, книгу и термос. Входной билет 15 леев, а места так много, что легко найти уединенную поляну.",
    },
    highlights: {
      ro: [
        "Grădina japoneză cu podețe curbate și foișor",
        "Iazul central cu stuf și păsări de apă",
        "Colecție rară de arbori din întreaga lume",
        "Cel mai bun loc din Chișinău pentru picnic pe iarbă",
      ],
      ru: [
        "Японский сад с деревянными арками и павильоном",
        "Большое озеро с островами и водоплавающими птицами",
        "Огромные открытые поляны для отдыха",
        "Удаленность от городского шума и чистый воздух",
      ],
    },
  },
  {
    id: "parcul-afgan-lacurile-riscani",
    name: {
      ro: "Parcul Memorial 'Râșcani' & Lacurile Braniște",
      ru: "Мемориальный парк Рышкановка и озера Браниште",
    },
    shortDescription: {
      ro: "Alei lungi printre pini înalți, lacuri liniștite cu pescari amatori și terase de cartier fără fițe.",
      ru: "Сосновые аллеи, каскад тихих прудов с рыбаками и непринужденная районная атмосфера.",
    },
    fullDescription: {
      ro: "Parcul din inima sectorului Râșcani combină solemnitatea complexului memorial cu farmecul naturii semi-sălbatice dinspre strada Braniște. Pădurea de pini oferă un aer curat unic în oraș, iar lacurile de jos sunt locul favorit al pescarilor locali și al celor care vor o plimbare fără aglomerație.",
      ru: "Один из самых душевных парков правого берега. Верхняя часть славится высокими соснами и свежим смолистым воздухом, а нижняя спускается к каскаду прудов, где по выходным собираются местные жители кормить уток и гулять под кронами ив.",
    },
    category: "parc",
    priceLevel: "gratis",
    tags: ["gratis", "parc", "lac", "plimbare", "liniste"],
    zone: "Râșcani",
    address: "str. Miron Costin / str. Nicolae Dimo / str. Braniște",
    duration: {
      ro: "1 – 2 ore",
      ru: "1 – 2 часа",
    },
    bestTime: {
      ro: "Sâmbătă dimineața pentru aerul proaspăt de conifere",
      ru: "Субботнее утро, когда сосновый воздух особенно свеж",
    },
    localTip: {
      ro: "După plimbare, traversează spre aleea pietonală de pe bd. Moscova pentru o plăcintă caldă și o cafea.",
      ru: "После прогулки выйдите на пешеходную аллею Мирон Костин за горячей молдавской плациндой и кофе.",
    },
    highlights: {
      ro: [
        "Pădure densă de pini cu miros intens de rășină",
        "Cascade mici de apă între heleșteie",
        "Trasee liniștite pentru plimbări cu câinele sau jogging",
        "Atmosferă autentică de cartier chișinăuian",
      ],
      ru: [
        "Густой сосновый бор с целебным воздухом",
        "Живописные переливы воды между озерами",
        "Широкие дорожки для пробежек и прогулок",
        "Уютная атмосфера без туристического пафоса",
      ],
    },
  },
  {
    id: "parcul-la-izvor",
    name: {
      ro: "Parcul 'La Izvor' & Faleza Buiucani",
      ru: "Парк «Ла Извор» и набережная Буюкан",
    },
    shortDescription: {
      ro: "Lac mare cu pod suspendat spre insulă, nisip fin de plajă, fântâni luminate și terenuri de sport pe mal.",
      ru: "Большое озеро с пешеходным мостом на остров, песчаный пляж, светомузыкальный фонтан и спорт.",
    },
    fullDescription: {
      ro: "Complet reamenajat în ultimii ani, parcul La Izvor a redevenit perla sectorului Buiucani. Te bucuri de o faleză largă pietonală, un pod spectaculos ce leagă malul de insula centrală a lacului, terenuri moderne de fotbal pe plajă și un spațiu aerisit cu priveliște superbă la apus.",
      ru: "Масштабно обновленный парк на Скулянке/Буюканах. Здесь появилась широкая набережная, пешеходный мост на живописный остров посреди озера, песчаная зона отдыха, спортивные площадки и красивый фонтан у главного входа.",
    },
    category: "plimbare",
    priceLevel: "gratis",
    tags: ["gratis", "plimbare", "lac", "parc", "sport", "apus"],
    zone: "Buiucani",
    address: "str. Calea Ieșilor / str. Ghidighici",
    duration: {
      ro: "1 – 2 ore",
      ru: "1 – 2 часа",
    },
    bestTime: {
      ro: "Seara la apus când se aprind luminile falezei",
      ru: "Вечером на закате, когда зажигается подсветка моста и набережной",
    },
    localTip: {
      ro: "Traversează pe insulă — este cel mai liniștit colț al parcului și oferă o perspectivă de 360 de grade asupra apei.",
      ru: "Обязательно пройдите по мосту на остров — там меньше людей и отличный круговой обзор на озеро.",
    },
    highlights: {
      ro: [
        "Pod pietonal iluminat spre insula lacului",
        "Plajă amenajată și faleză modernizată",
        "Terenuri de sport și piste pentru role și biciclete",
        "Apusuri spectaculoase reflectate pe luciul apei",
      ],
      ru: [
        "Подвесной мост на остров посреди воды",
        "Обустроенный песчаный берег и длинная набережная",
        "Арена пляжного футбола и воркаут зоны",
        "Шикарные открытые закаты над гладью озера",
      ],
    },
  },
  {
    id: "cafenele-bucuresti-armeneasca",
    name: {
      ro: "Cafenele de specialitate pe str. București & Armenească",
      ru: "Спешелти-кофейни на улицах Букурешть и Армянской",
    },
    shortDescription: {
      ro: "Curți interioare vechi, cafea single-origin proaspăt prăjită, croissante artizanale și atmosferă caldă.",
      ru: "Исторические дворики, свежеобжаренный спешелти кофе, круассаны и уютная атмосфера столицы.",
    },
    fullDescription: {
      ro: "Segmentul străzii București dintre Armenească, Vasile Alecsandri și Pușkin a devenit kilometrul zero al cafelei de calitate din Chișinău. Clădirile istorice din piatră de calcar ascund curți cochete unde barista locali prepară V60, Flat White excelent și servesc deserturi de casă într-o atmosferă relaxată de weekend.",
      ru: "Отрезок улицы Букурешть и прилегающих улочек — главный кофейный кластер Кишинёва. В исторических каменных домах с тенистыми двориками готовят превосходный фильтр, флэт-уайт на зерне собственной обжарки и предлагают свежую выпечку в расслабленном ритме.",
    },
    category: "cafe",
    priceLevel: "ieftin",
    tags: ["ieftin", "cafe", "centru", "patiserie", "social"],
    zone: "Centru",
    address: "str. București 68 (intersecție cu str. Armenească)",
    duration: {
      ro: "45 – 75 min",
      ru: "45 – 75 мин",
    },
    bestTime: {
      ro: "Sâmbătă între 10:00 și 13:00 pentru brunch și cafea",
      ru: "Суббота с 10:00 до 13:00 — идеальное время для бранча и неспешного кофе",
    },
    localTip: {
      ro: "Cere o cafea preparată la V60 cu boabe din Etiopia sau Columbia și stai pe băncuțele din curtea interioară.",
      ru: "Попробуйте пуровер V60 на зерне светлой обжарки и займите столик в глубине зеленого дворика.",
    },
    highlights: {
      ro: [
        "Cafea de specialitate prăjită local în Moldova",
        "Curți ascunse tipice Chișinăului vechi din piatră de calcar",
        "Opțiuni excelente de mic dejun și deserturi vegane",
        "Wi-Fi bun și atmosferă prietenoasă de lucru sau discuții",
      ],
      ru: [
        "Зёрна свежей местной обжарки от молдавских ростеров",
        "Аутентичные дворики старого каменного Кишинёва",
        "Свежая выпечка и полезные завтраки",
        "Комфортная атмосфера для бесед или чтения",
      ],
    },
  },
  {
    id: "scuarul-teatrului-cehov",
    name: {
      ro: "Scuarul Teatrului Cehov & str. Vlaicu Pârcălab",
      ru: "Сквер театра им. Чехова и улица Влайку Пыркэлаб",
    },
    shortDescription: {
      ro: "Colț boem cu clădiri din piatră albă, terase cochete, ceainării liniștite și artă stradală discretă.",
      ru: "Богемный уголок с белым камнем, кофейными террасами, чайными и уютным сквером у театра.",
    },
    fullDescription: {
      ro: "În fața Teatrului Dramatic Rus 'A. P. Cehov' se află unul dintre cele mai intime scuaruri urbane din centru. Înconjurat de arbori bătrâni, mici cafenele independente și librării, este locul preferat al studenților și artiștilor pentru o pauză scurtă în timpul unei plimbări pietonale prin centrul vechi.",
      ru: "Сквер перед драматическим театром Чехова — одно из самых приятных камерных пространств центра. Здесь нет шума магистралей, вокруг расположены самобытные кофейни, чайные и книжные лавки, а вековые деревья дают желанную тень в жаркий день.",
    },
    category: "cafe",
    priceLevel: "ieftin",
    tags: ["ieftin", "cafe", "plimbare", "centru", "arhitectura"],
    zone: "Centru",
    address: "str. Vlaicu Pârcălab / str. Mitropolit Varlaam",
    duration: {
      ro: "45 – 60 min",
      ru: "45 – 60 мин",
    },
    bestTime: {
      ro: "Duminică după-amiază spre seară",
      ru: "Воскресенье во второй половине дня",
    },
    localTip: {
      ro: "Vizitează clădirea fostei Sinagogi Chorale (în care activează astăzi teatrul) și admiră fațada istorică.",
      ru: "Обратите внимание на само здание театра — это историческая Хоральная синагога конца XIX века.",
    },
    highlights: {
      ro: [
        "Arhitectură de epocă și atmosferă boemă",
        "Terase ferite de traficul mașinilor",
        "Ceaiuri artizanale și deserturi locale",
        "Punct de legătură excelent între bd. Ștefan cel Mare și str. 31 August",
      ],
      ru: [
        "Историческая атмосфера и тихий сквер",
        "Уютные столики на открытом воздухе без машин",
        "Крафтовый чай и домашние десерты",
        "Удобный транзит при пешей прогулке по центру",
      ],
    },
  },
  {
    id: "parcul-catedralei",
    name: {
      ro: "Parcul Catedralei & Piața Marii Adunări Naționale",
      ru: "Сквер Кафедрального Собора и Площадь",
    },
    shortDescription: {
      ro: "Clopotnița albă, fântânile arteziene, piața de flori de pe Bănulescu-Bodoni și bătăile de clopote duminicale.",
      ru: "Белоснежная колокольня, фонтаны, цветочный рынок на Бэнулеску-Бодони и звон колоколов.",
    },
    fullDescription: {
      ro: "Scuarul Catedralei Nașterea Domnului este inima geometrică și spirituală a Chișinăului. Proiectat în secolul al XIX-lea, scuarul găzduiește catedrala clasică cu dom masiv, clopotnița reconstruită și alei largi înconjurate de tei parfumați. În weekend, clopotele răsună peste centrul orașului în timp ce localnicii cumpără flori proaspete de pe strada alăturată.",
      ru: "Главный сквер города вокруг собора Рождества Христова. Широкие аллеи, классическая колоннада собора и колокольня, бьющие фонтаны и круглосуточные цветочные ряды на углу Бодони. Прекрасное место для неспешного созерцательного отдыха на скамейке.",
    },
    category: "parc",
    priceLevel: "gratis",
    tags: ["gratis", "parc", "istorie", "centru", "arhitectura"],
    zone: "Centru",
    address: "Piața Marii Adunări Naționale / str. Mitropolit Gavriil Bănulescu-Bodoni",
    duration: {
      ro: "30 – 60 min",
      ru: "30 – 60 мин",
    },
    bestTime: {
      ro: "Duminică dimineața la 11:00 (sunetul clopotelor)",
      ru: "Воскресное утро к 11:00 под праздничный колокольный звон",
    },
    localTip: {
      ro: "Treci pe la piața de flori deschisă non-stop de pe latura vestică a parcului pentru buchete proaspete de sezon.",
      ru: "Загляните на круглосуточный цветочный базар вдоль западной границы сквера за сезонными букетами.",
    },
    highlights: {
      ro: [
        "Catedrala Mitropolitană din 1836 proiectată de Avraam Melnikov",
        "Clopotnița monumentală cu patru niveluri",
        "Fântâni arteziene și iluminat de seară elegant",
        "Acces direct spre Arcul de Triumf (Porțile Sfinte)",
      ],
      ru: [
        "Кафедральный собор 1836 года архитектора Мельникова",
        "Восстановленная монументальная колокольня",
        "Прохлада фонтанов в знойные дни",
        "Прямой выход к Триумфальной арке (Святым Вратам)",
      ],
    },
  },
  {
    id: "muzeul-satului-botanica",
    name: {
      ro: "Muzeul Satului & Biserica de Lemn din 1642",
      ru: "Музей Села и деревянная церковь 1642 года",
    },
    shortDescription: {
      ro: "Biserica de lemn unică adusă din Hirișeni, căsuțe țărănești autentice și liniște rurală pe malul lacului.",
      ru: "Уникальная деревянная церковь из Хиришень 1642 года и тихий сельский уголок на берегу озера.",
    },
    fullDescription: {
      ro: "Amplasat la marginea Botanicii, lângă Porțile Orașului, Muzeul Satului te transpune instant într-un sat moldovenesc de acum câteva secole. Piesa centrală este Biserica 'Adormirea Maicii Domnului' din Hirișeni, cea mai înaltă și veche biserică de lemn din Moldova (datată 1642), asamblată grindă cu grindă pe malul apei.",
      ru: "Аутентичный этнографический уголок на окраине Ботаники. Главная жемчужина — старейшая и самая высокая деревянная церковь Молдовы, построенная в 1642 году в селе Хиришень и бережно перенесенная сюда. Пахнет вековым деревом, вокруг шумит камыш у озера.",
    },
    category: "muzeu",
    priceLevel: "ieftin",
    tags: ["ieftin", "muzeu", "istorie", "lemn", "liniste", "arhitectura"],
    zone: "Botanica",
    address: "str. Aeroportului / bd. Dacia (lângă lacul de la Porțile Orașului)",
    duration: {
      ro: "1 – 1.5 ore",
      ru: "1 – 1.5 часа",
    },
    bestTime: {
      ro: "Sâmbătă la amiază când bate soarele pe șindrila de lemn",
      ru: "Суббота в середине дня, когда солнце красиво освещает старинную дранку",
    },
    localTip: {
      ro: "Intră în interiorul bisericii de lemn — mirosul de lemn vechi și iconostasul restaurat oferă o stare de liniște rară.",
      ru: "Обязательно зайдите внутрь церкви — аромат старинной древесины и резной иконостас дарят редкое умиротворение.",
    },
    highlights: {
      ro: [
        "Biserica monument de arhitectură vernaculară din secolul al XVII-lea",
        "Amplasare idilică pe malul lacului",
        "Lipsa oricărui zgomot urban",
        "Bilet simbolic de acces (10–15 MDL)",
      ],
      ru: [
        "Шедевр молдавского деревянного зодчества XVII века",
        "Идиллическое расположение на берегу водоема",
        "Полное ощущение загородной тишины в черте города",
        "Символическая стоимость входного билета (10–15 леев)",
      ],
    },
  },
  {
    id: "parcul-alunelul",
    name: {
      ro: "Parcul 'Alunelul' & Memorialul Pogromului",
      ru: "Парк «Алунелул» и мемориальный комплекс",
    },
    shortDescription: {
      ro: "Parc cochet recent renovat, fântâni muzicale de podea, terenuri curate și promenadă printre castani.",
      ru: "Недавно обновленный компактный парк с сухими фонтанами, детскими зонами и аллеями каштанов.",
    },
    fullDescription: {
      ro: "Un parc de cartier transformat într-un exemplu modern de amenajare urbană la Buiucani. Dotat cu fântână arteziană la nivelul pavajului, alei netede pentru trotinete și cărucioare, bănci confortabile și un spațiu memorial solemn dedicat memoriei victimelor pogromului din 1903.",
      ru: "Отличный пример качественной реконструкции районного парка на Буюканах. Ровные дорожки для самокатов, сухой фонтан с подсветкой, много зеленых газонов и мемориальный комплекс в память о событиях 1903 года.",
    },
    category: "parc",
    priceLevel: "gratis",
    tags: ["gratis", "parc", "plimbare", "familie", "istorie"],
    zone: "Buiucani",
    address: "str. Calea Ieșilor / str. Milano",
    duration: {
      ro: "45 – 75 min",
      ru: "45 – 75 мин",
    },
    bestTime: {
      ro: "După-amiaza cu copiii sau pentru o carte la umbră",
      ru: "После обеда для спокойного отдыха в тени каштанов",
    },
    localTip: {
      ro: "Găsești patiserii bune chiar la intrarea dinspre Calea Ieșilor pentru o cafea cu croasant.",
      ru: "У входа с улицы Каля Ешилор есть отличные местные пекарни со свежей выпечкой.",
    },
    highlights: {
      ro: [
        "Fântână arteziană interactivă la nivelul solului",
        "Pavaj modern ideal pentru copii și plimbări lente",
        "Complex memorial istoric bine conservat",
        "Locuri de joacă sigure și bănci ergonomice",
      ],
      ru: [
        "Пешеходный сухой фонтан с вечерней подсветкой",
        "Идеально гладкие дорожки для прогулок и роликов",
        "Исторический мемориальный комплекс",
        "Современные безопасные детские площадки",
      ],
    },
  },
  {
    id: "turnul-de-apa-muzeul-orasului",
    name: {
      ro: "Turnul de Apă (Muzeul Orașului Chișinău)",
      ru: "Водонапорная башня (Музей города Кишинёв)",
    },
    shortDescription: {
      ro: "Turn istoric din cărămidă și piatră cu lift de epocă și platformă panoramică de 360° peste dealuri.",
      ru: "Историческая башня из камня и кирпича с винтажным лифтом и круговой панорамой на город и озеро.",
    },
    fullDescription: {
      ro: "Construit în 1892 după planurile faimosului arhitect Alexandru Bernardazzi, Turnul de Apă a marcat debutul alimentării moderne cu apă a Chișinăului. Astăzi adăpostește Muzeul Istoriei Orașului, iar urcușul pe scara elicoidală sau cu liftul te răsplătește cu cea mai spectaculoasă priveliște panoramică asupra parcului Valea Morilor și a centrului istoric.",
      ru: "Построенная в 1892 году Александром Бернардацци, водонапорная башня положила начало городскому водопроводу. Сегодня внутри музей истории Кишинёва, а верхний застекленный этаж открывает захватывающий круговой вид на гладь озера Валя Морилор и крыши исторического центра.",
    },
    category: "muzeu",
    priceLevel: "ieftin",
    tags: ["ieftin", "muzeu", "priveliste", "arhitectura", "istorie"],
    zone: "Centru",
    address: "str. Alexei Mateevici 60A",
    duration: {
      ro: "45 – 60 min",
      ru: "45 – 60 мин",
    },
    bestTime: {
      ro: "Sâmbătă la amiază sau înainte de apus",
      ru: "Суббота днем для лучшей видимости горизонта",
    },
    localTip: {
      ro: "Urcă până la ultimul nivel pe scări pentru a vedea expoziția pe verticală, iar la coborâre încearcă liftul.",
      ru: "Поднимитесь наверх по винтовой лестнице сквозь ярусы экспозиции, а смотровая площадка на самом верху — главная награда.",
    },
    highlights: {
      ro: [
        "Cea mai înaltă platformă panoramică istorică din centrul vechi",
        "Arhitectură industrială de secol XIX din piatră de calcar și cărămidă",
        "Fotografii și hărți rare ale Chișinăului de altădată",
        "Bilet de acces extrem de accesibil (10 MDL)",
      ],
      ru: [
        "Лучшая историческая смотровая площадка на 360 градусов",
        "Промышленная неоготика конца XIX века",
        "Редкие старинные карты и архивные фотографии города",
        "Символический входной билет (10 леев)",
      ],
    },
  },
  {
    id: "aleea-mircea-cel-batran-ciocana",
    name: {
      ro: "Aleea Bulevardului Mircea cel Bătrân",
      ru: "Пешеходная аллея бульвара Мирча чел Бэтрын",
    },
    shortDescription: {
      ro: "Promenada largă a Ciocanei: kilometri de verdeață, piste pentru role, cafenele de cartier și viață locală vibrantă.",
      ru: "Широкий бульвар Чекан: километры зелени, велодорожки, уличные кофейни и живая районная жизнь.",
    },
    fullDescription: {
      ro: "Dacă vrei să simți pulsul autentic al vieții cotidiene fără pic de turism superficial, vino pe aleea Mircea cel Bătrân din Ciocana. Aleea pietonală centrală are aproape 3 kilometri lungime, este mărginită de copaci deși, pizzerii locale, tonete cu înghețată și piste largi unde generații întregi ies la plimbare în serile de weekend.",
      ru: "Широкая зеленая артерия сектора Чеканы длиной почти 3 километра. Здесь нет туристов, зато бурлит настоящая городская жизнь: семьи гуляют с колясками, молодежь катается на скейтах и роликах, а вокруг открыты десятки кафе, пиццерий и кондитерских.",
    },
    category: "plimbare",
    priceLevel: "gratis",
    tags: ["gratis", "plimbare", "sport", "familie", "ciocana"],
    zone: "Ciocana",
    address: "bd. Mircea cel Bătrân (între str. Petru Zadnipru și str. Dumeniuc)",
    duration: {
      ro: "1 – 2 ore",
      ru: "1 – 2 часа",
    },
    bestTime: {
      ro: "Duminică seara când toată promenada se umple de viață",
      ru: "Воскресный вечер, когда весь бульвар выходит на прогулку",
    },
    localTip: {
      ro: "Oprește-te la o patiserie locală pentru 'plăcintă cu vișine' sau 'cu dovleac' proaspăt scoasă din cuptor.",
      ru: "Попробуйте местную горячую плацинду с творогом и зеленью или вишней в одной из пекарен вдоль аллеи.",
    },
    highlights: {
      ro: [
        "Cea mai lungă alee pietonală continuă dintr-un cartier chișinăuian",
        "Pistă excelentă de biciclete și alergare",
        "Multe opțiuni de cafea to-go și gustări ieftine",
        "Vedere panoramică spre văile estice ale suburbiilor",
      ],
      ru: [
        "Самая длинная непрерывная пешеходная аллея спального района",
        "Отличная выделенная полоса для роликов и велосипедов",
        "Множество недорогих кофе-точек и уличных пекарен",
        "Просторное небо и закаты над восточной частью столицы",
      ],
    },
  },
  {
    id: "cafenele-boeme-31-august",
    name: {
      ro: "Cafenelele boeme de pe str. 31 August 1989",
      ru: "Богемные кофейни на улице 31 Августа 1989",
    },
    shortDescription: {
      ro: "Terase umbrite de tei bătrâni între Biblioteca Națională și MNAM, ceai matcha, cafea de origine și discuții lungi.",
      ru: "Тенистые террасы под вековыми липами возле Национальной библиотеки: матча, спешелти кофе и беседы.",
    },
    fullDescription: {
      ro: "Strada 31 August 1989 păstrează cel mai cald farmec boem al Chișinăului vechi. Între strada Pușkin și Bănulescu-Bodoni, trotuarele largi umbrite de tei uriași găzduiesc terase unde se întâlnesc scriitori, IT-iști și studenți. O cafea bună luată aici pe o bancă sau la măsuțele rotunde de metal este ritualul preferat de sâmbătă al multor chișinăuieni.",
      ru: "Отрезок улицы 31 Августа возле Национальной библиотеки и Художественного музея — любимое место творческой интеллигенции. Столики под кронами вековых лип, шорох страниц книг, аромат свежесваренного кофе и неторопливые разговоры о культуре и жизни.",
    },
    category: "cafe",
    priceLevel: "ieftin",
    tags: ["ieftin", "cafe", "centru", "cultura", "liniste"],
    zone: "Centru",
    address: "str. 31 August 1989, 78–115",
    duration: {
      ro: "45 – 90 min",
      ru: "45 – 90 мин",
    },
    bestTime: {
      ro: "Sâmbătă la prânz când strada e mai puțin circulată",
      ru: "Суббота днем, когда спадает деловой ритм будней",
    },
    localTip: {
      ro: "Combină pauza de cafea cu o vizită scurtă în curtea Muzeului de Artă de vizavi.",
      ru: "Совместите чашку кофе с заходом во внутренний дворик Художественного музея напротив.",
    },
    highlights: {
      ro: [
        "Atmosferă academică și culturală lângă bibliotecă",
        "Cafea de specialitate preparată cu grijă",
        "Umbră densă și răcoare naturală chiar și în zilele calde",
        "Arhitectură de sfârșit de secol XIX pe ambele părți",
      ],
      ru: [
        "Академическая и культурная атмосфера у библиотеки",
        "Отличный спешелти кофе и крафтовые десерты",
        "Густая тень вековых лип даже в жаркий полдень",
        "Красивые фасады конца XIX века вокруг",
      ],
    },
  },
  {
    id: "scuarul-cehov-arhitectura",
    name: {
      ro: "Plimbare Arhitecturală: str. Kogălniceanu & Schusev",
      ru: "Архитектурная прогулка: ул. Когэлничану и Щусева",
    },
    shortDescription: {
      ro: "Case vechi din piatră de calcar, porți din fier forjat basarabean, viță de vie pe fațade și liniște duminicală.",
      ru: "Старинные особняки из ракушечника, кованые ворота, виноградные лозы на фасадах и воскресная тишина.",
    },
    fullDescription: {
      ro: "Dacă vrei să descoperi sufletul arhitectural al Chișinăului dinaintea blocurilor sovietice, fă o plimbare pe străzile Mihail Kogălniceanu, Alexei Sciusev și Veronica Micle. Vei descoperi conace boierești din calcar alb, porți meșteșugite din fier forjat, ferestre arcuite și mici curți secrete unde timpul pare că s-a oprit în loc acum un veac.",
      ru: "Маршрут для ценителей истории и архитектурных деталей. Улицы Когэлничану, Щусева и Влайку Пыркэлаб сохранили дух губернского города: уютные одноэтажные и двухэтажные особняки из белого известняка, ажурные кованые козырьки, старинные деревянные двери и увитые диким виноградом стены.",
    },
    category: "plimbare",
    priceLevel: "gratis",
    tags: ["gratis", "plimbare", "arhitectura", "istorie", "centru", "liniste"],
    zone: "Centru",
    address: "str. Mihail Kogălniceanu / str. Alexei Șciusev",
    duration: {
      ro: "1 – 2 ore",
      ru: "1 – 2 часа",
    },
    bestTime: {
      ro: "Duminică dimineața (când nu circulă mașini și lumina e blândă)",
      ru: "Воскресное утро, когда машин практически нет, а свет красиво подчеркивает рельеф камня",
    },
    localTip: {
      ro: "Priviți în sus: veți observa monograme istorice gravate în frontoanele de deasupra intrărilor.",
      ru: "Смотрите выше уровня глаз: над порталами сохранились даты постройки и вензеля владельцев.",
    },
    highlights: {
      ro: [
        "Case de epocă proiectate de Bernardazzi și Sciusev",
        "Porți unice din fier forjat meșteșugite manual",
        "Trotuare liniștite ideale pentru fotografie urbană",
        "Descoperire autentică fără trasee comerciale",
      ],
      ru: [
        "Особняки эпохи модерна и эклектики",
        "Уникальные кованые решетки и оригинальные двери XIX века",
        "Идеальный маршрут для неспешной уличной фотографии",
        "Подлинный исторический колорит без глянца",
      ],
    },
  },
  {
    id: "padurea-parc-riscani-bic",
    name: {
      ro: "Pădurea-parc Râșcani & Malul râului Bîc",
      ru: "Лесопарк Рышкань и дикая набережная Быка",
    },
    shortDescription: {
      ro: "Traseu neamenajat semi-sălbatic: poteci prin desiș de sălcii, poduri improvizate și liniște deplină lângă apă.",
      ru: "Полудикие тропы вдоль русла Быка, заросли ив и берез, ощущение загородного похода в черте города.",
    },
    fullDescription: {
      ro: "Pentru cei care s-au săturat de pavaj și vor senzația unei drumeții reale prin natură, pădurea-parc dintre Râșcani și Ciocana oferă kilometri de cărări de pământ prin pădure de foioase, pante deluroase și malul verde al râului Bîc. Este refugiul secret al bicicliștilor de munte și al iubitorilor de liniște nealterată.",
      ru: "Идеальный маршрут для тех, кто устал от тротуарной плитки и хочет настоящей грунтовой тропы среди диких трав и деревьев. Зеленый массив на границе Рышкановки и Чекан спускается к пойме реки Бык, где поют соловьи и катаются на горных велосипедах.",
    },
    category: "plimbare",
    priceLevel: "gratis",
    tags: ["gratis", "plimbare", "natura", "liniste", "sport"],
    zone: "Râșcani",
    address: "str. Nicolae Dimo / str. Studenților (spre valea râului Bîc)",
    duration: {
      ro: "1.5 – 2.5 ore",
      ru: "1.5 – 2.5 часа",
    },
    bestTime: {
      ro: "Sâmbătă la amiază pe vreme uscată",
      ru: "Суббота днем в сухую солнечную погоду",
    },
    localTip: {
      ro: "Încalță adidași comozi de teren — potecile sunt de pământ natural și pot avea porțiuni abrupte.",
      ru: "Надевайте удобную кроссовочную обувь: тропы здесь грунтовые, с естественными подъемами.",
    },
    highlights: {
      ro: [
        "Senzație de natură sălbatică chiar în oraș",
        "Trasee naturale de cross-country și alergare montană",
        "Multitudine de păsări sălbatice și arbori seculari",
        "Zero aglomerație și mult aer curat",
      ],
      ru: [
        "Ощущение настоящего загородного леса в черте столицы",
        "Грунтовые трассы для бега и трейлового велосипеда",
        "Пение птиц и шелест вековых деревьев",
        "Полное отсутствие городской суеты",
      ],
    },
  },
  {
    id: "scuarul-garii-feroviare",
    name: {
      ro: "Scuarul Gării Feroviare & Monumentul Trenul Durerii",
      ru: "Привокзальная площадь и Мемориал депортаций",
    },
    shortDescription: {
      ro: "Clădirea monumentală a gării din piatră cioplită, locomotiva retro cu abur și scuarul larg din granit.",
      ru: "Монументальный вокзал из ракушечника, паровоз-памятник и гранитный сквер с историческим мемориалом.",
    },
    fullDescription: {
      ro: "Gara Feroviară din Chișinău este una dintre cele mai impunătoare clădiri postbelice ale orașului, reconstruită în stil neoromânesc și clasic din piatră albă de Cosăuți. În scuarul din față se găsește complexul sculptural 'Trenul Durerii', iar pe primul peron tronează o autentică locomotivă cu aburi din secolul trecut.",
      ru: "Здание Кишинёвского железнодорожного вокзала — выдающийся памятник архитектуры из белого косауцкого камня. Перед вокзалом разбит просторный сквер с мемориалом 'Поезд боли', а на платформе стоит настоящий исторический паровоз, к которому любят подходить дети.",
    },
    category: "plimbare",
    priceLevel: "gratis",
    tags: ["gratis", "plimbare", "istorie", "arhitectura", "trenuri"],
    zone: "Centru",
    address: "Piața Gării 1",
    duration: {
      ro: "45 – 60 min",
      ru: "45 – 60 мин",
    },
    bestTime: {
      ro: "Duminică după-amiază",
      ru: "Воскресенье после полудня",
    },
    localTip: {
      ro: "Intră în holul central al gării — candelabrele masive de cristal și tavanele boltite merită văzute de aproape.",
      ru: "Зайдите в центральный зал ожидания вокзала — хрустальные люстры и резные потолки производят сильное впечатление.",
    },
    highlights: {
      ro: [
        "Arhitectură monumentală cu detalii sculptate în calcar",
        "Locomotivă istorică cu aburi expusă pe peron",
        "Complexul sculptural dedicat memoriei victimelor deportărilor",
        "Ambianță urbană deschisă și nostalgică",
      ],
      ru: [
        "Монументальное здание из белого резного камня",
        "Исторический паровоз на перроне",
        "Мемориальный бронзовый комплекс в сквере",
        "Просторная площадь с приятной вечерней атмосферой",
      ],
    },
  },
];

export const ALL_ZONES = [
  "Centru",
  "Buiucani",
  "Botanica",
  "Râșcani",
  "Ciocana",
] as const;

export const ALL_CATEGORIES = [
  { id: "all", label: { ro: "Toate", ru: "Все" } },
  { id: "parc", label: { ro: "Parcuri", ru: "Парки" } },
  { id: "plimbare", label: { ro: "Plimbări", ru: "Прогулки" } },
  { id: "muzeu", label: { ro: "Muzee & Cultură", ru: "Музеи и культура" } },
  { id: "cafe", label: { ro: "Cafenele & Terase", ru: "Кофейни и террасы" } },
] as const;

export const POPULAR_TAGS = [
  { id: "gratis", label: { ro: "Gratis", ru: "Бесплатно" } },
  { id: "ieftin", label: { ro: "Ieftin (≤20 MDL)", ru: "Бюджетно (≤20 леев)" } },
  { id: "parc", label: { ro: "Parc", ru: "Парк" } },
  { id: "lac", label: { ro: "Lac / Apă", ru: "Озеро / Вода" } },
  { id: "plimbare", label: { ro: "Plimbare", ru: "Прогулка" } },
  { id: "muzeu", label: { ro: "Muzeu", ru: "Музей" } },
  { id: "cafe", label: { ro: "Cafea", ru: "Кофе" } },
  { id: "liniste", label: { ro: "Liniște", ru: "Тишина" } },
  { id: "apus", label: { ro: "Apus", ru: "Закат" } },
  { id: "arhitectura", label: { ro: "Arhitectură", ru: "Архитектура" } },
] as const;
