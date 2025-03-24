import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../basic/Input';
import { Typography } from '../basic/Typography';

const meta = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SearchBar: Story = {
  name: 'Search Bar',
  args: {
    placeholder: 'Search...',
  },
  render: () => (
    <div style={{ maxWidth: '600px' }}>
      <Input
        placeholder="Search products, categories, brands..."
        size="large"
        startIcon={<span>🔍</span>}
        endIcon={<span>⌘K</span>}
      />
    </div>
  ),
};

export const LoginForm: Story = {
  name: 'Login Form',
  args: {
    placeholder: 'Email',
  },
  render: () => (
    <div style={{ maxWidth: '400px', padding: '2rem', border: '1px solid #eee', borderRadius: '8px' }}>
      <Typography variant="h4" gutterBottom>Login</Typography>
      
      <div style={{ marginBottom: '1rem' }}>
        <Input
          label="Email"
          placeholder="Enter your email"
          type="email"
          required
          fullWidth
        />
      </div>
      
      <div style={{ marginBottom: '1rem' }}>
        <Input
          label="Password"
          placeholder="Enter your password"
          type="password"
          required
          fullWidth
          helperText="Must be at least 8 characters"
        />
      </div>
    </div>
  ),
};

export const PaymentForm: Story = {
  name: 'Payment Form',
  args: {
    placeholder: 'Card number',
  },
  render: () => (
    <div style={{ maxWidth: '500px', padding: '2rem', border: '1px solid #eee', borderRadius: '8px' }}>
      <Typography variant="h5" gutterBottom>Payment Details</Typography>
      
      <div style={{ marginBottom: '1rem' }}>
        <Input
          label="Card Number"
          placeholder="1234 5678 9012 3456"
          startIcon={<span>💳</span>}
          fullWidth
          required
        />
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
        <Input
          label="Expiry Date"
          placeholder="MM/YY"
          required
        />
        <Input
          label="CVC"
          placeholder="123"
          type="password"
          required
          helperText="3 or 4 digits"
        />
      </div>
      
      <div style={{ marginBottom: '1rem' }}>
        <Input
          label="Name on Card"
          placeholder="Enter the name on your card"
          fullWidth
          required
        />
      </div>
    </div>
  ),
};

export const ValidationStates: Story = {
  name: 'Validation States',
  args: {
    placeholder: 'Enter value',
  },
  render: () => (
    <div style={{ maxWidth: '400px', display: 'grid', gap: '1rem' }}>
      <Input
        label="Success State"
        value="john.doe@example.com"
        color="success"
        helperText="Email is valid"
        fullWidth
      />
      
      <Input
        label="Error State"
        value="invalid-email"
        color="error"
        helperText="Please enter a valid email address"
        fullWidth
      />
      
      <Input
        label="Warning State"
        value="temp@mailbox.test"
        color="warning"
        helperText="This is a temporary email service"
        fullWidth
      />
      
      <Input
        label="Disabled State"
        value="disabled@example.com"
        disabled
        helperText="This field cannot be edited"
        fullWidth
      />
    </div>
  ),
}; 