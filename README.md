# nightfall-hacks

Some javascript hacks for ["The Nightfall Incident"](https://patrickhpan.itch.io/nightfall) by patrickhpan on itch.io (Awesome job! so nostalgic~~ )

Use at your own peril. (I also suggest beating the game without them first, it's more fun that way!)

Tested on Chrome

### Available Hacks

- `credits.js`: set amount of credits on a save file
- `programs.js`: add programs to your inventory
- `reset-node-credits.js`: enables recollection of extra credits from past databattles (need to re-run each time, sorry)

### How to use them

1. Open `index.html` in chrome
1. Right click on the page and select "Inspect"
1. Navigate to "Sources -> Snippets"
1. Add a new Snippet
1. Copy and paste the javascript file into the snippet
1. Edit code as desired
1. Run the snippet (Cmd+Enter)
1. Reload the page

### Notes

Your save data is stored locally in IndexedDB using localforage. This cannot be edited except through running snippets in chrome. You can check your save data by going to "Inspect -> Applications -> IndexedDB -> nightfall" where it is saved as a stringified dictionary.

Don't run these hacks during a databattle as reloading the page during a databattle will cause you to lose your progress.

### Helpful Links

- [View and Change IndexedDB Data with Chrome](https://developers.google.com/web/tools/chrome-devtools/storage/indexeddb)
- [Chrome Snippets](https://developers.google.com/web/tools/chrome-devtools/javascript/snippets)
