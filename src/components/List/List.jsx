function List({records}){
    return(
        <div className="list">
            <h2>Random color codes</h2>
            {(records?.length) && (records?.find(r => r.name !== null)) ? 
            <ul>
                {records?.map((r, i) => 
                    r.name ? <li className="item" key={i}>{r.name}</li> : null
                )}
            </ul>
            :
            <h3 className="no-items">All chickens ran away</h3>
            }
        </div>
    )
}

export default List;