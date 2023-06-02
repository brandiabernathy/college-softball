
import Bracket from '../../../components/SupersBracket';

export default function SeattleSupers() {

	return (
		<>
			<h2 className="text-3xl mb-5">Seattle Super Regional</h2>
			{/* @ts-expect-error */}
			<Bracket venue="5262" />
		</>
	)
}