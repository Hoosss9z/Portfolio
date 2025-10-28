
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/60">© {new Date().getFullYear()} Hussein El Moursi — Tous droits réservés.</p>
        <div className="flex gap-6 text-white/70">
          <Link href="https://github.com/Hoosss9z" target="_blank">GitHub</Link>
          <Link href="https://www.linkedin.com/in/hussein-el-moursi-546728206/" target="_blank">LinkedIn</Link>
          <Link href="mailto:elmoursi.hussein9@gmail.com">Email</Link>
        </div>
      </div>
    </footer>
  )
}
