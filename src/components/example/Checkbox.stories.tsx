import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../basic/Checkbox';
import { Typography } from '../basic/Typography';

const meta = {
  title: 'Example/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrivacySettings: Story = {
  name: 'Privacy Settings',
  args: {
    label: 'Privacy Settings',
  },
  render: () => (
    <div style={{ maxWidth: '600px' }}>
      <Typography variant="h5" gutterBottom>Privacy Preferences</Typography>
      
      <div style={{ display: 'grid', gap: '1rem' }}>
        <Checkbox
          label="Essential Cookies"
          helperText="Required for the website to function properly"
          checked
          disabled
        />
        
        <Checkbox
          label="Analytics Cookies"
          helperText="Help us understand how you use our website"
          defaultChecked
        />
        
        <Checkbox
          label="Marketing Cookies"
          helperText="Allow us to personalize advertisements"
          color="secondary"
        />
        
        <Checkbox
          label="Social Media Cookies"
          helperText="Enable social media features"
          color="secondary"
        />
      </div>
    </div>
  ),
};

export const TodoList: Story = {
  name: 'Todo List',
  args: {
    label: 'Todo',
  },
  render: () => (
    <div style={{ maxWidth: '500px' }}>
      <Typography variant="h5" gutterBottom>Project Tasks</Typography>
      
      <div style={{ display: 'grid', gap: '0.5rem' }}>
        <Checkbox
          label="Design system setup"
          checked
          size="small"
        />
        
        <Checkbox
          label="Component documentation"
          checked
          size="small"
        />
        
        <Checkbox
          label="Accessibility testing"
          indeterminate
          size="small"
          helperText="2/4 tests completed"
        />
        
        <Checkbox
          label="Performance optimization"
          size="small"
        />
        
        <Checkbox
          label="Cross-browser testing"
          size="small"
        />
      </div>
    </div>
  ),
};

export const SubscriptionForm: Story = {
  name: 'Subscription Form',
  args: {
    label: 'Subscription',
  },
  render: () => (
    <div style={{ maxWidth: '500px', padding: '2rem', border: '1px solid #eee', borderRadius: '8px' }}>
      <Typography variant="h5" gutterBottom>Newsletter Subscription</Typography>
      
      <div style={{ display: 'grid', gap: '1rem' }}>
        <Checkbox
          label="Subscribe to weekly newsletter"
          helperText="Get the latest updates and news"
          color="primary"
          size="large"
        />
        
        <Typography variant="body2" gutterBottom>Preferences:</Typography>
        
        <div style={{ paddingLeft: '1rem' }}>
          <Checkbox
            label="Product updates"
            defaultChecked
          />
          
          <Checkbox
            label="Industry news"
            defaultChecked
          />
          
          <Checkbox
            label="Company announcements"
          />
          
          <Checkbox
            label="Event invitations"
          />
        </div>
      </div>
    </div>
  ),
};

export const SwitchVariants: Story = {
  name: 'Switch Variants',
  args: {
    label: 'Switch',
  },
  render: () => (
    <div style={{ maxWidth: '500px' }}>
      <Typography variant="h5" gutterBottom>App Settings</Typography>
      
      <div style={{ display: 'grid', gap: '1rem' }}>
        <Checkbox
          variant="switch"
          label="Dark Mode"
          defaultChecked
          color="primary"
        />
        
        <Checkbox
          variant="switch"
          label="Push Notifications"
          defaultChecked
          color="success"
        />
        
        <Checkbox
          variant="switch"
          label="Auto Updates"
          color="secondary"
        />
        
        <Checkbox
          variant="switch"
          label="Beta Features"
          helperText="Warning: May contain bugs"
          color="warning"
        />
        
        <Checkbox
          variant="switch"
          label="Maintenance Mode"
          disabled
          helperText="Contact admin to enable"
          color="error"
        />
      </div>
    </div>
  ),
}; 