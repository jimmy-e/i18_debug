import { Button } from './Button';

export default {
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Button',
};

export const Primary = {
  args: {
    label: 'Button',
    primary: true,
  },
};
