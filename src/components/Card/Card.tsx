import { memo } from 'react';

export interface CardProps {
  id: number;
  name: string;
  secondName: string;
  info: {
    age: number;
    city: string;
    country: string;
  };
}

const Card = memo(({ id, name, secondName, info }: CardProps) => {
  return (
    <div className='flex justify-between max-w-[420px] mx-auto items-center mb-4'>
      <div className='w-24 h-24 min-w-24 min-h-24 bg-gray-600 dark:bg-gray-800 rounded-full flex items-center justify-center text-white text-xl font-bold'>
        {id}
      </div>
      <div className='p-2 min-w-[262px]'>
        <div className=''>
          <div className='font-medium'>{name} {secondName}</div>
          <div className='text-gray-600 dark:text-gray-300'>{info.age} лет, {info.city} {info.country}</div>
        </div>
      </div>
    </div>
  );
});

Card.displayName = 'Card';

export default Card;
