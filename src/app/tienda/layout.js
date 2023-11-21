import Link from 'next/link'

export function layout({children}) {
  return (
    <>
        <div className='barmenu2'>
            <Link href="/tienda/electronica">Electronica</Link>
            <Link href="/tienda/decoracion">Decoracion</Link>
            <Link href="/tienda/mobiliario">Mobiliario</Link>
            <Link href="/tienda/libro">Libros</Link>
        </div>
        {children}
    </>
  )
}

export default layout