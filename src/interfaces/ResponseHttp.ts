export interface ResponseHttp<T> {
  message?: string;
  data: T;
}