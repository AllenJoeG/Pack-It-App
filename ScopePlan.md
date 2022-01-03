## Base Mode
[ 👍 ] Skeleton Component Views
[ 👍 ] Nav Bar 
  [ ] Nav Bar STYLING
[ 👍 ] Database Creation from ERD
[ 👍 ] Loading Dummy Data for Inventory
[ 👍 ] Routes & Auth Routes for Views
<!--  -->
[ ] Reducers & Sagas
  [ 👍 ] gear.reducer
  [ 👍 ] consumables.reducer
  [ 👍 ] categories.reducer
  [ 👍 ] packs.reducer
  [ 👍 ] currentPack.reducer
  [ 👍 ] CPIndex.reducer
  [ 👍 ] addtopackdropdown.reducer
  [ ] Unpack reducer
  <!--  -->
  [ 👍 ] Gear.saga GET
  [ 👍 ] Consumables.saga GET
  [ 👍 ] Packs.saga GET
  [ 👍 ] categories.saga GET
  [ ] Unpack GET
  [ ] Unpack PUT updates
  [ ] Unpack DELETE
  [ 👍 ] Pack POST to userCustom
  [ 👍 ] Headouts POST 
  
<!--  -->
[ ] Inventory View
  [ 👍 ] Local state inventory
  [ 👍 ] Reducers & Sagas
  [ 👍 ] Server-side Axios
  [ ] Four Buttons
    [ 👍 ] Show Gear
    [ 👍 ] Show Consumables
    [ ] Show Pack (REASSIGN?)
    [ ] Show Categories
  [ 👍 ] ADD to currentPack
    [ 👍 ] currently generating new ID to avoid duplication
  [ ] MUI & layout

<!--  -->
[ ] Pack View
  [ ] Reducers & Sagas
    [ 👍 ] currentPackReducer
      [ 👍 ] delete item w filter
    [ 👍 ] Pack Reducer Dropdown
    [ 👍 ] Category Reducer Dropdown
    [ 👍 ] ADD to pack dispatch
  [ ] Server-side Axios
    [ 👍 ] POST pack to usercustom
    [ 👍 ] POST new trip
    [ ] GET load pack
    [ ] 
  [ ] MUI & layout
    [ 👍 ] Button Grid
    [ 👍 ] Table
    [ ] Styled
  [ ] Functionality
    [ 👍 ] Pack Dropdown
      [ ] FIX COLOR
    [ 👍 ] Pack Capacity
    [ 👍 ] Cumulative Weight
    [ 👍 ] Category Dropdown
    [ ] Buttons
      [ 👍 ] Clear Pack Button
      [ 👍 ] Add line item
      [ 👍 ] Save Pack
      [ ] Load Pack
      [ ] Load Category

<!--  -->
[ ] Unpack View
  [ ] Reducers & Sagas
    [ ] Reducer to hold trips
    [ ] Reducer holds all usercustom
    [ ] SAGA for trip PUT name/notes
    [ ] SAGA for gear PUT weight/notes
  [ ] Server-side Axios
    [ ] PUT routes for trip name/notes
    [ ] PUT routes for gear weight/notes
  [ ] MUI & layout
    [ ] Collapsible tables (modal?)
    [ ] Edit button, or editable fields



  <!--  -->
[ ] Headout Functional Programming
  [ ] squel.js Server-side
[ ] Headout View
  [ ] Reducers & Sagas
  [ ] Server-side Axios
  [ ] MUI & layout
[ ] Account/User View
  [ ] MUI & Layout

## Stretch Goals
[ ] Unpack Card Views of gear
  [ ] Charts.JS graph of weight/category
[ ] Custom Headout Functionality
[ ] Wolfram API for weight/caloric ratios
[ ] MUI Accessibility
[ ] Inventory API Exploration
[ ] Weather API Exploration
[ ] Google Authentication
[ ] Emergency Contact SMS 
[ ] Export .csv of pack
[ ]
[ ]
[ ]
[ ]
[ ]
[ ]

<!-- Next to DO -->
Reducer to hold unpack history
Reducer to hold usercustom history
Sort these two out on Unpack

PUT functions that update edits in unpack

Write Load Pack

Think through how to track/save/load a
pack from "edit"