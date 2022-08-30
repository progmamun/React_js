import React from 'react';
import { useQuery } from 'react-query';
import Loader from '../../Shares/Loading';
import FlashItem from './FlashItem';
import { AiFillThunderbolt } from 'react-icons/ai';
import CountdownTimer from '../../../components/CountdownTimer';

const FlashSale = () => {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  const {
    data: flashProducts,
    isLoading,
    error,
  } = useQuery('flashProducts', () =>
    fetch('http://localhost:5000/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json())
  );

  if (!flashProducts) return <p>No data</p>;

  return (
    <div className='container-box mb-10'>
      <div className='flex mb-3'>
        <h3 className='text-2xl font-black'>
          Flah
          <AiFillThunderbolt className='inline-block text-[#E5642A]' />
          Sale
        </h3>
        <>
          <CountdownTimer targetDate={dateTimeAfterThreeDays} />
        </>
      </div>
      {isLoading && <Loader></Loader>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <div className='grid grid-cols-2 md:grid-cols-5 gap-x-3'>
        {flashProducts.slice(25, 30).map((flashItem) => (
          <FlashItem key={flashItem._id} flashItem={flashItem}></FlashItem>
        ))}
      </div>
    </div>
  );
};

export default FlashSale;
