import React from 'react';
import { getByTitle, render, screen } from '@testing-library/react'
import Index from '../pages/index'
import Detail from '../pages/detail'
import '@testing-library/jest-dom'
 
describe('App', () => {
  it('강의목록이 렌더링 되어야 한다', () => {
    const {getByTitle} = render(<Index />);

    const lectureList = getByTitle('lectureList', {
      name: ''
    })

    expect(lectureList).toBeInTheDocument();
  })

})