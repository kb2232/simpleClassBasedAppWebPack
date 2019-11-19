# class based components

NOTES ARE MADE FOR REFERENCE TO OTHERS IN ORDER TO HELP GUIDE LEARNING #kunle babatunde

  ### when to use it
    - use functional if it is a simple content
    - use class for everything else

  ### application type
    - detect what season you are in
    - use google geolocation
    - use geolocation API
    - Northen Hem: summer - Apr to September
    - Souther Hem: summer - Oct to March

  ## states
    - can only be modified in setState()

  ## constructor
    - not required by react but only by Javascript
    - the constructor function is the first function called whenever an instance of the class is created.
    - you must call the super function inside the class in order to make sure the parent's constructor function get's called.
    - super is a reference to the parents constructor's function

  ## life cycles (only the most used)
    - constructor (called first to initialize state variables) - (this is a good place to do a ONE time setup like initialization) - official documents says 
    NO data loading in constructor->
    - render (make visible on screen - return JSX)->
    - componentDidMount (content is visible on screen) - (this is perfect location to do data loading from backEnd or Api)->
    - componentDidUpdate (sit and wait for updates - RENDER is called right before update as a result of setState) - (after state has changed, you can load more data here)->
    - componentWillUnmount (wait until component is not longer visible) - good place to clean up->