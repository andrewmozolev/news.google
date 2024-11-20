export interface News {
  icon: string;
  agency: string;
  title: string;
  date: string;
  href: string;
  image?: string;
}

export interface NewsGroup {
  news: News[];
}
