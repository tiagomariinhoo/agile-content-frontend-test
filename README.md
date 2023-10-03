
# Agile Content Frontend test - Tiago Marinho

What would you have done differently if you had more time? Why?

I would have implemented a dark mode like I did in my portfolio: https://tiagomarinho.netlify.app/ (but I made it using Styled Components and I was advised not to use it here).

I would have written more tests for some different flows.

I would have implemented an "infinite scroll". I could load more than 100 animals as data and use this functionality.

I would have implemented an algorithm to help the user to rewrite the search suggesting an existing word close to the one he wrote.

I also would implement a Skeleton Loading for the Preview Card (when the user taps on a title to open a preview).

Notes:

I implemented some small features that could help the user and the tests.

- If the user is on the '/search' page, they canclick on the Google logo to return to the home page.
- Since the <img> takes a while to loading, the modal preview is only shown when the image is completely loaded.
- You can change the setTimeout time in './api/animals.ts' to see the skeleton loading animation.
- In case you have selected a item and it's showing the modal as tablet/phone mode, if you click outside the modal, it will close the modal.

Instructions to run:

npm install

npm run dev (to run the project)

npm run test (to run the tests)


## Authors

- [@tiagomariinhoo](https://www.github.com/tiagomariinhoo)