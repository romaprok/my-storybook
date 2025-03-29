# Component Library

A modern, accessible, and customizable React component library built with TypeScript and Storybook.

## Features

- 🎨 Modern design system with customizable themes
- ♿️ Fully accessible components (WCAG 2.1 compliant)
- 📱 Responsive and mobile-friendly
- 🌐 RTL support
- 🎯 TypeScript support
- 📚 Comprehensive documentation
- ⚡️ Lightweight and performant

## Demo
You can view the live Storybook components demo here: [Storybook Demo](https://romaprok.github.io/my-storybook)

## Components

- Button
- Typography
- Input
- Checkbox
- Radio
- Select
- Textarea

## Getting Started

### Installation

```bash
npm install @your-org/component-library
```

### Usage

```jsx
import { Button } from '@your-org/component-library';

function App() {
  return (
    <Button variant="primary" size="medium">
      Click me
    </Button>
  );
}
```

## Development

### Prerequisites

- Node.js >= 14
- npm >= 7

### Setup

1. Clone the repository
```bash
git clone https://github.com/your-username/component-library.git
cd component-library
```

2. Install dependencies
```bash
npm install
```

3. Start Storybook
```bash
npm run storybook
```

### Testing

Run component tests:
```bash
npm run test-storybook
```

### Building

Build the library:
```bash
npm run build
```

Build Storybook:
```bash
npm run build-storybook
```

### Deployment

Deploy Storybook to GitHub Pages:
```bash
npm run deploy-storybook
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Design Tokens

The component library uses a comprehensive set of design tokens for consistent styling:

- Colors
- Typography
- Spacing
- Borders
- Shadows
- Transitions

## Accessibility

All components are built with accessibility in mind and follow WCAG 2.1 guidelines:

- Proper ARIA attributes
- Keyboard navigation
- Screen reader support
- Color contrast compliance
- Focus management

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
