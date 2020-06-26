[![Netlify Status](https://api.netlify.com/api/v1/badges/e9a73f8c-0239-4157-b808-ab8d284e68f1/deploy-status)](https://app.netlify.com/sites/core-values-app/deploys)

# TODO List
## MVP
- [x] Properly reorder items in grouping columns after drop
- [x] Allow items to be dropped between other items
- [x] Allow core values to be removed from grouping columns
- [x] Button to select main value
- [x] Google fonts
- [x] Display sections on button click
- [x] Set core values back to unselected in grouping column but still allow dragging?
- [x] Better + and x signs: [here](https://fontawesome.com/icons/plus?style=solid)
- [x] Deploy (Netlify)
- [x] Permanently disable continue buttons after clicking
- [x] Refactor onDragEnd function
- [x] On clicking second continue button:
  - [x] Freeze corevalue main panel - no more select/un-select
  - [x] Disable dragging in columns - no more dragging
- [x] Primary core value selection fixes: 
  - [x] When plus button is clicked, change icon to orange x (animate), 
  - [x] When plus button is clicked, change style of selected core value to orange?
  - [x] Only allow 1 primary core value selection per column, reset styles when new one is selected
  - [x] Require primary core value in all columns to be picked before enabling continue button
  - [x] Once bottom panel appears on page, never re-hide it
- [x] Add textbox for actionable core value statement
- [ ] Logo - Update to say "My Core Values"
- [ ] Add landing page (and [route](https://reacttraining.com/react-router/web/api/Link/to-object))
- [ ] Add tooltips
- [ ] Add Navigation bar, see [example](https://github.com/M0nica/ambition-fund-website/blob/master/src/components/common/navigation/navigation.jsx)
- [ ] Add footer
- [ ] Update content
- [ ] Email or tweet your core values
- [ ] Add illustrations
- [ ] Analytics? [goatcounter](https://www.goatcounter.com/), [matomo](https://news.ycombinator.com/item?id=23560823), [goaccess](https://goaccess.io/), [nytimes](https://github.com/NYTimes/react-tracking), [larger round-up](https://lwn.net/SubscriberLink/822568/61d29096a4012e06/)

## v2
- [ ] Tests: [testing-library](https://github.com/testing-library/react-testing-library)
- [ ] Code refactor:
  - [ ] Organize files in sensible directory structure. Examples: [1](https://reactjs.org/docs/faq-structure.html), [2](https://www.robinwieruch.de/react-folder-structure)
  - [ ] Use classes & reusable components
  - [ ] Use events
  - [x] Centralized constants and utils
- [ ] Draggable interactions:
  - [ ] onBeforeDragStart or onDragStart while in column, hide plus button?
  - [ ] How to prevent draggable from snapping back into column on a false drop?
- [ ] Local persistence?
- [ ] Add a reset button to clear all grouped items back to the main panel
- [ ] License
- [ ] CI/CD
- [ ] Logging library [logrocket](https://logrocket.com/)
- [ ] Scroll to sections on button click

## Future
- [ ] Use redux?
- [ ] Responsive design w/ [Tailwind CSS](https://tailwindcss.com/)m [docs](https://nerdcave.com/tailwind-cheat-sheet)
- [ ] Fix spacing/padding (use Bootstrap?)
- [ ] Can grouping column contents be centered? May require more complex CSS or animation finagling. [See here](https://github.com/atlassian/react-beautiful-dnd/issues/1851)
- [ ] Dragging outside of the column snaps back to column first before appearing in core values panel - FIX THIS
- [ ] Add ability to add new columns?
- [ ] Use onDragStart to toggle isDropDisabled on the main panel? [See here](https://react-beautiful-dnd.netlify.app/?path=/story/ondragstart--toggle-isdropdisabled-ondragstart)
- [ ] More animations
- [ ] SEO? [oyato](https://oyatocloud.com/)
- [ ] Mobile-friendly version?

## Design/Moqups
- [ ] Add button to clear all selections back to Top Panel
- [ ] Design for responsive UI. See [here](https://medium.com/styled-components/how-to-create-responsive-ui-with-styled-components-c6b71a3ce172)
- [ ] Mobile-friendly version?

## Investigate issues
- [x] Animation for dropping into the group column is bad, the bubble snaps to top left corner first before the flex center styling applies. How to fix? [Identical issue](https://github.com/atlassian/react-beautiful-dnd/issues/1851)
- [ ] What's this scroll-linked position error?
  ````
  This site appears to use a scroll-linked positioning effect. This may not work well with asynchronous panning; see https://developer.mozilla.org/docs/Mozilla/Performance/ScrollLinkedEffects for further details and to join the discussion on related tools and features!
  ````

## Performance
- [ ] Do not re-render other draggables during/after the drag. See [here](https://github.com/atlassian/react-beautiful-dnd/issues/1791)
- [ ] Allow dragging between grouping columns without affecting state in the core values main panel
- [ ] Columns are rendered twice on page load
- [ ] Do not re-render draggables when selecting - brief UI flash particularly noticeable on mobile
- [ ] Fonts on first load???

## Funsies
- [ ] Add animation on selecting in top panel

## Colors
- #e04b11 orange
