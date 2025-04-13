import type { CardProps } from './Card';

// Массивы для генерации случайных данных
const names = [
  'Иван',
  'Анна',
  'Алексей',
  'Елена',
  'Дмитрий',
  'Ольга',
  'Сергей',
  'Наталья',
  'Михаил',
  'Татьяна',
  'Андрей',
  'Мария',
  'Владимир',
  'Екатерина',
  'Игорь',
  'Юлия',
  'Николай',
  'Светлана',
  'Павел',
  'Анастасия',
  'Константин',
  'Людмила',
  'Роман',
  'Вера',
  'Антон',
  'Инна',
  'Евгений',
  'Галина',
  'Артем',
  'Ирина',
  'Денис',
  'Полина',
  'Виктор',
  'Ксения',
  'Борис',
  'Алина',
  'Станислав',
  'Любовь',
  'Максим',
  'Дарья'
];

const secondNames = [
  'Иванов',
  'Смирнова',
  'Петров',
  'Козлова',
  'Соколов',
  'Васильева',
  'Морозов',
  'Кузнецова',
  'Попов',
  'Лебедева',
  'Волков',
  'Новикова',
  'Соловьев',
  'Морозова',
  'Орлов',
  'Семенова',
  'Макаров',
  'Зайцева',
  'Осипов',
  'Павлова',
  'Виноградов',
  'Белова',
  'Фролов',
  'Голубева',
  'Давыдов',
  'Журавлева',
  'Карпов',
  'Никитина',
  'Федоров',
  'Титова',
  'Жуков',
  'Медведева',
  'Беляев',
  'Комарова',
  'Орехов',
  'Кудрявцева',
  'Киселев',
  'Дмитриева',
  'Ершов',
  'Фомина'
];

const cities = [
  'Москва',
  'Санкт-Петербург',
  'Новосибирск',
  'Екатеринбург',
  'Казань',
  'Нижний Новгород',
  'Самара',
  'Омск',
  'Челябинск',
  'Ростов-на-Дону',
  'Уфа',
  'Красноярск',
  'Воронеж',
  'Пермь',
  'Волгоград',
  'Краснодар',
  'Саратов',
  'Тюмень',
  'Тольятти',
  'Ижевск',
  'Барнаул',
  'Иркутск',
  'Хабаровск',
  'Ярославль',
  'Владивосток',
  'Томск',
  'Оренбург',
  'Кемерово',
  'Новокузнецк',
  'Рязань'
];

const countries = ['Россия', 'Беларусь', 'Казахстан'];

// Функция для генерации случайного пользователя
const generateRandomUser = (id: number): CardProps => {
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomSecondName = secondNames[Math.floor(Math.random() * secondNames.length)];
  const randomCity = cities[Math.floor(Math.random() * cities.length)];
  const randomCountry = countries[Math.floor(Math.random() * countries.length)];
  const randomAge = Math.floor(Math.random() * 40) + 18; // от 18 до 57 лет

  return {
    id,
    name: randomName,
    secondName: randomSecondName,
    info: {
      age: randomAge,
      city: randomCity,
      country: randomCountry
    }
  };
};

