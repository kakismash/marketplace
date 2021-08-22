import { SubMenu } from '../model/sub-menu';
import { Integration } from './../model/integration';
import { Menu } from './../model/menu';

export function mapMenu(integrations: Array<Integration>): Array<Menu> {
  const menus: Array<Menu> = Array<Menu>();
  menus.push(generateAll(integrations));
  menus.push(...generateMenus(integrations));
  return menus;
}

function generateAll(integrations: Array<Integration>): Menu {
  const allMenu: Menu = new Menu();
  allMenu.name = 'all';
  allMenu.display = 'All'
  allMenu.icon = 'apps';
  allMenu.integrations = new Array<Integration>();
  integrations.forEach(i => {
    allMenu.integrations.push(i);
  });
  return allMenu;
}

function generateMenus(integrations: Array<Integration>): Array<Menu> {
  const menus: Array<Menu> = new Array<Menu>();
  menus.push(generateSales(integrations));
  menus.push(generateMarketing(integrations));
  menus.push(generateLabor(integrations));
  menus.push(generatePayments(integrations));
  menus.push(generateSecurity(integrations));
  menus.push(generateCommunications(integrations));
  menus.push(generateProductivity(integrations));
  menus.push(generateHotel(integrations));
  menus.push(generateEnterprise(integrations));
  menus.push(generateAccounting(integrations));
  return menus;
}

// SALES
function generateSales(integrations: Array<Integration>): Menu {
  const saleMenu: Menu = new Menu();
  saleMenu.name = 'sales';
  saleMenu.display = 'Sales';
  saleMenu.icon = 'store';
  saleMenu.subMenus = subMenuSales(integrations);
  saleMenu.integrations = new Array<Integration>();
  integrations.forEach(i => {
    i.tags.forEach(t => {
      if (saleMenu.name === t) {
        saleMenu.integrations.push(i);
      }
    });
  });
  return saleMenu;
}

function subMenuSales(integrations: Array<Integration>): Array<SubMenu> {
  const sm: Array<SubMenu> = new Array<SubMenu>();
  // Online Order
  const smOnlineOrder: SubMenu = new SubMenu();
  smOnlineOrder.name = 'online_order';
  smOnlineOrder.display = 'Online Order';
  smOnlineOrder.integrations = new Array<Integration>();
  integrations.forEach(i => {
    i.tags.forEach(t => {
      if (smOnlineOrder.name === t) {
        smOnlineOrder.integrations.push(i);
      }
    });
  });
  sm.push(smOnlineOrder);
  // Delivery
  const smDelivery: SubMenu = new SubMenu();
  smDelivery.name = 'delivery';
  smDelivery.display = 'Delivery';
  smDelivery.integrations = new Array<Integration>();
  integrations.forEach(i => {
    i.tags.forEach(t => {
      if (smDelivery.name === t) {
        smDelivery.integrations.push(i);
      }
    });
  });
  sm.push(smDelivery);

  return sm;
}

// MARKETING
function generateMarketing(integrations: Array<Integration>): Menu {
  const marketingMenu: Menu = new Menu();
  marketingMenu.name = 'marketing';
  marketingMenu.display = 'Marketing';
  marketingMenu.icon = 'shopping_bag';
  marketingMenu.subMenus = subMenuMarketing(integrations);
  marketingMenu.integrations = new Array<Integration>();
  integrations.forEach(i => {
    i.tags.forEach(t => {
      if (marketingMenu.name === t) {
        marketingMenu.integrations.push(i);
      }
    });
  });

  return marketingMenu;
}

function subMenuMarketing(integrations: Array<Integration>): Array<SubMenu> {
  const sm: Array<SubMenu> = new Array<SubMenu>();
  // Email
  const smEmail: SubMenu = new SubMenu();
  smEmail.name = 'email';
  smEmail.display = 'Email (i.e. MailChimp)';
  smEmail.integrations = new Array<Integration>();
  integrations.forEach(i => {
    i.tags.forEach(t => {
      if (smEmail.name === t) {
        smEmail.integrations.push(i);
      }
    });
  });
  sm.push(smEmail);
  // Loyalty
  const smLoyalty: SubMenu = new SubMenu();
  smLoyalty.name = 'loyalty';
  smLoyalty.display = 'Loyalty';
  smLoyalty.integrations = new Array<Integration>();
  integrations.forEach(i => {
    i.tags.forEach(t => {
      if (smLoyalty.name === t) {
        smLoyalty.integrations.push(i);
      }
    });
  });
  sm.push(smLoyalty);

  return sm;
}

