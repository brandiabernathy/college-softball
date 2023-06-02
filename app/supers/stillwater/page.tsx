
import Bracket from '../../../components/SupersBracket';

export default function StillwaterSupers() {

	return (
		<>
			<h2 className="text-3xl mb-5">Stillwater Super Regional</h2>
			{/* @ts-expect-error */}
			<Bracket venue="6206" />
		</>
	)
}