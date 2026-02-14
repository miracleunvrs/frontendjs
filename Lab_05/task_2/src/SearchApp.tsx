import { useState } from "react";
import type { User } from "./types";

const INITIAL_DATA: User[] = [
    {name: 'Alice', email: 'alice@mail.com', age: 25},
    {name: 'Rus', email: 'rus@mail.com', age: 24},
    {name: 'Zhan', email: 'zhan@mail.com', age: 22},
];

const SearchApp = () => {
    const [users] = useState<User[]>(INITIAL_DATA);
    const [filteredUsers, setFilteredUsers] = useState<User[]>(INITIAL_DATA);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const handleSearch = (
        event: React.ChangeEvent<HTMLInputElement>
    )=>{
        const term = event.target.value;
        setSearchTerm(term);
        setFilteredUsers(
            users.filter((u) =>
            u.name.toLowerCase().includes(
                term.toLowerCase()
                )
            )
        );
    };

    const handleClear = (
        event: React.MouseEvent<HTMLButtonElement>
        ) => {
           setSearchTerm('');
           setFilteredUsers(users); 
    };

    return (
        <div style={{padding: '20px'}}>
            <h2>User Search</h2>
            
            <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={handleSearch}
            />

            <button
            onClick={handleClear}
            style={{marginLeft: '10px'}}
            >
                Clear
            </button>

            <hr />
      {/* Render results */}
      {filteredUsers.length === 0 ? (
        <p>No results found</p>
      ) : (
        <ul>
          {filteredUsers.map((user, index) => (
            <li key={index}>
              <strong>{user.name}</strong> —{' '}
              {user.email} ({user.age})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchApp;