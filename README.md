# Bold Text Converter

A simple, fast, and clean single-page Next.js application that converts regular text into bold Unicode characters in real-time.

🔗 **Live Demo:** [https://your-domain.vercel.app](https://your-domain.vercel.app)

## ✨ Features

- **⚡ Real-time Conversion**: Text converts to bold Unicode as you type
- **📱 Fully Responsive**: Works perfectly on all devices and screen sizes
- **🌙 Dark Mode**: Toggle between light and dark themes
- **📋 One-Click Copy**: Copy converted text to clipboard instantly
- **📊 Text Statistics**: See character counts and conversion statistics
- **🔒 Privacy First**: All conversion happens locally in your browser
- **🚀 Lightning Fast**: Built with Next.js for optimal performance

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: TypeScript
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/UsmanGhias/bold-text.git
   cd bold-text
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Visit [http://localhost:3000](http://localhost:3000) to see the application.

## 📦 Project Structure

```
boldtext-converter/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main application page
├── components/
│   ├── DarkModeToggle.tsx   # Dark/light mode toggle
│   ├── TextInput.tsx        # Input textarea component
│   ├── OutputBox.tsx        # Bold text output and copy functionality
│   └── TextStats.tsx        # Text statistics display
├── lib/
│   └── convertToBold.ts     # Unicode bold conversion utility
├── public/
│   └── favicon.ico          # Favicon and other static assets
├── package.json
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🔧 How It Works

The app uses **Mathematical Bold Unicode** characters to create bold text that appears bold everywhere, not just with CSS styling.

### Character Mapping

- **Uppercase**: A-Z → 𝐀-𝐙 (U+1D400 to U+1D419)
- **Lowercase**: a-z → 𝐚-𝐳 (U+1D41A to U+1D433)  
- **Numbers**: 0-9 → 𝟎-𝟗 (U+1D7CE to U+1D7D7)

### Examples

| Input | Output |
|-------|--------|
| `Hello World!` | `𝐇𝐞𝐥𝐥𝐨 𝐖𝐨𝐫𝐥𝐝!` |
| `Bold Text 123` | `𝐁𝐨𝐥𝐝 𝐓𝐞𝐱𝐭 𝟏𝟐𝟑` |
| `Next.js App` | `𝐍𝐞𝐱𝐭.𝐣𝐬 𝐀𝐩𝐩` |

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy with Vercel**
   - Go to [vercel.com](https://vercel.com/)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy
   - Your app will be live at `https://your-app-name.vercel.app`

### Other Deployment Options

- **Netlify**: Works out of the box with Next.js
- **Railway**: Easy deployment with GitHub integration
- **Self-hosted**: Use `npm run build && npm start`

## ⚙️ Configuration Files

### `next.config.js`
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
```

### `tailwind.config.js`
Includes custom colors, animations, and dark mode support.

## 🎨 Customization

### Adding New Text Styles

1. **Create a new conversion function** in `lib/convertToBold.ts`
2. **Add UI toggle** in the main page component
3. **Update the OutputBox** component to handle multiple styles

### Changing Colors

Update the `tailwind.config.js` file to modify the color scheme:

```javascript
colors: {
  primary: {
    // Your custom color palette
  }
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by [boldtext.io](https://boldtext.io)
- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Lucide](https://lucide.dev/)

## 📞 Support

If you have any questions or run into issues, please open an issue on GitHub or contact us.

---

**Made with ❤️ and Next.js**