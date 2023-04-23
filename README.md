<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-qQvN2WXNz8M/sJN4i4c7aZys75OTu8iVxJVXsZl7V0zWVRu8PWV1i0mEgsNCeBtJOJBJtSeFB1tVTZ/BpYiDfQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

# Angular Exercise0

## This app takes user's input and sorts one word a time. It sorts it based on word's length(odd or even).
### Techniques that used :

- #### Angular directives: [(ngModel)]  for two-way data binding which allows the user input to be stored in the userInput variable and displayed in the input field, *ngIf directive to conditionally show or hide the error message when the user input contains spaces. 
- #### Event binding: It uses (click) event binding to listen for clicks on the "Submit" button and call the onUserClick method. 
- #### Property binding: It uses [disabled] property binding to disable the "Submit" button when the user input contains spaces, it also uses  property bindings to pass data to the child components app-odd-length-words and app-even-length-words from parent user - input)
  
- #### Also used : Bootstrap, CSS




## Test it here   ➡️ <i class="fa-sharp fa-solid fa-arrow-right fa-beat-fade">https://nikos-moutafis.github.io/angular-exercise-0-/</i>

