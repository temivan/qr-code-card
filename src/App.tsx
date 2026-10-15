import Attribution from './components/Attribution'
import QrCodeCard from './components/QrCodeCard'

export default function App() {
  return (
    <div className="grid min-h-dvh grid-rows-[1fr_auto_1fr] gap-8 bg-slate-300 px-4 py-4">
      <main className="row-start-2 grid place-items-center">
        <QrCodeCard />
      </main>
      <Attribution />
    </div>
  )
}
