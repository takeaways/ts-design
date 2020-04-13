export interface CardData {
	label?: string;
	title: string;
	content?: string;
	point?: number;
	img?: string;
	auth: string;
	size?: '320px' | '240px';
	direction: 'row' | 'col';
}
