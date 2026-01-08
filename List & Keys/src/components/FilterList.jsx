import {useState} from "react";

function FilterList(){

      const [search, setSearch] = useState("");

      const items = ["Apple", "Banana", "Orange","Carrot","Potato","Tomato","Onion","Cabbage","Table", "Chair", "Shelf"];

      const filteredItems = items.filter(i =>
    i.toLowerCase().includes(search.toLowerCase())
  );

    return(

        <div>

        <input placeholder="search" onChange={e=>setSearch(e.target.value)} />
        {filteredItems.length > 0 ? (
        filteredItems.map(i => <p key={i}>{i}</p>)
      ) : (
        <p>No results</p>
      )}
        </div>
    );
}

export default FilterList