// LABOR
function generateLabor(integrations: Array<Integration>): Menu {
  const laborMenu: Menu = new Menu();
  laborMenu.name = 'labor';
  laborMenu.display = 'Labor';
  laborMenu.icon = 'folder_open';
  laborMenu.subMenus = subMenuLabor(integrations);
  laborMenu.integrations = new Array<Integration>();
  integrations.forEach(i => {
    i.tags.forEach(t => {
      if (laborMenu.name === t) {
        laborMenu.integrations.push(i);
      }
    });
  });

  return laborMenu;
}

function subMenuLabor(integrations: Array<Integration>): Array<SubMenu> {
  const sm: Array<SubMenu> = new Array<SubMenu>();
  // Payroll
  const smPayroll: SubMenu = new SubMenu();
  smPayroll.name = 'payroll';
  smPayroll.display = 'Payroll';
  smPayroll.integrations = new Array<Integration>();
  integrations.forEach(i => {
    i.tags.forEach(t => {
      if (smPayroll.name === t) {
        smPayroll.integrations.push(i);
      }
    });
  });
  sm.push(smPayroll);
  // Attendance
  const smAttendance: SubMenu = new SubMenu();
  smAttendance.name = 'attendance';
  smAttendance.display = 'Attendance';
  smAttendance.integrations = new Array<Integration>();
  integrations.forEach(i => {
    i.tags.forEach(t => {
      if (smAttendance.name === t) {
        smAttendance.integrations.push(i);
      }
    });
  });
  sm.push(smAttendance);

  return sm;
}

// PAYMENTS
function generatePayments(integrations: Array<Integration>): Menu {
  const paymentsMenu: Menu = new Menu();
  paymentsMenu.name = 'payments';
  paymentsMenu.display = 'Payments';
  paymentsMenu.icon = 'credit_score';
  paymentsMenu.subMenus = subMenuPayments(integrations);
  paymentsMenu.integrations = new Array<Integration>();
  integrations.forEach(i => {
    i.tags.forEach(t => {
      if (paymentsMenu.name === t) {
        paymentsMenu.integrations.push(i);
      }
    });
  });
  return paymentsMenu;
}

function subMenuPayments(integrations: Array<Integration>): Array<SubMenu> {
  const sm: Array<SubMenu> = new Array<SubMenu>();
  // Gift
  const smGift: SubMenu = new SubMenu();
  smGift.name = 'gift';
  smGift.display = 'Gift';
  smGift.integrations = new Array<Integration>();
  integrations.forEach(i => {
    i.tags.forEach(t => {
      if (smGift.name === t) {
        smGift.integrations.push(i);
      }
    });
  });
  sm.push(smGift);
  // EMV
  const smEMV: SubMenu = new SubMenu();
  smEMV.name = 'emv';
  smEMV.display = 'EMV';
  smEMV.integrations = new Array<Integration>();
  integrations.forEach(i => {
    i.tags.forEach(t => {
      if (smEMV.name === t) {
        smEMV.integrations.push(i);
      }
    });
  });
  sm.push(smEMV);
  // Swipe CC
  const smSwipeCC: SubMenu = new SubMenu();
  smSwipeCC.name = 'swipe_cc';
  smSwipeCC.display = 'Swipe CC';
  smSwipeCC.integrations = new Array<Integration>();
  integrations.forEach(i => {
    i.tags.forEach(t => {
      if (smSwipeCC.name === t) {
        smSwipeCC.integrations.push(i);
      }
    });
  });
  sm.push(smSwipeCC);

  return sm;
}

// SECURITY
function generateSecurity(integrations: Array<Integration>): Menu {
  const securityMenu: Menu = new Menu();
  securityMenu.name = 'security';
  securityMenu.display = 'Security';
  securityMenu.icon = 'shield';
  securityMenu.subMenus = subMenuSecurity(integrations);
  securityMenu.integrations = new Array<Integration>();
  integrations.forEach(i => {
    i.tags.forEach(t => {
      if (securityMenu.name === t) {
        securityMenu.integrations.push(i);
      }
    });
  });
  return securityMenu;
}

