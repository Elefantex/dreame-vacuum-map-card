# Dreame Vacuum Card - BEM/SCSS Architecture

## Project Structure

The project has been successfully refactored from inline styles to a BEM methodology with SCSS. Each component now has its own directory containing:
- Component TypeScript file (.tsx)
- SCSS stylesheet file (.scss)
- Barrel export (index.ts)

### Directory Tree

```
src/
├── components/
│   ├── common/
│   │   ├── CircularButton/
│   │   │   ├── CircularButton.tsx
│   │   │   ├── CircularButton.scss
│   │   │   └── index.ts
│   │   ├── Modal/
│   │   │   ├── Modal.tsx
│   │   │   ├── Modal.scss
│   │   │   └── index.ts
│   │   ├── SegmentedControl/
│   │   │   ├── SegmentedControl.tsx
│   │   │   ├── SegmentedControl.scss
│   │   │   └── index.ts
│   │   ├── Toggle/
│   │   │   ├── Toggle.tsx
│   │   │   ├── Toggle.scss
│   │   │   └── index.ts
│   │   └── index.ts (barrel export for all common components)
│   ├── ActionButtons/
│   │   ├── ActionButtons.tsx
│   │   ├── ActionButtons.scss
│   │   └── index.ts
│   ├── CleaningModeButton/
│   │   ├── CleaningModeButton.tsx
│   │   ├── CleaningModeButton.scss
│   │   └── index.ts
│   ├── CleaningModeModal/
│   │   ├── CleaningModeModal.tsx
│   │   ├── CleaningModeModal.scss
│   │   └── index.ts
│   ├── DreameVacuumCard/
│   │   ├── DreameVacuumCard.tsx
│   │   ├── DreameVacuumCard.scss
│   │   └── index.ts
│   ├── Header/
│   │   ├── Header.tsx
│   │   ├── Header.scss
│   │   └── index.ts
│   ├── ModeTabs/
│   │   ├── ModeTabs.tsx
│   │   ├── ModeTabs.scss
│   │   └── index.ts
│   └── VacuumMap/
│       ├── VacuumMap.tsx
│       ├── VacuumMap.scss
│       └── index.ts
├── types/
│   └── homeassistant.ts
└── main.tsx
```

## Common Reusable Components

### Toggle
- **Purpose**: Reusable toggle switch component
- **Props**: `checked: boolean`, `onChange: (checked: boolean) => void`
- **BEM Classes**: `.toggle`, `.toggle__input`, `.toggle__slider`, `.toggle__slider--checked`

### CircularButton
- **Purpose**: Reusable circular button with icon support
- **Props**: `icon: string | React.ReactNode`, `label?: string`, `selected?: boolean`, `onClick?: () => void`, `size?: 'small' | 'medium' | 'large'`
- **BEM Classes**: `.circular-button`, `.circular-button__circle`, `.circular-button__circle--{size}`, `.circular-button__circle--selected`, `.circular-button__icon`, `.circular-button__label`
- **Sizes**: small (48px), medium (56px), large (72px)

### Modal
- **Purpose**: Reusable bottom sheet modal with backdrop
- **Props**: `opened: boolean`, `onClose: () => void`, `children: React.ReactNode`
- **BEM Classes**: `.modal`, `.modal__backdrop`, `.modal__content`, `.modal__handle`

### SegmentedControl
- **Purpose**: Reusable segmented control / tab selector
- **Props**: `value: string`, `onChange: (value: string) => void`, `options: Array<{ value: string; label: string }>`
- **BEM Classes**: `.segmented-control`, `.segmented-control__button`, `.segmented-control__button--selected`

## Feature Components

### Header
- Shows device name, status, battery, area, and cleaning time
- Includes drying progress bar when drying status is active
- **BEM Classes**: `.header`, `.header__title`, `.header__status`, `.header__stats`, `.header__stat`, `.header__stat-value`, `.header__progress`, `.header__progress-bar`, `.header__progress-fill`

### ModeTabs
- Tabs for switching between cleaning modes (All, Room, Zone)
- **BEM Classes**: `.mode-tabs`, `.mode-tabs__button`, `.mode-tabs__button--active`

### ActionButtons
- Clean and Dock buttons
- **BEM Classes**: `.action-buttons`, `.action-buttons__clean`, `.action-buttons__dock`, `.action-buttons__icon`

### CleaningModeButton
- Button to open cleaning mode modal
- **BEM Classes**: `.cleaning-mode-button`, `.cleaning-mode-button__content`, `.cleaning-mode-button__icon`, `.cleaning-mode-button__text`, `.cleaning-mode-button__arrow`

### VacuumMap
- Displays the vacuum cleaner map with room selection
- **BEM Classes**: `.vacuum-map`, `.vacuum-map__image`, `.vacuum-map__placeholder`, `.vacuum-map__overlay`, `.vacuum-map__rooms`, `.vacuum-map__room`, `.vacuum-map__room--selected`

### CleaningModeModal
- Modal for selecting cleaning mode (CleanGenius or Custom)
- Uses common components: Toggle, CircularButton, SegmentedControl, Modal
- **BEM Classes**: Multiple classes for sections, settings, sliders, and grids

### DreameVacuumCard
- Main card component that orchestrates all other components
- **BEM Classes**: `.dreame-vacuum-card`, `.dreame-vacuum-card__container`, `.dreame-vacuum-card__controls`, `.dreame-vacuum-card__room-selection`, `.dreame-vacuum-card__toast`, `.dreame-vacuum-card__toast-message`, `.dreame-vacuum-card__toast-close`

## BEM Methodology

All components follow BEM (Block Element Modifier) naming convention:
- **Block**: `.component-name`
- **Element**: `.component-name__element`
- **Modifier**: `.component-name__element--modifier`

Example from Header component:
```scss
.header {
  &__title { /* element */ }
  &__stat { /* element */ }
  &__stat-value { /* element */ }
  &__progress { /* element */ }
  &__progress-fill { /* element */ }
  &__progress-fill--complete { /* modifier */ }
}
```

## Import Structure

Components can be imported from their directories:
```typescript
import { Header } from './components/Header';
import { VacuumMap } from './components/VacuumMap';
import { Toggle, CircularButton, Modal, SegmentedControl } from './components/common';
```

## Build Output

- **CSS**: dist/dreame-vacuum-map-card.css (12.47 kB, gzipped: 2.67 kB)
- **JS**: dist/dreame-vacuum-map-card.js (338.40 kB, gzipped: 76.79 kB)
- **No errors**: TypeScript compilation and Vite build successful

## Technologies

- React 19.2.0
- TypeScript 5.9.3
- Vite 7.2.4
- SASS (SCSS preprocessor)
- BEM methodology
- Shadow DOM for style isolation

## Benefits of This Architecture

1. **Maintainability**: Each component has clear separation of concerns
2. **Reusability**: Common components can be used across the application
3. **Scalability**: Easy to add new components following the same pattern
4. **Readability**: BEM naming makes CSS class purposes obvious
5. **Type Safety**: Full TypeScript support across all components
6. **Performance**: SCSS compiled to optimized CSS, tree-shaking for unused code
