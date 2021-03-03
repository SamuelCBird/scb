# [samuelcbird.co.uk](http://www.samuelcbird.co.uk)
## A Personal Portfolio Website

First and foremost I wanted to create a website where I could showcase personal projects and achievements, with one of those being the website itself. But additionally, as an aspiring front end developer, I wanted a project to push my learning.

# Current Status

Version 1.0 is currently live at the link above. I am currently working on Version 1.1.

# Overview and Current Features

- The homepage features a card based design, with each card a link that opens a lightbox or modal that displays the information for that project.

- As the information in the lightbox is important, (rather than a pop up '*Subscribe to this newsletter*', I wanted to make sure they had links so that it would be possible to direct people to specific projects if I wanted to.

- The navbar has three links (Music, Photography and Programming' that act as a filter to the selectable projects.

- In Version 1.0 the data is held in a seperate Javascript file and exported as an array of objects. 

- I worked hard trying to make it responsive to different browser window sizes, and mobile devices. The header component has an event listener so I was programatically able to adjust text in the header to accommodate mobile broswers.

- The hover animations are all created with the Framer Motion API.

# Future Features

- Currently I'm working on integrating a Firebase Firestore database to hold all the project data and Firestore Storage to hold the images. This meaning that I can add new projects without having to rebuild and republish the React site.
