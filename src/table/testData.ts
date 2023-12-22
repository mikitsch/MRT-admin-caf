type DateInfo = {
  date: string;
  timezone_type: number;
  timezone: string;
};

type Dish = {
  id: number;
  name: string;
  measure: string;
  descr: string;
};

type BillDish = {
  id: string;
  count: number;
  price: number;
  totalSum: number;
  dish: Dish;
};

type UserInfo = {
  firstname: string;
  lastname: string;
  id: number;
};

type Client = {
  id: number;
  firstName: string;
  lastName: string;
};

export type Transaction = {
  id: string;
  terminalNumber: number;
  type: string;
  income: number;
  subType: string;
  serviceChargeSum: number | null;
  total: number;
  totalSum: number;
  discountSum: number | null;
  bonusSum: number | null;
  status: string;
  description: string | null;
  createdAt: DateInfo;
  updatedAt: DateInfo;
  desk: string | null;
  place: number | null;
  countClients: number;
  updatedBy: UserInfo;
  billDishes: Record<string, BillDish>;
  payments: any[]; // Предполагаем, что payments не определены в текущем объекте
  client: Client | null;
};

export const testData: Transaction[] = [
  {
    id: "0b4678bc-73ff-49b9-9e06-f81d2c438d68",
    terminalNumber: 8103,
    type: "sale",
    income: 1,
    subType: "delivery",
    serviceChargeSum: null,
    total: 5.69,
    totalSum: 5,
    discountSum: -0.69,
    bonusSum: null,
    status: "wait_cashier",
    description:
      "Доўгі камент, гэта не адрас, гэта камент. Зараз гэты камент павінен быць бачны і друкавацца на любыл прынтары які б мы не падключылі як сотні тысячы планет я ўжо перапоўніўся і іду глядзець на захад сонца",
    createdAt: {
      date: "2023-12-20 11:25:00.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    updatedAt: {
      date: "2023-12-20 11:40:30.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    desk: null,
    place: null,
    countClients: 1,
    updatedBy: {
      firstname:
        "Адмінам клікаць каб было даўжэй і каб кассы зламаліся вось такім",
      lastname:
        "Адмінаў прозвішча тут каб было даўжэй і словы каб з прабеламі во",
      id: 1,
    },
    billDishes: {
      "193bbef8-409a-42c7-b868-b58d3a6b17b4": {
        id: "193bbef8-409a-42c7-b868-b58d3a6b17b4",
        count: 1,
        price: 5.69,
        totalSum: 5,
        dish: {
          id: 27525,
          name: "Тэст Мадыфікатараў (свабодна платна і з сабекоштам)",
          measure: "pcs",
          descr: "tech_map",
        },
      },
    },
    payments: [],
    client: {
      id: 32,
      firstName: "Анна",
      lastName: "Памянялася",
    },
  },
  {
    id: "e5455f9c-52c1-419f-ae2c-530961012c61",
    terminalNumber: 8102,
    type: "sale",
    income: 1,
    subType: "delivery",
    serviceChargeSum: null,
    total: 5.69,
    totalSum: 5,
    discountSum: -0.69,
    bonusSum: null,
    status: "wait_cashier",
    description:
      "Доўгі камент, гэта не адрас, гэта камент. Зараз гэты камент павінен быць бачны і друкавацца на любыл прынтары які б мы не падключылі як сотні тысячы планет я ўжо перапоўніўся і іду глядзець на захад сонца",
    createdAt: {
      date: "2023-12-20 11:25:00.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    updatedAt: {
      date: "2023-12-20 11:40:27.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    desk: null,
    place: null,
    countClients: 1,
    updatedBy: {
      firstname:
        "Адмінам клікаць каб было даўжэй і каб кассы зламаліся вось такім",
      lastname:
        "Адмінаў прозвішча тут каб было даўжэй і словы каб з прабеламі во",
      id: 1,
    },
    billDishes: {
      "d78b3cc9-0388-4d8c-9d78-6ba658650510": {
        id: "d78b3cc9-0388-4d8c-9d78-6ba658650510",
        count: 1,
        price: 5.69,
        totalSum: 5,
        dish: {
          id: 27525,
          name: "Тэст Мадыфікатараў (свабодна платна і з сабекоштам)",
          measure: "pcs",
          descr: "tech_map",
        },
      },
    },
    payments: [],
    client: {
      id: 32,
      firstName: "Анна",
      lastName: "Памянялася",
    },
  },
  {
    id: "1f942231-a015-4683-98f8-7b671e3f6414",
    terminalNumber: 8011,
    type: "sale",
    income: 1,
    subType: "delivery",
    serviceChargeSum: null,
    total: 5.69,
    totalSum: 5,
    discountSum: -0.69,
    bonusSum: null,
    status: "wait_cashier",
    description:
      "Доўгі камент, гэта не адрас, гэта камент. Зараз гэты камент павінен быць бачны і друкавацца на любыл прынтары які б мы не падключылі як сотні тысячы планет я ўжо перапоўніўся і іду глядзець на захад сонца",
    createdAt: {
      date: "2023-10-13 08:25:00.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    updatedAt: {
      date: "2023-12-20 10:52:10.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    desk: null,
    place: null,
    countClients: 1,
    updatedBy: {
      firstname:
        "Адмінам клікаць каб было даўжэй і каб кассы зламаліся вось такім",
      lastname:
        "Адмінаў прозвішча тут каб было даўжэй і словы каб з прабеламі во",
      id: 1,
    },
    billDishes: {
      "c0293d02-1b02-406f-bafa-66e372b5b440": {
        id: "c0293d02-1b02-406f-bafa-66e372b5b440",
        count: 1,
        price: 5.69,
        totalSum: 5,
        dish: {
          id: 27525,
          name: "Тэст Мадыфікатараў (свабодна платна і з сабекоштам)",
          measure: "pcs",
          descr: "tech_map",
        },
      },
    },
    payments: [],
    client: {
      id: 27509,
      firstName: "Новы_дзень_новы_кліент-27-3",
      lastName: "Ну_вельми_новы_кліент-27-3",
    },
  },
  {
    id: "ee6a3d37-c0e1-4219-8c77-0344187cfbd3",
    terminalNumber: 8010,
    type: "sale",
    income: 1,
    subType: "delivery",
    serviceChargeSum: null,
    total: 5.69,
    totalSum: 5,
    discountSum: -0.69,
    bonusSum: null,
    status: "wait_cashier",
    description:
      "Доўгі камент, гэта не адрас, гэта камент. Зараз гэты камент павінен быць бачны і друкавацца на любыл прынтары які б мы не падключылі як сотні тысячы планет я ўжо перапоўніўся і іду глядзець на захад сонца",
    createdAt: {
      date: "2023-10-13 08:25:00.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    updatedAt: {
      date: "2023-12-20 10:51:57.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    desk: null,
    place: null,
    countClients: 1,
    updatedBy: {
      firstname:
        "Адмінам клікаць каб было даўжэй і каб кассы зламаліся вось такім",
      lastname:
        "Адмінаў прозвішча тут каб было даўжэй і словы каб з прабеламі во",
      id: 1,
    },
    billDishes: {
      "de88052a-f114-4963-8515-c942d51db247": {
        id: "de88052a-f114-4963-8515-c942d51db247",
        count: 1,
        price: 5.69,
        totalSum: 5,
        dish: {
          id: 27525,
          name: "Тэст Мадыфікатараў (свабодна платна і з сабекоштам)",
          measure: "pcs",
          descr: "tech_map",
        },
      },
    },
    payments: [],
    client: {
      id: 27508,
      firstName: "Новы_дзень_новы_кліент-27-3",
      lastName: "Ну_вельми_новы_кліент-27-3",
    },
  },
  {
    id: "4dfb7612-7af9-41ae-b4b0-d5efcf22e245",
    terminalNumber: 8003,
    type: "sale",
    income: 1,
    subType: "delivery",
    serviceChargeSum: null,
    total: 5.69,
    totalSum: 5,
    discountSum: -0.69,
    bonusSum: null,
    status: "closed",
    description:
      " Доўгі камент, гэта не адрас, гэта камент. Зараз гэты камент павінен быць бачны і друкавацца на любыл прынтары які б мы не падключылі як сотні тысячы планет я ўжо перапоўніўся і іду глядзець на захад сонца",
    createdAt: {
      date: "2023-10-13 08:25:00.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    updatedAt: {
      date: "2023-11-22 17:19:08.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    desk: "0",
    place: -1,
    countClients: 1,
    updatedBy: {
      firstname:
        "Адмінам клікаць каб было даўжэй і каб кассы зламаліся вось такім",
      lastname:
        "Адмінаў прозвішча тут каб было даўжэй і словы каб з прабеламі во",
      id: 1,
    },
    billDishes: {
      "587c4ac0-7cb6-4b3b-9776-8cf205fa0bb4": {
        id: "587c4ac0-7cb6-4b3b-9776-8cf205fa0bb4",
        count: 1,
        price: 5.69,
        totalSum: 5,
        dish: {
          id: 27525,
          name: "Тэст Мадыфікатараў (свабодна платна і з сабекоштам)",
          measure: "pcs",
          descr: "tech_map",
        },
      },
    },
    payments: [],
    client: {
      id: 27501,
      firstName: "Новы_дзень_новы_кліент-26-3",
      lastName: "Ну_вельми_новы_кліент-26-3",
    },
  },
  {
    id: "81f2c106-6798-test-0501-696520317982",
    terminalNumber: 15,
    type: "sale",
    income: 1,
    subType: "delivery",
    serviceChargeSum: null,
    total: 9,
    totalSum: 8.6,
    discountSum: -0.4,
    bonusSum: null,
    status: "closed",
    description: null,
    createdAt: {
      date: "2023-10-05 18:38:44.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    updatedAt: {
      date: "2023-11-22 17:09:45.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    desk: "0",
    place: -1,
    countClients: 1,
    updatedBy: {
      firstname:
        "Адмінам клікаць каб было даўжэй і каб кассы зламаліся вось такім",
      lastname:
        "Адмінаў прозвішча тут каб было даўжэй і словы каб з прабеламі во",
      id: 1,
    },
    billDishes: {
      "1dbb39d3-62b3-4ac2-861b-9d40380236db": {
        id: "1dbb39d3-62b3-4ac2-861b-9d40380236db",
        count: 4,
        price: 1,
        totalSum: 3.6,
        dish: {
          id: 16087,
          name: "Пивас вновьсозданный (копия)",
          measure: "pcs",
          descr: "product",
        },
      },
      "7b27f69f-09c3-47cf-8ae0-385644681c41": {
        id: "7b27f69f-09c3-47cf-8ae0-385644681c41",
        count: 2,
        price: 2,
        totalSum: 4,
        dish: {
          id: 16088,
          name: "Попивасенько",
          measure: "pcs",
          descr: "product",
        },
      },
      "cdbe9fa0-00cd-4a43-96e6-ff5bc1d53d8f": {
        id: "cdbe9fa0-00cd-4a43-96e6-ff5bc1d53d8f",
        count: 1,
        price: 1,
        totalSum: 1,
        dish: {
          id: 16086,
          name: "Пивас вновьсозданный",
          measure: "pcs",
          descr: "product",
        },
      },
    },
    payments: [],
    client: {
      id: 33,
      firstName: "Евгений",
      lastName: "Кулинкович",
    },
  },
  {
    id: "2c1d2fe3-ec79-4887-9c43-bbd0fd7bc5a2",
    terminalNumber: 8002,
    type: "sale",
    income: 1,
    subType: "delivery",
    serviceChargeSum: null,
    total: 5.69,
    totalSum: 5,
    discountSum: -0.69,
    bonusSum: null,
    status: "closed",
    description:
      " Доўгі камент, гэта не адрас, гэта камент. Зараз гэты камент павінен быць бачны і друкавацца на любыл прынтары які б мы не падключылі як сотні тысячы планет я ўжо перапоўніўся і іду глядзець на захад сонца",
    createdAt: {
      date: "2023-10-13 08:25:00.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    updatedAt: {
      date: "2023-11-22 17:09:27.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    desk: "0",
    place: -1,
    countClients: 1,
    updatedBy: {
      firstname:
        "Адмінам клікаць каб было даўжэй і каб кассы зламаліся вось такім",
      lastname:
        "Адмінаў прозвішча тут каб было даўжэй і словы каб з прабеламі во",
      id: 1,
    },
    billDishes: {
      "e5c0196e-68ef-4712-8a02-3ce1acaee2ad": {
        id: "e5c0196e-68ef-4712-8a02-3ce1acaee2ad",
        count: 1,
        price: 5.69,
        totalSum: 5,
        dish: {
          id: 27525,
          name: "Тэст Мадыфікатараў (свабодна платна і з сабекоштам)",
          measure: "pcs",
          descr: "tech_map",
        },
      },
    },
    payments: [],
    client: {
      id: 27500,
      firstName: "Новы_дзень_новы_кліент-26-3",
      lastName: "Ну_вельми_новы_кліент-26-3",
    },
  },
  {
    id: "0354e7d1-3a08-test-0501-699187210274",
    terminalNumber: 17,
    type: "sale",
    income: 1,
    subType: "",
    serviceChargeSum: null,
    total: 4,
    totalSum: 4,
    discountSum: 0,
    bonusSum: null,
    status: "cancel_full",
    description: "     Дозаказ       Ошибка официанта   ",
    createdAt: {
      date: "2023-11-05 15:27:27.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    updatedAt: {
      date: "2023-11-05 15:27:27.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    desk: "10",
    place: 1,
    countClients: 1,
    updatedBy: {
      firstname:
        "Адмінам клікаць каб было даўжэй і каб кассы зламаліся вось такім",
      lastname:
        "Адмінаў прозвішча тут каб было даўжэй і словы каб з прабеламі во",
      id: 1,
    },
    billDishes: {
      "ae7f23e3-f23e-458b-957e-04e2e4b7b8c4": {
        id: "ae7f23e3-f23e-458b-957e-04e2e4b7b8c4",
        count: 1,
        price: 4,
        totalSum: 4,
        dish: {
          id: 248,
          name: 'Шокола "Alpen Gold" фунд.',
          measure: "pcs",
          descr: "product",
        },
      },
    },
    payments: [],
    client: null,
  },
  {
    id: "1682e567-026b-test-0501-695821554916",
    terminalNumber: 33,
    type: "sale",
    income: 1,
    subType: "",
    serviceChargeSum: null,
    total: 215,
    totalSum: 215,
    discountSum: 0,
    bonusSum: null,
    status: "cancel",
    description:
      "    Ошибка официанта       Ошибка официанта       Ошибка официанта       Ошибка официанта   ",
    createdAt: {
      date: "2023-09-27 16:32:56.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    updatedAt: {
      date: "2023-11-05 15:26:13.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    desk: "10",
    place: 1,
    countClients: 1,
    updatedBy: {
      firstname:
        "Адмінам клікаць каб было даўжэй і каб кассы зламаліся вось такім",
      lastname:
        "Адмінаў прозвішча тут каб было даўжэй і словы каб з прабеламі во",
      id: 1,
    },
    billDishes: {
      "45b96c1f-01ea-416d-b6d0-f9718f3ffd98": {
        id: "45b96c1f-01ea-416d-b6d0-f9718f3ffd98",
        count: 1,
        price: 5,
        totalSum: 5,
        dish: {
          id: 13215,
          name: "Тест входящего НДС",
          measure: "pcs",
          descr: "product",
        },
      },
      "95956c88-cfab-429f-a67f-153b369cf16c": {
        id: "95956c88-cfab-429f-a67f-153b369cf16c",
        count: 1,
        price: 70,
        totalSum: 70,
        dish: {
          id: 433,
          name: "Бомбар Печенье",
          measure: "pcs",
          descr: "product",
        },
      },
      "d674be2a-75e4-4217-9810-080ad5566afe": {
        id: "d674be2a-75e4-4217-9810-080ad5566afe",
        count: 1,
        price: 50,
        totalSum: 50,
        dish: {
          id: 430,
          name: "Бомбар Батончик Злаковый",
          measure: "pcs",
          descr: "product",
        },
      },
      "edb91842-471b-46d2-b28f-7f028be5e304": {
        id: "edb91842-471b-46d2-b28f-7f028be5e304",
        count: 1,
        price: 90,
        totalSum: 90,
        dish: {
          id: 436,
          name: "Печенье Злаковое",
          measure: "pcs",
          descr: "product",
        },
      },
    },
    payments: [],
    client: {
      id: 27499,
      firstName: "844",
      lastName: "644",
    },
  },
  {
    id: "76a6f840-0a33-test-0501-663668381518",
    terminalNumber: 17,
    type: "sale",
    income: 1,
    subType: "reserve",
    serviceChargeSum: null,
    total: 7.01,
    totalSum: 1.31,
    discountSum: -0.7,
    bonusSum: null,
    status: "closed",
    description: null,
    createdAt: {
      date: "2022-09-20 13:06:56.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    updatedAt: {
      date: "2023-11-05 15:26:03.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    desk: "9",
    place: 1,
    countClients: 1,
    updatedBy: {
      firstname:
        "Адмінам клікаць каб было даўжэй і каб кассы зламаліся вось такім",
      lastname:
        "Адмінаў прозвішча тут каб было даўжэй і словы каб з прабеламі во",
      id: 1,
    },
    billDishes: {
      "3941fba0-e158-4731-af0a-9cecfb14d3e8": {
        id: "3941fba0-e158-4731-af0a-9cecfb14d3e8",
        count: 1,
        price: 0,
        totalSum: 0,
        dish: {
          id: 236,
          name: "Vodka Yen Rakhi 1ლ",
          measure: "pcs",
          descr: "product",
        },
      },
      "61176802-e3ef-40d8-8f9b-8788deec2589": {
        id: "61176802-e3ef-40d8-8f9b-8788deec2589",
        count: 2,
        price: 1.5,
        totalSum: 2.7,
        dish: {
          id: 249,
          name: 'Шоколад "Столичный"',
          measure: "pcs",
          descr: "product",
        },
      },
      "b8dbb80c-c5a8-4e0c-8fbe-f608ee527979": {
        id: "b8dbb80c-c5a8-4e0c-8fbe-f608ee527979",
        count: 1,
        price: 4.01,
        totalSum: 3.61,
        dish: {
          id: 231,
          name: "Rum Captain Morgan 1ლ",
          measure: "pcs",
          descr: "product",
        },
      },
    },
    payments: [],
    client: {
      id: 33,
      firstName: "Евгений",
      lastName: "Кулинкович",
    },
  },
  {
    id: "7f3dc999-e56c-test-0501-699187122007",
    terminalNumber: 16,
    type: "prepayment",
    income: 1,
    subType: "",
    serviceChargeSum: null,
    total: 5,
    totalSum: 5,
    discountSum: null,
    bonusSum: null,
    status: "closed",
    description: null,
    createdAt: {
      date: "2023-11-05 15:25:22.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    updatedAt: {
      date: "2023-11-05 15:25:25.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    desk: "",
    place: 99,
    countClients: 1,
    updatedBy: {
      firstname:
        "Адмінам клікаць каб было даўжэй і каб кассы зламаліся вось такім",
      lastname:
        "Адмінаў прозвішча тут каб было даўжэй і словы каб з прабеламі во",
      id: 1,
    },
    billDishes: {
      "c0a9dbe8-f2da-4356-8e7f-7a587f024ba6": {
        id: "c0a9dbe8-f2da-4356-8e7f-7a587f024ba6",
        count: 1,
        price: 5,
        totalSum: 5,
        dish: {
          id: 303,
          name: "Свободный Сертификат",
          measure: "pcs",
          descr: "pre_payment",
        },
      },
    },
    payments: [],
    client: null,
  },
  {
    id: "3c2317a0-864b-test-0501-663694319959",
    terminalNumber: 33,
    type: "sale",
    income: 1,
    subType: "reserve",
    serviceChargeSum: null,
    total: 1.6,
    totalSum: 0,
    discountSum: -0.08,
    bonusSum: null,
    status: "pending",
    description: null,
    createdAt: {
      date: "2022-09-20 20:18:57.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    updatedAt: {
      date: "2023-11-05 15:21:50.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    desk: "9",
    place: -1,
    countClients: 1,
    updatedBy: {
      firstname: "Lu",
      lastname: "Chu",
      id: 5,
    },
    billDishes: {
      "289886bf-e744-4cc3-9848-c25be84fcbc1": {
        id: "289886bf-e744-4cc3-9848-c25be84fcbc1",
        count: 0.025,
        price: 15,
        totalSum: 0.36,
        dish: {
          id: 13391,
          name: "Я Весовой Следи За Мной",
          measure: "kg",
          descr: "product",
        },
      },
      "2f6eb008-5550-49ec-a131-28de4424b992": {
        id: "2f6eb008-5550-49ec-a131-28de4424b992",
        count: 0.003,
        price: 15,
        totalSum: 0.05,
        dish: {
          id: 13391,
          name: "Я Весовой Следи За Мной",
          measure: "kg",
          descr: "product",
        },
      },
      "31d99662-9b48-4f87-94f6-e69255d57562": {
        id: "31d99662-9b48-4f87-94f6-e69255d57562",
        count: 0.078,
        price: 15,
        totalSum: 1.11,
        dish: {
          id: 13391,
          name: "Я Весовой Следи За Мной",
          measure: "kg",
          descr: "product",
        },
      },
    },
    payments: [],
    client: {
      id: 57,
      firstName: "Ирина Васильевна ",
      lastName: "Ничипорук ",
    },
  },
  {
    id: "1b57cf7a-0661-test-0501-699186905668",
    terminalNumber: 15,
    type: "prepayment",
    income: 1,
    subType: "",
    serviceChargeSum: null,
    total: 2,
    totalSum: 2,
    discountSum: null,
    bonusSum: null,
    status: "closed",
    description: null,
    createdAt: {
      date: "2023-11-05 15:21:45.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    updatedAt: {
      date: "2023-11-05 15:21:49.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    desk: "",
    place: 99,
    countClients: 1,
    updatedBy: {
      firstname:
        "Адмінам клікаць каб было даўжэй і каб кассы зламаліся вось такім",
      lastname:
        "Адмінаў прозвішча тут каб было даўжэй і словы каб з прабеламі во",
      id: 1,
    },
    billDishes: {
      "514a55bc-4501-4f9e-8893-b5c06d4a97f4": {
        id: "514a55bc-4501-4f9e-8893-b5c06d4a97f4",
        count: 1,
        price: 2,
        totalSum: 2,
        dish: {
          id: 303,
          name: "Свободный Сертификат",
          measure: "pcs",
          descr: "pre_payment",
        },
      },
    },
    payments: [],
    client: null,
  },
  {
    id: "dc00ce2f-bc63-test-0501-699186857101",
    terminalNumber: 14,
    type: "sale",
    income: 1,
    subType: "",
    serviceChargeSum: null,
    total: 16,
    totalSum: 16,
    discountSum: 0,
    bonusSum: null,
    status: "closed",
    description: null,
    createdAt: {
      date: "2023-11-05 15:20:58.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    updatedAt: {
      date: "2023-11-05 15:21:08.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    desk: "14",
    place: 1,
    countClients: 1,
    updatedBy: {
      firstname:
        "Адмінам клікаць каб было даўжэй і каб кассы зламаліся вось такім",
      lastname:
        "Адмінаў прозвішча тут каб было даўжэй і словы каб з прабеламі во",
      id: 1,
    },
    billDishes: {
      "0bccd751-dc5c-4682-83ff-79d18fdd89f1": {
        id: "0bccd751-dc5c-4682-83ff-79d18fdd89f1",
        count: 4,
        price: 1,
        totalSum: 4,
        dish: {
          id: 16127,
          name: "0,500l Კოკა კოლა Coca-Cola",
          measure: "pcs",
          descr: "product",
        },
      },
      "fe17f056-1561-47e9-91a1-b483dcf15f87": {
        id: "fe17f056-1561-47e9-91a1-b483dcf15f87",
        count: 3,
        price: 4,
        totalSum: 12,
        dish: {
          id: 248,
          name: 'Шокола "Alpen Gold" фунд.',
          measure: "pcs",
          descr: "product",
        },
      },
    },
    payments: [],
    client: null,
  },
  {
    id: "01d1e353-2025-test-0501-699186784569",
    terminalNumber: 13,
    type: "sale",
    income: 1,
    subType: "",
    serviceChargeSum: null,
    total: 1337,
    totalSum: 1337,
    discountSum: 0,
    bonusSum: null,
    status: "closed",
    description: null,
    createdAt: {
      date: "2023-11-05 15:19:47.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    updatedAt: {
      date: "2023-11-05 15:20:03.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    desk: "Я слова",
    place: 1,
    countClients: 1,
    updatedBy: {
      firstname:
        "Адмінам клікаць каб было даўжэй і каб кассы зламаліся вось такім",
      lastname:
        "Адмінаў прозвішча тут каб было даўжэй і словы каб з прабеламі во",
      id: 1,
    },
    billDishes: {
      "752bc510-3ed1-47c5-abf0-8cdbc357647a": {
        id: "752bc510-3ed1-47c5-abf0-8cdbc357647a",
        count: 1,
        price: 1337,
        totalSum: 1337,
        dish: {
          id: 34816,
          name: '<script> function myFunction() {   alert("ВАС ЛОМАНУЛЕ"); } </script>',
          measure: "pcs",
          descr: "product",
        },
      },
    },
    payments: [],
    client: null,
  },
  {
    id: "9af8becd-a77a-test-0501-699186131491",
    terminalNumber: 12,
    type: "sale",
    income: 1,
    subType: "",
    serviceChargeSum: null,
    total: 21,
    totalSum: 20,
    discountSum: -1,
    bonusSum: 4,
    status: "closed",
    description: "HAX0RS /n IN DA HOUSE \\n",
    createdAt: {
      date: "2023-11-05 15:13:17.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    updatedAt: {
      date: "2023-11-05 15:17:40.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    desk: "Я слова",
    place: 1,
    countClients: 1,
    updatedBy: {
      firstname:
        "Адмінам клікаць каб было даўжэй і каб кассы зламаліся вось такім",
      lastname:
        "Адмінаў прозвішча тут каб было даўжэй і словы каб з прабеламі во",
      id: 1,
    },
    billDishes: {
      "72ebb636-76e7-4294-ac58-c83f18192696": {
        id: "72ebb636-76e7-4294-ac58-c83f18192696",
        count: 1,
        price: 15,
        totalSum: 14.29,
        dish: {
          id: 34815,
          name: "Бургер-шмургер",
          measure: "pcs",
          descr: "tech_map",
        },
      },
      "8aeaab0e-53b9-4849-9f36-95e8652b6b1a": {
        id: "8aeaab0e-53b9-4849-9f36-95e8652b6b1a",
        count: 0.1,
        price: 60,
        totalSum: 5.71,
        dish: {
          id: 15851,
          name: 'Водка "Бульбаш №1"',
          measure: "l",
          descr: "product",
        },
      },
      "a608d4c8-bad6-40d1-b01e-3ccfe3a03397": {
        id: "a608d4c8-bad6-40d1-b01e-3ccfe3a03397",
        count: 0.001,
        price: 1,
        totalSum: 1,
        dish: {
          id: 34812,
          name: "Гіга-гостра",
          measure: "kg",
          descr: "product",
        },
      },
      "bc6becfb-5a62-4de1-ad81-af5fb01efbde": {
        id: "bc6becfb-5a62-4de1-ad81-af5fb01efbde",
        count: 0.001,
        price: 1,
        totalSum: 1,
        dish: {
          id: 34813,
          name: "Гіга-кісла",
          measure: "kg",
          descr: "product",
        },
      },
      "d5f7e537-49b0-4dea-9ece-8373d1c2f358": {
        id: "d5f7e537-49b0-4dea-9ece-8373d1c2f358",
        count: 0.001,
        price: 1,
        totalSum: 1,
        dish: {
          id: 34814,
          name: "Гіга-салодка",
          measure: "kg",
          descr: "product",
        },
      },
    },
    payments: [],
    client: {
      id: 32,
      firstName: "Анна",
      lastName: "Памянялася",
    },
  },
  {
    id: "0c5443a4-3265-test-0501-699184423693",
    terminalNumber: 11,
    type: "sale",
    income: 1,
    subType: "",
    serviceChargeSum: null,
    total: 30,
    totalSum: 30,
    discountSum: 0,
    bonusSum: 6,
    status: "closed",
    description:
      "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす       いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす       いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす       いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす       いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさき",
    createdAt: {
      date: "2023-11-05 14:40:47.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    updatedAt: {
      date: "2023-11-05 15:02:37.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    desk: "Я слова",
    place: 1,
    countClients: 1,
    updatedBy: {
      firstname:
        "Адмінам клікаць каб было даўжэй і каб кассы зламаліся вось такім",
      lastname:
        "Адмінаў прозвішча тут каб было даўжэй і словы каб з прабеламі во",
      id: 1,
    },
    billDishes: {
      "3e9fe298-bdac-49f2-83c5-1eead9336683": {
        id: "3e9fe298-bdac-49f2-83c5-1eead9336683",
        count: 1,
        price: 30,
        totalSum: 30,
        dish: {
          id: 569,
          name: "Орбит",
          measure: "pcs",
          descr: "product",
        },
      },
    },
    payments: [],
    client: {
      id: 32,
      firstName: "Анна",
      lastName: "Памянялася",
    },
  },
  {
    id: "0d115ac9-aa41-test-0501-699183905082",
    terminalNumber: 10,
    type: "sale",
    income: 1,
    subType: "",
    serviceChargeSum: null,
    total: 1,
    totalSum: 1,
    discountSum: 0,
    bonusSum: null,
    status: "closed",
    description: null,
    createdAt: {
      date: "2023-11-05 14:33:32.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    updatedAt: {
      date: "2023-11-05 14:39:21.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    desk: "Я слова",
    place: 1,
    countClients: 1,
    updatedBy: {
      firstname:
        "Адмінам клікаць каб было даўжэй і каб кассы зламаліся вось такім",
      lastname:
        "Адмінаў прозвішча тут каб было даўжэй і словы каб з прабеламі во",
      id: 1,
    },
    billDishes: {
      "d107fb34-e6f2-410b-a6dd-cb9d567f02f3": {
        id: "d107fb34-e6f2-410b-a6dd-cb9d567f02f3",
        count: 1,
        price: 1,
        totalSum: 1,
        dish: {
          id: 16087,
          name: "Пивас вновьсозданный (копия)",
          measure: "pcs",
          descr: "product",
        },
      },
    },
    payments: [],
    client: null,
  },
  {
    id: "d49084ef-a509-test-0501-699183788324",
    terminalNumber: 9,
    type: "sale",
    income: 1,
    subType: "",
    serviceChargeSum: null,
    total: 12.36,
    totalSum: 12.36,
    discountSum: 0,
    bonusSum: null,
    status: "closed",
    description: null,
    createdAt: {
      date: "2023-11-05 14:30:10.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    updatedAt: {
      date: "2023-11-05 14:31:01.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    desk: "Я слова",
    place: 1,
    countClients: 1,
    updatedBy: {
      firstname:
        "Адмінам клікаць каб было даўжэй і каб кассы зламаліся вось такім",
      lastname:
        "Адмінаў прозвішча тут каб было даўжэй і словы каб з прабеламі во",
      id: 1,
    },
    billDishes: {
      "678b1101-0e69-443c-afed-85eb418ecce8": {
        id: "678b1101-0e69-443c-afed-85eb418ecce8",
        count: 1,
        price: 12.3,
        totalSum: 12.3,
        dish: {
          id: 295,
          name: 'Піва "Старажытнае", 0.5л',
          measure: "pcs",
          descr: "product",
        },
      },
      "82dc7b46-33c7-4227-9bb8-de0bdc0cea7e": {
        id: "82dc7b46-33c7-4227-9bb8-de0bdc0cea7e",
        count: 0.001,
        price: 60,
        totalSum: 0.06,
        dish: {
          id: 15851,
          name: 'Водка "Бульбаш №1"',
          measure: "l",
          descr: "product",
        },
      },
    },
    payments: [],
    client: null,
  },
  {
    id: "4999f08d-45cb-test-0501-699182288513",
    terminalNumber: 8,
    type: "sale",
    income: 1,
    subType: "",
    serviceChargeSum: null,
    total: 389.7,
    totalSum: 389.7,
    discountSum: 0,
    bonusSum: null,
    status: "closed",
    description:
      "HAX0RS /n IN DA HOUSE \\n        коментарий к чеку       Гэта каментар!       דג סקרן שט בים מאוכזב ולפתע מצא חברה",
    createdAt: {
      date: "2023-11-05 14:05:05.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    updatedAt: {
      date: "2023-11-05 14:28:57.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    desk: "Я слова",
    place: 1,
    countClients: 1,
    updatedBy: {
      firstname:
        "Адмінам клікаць каб было даўжэй і каб кассы зламаліся вось такім",
      lastname:
        "Адмінаў прозвішча тут каб было даўжэй і словы каб з прабеламі во",
      id: 1,
    },
    billDishes: {
      "1a80a58e-f2ba-47bc-b10b-5b8d84deab77": {
        id: "1a80a58e-f2ba-47bc-b10b-5b8d84deab77",
        count: 1,
        price: 180,
        totalSum: 180,
        dish: {
          id: 423,
          name: "Латте Соленая Карамель",
          measure: "pcs",
          descr: "tech_map",
        },
      },
      "8265fd9b-abad-460e-921d-821f5a064aac": {
        id: "8265fd9b-abad-460e-921d-821f5a064aac",
        count: 1,
        price: 9.7,
        totalSum: 9.7,
        dish: {
          id: 580,
          name: "Чай за варэнем",
          measure: "pcs",
          descr: "product",
        },
      },
      "ff6d3536-4538-4a32-b28c-3ab750cc7ed2": {
        id: "ff6d3536-4538-4a32-b28c-3ab750cc7ed2",
        count: 1,
        price: 200,
        totalSum: 200,
        dish: {
          id: 428,
          name: "Сырный РАФ",
          measure: "pcs",
          descr: "tech_map",
        },
      },
    },
    payments: [],
    client: null,
  },
  {
    id: "b02f501b-d655-test-0501-698918359819",
    terminalNumber: 6,
    type: "sale",
    income: 1,
    subType: "",
    serviceChargeSum: null,
    total: 34,
    totalSum: 34,
    discountSum: 0,
    bonusSum: null,
    status: "closed",
    description:
      "דג סקרן שט בים מאוכזב ולפתע מצא חברה       თანასწორი თავისი ღირსებითა და უფლებებით.       HAX0RS /n IN DA HOUSE \\n",
    createdAt: {
      date: "2023-11-02 12:46:12.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    updatedAt: {
      date: "2023-11-02 12:47:55.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    desk: "12",
    place: 1,
    countClients: 1,
    updatedBy: {
      firstname:
        "Адмінам клікаць каб было даўжэй і каб кассы зламаліся вось такім",
      lastname:
        "Адмінаў прозвішча тут каб было даўжэй і словы каб з прабеламі во",
      id: 1,
    },
    billDishes: {
      "8ae5a8b2-6200-4ee8-9b1a-a49cfc199069": {
        id: "8ae5a8b2-6200-4ee8-9b1a-a49cfc199069",
        count: 1,
        price: 32,
        totalSum: 32,
        dish: {
          id: 34811,
          name: "いろはにほへとちりぬるを",
          measure: "pcs",
          descr: "product",
        },
      },
      "d5ee4557-4c3f-466f-9bf1-7d988bccfdfe": {
        id: "d5ee4557-4c3f-466f-9bf1-7d988bccfdfe",
        count: 1,
        price: 1,
        totalSum: 1,
        dish: {
          id: 16127,
          name: "0,500l Კოკა კოლა Coca-Cola",
          measure: "pcs",
          descr: "product",
        },
      },
      "f7c28308-9b05-4e70-8faf-80a8de347513": {
        id: "f7c28308-9b05-4e70-8faf-80a8de347513",
        count: 1,
        price: 1,
        totalSum: 1,
        dish: {
          id: 16278,
          name: "דג סקרן שט בים מאוכזב ולפתע מצא חברה",
          measure: "pcs",
          descr: "product",
        },
      },
    },
    payments: [],
    client: null,
  },
  {
    id: "06b4c558-691c-test-0501-698910446581",
    terminalNumber: 5,
    type: "sale",
    income: 1,
    subType: "",
    serviceChargeSum: null,
    total: 15,
    totalSum: 15,
    discountSum: 0,
    bonusSum: null,
    status: "closed",
    description: null,
    createdAt: {
      date: "2023-11-02 10:34:22.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    updatedAt: {
      date: "2023-11-02 10:35:04.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    desk: "12",
    place: 1,
    countClients: 1,
    updatedBy: {
      firstname:
        "Адмінам клікаць каб было даўжэй і каб кассы зламаліся вось такім",
      lastname:
        "Адмінаў прозвішча тут каб было даўжэй і словы каб з прабеламі во",
      id: 1,
    },
    billDishes: {
      "06a73b2a-b0b0-4837-b5cd-3fa795422d8e": {
        id: "06a73b2a-b0b0-4837-b5cd-3fa795422d8e",
        count: 1,
        price: 15,
        totalSum: 15,
        dish: {
          id: 34815,
          name: "Бургер-шмургер",
          measure: "pcs",
          descr: "tech_map",
        },
      },
      "1933ed98-d701-4979-8e62-0bd8021cca0a": {
        id: "1933ed98-d701-4979-8e62-0bd8021cca0a",
        count: 0.001,
        price: 1,
        totalSum: 1,
        dish: {
          id: 34812,
          name: "Гіга-гостра",
          measure: "kg",
          descr: "product",
        },
      },
      "309da4bb-031f-4b61-bd1b-63480f3715a8": {
        id: "309da4bb-031f-4b61-bd1b-63480f3715a8",
        count: 0.001,
        price: 1,
        totalSum: 1,
        dish: {
          id: 34814,
          name: "Гіга-салодка",
          measure: "kg",
          descr: "product",
        },
      },
      "a3aecb74-b58f-4cdd-bcb5-b3b10abb5e74": {
        id: "a3aecb74-b58f-4cdd-bcb5-b3b10abb5e74",
        count: 0.001,
        price: 1,
        totalSum: 1,
        dish: {
          id: 34813,
          name: "Гіга-кісла",
          measure: "kg",
          descr: "product",
        },
      },
    },
    payments: [],
    client: null,
  },
  {
    id: "7190196a-06a5-test-0501-687266914876",
    terminalNumber: 6,
    type: "sale",
    income: 1,
    subType: "",
    serviceChargeSum: null,
    total: 8.6,
    totalSum: 8.6,
    discountSum: 0,
    bonusSum: null,
    status: "closed",
    description: null,
    createdAt: {
      date: "2023-06-20 16:15:18.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    updatedAt: {
      date: "2023-11-02 09:56:46.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    desk: "666",
    place: 1,
    countClients: 1,
    updatedBy: {
      firstname:
        "Адмінам клікаць каб было даўжэй і каб кассы зламаліся вось такім",
      lastname:
        "Адмінаў прозвішча тут каб было даўжэй і словы каб з прабеламі во",
      id: 1,
    },
    billDishes: {
      "2bbd913e-4c45-4e69-b2bb-04b5b6dd6413": {
        id: "2bbd913e-4c45-4e69-b2bb-04b5b6dd6413",
        count: 0.0001,
        price: 2,
        totalSum: 0.002,
        dish: {
          id: 25,
          name: "ნიგოზი",
          measure: "kg",
          descr: "product",
        },
      },
      "5d9f7200-769a-4cb9-afa1-e5549dc3659b": {
        id: "5d9f7200-769a-4cb9-afa1-e5549dc3659b",
        count: 2,
        price: 2,
        totalSum: 4,
        dish: {
          id: 13390,
          name: "Lietuvių: Įlinkusi fechtuotojo špaga blykčiodama gręžė apvalų arbūzą",
          measure: "pcs",
          descr: "product",
        },
      },
      "7549249d-b50c-4128-8f9f-d6b0e364df57": {
        id: "7549249d-b50c-4128-8f9f-d6b0e364df57",
        count: 0.0001,
        price: 0.1,
        totalSum: 0.0001,
        dish: {
          id: 33,
          name: "რუკოლა",
          measure: "kg",
          descr: "product",
        },
      },
      "7f742dcf-74c8-42af-bacd-e920ae5053b3": {
        id: "7f742dcf-74c8-42af-bacd-e920ae5053b3",
        count: 0.001,
        price: 36,
        totalSum: 3.6,
        dish: {
          id: 4,
          name: "La Grand Reserve",
          measure: "kg",
          descr: "tech_map",
        },
      },
      "95311b44-3aa1-47d7-9c5c-5ff7d8acdcce": {
        id: "95311b44-3aa1-47d7-9c5c-5ff7d8acdcce",
        count: 0.0001,
        price: 0.5,
        totalSum: 0.0005,
        dish: {
          id: 30,
          name: "პომიდორი ჩერი",
          measure: "kg",
          descr: "sub_product",
        },
      },
      "a0a9c377-2484-43bf-a892-e6fca733a5a5": {
        id: "a0a9c377-2484-43bf-a892-e6fca733a5a5",
        count: 1.0e-6,
        price: 1,
        totalSum: 0.001,
        dish: {
          id: 30,
          name: "პომიდორი ჩერი",
          measure: "kg",
          descr: "sub_product",
        },
      },
      "da9bdaa1-a4cc-4409-8aad-05ec58385bf2": {
        id: "da9bdaa1-a4cc-4409-8aad-05ec58385bf2",
        count: 1,
        price: 1,
        totalSum: 1,
        dish: {
          id: 13389,
          name: "Polska: Mężny bądź, chroń pułk twój i sześć flag",
          measure: "pcs",
          descr: "product",
        },
      },
      "e218a50f-9dc1-4f5a-b835-03755ecf80e2": {
        id: "e218a50f-9dc1-4f5a-b835-03755ecf80e2",
        count: 0.001,
        price: 0,
        totalSum: 0,
        dish: {
          id: 308,
          name: "Su vištiena 30 cm Plonapadė",
          measure: "pcs",
          descr: "product",
        },
      },
    },
    payments: [],
    client: null,
  },
  {
    id: "b1982b3c-016c-test-0501-698907483874",
    terminalNumber: 4,
    type: "sale",
    income: 1,
    subType: "",
    serviceChargeSum: null,
    total: 5,
    totalSum: 5,
    discountSum: 0,
    bonusSum: null,
    status: "closed",
    description: null,
    createdAt: {
      date: "2023-11-02 09:46:50.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    updatedAt: {
      date: "2023-11-02 09:53:06.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    desk: "12",
    place: 1,
    countClients: 1,
    updatedBy: {
      firstname:
        "Адмінам клікаць каб было даўжэй і каб кассы зламаліся вось такім",
      lastname:
        "Адмінаў прозвішча тут каб было даўжэй і словы каб з прабеламі во",
      id: 1,
    },
    billDishes: {
      "0f3a185f-a34d-4a3c-9b82-1cac16c88851": {
        id: "0f3a185f-a34d-4a3c-9b82-1cac16c88851",
        count: 1,
        price: 1,
        totalSum: 1,
        dish: {
          id: 16279,
          name: "Съешь ещё этих мягких французских булок да выпей же чаю",
          measure: "pcs",
          descr: "product",
        },
      },
      "528e8446-cbed-46ba-bf70-978de1ee5065": {
        id: "528e8446-cbed-46ba-bf70-978de1ee5065",
        count: 1,
        price: 1,
        totalSum: 1,
        dish: {
          id: 16277,
          name: "ყველა ადამიანი იბადება თავისუფალი და თანასწორი თავისი ღირსებითა და უფლებებით.",
          measure: "pcs",
          descr: "product",
        },
      },
      "553b865e-d610-4122-8384-f05595b8c786": {
        id: "553b865e-d610-4122-8384-f05595b8c786",
        count: 1,
        price: 1,
        totalSum: 1,
        dish: {
          id: 16275,
          name: "Quick brown fox jumps over the lazy dog",
          measure: "pcs",
          descr: "product",
        },
      },
      "5ca96c7b-290c-4038-828b-63fcdcc636e9": {
        id: "5ca96c7b-290c-4038-828b-63fcdcc636e9",
        count: 1,
        price: 1,
        totalSum: 1,
        dish: {
          id: 16278,
          name: "דג סקרן שט בים מאוכזב ולפתע מצא חברה",
          measure: "pcs",
          descr: "product",
        },
      },
      "eca22d24-01a1-4df6-a5c8-c0e1553bf63b": {
        id: "eca22d24-01a1-4df6-a5c8-c0e1553bf63b",
        count: 1,
        price: 1,
        totalSum: 1,
        dish: {
          id: 16276,
          name: "Įlinkusi fechtuotojo špaga blykčiodama gręžė apvalų arbūzą",
          measure: "pcs",
          descr: "product",
        },
      },
    },
    payments: [],
    client: null,
  },
  {
    id: "c5e2d790-6c06-test-0501-698848763945",
    terminalNumber: 2,
    type: "sale",
    income: 1,
    subType: "",
    serviceChargeSum: null,
    total: 21,
    totalSum: 6,
    discountSum: 0,
    bonusSum: null,
    status: "closed",
    description:
      "თანასწორი თავისი ღირსებითა და უფლებებით.       דג סקרן שט בים מאוכזב ולפתע מצא חברה       HAX0RS /n IN DA HOUSE \\n        Гэта каментар!       коментарий к чеку       Гость ушел",
    createdAt: {
      date: "2023-11-01 17:26:17.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    updatedAt: {
      date: "2023-11-01 17:27:44.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    desk: "01",
    place: 1,
    countClients: 1,
    updatedBy: {
      firstname:
        "Адмінам клікаць каб было даўжэй і каб кассы зламаліся вось такім",
      lastname:
        "Адмінаў прозвішча тут каб было даўжэй і словы каб з прабеламі во",
      id: 1,
    },
    billDishes: {
      "2f26394b-47c3-497d-a1fb-b14b3fbeaad3": {
        id: "2f26394b-47c3-497d-a1fb-b14b3fbeaad3",
        count: 1,
        price: 3,
        totalSum: 3,
        dish: {
          id: 601,
          name: "Черная смородина",
          measure: "pcs",
          descr: "product",
        },
      },
      "37172612-28c5-4f42-be64-f0f649df3f47": {
        id: "37172612-28c5-4f42-be64-f0f649df3f47",
        count: 6,
        price: 3,
        totalSum: 18,
        dish: {
          id: 600,
          name: "Сливочная",
          measure: "pcs",
          descr: "product",
        },
      },
    },
    payments: [],
    client: null,
  },
  {
    id: "cd289a63-23ce-test-0501-698848801249",
    terminalNumber: 3,
    type: "prepayment",
    income: 1,
    subType: "",
    serviceChargeSum: null,
    total: 15,
    totalSum: 15,
    discountSum: null,
    bonusSum: null,
    status: "closed",
    description: null,
    createdAt: {
      date: "2023-11-01 17:26:41.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    updatedAt: {
      date: "2023-11-01 17:26:43.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    desk: "",
    place: 99,
    countClients: 1,
    updatedBy: {
      firstname:
        "Адмінам клікаць каб было даўжэй і каб кассы зламаліся вось такім",
      lastname:
        "Адмінаў прозвішча тут каб было даўжэй і словы каб з прабеламі во",
      id: 1,
    },
    billDishes: {
      "e37e0149-071a-4e8b-87b5-4a684b27208c": {
        id: "e37e0149-071a-4e8b-87b5-4a684b27208c",
        count: 1,
        price: 15,
        totalSum: 15,
        dish: {
          id: 315,
          name: "Нормальный Фиксированный сертификат",
          measure: "pcs",
          descr: "pre_payment",
        },
      },
    },
    payments: [],
    client: null,
  },
  {
    id: "ceb8a5d9-3a9a-test-0501-698848618900",
    terminalNumber: 1,
    type: "sale",
    income: 1,
    subType: "",
    serviceChargeSum: null,
    total: 20.3,
    totalSum: 20.3,
    discountSum: 0,
    bonusSum: null,
    status: "closed",
    description: null,
    createdAt: {
      date: "2023-11-01 17:23:50.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    updatedAt: {
      date: "2023-11-01 17:25:55.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    desk: "მხედრული",
    place: 1,
    countClients: 1,
    updatedBy: {
      firstname:
        "Адмінам клікаць каб было даўжэй і каб кассы зламаліся вось такім",
      lastname:
        "Адмінаў прозвішча тут каб было даўжэй і словы каб з прабеламі во",
      id: 1,
    },
    billDishes: {
      "565baa1e-dbb6-4e8c-ac6e-ee0029a37677": {
        id: "565baa1e-dbb6-4e8c-ac6e-ee0029a37677",
        count: 1,
        price: 12.3,
        totalSum: 12.3,
        dish: {
          id: 295,
          name: 'Піва "Старажытнае", 0.5л',
          measure: "pcs",
          descr: "product",
        },
      },
      "69c61e31-a282-422f-a144-65c44982d228": {
        id: "69c61e31-a282-422f-a144-65c44982d228",
        count: 1,
        price: 1,
        totalSum: 1,
        dish: {
          id: 16086,
          name: "Пивас вновьсозданный",
          measure: "pcs",
          descr: "product",
        },
      },
      "a21be42d-7863-48e3-bf1d-67a437f639ef": {
        id: "a21be42d-7863-48e3-bf1d-67a437f639ef",
        count: 1,
        price: 3,
        totalSum: 3,
        dish: {
          id: 590,
          name: "Ирис",
          measure: "pcs",
          descr: "product",
        },
      },
      "b2831f0e-8af0-4f8f-8133-0021b59d77b9": {
        id: "b2831f0e-8af0-4f8f-8133-0021b59d77b9",
        count: 1,
        price: 1,
        totalSum: 1,
        dish: {
          id: 16087,
          name: "Пивас вновьсозданный (копия)",
          measure: "pcs",
          descr: "product",
        },
      },
      "e9a75530-0af3-417d-8d89-fbe7c0cca598": {
        id: "e9a75530-0af3-417d-8d89-fbe7c0cca598",
        count: 1,
        price: 3,
        totalSum: 3,
        dish: {
          id: 600,
          name: "Сливочная",
          measure: "pcs",
          descr: "product",
        },
      },
    },
    payments: [],
    client: null,
  },
  {
    id: "9c0e9fbd-f6a6-test-0901-697994999335",
    terminalNumber: 3,
    type: "sale",
    income: 1,
    subType: "",
    serviceChargeSum: null,
    total: 1.75,
    totalSum: 1.75,
    discountSum: 0,
    bonusSum: null,
    status: "active",
    description: null,
    createdAt: {
      date: "2023-10-22 20:16:44.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    updatedAt: {
      date: "2023-10-22 20:16:47.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    desk: "1",
    place: 2,
    countClients: 1,
    updatedBy: {
      firstname: "New",
      lastname: "One",
      id: 44,
    },
    billDishes: {
      "304deed9-f358-4a73-88b0-3769d8504aa4": {
        id: "304deed9-f358-4a73-88b0-3769d8504aa4",
        count: 1,
        price: 0.75,
        totalSum: 0.75,
        dish: {
          id: 250,
          name: 'Вафли "Артек"',
          measure: "pcs",
          descr: "product",
        },
      },
      "f653d914-845b-4ae6-be09-68fc7a4c0abf": {
        id: "f653d914-845b-4ae6-be09-68fc7a4c0abf",
        count: 1,
        price: 1,
        totalSum: 1,
        dish: {
          id: 16127,
          name: "0,500l Კოკა კოლა Coca-Cola",
          measure: "pcs",
          descr: "product",
        },
      },
    },
    payments: [],
    client: null,
  },
  {
    id: "3f552224-ef68-test-0901-697994994468",
    terminalNumber: 2,
    type: "sale",
    income: 1,
    subType: "",
    serviceChargeSum: null,
    total: 1,
    totalSum: 1,
    discountSum: 0,
    bonusSum: null,
    status: "active",
    description: null,
    createdAt: {
      date: "2023-10-22 20:16:36.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    updatedAt: {
      date: "2023-10-22 20:16:36.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    desk: "1",
    place: 1,
    countClients: 1,
    updatedBy: {
      firstname: "New",
      lastname: "One",
      id: 44,
    },
    billDishes: {
      "52271ba0-bf2e-486d-b962-fcf611f07c8d": {
        id: "52271ba0-bf2e-486d-b962-fcf611f07c8d",
        count: 1,
        price: 1,
        totalSum: 1,
        dish: {
          id: 16127,
          name: "0,500l Კოკა კოლა Coca-Cola",
          measure: "pcs",
          descr: "product",
        },
      },
    },
    payments: [],
    client: null,
  },
  {
    id: "8558af89-778d-test-0501-697201998105",
    terminalNumber: 3,
    type: "sale",
    income: 1,
    subType: "",
    serviceChargeSum: null,
    total: 38.9,
    totalSum: 38.9,
    discountSum: 0,
    bonusSum: null,
    status: "closed",
    description: null,
    createdAt: {
      date: "2023-10-13 16:00:09.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    updatedAt: {
      date: "2023-10-16 19:40:51.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    desk: "4",
    place: 1,
    countClients: 1,
    updatedBy: {
      firstname:
        "Адмінам клікаць каб было даўжэй і каб кассы зламаліся вось такім",
      lastname:
        "Адмінаў прозвішча тут каб было даўжэй і словы каб з прабеламі во",
      id: 1,
    },
    billDishes: {
      "46ca4e86-f07b-4a1c-b582-d4d3e6c945af": {
        id: "46ca4e86-f07b-4a1c-b582-d4d3e6c945af",
        count: 1,
        price: 2,
        totalSum: 2,
        dish: {
          id: 16088,
          name: "Попивасенько",
          measure: "pcs",
          descr: "product",
        },
      },
      "882ef571-1cbe-4a07-a7c1-bce70d352d8e": {
        id: "882ef571-1cbe-4a07-a7c1-bce70d352d8e",
        count: 3,
        price: 12.3,
        totalSum: 36.9,
        dish: {
          id: 295,
          name: 'Піва "Старажытнае", 0.5л',
          measure: "pcs",
          descr: "product",
        },
      },
    },
    payments: [],
    client: null,
  },
  {
    id: "87be0807-7400-test-0501-697461039118",
    terminalNumber: 3,
    type: "sale",
    income: 1,
    subType: "",
    serviceChargeSum: null,
    total: 1.1,
    totalSum: 1.1,
    discountSum: 0,
    bonusSum: null,
    status: "closed",
    description: null,
    createdAt: {
      date: "2023-10-16 15:58:21.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    updatedAt: {
      date: "2023-10-16 19:40:03.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    desk: "11",
    place: 1,
    countClients: 1,
    updatedBy: {
      firstname:
        "Адмінам клікаць каб было даўжэй і каб кассы зламаліся вось такім",
      lastname:
        "Адмінаў прозвішча тут каб было даўжэй і словы каб з прабеламі во",
      id: 1,
    },
    billDishes: {
      "53847e4d-83d2-42a7-a937-676bf6dc3f28": {
        id: "53847e4d-83d2-42a7-a937-676bf6dc3f28",
        count: 1,
        price: 0,
        totalSum: 0,
        dish: {
          id: 19669,
          name: "тмин целый100",
          measure: "pcs",
          descr: "product",
        },
      },
      "89aca45e-ab80-459a-9f95-8aa60f6391ff": {
        id: "89aca45e-ab80-459a-9f95-8aa60f6391ff",
        count: 1,
        price: 0.1,
        totalSum: 0.1,
        dish: {
          id: 27336,
          name: "いろはにほへと ちりぬるを  わかよた—れぞ  つねならむ  うゐのおくやま  けふこえて  あさきゆめみし ゑひもせす",
          measure: "pcs",
          descr: "product",
        },
      },
      "cacc7ea4-6ee1-4a0b-9f26-0de6cacab176": {
        id: "cacc7ea4-6ee1-4a0b-9f26-0de6cacab176",
        count: 1,
        price: 0,
        totalSum: 0,
        dish: {
          id: 19674,
          name: "хмели-сунели100",
          measure: "pcs",
          descr: "product",
        },
      },
      "d03a9e14-f091-4fe5-863f-180e5419786a": {
        id: "d03a9e14-f091-4fe5-863f-180e5419786a",
        count: 1,
        price: 0,
        totalSum: 0,
        dish: {
          id: 19680,
          name: "укроп молотый100",
          measure: "pcs",
          descr: "product",
        },
      },
      "e8578841-7cc3-41ae-bbc3-81b1c0c25531": {
        id: "e8578841-7cc3-41ae-bbc3-81b1c0c25531",
        count: 1,
        price: 1,
        totalSum: 1,
        dish: {
          id: 245,
          name: "ქართული სამზარეულო",
          measure: "pcs",
          descr: "product",
        },
      },
    },
    payments: [],
    client: null,
  },
  {
    id: "b1712d54-1081-408b-9900-a343326dc7ce",
    terminalNumber: 8008,
    type: "sale",
    income: 1,
    subType: "delivery",
    serviceChargeSum: null,
    total: 5.69,
    totalSum: 5,
    discountSum: -0.69,
    bonusSum: null,
    status: "closed",
    description:
      " Доўгі камент, гэта не адрас, гэта камент. Зараз гэты камент павінен быць бачны і друкавацца на любыл прынтары які б мы не падключылі як сотні тысячы планет я ўжо перапоўніўся і іду глядзець на захад сонца",
    createdAt: {
      date: "2023-10-13 08:25:00.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    updatedAt: {
      date: "2023-10-16 16:08:56.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    desk: "0",
    place: -1,
    countClients: 1,
    updatedBy: {
      firstname:
        "Адмінам клікаць каб было даўжэй і каб кассы зламаліся вось такім",
      lastname:
        "Адмінаў прозвішча тут каб было даўжэй і словы каб з прабеламі во",
      id: 1,
    },
    billDishes: {
      "6fbdd33d-07eb-4b24-9ed6-07d7818ac639": {
        id: "6fbdd33d-07eb-4b24-9ed6-07d7818ac639",
        count: 1,
        price: 5.69,
        totalSum: 5,
        dish: {
          id: 27525,
          name: "Тэст Мадыфікатараў (свабодна платна і з сабекоштам)",
          measure: "pcs",
          descr: "tech_map",
        },
      },
    },
    payments: [],
    client: {
      id: 27505,
      firstName: "Новы_дзень_новы_кліент-27-3",
      lastName: "Ну_вельми_новы_кліент-27-3",
    },
  },
  {
    id: "4802bbe9-6346-4c53-8dc0-01d826bf29d4",
    terminalNumber: 8009,
    type: "sale",
    income: 1,
    subType: "delivery",
    serviceChargeSum: null,
    total: 5.69,
    totalSum: 5,
    discountSum: -0.69,
    bonusSum: null,
    status: "closed",
    description:
      " Доўгі камент, гэта не адрас, гэта камент. Зараз гэты камент павінен быць бачны і друкавацца на любыл прынтары які б мы не падключылі як сотні тысячы планет я ўжо перапоўніўся і іду глядзець на захад сонца",
    createdAt: {
      date: "2023-10-13 08:25:00.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    updatedAt: {
      date: "2023-10-16 16:08:49.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    desk: "0",
    place: -1,
    countClients: 1,
    updatedBy: {
      firstname:
        "Адмінам клікаць каб было даўжэй і каб кассы зламаліся вось такім",
      lastname:
        "Адмінаў прозвішча тут каб было даўжэй і словы каб з прабеламі во",
      id: 1,
    },
    billDishes: {
      "71538146-1ec7-4733-be46-14a0ec4200bb": {
        id: "71538146-1ec7-4733-be46-14a0ec4200bb",
        count: 1,
        price: 5.69,
        totalSum: 5,
        dish: {
          id: 27525,
          name: "Тэст Мадыфікатараў (свабодна платна і з сабекоштам)",
          measure: "pcs",
          descr: "tech_map",
        },
      },
    },
    payments: [],
    client: {
      id: 27506,
      firstName: "Новы_дзень_новы_кліент-27-3",
      lastName: "Ну_вельми_новы_кліент-27-3",
    },
  },
  {
    id: "50701126-2695-49e7-b490-f6c39fc4c25c",
    terminalNumber: 8010,
    type: "sale",
    income: 1,
    subType: "delivery",
    serviceChargeSum: null,
    total: 5.69,
    totalSum: 5,
    discountSum: -0.69,
    bonusSum: null,
    status: "closed",
    description:
      " Доўгі камент, гэта не адрас, гэта камент. Зараз гэты камент павінен быць бачны і друкавацца на любыл прынтары які б мы не падключылі як сотні тысячы планет я ўжо перапоўніўся і іду глядзець на захад сонца",
    createdAt: {
      date: "2023-10-13 08:25:00.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    updatedAt: {
      date: "2023-10-16 16:08:40.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    desk: "0",
    place: -1,
    countClients: 1,
    updatedBy: {
      firstname:
        "Адмінам клікаць каб было даўжэй і каб кассы зламаліся вось такім",
      lastname:
        "Адмінаў прозвішча тут каб было даўжэй і словы каб з прабеламі во",
      id: 1,
    },
    billDishes: {
      "c4dcfd38-8f92-41ae-8f36-85a955a0c0a7": {
        id: "c4dcfd38-8f92-41ae-8f36-85a955a0c0a7",
        count: 1,
        price: 5.69,
        totalSum: 5,
        dish: {
          id: 27525,
          name: "Тэст Мадыфікатараў (свабодна платна і з сабекоштам)",
          measure: "pcs",
          descr: "tech_map",
        },
      },
    },
    payments: [],
    client: {
      id: 27507,
      firstName: "Новы_дзень_новы_кліент-27-3",
      lastName: "Ну_вельми_новы_кліент-27-3",
    },
  },
  {
    id: "bf216784-7a5b-4943-8704-d052d8c3081a",
    terminalNumber: 8006,
    type: "sale",
    income: 1,
    subType: "delivery",
    serviceChargeSum: null,
    total: 5.69,
    totalSum: 5,
    discountSum: -0.69,
    bonusSum: null,
    status: "closed",
    description:
      " Доўгі камент, гэта не адрас, гэта камент. Зараз гэты камент павінен быць бачны і друкавацца на любыл прынтары які б мы не падключылі як сотні тысячы планет я ўжо перапоўніўся і іду глядзець на захад сонца",
    createdAt: {
      date: "2023-10-13 08:25:00.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    updatedAt: {
      date: "2023-10-16 16:04:42.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    desk: "0",
    place: -1,
    countClients: 1,
    updatedBy: {
      firstname:
        "Адмінам клікаць каб было даўжэй і каб кассы зламаліся вось такім",
      lastname:
        "Адмінаў прозвішча тут каб было даўжэй і словы каб з прабеламі во",
      id: 1,
    },
    billDishes: {
      "4ecd12c9-4e49-4be4-99d3-7af8fe3b3104": {
        id: "4ecd12c9-4e49-4be4-99d3-7af8fe3b3104",
        count: 1,
        price: 5.69,
        totalSum: 5,
        dish: {
          id: 27525,
          name: "Тэст Мадыфікатараў (свабодна платна і з сабекоштам)",
          measure: "pcs",
          descr: "tech_map",
        },
      },
    },
    payments: [],
    client: {
      id: 27503,
      firstName: "Новы_дзень_новы_кліент-27-3",
      lastName: "Ну_вельми_новы_кліент-27-3",
    },
  },
  {
    id: "f3675ed4-daca-4945-91ec-757777ea7e68",
    terminalNumber: 8007,
    type: "sale",
    income: 1,
    subType: "delivery",
    serviceChargeSum: null,
    total: 5.69,
    totalSum: 5,
    discountSum: -0.69,
    bonusSum: null,
    status: "closed",
    description:
      "  Доўгі камент, гэта не адрас, гэта камент. Зараз гэты камент павінен быць бачны і друкавацца на любыл прынтары які б мы не падключылі як сотні тысячы планет я ўжо перапоўніўся і іду глядзець на захад сонцаjQuery21106602475556074671_1697460910477jQuery21",
    createdAt: {
      date: "2023-10-13 08:25:00.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    updatedAt: {
      date: "2023-10-16 16:04:18.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    desk: "0",
    place: -1,
    countClients: 1,
    updatedBy: {
      firstname:
        "Адмінам клікаць каб было даўжэй і каб кассы зламаліся вось такім",
      lastname:
        "Адмінаў прозвішча тут каб было даўжэй і словы каб з прабеламі во",
      id: 1,
    },
    billDishes: {
      "4275c0af-b188-48a4-91eb-8078fde28811": {
        id: "4275c0af-b188-48a4-91eb-8078fde28811",
        count: 1,
        price: 5.69,
        totalSum: 5,
        dish: {
          id: 27525,
          name: "Тэст Мадыфікатараў (свабодна платна і з сабекоштам)",
          measure: "pcs",
          descr: "tech_map",
        },
      },
    },
    payments: [],
    client: {
      id: 27504,
      firstName: "Новы_дзень_новы_кліент-27-3",
      lastName: "Ну_вельми_новы_кліент-27-3",
    },
  },
  {
    id: "b05e7a49-8afb-test-0501-695819854139",
    terminalNumber: 24,
    type: "sale",
    income: 1,
    subType: "",
    serviceChargeSum: null,
    total: 447,
    totalSum: 6,
    discountSum: -441,
    bonusSum: null,
    status: "closed",
    description: null,
    createdAt: {
      date: "2023-09-27 16:04:18.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    updatedAt: {
      date: "2023-10-13 16:14:13.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    desk: "8",
    place: 1,
    countClients: 1,
    updatedBy: {
      firstname:
        "Адмінам клікаць каб было даўжэй і каб кассы зламаліся вось такім",
      lastname:
        "Адмінаў прозвішча тут каб было даўжэй і словы каб з прабеламі во",
      id: 1,
    },
    billDishes: {
      "0cfe128d-cc61-460b-8883-2f1d026580ae": {
        id: "0cfe128d-cc61-460b-8883-2f1d026580ae",
        count: 1,
        price: 70,
        totalSum: 0,
        dish: {
          id: 433,
          name: "Бомбар Печенье",
          measure: "pcs",
          descr: "product",
        },
      },
      "1413c3cb-a9da-47ac-90f8-90187c323e22": {
        id: "1413c3cb-a9da-47ac-90f8-90187c323e22",
        count: 3,
        price: 2,
        totalSum: 6,
        dish: {
          id: 16088,
          name: "Попивасенько",
          measure: "pcs",
          descr: "product",
        },
      },
      "1581ebc7-2f0f-4853-9210-9dffd1d48d3a": {
        id: "1581ebc7-2f0f-4853-9210-9dffd1d48d3a",
        count: 1,
        price: 100,
        totalSum: 0,
        dish: {
          id: 434,
          name: "Бомбар Печенье Протеиновое",
          measure: "pcs",
          descr: "product",
        },
      },
      "1f5baa93-8579-4bfe-bcba-0f49b3503bca": {
        id: "1f5baa93-8579-4bfe-bcba-0f49b3503bca",
        count: 1,
        price: 130,
        totalSum: 0,
        dish: {
          id: 437,
          name: "Чикабар Батончик Протеиновый",
          measure: "pcs",
          descr: "product",
        },
      },
      "dd9f5629-8e30-412c-90f7-4570571a4344": {
        id: "dd9f5629-8e30-412c-90f7-4570571a4344",
        count: 1,
        price: 50,
        totalSum: 0,
        dish: {
          id: 430,
          name: "Бомбар Батончик Злаковый",
          measure: "pcs",
          descr: "product",
        },
      },
      "f986a40a-cc00-4733-bd27-9728e4a8d4ce": {
        id: "f986a40a-cc00-4733-bd27-9728e4a8d4ce",
        count: 1,
        price: 1,
        totalSum: 0,
        dish: {
          id: 16087,
          name: "Пивас вновьсозданный (копия)",
          measure: "pcs",
          descr: "product",
        },
      },
      "ff3d446d-c41b-4304-ac93-5d7a09e36183": {
        id: "ff3d446d-c41b-4304-ac93-5d7a09e36183",
        count: 1,
        price: 90,
        totalSum: 0,
        dish: {
          id: 436,
          name: "Печенье Злаковое",
          measure: "pcs",
          descr: "product",
        },
      },
    },
    payments: [],
    client: {
      id: 32,
      firstName: "Анна",
      lastName: "Памянялася",
    },
  },
  {
    id: "d2db3f6e-837a-test-0501-697202632231",
    terminalNumber: 3,
    type: "sale",
    income: 1,
    subType: "",
    serviceChargeSum: null,
    total: 12.3,
    totalSum: 12.3,
    discountSum: 0,
    bonusSum: null,
    status: "closed",
    description: null,
    createdAt: {
      date: "2023-10-13 16:11:17.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    updatedAt: {
      date: "2023-10-13 16:11:27.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    desk: "11",
    place: 1,
    countClients: 1,
    updatedBy: {
      firstname:
        "Адмінам клікаць каб было даўжэй і каб кассы зламаліся вось такім",
      lastname:
        "Адмінаў прозвішча тут каб было даўжэй і словы каб з прабеламі во",
      id: 1,
    },
    billDishes: {
      "e0b6b5fb-023d-474c-854e-7efab055d963": {
        id: "e0b6b5fb-023d-474c-854e-7efab055d963",
        count: 1,
        price: 12.3,
        totalSum: 12.3,
        dish: {
          id: 295,
          name: 'Піва "Старажытнае", 0.5л',
          measure: "pcs",
          descr: "product",
        },
      },
    },
    payments: [],
    client: null,
  },
  {
    id: "917ddde0-fdb6-test-0501-695816448471",
    terminalNumber: 19,
    type: "sale",
    income: 1,
    subType: "",
    serviceChargeSum: null,
    total: 16.3,
    totalSum: 10.3,
    discountSum: -6,
    bonusSum: null,
    status: "closed",
    description: null,
    createdAt: {
      date: "2023-09-27 15:07:42.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    updatedAt: {
      date: "2023-10-13 16:10:08.000000",
      timezone_type: 3,
      timezone: "Europe/Minsk",
    },
    desk: "11",
    place: 1,
    countClients: 1,
    updatedBy: {
      firstname:
        "Адмінам клікаць каб было даўжэй і каб кассы зламаліся вось такім",
      lastname:
        "Адмінаў прозвішча тут каб было даўжэй і словы каб з прабеламі во",
      id: 1,
    },
    billDishes: {
      "696f2b59-b5f3-4d78-8c2e-4ab0628047fb": {
        id: "696f2b59-b5f3-4d78-8c2e-4ab0628047fb",
        count: 1,
        price: 1,
        totalSum: 1,
        dish: {
          id: 16086,
          name: "Пивас вновьсозданный",
          measure: "pcs",
          descr: "product",
        },
      },
      "74b452fd-2b3d-4c30-9961-17ac85bb2cce": {
        id: "74b452fd-2b3d-4c30-9961-17ac85bb2cce",
        count: 1,
        price: 2,
        totalSum: 2,
        dish: {
          id: 16088,
          name: "Попивасенько",
          measure: "pcs",
          descr: "product",
        },
      },
    },
    payments: [],
    client: null,
  },
];
