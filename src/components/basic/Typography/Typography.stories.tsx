import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';
import { ThemeProvider } from '../../providers/ThemeProvider';

const meta: Meta<typeof Typography> = {
  title: 'Basic/Typography',
  component: Typography,
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
        component: 'A versatile typography component that supports various styles and features.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'caption',
        'overline',
      ],
      description: 'The variant of the typography.',
    },
    color: {
      control: 'select',
      options: [
        'inherit',
        'primary',
        'secondary',
        'success',
        'warning',
        'error',
        'info',
      ],
      description: 'The color of the typography.',
    },
    weight: {
      control: 'select',
      options: ['light', 'regular', 'medium', 'semibold', 'bold'],
      description: 'The font weight of the typography.',
    },
    align: {
      control: 'select',
      options: ['inherit', 'left', 'center', 'right', 'justify'],
      description: 'The text alignment.',
    },
    noWrap: {
      control: 'boolean',
      description: 'If true, the text will not wrap.',
    },
    truncate: {
      control: 'boolean',
      description: 'If true, the text will be truncated with an ellipsis.',
    },
    as: {
      control: 'text',
      description: 'The HTML tag to use.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    children: 'Typography Example',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>
      <Typography variant="body1">Body 1</Typography>
      <Typography variant="body2">Body 2</Typography>
      <Typography variant="caption">Caption Text</Typography>
      <Typography variant="overline">Overline Text</Typography>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Typography color="inherit">Inherit Color</Typography>
      <Typography color="primary">Primary Color</Typography>
      <Typography color="secondary">Secondary Color</Typography>
      <Typography color="success">Success Color</Typography>
      <Typography color="warning">Warning Color</Typography>
      <Typography color="error">Error Color</Typography>
      <Typography color="info">Info Color</Typography>
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Typography weight="light">Light Weight (300)</Typography>
      <Typography weight="regular">Regular Weight (400)</Typography>
      <Typography weight="medium">Medium Weight (500)</Typography>
      <Typography weight="semibold">Semibold Weight (600)</Typography>
      <Typography weight="bold">Bold Weight (700)</Typography>
    </div>
  ),
};

export const Alignment: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Typography align="left">Left Aligned Text</Typography>
      <Typography align="center">Center Aligned Text</Typography>
      <Typography align="right">Right Aligned Text</Typography>
      <Typography align="justify">
        Justify Aligned Text. This is a longer text to demonstrate justified
        alignment. The text will be spaced to align with both the left and right
        margins.
      </Typography>
    </div>
  ),
};

export const NoWrap: Story = {
  args: {
    noWrap: true,
    children:
      'This is a very long text that would normally wrap to the next line, but noWrap prevents that from happening.',
  },
};

export const Truncate: Story = {
  args: {
    truncate: true,
    style: { width: '200px' },
    children:
      'This is a very long text that will be truncated with an ellipsis when it reaches the width limit.',
  },
};

export const CustomComponent: Story = {
  args: {
    as: 'a',
    color: 'primary',
    children: 'This is a link styled with Typography',
    style: { textDecoration: 'none', cursor: 'pointer' },
  },
  render: (args) => (
    <Typography {...args} onClick={() => window.open('#', '_blank')}>
      {args.children}
    </Typography>
  ),
};