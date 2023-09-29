import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => (
        <div>
            <div>
                <h1>Ghost Game</h1>
            </div>
            <div className="name">
                <h2>Name:</h2>
            </div>
            <div className="buttons">
                <button>Create Game</button>
                <button>Edit name</button>
            </div>
        </div>
    ),
    environmentProps: {},
});
