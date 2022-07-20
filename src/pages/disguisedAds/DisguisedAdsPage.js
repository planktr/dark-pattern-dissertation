import { useDispatch } from 'react-redux';
import { completed } from '../../app/testSlice';

const Test2 = () => {
    const dispatch = useDispatch();

    const handleCompletion = () => dispatch(completed({ testId: 1, stageId: 2 }));

    return (<><h2>Hello, World</h2><button onClick={handleCompletion}>Complete test</button></>)

}

export default Test2;