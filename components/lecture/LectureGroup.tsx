import React from 'react'
import LectureList from './LectureList'

//강의 목록
const LectureGroup = ():JSX.Element => {
  return (
    <div>
        <span>Best</span>
        <h2>이번 주 베스트셀링 강의</h2>
        <LectureList />
    </div>
  )
}

export default LectureGroup