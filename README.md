# Blocks

# This is the capstone project for The University of Sydney COMP5703 Semester 2, 2023

## Getting Started

Pre-requisites:

- Node.js 16.20.1 or higher
- npm 8.19.4 or higher

1. Clone this repository.
2. Install the dependencies:

```
npm install
```

3. Run the development server:

```
npm run dev
```

The site will be available at http://localhost:3000.

## Features

- The site is built with Next.js, a React framework that is designed for server-rendered applications.
- The site uses the nextra.site starter kit, which provides a number of features out of the box, such as a pre-configured stylesheet, a navigation bar, and a footer.
- The site is also configured to use npm, which makes it easy to install and manage dependencies.

## How to use this Framework

### MDX Support

Every page in the site is an MDX file. MDX is a file format that lets you write JSX in Markdown documents. This means that you can write React components in Markdown files.

In this case, the Blocks framework uses MDX to create a component library. Under each page, we have included a number of different configurations of a component. For example, under the "Button" page, we have included a number of different buttons, such as a primary button, a secondary button, a disabled button, and so on.

### "Show More" Functionality

We have developed the "Show More" functionality for the component library. This functionality allows you to show and hide the remaining code in the code block. This is useful for components that have a lot of code, such as the "Chat" component.

### "New Tab" Functionality

When user views the examples page. They would need to view the Page by opening it in a new Tab. This is because the example pages are responsive and the user would need to view it in a larger screen to see the full effect.

## GitHub Workflow

During the development of this project, we have utilised the **Skullcandy** Git Workflow. **Skullcandy** uses a modified Git flow process to manage the software development.

### Branches:

- **master:** The stable and production-ready codebase.
- **develop:** Ongoing development branch where features are merged before going to master.
- **feature:** Branches for individual features or bug fixes. Merged into develop after completion.
- **hotfix:** Branches for urgent fixes deployed directly to master.

### Workflow:

1. **Feature branches:** Created for each new feature or bug fix.
2. **Code review:** Developers review each other's code before merging.
3. **Merging:** Feature branches are merged into develop after review and testing.
4. **Deployments:** Merges to develop trigger automated builds and deployments to staging environments.
5. **Testing and feedback:** The staging environment is used for testing and gathering feedback before deployment to production.
6. **Production deployment:** Merges to master trigger deployment to the live production environment.
7. **Hotfixes:** Urgent fixes are deployed directly to master through hotfix branches.

### Benefits:

- **Improved collaboration:** Clear branching structure facilitates teamwork and code ownership.
- **Code quality:** Code reviews ensure high standards and fewer bugs.
- **Faster deployments:** Automated builds and deployments streamline the process.
- **Flexibility:** Hotfixes allow for quick responses to critical issues.

## Group Work Distribution

### Components

<hr />

#### Heran Wang: Tags, Links, Checkbox, Table

#### Harrison: Tooltip, Search, Radio Group, Form

#### Vivian Yitong He: Tabs, Panel, Breadcrumbs, Navigation

#### Ke Louis Liu: Button, Calendar, Toast, Misc

#### Chaoyang Li: Alerts, Dropdown, File Upload, Slide

#### Richard Lee: Accordion, Card, Modal, Chat

### Pages

<hr />

#### Heran Wang: Page 5 - Utilities

#### Harrison: Page 3 - Portfolio

#### Vivian Yitong He: Page 1 - Basic Layout

#### Ke Louis Liu: Page 6 - Responsive Layout

#### Chaoyang Li: Page 2 - Static Layout

#### Richard Lee: Page 4 - Business

## Components Available

### Accordion:

- https://designsystem.web.unimelb.edu.au/components/accordion/
- https://digitalnsw.github.io/nsw-design-system/components/accordion/index.html
- https://design-system.service.gov.uk/components/accordion/
- https://ui.shadcn.com/docs/components/accordion
- https://flowbite.com/docs/components/accordion/

### Alerts:

- https://design-system.service.gov.uk/components/notification-banner/
- https://digitalnsw.github.io/nsw-design-system/components/global-alert/index.html
- https://ui.shadcn.com/docs/components/alert
- https://flowbite.com/docs/components/alerts/

### Breadcrumbs:

- https://design-system.service.gov.uk/components/breadcrumbs/
- https://digitalnsw.github.io/nsw-design-system/components/breadcrumbs/index.html
- https://flowbite.com/docs/components/breadcrumb/

### Button:

- https://design-system.service.gov.uk/components/button/
- https://digitalnsw.github.io/nsw-design-system/components/button/index.html
- https://ui.shadcn.com/docs/components/button
- https://flowbite.com/docs/components/buttons/
- https://react.carbondesignsystem.com/?path=/docs/components-button--overview

### Calendar:

- https://ui.shadcn.com/docs/components/calendar
- https://react.carbondesignsystem.com/?path=/docs/components-datepicker--overview

### Card:

- https://designsystem.web.unimelb.edu.au/components/card/
- https://digitalnsw.github.io/nsw-design-system/components/card/index.html
- https://ui.shadcn.com/docs/components/card
- https://flowbite.com/docs/components/card/

### Chat:

- https://www.w3schools.com/howto/howto_css_chat.asp
- https://www.w3schools.com/howto/howto_js_popup_chat.asp

### Checkbox:

- https://designsystem.web.unimelb.edu.au/components/checklist/
- https://design-system.service.gov.uk/components/checkboxes/
- https://react.carbondesignsystem.com/?path=/docs/components-checkbox--overview
- https://ui.shadcn.com/docs/components/checkbox

### Dropdown:

