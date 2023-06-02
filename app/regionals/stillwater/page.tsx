
import Bracket from '../../../components/RegionalsBracket';

export default function StillwaterRegional() {

	return (
		<>
			<h2 className="text-3xl mb-5">Stillwater Regional</h2>
			{/* @ts-expect-error */}
			<Bracket venue="6206" />
		</>
	)
}