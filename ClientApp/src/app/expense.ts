export interface Expense {
  id: number;
  name: string;
  month: number;
  day: number;
  year: number;
  cost: number;
  categoryId: number;
  userId: number;
}