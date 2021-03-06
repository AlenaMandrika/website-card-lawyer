import family from '../assets/images/Family.png'
import practice from '../assets/images/practice-real-estate.png'
import bankruptcy from '../assets/images/Bankruptcy.png'
import controvercy from '../assets/images/controvercy.png'
import adminDisputes from '../assets/images/adminPravo.png'
import civilDisputes from '../assets/images/grazhd-spor.png'
import contract from '../assets/images/contract.png'
import hereditaryDisputes from '../assets/images/hereditaryDisputes.png'
import landDisputes from '../assets/images/landDisputes.png'
import photo from '../assets/images/222.jpg'

const CardsData = [
  {
    'id': 1,
    'title': 'Господарські спори',
    'text': 'Господарські спори – спори, що виникають між суб’єктами господарської діяльності при укладенні й ' +
     'виконанні господарських договорів, а також спори про відшкодування збитків.',
    'image': controvercy,
    'alt': 'controvercy',
    'description': 'Hадаємо послуги в сфері захисту інтересів у господарських правовідносинах,' +
    ' юридичну допомогу у наступних напрямках:',
    'paragraph1': '- суперечки щодо укладення, виконання та розірвання господарських\n' +
    'договорів;',
    'paragraph2': "- спонукання до виконання договірних зобов'язань;",
    'paragraph3': '- визнання договорів недійсними;',
    'paragraph4': '- стягнення заборгованості, штрафних санкцій;',
    'paragraph5': '- зняття арешту з майна господарських товариств;',
    'paragraph6': '- корпоративні спори (спори між співзасновниками господарських\n' +
    'товариств);',
    'paragraph7': '- розділ майна, що перебуває у спільній власності;',
    'paragraph8': '- захист прав інтелектуальної власності.'
  },
  {
    'id': 2,
    'title': 'Адміністративні спори',
    'text': 'Виникають між державними органами з одного боку і юридичними або фізичними особами з іншого боку і' +
    ' регулюються адміністративно правовими нормами.',
    'image': adminDisputes,
    'alt': 'administrativeDisputes',
    'description': 'Готові надати юридичну допомогу у наступних напрямках:',
    'paragraph1': '- оскарження рішень про накладення адміністративних стягнень;',
    'paragraph2': '- оскарження рішень про застосування фінансових санкцій;',
    'paragraph3': '- визнання недійсними податкових повідомлень-рішень;',
    'paragraph4': "- оскарження рішень, пов'язаних з прийняттям чи звільненням з державної\n" +
    'служби;',
    'paragraph5': "- оскарження рішень про державну реєстрацію суб'єктів господарської\n" +
    'діяльності;',
    'paragraph6': '- скасування будь-яких інших рішень органів державної влади та місцевого\n' +
    'самоврядування;',
    'paragraph7': '- відшкодування шкоди, заподіяної неправомірними діями, бездіяльністю або\n' +
    'рішеннями органів державної влади або їх посадових осіб.'
  },
  {
    'id': 3,
    'title': 'Цивільні спори',
    'text': 'Спори, які виникають між учасниками цивільно-правових відносин і регулюються цивільним, трудовим,' +
    ' земельним, сімейним, цивільно-процесуальним галузями права.',
    'image': civilDisputes,
    'alt': 'civilDisputes',
    'description': 'Надаємо юридичну допомогу на будь-якій стадії цивільного процесу:',
    'paragraph1': '- стягнення боргів по розписці, договору;',
    'paragraph2': '- відшкодування збитку матеріального та / або морального;',
    'paragraph3': '- визнання права власності;',
    'paragraph4': '- захист ділової репутації;',
    'paragraph5': '- оспорювання / визнання недійсними, спори про виконання договорів;',
    'paragraph6': '- спори з банками, повернення депозиту або погашення кредитів;',
    'paragraph7': '- захист прав споживача.'
  },
  {
    'id': 4,
    'title': 'Трудові спори',
    'text': 'Неврегульовані шляхом безпосередніх переговорів розбіжності між працівником і власником підприємства з' +
    ' приводу застосування норм трудового законодавства.',
    'image': contract,
    'alt': 'contract',
    'description': 'Hадаємо юридичну допомогу у наступних напрямках:',
    'paragraph1': '- спори про поновлення на колишньому місці роботи;',
    'paragraph2': '- дискусія щодо дати і формулювання причини звільнення;',
    'paragraph3': '- суперечки про переведення на іншу роботу;',
    'paragraph4': '- спори про оплату вимушених прогулів;',
    'paragraph5': '- спори про поновлення на роботі;',
    'paragraph6': '- спори про відшкодування шкоди, заподіяної працівником;',
    'paragraph7': '- оскарження відмови в прийомі на роботу;',
    'paragraph8': '- спори про стягнення вихідної допомоги;',
    'paragraph9': '- суперечки про невиплату заробітної плати;',
    'paragraph10': '- суперечки з ситуацій, що виникають при здійсненні трудової діяльності за\n' +
    'трудовим договором між фізичними особами.'
  },
  {
    'id': 5,
    'title': 'Сімейні спори',
    'text': 'Сімейні спори - майнові і немайнові відносини між подружжям, батьками і дітьми, опікунами та' +
      ' підопічними регулюються нормами сімейного законодавства України.',
    'image': family,
    'alt': 'family',
    'description': 'Надаємо юридичну допомогу у сімейних спорах таких категорій:',
    'paragraph1': '- розірвання шлюбу;',
    'paragraph2': '- стягнення аліментів;',
    'paragraph3': '- розділ спільного майна;',
    'paragraph4': '- визначення місця проживання дитини;',
    'paragraph5': '- позбавлення батьківських прав.'
  },
  {
    'id': 6,
    'title': 'Спадкові спори',
    'text': 'Спадкові спори є одними із найскладніших у сфері цивільного права. В них стикаються як майновий інтерес' +
      ' на об’єкти спадщини, так й етичний інтерес з боку родичів спадкодавця.',
    'image': hereditaryDisputes,
    'alt': 'hereditaryDisputes',
    'description': 'Готові надати юридичну допомогу у наступних напрямках:',
    'paragraph1': '- спори про визнання свідоцтва на спадщину недійсним;',
    'paragraph2': '- спори про визнання права власності на спадкове майно;',
    'paragraph3': '- спори про визнання заповіту недійсним;',
    'paragraph4': '- представництво інтересів при продовженні строку для прийняття спадщини;',
    'paragraph5': '- спори, пов&#39;язані з розподілом спадщини, виділенням і встановленням частки\n' +
    'в спадковому майні та усуненні від права спадкування;',
    'paragraph6': '- оспорювання розміру частки на спадкове майно;',
    'paragraph7': '- встановлення фактів, що мають юридичне значення;',
    'paragraph8': '- представництво інтересів в комерційних, державних, громадських\n' +
    'формуваннях, органах місцевого самоврядування;',
    'paragraph9': '- визнання громадянина безвісно відсутнім, померлим;',
    'paragraph10': '- обмеження дієздатності громадянина, визнання громадянина недієздатним;',
    'paragraph11': '- визнання права власності, витребування майна з чужого незаконного\n' +
    'володіння.'
  },
  {
    'id': 7,
    'title': 'Земельні спори',
    'text': 'Земельні спори — це вид правовідносин, пов’язаних із розв’язанням розбіжностей, які випливають з' +
    ' порушення права власності та права користування земельною ділянкою.',
    'image': landDisputes,
    'alt': 'landDisputes',
    'description': 'Юридична консультація та практична допомога у наступних напрямках:',
    'paragraph1': '- спори про межі земельної ділянки;',
    'paragraph2': '- земельні спори про визнання права власності на землю (земельну ділянку);',
    'paragraph3': '- спори про визнання права постійного (безстрокового) користування\n' +
    'земельною ділянкою;',
    'paragraph4': '- розподіл земельної ділянки між власниками;',
    'paragraph5': '- визначення порядку користування земельною ділянкою;',
    'paragraph6': '- безкоштовна приватизація землі, оскарження відмови у приватизації\n' +
    'земельної ділянки;',
    'paragraph7': '- спори про визнання недійсною угоду із земельною ділянкою;',
    'paragraph8': '- судові земельні спори щодо оскарження дій (бездіяльності) державних органів;',
    'paragraph9': '- справи про усунення перешкод у користуванні земельною ділянкою, про\n' +
    'вилучення ділянки з чужого незаконного володіння;',
    'paragraph10': '- встановлення сервітуту.'
  },
  {
    'id': 8,
    'title': 'Повернення боргу',
    'text': "Стягнення заборгованості - діяльність, яка має на меті досудове виконання боржником своїх зобов'язань" +
    ' або ж примус до повернення боргу в судовому порядку.',
    'image': bankruptcy,
    'alt': 'bankruptcy',
    'description': 'Готові надати комплекс дій по поверненню боргів, який умовно можна\n' +
    "розділити на етапи (зв'язок і діалог з боржником про можливість\n" +
    'добровільного погашення боргу або його реструктуризація, судовий розгляд\n' +
    'справи, примусове виконання винесеного рішення). До послуг включаються:',
    'paragraph1': '- аналіз ситуації виникнення заборгованості;',
    'paragraph2': '- проведення досудової роботи: збір необхідних документів, що\n' +
    'підтверджують позицію замовника в суперечках з третіми особами;',
    'paragraph3': '- складання претензій, листів і грошових вимог;',
    'paragraph4': '- ведення переговорів по добровільному погашенню заборгованості перед\n' +
    'замовником (медіація);',
    'paragraph5': '- представництво інтересів в судах всіх інстанцій;',
    'paragraph6': '- складання процесуальних документів (позовних заяв, письмових пояснень,\n' +
    ' відзивів на позовні заяви, клопотань, письмових заперечень і т.д.);',
    'paragraph7': '- представництвом інтересів на стадії примусового виконання рішень судів\n' +
    '(виконавча служба): збір необхідних для подачі у виконавчу службу\n' +
    'документів (наказ, виконавчий лист, інші документи).'
  },
  {
    'id': 9,
    'title': 'Сфера нерухомості',
    'text': 'Спори з розділу нерухомості між співвласниками, визнання права власності на нерухомість в суді,' +
    ' оскарження укладених угод з нерухомістю тощо.',
    'image': practice,
    'alt': 'practice',
    'description': 'Юридична консультація та практична допомога у наступних напрямках:',
    'paragraph1': '- суперечки про поділ нерухомого майна;',
    'paragraph2': '- cпори про визнання права власності на нерухоме майно;',
    'paragraph3': '- cпори про виселення з приміщення;',
    'paragraph4': '- суперечки про поділ нерухомого майна;',
    'paragraph5': '- оспорювання угод з нерухомістю (купівля-продаж, міна, дарування, іпотека, оренда);',
    'paragraph6': '- узаконення самобудів, перепланувань.'
  },
  {
    'id': 10,
    'title': 'Обслуговування бізнесу',
    'text': 'Надаємо послуги з комплексного\n' +
    'юридичного супроводу господарської діяльності підприємств, організацій та\n' +
    'приватних підприємців.',
    'image': photo,
    'alt': 'practice',
    'description': 'Підписавши договір на абонентське юридичне обслуговування з нами, Ви\n' +
    'обираєте кваліфіковані послуги групи адвокатів і юристів з різною спеціалізацією.\n' +
    'Це означає, що у Вас виявиться цілий юридичний відділ, який забезпечить\n' +
    'стабільність і безпеку Вашого бізнесу. Абонентське юридичне обслуговування має наступні переваги:',
    'paragraph1': '- зниження податкового навантаження на бізнес (відсутня необхідність з оплати\n' +
    'податків і зборів з заробітної плати юриста, витрати на юридичне\n' +
    'обслуговування зменшують оподатковуваний прибуток);',
    'paragraph2': '- зниження витрат (немає потреби в організації робочого місця, забезпеченні\n' +
    'оргтехнікою, придбанні спеціального програмного забезпечення);',
    'paragraph3': '- наша компанія об’єднує юристів різних спеціалізацій (один юрист не може\n' +
    'бути відмінним фахівцем одночасно у всіх областях права);',
    'paragraph4': '- кваліфікована юридична допомога надається безперервно (наявність декількох\n' +
    'юристів однієї спеціалізації дозволяє забезпечити взаємозамінність). Ви\n' +
    'завжди можете розраховувати на нас і бути впевненими, що ми не будемо\n' +
    'просити відгул, несподівано не звільнемося, не захворіємо і не підемо у\n' +
    'відпустку;',
    'paragraph5': '- ви можете планувати свої витрати на юридичні послуги, вони фіксовані і\n' +
    'передбачувані;',
    'textBtn': 'детальніше'
  }
]

export { CardsData }
