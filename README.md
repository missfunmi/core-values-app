# TODO List
## MVP
- [x] Properly reorder items in grouping columns after drop
- [x] Allow items to be dropped between other items
- [x] Allow core values to be removed from grouping columns
- [x] Button to select main value
- [x] Google font
- [x] Logo
- [ ] Landing page
- [ ] Navigation bar, see [example](https://github.com/M0nica/ambition-fund-website/blob/master/src/components/common/navigation/navigation.jsx)
- [ ] Add routes
- [ ] Content
- [x] Display sections on button click
- [x] Set core values back to unselected in grouping column but still allow dragging?
- [ ] License
- [x] Deploy (Netlify)
- [x] Permanently disable continue buttons after clicking
- [x] On clicking second continue button:
  - [x] Freeze corevalue main panel - no more select/un-select
  - [x] Disable dragging in columns - no more dragging
- [ ] Primary core value selection fixes: 
  - [ ] onBeforeDragStart or onDragStart, hide plus button
  - [ ] When plus button is clicked, change icon to red x (animate), 
  - [x] When plus button is clicked, change style of selected core value to orange?
  - [ ] Only allow one primary core value selection per column, reset styles when new one is selected
  - [ ] Require primary core value in each column to be picked before enabling continue button
  - [x] Once bottom panel appears on page, never re-hide it

## v2
- [ ] Tooltips
- [ ] Scroll to sections on button click
- [ ] Add a reset button to clear all grouped items back to the main panel
- [ ] Tests: [testing-library](https://github.com/testing-library/react-testing-library)
- [ ] Logging
- [ ] Email to yourself or screenshot for social media posting

## Future
- [ ] Can grouping column contents be centered? May require more complex CSS or animation finagling. [See here](https://github.com/atlassian/react-beautiful-dnd/issues/1851)
- [ ] Dragging outside of the column snaps back to column first before appearing in core values panel - FIX THIS
- [ ] Add ability to add new columns?
- [ ] Use onDragStart to toggle isDropDisabled on the main panel? [See here](https://react-beautiful-dnd.netlify.app/?path=/story/ondragstart--toggle-isdropdisabled-ondragstart)

## Refactor
- [ ] Make coreValue object into a class with initial values?
- [x] Refactor onDragEnd function
- [ ] Organize files in sensible directory structure
- [ ] Events

## Design/Moqups
- [ ] Add button to clear all selections back to Top Panel
- [ ] Design for responsive UI. See [here](https://medium.com/styled-components/how-to-create-responsive-ui-with-styled-components-c6b71a3ce172)
- [ ] Mobile-friendly version?
- [ ] Design for finalizing grouping columns

## Investigate issues
- [x] Animation for dropping into the group column is bad, the bubble snaps to top left corner first before the flex center styling applies. How to fix? [Identical issue](https://github.com/atlassian/react-beautiful-dnd/issues/1851)
- [ ] What's going on with this scroll-linked position error?
  ````
  This site appears to use a scroll-linked positioning effect. This may not work well with asynchronous panning; see https://developer.mozilla.org/docs/Mozilla/Performance/ScrollLinkedEffects for further details and to join the discussion on related tools and features!
  ````

## Performance
- [ ] Do not re-render other draggables during/after the drag. See [here](https://github.com/atlassian/react-beautiful-dnd/issues/1791)
- [ ] Allow dragging between grouping columns without affecting state in the core values main panel
- [ ] Columns are rendered twice on page load

## Funsies
- [ ] Add animation on selecting in top panel

## Color scheme
- #e04b11 orange
