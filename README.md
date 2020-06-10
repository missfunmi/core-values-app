# TODO List
## Design/Moqups
- [ ] Add button to clear all selections to Top Panel
- [ ] Design for responsive UI. See [here](https://medium.com/styled-components/how-to-create-responsive-ui-with-styled-components-c6b71a3ce172)

## Investigate issues
- [ ] Animation for the drop into the group column is not great. Snaps to top left corner first. How to fix?
- [ ] Do not re-render other draggables during/after the drag. See [here](https://github.com/atlassian/react-beautiful-dnd/issues/1791)

## Build
- [ ] Properly reorder items in grouping columns after drop
- [ ] Allow items to be dropped between other items
- [ ] Add a reset button to clear all grouped items back to the main panel
- [ ] Use onDragStart to toggle isDropDisabled on the main panel? See [here](https://react-beautiful-dnd.netlify.app/?path=/story/ondragstart--toggle-isdropdisabled-ondragstart)
