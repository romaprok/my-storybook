import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';
import { ThemeProvider } from '../../providers/ThemeProvider';

const meta: Meta<typeof Flex> = {
  title: 'Basic/Flex',
  component: Flex,
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
        component: 'A flexible container component for creating layouts.',
      },
    },
  },
  argTypes: {
    align: {
      control: 'select',
      options: ['flex-start', 'flex-end', 'center', 'stretch', 'baseline'],
      description: 'The alignment of flex items along the cross-axis',
    },
    justify: {
      control: 'select',
      options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
      description: 'The alignment of flex items along the main-axis',
    },
    direction: {
      control: 'select',
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
      description: 'The direction of the flex container',
    },
    wrap: {
      control: 'select',
      options: ['nowrap', 'wrap', 'wrap-reverse'],
      description: 'Whether flex items should wrap',
    },
    gap: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
      description: 'The gap between flex items',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the flex container should take full width',
    },
    fullHeight: {
      control: 'boolean',
      description: 'Whether the flex container should take full height',
    },
    inline: {
      control: 'boolean',
      description: 'Whether the flex container should be inline',
    },
    center: {
      control: 'boolean',
      description: 'Whether the flex container should be centered',
    },
    centerVertical: {
      control: 'boolean',
      description: 'Whether the flex container should be centered vertically',
    },
    centerHorizontal: {
      control: 'boolean',
      description: 'Whether the flex container should be centered horizontally',
    },
    spaceBetween: {
      control: 'boolean',
      description: 'Whether the flex container should be spaced between',
    },
    spaceAround: {
      control: 'boolean',
      description: 'Whether the flex container should be spaced around',
    },
    spaceEvenly: {
      control: 'boolean',
      description: 'Whether the flex container should be spaced evenly',
    },
    reverse: {
      control: 'boolean',
      description: 'Whether the flex container should be reversed',
    },
    responsive: {
      control: 'boolean',
      description: 'Whether the flex container should be responsive',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Flex>;

const Box = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      background: 'var(--phork-primary-color, #1976d2)',
      color: 'white',
      padding: '16px',
      borderRadius: '4px',
      minWidth: '100px',
      textAlign: 'center',
    }}
  >
    {children}
  </div>
);

export const Default: Story = {
  args: {
    children: (
      <>
        <Box>Box 1</Box>
        <Box>Box 2</Box>
        <Box>Box 3</Box>
      </>
    ),
  },
};

export const Direction: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <h3>Row (default)</h3>
        <Flex>
          <Box>Box 1</Box>
          <Box>Box 2</Box>
          <Box>Box 3</Box>
        </Flex>
      </div>
      <div>
        <h3>Column</h3>
        <Flex direction="column">
          <Box>Box 1</Box>
          <Box>Box 2</Box>
          <Box>Box 3</Box>
        </Flex>
      </div>
    </div>
  ),
};

export const Alignment: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <h3>Flex Start</h3>
        <Flex align="flex-start" style={{ height: '100px' }}>
          <Box>Box 1</Box>
          <Box>Box 2</Box>
          <Box>Box 3</Box>
        </Flex>
      </div>
      <div>
        <h3>Center</h3>
        <Flex align="center" style={{ height: '100px' }}>
          <Box>Box 1</Box>
          <Box>Box 2</Box>
          <Box>Box 3</Box>
        </Flex>
      </div>
      <div>
        <h3>Flex End</h3>
        <Flex align="flex-end" style={{ height: '100px' }}>
          <Box>Box 1</Box>
          <Box>Box 2</Box>
          <Box>Box 3</Box>
        </Flex>
      </div>
    </div>
  ),
};

export const Justify: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <h3>Space Between</h3>
        <Flex justify="space-between">
          <Box>Box 1</Box>
          <Box>Box 2</Box>
          <Box>Box 3</Box>
        </Flex>
      </div>
      <div>
        <h3>Center</h3>
        <Flex justify="center">
          <Box>Box 1</Box>
          <Box>Box 2</Box>
          <Box>Box 3</Box>
        </Flex>
      </div>
      <div>
        <h3>Space Around</h3>
        <Flex justify="space-around">
          <Box>Box 1</Box>
          <Box>Box 2</Box>
          <Box>Box 3</Box>
        </Flex>
      </div>
    </div>
  ),
};

export const Gap: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <h3>Small Gap</h3>
        <Flex gap="sm">
          <Box>Box 1</Box>
          <Box>Box 2</Box>
          <Box>Box 3</Box>
        </Flex>
      </div>
      <div>
        <h3>Medium Gap</h3>
        <Flex gap="md">
          <Box>Box 1</Box>
          <Box>Box 2</Box>
          <Box>Box 3</Box>
        </Flex>
      </div>
      <div>
        <h3>Large Gap</h3>
        <Flex gap="lg">
          <Box>Box 1</Box>
          <Box>Box 2</Box>
          <Box>Box 3</Box>
        </Flex>
      </div>
    </div>
  ),
};

export const Wrap: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <h3>No Wrap</h3>
        <Flex style={{ width: '300px' }}>
          <Box>Box 1</Box>
          <Box>Box 2</Box>
          <Box>Box 3</Box>
          <Box>Box 4</Box>
          <Box>Box 5</Box>
        </Flex>
      </div>
      <div>
        <h3>Wrap</h3>
        <Flex wrap="wrap" style={{ width: '300px' }}>
          <Box>Box 1</Box>
          <Box>Box 2</Box>
          <Box>Box 3</Box>
          <Box>Box 4</Box>
          <Box>Box 5</Box>
        </Flex>
      </div>
    </div>
  ),
};

export const Responsive: Story = {
  render: () => (
    <Flex responsive style={{ border: '1px solid var(--phork-border-color, #ddd)', padding: '16px' }}>
      <Box>Box 1</Box>
      <Box>Box 2</Box>
      <Box>Box 3</Box>
    </Flex>
  ),
};

export const Center: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <h3>Center Both</h3>
        <Flex center style={{ height: '100px', border: '1px solid var(--phork-border-color, #ddd)' }}>
          <Box>Centered Box</Box>
        </Flex>
      </div>
      <div>
        <h3>Center Vertical</h3>
        <Flex centerVertical style={{ height: '100px', border: '1px solid var(--phork-border-color, #ddd)' }}>
          <Box>Vertically Centered Box</Box>
        </Flex>
      </div>
      <div>
        <h3>Center Horizontal</h3>
        <Flex centerHorizontal style={{ height: '100px', border: '1px solid var(--phork-border-color, #ddd)' }}>
          <Box>Horizontally Centered Box</Box>
        </Flex>
      </div>
    </div>
  ),
}; 