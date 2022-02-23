import { Dayjs } from 'dayjs';

enum TodoEntryState {
  Open,
  Closed,
}

interface TodoEntry {
  id: number;
  name: string;
  description?: string;
  state: TodoEntryState;
  dueDate?: Dayjs;
  categoryIds: Set<number>;

  isDeleted: boolean;
  deletedAt?: Dayjs;

  createdAt: Dayjs;
  modifiedAt: Dayjs;
}

interface TodoCategory {
  id: number;
  name: string;
  description?: string;
  color?: string;

  isDeleted: boolean;
  deletedAt?: Dayjs;

  createdAt: Dayjs;
  modifiedAt: Dayjs;
}

export interface TodoStore {
  categories: TodoCategory[];
  entries: TodoEntry[];
}
