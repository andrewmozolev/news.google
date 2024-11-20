export interface MenuItem {
  title: string;
  url: string;
  active?: boolean;
}

export interface MenuGroup {
  items: MenuItem[];
}
