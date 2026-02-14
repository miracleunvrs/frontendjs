import UserCard from "./UserCard";
import SkillList from "./SkillList";
import type {User, Skill} from './types';

function App(){
    const user: User = {
        name: 'Ruslan',
        email: 'ruslan@mail.com',
        age: 22,
    };

    const skills: Skill[] = [
        {id: 1, name: 'React', level: 'Intermediate'},
        {id: 2, name: 'TypeScript', level: 'Beginner'},
        {id: 3, name: 'Node.Js', level: 'Expert'},
    ];

    return(
        <div>
            <UserCard user={user} isActive = {true}>
                <p>Status: Learning TypeScript</p>
            </UserCard>

            <h3>Skills</h3>

            <SkillList skills={skills}/>

        </div>
    );
}

export default App;