### Course Reference ####
* https://app.pluralsight.com/library/courses/css-grid-creating-layouts/table-of-contents

### Grid in css

### Grid is used in 2d layouts. It's the first proper layout in CSS. For 1d layouts you can use flexbox to align the items. ###
****
    Example:
    
    container {
        display: grid;
    }
***

###### ************* Important properties for grid container *******************######   

### grid-template-columns: Define no of columns in the grid with their sizing
### grid-template-rows: Define no of rows in the grid with their sizing

***
    Example:
    
    container {
        display: grid;
        grid-template-columns: 12em 12em 12em 12em  // Make 4 columns of size 12em each
        grid-template-rows: 20em 20em  // Make 2 rows of size 20em each
    }

   There is a shorthand property for this grid-template: rows / columns 
   or in above example instead of using grid-template-columns, grid-columns-rows just use grid-template  

   Example:

       container {
        display: grid;
        grid-template: 20em 20em / 12em 12em 12em 12em  
    }

    For other shorthand property related to sizing please refer to grid.css and its comments, try to run grid.html and see the behaviour by playing around it

***


### grid-auto-flow is a property that defines how grid will flow row wise or column wise. There is one more way as well dense which we will cover later on. 
### By defaukt grid-auto-flow is row based.
***
   
   Example:

       container {
        display: grid;
        grid-template: 20em 20em / 12em 12em 12em 12em;
        grid-auto-flow: column  
    }
    For other information please refer to grid.css and its comments, try to run grid.html and see the behaviour by playing around it.

***

### Start end property for the grid elements. Suppose we have a grid that contains 4 elements
### header, nav, main, footer. Now you wanr header and footer to take up the whole row or cover up all the columns in their rows.
### grid-column-start, grid-column-end, grid-row-start, grid-row-end are few properties for grid items or children of the grid that helps to keep them aligned
*****
   
   Example:

       container {
        display: grid;
        grid-template: repeat(auto-fill, 1fr) / repeat(4, 1fr); // Please refer to grid.css for what that auto-flow, 
    }

This will create 1 row and 4 columns.
|   header  |   nav   |  main  |  footer   |
1           2         3        4           5

1,2,3,4,5 are column lines created with the grid

now we want header and nav to take up the enire row, so what we wll do is
header, footer {
    grid-column-start: 1;
    grid-column-end: 5;
}

1. Now header will take entire first row.
2. nav and main will be in the middle row.
3. footer will take up entire 3rd row.


Please refer to grid.css & comments for next steps and try to play around the comments given.


****

Basic theory of grid is over.
### Reading all the comments of the css files is a must.
1. First you have to go through grid.html and grid.css. 
2. Second go through Implicitgridgap.html and implicitgridgap.css
3. Go for AlignGrid.html & AlignGrid.css
4. Go for _12Columns.html, _12columns.css