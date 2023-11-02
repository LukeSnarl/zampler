## Quick and dirty sample player.

This is designed to sit locally on an old laptop or something, plugged into a DJ mixer, to allow you to inject airhorns and other dumb sound samples into your set, without having to bother with getting hold of [special hardware](https://www.akaipro.com/mpx-8.html).

You don't need a webserver on that laptop - these files will run locally in your web browser, from a folder on your Desktop or where ever - no installation needed.

Click on the green CODE button near the top right of [this page](https://github.com/LukeSnarl/zampler) and select "download zip". Unzip the downloaded file to somewhere.

Inside the resulting folder (probably called `zampler-main`) somewhere on your computer - bung some `.WAV` files in the `set` folders within the `samples` folder.

They must be named `1.wav`, `2.wav`, etc - up to `8.wav`.

Set folders must be named `set1`, `set2` up to `set4`.

There are a few example files in there when you download it.

Drag the `index.html` file into your browser...

Click on the big green buttons on screen to play the sounds - or press keys `1`-`8`. Also `arrow up` and `arrow down` change sets...

enjoy
-LD

PS i certainly don't hold the copyright for the samples in this repo - there are purely there as examples for demonstration purposes of the functionality and should be deleted by anyone who downloads this repo for their own use.

PPS as for sample format - ANY `.WAV` file that the HTML <audio> tag will play should work...
