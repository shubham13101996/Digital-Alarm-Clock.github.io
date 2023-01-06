# Project : Alarm_Clock
The project contains a Digital Alarm Clock where you can set as many alarms as you want. 

The first part of the project contains a digital clock which keeps on getting updated every second. 
In the second part we can set an alarm and all the new alarms being set will be added to a list below and will play at the right time. 
With every new alarm delete button will be given. On clicking that button you will be able to remove the alarm from the webpage / UI.

# TechStack :
HTML , CSS , JAVASCRIPT

# Features :
1.Clock face:
Clock showing the current time (seconds,mins,hrs should change as time changes)

2.Set Alarm:
input boxes to set an alarm (hr,min,sec)
Once  sets the time and click “Set Alarm” button, add that alarm to the alarms list below
When the alarm goes of there is alert on the browser.

3.Alarms list:
Display a list of all the alarms set by user

4.Delete alarm:
For each alarm give a delete button to delete the alarm

# Approach :
All the alarms being set will be added to an array. The array will be checked every second if it contains the current time. If it does, then the alarm sound will be played. 
On clicking on "Stop alarm" the audio will be paused and on clicking on "Delete Alarm" the set alarm will be removed from the array and the list. 
