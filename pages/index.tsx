import Banner from '@/components/Banner';
import Menu from '@/components/Menu';
import LectureGroup from '@/components/lecture/LectureGroup';
import type { NextPage } from 'next';
import React from 'react';

const Home:NextPage = () => {
  return (
    <div>
      <Menu />
      <Banner />
      <LectureGroup />
    </div>
  )
}

export default Home
