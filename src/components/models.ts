export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface IMenuItem {
  name: string;
  icon?: string;
  to: string;
  level: number;
  children: Array<IMenuItem>;
}
