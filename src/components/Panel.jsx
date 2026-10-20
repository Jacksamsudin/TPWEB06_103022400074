function Panel({judul, children}){
    return (
        <div className="Panel" >
            {judul && <h2>{judul}</h2>}
            {children}
        </div>
    )
}
