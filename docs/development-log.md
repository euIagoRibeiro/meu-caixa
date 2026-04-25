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

### Step 4 — Basic navigation

- React Navigation added
- Native stack navigation configured
- `src/navigation/AppNavigator.tsx` created
- `TransactionsScreen` created as a simple placeholder screen
- `App.tsx` updated to render `AppNavigator`
- Home screen connected to the transactions screen
- No database added
- No transaction logic added
- No complex nested navigation added

## Documentation Updates

- `docs/project-context.md` created
- Navigation Strategy section added to `docs/project-context.md`
- `docs/development-log.md` updated after Step 2
- `docs/development-log.md` updated after Step 3
- `docs/development-log.md` updated after Step 4

## Current State

The project now has a first static visual home screen, a basic folder structure, and simple navigation between two screens.

The screen uses example data only and does not persist information yet.

The project is ready for the next small development step after Step 4 is committed.

## Current Pending Changes

- None after the Step 4 commit

## Suggested Next Step

### Step 5 — Create basic data models

The next step should define the first TypeScript data models for the app.

This step should stay small and focused:

- No database implementation
- No form implementation
- No persistence logic
- No visual redesign

The goal is to describe the shape of the main financial data before storing or editing it.

## Future Planned Steps

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
