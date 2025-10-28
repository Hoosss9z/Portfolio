'use client'

import { useState } from 'react'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

type Line = { description: string; qty: number; unit: number }

export default function DevisPage() {
  const [seller, setSeller] = useState('Hussein El Moursi\nMarseille, France')
  const [buyer, setBuyer] = useState('Client\nAdresse')
  const [title, setTitle] = useState('Devis')
  const [number, setNumber] = useState('DV-2025-001')
  const [currency, setCurrency] = useState<'€' | '$' | '£'>('€')
  const [vatRate, setVatRate] = useState(20)
  const [lines, setLines] = useState<Line[]>([
    { description: 'Développement front-end', qty: 1, unit: 500 },
  ])

  const addLine = () => setLines([...lines, { description: '', qty: 1, unit: 0 }])
  const removeLine = (i: number) => setLines(lines.filter((_, idx) => idx !== i))

  const subtotal = lines.reduce((s, l) => s + l.qty * l.unit, 0)
  const vat = Math.round((subtotal * vatRate) as number) / 100
  const total = subtotal + (subtotal * vatRate) / 100

  const money = (n: number) =>
    new Intl.NumberFormat('fr-FR', { style: 'currency', currency: currency === '€' ? 'EUR' : currency === '$' ? 'USD' : 'GBP' }).format(n)

  const exportPDF = () => {
    const doc = new jsPDF()
    const pageWidth = doc.internal.pageSize.getWidth()

    // Header
    doc.setFontSize(18)
    doc.text(title, 14, 18)
    doc.setFontSize(11)
    doc.text(`N° ${number}`, 14, 26)
    doc.text(`Date: ${new Date().toLocaleDateString('fr-FR')}`, 14, 33)

    // Seller / Buyer
    doc.setFontSize(12)
    doc.text('Émetteur', 14, 45)
    doc.text('Client', pageWidth / 2, 45)
    doc.setFontSize(11)
    doc.text(seller, 14, 52)
    doc.text(buyer, pageWidth / 2, 52)

    // Table
    autoTable(doc, {
      head: [['Description', 'Qté', 'PU', 'Montant']],
      body: lines.map((l) => [
        l.description || '-',
        String(l.qty),
        money(l.unit),
        money(l.qty * l.unit),
      ]),
      startY: 80,
      theme: 'grid',
      headStyles: { fillColor: [124, 58, 237] }, // violet
    })

    // Totaux
    const y = (doc as any).lastAutoTable.finalY + 10
    doc.setFontSize(12)
    doc.text(`Sous-total : ${money(subtotal)}`, pageWidth - 14, y, { align: 'right' })
    doc.text(`TVA (${vatRate}%) : ${money(vat)}`, pageWidth - 14, y + 7, { align: 'right' })
    doc.setFontSize(14)
    doc.text(`TOTAL : ${money(total)}`, pageWidth - 14, y + 18, { align: 'right' })

    doc.save(`${number}.pdf`)
  }

  return (
    <section className="container mt-14 md:mt-20">
      <h1 className="text-3xl md:text-4xl font-bold">Générateur de devis</h1>
      <p className="text-white/70 mt-2">Crée, calcule et exporte tes devis en PDF.</p>

      {/* Infos devis */}
      <div className="card mt-6 grid md:grid-cols-3 gap-4">
        <div className="col-span-2">
          <label className="text-sm text-white/70">Titre</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full mt-1 px-3 py-2 rounded-xl bg-white/5 border border-white/15" />
        </div>
        <div>
          <label className="text-sm text-white/70">Numéro</label>
          <input value={number} onChange={(e) => setNumber(e.target.value)} className="w-full mt-1 px-3 py-2 rounded-xl bg-white/5 border border-white/15" />
        </div>
        <div>
          <label className="text-sm text-white/70">Devise</label>
          <select value={currency} onChange={(e) => setCurrency(e.target.value as any)} className="w-full mt-1 px-3 py-2 rounded-xl bg-white/5 border border-white/15">
            <option value="€">€ Euro</option>
            <option value="$">$ USD</option>
            <option value="£">£ GBP</option>
          </select>
        </div>
        <div>
          <label className="text-sm text-white/70">TVA (%)</label>
          <input type="number" value={vatRate} onChange={(e) => setVatRate(Number(e.target.value))} className="w-full mt-1 px-3 py-2 rounded-xl bg-white/5 border border-white/15" />
        </div>
      </div>

      {/* Émetteur / Client */}
      <div className="card mt-6 grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-white/70">Émetteur</label>
          <textarea rows={4} value={seller} onChange={(e) => setSeller(e.target.value)} className="w-full mt-1 px-3 py-2 rounded-xl bg-white/5 border border-white/15" />
        </div>
        <div>
          <label className="text-sm text-white/70">Client</label>
          <textarea rows={4} value={buyer} onChange={(e) => setBuyer(e.target.value)} className="w-full mt-1 px-3 py-2 rounded-xl bg-white/5 border border-white/15" />
        </div>
      </div>

      {/* Lignes */}
      <div className="card mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold">Lignes</h2>
          <button onClick={addLine} className="px-3 py-2 rounded-xl bg-primary hover:shadow-glow">+ Ajouter une ligne</button>
        </div>

        <div className="grid gap-3 text-sm grid-cols-1 md:grid-cols-[7fr_2fr_2fr_1fr]">
          <div>Description</div>
          <div>Qté</div>
          <div>PU</div>
          <div className="text-right">Action</div>
        </div>

      

        {lines.map((l, i) => (
  <div key={i} className="grid grid-cols-12 gap-3 mt-2">
    {/* Description */}
    <input
      className="col-span-6 md:col-span-6 px-3 py-2 rounded-xl bg-white/5 border border-white/15"
      value={l.description}
      onChange={(e) => {
        const copy = [...lines];
        copy[i].description = e.target.value;
        setLines(copy);
      }}
      placeholder="Ex: Développement front-end"
    />

    {/* Quantité */}
    <input
      type="number"
      className="col-span-2 md:col-span-2 px-3 py-2 rounded-xl bg-white/5 border border-white/15"
      value={l.qty}
      onChange={(e) => {
        const copy = [...lines];
        copy[i].qty = Number(e.target.value);
        setLines(copy);
      }}
    />

    {/* Prix unitaire */}
    <input
      type="number"
      className="col-span-2 md:col-span-2 px-3 py-2 rounded-xl bg-white/5 border border-white/15"
      value={l.unit}
      onChange={(e) => {
        const copy = [...lines];
        copy[i].unit = Number(e.target.value);
        setLines(copy);
      }}
    />

    {/* Bouton supprimer */}
    <div className="col-span-2 flex justify-end">
      <button
        onClick={() => removeLine(i)}
        className="px-3 py-2 rounded-xl bg-red-500/80 hover:bg-red-600 transition"
      >
        Supprimer
      </button>
    </div>
  </div>
))}

      </div>

      {/* Totaux + Export */}
      <div className="card mt-6 grid md:grid-cols-2 gap-6 items-start">
        <div>
          <p className="text-white/70">Aperçu des totaux</p>
          <div className="mt-3 space-y-1">
            <div>Sous-total : <span className="font-semibold">{money(subtotal)}</span></div>
            <div>TVA ({vatRate}%) : <span className="font-semibold">{money(vat)}</span></div>
            <div className="text-lg">TOTAL : <span className="font-bold">{money(total)}</span></div>
          </div>
        </div>
        <div className="flex md:justify-end gap-3">
          <button onClick={exportPDF} className="px-5 py-3 rounded-xl bg-secondary hover:shadow-glow font-medium">
            Exporter en PDF
          </button>
        </div>
      </div>
    </section>
  )
}
