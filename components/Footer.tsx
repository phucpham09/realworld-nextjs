import Link from "next/link";

export default function Footer(){
    return(
        <footer>
            <div className="flex gap-4 bg-gray-200 items-center px-16 py-6">
                <Link href={"/"} className="font-semibold text-green-600">conduit</Link>
                <span className="text-gray-400">An interactive learning project from Thinkster. Code licensed under MIT.</span>
            </div>
        </footer>
    )
}