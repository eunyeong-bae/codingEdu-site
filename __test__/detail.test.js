import React from 'react';
import { getByTitle, render, screen } from '@testing-library/react'
import Detail from '../pages/detail'
import '@testing-library/jest-dom'
 
describe('Detail', () => {
  it('디테일 페이지가 렌더링 되어야 한다', () => {
    const {getByRole} = render(<Detail />);

    const banner = getByRole('banner', {
      name: ''
    })

    expect(banner).toBeInTheDocument();
  })

})