function subMenuSecurity(integrations: Array<Integration>): Array<SubMenu> {
  const sm: Array<SubMenu> = new Array<SubMenu>();
  // Camera
  const smCamera: SubMenu = new SubMenu();
  smCamera.name = 'camera';
  smCamera.display = 'Camera';
  smCamera.integrations = new Array<Integration>();
  integrations.forEach(i => {
    i.tags.forEach(t => {
      if (smCamera.name === t) {
        smCamera.integrations.push(i);
      }
    });
  });
  sm.push(smCamera);
  // Cash Management
  const smCashManagement: SubMenu = new SubMenu();
  smCashManagement.name = 'cash_management';
  smCashManagement.display = 'Cash Management';
  smCashManagement.integrations = new Array<Integration>();
  integrations.forEach(i => {
    i.tags.forEach(t => {
      if (smCashManagement.name === t) {
        smCashManagement.integrations.push(i);
      }
    });
  });
  sm.push(smCashManagement);

  return sm;
}

// COMMUNICATIONS
function generateCommunications(integrations: Array<Integration>): Menu {
  const communicationsMenu: Menu = new Menu();
  communicationsMenu.name = 'communications';
  communicationsMenu.display = 'Communications';
  communicationsMenu.icon = 'sensors';
  communicationsMenu.subMenus = subMenuCommunications(integrations);
  communicationsMenu.integrations = new Array<Integration>();
  integrations.forEach(i => {
    i.tags.forEach(t => {
      if (communicationsMenu.name === t) {
        communicationsMenu.integrations.push(i);
      }
    });
  });

  return communicationsMenu;
}

function subMenuCommunications(integrations: Array<Integration>): Array<SubMenu> {
  const sm: Array<SubMenu> = new Array<SubMenu>();
  // Caller ID
  const smCallerID: SubMenu = new SubMenu();
  smCallerID.name = 'caller_id';
  smCallerID.display = 'Caller ID';
  smCallerID.integrations = new Array<Integration>();
  integrations.forEach(i => {
    i.tags.forEach(t => {
      if (smCallerID.name === t) {
        smCallerID.integrations.push(i);
      }
    });
  });
  sm.push(smCallerID);

  return sm;
}

// PRODUCTIVITY
function generateProductivity(integrations: Array<Integration>): Menu {
  const productivityMenu: Menu = new Menu();
  productivityMenu.name = 'productivity';
  productivityMenu.display = 'Productivity';
  productivityMenu.icon = 'bar_chart';
  productivityMenu.subMenus = [];
  productivityMenu.integrations = new Array<Integration>();
  integrations.forEach(i => {
    i.tags.forEach(t => {
      if (productivityMenu.name === t) {
        productivityMenu.integrations.push(i);
      }
    });
  });

  return productivityMenu;
}

// HOTEL
function generateHotel(integrations: Array<Integration>): Menu {
  const hotelMenu: Menu = new Menu();
  hotelMenu.name = 'hotel';
  hotelMenu.display = 'Hotel';
  hotelMenu.icon = 'hotel_class';
  hotelMenu.subMenus = [];
  hotelMenu.integrations = new Array<Integration>();
  integrations.forEach(i => {
    i.tags.forEach(t => {
      if (hotelMenu.name === t) {
        hotelMenu.integrations.push(i);
      }
    });
  });

  return hotelMenu;
}

// ENTERPRISE
function generateEnterprise(integrations: Array<Integration>): Menu {
  const enterpriseMenu: Menu = new Menu();
  enterpriseMenu.name = 'enterprise';
  enterpriseMenu.display = 'Enterprise';
  enterpriseMenu.icon = 'business';
  enterpriseMenu.subMenus = [];
  enterpriseMenu.integrations = new Array<Integration>();
  integrations.forEach(i => {
    i.tags.forEach(t => {
      if (enterpriseMenu.name === t) {
        enterpriseMenu.integrations.push(i);
      }
    });
  });

  return enterpriseMenu;
}

// ACCOUNTING
function generateAccounting(integrations: Array<Integration>): Menu {
  const accountingMenu: Menu = new Menu();
  accountingMenu.name = 'accounting';
  accountingMenu.display = 'Accounting (i.e. QuickBooks)';
  accountingMenu.icon = 'account_circle';
  accountingMenu.subMenus = [];
  accountingMenu.integrations = new Array<Integration>();
  integrations.forEach(i => {
    i.tags.forEach(t => {
      if (accountingMenu.name === t) {
        accountingMenu.integrations.push(i);
      }
    });
  });

  return accountingMenu;
}
