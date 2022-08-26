# Team Study Log

<img alt="GitHub Workflow Status" src="https://img.shields.io/github/actions/workflow/status/mrbartrns/chulcheck/node.js.yml">

## Overview

> TSL is an web serivce which the team members can manage their attendance

## Features

- User can create the group.
- User can search the group.
- User can register the existing group.
- User can log the attendance for the group they registered.

## Technical stack

### Built by

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

### Version control & Continuous Integration

![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![prettier](https://img.shields.io/badge/prettier-ff69b4.svg?style=for-the-badge)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

## Folder structure

<details>

  <summary>details</summary>

```text
src
 ┣ api
 ┃ ┣ attendance.ts
 ┃ ┣ auth.ts
 ┃ ┣ instance.ts
 ┃ ┣ organization.ts
 ┃ ┗ types.ts
 ┣ components
 ┃ ┣ AuthFormTemplate
 ┃ ┃ ┣ AuthFormTemplate.stories.tsx
 ┃ ┃ ┣ AuthFormTemplate.tsx
 ┃ ┃ ┗ index.ts
 ┃ ┣ Calender
 ┃ ┃ ┣ Calender.tsx
 ┃ ┃ ┣ CalenderHeader.tsx
 ┃ ┃ ┣ CalenderInner.tsx
 ┃ ┃ ┣ ColumnHeader.tsx
 ┃ ┃ ┗ index.ts
 ┃ ┣ CalenderData
 ┃ ┃ ┣ CalenderData.tsx
 ┃ ┃ ┣ DataCell.tsx
 ┃ ┃ ┗ index.ts
 ┃ ┣ Header
 ┃ ┃ ┣ Header.tsx
 ┃ ┃ ┗ index.ts
 ┃ ┣ layouts
 ┃ ┃ ┣ AuthFormLayout.tsx
 ┃ ┃ ┣ GlobalLayout.tsx
 ┃ ┃ ┗ MainPageLayout.tsx
 ┃ ┣ MainPage
 ┃ ┃ ┣ AttendanceCard.tsx
 ┃ ┃ ┗ index.ts
 ┃ ┣ OrganizationInfoPage
 ┃ ┃ ┣ index.ts
 ┃ ┃ ┣ Layout.tsx
 ┃ ┃ ┗ Template.tsx
 ┃ ┗ shared
 ┃ ┃ ┣ Button
 ┃ ┃ ┃ ┣ ButtonBase.stories.tsx
 ┃ ┃ ┃ ┣ ButtonBase.tsx
 ┃ ┃ ┃ ┣ index.ts
 ┃ ┃ ┃ ┣ LoadingButton.stories.tsx
 ┃ ┃ ┃ ┗ LoadingButton.tsx
 ┃ ┃ ┣ Dropdown
 ┃ ┃ ┃ ┣ Dropdown.stories.tsx
 ┃ ┃ ┃ ┣ Dropdown.tsx
 ┃ ┃ ┃ ┣ DropdownItem.tsx
 ┃ ┃ ┃ ┣ DropdownMenu.tsx
 ┃ ┃ ┃ ┗ index.ts
 ┃ ┃ ┣ Headings
 ┃ ┃ ┃ ┣ Headings.tsx
 ┃ ┃ ┃ ┗ index.ts
 ┃ ┃ ┣ Input
 ┃ ┃ ┃ ┣ index.ts
 ┃ ┃ ┃ ┣ Input.stories.tsx
 ┃ ┃ ┃ ┗ Input.tsx
 ┃ ┃ ┣ Modal
 ┃ ┃ ┃ ┣ index.ts
 ┃ ┃ ┃ ┣ Modal.stories.tsx
 ┃ ┃ ┃ ┗ Modal.tsx
 ┃ ┃ ┣ NavigationBar
 ┃ ┃ ┃ ┣ index.ts
 ┃ ┃ ┃ ┣ NavigationBar.stories.tsx
 ┃ ┃ ┃ ┗ NavigationBar.tsx
 ┃ ┃ ┣ Paragraph
 ┃ ┃ ┃ ┣ index.ts
 ┃ ┃ ┃ ┣ Paragraph.stories.tsx
 ┃ ┃ ┃ ┗ Paragraph.ts
 ┃ ┃ ┣ Select
 ┃ ┃ ┃ ┣ ArrowDown.tsx
 ┃ ┃ ┃ ┣ index.ts
 ┃ ┃ ┃ ┗ Select.tsx
 ┃ ┃ ┗ Spinner
 ┃ ┃ ┃ ┣ index.ts
 ┃ ┃ ┃ ┣ Spinner.stories.tsx
 ┃ ┃ ┃ ┗ Spinner.tsx
 ┣ contexts
 ┃ ┣ AttendanceProvider.tsx
 ┃ ┗ index.ts
 ┣ factory
 ┃ ┗ Calender
 ┃ ┃ ┣ Caldender.ts
 ┃ ┃ ┣ Day.ts
 ┃ ┃ ┣ index.ts
 ┃ ┃ ┗ Week.ts
 ┣ hooks
 ┃ ┣ shared
 ┃ ┃ ┣ useClickAway.ts
 ┃ ┃ ┣ useFetch.ts
 ┃ ┃ ┣ useForm.ts
 ┃ ┃ ┣ useInterval.ts
 ┃ ┃ ┗ useLoading.ts
 ┃ ┣ useAttendance
 ┃ ┃ ┣ index.ts
 ┃ ┃ ┣ useAttendance.helper.ts
 ┃ ┃ ┗ useAttendance.ts
 ┃ ┣ useCalender
 ┃ ┃ ┣ index.ts
 ┃ ┃ ┣ useCalender.helper.ts
 ┃ ┃ ┗ useCalender.ts
 ┃ ┣ useOrganization
 ┃ ┃ ┣ index.ts
 ┃ ┃ ┣ useOrganization.helper.ts
 ┃ ┃ ┗ useOrganization.ts
 ┃ ┗ useTimer
 ┃ ┃ ┣ index.ts
 ┃ ┃ ┗ useTimer.ts
 ┣ pages
 ┃ ┣ GroupCreatePage.tsx
 ┃ ┣ MainPage.tsx
 ┃ ┣ NotFoundPage.tsx
 ┃ ┣ OrganizationInfoPage.tsx
 ┃ ┣ SigninPage.tsx
 ┃ ┗ SignupPage.tsx
 ┣ routes
 ┃ ┣ index.ts
 ┃ ┣ Protected.tsx
 ┃ ┗ router.tsx
 ┣ themes
 ┃ ┣ breakpoints.ts
 ┃ ┣ colors.ts
 ┃ ┣ fontSizes.ts
 ┃ ┣ headings.ts
 ┃ ┗ shadows.ts
 ┣ utils
 ┃ ┣ bisect.ts
 ┃ ┣ colorSelector.ts
 ┃ ┣ dateFormat.ts
 ┃ ┣ parse.ts
 ┃ ┗ storage.ts
 ┣ __tests__
 ┃ ┣ bisect.test.ts
 ┃ ┣ dateFormat.test.ts
 ┃ ┗ parse.test.ts
 ┣ App.css
 ┣ App.tsx
 ┣ index.tsx
 ┣ logo.svg
 ┣ react-app-env.d.ts
 ┣ reportWebVitals.ts
 ┗ setupTests.ts
```

</details>

### branch rules

```bash
# example

feat: Add attendance

```

- **feat**: Add/Update/Delete: feature(or ✨ emoji) - Code modify
- **fix**: Bug fix(or 🚑 emoji) - Code moify
- **doc**: Add/Update/Delete: document(or 📚 emoji) - No code modify
- **style**: Code format, intention(or 🎨 emoji) - Code modify, but no effect to the functinality
- **refactor**: Code refactoring, eg. renaming a variable(or 🚜 emoji) - Code modify
- **test**: Add/Update/Delete: test code(or 🔬 emoji) - Node code modify
- **chore**: Project environment - No code modify

## Screenshot

- Login

![test1](https://github.com/klcode1001/team-study-log/assets/133091719/c12881a1-7f9b-4cc2-b724-6e6b1a792e1f)

- Create new group

![create_group](https://github.com/klcode1001/team-study-log/assets/133091719/81ca86c6-905e-4071-913d-c6d8f4a143d3)

- Search group

![search_group](https://github.com/klcode1001/team-study-log/assets/133091719/f1bb5dfb-84ec-45c8-ad15-7d3bec295149)

- Attend

![attend](https://github.com/klcode1001/team-study-log/assets/133091719/3b2418d8-3c8f-49a6-87c2-b88e64a57b7a)

- Calendar component

![test2](https://github.com/klcode1001/team-study-log/assets/133091719/9d22f740-df22-4ed7-88d2-7976c76364cb)
