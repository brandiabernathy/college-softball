
import Bracket from '../../../components/RegionalsBracket';

export default function FayettevilleRegional() {

	return (
		<>
			<h2 className="text-3xl mb-5">Fayetteville Regional</h2>
			{/* @ts-expect-error */}
			<Bracket venue="5229" />
		</>
	)
}