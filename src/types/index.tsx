export enum SearchState {
  EMPTY,
  INVALID
}

export interface Result {
  type: string;
  id: number;
  url: string;
  title: string;
  description: string;
  image: string;
}