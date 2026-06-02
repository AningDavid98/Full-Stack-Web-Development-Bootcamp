import React from "react";
import Entry from "./Entry.jsx";
import emojipedia from "../emojipedia";

function createEmoji(emojipedia) {
  return (
    <div>
      <Entry
        id={emojipedia.id}
        key={emojipedia.id}
        emoji={emojipedia.emoji}
        name={emojipedia.name}
        meaning={emojipedia.meaning}
      />
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(createEmoji)}

      {/*<Entry
          emoji={emojipedia[0].emoji}
          name={emojipedia[0].name}
          meaning={emojipedia[0].meaning}
        />

       <Entry 
       emoji={emojipedia[1].emoji}
       name={emojipedia[1].name}
       meaning={emojipedia[1].meaning} />

       <Entry
       emoji={emojipedia[2].emoji}
       name={emojipedia[2].name}
  meaning={emojipedia[2].meaning} />*/}
    </div>
  );
}

export default App;
