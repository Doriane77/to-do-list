import React from "react";
import sup from "./poubelle.png";

function Section({ listes, setListes, text, setText }) {
  return (
    <div className="Section">
      {listes.map((liste, index) => {
        return (
          <div className="listes">
            <input
              checked={liste.status}
              type="checkbox"
              onClick={() => {
                const newListes = [...listes];
                newListes[index].status = !newListes[index].status;
                setListes(newListes);
              }}
            />
            <h3 className={liste.status === true ? "checked" : ""}>
              {liste.title}
            </h3>
            <button
              onClick={() => {
                const newListes = [...listes];
                newListes.splice(index, 1);
                setListes(newListes);
              }}
            >
              <img src={sup} alt="" />
            </button>
          </div>
        );
      })}

      <form
        onSubmit={(event) => {
          event.preventDefault();
          const newListes = [...listes];
          newListes.push({ title: text, status: false });
          setListes(newListes);
          setText("");
        }}
      >
        <input
          type="text"
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
        <button type="submit" value="submit">
          Add task
        </button>
      </form>
    </div>
  );
}

export default Section;
