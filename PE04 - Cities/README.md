
# Input

The **input** to the Cities Application consists of user-provided city details: the city’s  **name** ,  **country** , and  **population** . These values are entered through a form in the "Add City" page. The form requires all fields to be filled in before submission.

# Process

Upon form submission, the application processes the input data by creating a new city object with a unique ID (generated from the current timestamp). This new city object is added to the existing cities list stored in React state. React state ensures that the UI reflects the updated city list. Navigation is handled by  **React Router** , allowing the user to seamlessly switch between the city list, add city form, and city details pages without a full-page reload.

# Output

The **output** is a dynamically updated list of cities. Each city is displayed on the "Cities List" page, and clicking on a city name navigates to a detailed page with information about the selected city (name, country, population).
