# Skylence Design - Premium Web Agency

A modern, responsive web agency website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Beautiful, responsive design with smooth animations
- **TypeScript**: Full TypeScript support for better development experience
- **Performance Optimized**: Fast loading times and optimized images
- **SEO Friendly**: Proper meta tags and structured data
- **Accessible**: WCAG compliant design patterns
- **Mobile First**: Responsive design that works on all devices

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **UI Components**: Custom components with Radix UI primitives
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page with form
│   ├── expertise/         # Service expertise pages
│   ├── portfolio/         # Portfolio showcase
│   ├── pricing/           # Pricing plans
│   ├── services/          # Services overview
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── ui/               # UI components (Button, Input, etc.)
│   ├── navigation.tsx    # Navigation component
│   ├── footer.tsx        # Footer component
│   ├── error-boundary.tsx # Error handling
│   └── loading.tsx       # Loading states
└── lib/                  # Utility functions
    └── utils.ts          # Common utilities
```

## ✨ Recent Improvements

### 🐛 Bug Fixes
- **Navigation**: Fixed invalid HTML structure with Button inside Link
- **Form Handling**: Added proper form validation and error states
- **Image Sources**: Replaced missing images with proper URLs
- **TypeScript**: Added proper type definitions throughout
- **Mobile Menu**: Improved mobile navigation functionality

### 🚀 Performance Improvements
- **Image Optimization**: Used optimized image URLs from Pexels
- **Loading States**: Added loading indicators for better UX
- **Error Handling**: Implemented error boundaries for graceful error handling
- **Form Validation**: Added client-side validation with proper feedback

### 🎨 UI/UX Enhancements
- **Consistent Styling**: Unified color scheme and design patterns
- **Interactive Elements**: Added hover effects and transitions
- **Form Feedback**: Success/error messages for form submissions
- **Newsletter**: Functional newsletter subscription with validation
- **Button States**: Loading states for all interactive buttons

### 📱 Responsive Design
- **Mobile Navigation**: Improved mobile menu functionality
- **Touch Targets**: Proper sizing for mobile interactions
- **Flexible Layouts**: Responsive grid systems throughout
- **Typography**: Scalable text sizes for all screen sizes

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/skylence-design.git
cd skylence-design
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Key Features

### Contact Form
- Form validation with real-time feedback
- Success/error states
- Loading indicators
- Email validation

### Newsletter Subscription
- Email validation
- Success/error feedback
- Loading states
- Form reset after submission

### Navigation
- Responsive design
- Dropdown menus
- Active state indicators
- Smooth transitions

### Portfolio
- Project showcase with images
- Technology tags
- Category filtering
- Interactive hover effects

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment-specific configuration:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_CONTACT_EMAIL=hello@yourdomain.com
```

### Customization
- **Colors**: Update the color scheme in `tailwind.config.ts`
- **Content**: Modify content in respective page components
- **Images**: Replace placeholder images with your own
- **Contact Info**: Update contact information in components

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, email hello@skylencedesign.com or create an issue in this repository.

## 🎨 Design Credits

- Icons: [Lucide React](https://lucide.dev/)
- Images: [Pexels](https://www.pexels.com/)
- UI Components: Custom built with Radix UI primitives

---

Built with ❤️ by Skylence Design
