import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { ThemeProvider } from '../../providers/ThemeProvider';

const meta: Meta<typeof Checkbox> = {
  title: 'Basic/Checkbox',
  component: Checkbox,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: 'A versatile checkbox component that supports various sizes and states.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the checkbox.',
    },
    label: {
      control: 'text',
      description: 'The label for the checkbox.',
    },
    error: {
      control: 'boolean',
      description: 'If true, the checkbox will be displayed in an error state.',
    },
    helperText: {
      control: 'text',
      description: 'Helper text to display below the checkbox.',
    },
    indeterminate: {
      control: 'boolean',
      description: 'If true, the checkbox will be in an indeterminate state.',
    },
    fullWidth: {
      control: 'boolean',
      description: 'If true, the checkbox will take up the full width of its container.',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the checkbox will be disabled.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Checkbox',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Checkbox size="small" label="Small checkbox" />
      <Checkbox size="medium" label="Medium checkbox" />
      <Checkbox size="large" label="Large checkbox" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Checkbox label="Unchecked" />
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled checked" disabled defaultChecked />
      <Checkbox label="Disabled indeterminate" disabled indeterminate />
    </div>
  ),
};

export const WithHelperText: Story = {
  args: {
    label: 'Terms and Conditions',
    helperText: 'Please read and accept the terms and conditions',
  },
};

export const WithError: Story = {
  args: {
    label: 'Accept terms',
    error: true,
    helperText: 'You must accept the terms to continue',
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full width checkbox',
    helperText: 'This checkbox takes up the full width',
    fullWidth: true,
  },
};

export const WithHTMLLabel: Story = {
  args: {
    label: (
      <span>
        I agree to the{' '}
        <a href="#" style={{ color: 'var(--phork-accent-color, #0060ce)' }}>
          terms and conditions
        </a>
      </span>
    ),
  },
};