// eslint-disable-next-line react/prop-types
const GameSquare = ({ classNum, selectSquare }) => {
	return (
		<div
			onClick={selectSquare}
			className={`${classNum} h-20 justify-center content-center basis-24 text-2xl bg-slate-300 hover:bg-slate-400 border-2`}
		></div>
	);
};
export default GameSquare;
