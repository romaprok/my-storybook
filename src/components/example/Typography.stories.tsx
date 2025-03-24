import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '../basic/Typography';

const meta = {
  title: 'Example/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BlogPost: Story = {
  name: 'Blog Post Layout',
  args: {
    children: 'Blog Post',
  },
  render: () => (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Typography variant="h1">The Future of Web Development</Typography>
      <Typography variant="body2" color="secondary">
        Posted by John Doe • March 24, 2024
      </Typography>
      
      <div style={{ margin: '2rem 0' }}>
        <Typography variant="body1">
          The web development landscape is constantly evolving. New frameworks, tools, and best practices emerge regularly, 
          making it both exciting and challenging to stay current in this field.
        </Typography>

        <Typography variant="h2" gutterBottom>
          Modern Development Practices
        </Typography>
        
        <Typography variant="body1" gutterBottom>
          Today's web development emphasizes component-based architecture, type safety, and developer experience. 
          Tools like TypeScript, React, and Storybook have become essential parts of modern development workflows.
        </Typography>

        <Typography variant="h3" gutterBottom>
          Component Libraries
        </Typography>

        <Typography variant="body1" gutterBottom>
          Building a robust component library helps teams maintain consistency and speed up development. 
          Key benefits include:
        </Typography>

        <ul style={{ margin: '1rem 0', paddingLeft: '2rem' }}>
          {['Reusability', 'Maintainability', 'Consistency', 'Documentation'].map((item) => (
            <li key={item}>
              <Typography variant="body1">{item}</Typography>
            </li>
          ))}
        </ul>
      </div>
    </article>
  ),
};

export const ProductCard: Story = {
  name: 'Product Card',
  args: {
    children: 'Product',
  },
  render: () => (
    <div style={{ 
      maxWidth: '300px',
      padding: '1rem',
      border: '1px solid #eee',
      borderRadius: '8px',
    }}>
      <Typography variant="h6" gutterBottom>Premium Wireless Headphones</Typography>
      <Typography variant="body2" color="secondary" gutterBottom>
        High-quality audio experience
      </Typography>
      <Typography variant="h4" gutterBottom>
        $299.99
      </Typography>
      <Typography variant="body2">
        ★★★★★ (125 reviews)
      </Typography>
    </div>
  ),
};

export const ErrorMessage: Story = {
  name: 'Error Message',
  args: {
    children: 'Error',
  },
  render: () => (
    <div style={{
      padding: '1rem',
      border: '1px solid #ff4d4f',
      borderRadius: '4px',
      backgroundColor: '#fff2f0',
    }}>
      <Typography variant="h6" color="error" gutterBottom>
        Unable to Process Request
      </Typography>
      <Typography variant="body2" color="error">
        An error occurred while processing your request. Please try again later or contact support if the issue persists.
      </Typography>
    </div>
  ),
};

export const DashboardStats: Story = {
  name: 'Dashboard Statistics',
  args: {
    children: 'Stats',
  },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
      {[
        { label: 'Total Users', value: '1,234', change: '+12%' },
        { label: 'Revenue', value: '$45,678', change: '+8%' },
        { label: 'Active Projects', value: '23', change: '-2%' },
      ].map((stat) => (
        <div
          key={stat.label}
          style={{
            padding: '1rem',
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          <Typography variant="body2" color="secondary" gutterBottom>
            {stat.label}
          </Typography>
          <Typography variant="h4" gutterBottom>
            {stat.value}
          </Typography>
          <Typography
            variant="body2"
            color={stat.change.startsWith('+') ? 'success' : 'error'}
          >
            {stat.change} from last month
          </Typography>
        </div>
      ))}
    </div>
  ),
}; 