export const state = {
  statusCompanies: false,
  statusWorkers: false,
  companies: [
    {
      id: 0,
      company: 'ООО "Строй-ритейл"',
      address: 'г. Москва, проспект Героев д.25 офис 23',
      checked: false,
      workers: [
        { id: 912, surname: 'Абрамов', name: 'Михаил', position: 'Прораб', checked: false},
        { id: 9121, surname: 'Нестеров', name: 'Антон', position: 'Менеджер', checked: false},
        { id: 2912, surname: 'Фролов', name: 'Дмитрий', position: 'Руководитель отдела', checked: false},
      ],
    },
    {
      id: 1,
      company: 'ООО "Инвест-проекты"',
      address: 'г. Тверь, ул. Ленина д.12, офис 3',
      checked: false,
      workers: [
        { id: 570, surname: 'Полижайкин', name: 'Григорий', position: 'Руководитель', checked: false},
        { id: 157, surname: 'Сафонова', name: 'Анастасия', position: 'Менеджер', checked: false},
        { id: 572, surname: 'Бармантов', name: 'Александр', position: 'Бригадир', checked: false},
        { id: 357, surname: 'Вавилов', name: 'Сергей', position: 'Крановщик', checked: false},
        { id: 9123, surname: 'Рожков', name: 'Андрей', position: 'Строитель', checked: false},
      ]
    },
    {
      id: 2,
      company: 'ООО "Бетон-строй"',
      address: 'г. Люберцы, ул. Транспортная д.6 офис 1',
      checked: false,
      workers: [
        { id: 340, surname: 'Смолин', name: 'Алексей', position: 'Инженер', checked: false},
        { id: 134, surname: 'Платонов', name: 'Павел', position: 'Директор', checked: false},
      ]
    },
    {
      id: 3,
      company: 'ООО "Комплект-запчасти"',
      address: 'г. Екатеринбург, пр. Ленина, д. 75 офис 14',
      checked: false,
      workers: [
        { id: 970, surname: 'Зарубин', name: 'Андрей', position: 'Директор', checked: false},
        { id: 971, surname: 'Петрова', name: 'Ольга', position: 'Руководитель отдела', checked: false},
        { id: 972, surname: 'Тихонов', name: 'Дмитрий', position: 'Менеджер', checked: false},
        { id: 973, surname: 'Горохов', name: 'Артем', position: 'Менеджер', checked: false},
        { id: 342, surname: 'Фирсова', name: 'Екатерина', position: 'Бухгалтер', checked: false},
        { id: 343, surname: 'Пирогов', name: 'Игорь', position: 'Водитель', checked: false},
      ]
    },
  ]
}