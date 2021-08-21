import { Integration } from './integration';
import { SubMenu } from './sub-menu';

export class Menu {

  name!:         string;
  display!:      string;
  integrations!: Array<Integration>;
  subMenus!:     Array<SubMenu>;
  icon!:         string;
}
