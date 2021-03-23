# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Miguel Dautant**

Time spent: **8** hours spent in total

Link to project: https://glitch.com/edit/#!/cuddly-woozy-part?path=README.md%3A1%3A0

## Required Functionality

The following **required** functionality is complete:

* [ ] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [ ] "Start" button toggles between "Start" and "Stop" when clicked. 
* [ ] Game buttons each light up and play a sound when clicked. 
* [ ] Computer plays back sequence of clues including sound and visual cue for each button
* [ ] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [ ] User wins the game after guessing a complete pattern
* [ ] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![]("Losing-Game.gif")


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

I used stackoverflow, computerhope and w3schools.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

The biggest problem I encountered was when it came to the point of adding images to the buttons. I went onto read some sites to see what would be the best way to do so, and there is ways to make it through CSS and HTML. So, I had to decide which one I wanted to try, I then went to implement it and it did not work I try many ways and I even went to the other option and neither worked. I had stopped trying since I did not know what could have gone wrong, and then it came to me that maybe was how I was putting the source ("assets/file-name.png") that was not working so I had to try a different way, so I took the url where I got the images from and added that in the source and it did work. However, it got me a bit afraid on how complicated it could be if I wanted a more complex sound out of the buttons. Then I had to address the problem of resizing the image since it was bigger than expected and it was not aligned with the button, I read I could resize it with CSS and tried it and failed, so I went to adding another attribute to the image to resize it and it worked perfectly.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

How these classes and attributes can fit in together to do a well done website for a big company? Also, how much the code would change if we implemented like a database with login information, so the user would have their account and play online in a competitive way or even communicate while they playing. Furthermore, I bet there is more that meets the eye when it comes to programming a website how many more attributes a single thing in a website can hold, how many can make the code easier and efficient?
And what would be the best practices at the time of making it? Should I focus first in the how it looks and meaning program the HTML and the CSS together and then how it works behind it, with the Javascript.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

I would probably try to implement the adding a more complex sound to the button, since I do not only need to find the sound but also update certain functions so it works as intended. As well I would try to have like a counter of how many tries people have played the game, with how many wins and loses in total, and a counter for the mistakes as well. I would love to implement a way to enter the players name and record his or her try into the page so whenever someone visits again can try to beat that score.



## License

    Copyright Miguel Dautant

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
