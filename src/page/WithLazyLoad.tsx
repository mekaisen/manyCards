import { useCallback, useDeferredValue, useEffect, useMemo, useRef, useState } from 'react';

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

const INITIAL_CHUNK_SIZE = 20;
const CHUNK_SIZE = 10;

interface WithLazyLoadProps {
  isDarkTheme: boolean;
  usersData: CardProps[];
}

const WithLazyLoad = ({ isDarkTheme, usersData }: WithLazyLoadProps) => {
  const [order, setOrder] = useState<Order>('alph');
  const [visibleCount, setVisibleCount] = useState(INITIAL_CHUNK_SIZE);
  const listRef = useRef<HTMLDivElement>(null);

  const orderChangeAction = useCallback((newOrder: Order) => {
    setOrder(newOrder);
    setVisibleCount(INITIAL_CHUNK_SIZE);
  }, []);

  const sortedUsers = useMemo(
    () => sortUser(usersData, order),
    [usersData, order]
  );

 

  const visibleUsers = useMemo(() => {
    return sortedUsers.slice(0, visibleCount);
  }, [sortedUsers, visibleCount]);

  const loadMoreItems = useCallback(() => {
    if (visibleCount >= sortedUsers.length) return;

    setVisibleCount((prev) => Math.min(prev + CHUNK_SIZE, sortedUsers.length));
  }, [sortedUsers.length, visibleCount]);



  useEffect(() => {
    console.log('useefecyt')
    const observer = new IntersectionObserver(
      (entries)=>{
        if(entries[0].isIntersecting){
          loadMoreItems()
        }
      },
      {rootMargin: '350px'}
    )
    const lastItems = document.querySelectorAll('.card-item:nth-last-child(-n+5)');
    lastItems.forEach((item)=> observer.observe(item))
    return(()=>{
      lastItems.forEach(item=> observer.unobserve(item))
      observer.disconnect()
    })
  }, [loadMoreItems, visibleUsers.length, order]);

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

      <div ref={listRef} className='transition-opacity duration-300 ease-in-out'>
        {
          visibleUsers.map((user) => (
            <div key={user.id} className='card-item'>
              <Card
                id={user.id}
                name={user.name}
                info={user.info}
                secondName={user.secondName}
              />
            </div>
          ))
        }

        {visibleCount < sortedUsers.length && (
          <div className='text-center py-4'>
            <div className='inline-block animate-spin mr-2 h-5 w-5 border-t-2 border-blue-500 rounded-full'></div>
            Загрузка карточек...
          </div>
        )}

        {visibleCount >= sortedUsers.length && (
          <div className='text-center py-4 text-gray-500'>
            Все карточки загружены
          </div>
        )}
      </div>
    </>
  );
};

export default WithLazyLoad; 