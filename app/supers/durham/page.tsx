
import Bracket from '../../../components/SupersBracket';

export default function DurhamSupers() {

	return (
		<>
			<h2 className="text-3xl mb-5">Durham Super Regional</h2>
			{/* @ts-expect-error */}
			<Bracket venue="6519" />
		</>
	)
}