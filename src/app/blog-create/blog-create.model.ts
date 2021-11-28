export interface Post {
  _id?: string;
  title: string;
  slug: string;
  paragraph1: string;
  backgroundImage: string;
  subImage: string;
  subImageTitle: string;
  paragraph2: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}
