import React from 'react';
import { getByTitle, render, screen } from '@testing-library/react'
import LectureItem from '../components/lecture/LectureItem'
import '@testing-library/jest-dom'
 
describe('강의 아이템은', () => {
  it('썸네일을 가지고 있어야 한다', () => {
    const {getByAltText} = render(<LectureItem />);

    const Thumb = getByAltText('초격차 패키지');
    expect(Thumb).toBeInTheDocument();
  })

  it('뱃지를 가지고 있어야 한다', () => {
    const {getByText} = render(<LectureItem />);

    const Badge = getByText('평생소장');
    expect(Badge).toBeInTheDocument();
  })

  it('강의 제목을 가지고 있어야 한다', () => {
    const {getByRole} = render(<LectureItem />);

    const Title = getByRole('heading', {
        name: '초격자 패키지 : 한 번에 끝내는 AWS 인프라 구축과 DevOps 운영'
    });
    expect(Title).toBeInTheDocument();
  })

  it('강의 설명을 렌더링 해야한다', () => {
    const {getByText} = render(<LectureItem />);

    const Desc = getByText('개발 운영 아키텍츠를 아우르는 AWS');
    expect(Desc).toBeInTheDocument();
  })

})