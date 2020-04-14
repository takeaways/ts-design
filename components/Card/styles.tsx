import styled from 'styled-components';

export const CardBlock = styled.div`
	margin: 3px;
	border-radius: 16px;
	background: #eee;
	display: inline-flex;
	flex-direction: ${(props) => props.column && 'column'};
`;

export const CardImg = styled.img`
	vertical-align: bottom;
	border-radius: 16px;
	width: ${(props) => props.size};
`;
export const CardDirection = styled.div`
	display: ${(props) => props.direction === 'row' && 'flex'};
	flex-direction: ${(props) => props.direction === 'row' && 'column'};
	justify-content: ${(props) => props.direction === 'row' && 'space-around'};
`;
export const CardBody = styled.div`
	padding-left: 10px;
	height: 160px;
	width: ${(props) => props.size};
	box-sizing: border-box;
`;
export const CardBodyLabel = styled.div`
	font-size: 1.2rem;
	color: rgba(200, 200, 200, 0.5);
	height: 25%;
	/* background-color: violet; */
	overflow: callapse;
`;
export const CardBodyTitle = styled.div`
	font-size: 1.4rem;
	height: 25%;
	/* background-color: blue; */
`;
export const CardBodyContent = styled.div`
	font-size: 1.1rem;
	height: 50%;
	/* background-color: yellow; */
	white-space: pre-wrap;
	text-overflow: ellipsis;
	overflow: hidden;
`;

export const CardBodyPointBlock = styled.div`
	float: left;
	padding-left: 10px;
	height: 60px;
	border-top: ${(props) => props.d !== 'row' && '1px solid gray'};
	width: ${(props) => props.size};
	box-sizing: border-box;
`;
export const CardBodyPointBlockItem = styled.div`
	padding-right: 10px;
	height: 50%;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
`;

export const BallPoint = styled.div`
	border-radius: 50%;
	background-color: ${(props) =>
		props.point ? 'orange' : 'rgba(200, 200, 200, 0.5)'};
	width: 1.2rem;
	height: 1.2rem;
	display: inline-block;
	vertical-align: middle;
	margin-right: 1px;
`;
