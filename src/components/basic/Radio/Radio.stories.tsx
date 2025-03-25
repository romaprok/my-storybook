import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';
import { ThemeProvider } from '../../providers/ThemeProvider';

const meta: Meta<typeof Radio> = {
  title: 'Basic/Radio',
  component: Radio,
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
        component: 'A versatile radio component that supports various sizes and states.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the radio.',
    },
    label: {
      control: 'text',
      description: 'The label for the radio.',
    },
    error: {
      control: 'boolean',
      description: 'If true, the radio will be displayed in an error state.',
    },
    helperText: {
      control: 'text',
      description: 'Helper text to display below the radio.',
    },
    fullWidth: {
      control: 'boolean',
      description: 'If true, the radio will take up the full width of its container.',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the radio will be disabled.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    label: 'Radio option',
    name: 'default',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Radio size="small" label="Small radio" name="size" value="small" />
      <Radio size="medium" label="Medium radio" name="size" value="medium" />
      <Radio size="large" label="Large radio" name="size" value="large" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Radio label="Unchecked" name="states" value="unchecked" />
      <Radio label="Checked" name="states" value="checked" defaultChecked />
      <Radio label="Disabled" name="states" value="disabled" disabled />
      <Radio
        label="Disabled checked"
        name="states"
        value="disabled-checked"
        disabled
        defaultChecked
      />
    </div>
  ),
};

export const WithHelperText: Story = {
  args: {
    label: 'Select option',
    helperText: 'Additional information about this option',
    name: 'helper',
  },
};

export const WithError: Story = {
  args: {
    label: 'Invalid option',
    error: true,
    helperText: 'Please select a valid option',
    name: 'error',
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full width radio',
    helperText: 'This radio takes up the full width',
    fullWidth: true,
    name: 'fullwidth',
  },
};

export const Group: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Radio
        name="group"
        value="option1"
        label="Option 1"
        helperText="Description for option 1"
      />
      <Radio
        name="group"
        value="option2"
        label="Option 2"
        helperText="Description for option 2"
      />
      <Radio
        name="group"
        value="option3"
        label="Option 3"
        helperText="Description for option 3"
      />
    </div>
  ),
};

export const WithHTMLLabel: Story = {
  args: {
    label: (
      <span>
        I agree to receive{' '}
        <a href="#" style={{ color: 'var(--phork-accent-color, #0060ce)' }}>
          promotional emails
        </a>
      </span>
    ),
    name: 'html-label',
  },
};

export const DarkTheme: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider themeId="dark">
        <div style={{ padding: '24px', background: '#333' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  args: {
    label: 'Dark theme radio',
    name: 'dark-theme',
  },
}; 