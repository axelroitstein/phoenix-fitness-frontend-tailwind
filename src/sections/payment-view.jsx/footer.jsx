export default function Footer () {
    return (
<footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="http://localhost:3000" className="flex items-center mb-4 sm:mb-0">
                <img src="https://cdn.discordapp.com/attachments/1144409077531820102/1154811688198082591/phoenix.png" className="h-14 mr-2" alt="Phoenix Logo"/>
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Phoenix Fitness</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">Acerca de</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Política de Privacidad</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">Licencia</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contacto</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="http://localhost:3000" className="hover:underline">Phoenix Fitness©</a>. Todos los derechos reservados.</span>
    </div>
</footer>
)
}