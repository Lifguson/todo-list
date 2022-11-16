const PriorityMenu = () => {

const [priority, setPriority] = useState();

return (

    <div className="dropdown-container">
        <div className="dropdown-input">
            <Dropdown placeHolder="Select priority level" />
            <div className="dropdown-selected-value">
                <p>Red !!!</p>
                <p>Yellow !!</p>
                <p>Green !</p>
                <p>Grey</p>
            </div>
        </div>
    </div>



)
}