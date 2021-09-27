Required Updates
1. Migrate all your CSS to a separate file called “styles.css”, store this in a folder called “css”, and link this file to your main website.
Done!

2. Create another folder for your JavaScript code (e.g.,“js”, "javascript", "src").
Done!

3. Implement a navigation bar/panel that responds to the cursor in some way (e.g., highlight). Your navigation bar must be in a distinct visual container at a prominent location on the screen and contain the following links:
    - The next student
    - The previous student
    - The GitHub course page
    - Your home page
    - Your about page
    - Your new contact form

4. You should implement a contact form with validation via your own JavaScript code and error reporting within the rendered website (as opposed to, for example, using a JavaScript alert). Your form must contain:
    - Last name (not null) (name of field should be user_lname)
    - First name (not null) (name of field should be user_fname)
    - Email address (name of field should be user_email)
        > http://data.iana.org/TLD/tlds-alpha-by-domain.txt (Links to an external site.)
        > (format: xyz@<domain>.<top-level domain> )
    - Phone number (format: 123-456-7890) (name of field should be user_phone)
    - Message (not null) (name of field should be user_message)
        >It should be easy for the user of your contact form to see their message without necessarily having to resize the field.

* If any fields are null or do not match the specified format, then your JavaScript code should render an appropriate error message indicating which fields are in error and why. Store your JavaScript in your “js” folder. You should not use jQuery or any other libraries for this component.

5. Register an account with EmailJS (Links to an external site.) and follow the steps necessary to send an email through the service to your udel google email service.

-- Validating your web page --
To get full credit, all your web pages must validate at validator.w3.org (Links to an external site.) in “HTML5 (experimental)”.