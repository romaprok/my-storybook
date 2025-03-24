import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '../basic/Select';
import { Typography } from '../basic/Typography';

const meta = {
  title: 'Example/Select',
  component: Select,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const countries = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
  { value: 'au', label: 'Australia' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'jp', label: 'Japan' },
];

const languages = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Spanish' },
  { value: 'fr', label: 'French' },
  { value: 'de', label: 'German' },
  { value: 'it', label: 'Italian' },
  { value: 'pt', label: 'Portuguese' },
  { value: 'ru', label: 'Russian' },
  { value: 'zh', label: 'Chinese' },
];

export const ProfileSettings: Story = {
  name: 'Profile Settings',
  args: {
    placeholder: 'Select country',
    options: countries,
  },
  render: () => (
    <div style={{ maxWidth: '500px', padding: '2rem', border: '1px solid #eee', borderRadius: '8px' }}>
      <Typography variant="h5" gutterBottom>Profile Settings</Typography>
      
      <div style={{ display: 'grid', gap: '1rem' }}>
        <Select
          label="Country"
          placeholder="Select your country"
          options={countries}
          required
          helperText="Your primary location"
        />
        
        <Select
          label="Language"
          placeholder="Select preferred language"
          options={languages}
          required
          helperText="Interface language"
        />
        
        <Select
          label="Time Zone"
          placeholder="Select time zone"
          options={[
            { value: 'utc-8', label: 'Pacific Time (UTC-8)' },
            { value: 'utc-5', label: 'Eastern Time (UTC-5)' },
            { value: 'utc+0', label: 'GMT (UTC+0)' },
            { value: 'utc+1', label: 'Central European Time (UTC+1)' },
            { value: 'utc+8', label: 'China Standard Time (UTC+8)' },
          ]}
          helperText="Used for scheduling and notifications"
        />
      </div>
    </div>
  ),
};

const categories = [
  { value: 'electronics', label: 'Electronics' },
  { value: 'clothing', label: 'Clothing' },
  { value: 'books', label: 'Books' },
  { value: 'home', label: 'Home & Garden' },
];

export const ProductFilters: Story = {
  name: 'Product Filters',
  args: {
    placeholder: 'Select category',
    options: categories,
  },
  render: () => (
    <div style={{ maxWidth: '800px' }}>
      <Typography variant="h5" gutterBottom>Filter Products</Typography>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
        <Select
          label="Category"
          placeholder="All Categories"
          options={categories}
          size="small"
        />
        
        <Select
          label="Price Range"
          placeholder="Select range"
          options={[
            { value: '0-50', label: '$0 - $50' },
            { value: '50-100', label: '$50 - $100' },
            { value: '100-200', label: '$100 - $200' },
            { value: '200+', label: '$200+' },
          ]}
          size="small"
        />
        
        <Select
          label="Brand"
          placeholder="All Brands"
          options={[
            { value: 'apple', label: 'Apple' },
            { value: 'samsung', label: 'Samsung' },
            { value: 'sony', label: 'Sony' },
            { value: 'lg', label: 'LG' },
          ]}
          size="small"
        />
        
        <Select
          label="Rating"
          placeholder="Any Rating"
          options={[
            { value: '4+', label: '4+ Stars' },
            { value: '3+', label: '3+ Stars' },
            { value: '2+', label: '2+ Stars' },
            { value: '1+', label: '1+ Stars' },
          ]}
          size="small"
        />
      </div>
    </div>
  ),
};

export const ValidationStates: Story = {
  name: 'Validation States',
  args: {
    placeholder: 'Select option',
    options: countries,
  },
  render: () => (
    <div style={{ maxWidth: '400px', display: 'grid', gap: '1rem' }}>
      <Select
        label="Success State"
        placeholder="Select option"
        options={countries}
        value="us"
        color="success"
        helperText="Valid selection"
      />
      
      <Select
        label="Error State"
        placeholder="Select option"
        options={countries}
        color="error"
        helperText="Please select a country"
        required
      />
      
      <Select
        label="Warning State"
        placeholder="Select option"
        options={countries}
        value="uk"
        color="warning"
        helperText="This country has limited support"
      />
      
      <Select
        label="Disabled State"
        placeholder="Select option"
        options={countries}
        value="us"
        disabled
        helperText="This field cannot be edited"
      />
    </div>
  ),
}; 