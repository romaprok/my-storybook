import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';

const meta = {
  title: 'Components/Basic/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable radio button component.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'The label text for the radio button',
      control: 'text',
    },
    size: {
      description: 'The size of the radio button',
      control: { type: 'radio', options: ['small', 'medium', 'large'] },
    },
    labelPosition: {
      description: 'The position of the label relative to the radio button',
      control: { type: 'radio', options: ['left', 'right'] },
    },
    disabled: {
      description: 'Whether the radio button is disabled',
      control: 'boolean',
    },
    error: {
      description: 'Error message to display',
      control: 'text',
    },
    helperText: {
      description: 'Helper text to display below the radio button',
      control: 'text',
    },
    checked: {
      description: 'Whether the radio button is checked',
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

// 1. Default radio
export const Default: Story = {
  args: {
    label: 'Default Radio',
  },
};

// 2. Different size
export const Small: Story = {
  args: {
    size: 'small',
    label: 'Small Radio',
  },
};

// 3. Label position
export const LabelLeft: Story = {
  args: {
    label: 'Label on Left',
    labelPosition: 'left',
  },
};

// 4. With error state
export const WithError: Story = {
  args: {
    label: 'Required option',
    error: 'Please select an option',
  },
};

// 5. Disabled state
export const Disabled: Story = {
  args: {
    label: 'Disabled Radio',
    disabled: true,
  },
};

// 6. With helper text
export const WithHelperText: Story = {
  args: {
    label: 'Select an option',
    helperText: 'Choose one of the available options',
  },
};

// 7. Radio group example
export const RadioGroup: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Radio
        name="options"
        label="Option 1"
        checked={true}
      />
      <Radio
        name="options"
        label="Option 2"
      />
      <Radio
        name="options"
        label="Option 3"
      />
    </div>
  ),
}; 