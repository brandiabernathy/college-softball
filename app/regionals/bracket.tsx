import Header from '../../components/Header';
import Bracket from '../../components/RegionalBracket';

export default function RegionalBracket() {

  return (
    <>
      <Header />
      <main className="bg-slate-100 py-5">
        <div className="container mx-auto mb-5">
          <Bracket venue="4990" />
        </div>
      </main>
    </>
  )
}
