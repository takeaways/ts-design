import * as React from 'react';
import { useState, useCallback } from 'react';
import Form from "./components/MyForm/index";
import Card from "./components/MyCard/index";

import { CardTypes } from "./components/MyCard/index.d"




const App = () => {
	const card: CardTypes = {
		auth: "Geonil Jang",
		title: "당신의 재능을 팔아보세요!",
		label: "생각의 전환",
		text: "누구도 생각하지 못했던 자신만의 아이디어를 팔아 보세요",
		point: 0,
		size: "s",
		direction: "row"
	};

	return (
		<div style={{ padding: "20px" }}>
			<Form target={"https://www.naver.com"} />
			<br /><br />
			<Card {...card} />
		</div>
	)
};

export default App;
