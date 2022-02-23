import { Dayjs } from 'dayjs';

export enum TodoEntryState {
  Open,
  Closed,
}

export interface TodoEntry {
  id: number;
  name: string;
  description?: string;
  state: TodoEntryState;
  dueDate?: Dayjs;

export interface TodoStore {
  categories: TodoCategory[];
  entries: TodoEntry[];

  entriesToCategories: TodoEntryToCategory[];
}
  isDeleted: boolean;
  deletedAt?: Dayjs;

  createdAt: Dayjs;
  modifiedAt: Dayjs;
}

export interface TodoCategory {
  id: number;
  name: string;
  description?: string;
  color?: string;

  isDeleted: boolean;
  deletedAt?: Dayjs;

  createdAt: Dayjs;
  modifiedAt: Dayjs;
}

export interface TodoEntryToCategory {
  entryId: number;
  categoryId: number;
}
