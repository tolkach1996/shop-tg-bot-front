export const purchasesData = [
    {
        id: '1',
        name: 'Закупка №1',
        info: 'Информация по закупке #1',
        img: './img/nordlys.jpg',
        status: true
    },
    {
        id: '3',
        name: 'Закупка №1',
        info: 'Информация по закупке #3',
        img: './img/nordlys.jpg',
        status: true
    },
    {
        id: '2',
        name: 'Закупка №2',
        info: 'Информация по закупке #2',
        status: true
    }
]

/*export const goodsData = [
    {
        id: '1',
        purchase: '1',
        name: 'Куртка',
        img: [
            { id: 1, src: '../../src/assets/img/jacket/jacket.jpg' },
            { id: 2, src: '../../src/assets/img/jacket/jacket1.png' },
            { id: 3, src: '../../src/assets/img/jacket/jacket2.webp' },
        ],
        info: 'Информация по товару',
        priice: '4999',
        count: 10,
        countBasket: 0,
        detailedinfo: 'Много ил мало текста с информацией. Подъехавши к трактиру, Чичиков велел остановиться по двум причинам. С одной стороны, чтоб дать отдохнуть лошадям, а с другой стороны, чтоб и самому несколько закусить и подкрепиться. Автор должен признаться, что весьма завидует аппетиту и желудку такого рода людей. Для него решительно ничего не значат все господа большой руки, живущие в Петербурге и Москве, проводящие время в обдумывании, что бы такое поесть завтра и какой бы обед сочинить на послезавтра, и принимающиеся за этот обед не иначе, как отправивши прежде в рот пилюлю; глотающие устерс, морских пауков и прочих чуд, а потом отправляющиеся в Карлсбад или на Кавказ. Нет, эти господа никогда не возбуждали в нем зависти. Но господа средней руки, что на одной станции потребуют ветчины, на другой поросенка, на третьей ломоть осетра или какую-нибудь запеканную колбасу с луком и потом как ни в чем не бывало садятся за стол в какое хочешь время, и стерляжъя уха с налимами и молоками шипит и ворчит у них меж зубами, заедаемая расстегаем или кулебякой с сомовьим плёсом, так что вчуже пронимает аппетит, — вот эти господа, точно, пользуются завидным даянием неба! Не один господин большой руки пожертвовал бы сию же минуту половину душ крестьян и половину имений, заложенных и незаложенных, со всеми улучшениями на иностранную и русскую ногу, с тем только, чтобы иметь такой желудок, какой имеет господин средней руки; но то беда, что ни за какие деньги, ниже́ имения, с улучшениями и без улучшений, нельзя приобресть такого желудка, какой бывает у господина средней руки.',
        characteristic: 'Описываются характеристики товара'
    },
    {
        id: '2',
        purchase: '1',
        name: 'Джинсы',
        img: [
            { id: 1, src: '../../src/assets/img/jeans/jeans.jpg' },
        ],
        info: 'Информация по товару',
        priice: '1999',
        count: 10,
        countBasket: 0,
        detailedinfo: 'Много ил мало текста с информацией. Деревянный потемневший трактир принял Чичикова под свой узенький гостеприимный навес на деревянных выточенных столбиках, похожих на старинные церковные подсвечники. Трактир был что-то вроде русской избы, несколько в большем размере. Резные узорочные карнизы из свежего дерева вокруг окон и под крышей резко и живо пестрили темные его стены; на ставнях были нарисованы кувшины с цветами.',
        characteristic: 'Описываются характеристики товара'
    },
    {
        id: '3',
        purchase: '3',
        name: 'Футболка',
        img: [
            { id: 1, src: '../../src/assets/img/jersey/Jersey.jpg' },
            { id: 2, src: '../../src/assets/img/jersey/Jersey1.png' },
        ],
        info: 'Информация по товару',
        priice: '799',
        count: 10,
        countBasket: 0,
        detailedinfo: 'Много ил мало текста с информацией. Деревянный потемневший трактир принял Чичикова под свой узенький гостеприимный навес на деревянных выточенных столбиках, похожих на старинные церковные подсвечники. Трактир был что-то вроде русской избы, несколько в большем размере. Резные узорочные карнизы из свежего дерева вокруг окон и под крышей резко и живо пестрили темные его стены; на ставнях были нарисованы кувшины с цветами.',
        characteristic: 'Описываются характеристики товара'
    },
    {
        id: '4',
        purchase: '3',
        name: 'Штаны',
        img: [
            { id: 1, src: '../../src/assets/img/trousers/trousers.png' },
        ],
        info: 'Информация по товару',
        priice: '1999',
        count: 10,
        countBasket: 0,
        detailedinfo: 'Много ил мало текста с информацией. Подъехавши к трактиру, Чичиков велел остановиться по двум причинам. С одной стороны, чтоб дать отдохнуть лошадям, а с другой стороны, чтоб и самому несколько закусить и подкрепиться. Автор должен признаться, что весьма завидует аппетиту и желудку такого рода людей. Для него решительно ничего не значат все господа большой руки, живущие в Петербурге и Москве, проводящие время в обдумывании, что бы такое поесть завтра и какой бы обед сочинить на послезавтра, и принимающиеся за этот обед не иначе, как отправивши прежде в рот пилюлю; глотающие устерс, морских пауков и прочих чуд, а потом отправляющиеся в Карлсбад или на Кавказ. Нет, эти господа никогда не возбуждали в нем зависти. Но господа средней руки, что на одной станции потребуют ветчины, на другой поросенка, на третьей ломоть осетра или какую-нибудь запеканную колбасу с луком и потом как ни в чем не бывало садятся за стол в какое хочешь время, и стерляжъя уха с налимами и молоками шипит и ворчит у них меж зубами, заедаемая расстегаем или кулебякой с сомовьим плёсом, так что вчуже пронимает аппетит, — вот эти господа, точно, пользуются завидным даянием неба! Не один господин большой руки пожертвовал бы сию же минуту половину душ крестьян и половину имений, заложенных и незаложенных, со всеми улучшениями на иностранную и русскую ногу, с тем только, чтобы иметь такой желудок, какой имеет господин средней руки; но то беда, что ни за какие деньги, ниже́ имения, с улучшениями и без улучшений, нельзя приобресть такого желудка, какой бывает у господина средней руки.',
        characteristic: 'Описываются характеристики товара'
    }
]*/


