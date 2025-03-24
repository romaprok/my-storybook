import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../basic/Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DialogExample: Story = {
  name: 'Confirmation Dialog',
  args: {
    children: 'Button',
  },
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button variant="outline">Cancel</Button>
      <Button variant="primary">Confirm</Button>
    </div>
  ),
};

export const FormExample: Story = {
  name: 'Newsletter Form',
  args: {
    children: 'Button',
  },
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
  name: 'Action Buttons',
  args: {
    children: 'Button',
  },
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button variant="primary">Save Changes</Button>
      <Button variant="outline">Discard</Button>
      <Button variant="ghost">Cancel</Button>
    </div>
  ),
}; 