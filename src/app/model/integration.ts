import { Tag } from './tag';

export class Integration {

  integrationId!: number;
  name!:          string;
  excerpt!:       string;
  description!:   string;
  logo!:          string;
  company!:       string;
  companyLogo!:   string;
  website!:       string;
  support!:       string;
  tags!:          Array<Tag>;
  slides!:        string;
}
