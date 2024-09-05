import Image from "next/image";
import Link from "next/link";
import FavoriteIcon from '@mui/icons-material/Favorite';
export default function Home() 
{
  return(
   //home page
    <div>
      
      {/* BANNER */}
        <div className="">
          <div className="bg-green-500 h-44 text-center content-center drop-shadow-lg">
            <h1 className="text-5xl font-bold text-white p-4 drop-shadow-md">conduit</h1>
            <p className="text-2xl text-white drop-shadow-md">A place to share your <span className="italic">React</span> knowledge.</p>
          </div>
        </div>

        {/*  Page content*/}
        <div>

          {/* left*/}
          <div className="mr-96 ml-20">

              {/* FEED TOGGLE */}
              <div className=" pt-16">
                  <ul className="flex gap-10 outline-[5px]">
                    <li><Link href={""} className="">Your Feed</Link></li>
                    <li><Link href={""} className="border-b-2 border-b-green-500 mb-0">Global Feed</Link></li>
                  </ul>
              </div>

              {/*Article preview 1*/}
              <div className="border-b-2">
                <div className="flex justify-between py-4">
                  <div className="flex gap-2">
                    <Link href={"/profile/eric-simons"}><Image src="http://i.imgur.com/Qr71crq.jpg" alt="" width={40} height={40} className="rounded-full"></Image></Link>
                    <div className="flex flex-col">
                      <Link href={"/profile/eric-simons"} className="text-green-500 hover:underline hover:text-green-600">Eric Simons</Link>
                      <span className="text-xs text-gray-400">January 20th, 2024</span>
                    </div>
                  </div>
                  <button className="text-xs text-green-500 hover:bg-green-500 border border-green-500 p-1 rounded-md hover:text-white">
                    <FavoriteIcon/> 28
                  </button>
                </div>
                <Link href={"/article/how-to-build-webapps-that-scale"}>
                  <h1 className="text-2xl font-semibold">How to build webapps that scale</h1>
                  <p className="text-gray-400">This is the description for the post.</p>
                  <div className="flex justify-between py-3">
                    <span className="text-gray-300">Read more...</span>
                    <ul className="flex gap-1">
                      <li className="border rounded-full text-sm py-1 px-2 text-gray-400">realworld</li>
                      <li className="border rounded-full text-sm py-1 px-2 text-gray-400">implementations</li>
                    </ul>
                  </div>
                  
                </Link>
              </div>

              {/*Article preview 2*/}
              <div className="">
                <div className="flex justify-between py-4">
                  <div className="flex gap-2">
                    {/*de su dung src url thi phai config trong next.config */}
                    <Link href={"/profile/albert-pai"}><Image src="http://i.imgur.com/N4VcUeJ.jpg" alt="" width={40} height={40} className="rounded-full"></Image></Link>
                    <div className="flex flex-col">
                      <Link href={"/profile/albert-pai"} className="text-green-500 hover:underline hover:text-green-600">Albert Pai</Link>
                      <span className="text-xs text-gray-400">January 20th, 2024</span>
                    </div>
                  </div>
                  <button className="text-xs text-green-500 hover:bg-green-500 border border-green-500 p-1 rounded-md hover:text-white">
                    <FavoriteIcon/> 32
                  </button>
                </div>
                <Link href={"/article/how-to-build-webapps-that-scale"}>
                  <h1 className="text-2xl font-semibold">The song you wont ever stop singing. No matter how hard you try.</h1>
                  <p className="text-gray-400">This is the description for the post.</p>
                  <div className="flex justify-between py-3">
                    <span className="text-gray-300">Read more...</span>
                    <ul className="flex gap-1">
                      <li className="border rounded-full text-sm py-1 px-2 text-gray-400">realworld</li>
                      <li className="border rounded-full text-sm py-1 px-2 text-gray-400">implementations</li>
                    </ul>
                  </div>
                  
                </Link>
              </div>

              {/*pagination */}
              <ul className="flex rounded-md my-4">
                <li className="border border-r-0 border-gray-300 p-3 rounded-l-md text-green-500 hover:bg-green-500 hover:text-white">1</li>
                <li className="border border-gray-300 p-3 rounded-r-md text-green-500 hover:bg-green-500 hover:text-white">2</li>
              </ul>
          </div>

          

          {/* right*/}
          <div>

          </div>
        </div>
    </div>
  )
}
