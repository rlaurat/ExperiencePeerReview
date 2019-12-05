# ExperiencePeerReview

ExperiencePeerReview is a web application designed to allow BCIT students to share opinions and reviews of their programs.  
ExperiencePeerReview uses Google's firebase database, authentication and hosting features.

View the hosted version of the application here: experiencepeerreview.firebaseapp.com

Features include: 

- Creating user accounts
- Writing Program Reviews
- Reading All Program Reviews
- Viewing and Editing review history

Styling includes:

- a navigation bar available on all pages

## Database Structure

The database holds two main collections: Users and Programs.  The Users collection stores user information upon site registration.
The Programs collection stores documents of BCIT Program names, which store collections of User Reviews, which store documents 
of input data from users.  

## Top Level Files

The following files contribute to the application's core functionality.

## index.html

The landing page for the application prompts users to select a BCIT program from a dropdown menu and then select from three options: 
- Write a Review
- Read Reviews
- View their Review History

## create_review.html

The create review page is the redirection from the write a review option listed above.  Users can fill out a form which allows them
to rank specific qualities of their program on a scale from 1 to 10 as well as leave a customized comment.  submitting the form will
submit the review to the public, searchable feed.

## format.html

This page is the redirection from the Read Reviews option listed above.  Users are able to read the opinions of other BCIT students.
Reviews are presented to the user from most recent to least recent.  

## history.html

This page presents the user with reviews that they have previously submitted. By clicking on any review in this page a user may
update or delete their previous statements.  
