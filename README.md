# WIP

---

# Plotline Editor

A modern rich text editor built with React, TypeScript, and Lexical, designed for creating paginated documents with professional layout controls.

## Features

- **Rich Text Editing**: Built on Meta's Lexical framework for robust text editing capabilities
- **Pagination System**: Automatic page breaks and multi-page document layout
- **Page Layout Controls**: Configurable page dimensions, margins, and spacing
- **Custom Text Nodes**: Enhanced paragraph nodes with customizable margin controls
- **Theme Support**: Light and dark mode with seamless switching
- **UI**: Clean interface with floating sidebar navigation
- **Real-time Preview**: Live document rendering with page-accurate layout

## Architecture

- **Editor Core**: Lexical-based rich text editor with custom node extensions
- **State Management**: React Context providers for pagination, page setup, and theming
- **UI Components**: Radix UI primitives with Tailwind CSS styling
- **Custom Nodes**: Extended paragraph nodes with advanced formatting options
- **Responsive Layout**: Adaptive design with sidebar navigation

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Editor**: Lexical (Meta's rich text framework)
- **Styling**: Tailwind CSS v4, Radix UI
- **Development**: ESLint, TypeScript strict mode
- **Build**: Vite with hot module replacement

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

- `src/components/Editor.tsx` - Main Lexical editor implementation
- `src/components/pages/` - Pagination and page layout components
- `src/nodes/` - Custom Lexical node definitions
- `src/lib/` - Utility functions and configurations

## Development

The project uses modern React patterns with TypeScript for type safety. The editor is built around Lexical's plugin architecture, allowing for extensible functionality and custom node types.

Key development features:
- Hot module replacement for fast development
- TypeScript strict mode for type safety
- ESLint for code quality
- Tree view plugin for editor state debugging
