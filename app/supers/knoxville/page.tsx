
import Bracket from '../../../components/SupersBracket';

export default function KnoxvilleSupers() {

	return (
		<>
			<h2 className="text-3xl mb-5">Knoxville Super Regional</h2>
			{/* @ts-expect-error */}
			<Bracket venue="5000" />
		</>
	)
}