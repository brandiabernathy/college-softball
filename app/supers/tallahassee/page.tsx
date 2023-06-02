
import Bracket from '../../../components/SupersBracket';

export default function TallahasseeSupers() {

	return (
		<>
			<h2 className="text-3xl mb-5">Tallahassee Super Regional</h2>
			{/* @ts-expect-error */}
			<Bracket venue="4999" />
		</>
	)
}