import { SubMenu } from '../model/sub-menu';
import { Integration } from './../model/integration';
import { Menu } from './../model/menu';

export function mapMenu(integrations: Array<Integration>): void {
  const menus: Array<Menu> = Array<Menu>();
  menus.push(generateAll(integrations));
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

function generateMenus(menus: Array<Menu>): void {
  const saleMenu: Menu  = new Menu();
  saleMenu.name         = 'sales';
  saleMenu.display      = 'Sales';
  saleMenu.integrations = new Array<Integration>();
  saleMenu.subMenus
}

function subMenuSales(): Array<SubMenu> {
  const sm: Array<SubMenu>     = new Array<SubMenu>();
  const smOnlineOrder: SubMenu = new SubMenu();
  smOnlineOrder.name           = 'online_order';
  smOnlineOrder.display        = 'Online Order';
  smOnlineOrder.integrations   = new Array<Integration>();
  sm.push(smOnlineOrder);
  return sm;
}
