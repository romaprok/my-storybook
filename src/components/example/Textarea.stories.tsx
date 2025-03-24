import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '../basic/Textarea';
import { Typography } from '../basic/Typography';

const meta = {
  title: 'Example/Textarea',
  component: Textarea,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FeedbackForm: Story = {
  name: 'Feedback Form',
  args: {
    placeholder: 'Enter your feedback',
  },
  render: () => (
    <div style={{ maxWidth: '600px', padding: '2rem', border: '1px solid #eee', borderRadius: '8px' }}>
      <Typography variant="h5" gutterBottom>Product Feedback</Typography>
      
      <div style={{ display: 'grid', gap: '1rem' }}>
        <Textarea
          label="What do you like about our product?"
          placeholder="Share your positive experiences..."
          rows={4}
          helperText="Your feedback helps us improve"
          color="primary"
        />
        
        <Textarea
          label="What could be improved?"
          placeholder="Share your suggestions for improvement..."
          rows={4}
          helperText="Be specific and constructive"
          color="secondary"
        />
      </div>
    </div>
  ),
};

export const MessageComposer: Story = {
  name: 'Message Composer',
  args: {
    placeholder: 'Type your message',
  },
  render: () => (
    <div style={{ maxWidth: '500px' }}>
      <Typography variant="h5" gutterBottom>New Message</Typography>
      
      <div style={{ display: 'grid', gap: '1rem' }}>
        <Textarea
          label="Message"
          placeholder="Type your message here..."
          rows={6}
          helperText="Maximum 500 characters"
          maxLength={500}
          style={{ width: '100%' }}
        />
      </div>
    </div>
  ),
};

export const ValidationStates: Story = {
  name: 'Validation States',
  args: {
    placeholder: 'Enter text',
  },
  render: () => (
    <div style={{ maxWidth: '500px', display: 'grid', gap: '1rem' }}>
      <Textarea
        label="Success State"
        value="This is a valid response that meets all requirements."
        color="success"
        helperText="Response meets requirements"
        rows={3}
      />
      
      <Textarea
        label="Error State"
        value="Too short"
        color="error"
        helperText="Response must be at least 20 characters"
        rows={3}
        required
      />
      
      <Textarea
        label="Warning State"
        value="This response contains potentially sensitive information."
        color="warning"
        helperText="Review before submitting"
        rows={3}
      />
      
      <Textarea
        label="Disabled State"
        value="This field cannot be edited"
        disabled
        helperText="Contact support to make changes"
        rows={3}
      />
    </div>
  ),
};

export const CodeEditor: Story = {
  name: 'Code Editor',
  args: {
    placeholder: 'Enter code',
  },
  render: () => (
    <div style={{ maxWidth: '800px' }}>
      <Typography variant="h5" gutterBottom>Code Snippet</Typography>
      
      <div style={{ display: 'grid', gap: '1rem' }}>
        <Textarea
          label="HTML"
          placeholder="Enter HTML code..."
          value={`<div class="container">
  <h1>Hello World</h1>
  <p>This is a sample code snippet.</p>
</div>`}
          rows={6}
          style={{ fontFamily: 'monospace' }}
          helperText="HTML code example"
        />
        
        <Textarea
          label="CSS"
          placeholder="Enter CSS code..."
          value={`.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  color: #333;
  margin-bottom: 1rem;
}`}
          rows={8}
          style={{ fontFamily: 'monospace' }}
          helperText="CSS code example"
        />
      </div>
    </div>
  ),
}; 