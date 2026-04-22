import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      {/* Amazon Style Icon or Logo */}
      <div className="mb-6">
        <Link href="/">
          <Image 
            src="/logo.png" 
            alt="Sharia MobiZone" 
            width={150} 
            height={50} 
            className="mx-auto brightness-0" // Black logo look
          />
        </Link>
      </div>

      <h1 className="text-2xl font-bold text-[#e47911] mb-2">
        LO SENTIMOS
      </h1>
      <p className="text-gray-600 mb-6">
        Não conseguimos encontrar essa página. Vá para a página inicial da Sharia MobiZone.
      </p>

      <Link 
        href="/" 
        className="bg-[#ffd814] hover:bg-[#f7ca00] text-black py-2 px-8 rounded-md shadow-sm text-sm font-medium transition-all"
      >
        Ir para a página inicial
      </Link>

      <div className="mt-10 border-t pt-6 w-full max-w-md">
        <p className="text-xs text-gray-400">
          Erro 404 - Página não encontrada
        </p>
      </div>
    </div>
  );
}