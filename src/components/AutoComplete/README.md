Create a reusable component to provide an auto-completing drop-down list.
Don't use a ready-made component even though many are available in all frameworks

Given and array of options in this format (see MOCK_DATA.json):

const options = [
    { label: "Steve Austin", : value: 1 },
    { label: "Jamie Sommers", : value: 2 },
    ...
]

Display an input field that autocompletes as the user is typing.
If user types s or S, 'Steve Austin' and any other options that begin with S will be displayed
Matching elements will be displayed in a dropdown list below the input field.

Component should take 'options' as input and notify upon selection
  (item is selected either by pressing 'enter' or clicking on item in the list)
Result of the selection should display selected 'label' and 'value' as text below the input field.

