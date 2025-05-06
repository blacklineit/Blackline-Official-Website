### General

Rules
- For any new libraries, prefer open source.
- Use modern C# and ASP.NET 8/9 approaches.
- Prefer simple solutions without a lot of abstractions.
- For any changes to development workflow, please update the README.md with instructions.
- Use async/await where possible 

### UI

Rules:
-Always use modern Bootstrap 5
-Prefer Razor Pages.
-Make any UI you generate beautiful, while following the conventions of Bootstrap 5.

### Build & Run

Always try to build and tun the app after you are done with any code changes.

To build the app:
dotnet build

To run the app:
dotnet run --urls=https://localhost:7013

If you need to validate changes on a particular Controller, Page, or View, run the web app on port 7013 and launch the browser, allowing me to navigate to the page.

### Dependencies

To install dependencies from Nuget:
dotnet add package {package name}