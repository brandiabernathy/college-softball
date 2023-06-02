
import Bracket from '../../../components/RegionalsBracket';

export default function EvanstonRegional() {

	return (
		<>
			<h2 className="text-3xl mb-5">Evanston Regional</h2>
			{/* @ts-expect-error */}
			<Bracket venue="6205" />
		</>
	)
}