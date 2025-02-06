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
  - [x] Once text is entered, change color of statement
- [x] Add landing page (and [route](https://reacttraining.com/react-router/web/api/Link/to-object))
- [x] Add tooltips
  - [x] Use state to keep track of if hint has been shown & hidden
  - [x] Use custom css instead of force-overriding the library css: [here](https://github.com/usablica/intro.js/blob/master/example/custom-class/index.html)
- [x] Logo - Make background transparent -> 👉🏾 Gimp
- [x] Add illustrations
- [x] Analytics? [goatcounter](https://www.goatcounter.com/)
- [x] Add footer
  - [x] FIX: Overlaps with final core values when there are 5 in the list
  - [x] But Logo goes off screen as more elements are added to UI! Ugh!
  - [x] Make footer stick to bottom of browser without overlapping content
- [ ] New font?
- [x] Scroll to Final Core Values table on clicking second continue button
- [ ] Email or tweet your core values - create an image?
- [x] Update content
  - [x] Add open graph metadata
- [ ] Basic spacing & other responsive UI fixes
- [x] Add proper README and move open items to github issues or separate file
- [ ] Browser-specific issues:
  - [ ] Safari (mobile & desktop) - dragging core value from main panel leaves whitespace next to placeholder
- [x] Add to personal site

## v2
- [ ] ‼️ Migrate draggable functionality to [dnd-kit](https://github.com/clauderic/dnd-kit) or [pragmatic-drag-and-drop](https://github.com/atlassian/pragmatic-drag-and-drop). See: [deprecation announcement for react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd/issues/2672) - to be set to read-only mode in April 2025
- [ ] Tests: [testing-library](https://github.com/testing-library/react-testing-library)
- [ ] Adjust styles & animations for other browsers (Chrome, Safari, mobile browsers)
- [ ] Switch to [CSS Grid Layout](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [ ] Code refactor:
  - [ ] Organize files in sensible directory structure. Examples: [1](https://reactjs.org/docs/faq-structure.html), [2](https://www.robinwieruch.de/react-folder-structure)
  - [ ] Use classes & reusable components
  - [ ] Use events
  - [ ] Update components to function style
  - [x] Centralized constants and utils
- [ ] Add a reset button to clear all grouped items back to the main panel
- [ ] Change delete interaction 
  - [ ] Add a drop zone below each column with a trash icon such that when dropped into it, the core value is returned to the main panel
- [ ] More illustrations?
- [ ] Hints update:
  - [ ] Add button to permanently hide hints
  - [ ] Use localStorage? Cookies?
  - [ ] Fix spacing of hints?
  - [ ] Customize positioning of hint arrows - "data-position" attr doesn't seem to work for hints...
- [ ] Draggable interactions:
  - [ ] onBeforeDragStart or onDragStart while in column, hide plus button?
  - [ ] How to prevent draggable from snapping back into column on a false drop?
- [ ] Local persistence?
- [ ] Add sticky Navigation bar, see [example](https://github.com/M0nica/ambition-fund-website/blob/master/src/components/common/navigation/navigation.jsx)
  - [ ] Scroll to sections on clicking Continue button
  - [ ] Check out 'react-scrollspy' and 'react-anchor-link-smooth-scroll'
- [ ] License
- [ ] CI/CD
- [ ] Logging library [logrocket](https://logrocket.com/)

## Future
- [ ] Use redux?
- [ ] Responsive design w/ [Tailwind CSS](https://tailwindcss.com/)m [docs](https://nerdcave.com/tailwind-cheat-sheet)
- [ ] Fix spacing/padding (use Bootstrap?)
- [ ] Use Bootstrap icons? [here](https://icons.getbootstrap.com/icons/plus/)
- [ ] Can grouping column contents be centered? May require more complex CSS or animation finagling. [See here](https://github.com/atlassian/react-beautiful-dnd/issues/1851)
- [ ] Dragging outside of the column snaps back to column first before appearing in core values panel - FIX THIS
- [ ] Add ability to add new columns?
- [ ] Use onDragStart to toggle isDropDisabled on the main panel? [See here](https://react-beautiful-dnd.netlify.app/?path=/story/ondragstart--toggle-isdropdisabled-ondragstart)
- [ ] More animations
- [ ] SEO? [oyato](https://oyatocloud.com/)
- [ ] Mobile-friendly version?
- [ ] Check out other analytics: [matomo](https://news.ycombinator.com/item?id=23560823), [goaccess](https://goaccess.io/), [nytimes](https://github.com/NYTimes/react-tracking) or [here](https://open.nytimes.com/introducing-react-tracking-declarative-tracking-for-react-apps-2c76706bb79a), [larger round-up](https://lwn.net/SubscriberLink/822568/61d29096a4012e06/)
- [ ] Tab key in statement box should tab to next text field?

## Design/Moqups
- [ ] Add button to clear all selections back to Top Panel
- [ ] Updated home page
  - [ ] Screenshots of the final core value selection
- [ ] Design for responsive UI. See [here](https://medium.com/styled-components/how-to-create-responsive-ui-with-styled-components-c6b71a3ce172)
- [ ] Mobile-friendly version?

## Investigate issues
- [x] Animation for dropping into the group column is bad, the bubble snaps to top left corner first before the flex center styling applies. How to fix? [Identical issue](https://github.com/atlassian/react-beautiful-dnd/issues/1851)
- [ ] What's this scroll-linked position error?
  ````
  This site appears to use a scroll-linked positioning effect. This may not work well with asynchronous panning; see https://developer.mozilla.org/docs/Mozilla/Performance/ScrollLinkedEffects for further details and to join the discussion on related tools and features!
  ````
- [x] Another error to investigate -- culprit is intro.js library. Only exists for IE browsers. [Link](https://github.com/usablica/intro.js/blob/b46bbcd8af46be2ae3b43aba850334b12ff03cdb/introjs.css#L234)
  ````
  This page uses the non standard property “zoom”. Consider using calc() in the relevant property values, or using “transform” along with “transform-origin: 0 0”.
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
- #3d8af7 bright blue
- #3b4754 dark blue
