// assets
import { IconTypography, IconPalette, IconShadow } from '@tabler/icons-react';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,

};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
  id: 'utilities',
  title: 'Utilities',
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: 'History',
      type: 'item',
      url: '/main/dashboard/history',
      icon: icons.IconTypography,
      breadcrumbs: false
    },
    {
      id: 'util-color',
      title: 'Profile',
      type: 'item',
      url: '/main/dashboard/profile',
      icon: icons.IconPalette,
      breadcrumbs: false
    },
    {
      id: 'util-shadow',
      title: 'Feedback',
      type: 'item',
      url: '/main/dashboard/feedback',
      icon: icons.IconShadow,
      breadcrumbs: false
    },

  ]
};

export default utilities;
