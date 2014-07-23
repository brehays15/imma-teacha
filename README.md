Coding:101
=======================
Here is the basics of how to code like a boss on Javascript...

# Installation

### On runnable.com:
Create a new node app, and from the terminal, enter or cut and paste the following commands, then press enter or return:
    
    git clone httpshttps://github.com/brehays15/imma-teacha.git spark && spark/setup.sh
    
...some text will fly by as the repository is cloned locally and the project is setup.

Great, you're set to roll!


# Building the SuperHero

**The beginning to making a great superhero**

What we are going to do is make out own superhero by using Java Script. We are going to use codes such as console.log(). Console.log() allows us to print text to the screen. "log" belongs to a built in object called "console". We will use this whenever we need to say somthing on the app. 

**TODO 1 :** In TODO 1 we are going to tell your viewers a greeting such as Hi or Bye. Really simple. 

    // TODO 1 : create variables for prompt and fs by calling require in each respective module:
     var welcomeMessage = "Welcome to our awesome superhero building app!"
     console.log(welcomeMessage);
    

**Run the App** Switch to the command line, and go ahead and run the app like so:

    # ./my-lesson.js
    Welcome to our awesome superhero building app!
    
**TODO 2 :** In TODO 2 we are going to begin buliding our superhero. We are going to do that by using objects. 

Everything is an object, even the built-in datatypes, and the more detailed or specialized it needs to be, the more we describe it to the runtime. Objects are basically comprised of two things:

Properties: What the object has, or another way to look at it, it's parts(the superhero) Properties are essentially variables (or constants - values that cannot change).

Behaviours: What the object can do (the superhero can fly,swim fast,read minds ect..) Behaviours are essentially functions or otherwise known as methods.

In JavaScript, the simplest Object is, interestingly, an Object! Think of an object as a piece of clay that you can shape into anything. So when you create one, it's blank, empty, and you fill it or shape it as you need, defining what it's made of and what it can do.

To create one, you can simple do:

    var myObject = {};
Here, we are assigning to the variable myObject an empty Object. Objects are literally represented with the curly brackets {}, otherwise known as braces. So when we use = {}, we're saying, equals an empty Object. This is called an Object literal, and I like to think it's because this is literally how you make an Object.

    // TODO 2 : Create a variable called person of type Object using the Object literal syntax:
     var person = {};
     console.log(person);

Go ahead and run the app again:

    # ./my-lesson.js
    Welcome to our awesome superhero building app!
     {}
Terrific, we have a person Object ...but ...wait, the person is blank! You can see when we logged the person Object using console.log(person);, we were given {}, literally a blank, empty Object! That's a good thing but now were are going to add a little personality to our object.
     
**TODO 3 :**  In TODO 3 we are going to give our hero a bit of a personality 

     // TODO 3 : Add firstName and lastName properties to our person:
     person.firstName = "Jack";
     person.lastName = "Jones";
     console.log("First Name: " + person.firstName);
     console.log("Last Name: " + person.lastName);

Run the app:

     # ./my-lesson.js
     Welcome to our awesome superhero building app!
     First Name: Jack
     Last Name: Jones
   Cool, because objects are dynamic, meaning we can shape them, they can be altered at runtime, and in the above example, we're using dot notation or dot syntax to create properties on our person Object. We're really saying, 'On the person variable, add or overwrite a property called nameFirst, and assign the String "Jack" to it'. So, after this point, we can execute console.log(person.firstName);, which prints Jack.

**TODO 4 :** In TODO 4 we are going to set our hero in a place. 

    // TODO 4 : Add the city property using Array syntax:
    person["city"] = "New Orleans";
    console.log("City: " + person.city);

Alrighty, switch back to the terminal, and run our app again:

    # ./my-lesson.js
    Welcome to our awesome superhero building app!
    First Name: Jack
    Last Name: Jones
    City: New Orleans

Congrats! Because of time we are just going to name our superhero and put him in a place of superhero awesomeness!!! 