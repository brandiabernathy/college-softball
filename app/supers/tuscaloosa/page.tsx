
import Bracket from '../../../components/SupersBracket';

export default function TuscaloosaSupers() {

	return (
		<>
			<h2 className="text-3xl mb-5">Tuscaloosa Super Regional</h2>
			{/* @ts-expect-error */}
			<Bracket venue="4991" />
		</>
	)
}