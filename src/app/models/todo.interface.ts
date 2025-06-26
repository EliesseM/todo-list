export interface Todo {
    id: number
    title: string
    content: string
    deadline: Date
    status: number
}

export enum STATUS {
    TODO = 1,
    IN_PROGRESS = 2,
    DONE = 3,
    BUG = 4,
}
      