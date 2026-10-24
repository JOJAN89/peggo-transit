# Sprint 3 – Architecture Explanation
**Project: PeGGo – Winnipeg Transit Tracking**

In Sprint 3, I worked on improving the structure of my PeGGo application. I already had Bus Routes and Favourite Routes working, so this sprint was mainly about organizing my code better.

# 1. Custom Hooks

**useRouteSearch.ts**

This hook handles searching bus routes. It keeps track of what the user types and filters the routes. I use it on both the Bus Routes and Favourite Routes pages.

I put this code in a hook because both pages need the same search functionality.

**useFavourites.ts**

This hook helps both pages share the same favourite routes. When I add or remove a favourite, the change appears on both pages.

I used this hook so I don't have to pass favourite information through App.tsx.

# 2. Services

**routeService.ts**

This service checks route information before creating a route. For example, it checks whether the route number is valid and whether the number already exists.

I put these checks in a service to keep business rules separate from the page.

**favouriteService.ts**

This service handles adding, removing, and clearing favourite routes. It also checks that the same route is not added twice.

I used a service because these are rules for how the application should work.

## 3. Repositories

**routeRepository.ts**

This repository stores the bus routes and handles creating, reading, updating, and deleting route information.

**favouriteRepository.ts**

This repository stores favourite routes. It also provides functions to add, find, update, and remove favourites.

I used repositories to keep data storage separate from the services and components.

### 4. Test Data

**routesData.ts**

I created an array containing 10 sample Winnipeg bus routes. The Route Repository imports this data and uses it when the application starts.

This helps me test the application without needing a database.

### 5. Components

**BusRoutes.tsx**

This page displays bus routes, lets users search, creates new routes, and allows users to add favourites. It uses the Route Service and custom hooks.

**FavouriteRoutes.tsx**

This page displays saved routes. Users can search, remove one favourite, or clear all favourites. It uses the shared Favourites Hook.

**App.tsx**

App.tsx now mainly handles navigation between the two pages. I removed the shared favourite state from this file.

### 6. How Everything Works Together

The components display the information. The hooks manage the page behaviour and shared state. The services handle the business rules, and the repositories handle the data.

For example, when I add a favourite, the component calls the hook, the hook calls the service, and the service saves the route through the repository.

### 7. Conclusion

In Sprint 3, I improved the organization of my project without changing its main purpose. My code is now separated into components, hooks, services, and repositories.

This makes the application easier to understand, maintain, and update in future sprints.