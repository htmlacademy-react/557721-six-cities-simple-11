import {OfferType} from '../types/offer';

export const offers: OfferType[] = [
  {
    id:1,
    previewImage: 'https://cdn.worldota.net/t/1024x768/content/ca/af/caafb0f5e3257be759f8bd3882a3db9440c65d83.jpeg',
    images: [
      'https://cdn.worldota.net/t/1024x768/content/c9/67/c96725bc7627207d4ccfaef8b4e8f245164a032d.jpeg',
      'https://cdn.worldota.net/t/1024x768/content/39/f7/39f70db772d940aca08a3ed2132a7c43c592f3ac.jpeg',
      'https://cdn.worldota.net/t/1024x768/content/55/ba/55ba17447b26e8b27085362aa9255b141bc35f7d.jpeg',
      'https://cdn.worldota.net/t/1024x768/content/48/af/48af6291128e0fb8bf5086684537e174b3302c4c.jpeg',
      'https://cdn.worldota.net/t/1024x768/content/66/22/6622ee2cdee4f0f5a5bbbbc7f6d4bcb273f0e264.jpeg',
    ],
    isPremium: true,
    title:'NH Collection Amsterdam Barbizon Palace',
    rating: 5,
    typeOfplacement:'Hotel',
    bedrooms:3,
    maxAduts:3,
    price:281,
    insides:[
      'Wifi','Transfer','Parking space','Heating','Kitchen','Fridge',
      'Washing machine','Coffee machine','Dishwasher', 'Shower/Bath',
      'Mini-bar','TV','Cable TV','Fan','Wardrobe/Closet', 'Non-smoking rooms'
    ],
    host:{
      avatar:'https://i.pinimg.com/564x/2a/a7/db/2aa7db94d55dee1b9ef1fa1abc79e143.jpg',
      id:1,
      isPro: true,
      name:'Maryan',
    },
    description:'Пятизвездочный отель NH Barbizon Palace располагается напротив железнодорожного вокзала в самом центре Амстердама. Такие достопримечательности, как церковь Святого Николая, Общественная Амстердамская библиотека и площадь Дам, находятся в нескольких минутах ходьбы от отеля.',
    location:{
      latitude: 123,
      longitude: 123,
      zoom: 10,
    },
  },
  {
    id:2,
    images: [
      'https://cdn.worldota.net/t/1024x768/content/84/10/8410134e1db28e4c31639b9b4ce6acab8f104be0.jpeg',
      'https://cdn.worldota.net/t/1024x768/content/8c/01/8c011a0295895b2ca1c7d96d1311d9bada4330dd.jpeg',
      'https://cdn.worldota.net/t/1024x768/content/d2/0b/d20b8043a4740b550078c8dfc4079ea2704a41e6.jpeg',
      'https://cdn.worldota.net/t/1024x768/content/4d/bc/4dbc4234346d1795428246c2f789732cc108fd30.jpeg',
      'https://cdn.worldota.net/t/1024x768/content/fb/90/fb9025e1d1a4f60031b3a2bbb4eb554ba9749742.jpeg'
    ],
    isPremium: true,
    previewImage: 'https://cdn.worldota.net/t/1024x768/content/3c/12/3c12db0a13ead53d3f2d3acf4adea13ef14f381b.jpeg',
    price:450,
    rating: 5,
    title:'W Amsterdam',
    typeOfplacement:'Hotel',
    bedrooms:2,
    maxAduts:2,
    insides:[
      'Wifi','Transfer','Parking space','Heating','Kitchen','Fridge',
      'Washing machine','Coffee machine','Dishwasher', 'Shower/Bath',
      'Mini-bar','TV','Cable TV','Fan','Wardrobe/Closet', 'Non-smoking rooms'
    ],
    host:{
      avatar:'https://i.pinimg.com/564x/16/65/c2/1665c2165e34e9bd8ba35abad222b438.jpg',
      id:2,
      isPro: true,
      name:'Entier',
    },
    description:'Пятизвездочный отель NH Barbizon Palace располагается напротив железнодорожного вокзала в самом центре Амстердама. Такие достопримечательности, как церковь Святого Николая, Общественная Амстердамская библиотека и площадь Дам, находятся в нескольких минутах ходьбы от отеля.',
    location:{
      latitude: 123,
      longitude: 123,
      zoom: 10,
    },
  },
  {
    id:3,
    images: [
      'https://cdn.worldota.net/t/1024x768/content/45/11/4511ae76c0b756a7d806b3f8ef7c42d24eeb9a8b.jpeg',
      'https://cdn.worldota.net/t/1024x768/content/1a/7d/1a7df3075f7e607c3d10048979d9a4f3a9598a03.jpeg',
      'https://cdn.worldota.net/t/1024x768/content/f1/94/f194193e9af35e03bf768a369028ca5fec09d66f.jpeg',
      'https://cdn.worldota.net/t/1024x768/content/24/c8/24c84caa41ba4ffab61f30fb3f3fe8a89f350373.jpeg',
      'https://cdn.worldota.net/t/1024x768/content/12/f7/12f7d41fd13b8bb0d8422e5a826d27b81bc1ca72.jpeg'
    ],
    isPremium: false,
    previewImage: 'https://cdn.worldota.net/t/1024x768/content/0c/da/0cdaaadb26425de20bd0c48aeb56a8bea8b3e02c.jpeg',
    price:209,
    rating: 4,
    title:'Park Centraal Amsterdam',
    typeOfplacement:'Hotel',
    bedrooms:2,
    maxAduts:3,
    insides:[
      'Wifi','Transfer','Parking space','Heating','Kitchen','Fridge',
      'Washing machine','Coffee machine','Dishwasher', 'Shower/Bath',
      'Mini-bar','TV','Cable TV','Fan','Wardrobe/Closet', 'Non-smoking rooms'
    ],
    host:{
      avatar:'https://i.pinimg.com/564x/43/32/d5/4332d51fd58d7c895d07b5bd4dc8c483.jpg',
      id:2,
      isPro: false,
      name:'Eve',
    },
    description:'Пятизвездочный отель NH Barbizon Palace располагается напротив железнодорожного вокзала в самом центре Амстердама. Такие достопримечательности, как церковь Святого Николая, Общественная Амстердамская библиотека и площадь Дам, находятся в нескольких минутах ходьбы от отеля.',
    location:{
      latitude: 123,
      longitude: 123,
      zoom: 10,
    },
  },
  {
    id:4,
    images: [
      'https://cdn.worldota.net/t/1024x768/content/46/b6/46b65edf5b6f42cbcca67aeb6a0aa21f3ef9fd1c.jpeg',
      'https://cdn.worldota.net/t/1024x768/content/97/ba/97ba6bc318755046dc0b6bfef21a9006c2c8aefd.jpeg',
      'https://cdn.worldota.net/t/1024x768/content/83/cb/83cb279ecc580832882f15b18e9915b48d866af5.jpeg',
      'https://cdn.worldota.net/t/1024x768/content/de/53/de53510824b30b10c7c9e89b3517d8de07aa0841.jpeg',
      'https://cdn.worldota.net/t/1024x768/content/3f/8b/3f8bc91bf3e71c396fce6858a5f4d4b23480e538.jpeg',
      'https://cdn.worldota.net/t/1024x768/content/f4/cc/f4cc7af49406cdcc112866166d0f2cc5d70ca0fa.jpeg'
    ],
    isPremium: true,
    previewImage: 'https://cdn.worldota.net/t/1024x768/content/44/0f/440f14da77c31effba0b865970bc1afc1722240c.jpeg',
    price:509,
    rating: 5,
    title:'Luxury Suites Amsterdam',
    typeOfplacement:'Hotel',
    bedrooms:3,
    maxAduts:2,
    insides:[
      'Wifi','Transfer','Parking space','Heating','Kitchen','Fridge',
      'Washing machine','Coffee machine','Dishwasher', 'Shower/Bath',
      'Mini-bar','TV','Cable TV','Fan','Wardrobe/Closet', 'Non-smoking rooms'
    ],
    host:{
      avatar:'https://i.pinimg.com/564x/c5/3c/7c/c53c7ce3a867e4d528a5d1d9bbb7e336.jpg',
      id:2,
      isPro: true,
      name:'Emma',
    },
    description:'Пятизвездочный отель NH Barbizon Palace располагается напротив железнодорожного вокзала в самом центре Амстердама. Такие достопримечательности, как церковь Святого Николая, Общественная Амстердамская библиотека и площадь Дам, находятся в нескольких минутах ходьбы от отеля.',
    location:{
      latitude: 123,
      longitude: 123,
      zoom: 10,
    },
  },
  {
    id:5,
    images: [
      'https://cdn.worldota.net/t/1024x768/ostrovok/2a/2c/2a2c93ced6a366eb08335a8480ba6db17e09ac34.png',
      'https://cdn.worldota.net/t/1024x768/ostrovok/54/a9/54a91660e871e7053e357084517941223378a501.png',
      'https://cdn.worldota.net/t/1024x768/ostrovok/f3/f1/f3f120eaca2481aa6ccd0b9d7bfb9727e52cc8db.png',
      'https://cdn.worldota.net/t/1024x768/ostrovok/95/d6/95d6aa0b15e9eb79569310b9325f64d642c7c8d3.png',
      'https://cdn.worldota.net/t/1024x768/ostrovok/32/39/32391684860cfa71ad7a0cacc34ff72d7f5f4766.jpeg',
      'https://cdn.worldota.net/t/1024x768/ostrovok/3e/9b/3e9bf80b6b6de7ffa3d1e134edc39f6c79578c39.jpeg'
    ],
    isPremium: true,
    previewImage: 'https://cdn.worldota.net/t/1024x768/ostrovok/5b/da/5bda36c19d4c24cf0b32a8567c2cbbf8ee951c76.jpeg',
    price:456,
    rating: 5,
    title:'Sofitel Legend The Grand Amsterdam',
    typeOfplacement:'Hotel',
    bedrooms:4,
    maxAduts:4,
    insides:[
      'Wifi','Transfer','Parking space','Heating','Kitchen','Fridge',
      'Washing machine','Coffee machine','Dishwasher', 'Shower/Bath',
      'Mini-bar','TV','Cable TV','Fan','Wardrobe/Closet', 'Non-smoking rooms'
    ],
    host:{
      avatar:'https://i.pinimg.com/564x/98/d8/13/98d813110762c88c6fc4fdba044dfc4c.jpg',
      id:3,
      isPro: true,
      name:'Julia',
    },
    description:'Пятизвездочный отель NH Barbizon Palace располагается напротив железнодорожного вокзала в самом центре Амстердама. Такие достопримечательности, как церковь Святого Николая, Общественная Амстердамская библиотека и площадь Дам, находятся в нескольких минутах ходьбы от отеля.',
    location:{
      latitude: 123,
      longitude: 123,
      zoom: 10,
    },
  },
  {
    id:6,
    images: [
      'https://cdn.worldota.net/t/1024x768/content/6b/54/6b5443ad3d59874ca6c1229136cb8fb405c89fb7.jpeg',
      'https://cdn.worldota.net/t/1024x768/content/57/4c/574c97038db8a9d90deeb04862554403f02ef880.jpeg',
      'https://cdn.worldota.net/t/1024x768/content/1f/44/1f441f78e6dff6a1c7b04b6ebe370ccaf96eba7a.jpeg',
      'https://cdn.worldota.net/t/1024x768/content/4c/6e/4c6eacdc27d1bd771b52f7ff032ebb2ef87a697a.jpeg',
      'https://cdn.worldota.net/t/1024x768/content/a7/90/a79030d845aff4bd1c06cfc4ac4e36002608a6ed.jpeg'
    ],
    isPremium: false,
    previewImage: 'https://cdn.worldota.net/t/1024x768/content/db/b7/dbb71dc202e03bd015f2f83439f9d9dfe4f7d67d.jpeg',
    price:273,
    rating: 4,
    title:'Park Plaza Victoria Amsterdam',
    typeOfplacement:'Hotel',
    bedrooms:2,
    maxAduts:2,
    insides:[
      'Wifi','Transfer','Parking space','Heating','Kitchen','Fridge',
      'Washing machine','Coffee machine','Dishwasher', 'Shower/Bath',
      'Mini-bar','TV','Cable TV','Fan','Wardrobe/Closet', 'Non-smoking rooms'
    ],
    host:{
      avatar:'https://i.pinimg.com/564x/c7/ad/85/c7ad851ccc736e96814fa3c595fcba88.jpg',
      id:4,
      isPro: false,
      name:'Sara',
    },
    description:'Пятизвездочный отель NH Barbizon Palace располагается напротив железнодорожного вокзала в самом центре Амстердама. Такие достопримечательности, как церковь Святого Николая, Общественная Амстердамская библиотека и площадь Дам, находятся в нескольких минутах ходьбы от отеля.',
    location:{
      latitude: 123,
      longitude: 123,
      zoom: 10,
    },
  },
];
