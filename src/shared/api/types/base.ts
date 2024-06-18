export class BaseDto {
  id: number = 0;
  name: string = '';
}

export abstract class CursorListDto<T> {
  list: T[] = [];
  total: number = 0;
  page: number = 0;
  pageSize: number = 15;
}
