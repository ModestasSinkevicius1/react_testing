function List({records}){
    return(
        <div className="list">
            <ul>
                {records.map((r, i) => 
                    <li>{r.name}</li>
                )}
            </ul>
        </div>
    )
}

export default List;