export const goodsData = [
    {
        id: '1',
        purchase: '1',
        name: 'Куртка',
        img: [
            { id: 1, src: '../../src/assets/img/jacket/jacket.jpg' },
            { id: 2, src: '../../src/assets/img/jacket/jacket1.png' },
            { id: 3, src: '../../src/assets/img/jacket/jacket2.webp' },
        ],
        info: 'Информация по товару',
        priice: '4999',
        modification: [
            { id: 1, total: "XS", count: 0 },
            { id: 2, total: "S", count: 0 },
            { id: 3, total: "M", count: 0 },
            { id: 4, total: "L", count: 0 }
        ],
        count: 10,
        countBasket: 0,
        detailedinfo: 'Много ил мало текста с информацией. Подъехавши к трактиру, Чичиков велел остановиться по двум причинам. С одной стороны, чтоб дать отдохнуть лошадям, а с другой стороны, чтоб и самому несколько закусить и подкрепиться. Автор должен признаться, что весьма завидует аппетиту и желудку такого рода людей. Для него решительно ничего не значат все господа большой руки, живущие в Петербурге и Москве, проводящие время в обдумывании, что бы такое поесть завтра и какой бы обед сочинить на послезавтра, и принимающиеся за этот обед не иначе, как отправивши прежде в рот пилюлю; глотающие устерс, морских пауков и прочих чуд, а потом отправляющиеся в Карлсбад или на Кавказ. Нет, эти господа никогда не возбуждали в нем зависти. Но господа средней руки, что на одной станции потребуют ветчины, на другой поросенка, на третьей ломоть осетра или какую-нибудь запеканную колбасу с луком и потом как ни в чем не бывало садятся за стол в какое хочешь время, и стерляжъя уха с налимами и молоками шипит и ворчит у них меж зубами, заедаемая расстегаем или кулебякой с сомовьим плёсом, так что вчуже пронимает аппетит, — вот эти господа, точно, пользуются завидным даянием неба! Не один господин большой руки пожертвовал бы сию же минуту половину душ крестьян и половину имений, заложенных и незаложенных, со всеми улучшениями на иностранную и русскую ногу, с тем только, чтобы иметь такой желудок, какой имеет господин средней руки; но то беда, что ни за какие деньги, ниже́ имения, с улучшениями и без улучшений, нельзя приобресть такого желудка, какой бывает у господина средней руки.',
        characteristic: 'Описываются характеристики товара'
    },
    {
        id: '2',
        purchase: '1',
        name: 'Джинсы',
        img: [
            { id: 1, src: '../../src/assets/img/jeans/jeans.jpg' },
        ],
        info: 'Информация по товару',
        priice: '1999',
        modification: [
            { id: 1, total: "XS", count: 0 },
            { id: 2, total: "S", count: 0 },
            { id: 3, total: "M", count: 0 },
            { id: 4, total: "L", count: 0 }
        ],
        count: 10,
        countBasket: 0,
        detailedinfo: 'Много ил мало текста с информацией. Деревянный потемневший трактир принял Чичикова под свой узенький гостеприимный навес на деревянных выточенных столбиках, похожих на старинные церковные подсвечники. Трактир был что-то вроде русской избы, несколько в большем размере. Резные узорочные карнизы из свежего дерева вокруг окон и под крышей резко и живо пестрили темные его стены; на ставнях были нарисованы кувшины с цветами.',
        characteristic: 'Описываются характеристики товара'
    },
    {
        id: '3',
        purchase: '3',
        name: 'Футболка',
        img: [
            { id: 1, src: '../../src/assets/img/jersey/Jersey.jpg' },
            { id: 2, src: '../../src/assets/img/jersey/Jersey1.png' },
        ],
        info: 'Информация по товару',
        priice: '799',
        modification: [
            { id: 1, total: "XS", count: 0 },
            { id: 2, total: "S", count: 0 },
            { id: 3, total: "M", count: 0 },
            { id: 4, total: "L", count: 0 }
        ],
        count: 10,
        countBasket: 0,
        detailedinfo: 'Много ил мало текста с информацией. Деревянный потемневший трактир принял Чичикова под свой узенький гостеприимный навес на деревянных выточенных столбиках, похожих на старинные церковные подсвечники. Трактир был что-то вроде русской избы, несколько в большем размере. Резные узорочные карнизы из свежего дерева вокруг окон и под крышей резко и живо пестрили темные его стены; на ставнях были нарисованы кувшины с цветами.',
        characteristic: 'Описываются характеристики товара'
    },
    {
        id: '4',
        purchase: '3',
        name: 'Штаны',
        img: [
            { id: 1, src: '../../src/assets/img/trousers/trousers.png' },
        ],
        info: 'Информация по товару',
        priice: '1999',
        modification: [
            { id: 1, total: "XS", count: 0 },
            { id: 2, total: "S", count: 0 },
            { id: 3, total: "M", count: 0 },
            { id: 4, total: "L", count: 0 }
        ],
        count: 10,
        countBasket: 0,
        detailedinfo: 'Много ил мало текста с информацией. Подъехавши к трактиру, Чичиков велел остановиться по двум причинам. С одной стороны, чтоб дать отдохнуть лошадям, а с другой стороны, чтоб и самому несколько закусить и подкрепиться. Автор должен признаться, что весьма завидует аппетиту и желудку такого рода людей. Для него решительно ничего не значат все господа большой руки, живущие в Петербурге и Москве, проводящие время в обдумывании, что бы такое поесть завтра и какой бы обед сочинить на послезавтра, и принимающиеся за этот обед не иначе, как отправивши прежде в рот пилюлю; глотающие устерс, морских пауков и прочих чуд, а потом отправляющиеся в Карлсбад или на Кавказ. Нет, эти господа никогда не возбуждали в нем зависти. Но господа средней руки, что на одной станции потребуют ветчины, на другой поросенка, на третьей ломоть осетра или какую-нибудь запеканную колбасу с луком и потом как ни в чем не бывало садятся за стол в какое хочешь время, и стерляжъя уха с налимами и молоками шипит и ворчит у них меж зубами, заедаемая расстегаем или кулебякой с сомовьим плёсом, так что вчуже пронимает аппетит, — вот эти господа, точно, пользуются завидным даянием неба! Не один господин большой руки пожертвовал бы сию же минуту половину душ крестьян и половину имений, заложенных и незаложенных, со всеми улучшениями на иностранную и русскую ногу, с тем только, чтобы иметь такой желудок, какой имеет господин средней руки; но то беда, что ни за какие деньги, ниже́ имения, с улучшениями и без улучшений, нельзя приобресть такого желудка, какой бывает у господина средней руки.',
        characteristic: 'Описываются характеристики товара'
    }
]