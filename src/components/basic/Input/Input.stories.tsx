import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
  title: 'Components/Basic/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic variants
export const Outlined: Story = {
  args: {
    variant: 'outlined',
    placeholder: 'Outlined input',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    placeholder: 'Filled input',
  },
};

export const Standard: Story = {
  args: {
    variant: 'standard',
    placeholder: 'Standard input',
  },
};

// Sizes
export const Small: Story = {
  args: {
    size: 'small',
    placeholder: 'Small input',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    placeholder: 'Medium input',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    placeholder: 'Large input',
  },
};

// With label and helper text
export const WithLabel: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Password',
    helperText: 'Must be at least 8 characters',
    type: 'password',
    placeholder: 'Enter your password',
  },
};

// Error state
export const WithError: Story = {
  args: {
    label: 'Email',
    error: 'Please enter a valid email address',
    value: 'invalid-email',
    placeholder: 'Enter your email',
  },
};

// Required
export const Required: Story = {
  args: {
    label: 'Username',
    required: true,
    placeholder: 'Enter your username',
  },
};

// With icons
export const WithStartIcon: Story = {
  args: {
    startIcon: '🔍',
    placeholder: 'Search...',
  },
};

export const WithEndIcon: Story = {
  args: {
    endIcon: '📅',
    placeholder: 'Select date',
  },
};

export const WithBothIcons: Story = {
  args: {
    startIcon: '📧',
    endIcon: '✓',
    placeholder: 'Enter your email',
  },
};

// Clearable
export const Clearable: Story = {
  args: {
    clearable: true,
    value: 'Clear me!',
    placeholder: 'Type something',
  },
};

// Full width
export const FullWidth: Story = {
  args: {
    fullWidth: true,
    placeholder: 'Full width input',
  },
};

// Disabled
export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'Disabled input',
  },
};

// Different types
export const Password: Story = {
  args: {
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
  },
};

export const Number: Story = {
  args: {
    type: 'number',
    label: 'Amount',
    placeholder: 'Enter amount',
  },
};

// Complex example
export const ComplexExample: Story = {
  args: {
    label: 'Email Address',
    required: true,
    startIcon: '📧',
    clearable: true,
    helperText: 'We will never share your email',
    placeholder: 'Enter your email address',
    fullWidth: true,
  },
}; 