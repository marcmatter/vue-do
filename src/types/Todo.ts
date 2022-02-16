import { Dayjs } from 'dayjs'

export interface TodoCategory {
  id: number;
  name: string;
  color: string;
}

export interface TodoEntry {
  id: number;
  name: string;
  isDone: boolean;
  dueDate?: Dayjs;
  categories: Set<number>;
}

export interface TodoStore {
  categories: TodoCategory[];
  entries: TodoEntry[];
}
