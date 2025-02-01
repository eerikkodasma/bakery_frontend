# Bakery frontend

Bakery react application

## Technologies

Make sure you have the following installed on your system:

- Node.js (used v22.13.1)
- npm (11.1.0)
- React (19.0.0)
- TypeScript (5.7.3)
- Vite (6.0.11)
- TanStack Query (5.66.0)
- TanStack Router (1.98.4)
- TailWind CSS (4.0.1)

---

## Installation

### 1. Clone the repository

```bash
git clone <https://github.com/yourusername/your-repository-name.git>
cd <repository-name>
```

### 2. Install the dependencies

```bash
npm install
```

### 3. Create .env file

Create .env file to base directory

```bash
REACT_APP_API_BASE_URL=http://localhost:8000/api
```

## Run application

```bash
npm run dev
```

## Extensions

Prettier, Tailwind CSS IntelliSense

## Project conventions

`https://dev.to/itswillt/folder-structures-in-react-projects-3dp8`

`https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md`

### 1. File naming (`kebab-case`)

```bash
Example: this-is-component.ts
```

### 2. Function and variable naming (`camelCase`)

```bash
Example: const thisIsAFunctionOrVariable = ...
```

### 3. Component naming (`PascalCase`)

```bash
Example: ThisIsAComponentName() {...}
```

### 4. Constants and enum key naming (`UPPER_SNAKE_CASE`)

```bash
Example: 'THIS_IS_ENUM_KEY' : 'random value'
```

#### 4.1. Enum names (`PascalCase`)

```bash
Example: const ThisIsEnumName {...}
```

### 5. Type and interface naming (`PascalCase`)

```bash
Example: const ThisIsInterfaceName {...}
```

## Project page folder structure pattern

<pre>
📦 pages
├── 📂 page-name
│ ├── 📂 api
│ ├── 📂 components
│ │ ├── 📜 component-1.tsx
│ │ ├── 📜 component-2.tsx
│ │ ├── 📂 another-component
│ │ │ ├── 📂 api
│ │ │ ├── 📂 components
│ │ │ │ ├── 📜 component-1.1.tsx
│ │ │ │ ├── 📜 component-2.1.tsx
│ │ │ ├── 📂 hooks
│ │ │ ├── 📂 types
│ │ │ ├── 📂 utils
│ ├── 📂 hooks
│ ├── 📂 types
│ ├── 📂 utils
│ ├── 📂 views
│ │ ├── 📜 index.tsx
 </pre>
