# TODO List
## Design/Moqups
- [ ] Add button to clear all selections back to Top Panel
- [ ] Design for responsive UI. See [here](https://medium.com/styled-components/how-to-create-responsive-ui-with-styled-components-c6b71a3ce172)

## Investigate issues
- [x] Animation for dropping into the group column is bad, the bubble snaps to top left corner first before the flex center styling applies. How to fix? [Identical issue](https://github.com/atlassian/react-beautiful-dnd/issues/1851)
- [ ] What's going on with this scroll-linked position error? 
  ````
  This site appears to use a scroll-linked positioning effect. This may not work well with asynchronous panning; see https://developer.mozilla.org/docs/Mozilla/Performance/ScrollLinkedEffects for further details and to join the discussion on related tools and features!
  ````

## Performance
- [ ] Do not re-render other draggables during/after the drag. See [here](https://github.com/atlassian/react-beautiful-dnd/issues/1791)
- [ ] Allow dragging between grouping columns without affecting state in the core values main panel

## Build
- [x] Properly reorder items in grouping columns after drop
- [x] Allow items to be dropped between other items
- [ ] Landing page
- [ ] Scroll to sections
- [ ] Add a reset button to clear all grouped items back to the main panel
- [ ] Use onDragStart to toggle isDropDisabled on the main panel? [See here](https://react-beautiful-dnd.netlify.app/?path=/story/ondragstart--toggle-isdropdisabled-ondragstart)
- [ ] Add routes
- [ ] Set core values back to unselected in grouping column but still allow dragging?

## Future
- Can grouping column contents be centered? May require more complex CSS or animation finagling. [See here](https://github.com/atlassian/react-beautiful-dnd/issues/1851)
