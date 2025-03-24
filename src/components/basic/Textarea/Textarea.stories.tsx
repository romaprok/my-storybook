import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';

const meta = {
  title: 'Components/Basic/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable textarea component.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'The label text for the textarea',
      control: 'text',
    },
    size: {
      description: 'The size of the textarea',
      control: { type: 'radio', options: ['small', 'medium', 'large'] },
    },
    disabled: {
      description: 'Whether the textarea is disabled',
      control: 'boolean',
    },
    error: {
      description: 'Error message to display',
      control: 'text',
    },
    helperText: {
      description: 'Helper text to display below the textarea',
      control: 'text',
    },
    required: {
      description: 'Whether the textarea is required',
      control: 'boolean',
    },
    rows: {
      description: 'Number of visible text lines',
      control: 'number',
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

// 1. Default textarea
export const Default: Story = {
  args: {
    label: 'Enter your message',
    placeholder: 'Type here...',
  },
};

// 2. Different size
export const Small: Story = {
  args: {
    label: 'Small Textarea',
    size: 'small',
  },
};

// 3. Required state
export const Required: Story = {
  args: {
    label: 'Required Textarea',
    required: true,
  },
};

// 4. Disabled state
export const Disabled: Story = {
  args: {
    label: 'Disabled Textarea',
    disabled: true,
  },
};

// 5. With helper text
export const WithHelperText: Story = {
  args: {
    label: 'Enter your message',
    helperText: 'Maximum 500 characters',
  },
};

// 6. With error
export const WithError: Story = {
  args: {
    label: 'Required field',
    error: 'Please enter a message',
  },
};

// 7. Custom rows
export const CustomRows: Story = {
  args: {
    label: 'Custom Rows',
    rows: 6,
  },
};