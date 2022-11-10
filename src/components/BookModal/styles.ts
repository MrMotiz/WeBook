import styled from 'styled-components';

const DarkBG = styled.div`
	background-color: rgba(0, 0, 0, 0.2);
	width: 100vw;
	height: 100vh;
	z-index: 0;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	position: absolute;
`;

const Centered = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const Modal = styled.div`
	width: 250px;
	background: white;
	color: white;
	z-index: 10;
	border-radius: 16px;
	box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
	padding: 5px;
`;

const ModalHeader = styled.div`
	height: 50px;
	background: white;
	overflow: hidden;
	border-top-left-radius: 16px;
	border-top-right-radius: 16px;
`;

const Heading = styled.div`
	margin: 0;
	padding: 10px;
	color: #2c3e50;
	font-weight: 500;
	font-size: 18px;
	text-align: center;
`;

const ModalContent = styled.div`
	padding: 10px;
	font-size: 14px;
	color: #2c3e50;
	text-align: center;
`;

const ModalActions = styled.div`
	bottom: 2px;
	margin-bottom: 10px;
	width: 100%;
`;

const ActionsContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 10px;
`;

const CloseBtn = styled.button`
	cursor: pointer;
	font-weight: 500;
	padding: 4px 8px;
	border-radius: 8px;
	border: none;
	font-size: 18px;
	color: #2c3e50;
	background: white;
	transition: all 0.25s ease;
	box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06);
	position: absolute;
	right: 0;
	top: 0;
	align-self: flex-end;
	margin-top: -7px;
	margin-right: -7px;

	&:hover {
		box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
		transform: translate(-4px, 4px);
	}
`;

const DeleteBtn = styled.button`
	margin-top: 10px;
	cursor: pointer;
	font-weight: 500;
	padding: 11px 28px;
	border-radius: 12px;
	font-size: 0.8rem;
	border: none;
	color: #fff;
	background: #ff3e4e;
	transition: all 0.25s ease;

	&:hover {
		box-shadow: 0 10px 20px -10px rgba(255, 62, 78, 0.6);
		transform: translateY(-5px);
		background: #ff3e4e;
	}
`;

const SaveBtn = styled.button`
	margin-top: 10px;
	cursor: pointer;
	font-weight: 500;
	padding: 11px 28px;
	border-radius: 12px;
	font-size: 0.8rem;
	border: none;
	color: #fff;
	background: ${({ theme }) => theme.backGroundColor};
	transition: all 0.25s ease;

	&:hover {
		background: ${({ theme }) => theme['backGroundColor-light']};
	}
`;

const CancelBtn = styled.button`
	margin-top: 10px;
	cursor: pointer;
	font-weight: 500;
	padding: 11px 28px;
	border-radius: 12px;
	font-size: 0.8rem;
	border: none;
	color: #2c3e50;
	background: #fcfcfc;
	transition: all 0.25s ease;

	&:hover {
		box-shadow: none;
		transform: none;
		background: whitesmoke;
	}
`;

const ErrorMessage = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme['red-100']};
	padding-top: 0.375rem;
	padding-bottom: 0.375rem;
	border-radius: ${({ theme }) => theme['borderRadius-10']};
	font-size: 0.75rem;
	line-height: 0.875rem;
	margin-left: 1rem;
	margin-right: 1rem;
	margin-bottom: 1rem;
	color: ${({ theme }) => theme.black};
`;

export {
	DarkBG,
	Centered,
	Modal,
	ModalHeader,
	Heading,
	CloseBtn,
	ModalContent,
	ModalActions,
	ActionsContainer,
	DeleteBtn,
	CancelBtn,
	SaveBtn,
	ErrorMessage,
};
