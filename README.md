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
![](your-link-here)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
I used stackoverflow, computerhope and w3schools. I also used an online pitch detector to figure out the notes I wanted.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
The biggest one was implementing the images in the buttons because when I would write the source for the image as "assets/file-name.png" would not work and it continue giving me problems until I decided to use the url I used to grab the images from. Then after that was the problem of resizing that I thought I could do it in the CSS but it did not work so I went onto computerhope.com which basically said I could use an attribute inside the **<img>** tag.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
How all these could work and make it so you can have people login into their accounts to play so it records their best and have like a scoretable so people can compete.
Making it as a competitive game with more information behind it.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
I would probably try to implement the adding a more complex sound to the button, since I do not only need to find the sound but also update certain functions so it works as intended.
As well I would try to have like a counter of how many tries people have played the game, with how many wins and loses in total, and a counter for the mistakes as well.



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
