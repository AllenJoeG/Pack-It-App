## Base Mode
[ 👍 ] Skeleton Component Views
[ 👍 ] Nav Bar 
  [ 👍 ] Nav Bar STYLING
[ 👍 ] Database Creation from ERD
[ 👍 ] Loading Dummy Data for Inventory
[ 👍 ] Routes & Auth Routes for Views
<!--  -->
[ 👍 ] Reducers
  [ 👍 ] gear.reducer
  [ 👍 ] consumables.reducer
  [ 👍 ] categories.reducer
  [ 👍 ] packs.reducer
  [ 👍 ] currentPack.reducer
  [ 👍 ] cPIndex.reducer
  [ 👍 ] userCustom.reducer
  [ 👍 ] Headouts.reducer
  [ 👍 ] user.reducer
  [ 👍 ] error.reducer

  <!--  -->
[ 👍 ] Sagas
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

  [ ] initial load SCREAMINGCAMEL dispatch to hit all at once
  
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
[ ] Create Footer Functions
    [ ] Create Pack
    [ 👍 ] Create Item

<!--  -->
[ ] Pack View
  [ 👍 ] Reducers & Sagas
    [ 👍 ] currentPackReducer
    [ 👍 ] delete item w filter
    [ 👍 ] Pack Reducer Dropdown
    [ 👍 ] Category Reducer Dropdown
    [ 👍 ] ADD to pack dispatch
  [ 👍 ] Server-side Axios
    [ 👍 ] POST pack to usercustom
    [ 👍 ] POST new trip 
  [ 👍 ] MUI & layout
    [ 👍 ] Button Grid
    [ 👍 ] Table
    [ 👍 ] Styled
  [ 👍 ] Functionality
    [ 👍 ] Pack Dropdown
    [ 👍 ] Pack Capacity
    [ 👍 ] Cumulative Weight
    [ 👍 ] Category Dropdown
  [ 👍 ] Buttons
    [ 👍 ] Clear Pack Button
    [ 👍 ] Add line item
    [ 👍 ] Save Pack
    [ 👍 ] Load Pack
      [ ] Load Category

<!--  -->
[ 👍 ] Unpack View
  [ 👍 ] Reducers & Sagas
    [ 👍 ] Reducer to hold trips
    [ 👍 ] Reducer holds all usercustom
    [ 👍 ] SAGA GETS
    [ 👍 ] SAGA for trip PUT name/notes
    [ 👍 ] SAGA for gear PUT weight/notes
    [ 👍 ] SAGA for trip DELETE
      trip and gear
  [ 👍 ] Server-side Axios
    [ 👍 ] PUT routes for trip name/notes
    [ 👍 ] PUT routes for gear weight/notes
    [ 👍 ] DELETE headouts route
    [ 👍 ] DELETE assoc usercustom
  [ 👍 ] MUI & layout
    [ 👍 ] Collapsible tables (modal?)
    [ 👍 ] Edit Trip info Modal
    [ 👍 ] Edit gear info Modal
    [ 👍 ] display Category Name
  

<!-- Styling! --> 
  [ 👍 ] Pack
  [ 👍 ] Unpack
  [ 👍 ] Inventory
  [ 👍 ] Nav
  [ 👍 ] EditModal
  [ 👍 ] LoadModal
  [ 👍 ] UnpackModal
  [ 👍 ] Save Pack Modal
  [ 👍 ] Add Custom Gear Modal
  [ ] Add Custom Pack Modal

[ 👍 ] Basic style shell for UI/UX
  tertiary pages
  [ 👍 ] RegisterPage
  [ 👍 ] LoginPage
  [ 👍 ] AboutPage
  [ 👍 ] UserPage
  [ 👍 ] InfoPage
  [ 👍 ] LandingPage (special)

[ 👍 ] Style Forms
  [ 👍 ] RegisterForm
  [ 👍 ] LoginForm

  [ ] Mobile Responsive Breakpoints

<!-- Functional stuff -->
[ 👍 ] Load Pack not loading duplicates
[ 👍 ] Add To Pack clear inputs
[ 👍 ] Filling user reducers on login

[ 👍 ] Add Custom Item
  [ 👍 ] Buttons
  [ 👍 ] Modal Form
  [ 👍 ] Saga
  [ 👍 ] Server Route
  [ 👍 ] Functionality
  [ ] Form Controls

[ 👍] Save Pack Modal
  [ 👍] Button
  [ 👍] Modal Form
  [ 👍] Saga
  [ 👍] Server Route
  [ 👍] Functionality

<!-- Final Sprint -->
<!-- Content -->
[ ] Add Custom Pack
  [ 👍 ] Buttons
  [ ] Modal Form
  [ ] Saga
  [ ] Server Route
  [ ] Functionality

[ 👍 ] InfoPage
  [ 👍 ] How to Use PackItApp

[ ] AboutPage
  [ ] Elevator Pitch
  [ 👍 ] Tech Info

[ ] UserPage
  [ 👍 ] Picture
  [ 👍 ] Pack Count
  [ ] Weight
  [ ] Customization

<!-- Styling -->
[ 👍 ] Custom Color ThemeProvider
  [ 👍 ] Imported and app wrapped
  [ 👍 ] Colors finalized

[ ] LandingPage splash
  [ ] Register and Log-in Buttons

<!-- Bugs -->
[ 👍 ] Iron out useEffect dispatches to fill reducers. 
[ ] Solo add in Pack
  Should ref custom items also
[ ] Unpack not populating after save pack or refreshing on delete
[ ] Load pack and then saving
  should move notes, too.

<!-- Put a bow on it -->
[ 👍 ] database.sql file with newest table structures
[  ] Refactor and Modularize Code
[ 👍 ] Readme
[ 👍 ] USER STORY for PRESENT
<!--  -->

## Development Roadmap!
[ ] Snackbars
  [ ] Save
  [ ] Item Create
  [ ] Item Edit
  [ ] Pack Edit
  [ ] Pack Create
  [ ] Load

[ ] Headout Functional Programming
  [ ] Custom Headouts
  [ ] Custom Categories
  [ ] on gear and packs


[ ] Headout View
  [ ] Reducers & Sagas
  [ ] Axios Routes 
  [ ] Express Routes
  [ ] squel.js Server-side
  [ ] MUI & layout

[ ] Unpack Modal Views of gear
  [ ] Charts.JS graph of weight/category


[ ] MUI Accessibility
[ ] Wolfram API for weight/caloric ratios
[ ] Export .csv of pack
[ ] Inventory API Exploration
[ ] Weather API Exploration
[ ] Google Authentication
[ ] Emergency Contact SMS 
[ ] redux-Persist for     currentPack
[ ] Sort Tables by Column
[ ] track/save/load a
pack from "edit"
[ ]
[ ]


<!-- Cleared Bugs -->
[ 👍 ] DELETE needs to clear items
    THEN clear headouts
    chain the queries
[ 👍 ] Adding 'My Stuff' to
    CurrentPack gets wonky
[ 👍 ] LOAD to Pack Index state
    Modal is always behind.