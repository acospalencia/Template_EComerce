export const Footer = () => {
  return (
    <footer className="bg-black-200 mt-12">
      <div className="max-w-screen-lg mx-auto px-4 py-8">

        {/* Marca */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold">MiTienda</h2>
          <p className="text-sm text-gray-500 mt-1">
            Productos de calidad directo a tu puerta.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <h3 className="font-medium mb-2">Tienda</h3>
            <ul className="space-y-1 text-gray-600">
              <li>Productos</li>
              <li>Ofertas</li>
              <li>Novedades</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-2">Soporte</h3>
            <ul className="space-y-1 text-gray-600">
              <li>Contacto</li>
              <li>Envíos</li>
              <li>Pagos</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t mt-6 pt-4 flex flex-col items-center text-xs text-gray-500">
          <span>© {new Date().getFullYear()} MiTienda</span>
          <span className="mt-1">Todos los derechos reservados</span>
        </div>

      </div>
    </footer>
  )
}
