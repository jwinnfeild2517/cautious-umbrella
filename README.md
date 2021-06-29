# Next.js/React Code challenge

## Purpose

Illustrate you have a solid grasp of the fundamentals required to create a react/next.js based application by building a simple multi-route SPA using the Open Brewery DB API (https://www.openbrewerydb.org/documentation/01-listbreweries).

## Expectations

ATK does have it's own design and UI team so we don't expect a pixel perfect design but we do expect that you'll have a solid understanding of page composition, accessibility and proper markup. Your application will be created in a compressed timeframe (we suggest 4-5 hrs but please no more than 6-8 hrs) so we don't expect a work of art or a magnificent feat of engineering. Your app should interact with the api in a way that provides the user with a reasonable browsing and discovery experience.

Get as much done as you can, but don't worry if you don't finish it all in the alotted time. We're looking at how you organize your code, manage api requests and structure your markup. We'd prefer 50% done with 100% great code, markup and layout than 100% done with a rushed implementation and inaccessible markup.

## Requirements

### Getting started

1) https://nextjs.org/docs <-- use `create-next-app` to lay the foundation. Choose typescript or javascript, either is fine.

### Home Page

1) Highlight a "featured" brewery. The logic regarding "featured" is yours to determine. This could be a brewery in a random geographic region, type of brewery or even based upon the user's current location.

2) Provide a 'browseable' grid of breweries with a 'Type' filter corresponding to the `by_type` filter options here: https://www.openbrewerydb.org/documentation/01-listbreweries. Pagination is not required. Show only the first page of results. The results grid should have a mobile first design that changes the number of items per row from two, to three, to four, when resizing the browser from mobile through desktop sizes.

### Search Page

1) Provide a simple search interface with a search input and a grid of results. The grid should follow the same 2-up, 3-up, 4-up pattern from the browse page.

### Detail Page

1) Display the full details of a brewery using the `id` value from the search or browse page result set. Make use of as many details from the api as possible, being sure to prevent errors from missing data.

2) Display a short list of 'similar' breweries based on `brewery_type`

3) Display a list of other breweries "near by" based on lat/lng data (if available)
