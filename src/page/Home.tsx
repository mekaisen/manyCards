import { useDeferredValue, useMemo, useState, useCallback } from 'react';

import type { CardProps } from '../components/Card/Card';

import Card from '../components/Card/Card';

type Order = 'age' | 'alph' | 'noAlph';

const sortUser = (users: CardProps[], order: Order) => {
  return (
    [...users].sort((user, nextUser) => {
      if (order === 'alph') {
        const surnameCompare = user.secondName.localeCompare(nextUser.secondName, 'ru');
        if (surnameCompare === 0) {
          return user.name.localeCompare(nextUser.name, 'ru');
        }
        return surnameCompare;
      }
      else if (order === 'noAlph') {
        const surnameCompare = nextUser.secondName.localeCompare(user.secondName, 'ru');
        if (surnameCompare === 0) {
          return nextUser.name.localeCompare(user.name, 'ru');
        }
        return surnameCompare;
      }
      else if (order === 'age') {
        return user.info.age - nextUser.info.age;
      }
      return 0;
    })
  );
};

interface HomeProps {
  isDarkTheme: boolean;
  usersData: CardProps[];
};

const Home = ({ isDarkTheme, usersData }: HomeProps) => {
  const [order, setOrder] = useState<Order>('alph');

  const orderChangeAction = (newOrder: Order) => {
    setOrder(newOrder);
  };

  const sortedUsers = useMemo(
    () => sortUser(usersData, order),
    [usersData, order]
  );

  const deferredSortedUsers = useDeferredValue(sortedUsers);

  const renderCard = useCallback((user: CardProps) => (
    <div key={user.id} className='card-item'>
      <Card
        id={user.id}
        name={user.name}
        info={user.info}
        secondName={user.secondName}
      />
    </div>
  ), []);

  return (
    <>
      <div className='flex gap-4 mb-6 justify-center items-center flex-wrap'>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${order === 'alph' ? 'bg-blue-500 text-white' : isDarkTheme ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
          type='button'
          onClick={() => orderChangeAction('alph')}
        >
          По алфавиту
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${order === 'noAlph' ? 'bg-blue-500 text-white' : isDarkTheme ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
          type='button'
          onClick={() => orderChangeAction('noAlph')}
        >
          В обратном порядке
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${order === 'age' ? 'bg-blue-500 text-white' : isDarkTheme ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
          type='button'
          onClick={() => orderChangeAction('age')}
        >
          По возрасту
        </button>

      </div>
      <div className='transition-opacity duration-300 ease-in-out'>
        {
          deferredSortedUsers.map(renderCard)
        }
      </div>
    </>
  );
};

export default Home;
