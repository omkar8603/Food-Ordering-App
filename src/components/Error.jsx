import {useRouteError} from 'react-router-dom';

const Error = () => {
    const err = useRouteError();
    console.log(err);
     
    return (
        <div className='text-center'>
            <h1>Opps!!</h1>
            <h2>Something Went Wrong!!</h2>
            <h2>{err.status + " : " + err.statusText + " " + err.error}</h2>
        </div>
    )
}

export default Error;