
Unit Tests:

A function called "multiplication" that returns the product of the two input numbers.

//         Expect multiplying 2 input numbers to return the product of the 2 numbers
//         Expect input to be number
//         Expect output to be number
//         Expect the output when multiplying 2 negative numbers  to be positive
//         Expect the output when multiplying 1 positive and 1 negative number  to be negative
//         Expect the output when multiplying 2 positive numbers to be positive

 A function called "concatOdds" takes two arrays of integers as arguments. It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays.
    Example: concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1])
                ...should result in [-1, 1, 3, 9, 15]
            Think about the following; you may need to make assumptions or decisions about the prompt and how the code should behave:
                What should happen with unexpected inputs?
                    What kinds of unexpected inputs should we worry about?

                    // Expect at least one integer in array 
                    // Expect each index in array is an integer
                    // Expect to throw error if index in array is not a number



                What should happen when there are multiples of the same odd number in the arrays? (Hint: We gave you the answer to this one in the example above.)

                    // Expect the return when multiples of the same number in the arrays to return one instance of the number( eg: 1, 2,2,4,7,8,9,9),[4,8,11,3,13] returns [1,2,3,4,7,8,9,11,13]


Functional Tests:

     A shopping cart checkout feature that allows a user to check out as a guest (without an account), or as a logged-in user. They should be allowed to do either, but should be asked if they want to create an account or log in if they check out as a guest.
                
     Think about the following; you may need to make assumptions or decisions about the prompt and how the feature should behave:
                   
     What should happen if the cart is empty?

    //  if cart is empty. Ask user to sign in/ create account or search for items to add to cart
                    
     What needs to be shown to the user at each step of check out?

    // total cost of cart should be shown
    // return to shopping with cart saved option should be shown
    // allow option for user to create account/login/continue as guest
                    
     What behaviors of this feature does the prompt miss or gloss over?

    // cost of shipping and additional prompts like insurance
    // manipulating cart. eg adding/ removing items from cart directly
                
     Hint: Observe the shopping cart and checkout features of some popular websites to get some ideas!