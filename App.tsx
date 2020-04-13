import * as React from 'react';
import Card from './components/Card';
import { CardData } from './components/Card/types';

const data: CardData[] = [
	{
		label: 'Card Label',
		title: 'Card Title',
		content:
			'Card ContentCardContentCardContentCardContentCardContentCard ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard Content',
		point: 5,
		img: '/public/img.jpg',
		auth: 'Geonil Jang',
		size: '320px',
		direction: 'col',
	},
	{
		label: 'Card Label',
		title: 'Card Title',
		content: '',
		point: 3,
		img: '/public/img.jpg',
		auth: 'Geonil Jang',
		size: '240px',
		direction: 'col',
	},
	{
		label: 'Card Label',
		title: 'Card Title',
		content: '',
		// point: 1,
		img: '/public/img.jpg',
		auth: 'Geonil Jang',
		size: '240px',
		direction: 'col',
	},
	{
		label: 'Card Label',
		title: 'Card Title',
		content: 'Card ContentCard Card ContentCard Card ContentCard Card  ',
		point: 4,
		img: '/public/img.jpg',
		auth: 'Geonil Jang',
		size: '240px',
		direction: 'row',
	},
	{
		label: 'Card Label',
		title: 'Card Title',
		content: 'Card ContentCard Card ContentCard Card ContentCard Card  ',
		point: 4,
		img: '/public/img.jpg',
		auth: 'Geonil Jang',
		size: '320px',
		direction: 'row',
	},
];

const App = () => {
	return (
		<>
			{data.map((c) => (
				<Card cardInfo={c} />
			))}
		</>
	);
};

export default App;
