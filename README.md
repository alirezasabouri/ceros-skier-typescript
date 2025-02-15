# Ceros Ski Code Challenge - TypeScript Edition

Welcome to the Ceros Ski Code Challenge!

For this challenge, we have included some base code for Ceros Ski, our version of the classic Windows game SkiFree. If
you've never heard of SkiFree, Google has plenty of examples. Better yet, you can play our version here:
http://ceros-ski.herokuapp.com/

Or deploy it locally by running:

```
npm install
npm run dev
```

**How To Play**

-   Use the arrow keys to turn the skier.
-   The skier will crash if they hit an obstacle. Use the left/right keys to move away from the obstacle and then down
    to resume skiing.
-   At some point the rhino will appear, chasing the skier. It will inevitably catch the skier and eat them, ending the
    game.

**Time Limit**

Solutions should be submitted within a week of receiving the challenge. We expect the challenge to take around two
hours of your time, but you may spend as long as you need to create a robust solution. We understand that everyone has 
varying levels of free time, and we'd rather you take the time and produce a solution up to your ability than rush and 
turn in a suboptimal challenge. If you require more time, please reach out to us. Look through the requirements below 
and let us know when you will have something for us to look at. If anything is unclear, don't hesitate to reach out.

**Requirements**

Throughout your completion of these requirements, be mindful of the design/architecture of your solution and the
quality of your code. We've provided the base code as a sample of what we expect. That being said, we're sure there are
ways the that the design and architecture could be better. If you find a better way to do something, by all means, make
it better! Your solution can only gain from having a better foundation.

-   **Add a New Feature:**

    Add in the ability for the skier to jump. The asset files for the ramp and the jumping skier are included. All you
    need do is make them jump.

    Acceptance Criteria:

    -   Jump ramps are added to the game world and appear randomly as the skier skis.
    -   The skier should enter the jumping state when they hit the jump ramp.
    -   The skier should also enter the jumping state when the user presses the spacebar.
    -   The skier should do a flip while jumping, at least one cycle through the jump images provided.
    -   While jumping, the skier should be able to jump over some obstacles:
        -   Rocks can be jumped over
        -   Trees can NOT be jumped over

-   **Future Considerations**

    All products evolve over time. In the future, our game will have many more obstacles to crash into or interact with.
    Some of them may be animated as well, we're just waiting for our design department to provide the assets. Please
    make sure your code is written in a way that will make it easy to add these future features.

-   **Documentation:**

    Update this README file with your comments about your work.

    -   What did you do and, more importantly, why you built it the way you did.
    -   Are there any known bugs?
    -   Did you do any bonus items?
    -   Tell us how to run it, either locally or through a cloud provider.

-   **Be original:**

    This should go without saying but don’t copy someone else’s game implementation! We have access to Google too!

**Grading**

Your challenge will be graded based upon the following criteria. **Before spending time on any bonus items, make sure
you have fulfilled this criteria to the best of your ability, especially the quality of your code and the
design/architecture of your solutions. We cannot stress this enough!**

-   How well you've followed the instructions. Did you do everything we said you should do?
-   The quality of your code. We have a high standard for code quality and we expect all code to be up to production
    quality before it gets to code review. Is it clean, maintainable, unit-testable, and scalable?
-   The design of your solution and your ability to solve complex problems through simple and easy to read solutions.
-   How well you document your solution. We want to know what you did and **why** you did it.

**Bonus**

_Note: You won’t be marked down for excluding any of this, it’s purely bonus. If you’re really up against the clock,
make sure you complete all of the listed requirements and to focus on writing clean, well organized, well documented
code before taking on any of the bonus._

If you're having fun with this, feel free to add more to it. Here's some ideas or come up with your own. We love seeing
how creative candidates get with this.

-   Provide a way to reset the game once it's over
-   Provide a way to pause and resume the game
-   Add a score that increments as the skier skis further
-   Increase the difficulty the longer the skier skis (increase speed, increase obstacle frequency, etc.)
-   Deploy the game to a server so that we can play it without having to install it locally
-   Write unit tests for your code

We are looking forward to see what you come up with!!

**Changes**

-   Feature-Jump:  Jump functionality is added to the game, skier can jump by pressing down spacebar or going over jump-ramps,
    skier will escape rock obstacles by using this functionality, you can find a quick overview about implementation details:
    -   A jump ramp added as a new type of obstacle, also an `interactionType` added to the `Obstacle` type which will indicates what will be
        skier interaction when a collision happen. Right now we have `crash` and `jump`, which can be extended later easily
    -   Skier will jump whenever ther is a `jump` interaction with an obstacle or when space key is being pressed down
    -   To enable playing animation for Skier as well, animation facilities was refactored and moved out of `Rhino` class, into the `Entity` class.
        This will prevents having redundant code and ease up adding animation to existing entities (currently skier and rhino) + future cases (e.g. animated obstacles in the future)

-   Feature-PauseGame :  Game can be paused now by pressing `Escape` button on the keyboard:
    -   A flag called `gameIsPaused` added to the Game class, which will be toggled by pressing `Escape` button
    -   When `gameIsPaused` is set to true, main game loop will skip refreshing canvas and updating game data
    -   New method called `grayOutCanvas` added to the `Canvas` class and is called when player is pausing the game, this will apply a gray overlay to the screen with an optional text to show

-   Feature-RestartGame :  Game can be restarted by pressing `Enter` when the game is over:
    -   All the  setups for game objects such as skier and rhino, arranging and placing obstacles, etc. moved to a seperate method called
    `initializeGameObjects`, which will reset game dynamics and stats, and let the player start over again
    -   `Escape` key is handled in the `Game` class now, it will call `resetGame()` only when game is over