// Исходные 50 пользователей из ранее созданного массива
const initialUsers: CardProps[] = [
  {
    id: 1,
    name: 'Иван',
    secondName: 'Иванов',
    info: {
      age: 25,
      city: 'Москва',
      country: 'Россия'
    }
  },
  {
    id: 2,
    name: 'Анна',
    secondName: 'Смирнова',
    info: {
      age: 30,
      city: 'Санкт-Петербург',
      country: 'Россия'
    }
  },
  {
    id: 3,
    name: 'Алексей',
    secondName: 'Петров',
    info: {
      age: 27,
      city: 'Новосибирск',
      country: 'Россия'
    }
  },
  {
    id: 4,
    name: 'Елена',
    secondName: 'Козлова',
    info: {
      age: 22,
      city: 'Екатеринбург',
      country: 'Россия'
    }
  },
  {
    id: 5,
    name: 'Дмитрий',
    secondName: 'Соколов',
    info: {
      age: 35,
      city: 'Казань',
      country: 'Россия'
    }
  },
  {
    id: 6,
    name: 'Ольга',
    secondName: 'Васильева',
    info: {
      age: 29,
      city: 'Нижний Новгород',
      country: 'Россия'
    }
  },
  {
    id: 7,
    name: 'Сергей',
    secondName: 'Морозов',
    info: {
      age: 42,
      city: 'Самара',
      country: 'Россия'
    }
  },
  {
    id: 8,
    name: 'Наталья',
    secondName: 'Кузнецова',
    info: {
      age: 33,
      city: 'Омск',
      country: 'Россия'
    }
  },
  {
    id: 9,
    name: 'Михаил',
    secondName: 'Попов',
    info: {
      age: 38,
      city: 'Челябинск',
      country: 'Россия'
    }
  },
  {
    id: 10,
    name: 'Татьяна',
    secondName: 'Лебедева',
    info: {
      age: 26,
      city: 'Ростов-на-Дону',
      country: 'Россия'
    }
  },
  {
    id: 11,
    name: 'Андрей',
    secondName: 'Волков',
    info: {
      age: 31,
      city: 'Уфа',
      country: 'Россия'
    }
  },
  {
    id: 12,
    name: 'Мария',
    secondName: 'Новикова',
    info: {
      age: 24,
      city: 'Красноярск',
      country: 'Россия'
    }
  },
  {
    id: 13,
    name: 'Владимир',
    secondName: 'Соловьев',
    info: {
      age: 45,
      city: 'Воронеж',
      country: 'Россия'
    }
  },
  {
    id: 14,
    name: 'Екатерина',
    secondName: 'Морозова',
    info: {
      age: 28,
      city: 'Пермь',
      country: 'Россия'
    }
  },
  {
    id: 15,
    name: 'Игорь',
    secondName: 'Орлов',
    info: {
      age: 36,
      city: 'Волгоград',
      country: 'Россия'
    }
  },
  {
    id: 16,
    name: 'Юлия',
    secondName: 'Семенова',
    info: {
      age: 23,
      city: 'Краснодар',
      country: 'Россия'
    }
  },
  {
    id: 17,
    name: 'Николай',
    secondName: 'Макаров',
    info: {
      age: 41,
      city: 'Саратов',
      country: 'Россия'
    }
  },
  {
    id: 18,
    name: 'Светлана',
    secondName: 'Зайцева',
    info: {
      age: 32,
      city: 'Тюмень',
      country: 'Россия'
    }
  },
  {
    id: 19,
    name: 'Павел',
    secondName: 'Осипов',
    info: {
      age: 39,
      city: 'Тольятти',
      country: 'Россия'
    }
  },
  {
    id: 20,
    name: 'Анастасия',
    secondName: 'Павлова',
    info: {
      age: 25,
      city: 'Ижевск',
      country: 'Россия'
    }
  },
  {
    id: 21,
    name: 'Константин',
    secondName: 'Виноградов',
    info: {
      age: 34,
      city: 'Барнаул',
      country: 'Россия'
    }
  },
  {
    id: 22,
    name: 'Людмила',
    secondName: 'Белова',
    info: {
      age: 37,
      city: 'Иркутск',
      country: 'Россия'
    }
  },
  {
    id: 23,
    name: 'Роман',
    secondName: 'Фролов',
    info: {
      age: 29,
      city: 'Хабаровск',
      country: 'Россия'
    }
  },
  {
    id: 24,
    name: 'Вера',
    secondName: 'Голубева',
    info: {
      age: 27,
      city: 'Ярославль',
      country: 'Россия'
    }
  },
  {
    id: 25,
    name: 'Антон',
    secondName: 'Давыдов',
    info: {
      age: 33,
      city: 'Владивосток',
      country: 'Россия'
    }
  },
  {
    id: 26,
    name: 'Инна',
    secondName: 'Журавлева',
    info: {
      age: 31,
      city: 'Томск',
      country: 'Россия'
    }
  },
  {
    id: 27,
    name: 'Евгений',
    secondName: 'Карпов',
    info: {
      age: 44,
      city: 'Оренбург',
      country: 'Россия'
    }
  },
  {
    id: 28,
    name: 'Галина',
    secondName: 'Никитина',
    info: {
      age: 40,
      city: 'Кемерово',
      country: 'Россия'
    }
  },
  {
    id: 29,
    name: 'Артем',
    secondName: 'Федоров',
    info: {
      age: 26,
      city: 'Новокузнецк',
      country: 'Россия'
    }
  },
  {
    id: 30,
    name: 'Ирина',
    secondName: 'Титова',
    info: {
      age: 35,
      city: 'Рязань',
      country: 'Россия'
    }
  },
  {
    id: 31,
    name: 'Денис',
    secondName: 'Жуков',
    info: {
      age: 30,
      city: 'Пенза',
      country: 'Россия'
    }
  },
  {
    id: 32,
    name: 'Полина',
    secondName: 'Медведева',
    info: {
      age: 24,
      city: 'Астрахань',
      country: 'Россия'
    }
  },
  {
    id: 33,
    name: 'Виктор',
    secondName: 'Беляев',
    info: {
      age: 43,
      city: 'Набережные Челны',
      country: 'Россия'
    }
  },
  {
    id: 34,
    name: 'Ксения',
    secondName: 'Комарова',
    info: {
      age: 27,
      city: 'Калининград',
      country: 'Россия'
    }
  },
  {
    id: 35,
    name: 'Борис',
    secondName: 'Орехов',
    info: {
      age: 38,
      city: 'Липецк',
      country: 'Россия'
    }
  },
  {
    id: 36,
    name: 'Алина',
    secondName: 'Кудрявцева',
    info: {
      age: 29,
      city: 'Тула',
      country: 'Россия'
    }
  },
  {
    id: 37,
    name: 'Станислав',
    secondName: 'Киселев',
    info: {
      age: 34,
      city: 'Киров',
      country: 'Россия'
    }
  },
  {
    id: 38,
    name: 'Любовь',
    secondName: 'Дмитриева',
    info: {
      age: 41,
      city: 'Чебоксары',
      country: 'Россия'
    }
  },
  {
    id: 39,
    name: 'Максим',
    secondName: 'Ершов',
    info: {
      age: 32,
      city: 'Курск',
      country: 'Россия'
    }
  },
  {
    id: 40,
    name: 'Дарья',
    secondName: 'Фомина',
    info: {
      age: 25,
      city: 'Ставрополь',
      country: 'Россия'
    }
  },
  {
    id: 41,
    name: 'Григорий',
    secondName: 'Абрамов',
    info: {
      age: 37,
      city: 'Улан-Удэ',
      country: 'Россия'
    }
  },
  {
    id: 42,
    name: 'Валерия',
    secondName: 'Архипова',
    info: {
      age: 28,
      city: 'Сочи',
      country: 'Россия'
    }
  },
  {
    id: 43,
    name: 'Олег',
    secondName: 'Устинов',
    info: {
      age: 39,
      city: 'Тверь',
      country: 'Россия'
    }
  },
  {
    id: 44,
    name: 'Надежда',
    secondName: 'Калинина',
    info: {
      age: 33,
      city: 'Магнитогорск',
      country: 'Россия'
    }
  },
  {
    id: 45,
    name: 'Тимур',
    secondName: 'Мухин',
    info: {
      age: 31,
      city: 'Нижний Тагил',
      country: 'Россия'
    }
  },
  {
    id: 46,
    name: 'Лариса',
    secondName: 'Родионова',
    info: {
      age: 36,
      city: 'Мурманск',
      country: 'Россия'
    }
  },
  {
    id: 47,
    name: 'Эдуард',
    secondName: 'Трофимов',
    info: {
      age: 42,
      city: 'Петрозаводск',
      country: 'Россия'
    }
  },
  {
    id: 48,
    name: 'Карина',
    secondName: 'Богданова',
    info: {
      age: 26,
      city: 'Симферополь',
      country: 'Россия'
    }
  },
  {
    id: 49,
    name: 'Эдуард',
    secondName: 'Трофимов',
    info: {
      age: 42,
      city: 'Петрозаводск',
      country: 'Россия'
    }
  },
  {
    id: 50,
    name: 'Карина',
    secondName: 'Богданова',
    info: {
      age: 26,
      city: 'Симферополь',
      country: 'Россия'
    }
  }
];

// Генерируем дополнительных пользователей
const additionalUsers: CardProps[] = [];
for (let i = 51; i <= 2000; i++) {
  additionalUsers.push(generateRandomUser(i));
}

// Объединяем исходные и новые данные
export const usersData: CardProps[] = [...initialUsers, ...additionalUsers];
