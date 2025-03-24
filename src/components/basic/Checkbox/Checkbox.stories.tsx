import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta = {
  title: 'Components/Basic/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable checkbox component that supports both checkbox and switch variants.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'The label text for the checkbox',
      control: 'text',
    },
    variant: {
      description: 'The visual variant of the checkbox',
      control: { type: 'radio', options: ['checkbox', 'switch'] },
    },
    size: {
      description: 'The size of the checkbox',
      control: { type: 'radio', options: ['small', 'medium', 'large'] },
    },
    labelPosition: {
      description: 'The position of the label relative to the checkbox',
      control: { type: 'radio', options: ['left', 'right'] },
    },
    disabled: {
      description: 'Whether the checkbox is disabled',
      control: 'boolean',
    },
    error: {
      description: 'Error message to display',
      control: 'text',
    },
    helperText: {
      description: 'Helper text to display below the checkbox',
      control: 'text',
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// 1. Default checkbox
export const Default: Story = {
  args: {
    label: 'Default Checkbox',
  },
};

// 2. Switch variant
export const Switch: Story = {
  args: {
    variant: 'switch',
    label: 'Switch Variant',
  },
};

// 3. Different size
export const Small: Story = {
  args: {
    size: 'small',
    label: 'Small Checkbox',
  },
};

// 4. Label position
export const LabelLeft: Story = {
  args: {
    label: 'Label on Left',
    labelPosition: 'left',
  },
};

// 5. With error state
export const WithError: Story = {
  args: {
    label: 'Accept Terms',
    error: 'You must accept the terms to continue',
  },
};

// 6. Disabled state
export const Disabled: Story = {
  args: {
    label: 'Disabled Checkbox',
    disabled: true,
  },
};

// 7. With helper text
export const WithHelperText: Story = {
  args: {
    label: 'Terms and Conditions',
    helperText: 'Please read and accept our terms and conditions',
  },
}; 