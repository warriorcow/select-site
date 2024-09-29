interface ImageSizes {
  [key: string]: {
    url: string;
    width: number;
    height: number;
  };
}

interface Image {
  ID: number;
  id: number;
  title: string;
  filename: string;
  filesize: number;
  url: string;
  link: string;
  alt: string;
  author: string;
  description: string;
  caption: string;
  name: string;
  status: string;
  uploaded_to: number;
  date: string;
  modified: string;
  menu_order: number;
  mime_type: string;
  type: string;
  subtype: string;
  icon: string;
  width: number;
  height: number;
  sizes: ImageSizes;
}

export interface Category {
  name: string;
  slug: string;
  id: number;
  parent: number;
  url: string | null;
  images: Image[] | false;
  childrens: Record<number, Category>;
}

export interface RootCategory {
  [key: number]: Category;
}