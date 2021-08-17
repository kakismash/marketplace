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
  menus.push(generateSales());
  menus.push(generateMarketing());
  menus.push(generatePayments());
  menus.push(generateSecurity());
  menus.push(generateCommunications());
  menus.push(generateProductivity());
  menus.push(generateHotel());
  menus.push(generateEnterprise());
  menus.push(generateAccounting());
}

// SALES
function generateSales(): Menu {

  const saleMenu: Menu  = new Menu();
  saleMenu.name         = 'sales';
  saleMenu.display      = 'Sales';
  saleMenu.integrations = new Array<Integration>();
  saleMenu.subMenus     = subMenuSales();
  saleMenu.integrations = new Array<Integration>();

  return saleMenu;
}

function subMenuSales(): Array<SubMenu> {
  const sm: Array<SubMenu>     = new Array<SubMenu>();

   // Online Order
  const smOnlineOrder: SubMenu = new SubMenu();
  smOnlineOrder.name           = 'online_order';
  smOnlineOrder.display        = 'Online Order';
  smOnlineOrder.integrations   = new Array<Integration>();
  sm.push(smOnlineOrder);
  // Delivery
  const smDelivery: SubMenu = new SubMenu();
  smDelivery.name           = 'delivery';
  smDelivery.display        = 'Delivery';
  smDelivery.integrations   = new Array<Integration>();
  sm.push(smDelivery);

  return sm;
}

// MARKETING
function generateMarketing(): Menu {

  const marketingMenu: Menu  = new Menu();
  marketingMenu.name         = 'marketing';
  marketingMenu.display      = 'Marketing';
  marketingMenu.integrations = new Array<Integration>();
  marketingMenu.subMenus     = subMenuMarketing();
  marketingMenu.integrations = new Array<Integration>();

  return marketingMenu;
}

function subMenuMarketing(): Array<SubMenu> {
  const sm: Array<SubMenu>     = new Array<SubMenu>();

   // Payroll
  const smPayroll: SubMenu = new SubMenu();
  smPayroll.name           = 'payroll';
  smPayroll.display        = 'Payroll';
  smPayroll.integrations   = new Array<Integration>();
  sm.push(smPayroll);
  // Attendance
  const smAttendance: SubMenu = new SubMenu();
  smAttendance.name           = 'attendance';
  smAttendance.display        = 'Attendance';
  smAttendance.integrations   = new Array<Integration>();
  sm.push(smAttendance);

  return sm;
}

// PAYMENTS
function generatePayments(): Menu {

  const paymentsMenu: Menu  = new Menu();
  paymentsMenu.name         = 'payments';
  paymentsMenu.display      = 'Payments';
  paymentsMenu.integrations = new Array<Integration>();
  paymentsMenu.subMenus     = subMenuPayments();
  paymentsMenu.integrations = new Array<Integration>();

  return paymentsMenu;
}

function subMenuPayments(): Array<SubMenu> {
  const sm: Array<SubMenu>     = new Array<SubMenu>();

   // Gift
  const smGift: SubMenu = new SubMenu();
  smGift.name           = 'gift';
  smGift.display        = 'Gift';
  smGift.integrations   = new Array<Integration>();
  sm.push(smGift);
  // EMV
  const smEMV: SubMenu = new SubMenu();
  smEMV.name           = 'emv';
  smEMV.display        = 'EMV';
  smEMV.integrations   = new Array<Integration>();
  sm.push(smEMV);
  // Swipe CC
  const smSwipeCC: SubMenu = new SubMenu();
  smSwipeCC.name           = 'swipe_cc';
  smSwipeCC.display        = 'Swipe CC';
  smSwipeCC.integrations   = new Array<Integration>();
  sm.push(smSwipeCC);

  return sm;
}

// SECURITY
function generateSecurity(): Menu {

  const securityMenu: Menu  = new Menu();
  securityMenu.name         = 'security';
  securityMenu.display      = 'Security';
  securityMenu.integrations = new Array<Integration>();
  securityMenu.subMenus     = subMenuSecurity();
  securityMenu.integrations = new Array<Integration>();

  return securityMenu;
}

function subMenuSecurity(): Array<SubMenu> {
  const sm: Array<SubMenu>     = new Array<SubMenu>();

   // Camera
  const smCamera: SubMenu = new SubMenu();
  smCamera.name           = 'camera';
  smCamera.display        = 'Camera';
  smCamera.integrations   = new Array<Integration>();
  sm.push(smCamera);
  // Cash Management
  const smCashManagement: SubMenu = new SubMenu();
  smCashManagement.name           = 'cash_management';
  smCashManagement.display        = 'Cash Management';
  smCashManagement.integrations   = new Array<Integration>();
  sm.push(smCashManagement);

  return sm;
}

// COMMUNICATIONS
function generateCommunications(): Menu {

  const communicationsMenu: Menu  = new Menu();
  communicationsMenu.name         = 'communications';
  communicationsMenu.display      = 'Communications';
  communicationsMenu.integrations = new Array<Integration>();
  communicationsMenu.subMenus     = subMenuCommunications();
  communicationsMenu.integrations = new Array<Integration>();

  return communicationsMenu;
}

function subMenuCommunications(): Array<SubMenu> {
  const sm: Array<SubMenu>     = new Array<SubMenu>();

   // Caller ID
  const smCallerID: SubMenu = new SubMenu();
  smCallerID.name           = 'caller_id';
  smCallerID.display        = 'Caller ID';
  smCallerID.integrations   = new Array<Integration>();
  sm.push(smCallerID);

  return sm;
}

// PRODUCTIVITY
function generateProductivity(): Menu {

  const productivityMenu: Menu  = new Menu();
  productivityMenu.name         = 'productivity';
  productivityMenu.display      = 'Productivity';
  productivityMenu.integrations = new Array<Integration>();
  productivityMenu.subMenus     = [];
  productivityMenu.integrations = new Array<Integration>();

  return productivityMenu;
}

// HOTEL
function generateHotel(): Menu {

  const hotelMenu: Menu  = new Menu();
  hotelMenu.name         = 'hotel';
  hotelMenu.display      = 'Hotel';
  hotelMenu.integrations = new Array<Integration>();
  hotelMenu.subMenus     = [];
  hotelMenu.integrations = new Array<Integration>();

  return hotelMenu;
}

// ENTERPRISE
function generateEnterprise(): Menu {

  const enterpriseMenu: Menu  = new Menu();
  enterpriseMenu.name         = 'enterprise';
  enterpriseMenu.display      = 'Enterprise';
  enterpriseMenu.integrations = new Array<Integration>();
  enterpriseMenu.subMenus     = [];
  enterpriseMenu.integrations = new Array<Integration>();

  return enterpriseMenu;
}

// ACCOUNTING
function generateAccounting(): Menu {

  const accountingMenu: Menu  = new Menu();
  accountingMenu.name         = 'accounting';
  accountingMenu.display      = 'Accounting';
  accountingMenu.integrations = new Array<Integration>();
  accountingMenu.subMenus     = [];
  accountingMenu.integrations = new Array<Integration>();

  return accountingMenu;
}
