import { create } from '@storybook/theming/create';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: create({
    appBorderColor: '#fff',
    base: 'light',
    brandTitle: 'Aton Design System',
    brandUrl: 'https://github.com/wundery/aton/',
    brandImage: 'https://placehold.it/350x150',
    gridCellSize: 12,
    barTextColor: '#c1c1c1',
    barSelectedColor: 'white',
    barBg: '#374DB1',
  }),
});
