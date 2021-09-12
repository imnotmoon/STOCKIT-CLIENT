import styled from "@emotion/styled";

//* css : @emotion/styled
export const Container = styled.div<{ height: number }>`
	height: ${(props) => props.height * 100}px;
	& > div {
		width: 100%;
		height: 200px;
		display: flex;
		align-items: center;
	}
`;
export const Table = styled.div`
	width: 100%;
	font-size: 13px;
	display: flex;
	flex-direction: column;
`;
export const TableHeader = styled.div`
	background: rgba(226, 226, 226, 0.3);
	width: 90%;
	padding-left: 5%;
	padding-right: 5%;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	align-items: center;
	margin-bottom: 20px;

	& > div {
		display: flex;
		justify-content: center;
		align-items: center;
		line-height: 2em;
		height: 40px;
	}
`;
export const TableBody = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const Row = styled.div<{ buySell: string }>`
	-webkit-box-shadow: 0px 0px 2px 0px #bebebe;
	box-shadow: 0px 0px 2px 0px #bebebe;
	height: 50px;
	width: 90%;
	margin: 10px;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	justify-items: center;

	& > div {
		display: flex;
		align-items: center;
	}

	& > div:nth-of-type(2) {
		color: ${(props) => (props.buySell === "매도" ? "blue" : "red")};
	}
`;
