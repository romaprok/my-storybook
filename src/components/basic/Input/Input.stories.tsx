import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { ThemeProvider } from '../../providers/ThemeProvider';

const meta: Meta<typeof Input> = {
  title: 'Basic/Input',
  component: Input,
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
        component: 'A versatile input component that supports various styles and features.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'standard'],
      description: 'The variant of the input.',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the input.',
    },
    label: {
      control: 'text',
      description: 'The label for the input.',
    },
    error: {
      control: 'boolean',
      description: 'If true, the input will be displayed in an error state.',
    },
    helperText: {
      control: 'text',
      description: 'Helper text to display below the input.',
    },
    required: {
      control: 'boolean',
      description: 'If true, the input will be required.',
    },
    fullWidth: {
      control: 'boolean',
      description: 'If true, the input will take up the full width of its container.',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the input will be disabled.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Input variant="outlined" placeholder="Outlined variant" />
      <Input variant="filled" placeholder="Filled variant" />
      <Input variant="standard" placeholder="Standard variant" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Input size="small" placeholder="Small size" />
      <Input size="medium" placeholder="Medium size" />
      <Input size="large" placeholder="Large size" />
    </div>
  ),
};

export const WithLabel: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
  },
};

export const Required: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    required: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Password',
    type: 'password',
    helperText: 'Must be at least 8 characters long',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    value: 'invalid-email',
    error: true,
    helperText: 'Please enter a valid email address',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled input',
    value: 'Cannot edit this',
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full width input',
    placeholder: 'This input takes up the full width',
    fullWidth: true,
  },
};

export const WithAdornments: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Input
        startAdornment="$"
        placeholder="Enter amount"
      />
      <Input
        endAdornment=".com"
        placeholder="Enter domain"
      />
      <Input
        startAdornment="https://"
        endAdornment=".com"
        placeholder="Enter domain"
      />
    </div>
  ),
};