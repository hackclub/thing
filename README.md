<picture>
  <source media="(prefers-color-scheme: dark) and (max-width: 960px)" srcset="./thing.png">
  <source media="(prefers-color-scheme: dark) and (min-width: 961px)" width="50%" srcset="./thing.png">

  <source media="(prefers-color-scheme: light) and (max-width: 960px)" srcset="./thing-light.png">
  <source media="(prefers-color-scheme: light) and (min-width: 961px)" width="50%" srcset="./thing-light.png">

  <img alt="The thing" src="./thing.png">
</picture>

Hey! Welcome to **The Thing**!

## Hey, what is this thing?
The goal is for 100 Hack Clubbers to add a tool to the same PCB. The end result should be some sprawling over-the-top swiss-army-knife-esque monstrosity.
Everyone who adds a working subsystem will get a kit with all the parts they need to assemble the final product!

## How will it work?
* People will take turns adding their subsystem.
* Each person will get 2 days. If it's not merged after exactly 2 days, you'll be put at the back of the queue for another go and it'll be handed off to the next person.
* Merging requires approval from me (@Malted). Submitting a really complex subsystem is cool and all, but if the documentation is poor and I can't make sense of it in time, it won't get merged.

## What should my submission include?
* In the `/docs` directory, add a folder titled `IDX-USERNAME`, where `IDX` is your number in line, and `USERNAME` is your GitHub username.
  * For example, I'm the first person to go, so my folder is named `0-malted`.
  * In your folder, you'll need;
    * `doc.md`: Your writeup. Include as much detail about your subsystem as you can. How you designed it, your calculations, tests, everything. Make it interesting. Tell me a story!! :D
    * `pcb.png`: A screenshot of your Kicad window in the PCB editor mode, showing the entire PCB.
    * `pcb-3d.png`: Switch to View > 3D viewer and select "Render current view using raytracing". Again, I want to see the whole board!
    * `schematic.png`: A screenshot of your Kicad window showing the whole board's schematic.
    * `cad.png` **(OPTIONAL)**: If someone designs an enclosure or something, show me a screenshot of it. You only need to do this if you've changed it.
