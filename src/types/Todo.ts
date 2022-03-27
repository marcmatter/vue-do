import { Dayjs } from 'dayjs';

export enum TodoEntryState {
  Open,
  Closed,
}

export interface TodoState {
  id: TodoEntryState;
  icon: string;
  name: string;
}

export enum TodoEntryPriority {
  Low,
  Medium,
  High,
}

export interface TodoPriority {
  id: TodoEntryPriority;
  icon: string;
  name: string;
}

export interface TodoEntry {
  id: number;
  name: string;
  description?: string;
  state: TodoEntryState;
  priority: TodoEntryPriority;
  dueDate?: Dayjs;

  isDeleted?: boolean;
  deletedAt?: Dayjs;

  createdAt?: Dayjs;
  modifiedAt?: Dayjs;
}

export interface TodoStore {
  categories: TodoCategory[];
  entries: TodoEntry[];

  entriesToCategories: TodoEntryToCategory[];
}

export interface TodoCategory {
  id: number;
  name: string;
  description?: string;
  color?: string;
  icon?: string;

  isDeleted?: boolean;
  deletedAt?: Dayjs;

  createdAt?: Dayjs;
  modifiedAt?: Dayjs;
}

export interface TodoEntryToCategory {
  entryId: number;
  categoryId: number;
}
