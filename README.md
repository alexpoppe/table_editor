# table_editor

An application to edit a table from a json file.

The application reads a json file and displays it in a table where it will also assign a unique id to every row. The user can click on the edit button on the right to edit the cells in that row. When clicking save, the file will be updated.

## Installation

This application is written in Flask which means the backend is coded in python and the frontend in HTML, JavaScript & CSS.
Follow these steps to run the program:

1. Clone the repository
2. Navigate in your terminal to the right folder

```cd table_editor```

3. Activate your python environment (Optional)

I advice you install a different environment for every project but this is not absolutely necessary.
You could use conda to manage your environments for example.

4. Install the packages

```pip install -r requirements.txt```

5. Create a .env file with the necessary Environment variables.

This file is not shown in GitHub since it could contain sensitive information. You can create a new file in the root folder with the name << .env >> and create the lines with the name of the variable and the value.

In this project I created the following environment variables:
- FLASK_DEBUG --> Can be set to 1 or 0 depending if you run in debug mode or not
- FLASK_APP --> The name of the file with the basis of the flask application
- FLASK_RUN_PORT --> The port your flask application will run on

6. Run the flask application

```flask run```

7. Open a browser window and navigate to http://127.0.0.1:PORT with PORT the port number given in the FLASK_RUN_PORT environment variable