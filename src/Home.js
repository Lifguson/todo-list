import { useState } from "react";

const Home = () => {

    const [item, setItem] = useState('');
    // const [isPending, setIsPending] = useState(false);
    
    //     const handleSubmit = (e) => {
    //         e.preventDefault();
    //         const todo = { item };
    
    //         setIsPending(true);
    //     }

    return (
        <div className="home">
            <h1>Todo</h1>
            <div className="create">
                <form>
                    <input
                        type="text"
                        required
                        value={item}
                    />
                </form>
            </div>
            <div className="todo-list">
                <p>todo item</p>
                
            </div>
        </div>

    )

    }

export default Home;