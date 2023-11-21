import Link from 'next/link'

export function layout({children}) {
  return (
    <>
        <div className='barmenu1'>
            <Link href="/blog/primero">Blog-Primero</Link>
            <Link href="/blog/segundo">Blog-Segundo</Link>
            <Link href="/blog/tercero">Blog-Tercero</Link>
        </div>
        {children}
    </>
  )
}

export default layout