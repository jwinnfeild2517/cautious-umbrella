This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Install the dependencies
```
yarn
```

Start the server
```
yarn dev
```

## Read the documentation
* https://www.openbrewerydb.org/documentation
* https://nextjs.org/docs
* https://swr.vercel.app/docs/getting-started
* https://styled-components.com/docs
* https://reactjs.org/docs/hooks-overview.html

## Project Overview

This application has a few basic pages which display data from the Open Brewery Database API. The Home page, Search page and Brewery Detail page represent a typical information hierarchy which exists on many sites. Your task is to fix a few bugs, add some features and clean up this version of the application.

Below are several tasks from which you can choose. Please choose at least 3 of these tasks. Spend no more than 4 hours on this coding challenge.

## Challenges
* Accessibility
  * Use what you know about A11Y to find and fix potential A11Y issues throughout the site
* Testing
  * There is one very basic test in this project and that's pretty terrible. Provide additional test coverage for untested components.
  * Use any library or setup you are prefer
  * Can you mock network requests?
  * Can you simulate user interactions?
* Search Autocomplete in the site header
  * The results presented should link directly to the brewery detail page.
  * Hitting enter on the form should **route** the user to the brewery search page.
  * Pay special attention to performance and accessibility
* General Cleanup
  * Several components render data that's sometimes `null`.
  * Suppress any empty DOM nodes or, provide a sensible default
  * Styles
    * The current app isn't exactly hard on the eyes but it's not a work of art either.
    * Enhance the visual display of the application - get creative. Use maps, data formatting, placeholder images, etc. Spruce it up a little!
  * Error handling (timeouts, try/catch, etc). This app is pretty darn optimistic at the moment. Introduce some better error handling to account for the unpredictable nature of the web.
* Search loading state
  * Most sites include a 'loading' or skeleton component while data populates
  * Create a nice loading state for the results grid.
* Search page pagination
  * create a basic pagination controls to move between paged recordsets
* Index page brewery type browsing controls
  * The Brewery API allows easy filtering by [Brewery Type](https://www.openbrewerydb.org/documentation/01-listbreweries).
  * Add filter controls to the index page (and search page if you want)
  * Pay attention to performance and A11Y
* Index page grid geolocation
  * The featured brewery on the home page uses a popular geolocation hook. Expand the use of this hook so the user's location can be easily used in other components by using Context.
  * Provide a fallback location in the event a user declines sharing their location.
