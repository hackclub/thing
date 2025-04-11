<picture>
  <source media="(prefers-color-scheme: dark) and (max-width: 960px)" srcset="./thing.png">
  <source media="(prefers-color-scheme: dark) and (min-width: 961px)" width="50%" srcset="./thing.png">

  <source media="(prefers-color-scheme: light) and (max-width: 960px)" srcset="./thing-light.png">
  <source media="(prefers-color-scheme: light) and (min-width: 961px)" width="50%" srcset="./thing-light.png">

  <img alt="The thing" src="./thing.png">
</picture>

Hey! Welcome to **The Thing**!

## Hey, what is this thing?
Have you seen those 80-part Swiss Army knives? I want us to make a PCB with that level of esotericism; a sprawling, over-the-top monstrosity.

Many Hack Clubbers will add a tool or something to the same PCB consecutively, and at the end I'll get \~10 made and send them off to some people you may or may not have seen on YouTube...
(and if you find me at a hackathon and you've added a subsystem to the board you may end up with one too (prob limited to 1 or 2)).

It'll end when 100 subsystems have been added or nobody adds a component for a week. Happy hacking!

## How will it work?
* People will take turns adding their subsystem.
* Each person will get 2 days. If it's not merged after exactly 2 days, you'll be put at the back of the queue for another go and it'll be handed off to the next person. **I'll DM you a day or two before it's your turn to make sure you're ready. If you don't respond you might be skipped.**
* Merging requires me to be reasonably sure it'll work.

## What should my submission include?
* In the `/docs` directory, add a folder titled `IDX-USERNAME`, where `IDX` is your number in line, and `USERNAME` is your GitHub username.
  * For example, I'm the first person to go, so my folder is named `0-malted`.
  * In your folder, you'll need;
    * `doc.md`: Your writeup. Include detail about your subsystem! How you designed it, your calculations, tests, everything. Don't use an LLM, make it interesting, tell me a story!! :D
    * `pcb.png`: A screenshot of the PCB in Kicad's PCB editor, showing the entire PCB.
    * `pcb-3d.png`: Switch to View > 3D viewer and select "Render current view using raytracing". Again, we want to see the whole board!
    * `schematic.png`: A screenshot of the whole board's schematic.
    * `cad.png` **(OPTIONAL)**: If someone designs an enclosure or something (wink wink nudge nudge), show me a screenshot of it. You only need to do this if you've changed it.
    * `bom.csv`: Your bill of materials. Create and edit this manually. The price should be that of a single part (regardless of your `quantity`, **on the line item for 100 pieces**. It should be in USD without a dollar symbol.
      * For an exemplar BoM check mine out: `/docs/0-malted/bom.csv`. There's a template at `/docs/bom-template.csv`.
  * Make your schematic as complete as possible! When you double click your components you can add datasheets to help out others who might need to tie into your circuit or something in the future.

## Constraints
* Use Kicad `9.0.x`. Apparently, our project will be corrupted if we're on differing versions.
* Each BoM must not exceed $5 in parts. Assume 3D printing is free. If you have an especially cool idea I could be convinced to double it on a case-by-case basis :)
* Please strongly bias for parts in stock on Digikey.

## Tips
Finding parts can be tricky. Here's how I found the USB-C receptable I used in my circuit;
  1. Added a symbol to my schematic. I only wanted it for the 5V rail, so I found a symbol with the description "*USB Power-Only 6P Type-C Receptacle connector*". Seems okay.
  2. Opened the *footprint editor* and searched for "*usb c receptacle 6p*" (6P meaning it has 6 pins, which is minimal). I found a footprint named "*USB_C_Receptacle_GCT_USB4125-xx-x_6P_TopMnt_Horizontal*", which looked good. I liked the footprint because it had through-hole shield pins, meaning it would be less likely to be ripped off the board when pulling on it. The only other footprint which actually had 6 pins didn't have the through-hole shield.
  3. I searched on the internet for "*USB4125*". I found the [page from the manufacturer](https://gct.co/connector/usb4125) (GCT), which had links to Mouser and Digikey, amongst others. Heaven. It was slightly cheaper on Mouser so I went with that. It's comforting that it says *21230 In stock*.
  4. I double click on my component, click the library icon at the end of the "Footprint" table row, and searched for "*gct usb 4125*". Assigned it. Placed it on my PCB, and added it to my BoM! All done.
