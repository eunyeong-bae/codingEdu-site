// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const mockCategory = {
    id: 0,
    name: 'programming',
}

const mockTags = [
    {
        id: 0,
        name:'평생소장', 
    },
    {
        id: 1,
        name:'AWS', 
    },
    {
        id: 2,
        name:'DevOps', 
    },
]

const lecturesData = {
    lectureList: [
        {
            id: 0,
            category: mockCategory,
            title:'초격차 패키지 : 한 번에 끝내는 AWS 인프라 구측',
            tags: mockTags,
            description: '개발/운영/아키텍트를 아우르는 !',
            thumbs: '/thumb.jpg',
            isHot: true,
            isNew: true,
        },
        {
            id:2,
            category: mockCategory,
            title:'초격차 패키지 : 한 번에 끝내는 AWS 인프라 구측과 DevOps 운영',
            tags: mockTags,
            description: '개발/운영 아우르는 AWS/DevOps 전 과정 마스터!',
            thumbs: '/thumb.jpg',
            isHot: true,
            isNew: true,
        },
        {
            id: 3,
            category: mockCategory,
            title:'초격차 패키지 : DevOps 운영',
            tags: mockTags,
            description: '개발/운영/아키텍트를 아우르는 AWS/DevOps 전 과정 마스터!',
            thumbs: '/thumb.jpg',
            isHot: true,
            isNew: true,
        },
    ]
}

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(lecturesData)
}