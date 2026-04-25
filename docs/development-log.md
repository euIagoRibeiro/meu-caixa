# Development Log

This file tracks the project progress over time.

It should be updated after each completed step or important documentation change.

## Completed Steps

### Step 1 — Initial project setup

- Project created with Expo, React Native, and TypeScript
- Git initialized
- `.gitignore` configured
- `README.md` created in Portuguese
- Initial dependencies installed
- Android emulator tested
- TypeScript check passed
- Project runs with `npm run android`

### Step 2 — First static home screen

- Default Expo starter screen replaced
- Static home screen created for Meu Caixa
- Example financial summary added
- Example recent records added
- No navigation added
- No database added
- No financial logic added

### Step 3 — Basic folder structure

- `src/` folder created
- `src/screens/` created for app screens
- `src/components/` created for reusable UI components
- `src/services/` created for app logic outside the UI
- `src/storage/` created for future local persistence logic
- `src/models/` created for future TypeScript models
- `src/utils/` created for future helper functions
- Home screen moved to `src/screens/HomeScreen.tsx`
- `App.tsx` simplified to render `HomeScreen`
- No navigation added
- No database added
- No visual redesign added

## Documentation Updates

- `docs/project-context.md` created
- Navigation Strategy section added to `docs/project-context.md`
- `docs/development-log.md` updated after Step 2
- `docs/development-log.md` updated after Step 3

## Current State

The project now has a first static visual home screen and a basic folder structure.

The screen uses example data only and does not persist information yet.

The project is ready for the next small development step after Step 3 is committed.

## Current Pending Changes

- `App.tsx` simplified
- `src/` folder structure created
- `HomeScreen` moved to `src/screens/HomeScreen.tsx`
- `docs/development-log.md` updated after Step 3

## Suggested Next Step

### Step 4 — Add basic navigation

The next step should add simple screen navigation.

This step should stay small and focused:

- No database
- No complex nested navigation
- No feature logic
- No visual redesign

The goal is to prepare the app to move between screens in a clear and beginner-friendly way.

## Future Planned Steps

- Step 4: Basic navigation
- Step 5: Data models
- Step 6: Local storage
- Step 7: Transaction form
- Step 8: Transaction list
- Step 9: Categories
- Step 10: Dashboard

## Rules

- Update this file after each step
- One commit per step
- Do not mix unrelated changes
- Always read `docs/project-context.md` before continuing
