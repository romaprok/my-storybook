import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';
import { ThemeProvider } from '../../providers/ThemeProvider';

const meta: Meta<typeof Textarea> = {
  title: 'Basic/Textarea',
  component: Textarea,
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
        component: 'A versatile textarea component that supports various styles and features.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'standard'],
      description: 'The variant of the textarea.',
    },
    label: {
      control: 'text',
      description: 'The label for the textarea.',
    },
    error: {
      control: 'boolean',
      description: 'If true, the textarea will be displayed in an error state.',
    },
    helperText: {
      control: 'text',
      description: 'Helper text to display below the textarea.',
    },
    required: {
      control: 'boolean',
      description: 'If true, the textarea will be required.',
    },
    fullWidth: {
      control: 'boolean',
      description: 'If true, the textarea will take up the full width of its container.',
    },
    autoResize: {
      control: 'boolean',
      description: 'If true, the textarea will automatically adjust its height based on content.',
    },
    minRows: {
      control: 'number',
      description: 'Minimum number of rows to show.',
    },
    maxRows: {
      control: 'number',
      description: 'Maximum number of rows before scrolling.',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the textarea will be disabled.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Textarea variant="outlined" placeholder="Outlined variant" />
      <Textarea variant="filled" placeholder="Filled variant" />
      <Textarea variant="standard" placeholder="Standard variant" />
    </div>
  ),
};

export const WithLabel: Story = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message',
  },
};

export const Required: Story = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message',
    required: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Bio',
    placeholder: 'Tell us about yourself',
    helperText: 'Write a brief description about yourself',
  },
};

export const WithError: Story = {
  args: {
    label: 'Message',
    value: 'Too short',
    error: true,
    helperText: 'Message must be at least 20 characters long',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled textarea',
    value: 'This content cannot be edited',
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full width textarea',
    placeholder: 'This textarea takes up the full width',
    fullWidth: true,
  },
};

export const AutoResize: Story = {
  args: {
    label: 'Auto-resize textarea',
    placeholder: 'Type something to see the textarea grow...',
    autoResize: true,
    minRows: 3,
    maxRows: 10,
  },
};

export const WithCustomRows: Story = {
  args: {
    label: 'Custom rows',
    placeholder: 'This textarea has custom min and max rows',
    autoResize: true,
    minRows: 5,
    maxRows: 15,
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
    label: 'Dark theme textarea',
    placeholder: 'Type something...',
  },
};