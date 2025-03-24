import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta = {
  title: 'Components/Basic/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

// Heading Variants
export const Heading1: Story = {
  args: {
    variant: 'h1',
    children: 'Heading 1',
  },
};

export const Heading2: Story = {
  args: {
    variant: 'h2',
    children: 'Heading 2',
  },
};

export const Heading3: Story = {
  args: {
    variant: 'h3',
    children: 'Heading 3',
  },
};

export const Heading4: Story = {
  args: {
    variant: 'h4',
    children: 'Heading 4',
  },
};

export const Heading5: Story = {
  args: {
    variant: 'h5',
    children: 'Heading 5',
  },
};

export const Heading6: Story = {
  args: {
    variant: 'h6',
    children: 'Heading 6',
  },
};

// Body Text Variants
export const Body1: Story = {
  args: {
    variant: 'body1',
    children: 'Body 1 text with normal weight and size.',
  },
};

export const Body2: Story = {
  args: {
    variant: 'body2',
    children: 'Body 2 text with smaller size.',
  },
};

// Special Variants
export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'Caption text',
  },
};

export const Overline: Story = {
  args: {
    variant: 'overline',
    children: 'OVERLINE TEXT',
  },
};

// Colors
export const PrimaryColor: Story = {
  args: {
    variant: 'body1',
    color: 'primary',
    children: 'Primary color text',
  },
};

export const SecondaryColor: Story = {
  args: {
    variant: 'body1',
    color: 'secondary',
    children: 'Secondary color text',
  },
};

export const ErrorColor: Story = {
  args: {
    variant: 'body1',
    color: 'error',
    children: 'Error color text',
  },
};

export const SuccessColor: Story = {
  args: {
    variant: 'body1',
    color: 'success',
    children: 'Success color text',
  },
};

export const WarningColor: Story = {
  args: {
    variant: 'body1',
    color: 'warning',
    children: 'Warning color text',
  },
};

export const InfoColor: Story = {
  args: {
    variant: 'body1',
    color: 'info',
    children: 'Info color text',
  },
};

// Alignment
export const LeftAlign: Story = {
  args: {
    variant: 'h4',
    align: 'left',
    children: 'Left Aligned Text',
  },
};

export const CenterAlign: Story = {
  args: {
    variant: 'h4',
    align: 'center',
    children: 'Center Aligned Text',
  },
};

export const RightAlign: Story = {
  args: {
    variant: 'h4',
    align: 'right',
    children: 'Right Aligned Text',
  },
};

// Font Weights
export const LightWeight: Story = {
  args: {
    variant: 'h4',
    weight: 'light',
    children: 'Light Weight Text',
  },
};

export const RegularWeight: Story = {
  args: {
    variant: 'h4',
    weight: 'regular',
    children: 'Regular Weight Text',
  },
};

export const MediumWeight: Story = {
  args: {
    variant: 'h4',
    weight: 'medium',
    children: 'Medium Weight Text',
  },
};

export const BoldWeight: Story = {
  args: {
    variant: 'h4',
    weight: 'bold',
    children: 'Bold Weight Text',
  },
};

// Utilities
export const NoWrap: Story = {
  args: {
    variant: 'body1',
    noWrap: true,
    children: 'This is a very long text that will be truncated with an ellipsis when it reaches the container width.',
  },
};

export const WithGutterBottom: Story = {
  args: {
    variant: 'h4',
    gutterBottom: true,
    children: 'Heading with Bottom Margin',
  },
};

// Component Override
export const CustomComponent: Story = {
  args: {
    variant: 'h4',
    component: 'div',
    children: 'This is an h4 variant rendered as a div',
  },
};

// Text Effects
export const Underline: Story = {
  args: {
    variant: 'body1',
    decoration: 'underline',
    children: 'Underlined text',
  },
};

export const LineThrough: Story = {
  args: {
    variant: 'body1',
    decoration: 'line-through',
    children: 'Line-through text',
  },
};

// Text Transform
export const Uppercase: Story = {
  args: {
    variant: 'body1',
    transform: 'uppercase',
    children: 'Uppercase text',
  },
};

export const Lowercase: Story = {
  args: {
    variant: 'body1',
    transform: 'lowercase',
    children: 'LOWERCASE TEXT',
  },
};

export const Capitalize: Story = {
  args: {
    variant: 'body1',
    transform: 'capitalize',
    children: 'capitalized text',
  },
};

// Line Height and Spacing
export const TightLineHeight: Story = {
  args: {
    variant: 'body1',
    lineHeight: 'tight',
    children: 'Text with tight line height.\nSecond line of text.\nThird line of text.',
  },
};

export const LooseLineHeight: Story = {
  args: {
    variant: 'body1',
    lineHeight: 'loose',
    children: 'Text with loose line height.\nSecond line of text.\nThird line of text.',
  },
};

export const TighterLetterSpacing: Story = {
  args: {
    variant: 'body1',
    letterSpacing: 'tighter',
    children: 'Text with tighter letter spacing',
  },
};

export const WiderLetterSpacing: Story = {
  args: {
    variant: 'body1',
    letterSpacing: 'wider',
    children: 'Text with wider letter spacing',
  },
};

// Truncation
export const SingleLineTruncate: Story = {
  args: {
    variant: 'body1',
    truncate: 'single',
    children: 'This is a very long text that will be truncated to a single line when it exceeds the container width.',
  },
};

export const MultiLineTruncate: Story = {
  args: {
    variant: 'body1',
    truncate: 'multi',
    truncateLines: 2,
    children: 'This is a very long text that will be truncated after two lines. It contains enough content to demonstrate the multi-line truncation feature effectively.',
  },
};

// Text Shadow
export const SmallShadow: Story = {
  args: {
    variant: 'h4',
    shadow: 'sm',
    children: 'Text with Small Shadow',
  },
};

export const LargeShadow: Story = {
  args: {
    variant: 'h4',
    shadow: 'lg',
    children: 'Text with Large Shadow',
  },
};

// Font Families
export const SerifFont: Story = {
  args: {
    variant: 'body1',
    fontFamily: 'serif',
    children: 'Text with serif font family',
  },
};

export const MonoFont: Story = {
  args: {
    variant: 'body1',
    fontFamily: 'mono',
    children: 'Text with monospace font',
  },
};

export const CustomFont: Story = {
  args: {
    variant: 'body1',
    fontFamily: 'custom',
    customFontFamily: 'Comic Sans MS, cursive',
    children: 'Text with custom font family',
  },
};

// Combined Examples
export const StyledHeading: Story = {
  args: {
    variant: 'h2',
    color: 'primary',
    weight: 'bold',
    transform: 'uppercase',
    letterSpacing: 'wide',
    children: 'Styled Heading Example',
  },
};

export const StyledParagraph: Story = {
  args: {
    variant: 'body1',
    color: 'secondary',
    lineHeight: 'relaxed',
    letterSpacing: 'wide',
    children: 'This is a styled paragraph with custom line height and letter spacing to demonstrate the combination of different typography properties.',
  },
}; 