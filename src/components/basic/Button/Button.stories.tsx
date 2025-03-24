import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Components/Basic/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic component stories
export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading Button',
    variant: 'primary',
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'primary',
    disabled: true,
  },
};

// Example stories (these will appear in the Example section)
const exampleMeta = {
  ...meta,
  title: 'Example/Button',
} satisfies Meta<typeof Button>;

export const DialogExample: Story = {
  ...exampleMeta,
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button variant="outline">Cancel</Button>
      <Button variant="primary">Confirm</Button>
    </div>
  ),
};

export const FormExample: Story = {
  ...exampleMeta,
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px' }}>
      <input
        type="text"
        placeholder="Enter your email"
        style={{
          padding: '0.5rem',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      />
      <Button variant="primary">Subscribe</Button>
    </div>
  ),
};

export const ActionButtonsExample: Story = {
  ...exampleMeta,
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button variant="primary">Save Changes</Button>
      <Button variant="outline">Discard</Button>
      <Button variant="ghost">Cancel</Button>
    </div>
  ),
}; 