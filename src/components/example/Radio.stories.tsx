import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from '../basic/Radio';
import { Typography } from '../basic/Typography';

const meta = {
  title: 'Example/Radio',
  component: Radio,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PaymentMethods: Story = {
  name: 'Payment Methods',
  args: {
    name: 'payment',
  },
  render: () => (
    <div style={{ maxWidth: '500px', padding: '2rem', border: '1px solid #eee', borderRadius: '8px' }}>
      <Typography variant="h5" gutterBottom>Select Payment Method</Typography>
      
      <div style={{ display: 'grid', gap: '1rem' }}>
        <Radio
          name="payment"
          label="Credit Card"
          value="credit"
          defaultChecked
          helperText="Visa, Mastercard, American Express"
        />
        
        <Radio
          name="payment"
          label="PayPal"
          value="paypal"
          helperText="Fast and secure payment"
        />
        
        <Radio
          name="payment"
          label="Bank Transfer"
          value="bank"
          helperText="3-5 business days to process"
        />
        
        <Radio
          name="payment"
          label="Cryptocurrency"
          value="crypto"
          disabled
          helperText="Coming soon"
        />
      </div>
    </div>
  ),
};

export const ShippingOptions: Story = {
  name: 'Shipping Options',
  args: {
    name: 'shipping',
  },
  render: () => (
    <div style={{ maxWidth: '500px' }}>
      <Typography variant="h5" gutterBottom>Choose Shipping Method</Typography>
      
      <div style={{ display: 'grid', gap: '1rem' }}>
        <Radio
          name="shipping"
          label="Standard Shipping"
          value="standard"
          defaultChecked
          color="primary"
          helperText="5-7 business days (Free)"
        />
        
        <Radio
          name="shipping"
          label="Express Shipping"
          value="express"
          color="secondary"
          helperText="2-3 business days (+$9.99)"
        />
        
        <Radio
          name="shipping"
          label="Next Day Delivery"
          value="next-day"
          color="success"
          helperText="Guaranteed next business day (+$19.99)"
        />
      </div>
    </div>
  ),
};

export const SizePreferences: Story = {
  name: 'Size Preferences',
  args: {
    name: 'size',
  },
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <Typography variant="h5" gutterBottom>Select Display Size</Typography>
      
      <div style={{ display: 'grid', gap: '0.5rem' }}>
        <Radio
          name="size"
          label="Compact"
          value="compact"
          size="small"
          helperText="Optimized for small screens"
        />
        
        <Radio
          name="size"
          label="Regular"
          value="regular"
          size="medium"
          defaultChecked
          helperText="Default size"
        />
        
        <Radio
          name="size"
          label="Comfortable"
          value="comfortable"
          size="large"
          helperText="More spacious layout"
        />
      </div>
    </div>
  ),
};

export const ColorThemes: Story = {
  name: 'Color Themes',
  args: {
    name: 'theme',
  },
  render: () => (
    <div style={{ maxWidth: '500px' }}>
      <Typography variant="h5" gutterBottom>Choose Theme</Typography>
      
      <div style={{ display: 'grid', gap: '1rem' }}>
        <Radio
          name="theme"
          label="Light Theme"
          value="light"
          defaultChecked
          color="primary"
          labelPosition="right"
        />
        
        <Radio
          name="theme"
          label="Dark Theme"
          value="dark"
          color="secondary"
          labelPosition="right"
        />
        
        <Radio
          name="theme"
          label="System Theme"
          value="system"
          color="primary"
          labelPosition="right"
          helperText="Follows your system preferences"
        />
        
        <Radio
          name="theme"
          label="High Contrast"
          value="contrast"
          color="warning"
          labelPosition="right"
          helperText="Enhanced visibility"
        />
      </div>
    </div>
  ),
}; 