import type { AxiosInstance } from 'axios';
import { CursorListDto } from '../types';

export interface IListParameters {
  cursor?: number;
}

export class CrudRepository<T> {
  constructor(
    protected endpoint: string,
    protected axiosInstance: AxiosInstance,
  ) {}

  list(params?: IListParameters) {
    return this.axiosInstance.get<CursorListDto<T>>(`${this.endpoint}`, {
      params: params,
    });
  }
  get(id: string | number) {
    return this.axiosInstance.get(`${this.endpoint}/${id}`);
  }
  post(payload: T) {
    return this.axiosInstance.post(this.endpoint, payload);
  }
  put(id: string | number, payload?: T) {
    return this.axiosInstance.put(`${this.endpoint}/${id}`, payload);
  }
  delete(id: string | number) {
    return this.axiosInstance.delete(`${this.endpoint}/${id}`);
  }
}
