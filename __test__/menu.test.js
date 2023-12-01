import React from 'react';
import { getByTitle, render, screen } from '@testing-library/react'
import Menu from '../components/Menu'
import '@testing-library/jest-dom'
 
describe('Menu는', () => {
  it('codingEduSite라는 텍스트를 가지고 있어야 한다', () => {
    const {getByText} = render(<Menu />);

    const menuText = getByText('codingEduSite')
    expect(menuText).toBeInTheDocument();
  })

})