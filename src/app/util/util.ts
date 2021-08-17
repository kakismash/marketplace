import { Integration } from './../model/integration';
import { Menu } from './../model/menu';

export function mapMenu(integrations: Array<Integration>): void {
  const menus: Array<Menu> = Array<Menu>();
  generateAll(integrations);
  integrations.forEach(i => {
    menus.push
  });
}

function generateAll(integrations: Array<Integration>): Menu {
  const allMenu: Menu  = new Menu();
  allMenu.name         = 'all';
  allMenu.display      = 'All'
  allMenu.integrations = new Array<Integration>();
  integrations.forEach(i => {
    allMenu.integrations.push(i);
  });
  return allMenu;
}
