const ShowErrors = ({errors}) => {
    return(
        <div>
            <ul style={{marginLeft:`17px`,color:`red`,padding:`0px`}}>
                {errors.map((error, i) => {
                    return( <li key={i} >{error} </li>

                    )
                })
                }
            </ul>
        </div>
    )
}
export default ShowErrors;