export interface Moment {
  id?: number;
  title: string;
  description: string;
  image: string;
  creatd_at?: string;
  update_at?: string;
  comments?: [{ text: string; userName: string }]
}