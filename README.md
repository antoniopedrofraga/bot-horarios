# Schedule Bot

## Description

As a software engineer, it is commonly possible to write scripts in order to automate boring tasks. If one makes use of coding resources, the possibilities are almost infinite. 

This script was used by me, as an informatic student at FEUP, when manual actions were required to select my schedule. FEUP schedules are built by a set of different modules that you must have in every semester. For each module, is given a set of different classes that one can attend. These classes may differ in **time** and **teacher**. 

My point is, you can actually automate almost any computer task, sometimes it's worth it, sometimes it's not. In this case, it was clearly advantageous. I didn't want to spend 2 hours in front of my computer hiting refresh and check if there's a vacancy in some class that I wanted. My computer can do it for me.

Thus, using **JavaScript** my browser was refreshing every **500 ms** or so, and checking if there was an available position in the class. Well, I think you can adapt this value depending on your internet connection speed. The important thing was: I was not doing it manually. I mean, is there any possibility of having someone faster than my computer? Yes, there is. But the chances of that were quite lower with my script. So... I managed to get all my schedule first options since my 3rd year. Actually you have 2 possibilities here:

* You are in the top students **GPA** ranking (and you can get the best options in the 1st round).
* Or you automate the second round, that will do the job as well.

## How does it work?

I used a JavaScript injector, [Custom JavaScript for websites](https://chrome.google.com/webstore/detail/custom-javascript-for-web/poakhlngfciodnhlhhgnaaelnpjljija?hl=en), which is a **Google Chrome** extension. I'm sure there are plenty of technologies that you can use. With this one I could just copy and paste my code into a textbox.

```javascript
var eicDomId = ['368714','368716']; //ids do selector dessa cadeira
var classId = ['3MIEIC02','3MIEIC02']; //turma pretendida em cada index
```

The first array indicates the module identifier for each module, which can be found in the module URL:
![alt text](./README/moduleid.png "Module ID")

The second array indicates the class identifier that every FEUP student is familiar with.

And the whole script is a bunch of JavaScript instructions parsing information from **HTML** tags. I know, that's not very good. The important thing is: it worked.
