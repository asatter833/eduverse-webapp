'use client';

import { Row } from 'antd';
import { LuShieldCheck, LuShieldOff } from 'react-icons/lu';
import StatsCard from './stats.card';
import { AiFillDelete } from 'react-icons/ai';

export default function StatsComponent() {
  return (
    <Row
      gutter={[16, 16]}
      justify={'center'}
      align={'stretch'}
      className='relative h-fit pb-5'
    >
      <StatsCard title='Dashboard Stats' value={100} />
      <StatsCard
        title='Dashboard Stats'
        value={60}
        prefix={<LuShieldCheck className='flex-inline text-[20px]' />}
      />
      <StatsCard
        title='Dashboard Stats'
        value={40}
        prefix={<LuShieldOff className='flex-inline text-[20px]' />}
      />
      <StatsCard
        title='In-Trash Dashboard Stats'
        value={10}
        prefix={<AiFillDelete className='flex-inline text-[20px]' />}
        valueStyle={{ color: 'red' }}
        className='border-red-300 bg-red-50'
      />
    </Row>
  );
}
