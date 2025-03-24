import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta = {
  title: 'Components/Basic/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable select component.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'The label text for the select',
      control: 'text',
    },
    size: {
      description: 'The size of the select',
      control: { type: 'radio', options: ['small', 'medium', 'large'] },
    },
    disabled: {
      description: 'Whether the select is disabled',
      control: 'boolean',
    },
    error: {
      description: 'Error message to display',
      control: 'text',
    },
    helperText: {
      description: 'Helper text to display below the select',
      control: 'text',
    },
    required: {
      description: 'Whether the select is required',
      control: 'boolean',
    },
    value: {
      description: 'The current value of the select',
      control: 'text',
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

// 1. Default select
export const Default: Story = {
  args: {
    options,
    label: 'Select an option',
  },
};

// 2. Different size
export const Small: Story = {
  args: {
    options,
    label: 'Small Select',
    size: 'small',
  },
};

// 3. Required state
export const Required: Story = {
  args: {
    options,
    label: 'Required Select',
    required: true,
  },
};

// 4. Disabled state
export const Disabled: Story = {
  args: {
    options,
    label: 'Disabled Select',
    disabled: true,
  },
};

// 5. With helper text
export const WithHelperText: Story = {
  args: {
    options,
    label: 'Select an option',
    helperText: 'Choose one of the available options',
  },
};

// 6. With error
export const WithError: Story = {
  args: {
    options,
    label: 'Required field',
    error: 'Please select an option',
  },
};

// 7. With default value
export const WithValue: Story = {
  args: {
    options,
    label: 'Selected Option',
    value: 'option1',
  },
}; 