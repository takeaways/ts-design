import * as React from 'react';
import { FunctionComponent, useRef } from 'react';

import * as Styles from './styles';

import { CardData } from './types';

const getPointArr = (point: number) => {
	const a: boolean[] = Array(5).fill(false);
	for (let i = 0; i < point; i++) {
		a[i] = true;
	}
	return a;
};

const Card: FunctionComponent<{ cardInfo: CardData }> = ({ cardInfo }) => {
	const points = useRef<boolean[]>([]);
	if (cardInfo.point) {
		points.current = getPointArr(cardInfo.point);
	}
	return (
		<>
			<Styles.CardBlock column={cardInfo.direction === 'col' && true}>
				<Styles.CardImg
					src={cardInfo.img}
					alt={cardInfo.title}
					size={cardInfo.size}
				/>
				<Styles.CardDirection direction={cardInfo.direction}>
					<Styles.CardBody size={cardInfo.size}>
						{cardInfo.label && (
							<Styles.CardBodyLabel>{cardInfo.label}</Styles.CardBodyLabel>
						)}
						<Styles.CardBodyTitle>{cardInfo.title}</Styles.CardBodyTitle>
						{cardInfo.direction === 'row' && (
							<Styles.CardBodyContent>
								{cardInfo.content}
							</Styles.CardBodyContent>
						)}
					</Styles.CardBody>
					{cardInfo.point && (
						<Styles.CardBodyPointBlock
							size={cardInfo.size}
							d={cardInfo.direction}
						>
							<Styles.CardBodyPointBlockItem>
								{points.current.map((b: boolean, i: number) => (
									<Styles.BallPoint point={b} key={i} />
								))}
								{cardInfo.direction === 'row' && (
									<span> | {cardInfo.auth}</span>
								)}
							</Styles.CardBodyPointBlockItem>
							{cardInfo.direction !== 'row' && cardInfo.content && (
								<Styles.CardBodyPointBlockItem>
									{cardInfo.content}
								</Styles.CardBodyPointBlockItem>
							)}
						</Styles.CardBodyPointBlock>
					)}
				</Styles.CardDirection>
			</Styles.CardBlock>
		</>
	);
};

export default Card;
