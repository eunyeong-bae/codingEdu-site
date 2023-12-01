export interface Catergory {
    id: number,
    name: string
}

export interface Tag {
    id:number,
    name: string
}

export interface Lecture {
    id: number,
    category: Catergory,
    title: string,
    tags: [Tag],
    description: string,
    thumbs: string,
    isHot: boolean,
    isNew: boolean,
}