import type { Meta, StoryObj } from '@storybook/react';
import { ButtonExample } from './Button';

const meta = {
  title: 'Example/Button',
  component: ButtonExample,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithDarkBackground: Story = {
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}; 