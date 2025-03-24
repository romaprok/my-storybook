import React from 'react';
import { Button } from '../../basic/Button';
import { Typography } from '../../basic/Typography';
import styles from './Button.module.css';

export const ButtonExample: React.FC = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className={styles.container}>
      <Typography variant="h1" className={styles.title}>
        Button Examples
      </Typography>

      <section className={styles.section}>
        <Typography variant="h2">Action Buttons</Typography>
        <div className={styles.group}>
          <Button variant="primary" onClick={handleClick}>
            Save Changes
          </Button>
          <Button variant="outline" onClick={handleClick}>
            Cancel
          </Button>
          <Button variant="ghost" onClick={handleClick}>
            Reset
          </Button>
        </div>
      </section>

      <section className={styles.section}>
        <Typography variant="h2">Loading States</Typography>
        <div className={styles.group}>
          <Button variant="primary" loading>
            Loading...
          </Button>
          <Button variant="outline" loading>
            Processing...
          </Button>
        </div>
      </section>

      <section className={styles.section}>
        <Typography variant="h2">Disabled States</Typography>
        <div className={styles.group}>
          <Button variant="primary" disabled>
            Cannot Submit
          </Button>
          <Button variant="outline" disabled>
            Not Available
          </Button>
        </div>
      </section>

      <section className={styles.section}>
        <Typography variant="h2">With Icons</Typography>
        <div className={styles.group}>
          <Button variant="primary">
            <span className={styles.icon}>➕</span>
            Add Item
          </Button>
          <Button variant="outline">
            <span className={styles.icon}>🔄</span>
            Refresh
          </Button>
          <Button variant="ghost">
            <span className={styles.icon}>🗑️</span>
            Delete
          </Button>
        </div>
      </section>

      <section className={styles.section}>
        <Typography variant="h2">Size Variants</Typography>
        <div className={styles.group}>
          <Button variant="primary" size="small">
            Small
          </Button>
          <Button variant="primary" size="medium">
            Medium
          </Button>
          <Button variant="primary" size="large">
            Large
          </Button>
        </div>
      </section>

      <section className={styles.section}>
        <Typography variant="h2">Real-world Examples</Typography>
        <div className={styles.card}>
          <Typography variant="h6">Confirmation Dialog</Typography>
          <Typography variant="body1" className={styles.cardText}>
            Are you sure you want to delete this item? This action cannot be undone.
          </Typography>
          <div className={styles.cardActions}>
            <Button variant="outline">Cancel</Button>
            <Button variant="primary">Confirm Delete</Button>
          </div>
        </div>

        <div className={styles.card}>
          <Typography variant="h6">Form Actions</Typography>
          <div className={styles.formExample}>
            <input type="text" placeholder="Enter your email" className={styles.input} />
            <Button variant="primary">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
}; 