- https://design-system.service.gov.uk/components/select/
- https://ui.shadcn.com/docs/components/dropdown-menu
- https://react.carbondesignsystem.com/?path=/docs/components-dropdown--overview
- https://flowbite.com/docs/components/dropdowns/

### File upload:

- https://design-system.service.gov.uk/components/file-upload/
- https://digitalnsw.github.io/nsw-design-system/components/file-upload/index.html
- https://flowbite.com/docs/forms/file-input/
- https://react.carbondesignsystem.com/?path=/docs/components-fileuploader--overview

### Form:

- https://www.w3schools.com/howto/howto_css_login_form.asp
- https://www.w3schools.com/howto/howto_css_signup_form.asp
- https://www.w3schools.com/howto/howto_css_checkout_form.asp
- https://www.w3schools.com/howto/howto_css_responsive_form.asp
- https://www.w3schools.com/howto/howto_css_contact_section.asp
- https://www.w3schools.com/howto/howto_js_form_steps.asp

### Links:

- https://designsystem.web.unimelb.edu.au/components/quicklinks/
- https://digitalnsw.github.io/nsw-design-system/components/link-list/index.html
- https://flowbite.com/docs/typography/links/
- https://react.carbondesignsystem.com/?path=/docs/components-link--overview

### Misc:

- https://www.w3schools.com/howto/howto_css_browser_window.asp
- https://www.w3schools.com/howto/howto_js_treeview.asp
- https://www.w3schools.com/howto/howto_js_active_element.asp
- https://www.w3schools.com/howto/howto_css_pagination.asp

### Modal:

- https://designsystem.web.unimelb.edu.au/components/modal/
- https://digitalnsw.github.io/nsw-design-system/components/dialog/index.html
- https://react.carbondesignsystem.com/?path=/docs/components-modal--overview
- https://ui.shadcn.com/docs/components/hover-card
- https://flowbite.com/docs/components/modal/

### Navigation:

- https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
- https://www.w3schools.com/howto/howto_css_sidebar_responsive.asp
- https://www.w3schools.com/howto/howto_js_full_page_tabs.asp
- https://www.w3schools.com/howto/howto_css_dropdown_navbar.asp
- https://www.w3schools.com/howto/howto_css_mega_menu.asp

### Panel:

- https://design-system.service.gov.uk/components/panel/

### Radio Group:

- https://headlessui.com/react/radio-group

### Search:

- https://designsystem.web.unimelb.edu.au/components/search/
- https://digitalnsw.github.io/nsw-design-system/components/hero-search/index.html
- https://flowbite.com/docs/forms/search-input/
- https://react.carbondesignsystem.com/?path=/docs/components-search--overview

### Slide:

- https://www.w3schools.com/howto/howto_js_quotes_slideshow.asp
- https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp
- https://www.w3schools.com/howto/howto_js_lightbox.asp
- https://www.w3schools.com/howto/howto_js_tab_img_gallery.asp

### Table:

- https://www.w3schools.com/howto/howto_css_table_zebra.asp
- https://www.w3schools.com/howto/howto_css_pricing_table.asp

### Tabs:

- https://designsystem.web.unimelb.edu.au/components/tabs/
- https://design-system.service.gov.uk/components/tabs/
- https://digitalnsw.github.io/nsw-design-system/components/tabs/index.html
- https://ui.shadcn.com/docs/components/tabs
- https://flowbite.com/docs/components/tabs/
- https://react.carbondesignsystem.com/?path=/docs/components-tabs--overview

### Tags:

- https://designsystem.web.unimelb.edu.au/components/tags/
- https://design-system.service.gov.uk/components/tag/
- https://digitalnsw.github.io/nsw-design-system/components/tag/index.html
- https://ui.shadcn.com/docs/components/badge
- https://flowbite.com/docs/components/badge/
- https://react.carbondesignsystem.com/?path=/docs/components-tag--overview

### Toast:

- https://ui.shadcn.com/docs/components/toast
- https://flowbite.com/docs/components/toast/

### Tooltip:

- https://digitalnsw.github.io/nsw-design-system/components/tooltip/index.html
- https://ui.shadcn.com/docs/components/tooltip
- https://flowbite.com/docs/components/tooltips/
- https://react.carbondesignsystem.com/?path=/docs/components-tooltip--overview

## Pages Available

### Page 1 - Basic Layout:

- https://www.w3schools.com/howto/howto_make_a_website.asp
- https://www.w3schools.com/howto/howto_css_blog_layout.asp
- https://www.w3schools.com/howto/howto_website.asp

### Page 2 - Static Layout:

- https://www.w3schools.com/howto/howto_website_static.asp

### Page 3 - Portfolio:

- https://www.w3schools.com/howto/howto_website_create_portfolio.asp

### Page 4 - Business:

- https://www.w3schools.com/howto/howto_website_business.asp

### Page 5 - Utilities:

- https://www.w3schools.com/howto/howto_js_countdown.asp
- https://www.w3schools.com/howto/howto_css_about_page.asp
- https://www.w3schools.com/howto/howto_css_coming_soon.asp

### Page 6 - Responsive Layout:

- https://www.w3schools.com/howto/howto_css_media_query_breakpoints.asp
- https://www.w3schools.com/howto/howto_css_two_columns.asp
- https://www.w3schools.com/howto/howto_css_three_columns.asp
- https://www.w3schools.com/howto/howto_css_four_columns.asp
- https://www.w3schools.com/howto/howto_js_list_grid_view.asp
- https://www.w3schools.com/howto/howto_css_zig_zag_layout.asp

## License

This project is licensed under the MIT License.
