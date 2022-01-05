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
  [ 👍 ] usercustom reducer
  [ 👍 ] user headouts reducer

  <!--  -->
  [ 👍 ] Gear.saga GET
  [ 👍 ] Consumables.saga GET
  [ 👍 ] Packs.saga GET
  [ 👍 ] categories.saga GET
  [ 👍 ] userCustom GET
  [ 👍 ] userHeadouts GET
  [ 👍 ] Unpack PUT trip
  [ 👍 ] Unpack PUT gear
  [ ] Unpack PUT category?
  [ 👍 ] Unpack DELETE
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
    [ 👍 ] Show User's Custom Gear
    [ ] Show by Category
      [ ] Conditional Render
  [ 👍 ] ADD to currentPack
    [ 👍 ] currently generating new ID to avoid duplication
  [ ] MUI & layout
    [ ] Needs that stylin'

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
      [ 👍 ] Load Pack
      [ ] Load Category

<!--  -->
[ ] Unpack View
  [ ] Reducers & Sagas
    [ 👍 ] Reducer to hold trips
    [ 👍 ] Reducer holds all usercustom
    [ 👍 ] SAGA GETS
    [ 👍 ] SAGA for trip PUT name/notes
    [ 👍 ] SAGA for gear PUT weight/notes
    [ 👍 ] SAGA for trip DELETE
      trip and gear
  [ ] Server-side Axios
    [ 👍 ] PUT routes for trip name/notes
    [ 👍 ] PUT routes for gear weight/notes
    [ 👍 ] DELETE headouts route
    [ 👍 ] DELETE assoc usercustom
  [ ] MUI & layout
    [ 👍 ] Collapsible tables (modal?)
    [ 👍 ] Edit Trip info Modal
    [ 👍 ] Edit gear info Modal
    [ 👍 ] display Category Name




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
[ ] Unpack Modal Views of gear
  [ ] Charts.JS graph of weight/category
[ ] Custom Headout Functionality
[ ] Wolfram API for weight/caloric ratios
[ ] MUI Accessibility
[ ] Inventory API Exploration
[ ] Weather API Exploration
[ ] Google Authentication
[ ] Emergency Contact SMS 
[ ] Export .csv of pack
[ ] redux-Persist for     currentPack
[ ] Sort Tables by Column
[ ]
[ ]
[ ]
[ ]

<!-- Next to DO -->
Think through how to track/save/load a
pack from "edit"

<!-- Known Bugs -->
[ ] Save Pack with empty CP
[ ] Blue Buttons layout
[ 👍 ] DELETE needs to clear items
    THEN clear headouts
    MERGE THEM
[ 👍 ] Adding 'My Stuff' to
    CurrentPack gets wonky
[ ] objectobject Pack Select
[ 👍 ] LOAD to Pack Index state
    Modal is always behind.