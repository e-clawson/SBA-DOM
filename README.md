# SBA 316-DOM

# About (Description of Application)



# Download Instructions 



# Reflections 
- What could you have done differently during the planning stages of your project to make the execution easier?

- Were there any requirements that were difficult to implement? What do you think would make them easier to implement in future projects?

- What would you add to, or change about your application if given more time?

- Use this space to make notes for your future self about anything that you think is important to remember about this process, or that may aid you when attempting something similar again:


<!-- Notes from the assignment  -->
# Introduction
This assessment measures your understanding of the Document Object Model (DOM) and your capability to implement its features in a practical manner. You have creative freedom in the topic, material, and purpose of the web application you will be developing, so have fun with it! However, remember to plan the scope of your project to the timeline you have been given.

This assessment has a total duration of two (2) days. This is a take-home assessment.

You have two total days (including weekends and holidays) to work on this assessment. This assessment will be due at 5:00pm on the second day after it is assigned. Your instructor may provide you with class time to work on the assessment, schedule permitting.

# Objectives
Use DOM properties, methods, and techniques to create a web application that provides a dynamic user experience.

Use BOM properties, methods, and techniques to facilitate creation of a dynamic web application.

Demonstrate proficiency with event-driven programming and DOM events.
Implement basic form validation using any combination of built-in HTML validation attributes and DOM-event-driven JavaScript validation.

# Submission
Submit the link to your completed assessment using the Start Assignment button on the Assignment page in Canvas.

# Instructions
You will create a small single-page web application. The topic and content of this application is entirely up to you; be creative!
Your work will be graded according to the technical requirements listed in the following section. Creativity and effort always work in your favor, so feel free to go beyond the scope of the listed requirements if you have the time.

Keep things simple. Like most projects you will encounter, you should finish the absolute minimum requirements first, and then add additional features and complexity if you have the time to do so. This will also help you understand what you can get done in a specific allotment of time if you were to be asked to do something similar in the future.

Once you have an idea in mind, approach your design through the user's perspective. User experience is one of the most important aspects of successful web design. If users enjoy their time on with your application, they are more likely to trust whatever services or information you offer, and more likely to come back and use the application again in the future.

Since topic and content are secondary to functionality for this assessment, we have included some resources below for free content that you can use to populate your application. Once you have gotten your functionality in place, you can return and fill in the content with something interesting.

# Resources for free content:
- Text: Lipsum, a Lorem Ipsum text generator.
- Images: Pexels, a resource for stock photos (and other media).
- GIFs: Motion Elements, a resource for GIFs (and other media).

# Requirements
The requirements listed here are absolute minimums. Ensure that your application meets these requirements before attempting to further expand your features.

Create your application locally, and initialize a local git repo. Make frequent commits to the repo. When your application is complete, push your repo to GitHub and submit the link to the GitHub page using the submission instructions at the top of this document.

Requirements(18): 

1. Cache at least one element using selectElementById.

    * added a getElementById to cache the header element in the variable headerEl 

2. Cache at least one element using querySelector or querySelectorAll.

    * added a querySelector to index.js to find the first instance of an h1 to cache in the variable headerEl

3. Use the parent-child-sibling relationship to navigate between elements at least once (firstChild, lastChild, parentNode, nextElementSibling, etc.).
<!--  not sure what to do for this  -->
4. Iterate over a collection of elements to accomplish some task. (forEach)

    * utilized forEach to iterate over the collection navBarTabs to create a tags with links for each to populate the navigation bar 

5. Create at least one element using createElement.

    * utilized the above forEach to create <a> elements for each navbar item 

6. Use appendChild and/or prepend to add new elements to the DOM.

    * utilized the above forEach to append each new <a> element to the navBar 

7. Use the DocumentFragment interface or HTML templating with the cloneNode method to create templated content. 

    * utilized DocumentFragment to create card template - wasn't sure how to do this at first but followed the following documentation (https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) and example and modified to cards instead of list items. 

8. Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent.

    * on the contact form, added a thank you message that pops up when the submit button is pressed. 
    <!-- not working right now need to fix  -->

9. Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties.

    * update the nav bar to change color on click like we did in our lessons 
    * the page display also changes based on which tab in navbar a user clicks 

10. Modify at least one attribute of an element in response to user interaction.

<!-- not sure what to do for this i feel like multiple other reuqirements satisfy this  -->
<!-- attributes - onClick -->

11. Register at least two different event listeners and create the associated event handler functions.

<!-- on click for the nav bar and on submit for the contact form  created an event handler to change the display ont he page when the different tabs of navbar are clicked -->
<!-- or could possibly use window. -->

    * one for the submit form - on click a thank you message appears 
    

12. Use at least two Browser Object Model (BOM) properties or methods.
<!-- could use window.location method to add the page location to each page -->
<!-- or could possibly use window.assign to load new page -->

13. Include at least one form and/or input with HTML attribute validation.
<!-- contact form - require name to be filled, require email to match email requirements -->
14. Include at least one form and/or input with DOM event-based validation. (This can be the same form or input as the one above, but should include event-based validation in addition to the HTML attribute validation.)
<!-- same as above - gotta dig deeper into this  -->
15. Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit).
<!-- so far so good, but rn the item cards aren't displaying  -->
16. Commit frequently to the git repository. (8 - 10 commits)
    * committed at least 9 times already 
17. Include a README file that contains a description of your application.
    * please enjoy the current README
18. Level of effort displayed in creativity, presentation, and user experience.
