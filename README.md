# 🦷 Biome Demo

A demonstration project showcasing **Biome** - the fast, modern formatter and linter for JavaScript, TypeScript, JSON, and more!

## 🚀 What is Biome?

[Biome](https://biomejs.dev/) is a performant toolchain for web projects. It aims to provide developer tools to maintain the health of your projects.

### Key Features

- ⚡ **Blazingly Fast** - Written in Rust, 25x faster than Prettier
- 🎯 **All-in-One** - Formatter + Linter + Import Organizer in one tool
- 🔧 **Zero Config** - Works out of the box with sensible defaults
- 📦 **Multi-language** - Supports JS, TS, JSX, TSX, JSON, CSS, and more
- 🔄 **Drop-in Replacement** - Compatible with Prettier & ESLint rules

---

## 📁 Project Structure

```
Demo-Biome/
├── biome.json              # Biome configuration
├── package.json            # npm scripts for running Biome
├── README.md               # This file
└── src/
    └── examples/
        ├── formatting-demo.js   # 🎨 Formatting issues
        ├── lint-demo.js         # 🔍 Linting issues
        ├── imports-demo.js      # 📦 Import sorting
        ├── typescript-demo.ts   # 🔷 TypeScript support
        ├── react-demo.jsx       # ⚛️ React/JSX support
        └── json-demo.json       # 📄 JSON formatting
```

---

## 🎮 Demo Commands

### 1️⃣ Check Everything (Format + Lint)

Shows all issues without making changes:

```bash
npm run check
```

### 2️⃣ Fix Everything Automatically

Fixes all auto-fixable issues:

```bash
npm run check:fix
```

### 3️⃣ Format Only

Check formatting issues:

```bash
npm run format
```

Fix formatting issues:

```bash
npm run format:fix
```

### 4️⃣ Lint Only

Check lint issues:

```bash
npm run lint
```

Fix lint issues:

```bash
npm run lint:fix
```

### 5️⃣ CI Mode

Strict check for CI pipelines (fails on any issue):

```bash
npm run ci
```

---

## 🎯 Demo Files Explained

### 🎨 `formatting-demo.js`
Demonstrates formatting issues:
- Inconsistent spacing
- Missing semicolons
- Long lines
- Inconsistent quotes
- Poor indentation

### 🔍 `lint-demo.js`
Demonstrates lint issues:
- Unused variables
- Using `var` instead of `const/let`
- Loose equality (`==` vs `===`)
- `debugger` statements
- Empty blocks

### 📦 `imports-demo.js`
Demonstrates import organization:
- Unsorted imports
- Mixed import styles
- Grouped imports (third-party vs local)

### 🔷 `typescript-demo.ts`
Demonstrates TypeScript support:
- Interface/Type formatting
- Generic functions
- Class formatting
- Async functions

### ⚛️ `react-demo.jsx`
Demonstrates React/JSX support:
- Component formatting
- JSX indentation
- Hook usage
- Event handlers

### 📄 `json-demo.json`
Demonstrates JSON formatting:
- Proper indentation
- Consistent spacing
- Key sorting (optional)

---

## ⚙️ Configuration

The `biome.json` file contains all Biome settings:

```json
{
  "formatter": {
    "enabled": true,
    "indentStyle": "tab",
    "lineWidth": 100
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true
    }
  },
  "javascript": {
    "formatter": {
      "quoteStyle": "double",
      "semicolons": "always"
    }
  }
}
```

### Key Configuration Options

| Option | Description | Default |
|--------|-------------|---------|
| `indentStyle` | `"tab"` or `"space"` | `"tab"` |
| `indentWidth` | Number of spaces (if using spaces) | `2` |
| `lineWidth` | Max line length | `80` |
| `quoteStyle` | `"double"` or `"single"` | `"double"` |
| `semicolons` | `"always"` or `"asNeeded"` | `"always"` |

---

## 🔄 Migration from ESLint/Prettier

Biome can automatically migrate your existing config:

```bash
# Migrate from ESLint
npx @biomejs/biome migrate eslint

# Migrate from Prettier
npx @biomejs/biome migrate prettier
```

---

## 🛠️ VS Code Integration

Install the [Biome VS Code Extension](https://marketplace.visualstudio.com/items?itemName=biomejs.biome) for:

- Real-time error highlighting
- Format on save
- Quick fixes
- Code actions

### Recommended VS Code Settings

```json
{
  "editor.defaultFormatter": "biomejs.biome",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "quickfix.biome": "explicit",
    "source.organizeImports.biome": "explicit"
  }
}
```

---

## 📊 Performance Comparison

| Tool | Time (1000 files) |
|------|-------------------|
| **Biome** | ~0.5s |
| Prettier | ~12s |
| ESLint | ~15s |

*Biome is approximately 25x faster than traditional tools!*

---

## 📚 Resources

- 📖 [Biome Documentation](https://biomejs.dev/docs/)
- 🔧 [Configuration Reference](https://biomejs.dev/reference/configuration/)
- 📜 [Lint Rules](https://biomejs.dev/linter/rules/)
- 💬 [Discord Community](https://discord.gg/BypW39g6Yc)
- 🐙 [GitHub Repository](https://github.com/biomejs/biome)

---

## 🎬 Presentation Demo Steps

1. **Show the Problem**: Run `npm run check` to see all issues
2. **Explain Issues**: Walk through each file type
3. **Fix Everything**: Run `npm run check:fix`
4. **Show the Result**: Run `npm run check` again (should be clean!)
5. **Discuss Speed**: Compare with ESLint/Prettier
6. **Show VS Code Integration**: Real-time linting and formatting

---

Made with ❤️ for demonstrating Biome
