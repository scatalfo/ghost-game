import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => (
        <div>
            <h1>Ghost Game</h1>
        </div>
    ),
    environmentProps: {},
});
