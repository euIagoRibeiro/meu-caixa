# Project Context

## Project Overview

This project is a personal finance mobile app created as a learning project.

The main goal is not only to build a working app, but also to understand each step of the development process clearly.

The app is mobile-first because personal financial management is usually done on smartphones.

## Learning Goal

This project should be developed with a strong focus on learning.

Each decision should be explained in a simple and practical way, so the project can be understood by a beginner or student.

The AI should act as a mentor, not only as a code generator.

## Development Approach

The project must be developed step by step.

Each step should be:

- Small
- Clear
- Easy to understand
- Finished before moving to the next step
- Followed by a Git commit

The expected workflow is:

1. Step
2. Code
3. Commit
4. Study
5. Next step

The project should not move forward without confirmation.

## First Step Rules

The first step of the project must only include project setup.

The first step may include:

- Project creation
- Installing initial dependencies
- Git initialization
- Proper `.gitignore` setup
- Creating a `README.md` in Portuguese

The first step must not include feature implementation.

## Initial Stack

The initial stack should stay simple and beginner-friendly.

The planned technologies are:

- React Native
- Expo
- TypeScript
- Local storage using SQLite or a similar solution

The app should start with local data only.

## Future Architecture

The app must start simple, using local storage only.

However, the structure should not block future integration with a backend such as Supabase.

Future backend features may include:

- Authentication
- Cloud sync
- Backup
- Multi-device support

The first versions should avoid backend complexity, but the project should be organized in a way that makes future migration possible.

## Data Modeling Principles

The app must have a clear and simple data model.

The data model should help organize the main financial information without making the project difficult to understand.

Possible core entities include:

- Transaction
- Category
- Account
- Debt
- Installment
- Investment

General rules:

- Avoid duplicating data
- Keep relationships clear
- Keep the structure simple and scalable
- Prefer consistency over premature optimization
- Use names that are easy to understand
- Document important decisions about the data model

The data model should start small and grow only when the app needs it.

## Planned Features

The app should eventually support:

- Daily expenses
- Income
- Savings or reserve money
- Money held for other people
- Informal loans, such as money lent to someone
- Credit card debts
- Installments tracking
- Paid and pending payments
- Manual investment tracking, such as CDB or Mercado Pago savings
- Manual tracking of investment earnings
- Categories for organization
- Future dashboards and reports

These features should not be implemented all at once.

They should be added gradually, in small and understandable steps.

## UI/UX Goals

The app should have a clean and professional interface.

The design should feel modern, but not generic or artificial.

The UI should prioritize:

- Good spacing
- Clear visual hierarchy
- Simple navigation
- Readable text
- Consistent colors
- A simple and understandable design system

The design should be practical for everyday financial use.

## Navigation Strategy

The app should use a simple and beginner-friendly navigation approach.

The project may use Expo Router or React Navigation.

At the beginning, navigation should focus on basic screen navigation.

Rules:

- Keep navigation predictable
- Organize screens clearly
- Avoid complex nested navigation early
- Add complexity only when necessary

The goal is to make it easy to understand how users move between screens before adding advanced navigation patterns.

## State Management

State management should be simple and beginner-friendly at the beginning.

The app should first use React built-in tools, such as:

- `useState`
- `useContext`

Rules:

- Avoid complex tools like Redux at the beginning
- Keep state readable and organized
- Keep state close to where it is used when possible
- Move shared state to context only when multiple screens or components need it
- Only introduce more advanced tools if they become necessary

The goal is to understand how state works before adding more tools.

## Project Structure

The project should have a basic but scalable folder structure.

The structure should remain simple, but organized enough to support future growth.

Example folders:

- `components/`
- `screens/`
- `services/`
- `storage/`
- `models/`
- `utils/`

Suggested responsibilities:

- `components/`: reusable UI pieces
- `screens/`: full app screens
- `services/`: app logic that is not directly tied to the UI
- `storage/`: local database and persistence logic
- `models/`: TypeScript types and data models
- `utils/`: small helper functions

The structure should not be created all at once if it is not needed.

Folders should be added when they help organize real code.

## Local Storage Strategy

The app should use local storage first.

SQLite or a similar solution should be used to persist financial data between app sessions.

Rules:

- Keep storage logic separate from UI components
- Ensure data persists after closing and reopening the app
- Keep database operations organized and easy to understand
- Avoid spreading storage code across many unrelated files
- Design storage in a way that allows future migration to a backend like Supabase

The UI should not need to know the internal details of the database.

This separation will make the app easier to maintain and easier to evolve later.

## Testing Approach

The testing strategy should start simple.

Manual testing is acceptable at the beginning of the project.

After each development step:

- Verify that the app still runs
- Check the screen or feature that was changed
- Check that existing behavior was not broken
- Do not move forward if something is broken

Automated tests can be introduced later when the app has more stable features and repeated behavior that needs protection.

The project should prioritize understanding and correctness before adding testing complexity.

## Constraints

The first versions of the app should avoid unnecessary complexity.

Initial constraints:

- No bank API integrations
- No automatic syncing
- No backend dependency
- Manual data input first
- Local storage first
- Avoid complex architecture before it is needed

## Git Workflow

The project should use Git carefully and consistently.

Rules:

- One commit per development step
- Clear commit messages
- Explain what will be committed before committing
- Do not mix unrelated changes in the same commit
- Do not skip commits after completing a step

## Mentor Behavior

The AI must guide the project like a mentor.

Expected behavior:

- Explain decisions clearly
- Work step by step
- Avoid jumping ahead
- Keep changes small
- Focus on teaching
- Ask for confirmation before moving to the next step
- Explain tradeoffs when there is more than one possible approach

The goal is to help the student understand the project, not only to deliver code quickly.

## Current Local Development Context

The project is an Expo React Native app using TypeScript.

Useful local commands:

```bash
npm run android
```

This starts the Expo app on Android using port `8081`.

The local Android emulator is:

```text
Pixel_7
```

The Android SDK is configured at:

```text
~/Android/Sdk
```

Useful emulator command:

```bash
emulator -avd Pixel_7
```

If the emulator is already open, running `npm run android` should be enough.

If the emulator becomes unstable or crashes because of graphics issues, start it with software rendering:

```bash
emulator -avd Pixel_7 -no-snapshot-load -gpu swiftshader_indirect
```

This is slower than hardware rendering, but it is more stable on the current local machine.

## Current Implementation State

The app currently has:

- A static home screen
- A basic project folder structure under `src/`
- React Navigation configured with a native stack
- Two screens:
  - `HomeScreen`
  - `TransactionsScreen`

The app does not have real financial data yet.

The current data shown on the home screen is only example data.

## Dependency And Security Notes

The project uses Expo SDK 54.

`npm audit` reported moderate vulnerabilities in transitive Expo tooling dependencies.

A safe override was added for `postcss`:

```json
"overrides": {
  "postcss": "8.5.10"
}
```

Remaining audit warnings are related to `uuid` through `xcode`, which is used by Expo tooling.

Do not run `npm audit fix --force` without reviewing the result, because npm may suggest downgrading Expo to an older major version.

## How To Continue In Future Chats

At the beginning of a new chat, read this file before making project decisions.

Suggested instruction:

```text
Leia docs/project-context.md e continue o projeto seguindo as regras desse arquivo.
```

This file should be updated whenever an important project decision is made.
