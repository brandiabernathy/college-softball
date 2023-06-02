
import Bracket from '../../../components/SupersBracket';

export default function NormanSupers() {

	return (
		<>
			<h2 className="text-3xl mb-5">Norman Super Regional</h2>
			{/* @ts-expect-error */}
			<Bracket venue="4990" />
		</>
	)
}