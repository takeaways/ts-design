import * as React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import { CardData } from './components/Card/types';

import cardData from './models/cardModel';

const App = () => {
	return (
		<>
			<div
				id="cardArea"
				style={{
					background: '#f3d9fa',
				}}
			>
				{cardData.map((c, i) => (
					<Card cardInfo={c} key={i} />
				))}
			</div>
			<div id="formArea" style={{ background: '#e599f7', height: '800px' }}>
				<Form />
			</div>
		</>
	);
};

export default App;
